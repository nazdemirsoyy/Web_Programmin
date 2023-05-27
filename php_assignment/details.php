<?php

$playlists = json_decode(file_get_contents('playlists.json'), true);
$users = json_decode(file_get_contents('users.json'), true);
$tracks = json_decode(file_get_contents('tracks.json'), true);

if (!isset($_GET['id']) || !isset($playlists[$_GET['id']])) {
    die('Invalid playlist ID');
}

$playlist = $playlists[$_GET['id']];

$playlistTracks = [];
foreach ($playlist['tracks'] as $trackId) {
    if (isset($tracks[$trackId])) {
        $playlistTracks[] = $tracks[$trackId];
    }
}

require 'details.html.php';
