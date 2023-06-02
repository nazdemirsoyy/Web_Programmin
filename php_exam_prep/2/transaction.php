<?php
session_start();

if (!isset($_SESSION['balance'])) {
    $_SESSION['balance'] = [
        'gold' => 10,
        'silver' => 0
    ];
}

$gold = isset($_POST['gold']) ? intval($_POST['gold']) : 0;
$silver = isset($_POST['silver']) ? intval($_POST['silver']) : 0;
$operation = isset($_POST['operation']) ? $_POST['operation'] : 'income';

if ($operation === 'income') {
    $_SESSION['balance']['gold'] += $gold;
    $_SESSION['balance']['silver'] += $silver;
} else if ($operation === 'expense') {

    while ($silver > $_SESSION['balance']['silver'] && $_SESSION['balance']['gold'] > 0) {
        $_SESSION['balance']['gold'] -= 1;
        $_SESSION['balance']['silver'] += 12;
    }


    if ($gold <= $_SESSION['balance']['gold'] && $silver <= $_SESSION['balance']['silver']) {
        $_SESSION['balance']['gold'] -= $gold;
        $_SESSION['balance']['silver'] -= $silver;
    }
}


if ($_SESSION['balance']['silver'] >= 12) {
    $_SESSION['balance']['gold'] += intdiv($_SESSION['balance']['silver'], 12);
    $_SESSION['balance']['silver'] %= 12;
}

header('Content-Type: application/json');
echo json_encode([
    'timestamp' => date('Y-m-d H:i:s'),
    'balance' => $_SESSION['balance']
]);
?>
