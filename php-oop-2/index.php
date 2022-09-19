<?php

ini_set('display_errors', 1); // Visualize Errors
include_once __DIR__ . "./classes/Card.php";
include_once __DIR__ . "./classes/Cart.php";
include_once __DIR__ . "./classes/Product.php";
include_once __DIR__ . "./classes/UnregisteredUser.php";
include_once __DIR__ . "./classes/RegisteredUser.php";

$product = new Product("Guinzaglio", "Accessori per cani", 2.32);
$product2 = new Product("Cuccia", "Accessori per gatti", 22.99);
$card = new Card("Gianni", "0000111122223333", 2010, 23, 1, "123");

$gianni = new RegisteredUser("Gianni", "email@email.com", "password", $card);
$gianni->getCart()->addProduct($product);

$guest = new UnregisteredUser($card);
$guest->getCart()->addProduct($product);
$guest->getCart()->addProduct($product2);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP OOP 2</title>
</head>

<body>
    <p>Totale del carrello di Gianni: <?php var_dump($gianni->getTotalCartAmount()); // Discounted Price 
                                        ?></p>

    <p>Totale del carrello di utente non registrato: <?php var_dump($guest->getTotalCartAmount()); // Price 
                                                        ?></p>

    <p>Gianni può pagare? <?php var_dump($gianni->pay()); ?>. In quanto la sua carta è scaduta? <?php var_dump($card->isExpired()) ?></p>

    </pre>
</body>

</html>