
## css3开发常备核心技能
- 早期的双飞翼布局 + css HACK
- 基于移动端的PX与REM的转换兼容方案
- 弹性盒模型与Reset的选择
- 自制的ICON-FONT与常用字体排版
- CSS代码检测与团队项目规范
- CSS绘制特殊图形 高级技巧
- BFC IFC GFC FFC

**双飞翼布局 + css HACK**
- 双飞翼布局与圣杯模型：（早期给ie用的，）  
圣杯布局和双飞翼布局基本上是一致的，都是两边固定宽度，中间自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染。解决方案大体相同，都是三栏全部float:left浮动，区别在于解决中间栏div的内容不被遮挡上；  
圣杯布局是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话）   
```
#HTML
<div class="bg">
    <div class="middle">middle</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
#CSS
*{
    padding:0;
    margin:0;
}
.bg{
    padding:0 180px 0 200px;
}
.middle{
    width:100%;
    background:yellow
}
.left{
    width:200px;
    background:red;
    position:relative;
    margin-left:-100%;
    left:-200px
}
.right{
    width:180px;
    background:yellowgreen;
    position:relative;
    left:-180px;
    margin-left:-180px
}
.right,.left,.middle{
  float:left;
  height:100px
}
```
**双飞翼布局**是在中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right，效果上表现为左右两栏在中间栏的上面，中间栏还是100%宽度，只不过中间栏的内容通过margin的值显示在中间。
```
#HTML
<div class="bg">
    <div class="middle">
    <div class="inst">middle</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>

#CSS
*{
    padding:0;
    margin:0
}
.right,.left,.middle{
  float:left;
  height:100px
}
.middle{
    width:100%;
    background:red;
}
.left{
    width:180px;
    background:yellow;
    margin-left:-180px
}
.right{
    width:200px;
    background:yellowgreen;
    margin-left:-200px
}
.inst{
    padding:0 200px 0 180px
}
```
- CSS布局--多列布局等高  
1.利用 负margin 和 正padding 对冲实现(在父元素加overflow:hidden)



- **怪异盒模型与标准盒模型**
两种模式可以利用**box-sizing**属性进行自行选择：--
   标准模式（W3C标准盒模型）：box-sizing:content-box;
   怪异模式（IE标准的盒子模型）：box-sizing:border-box;
> 两种模式的**区别**：
标准模式会被设置的padding撑开，而怪异模式则相当于将盒子的大小固定好，再将内容装入盒子。盒子的大小并不会被padding所撑开。
**标准模式**：盒子总宽度/高度 = 内容区宽度 /高度+padding+border + margin
**怪异盒模型**：盒子总宽度/高度 = 内容区宽度 /高度+ margin
> 如何解决样式的兼容性问题
建议不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到其父元素和子元素上。
- **弹性布局**
flex是CSS3的新属性，又叫弹性布局盒模型，是可以简洁，快速弹性布局的属性。  

<div align="center">
<img src="./images/flex-content.png"/>
</div>
<div align="center">
<img src="./images/flex-item.png"/>
</div>


**flex的兼容写法**
```
//flex浏览器兼容性
//IE10部分支持2012，需要-ms-前缀
//Android4.1/4.2-4.3部分支持2009 ，需要-webkit-前缀
//Safari7/7.1/8部分支持2012， 需要-webkit-前缀
//IOS Safari7.0-7.1/8.1-8.3部分支持2012，需要-webkit-前缀

.box{
 
    display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
    display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;      /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;   /* 混合版本语法: IE 10 */   
 
 }
 
.flex1 {            
    -webkit-flex: 1;        /* Chrome */  
    -ms-flex: 1             /* IE 10 */  
    flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */
    -webkit-box-flex: 1     /* OLD - iOS 6-, Safari 3.1-6 */  
    -moz-box-flex: 1;       /* OLD - Firefox 19- */       
}
```

- **水平垂直居中方式**

```
//利用定位进行s水平垂直居中
//方法一
.parent{
position:relative;
}
.child{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
}
//方法二
.parent{
    position:relative;
}
.child{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:50px;
}
//方法三
.child{
    position:absolute;
    top:50%;
    left:50%;
    transfrom:translate(-50%,-50%)
}
利用flex水平垂直居中
.parent{
    display:flex;
    just-content:center;
    align-item:center
利用table-cell
{
    display:table-cell;
    text-align:center;
    vertical-align:center
}
利用grid网格布局
.parent {
    display: grid;
}
.child {
    align-self: center;
    justify-self: center;
}

```
### CSS分层与面向对象
理论基础：