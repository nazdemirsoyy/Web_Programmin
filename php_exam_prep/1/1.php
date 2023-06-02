<?php
$errors = [];
$expirationDate = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dob = isset($_POST['dob']) ? $_POST['dob'] : null;
    $doi = isset($_POST['doi']) ? $_POST['doi'] : null;


    try {
        $dob = new DateTime($dob);
        $doi = new DateTime($doi);
    } catch (Exception $e) {
        $errors[] = 'Invalid date format.';
    }


    if ($doi <= $dob) {
        $errors[] = 'Date of issue must be later than date of birth.';
    }


    $age = $dob->diff($doi)->y;


    $expirationDate = clone $doi;
    if ($age < 60) {
        $expirationDate->add(new DateInterval('P10Y'));
    } else {
        $expirationDate->add(new DateInterval('P5Y'));
    }


    $now = new DateTime();
    if ($now > $expirationDate) {
        $errors[] = 'Expired';
    }
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Driving License Expiry Check</title>
</head>
<body>
    <form method="POST">
        Date of birth:
        <input type="date" name="dob" required>
        <br>
        Date of issue:
        <input type="date" name="doi" required>
        <br>
        <button type="submit">Send</button>
    </form>

    <?php 

    if (!empty($errors)) {
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }


    if ($expirationDate !== null && empty($errors)) {
        echo "Expiration Date: " . $expirationDate->format('Y-m-d');
    }
    ?>

</body>
</html>
