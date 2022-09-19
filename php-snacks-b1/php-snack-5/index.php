<?php

/**
 * Prendere un paragrafo abbastanza lungo, contenente diverse frasi. Prendere il paragrafo e suddividerlo in tanti paragrafi. Ogni punto un nuovo paragrafo.
 */

$para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dictum nisl, quis lobortis nulla. Fusce volutpat eu ante ac semper. Proin tristique turpis ac justo hendrerit auctor. Nullam augue turpis, pulvinar id fermentum nec, pulvinar nec nisl. Etiam mollis sapien sem. Aenean aliquet nibh feugiat lacus ornare, id condimentum felis tristique. Nulla pellentesque finibus mi id bibendum. Praesent hendrerit accumsan magna eu pulvinar. Donec vehicula, enim elementum eleifend elementum, nisl leo gravida felis, a mollis orci purus sagittis enim. Morbi efficitur ullamcorper porta. Phasellus scelerisque sapien vitae lacus efficitur iaculis. Suspendisse potenti. Aenean quis iaculis ipsum, sed dapibus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo ac turpis imperdiet mollis sit amet ac turpis. Mauris rutrum ligula vitae ligula elementum vestibulum eget eu augue. Fusce non orci tortor. Nulla ante tellus, varius nec egestas vel, scelerisque vel ligula. Nulla vel quam porta nulla venenatis interdum vitae sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc libero felis, interdum vitae nunc sit amet, tempor suscipit purus. Sed consectetur ex tellus, eu porta sapien convallis ac. Nam eros ipsum, sagittis hendrerit fringilla id, bibendum porttitor ipsum. Nunc fringilla feugiat est, non tempus felis iaculis eget. Phasellus sollicitudin maximus libero, nec tincidunt nibh fermentum eget. Pellentesque tincidunt velit sit amet sagittis porttitor.";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Snack 5</title>
</head>

<body>
    <?php
    $para = explode(".", $para);
    foreach ($para as $p) {
        echo "<p>$p</p>";
    }
    ?>
</body>

</html>