<?php

// Path to your JSON file
$jsonFilePath = 'items.json';

// Load data from JSON file
$data = json_decode(file_get_contents($jsonFilePath), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    switch ($_POST['action']) {
        case 'delete_tag':
            $itemId = $_POST['item_id'];
            $tagIndex = array_search($_POST['tag'], $data[$itemId]['tags']);

            if ($tagIndex !== false) {
                unset($data[$itemId]['tags'][$tagIndex]);
                $data[$itemId]['tags'] = array_values($data[$itemId]['tags']); // Re-index array

                // Write data back to JSON file
                file_put_contents($jsonFilePath, json_encode($data));
            }
            break;
        case 'update_item':
            $itemId = $_POST['item_id'];
            $data[$itemId]['name'] = $_POST['item_name'];

            // Write data back to JSON file
            file_put_contents($jsonFilePath, json_encode($data));
            break;
    }
}
?>

<ul>
    <?php foreach ($data as $id => $item): ?>
        <li>
            <form action="" method="post">
                <input type="hidden" name="action" value="update_item">
                <input type="hidden" name="item_id" value="<?= $id ?>">
                <input type="text" name="item_name" value="<?= $item['name'] ?>">
                <input type="submit" value="Update">
            </form>

            <?php foreach ($item['tags'] as $tag): ?>
                <form action="" method="post" style="display: inline;">
                    <input type="hidden" name="action" value="delete_tag">
                    <input type="hidden" name="item_id" value="<?= $id ?>">
                    <input type="hidden" name="tag" value="<?= $tag ?>">
                    <input type="submit" value="X" style="color: red;">
                    <?= $tag ?>
                </form>
            <?php endforeach; ?>
        </li>
    <?php endforeach; ?>
</ul>
