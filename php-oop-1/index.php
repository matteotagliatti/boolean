<?php

class Movie {
    private string $title;
    private string $description;
    private string $director;
    private string $genre;
    private int $year;


    public function __construct(string $title, string $description = null, string $director, string $genre, int $year) {
        $this->title = $title;
        $this->description = $description;
        $this->director = $director;
        $this->genre = $genre;
        $this->year = $year;
    }

    public function setDescription(string $description) {
        $this->description = $description;
    }
}

$dune = new Movie('Dune', 'A good sci-fi movie', 'Denis Villenueve', 'Sci-fi', 2021);
$moonlight = new Movie('Moonlight', 'A heartbreaking story of a young man’s struggle to find himself', 'Barry Jenkins', 'Drama', 2016);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP OOP1</title>
</head>
<body>
    <pre>
        <?php 
            var_dump($dune);
            var_dump($moonlight);
            
            $moonlight->setDescription('One of my favorite movies');
            
            var_dump($moonlight);
        ?>
    </pre>
</body>
</html>