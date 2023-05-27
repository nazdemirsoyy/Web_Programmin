<?php
session_start();


$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $users = json_decode(file_get_contents('users.json'), true);

    foreach ($users as $user) {
        if ($user['username'] === $username && password_verify($password, $user['password'])) {
            // Successful login, save user in session and redirect to main page
            $_SESSION['user'] = $user;
            header('Location: main.php');
            exit;
        }
    }

    $error = 'Invalid username or password';
}

require 'login.html.php';
