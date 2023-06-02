<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task 3</title>
</head>
<body>
  <h1>Task 3</h1>

  <h2>Form</h2>
  <form action="" method="post">
    <label for="name">Name of the treasure:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="value">Value of the treasure:</label><br>
    <input type="number" id="value" name="value"><br>
    <label for="color">Color of the treasure:</label><br>
    <select id="color" name="color">
      <option value="red">Red</option>
      <option value="orange">Orange</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
    </select><br>
    <label for="keep">Keep:</label>
    <input type="radio" id="keep" name="keep" value="true">
    <label for="giveaway">Give away:</label>
    <input type="radio" id="giveaway" name="keep" value="false"><br>
    <input type="submit" value="Submit">
  </form>

  <h2>List of treasures</h2>
  <?php
  session_start();
  
  $filename = 'treasures.json';

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $treasures = json_decode(file_get_contents($filename), true);

    $treasure = [
      'name' => $_POST['name'],
      'value' => intval($_POST['value']),
      'color' => $_POST['color'],
      'keep' => $_POST['keep'] === 'true'
    ];

    $treasures[$treasure['name']] = $treasure;

    file_put_contents($filename, json_encode($treasures));
  }

  $treasures = json_decode(file_get_contents($filename), true);
  
  if ($treasures) {
    echo '<table>';
    echo '<tr><th>Name</th><th>Value</th><th>Color</th><th>Keep</th><th>Action</th></tr>';

    foreach ($treasures as $treasure) {
      echo '<tr>';
      echo '<td>' . htmlspecialchars($treasure['name']) . '</td>';
      echo '<td>' . htmlspecialchars($treasure['value']) . '</td>';
      echo '<td>' . htmlspecialchars($treasure['color']) . '</td>';
      echo '<td>' . ($treasure['keep'] ? 'Yes' : 'No') . '</td>';
      echo '<td><a href="?delete=' . urlencode($treasure['name']) . '">Delete</a></td>';
      echo '</tr>';
    }

    echo '</table>';
  }

  if (isset($_GET['delete'])) {
    $treasures = json_decode(file_get_contents($filename), true);
    unset($treasures[$_GET['delete']]);
    file_put_contents($filename, json_encode($treasures));
    header("Location: " . strtok($_SERVER["REQUEST_URI"],'?'));
  }
  ?>
</body>
</html>
