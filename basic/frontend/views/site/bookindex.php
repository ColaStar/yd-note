<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
use yii\helpers\Url;
?>
<link href="<?php echo Url::to('@web/css/bookindex.css'); ?>" type="text/css" rel="stylesheet" />
<div class="header_box">
    <h1>图书列表</h1>
    <a href="<?php echo Url::to('index.php?r=site/addbook'); ?>">添加</a>
</div>


<table class="table  table-hover table-striped">
    <thead>
        <tr>
            <td>ID</td>
            <td>书名</td>
            <td>图片</td>
            <td>价格</td>
            <td>作者</td>
            <td>出版社</td>
            <td>简介</td>
            <td>操作</td>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($countries as $bookList) : ?>
            <tr>
                <td><?= $bookList->bid ?></td>
                <td><?= $bookList->name ?></td>
                <td><?= $bookList->img ?></td>
                <td><?= $bookList->price ?></td>
                <td><?= $bookList->author ?></td>
                <td><?= $bookList->Press ?></td>
                <td><?= $bookList->introduce ?></td>
                <td>
                    <a href="index.php?r=site/addbook&bid=<?= Html::encode($bookList->bid) ?>">编辑</a>
                    <a href="index.php?r=site/delete&bid=<?= Html::encode($bookList->bid) ?>" onclick="if(confirm('确定删除该条数据?')==false)return false;">删除</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>


<?= LinkPager::widget(['pagination' => $pagination]) ?>