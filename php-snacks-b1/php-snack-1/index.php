<?php

/**
 * Creiamo un array contenente le partite di basket di un'ipotetica tappa del calendario.
 * Ogni array avrà una squadra di casa e una squadra ospite, punti fatti dalla squadra di casa e punti fatti dalla squadra ospite.
 * Stampiamo a schermo tutte le partite con questo schema.
        Olimpia Milano - Cantù | 55-60
 *
 */

$array = [
    [
        'casa' => 'Olimpia Milano',
        'ospite' => 'Cantù',
        'punti_casa' => 55,
        'punti_ospite' => 60
    ],
    [
        'casa' => 'Roma',
        'ospite' => 'Juventus',
        'punti_casa' => 65,
        'punti_ospite' => 70
    ],
    [
        'casa' => 'Inter',
        'ospite' => 'Milan',
        'punti_casa' => 75,
        'punti_ospite' => 80
    ],
    [
        'casa' => 'Napoli',
        'ospite' => 'Lazio',
        'punti_casa' => 85,
        'punti_ospite' => 90
    ],
    [
        'casa' => 'Udinese',
        'ospite' => 'Genoa',
        'punti_casa' => 95,
        'punti_ospite' => 100
    ],
    [
        'casa' => 'Sampdoria',
        'ospite' => 'Bologna',
        'punti_casa' => 105,
        'punti_ospite' => 110
    ],
    [
        'casa' => 'Brescia',
        'ospite' => 'Fiorentina',
        'punti_casa' => 115,
        'punti_ospite' => 120
    ],
    [
        'casa' => 'Atalanta',
        'ospite' => 'Torino',
        'punti_casa' => 125,
        'punti_ospite' => 130
    ],
    [
        'casa' => 'Genoa',
        'ospite' => 'Sampdoria',
        'punti_casa' => 135,
        'punti_ospite' => 140
    ],
]

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Snack 1</title>
</head>

<body>
    <p>
        <?php
        foreach ($array as $partita) {
            echo $partita['casa'] . ' - ' . $partita['ospite'] . ' | ' . $partita['punti_casa'] . '-' . $partita['punti_ospite'] . '<br>';
        }
        ?>
    </p>
</body>

</html>