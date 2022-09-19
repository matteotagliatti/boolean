<?php

require_once __DIR__ . "./Card.php";
require_once __DIR__ . "./Cart.php";

class User
{
    protected string $name;
    protected string $email;
    protected string $password;
    protected Card $card;
    protected Cart $cart;

    public function __construct(string $name, string $email, string $password, Card $card = null)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->card = $card;
        $this->cart = new Cart();
    }

    /**
     * get user name
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * get card
     * @return Card
     */
    public function getCard(): Card
    {
        return $this->card;
    }

    /**
     * get cart
     * @return Cart
     */
    public function getCart(): Cart
    {
        return $this->cart;
    }

    /**
     * get total cart amount
     * @return float
     */
    public function getTotalCartAmount(): float
    {
        return $this->cart->getTotal();
    }

    /**
     * pay for products in the cart
     * @return bool
     */
    public function pay(): bool
    {
        return !$this->card->isExpired();
    }
}
