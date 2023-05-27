<?php

session_start();
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}
// Check if the file exists and is readable
if (!is_readable('playlists.json') || !is_readable('users.json') ||!is_readable('tracks.json')  ) {
    die('Cannot read data files');
}

// Get the contents of the JSON files
$playlistsContent = file_get_contents('playlists.json');
$usersContent = file_get_contents('users.json');
$tracksContent = file_get_contents('tracks.json');

if ($playlistsContent === false || $usersContent === false || $tracksContent === false) {
    die('Cannot read data from files');
}

// Decode the JSON data
$playlists = json_decode($playlistsContent, true);
$users = json_decode($usersContent, true);
$tracks = json_decode($tracksContent, true);

if ($playlists === null || $users === null ||$tracks === null  ) {
    die('Cannot decode JSON data. Check the syntax.');
}

//Search
if (isset($_GET['search'])) {
    $searchQuery = $_GET['search'];
    $_SESSION['searchQuery'] = $searchQuery;
    $searchResults = [];

    if ($searchQuery !== '') {
        foreach ($tracks as $track) {
            if (stripos($track['title'], $searchQuery) !== false) {
                $searchResults[] = $track;
            }
        }
    }

    $_SESSION['searchResults'] = $searchResults;

    // Redirect to clear the $_GET['search']
    header("Location: main.php");
    exit();
}

$searchQuery = $_SESSION['searchQuery'] ?? '';
$searchResults = $_SESSION['searchResults'] ?? [];



foreach ($playlists as $key => $playlist) {
    $user_id = $playlist['user_id'];
    if (isset($users[$user_id])) {
        $playlists[$key]['username'] = $users[$user_id]['username'];
    }
    $playlists[$key]['track_count'] = count($playlist['tracks']);
}

require 'main.html.php';
