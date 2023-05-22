<?php
    $cell_classes = [
        ['eligendi', 'deserunt', 'eligendi', 'deserunt', 'pariatur', 'pariatur', 'pariatur'],
        ['eligendi', 'deserunt', 'eligendi', 'deserunt', 'deserunt', 'deserunt', 'pariatur'],
        ['eligendi', 'eligendi', 'eligendi', 'deserunt', 'pariatur', 'pariatur', 'pariatur'],
        ['deserunt', 'deserunt', 'eligendi', 'deserunt', 'pariatur', 'deserunt', 'deserunt'],
        ['deserunt', 'deserunt', 'eligendi', 'deserunt', 'pariatur', 'pariatur', 'pariatur'],
    ];

    $dimensions = [count($cell_classes), count($cell_classes[0])];
    $deserunt_count = 0;

    foreach($cell_classes as $row) {
        foreach($row as $cell) {
            if($cell === 'deserunt') {
                $deserunt_count++;
            }
        }
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

    <h2>Task 1: Output generation from array</h2>

    Array dimensions: <b><?php echo $dimensions[0] . " × " . $dimensions[1]; ?></b>
    <br>
    Total number of <i>deserunt</i> values: <b><?php echo $deserunt_count; ?></b>

    <table>
        <?php
            for($i = 0; $i < $dimensions[0]; $i++) {
                echo "<tr>";
                for($j = 0; $j < $dimensions[1]; $j++) {
                    echo "<td class='" . $cell_classes[$i][$j] . "'>" . ($i+1) . "" . ($j+1) . "</td>";
                }
                echo "</tr>";
            }
        ?>
    </table>
</body>
</html>
