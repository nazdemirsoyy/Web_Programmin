<?php

// JSON data
$json = '{
  "1": {
    "type": "ellipse",
    "x": 30,
    "y": 65,
    "rx": 20,
    "ry": 55
  },
  "2": {
    "type": "circle",
    "x": 30,
    "y": 65,
    "r": 10
  },
  "3": {
    "type": "polyline",
    "points": [
      { "x": 90, "y": 10 },
      { "x": 80, "y": 10 },
      { "x": 80, "y": 120 },
      { "x": 90, "y": 120 },
      { "x": 90, "y": 70 },
      { "x": 110, "y": 120 },
      { "x": 120, "y": 120 },
      { "x": 100, "y": 65 },
      { "x": 120, "y": 10 },
      { "x": 110, "y": 10 },
      { "x": 90, "y": 60 },
      { "x": 90, "y": 10 }
    ]
  },
  "4": {
    "type": "polyline",
    "points": [
      { "x": 5, "y": 60 },
      { "x": 120, "y": 60 },
      { "x": 120, "y": 70 },
      { "x": 5, "y": 70 },
      { "x": 5, "y": 60 }
    ]
  }
}';

// Decode the JSON data to a PHP associative array
$data = json_decode($json, true);
?>

<!-- SVG container -->
<svg width="200" height="150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="red">
  <?php
  foreach ($data as $shape) {
    switch ($shape['type']) {
      case 'ellipse':
        echo "<ellipse cx=\"{$shape['x']}\" cy=\"{$shape['y']}\" rx=\"{$shape['rx']}\" ry=\"{$shape['ry']}\" />";
        break;
      case 'circle':
        echo "<circle cx=\"{$shape['x']}\" cy=\"{$shape['y']}\" r=\"{$shape['r']}\" />";
        break;
      case 'polyline':
        if (count($shape['points']) > 5) {
          $points = array_reduce($shape['points'], function ($carry, $point) {
            return $carry . "{$point['x']},{$point['y']} ";
          }, '');
          echo "<polyline points=\"{$points}\" />";
        }
        break;
    }
  }
  ?>
</svg>
