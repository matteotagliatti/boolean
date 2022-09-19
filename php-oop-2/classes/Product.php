<?php

class Product
{
    private string $name;
    private string $category;
    private float $price;


    public function __construct(string $name, string $category, float $price)
    {
        $this->price = $price;
        $this->name = $name;
        $this->category = $category;
    }

    /**
     * get product name
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * get product category
     * @return string
     */
    public function getCategory(): string
    {
        return $this->category;
    }

    /**
     * get product price
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }
}
