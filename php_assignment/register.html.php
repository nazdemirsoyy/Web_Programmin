<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="style/register.css">
</head>
<body>
    <h1>Register</h1>
    <form action="register.php" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required value="<?= $username ?? '' ?>">
        
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required value="<?= $email ?? '' ?>">
        
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
        
        <label for="passwordConfirm">Confirm Password</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" required>
        
        <input type="submit" value="Register">
    </form>
    <?php if ($error): ?>
        <p><?= $error ?></p>
    <?php endif; ?>
    <a href="login.php">Already have an account? Login here.</a>
</body>
</html>
