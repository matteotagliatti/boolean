<?php 
    $text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    $hide = $_GET['cens'];

    echo '<pre>';
    var_dump($text);
    var_dump(strlen($text)); // return the lenght of the string
    var_dump(str_replace($hide, "***", $text));
   echo '</pre>';
?>