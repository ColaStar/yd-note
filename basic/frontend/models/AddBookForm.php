<?php

namespace app\models;

use Yii;
use yii\base\Model;

class AddBookForm extends Model
{
    public $bid;
    public $name;
    public $img;
    public $price;
    public $author;
    public $Press;
    public $introduce;

    public function rules()
    {
        return [
            [['name','img','price','author','Press','introduce'], 'required'],
        ];
    }
}