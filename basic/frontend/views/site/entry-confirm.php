<?php
use yii\helpers\Html;
use yii\helpers\Url;
?>
<p>You have entered the following information:</p>

<ul>
    <li><label>Name</label>: <?= Html::encode($model->name) ?></li>
    <li><label>Email</label>: <?= Html::encode($model->email) ?></li>
    <img src="<?php echo Url::to('@web/images/home.jpg'); ?>" >
</ul>