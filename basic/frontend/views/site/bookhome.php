<?php

/* @var $this yii\web\View */

use yii\helpers\Html;
use yii\helpers\Url;

// use app\models\BookList;

// // 获取 country 表的所有行并以 name 排序
// $books = BookList::find()->orderBy('bid')->all();
// var_dump($books);
// // 获取主键为 “US” 的行
// $book = BookList::findOne('7');

// // 输出 “United States”
// echo $book->name;

// // 修改 name 为 “U.S.A.” 并在数据库中保存更改
// $book->name = 'U.S.A.';
// $book->save();

$this->title = '首页';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
<img src="<?php echo Url::to('@web/images/home.jpg'); ?>" >

    <!-- <h1><?= Html::encode($this->title) ?></h1>

    <p>This is the About page. You may modify the following file to customize its content:</p>

    <code><?= __FILE__ ?></code> -->
</div>
