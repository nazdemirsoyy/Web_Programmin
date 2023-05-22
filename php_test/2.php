<?php
    $number = $_GET['number'] ?? '';
    $operation = $_GET['operation'] ?? '';
    $errors = [];
    $result = null;

    if ($number === '') {
        $errors[] = "Number is required.";
    } elseif (!filter_var($number, FILTER_VALIDATE_INT)) {
        $errors[] = "Number must be an integer.";
    }

    if ($operation === '') {
        $errors[] = "Operation is required.";
    } elseif ($operation !== 'square' && $operation !== 'cube') {
        $errors[] = "Operation must be either 'square' or 'cube'.";
    }

    if (empty($errors)) {
        $number = intval($number);
        if ($operation === 'square') {
            $result = $number * $number;
            $output = "The square of {$number} is {$result}.";
        } else {
            $result = $number * $number * $number;
            $output = "The cube of {$number} is {$result}.";
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

    <h2>Task 2: Form input</h2>
    <form action="2.php" method="GET" novalidate>
        <label for="i1">Number:</label>
        <input type="text" name="number" id="i1" value="<?= $number ?>">
        <br>
        <label for="i2">Operation:</label>
        <input type="text" name="operation" id="i2" value="<?= $operation ?>">
        <br>
        <button type="submit">Calculate</button>
    </form>

    <?php
    if (!is_null($result)) {
        echo "<p>{$output}</p>";
    } else {
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }
?>

</body>
</html>
