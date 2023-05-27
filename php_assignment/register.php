<?php
session_start();

// Initialize $error
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordConfirm = $_POST['passwordConfirm'];
    
    # Registration form: validation, error messages, keeping the form state.
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid email format';
    } elseif ($password !== $passwordConfirm) {
        $error = 'Passwords do not match';
    } else {
        // Form is valid, save user and redirect to login
        $users = json_decode(file_get_contents('users.json'), true);
        $users[] = [
            'username' => $username,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'isAdmin' => false,
        ];
        file_put_contents('users.json', json_encode($users));
        
        header('Location: login.php');
        exit;
    }
}

require 'register.html.php';
