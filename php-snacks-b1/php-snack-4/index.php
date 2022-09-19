<?php

/**
 * Creare un array con 15 numeri casuali, tenendo conto che l'array non dovrà contenere lo stesso numero più di una volta
 */

$random_number_array = range(0, 100); // Generate array elements
shuffle($random_number_array); // Shuffle array
$random_number_array = array_slice($random_number_array, 0, 15); // Get first 15 elements

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Snack 4</title>
</head>

<body>
    <?php
    echo "<pre>";
    print_r($random_number_array);
    echo "</pre>";
    ?>
</body>

</html>