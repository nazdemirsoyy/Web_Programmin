<!DOCTYPE html>
<html>
<head>
    <title>Playlist Details</title>
    <link rel="stylesheet" type="text/css" href="style/details.css">
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <h1>Details for <?= htmlspecialchars($playlist['name']); ?></h1>
    <p>Created by: <?= htmlspecialchars($users[$playlist['user_id']]['username']); ?></p>

    <div class="container">
        <?php 
        $totalTime = 0;
        foreach ($playlistTracks as $track): 
            $totalTime += $track['length'];
        ?>

        <div class="track" style="background-color: #f7efd2; ">
            <h2><?= htmlspecialchars($track['title']); ?></h2>
            <p>Artist: <?= htmlspecialchars($track['artist']); ?></p>
            <p>Length: <?= htmlspecialchars($track['length']); ?> seconds</p>
            <p>Year: <?= htmlspecialchars($track['year']); ?></p>
            <p>Genres: <?= implode(', ', array_map('htmlspecialchars', $track['genres'])); ?></p>
        </div>

        <?php endforeach; ?>
    </div>

    <p>Total playing time: <?= $totalTime ?> seconds</p>
</body>
</html>
