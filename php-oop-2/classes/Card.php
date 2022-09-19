<?php

class Card
{
    private string $owner;
    private string $number;
    private DateTime $expireDate;
    private string $cvc;

    public function __construct(string $owner, string $number, int $year, int $month, int $day, string $cvc)
    {
        if (strlen($number) != 16 || !is_numeric($number)) {
            throw new TypeError("card number not right");
        }

        if (strlen($cvc) != 3 || !is_numeric($cvc)) {
            throw new TypeError("cvc not rifht");
        }

        $this->owner = $owner;
        $this->number = $number;
        $this->expireDate = DateTime::createFromFormat("Y-m-d", "$year-$month-$day");
        $this->cvc = $cvc;
    }

    /**
     *  get owner
     * @return string
     */
    public function getOwner(): string
    {
        return $this->owner;
    }

    /**
     * get number
     * @return string
     */
    public function getNumber(): string
    {
        return $this->number;
    }

    /**
     *  get expire date
     * @return DateTime
     */
    public function getExpireDate(): DateTime
    {
        return $this->expireDate;
    }

    /**
     * get CVC
     * @return string
     */
    public function getCvc(): string
    {
        return $this->cvc;
    }

    /**
     * check if card is expired
     * @return bool
     */
    public function isExpired(): bool
    {
        return $this->expireDate < new DateTime();
    }
}
