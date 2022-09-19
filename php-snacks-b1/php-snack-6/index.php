<?php

/**
 * Utilizzare questo array: https://pastebin.com/CkX3680A. Stampiamo il nostro array mettendo gli insegnanti in un rettangolo grigio e i PM in un rettangolo verde.
 */

$db = [
    'teachers' => [
        [
            'name' => 'Michele',
            'lastname' => 'Papagni'
        ],
        [
            'name' => 'Fabio',
            'lastname' => 'Forghieri'
        ]
    ],
    'pm' => [
        [
            'name' => 'Roberto',
            'lastname' => 'Marazzini'
        ],
        [
            'name' => 'Federico',
            'lastname' => 'Pellegrini'
        ]
    ]
];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Snack 6</title>
</head>

<body>
    <?php
    foreach ($db['pm'] as $pm) {
        echo "<div style='background-color: grey'>";
        echo $pm['name'] . " " . $pm['lastname'];
        echo "</div>";
    }

    foreach ($db['teachers'] as $teachers) {
        echo "<div style='background-color: green'>";
        echo $teachers['name'] . " " . $teachers['lastname'];
        echo "</div>";
    }
    ?>
</body>

</html>