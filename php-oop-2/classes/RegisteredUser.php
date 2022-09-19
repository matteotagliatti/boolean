<?php

include_once __DIR__ . "./User.php";

class RegisteredUser extends User
{
    private float $discount = 0.2;

    public function __construct(string $username, string $email, string $password, Card $card)
    {
        parent::__construct($username, $email, $password, $card);
    }

    /**
     * get discount on total cart amount
     * @return float
     */
    public function getTotalCartAmount(): float
    {
        $cartTotal = parent::getTotalCartAmount();
        return $cartTotal -= $cartTotal * $this->discount;
    }
}
