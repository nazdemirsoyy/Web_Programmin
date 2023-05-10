<?php 
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $age = $_POST['age'] ?? '';
    $phone = $_POST['phone'] ?? '';

    $accept = $_POST['accept'] ?? false;
    $accept = filter_var($accept, FILTER_VALIDATE_BOOLEAN);

    $errors = [];
if($_POST){
    if($fullname === ''){
        $errors['fullname'] = "Fullname is required.";
    } else if(count(explode(' ', $fullname)) < 2){
        $errors['fullname'] = "Fullname must be at least 2 words.";
    }
    
    if($email === ''){
        $errors['email'] = "E-mail is required.";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format";
    } 
    if($age === ''){
        $errors['age'] = "Age is required.";
    } else if (false === filter_var($age, FILTER_VALIDATE_INT)) { //false === type match bc of 0
        $errors['age'] = "Age is not an integer!";
    }

    if(!$accept){
        $errors['accept'] = "Checkbox must be checked";
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "validate.php" method = "POST" novalidate>
    Full name: <input type ="text" name = "fullname" value ="<?= fullname ?>"> <?= $errors['fullname'] ?? ''?><br>
    E-mail: <input type ="email" name = "email" value ="<?= email ?>"> <?= $errors['email'] ?? ''?><br>
    Phone number: <input type ="text" name = "phone" value ="<?= phone ?>"><?= $errors['phone'] ?? ''?><br>
    Age: <input type ="number" name = "age" value ="<?= age ?>"> <?= $errors['age'] ?? ''?><br>
    <input type ="checkbox" name = "accept"<?= $accept ? 'checked' : '' ?> > Accep ToS <?= $errors['accept'] ?? ''?><br>
    <button type = "submit"> Send <br>

</form>
</body>
</html>