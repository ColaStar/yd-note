<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>
<?php $form = ActiveForm::begin(); ?>
<?php if ($bid) : ?>
    <?= $form->field($model, 'bid')->textInput(['value' => $model->bid, 'disabled' => 'disabled']) ?>
    <?= $form->field($model, 'name')->textInput(['value' => $model->name]) ?>
    <?= $form->field($model, 'img')->textInput(['value' => $model->img]) ?>
    <?= $form->field($model, 'price')->textInput(['value' => $model->price]) ?>
    <?= $form->field($model, 'author')->textInput(['value' => $model->author]) ?>
    <?= $form->field($model, 'Press')->textInput(['value' => $model->Press]) ?>
    <?= $form->field($model, 'introduce')->textInput(['value' => $model->introduce]) ?>
<?php endif;  ?>

<?php if (!$bid) : ?>
<?= $form->field($model, 'name') ?>
<?= $form->field($model, 'img') ?>
<?= $form->field($model, 'price') ?>
<?= $form->field($model, 'author') ?>
<?= $form->field($model, 'Press') ?>
<?= $form->field($model, 'introduce') ?>
<?php endif;  ?>



<div class="form-group">
    <?php if ($bid) : ?>
        <?= Html::submitButton('修改', ['class' => 'btn btn-primary']) ?>
    <?php else : ?>
        <?= Html::submitButton('添加', ['class' => 'btn btn-primary']) ?>
    <?php endif;  ?>
</div>



<?php ActiveForm::end(); ?>