<!DOCTYPE html>
<html>
<head>
    <title>Spotify</title>
    <link rel="stylesheet" type="text/css" href="style/main.css">
</head>
<body>
    <h1>Spotify</h1>
    <!--<p>Welcome to Spotify, your destination to explore, share and create music playlists. Browse through public playlists and delve into the world of music.</p>-->

<form action="main.php" method="get">
    <input type="text" name="search" placeholder="Search by title">
    <input type="submit" value="Search">
</form>

<?php if ($searchQuery !== ''): ?>
        <h1>Search Results</h1>
        <?php
        if (empty($searchResults)) {
            echo "<p>No results found.</p>";
        } else {
            foreach ($searchResults as $track) {
                echo "<p>{$track['title']} by {$track['artist']}</p>";
            }
        }
        ?>
    <?php endif; ?>


    <?php foreach ($playlists as $playlist): ?>
        <div>
            <h2><?= htmlspecialchars($playlist['name']); ?></h2>
            <p><?= htmlspecialchars($playlist['track_count']); ?> tracks</p>
            <p>Created by: <?= htmlspecialchars($playlist['username']); ?></p>
            <a href="details.php?id=<?= urlencode($playlist['id']); ?>">View Details</a>
        </div>
    <?php endforeach; ?>


</body>
</html>
