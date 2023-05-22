<?php
    $jsonPath = '3.json';
    $data = json_decode(file_get_contents($jsonPath), true);

    if (isset($_GET['insert'])) {
        $newId = uniqid();
        $data[$newId] = [
            'fullname' => 'Naz Demirsoy', 
            'count' => rand(1, 100), 
            'id' => $newId
        ];

        file_put_contents($jsonPath, json_encode($data));
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>PHP GROUP TEST</title>
</head>
<body>
    <h1>PHP GROUP TEST</h1>

    <h2>Task 3: File storage</h2>
    <!--XY: 42 I assume it's not needed -->


<?php
    foreach ($data as $id => $entry) {
        echo "<p>{$entry['fullname']}: {$entry['count']}</p>";
    }
?>
    <br><a style="color:green; font-weight: bold;" href="3.php?insert=1">Insert my record</a>
</body>
</html>
