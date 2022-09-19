<?php

class Cart
{
    private array $products;

    public function __construct()
    {
        $this->products = [];
    }

    /**
     * add product to cart
     * @param Product $product
     * @return void
     */
    public function addProduct(Product $product): void
    {
        array_push($this->products, $product);
    }

    /**
     *  get products
     * @return array
     */
    public function getProducts(): array
    {
        return $this->products;
    }

    /**
     * get total price
     * @return float
     */
    public function getTotal(): float
    {
        $total = 0.0;

        foreach ($this->products as $product) {
            $total += $product->getPrice();
        }

        return $total;
    }
}
