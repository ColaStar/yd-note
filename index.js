// var num = 1;
// console.log(this.num)
// function a(){
//     console.log(this)
//     console.log(++this.num)
// }
// (function(){
//     "use strict"
//     a()
// })();

// function c1(name){
//     if(name) this.name = name
// }
// function c2(name){
//      this.name = name
// }
// function c3(name){
//     this.name = name||'fe'
// }
// c1.prototype.name = '1'
// c2.prototype.name = '2'
// c3.prototype.name = '3'
// console.log(new c1().name+new c2().name+new c3().name)
// console.log(a);
// a();
// var a = 3;
// function a(){
//     console.log(10)
// }
// console.log(a)
// a = 6;
// a()
// console.log(a)
// function a(){
//     var s =1
// }
// var test = {
//     a:1,
//     init:function(){
//       console.log(this.a)
//     }
// }
// test.init()


// 1.请写出弹出值，并解释为什么。(5分)
/**
        console.log(a)   //
        a();
        var a ;

        function a() {
            console.log(10)
        }
        console.log(a)
        a = 6;
        a();
 */
// 答案 function a(){console.log(10)}因为函数提升优先于变量提升、
// 10 函数整体提升后被调用
// 3  因为a变量被赋值后就会覆盖前一个a变量，如果未经过赋值，就是没有意义的，所以不会覆盖
// a is not a function


// 2.请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么(8分)
/**
 * this.a = 20;
var test = {
    a: 40,
    init: ()=>{
        console.log(this.a);
        function go() {
            this.a = 60;
            console.log(this.a);
        }
        go.prototype.a = 50;
        return go;
    }
};
 */
// new(test.init())();
// - 答：
//20，箭头函数改变this指向  ？？？？？？
//50  直接去原型链上找了


// var p = test.init();
// p();
// (去掉代码注释后的答案)：
// 20？？？？？
//60 构造函数优先于原型链


// 3
/** 
var num = 1;

function yideng() {
    "use strict";
    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}
(function () {
    "use strict";
    yideng2();
})();
yideng();
*/
// 答：num is not defined 严格模式下，this禁止指向window但针对于局部作用域
// 2


// 2-1 拓展题(请写出以下代码执行结果)：
/**function C1(name) {
    if (name) this.name = name;
}

function C2(name) {
    this.name = name;
}

function C3(name) {
    this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));
 */
// 答：yideng   
//     undefined  构造函数上的属性优先于原型链
//     fe短路语句
// 3.请写出如下点击li的输出值，并用三种办法正确输出li里的数字。(12分)

// var list_li = document.getElementsByTagName("li");
// for (var i = 0; i < list_li.length; i++) {
    
//     list_li[i].onclick = function (e) {
//         console.log(i);//后++运算符最后的执行结果
//     }
// }
// 输出6
// 方法
// 1.console.log(this.innerHTML);
// 2.console.log(e.target.innerHTML);
// 3.闭包(function(){list_li[i].onclick = function (e) {console.log(i);}})()
// 4.改成局部作用域let


// // 4.写出输出值，并解释为什么。(5分)

// var foo = {name:'foo'};
// function test(o){
//   o.name='test';
//   o={name:'bar'}    
// }
// test(foo);
// console.log(foo);
//打印结果为:
// Object {name: "test"}

// ECMAScript中所有函数的参数都是按值来传递的。
// 在对像参数传递时，最重要的是要理解，所谓的按值传递，意味着函数只能操作对像的属性和值，而不能操作对像本身。
// 所以当重写实参的时候会生成一个新的内存地址跟形参一点关系也没有了 o={name:'bar'}    



// 例子
// var arr1 = ['zyp','zyp','zyp']
// var arr2 = arr1
// arr2 =  ['zyp1','zyp1','zyp1']
// arr2[0] = 'zyp2'
// console.log(arr2) //打印出 ["zyp2", "zyp1", "zyp1"]
// console.log(arr1) //打印出 ["zyp", "zyp", "zyp"]

// [‘zyp’,‘zyp’,‘zyp’]，同时将该堆内存的地址h1001存放在栈内存s103中，
// 然后再在栈内存中开辟一个地址s104同样存放h1001,这时arr1和arr2指向同一块堆内存。
// 不同的是：这时我们又在堆内存中开辟出一块新的地址h1002来存放新数组[‘zyp1’,‘zyp1’,‘zyp1’]，
// 新地址h1002存放在s104中，这时arr2中保存的地址已经由h1001变成了h1002,
//  这时再改变h1002对应的堆内存中的值，便和arr1没有任何关系了。


//undefned   按引用传递更改没有重写成功
//当改成 m.v = 5以后输出5

// // 5.请写出代码执行结果，并解释为什么？（5分）
// function yideng() {
//     console.log(1);
// }
// (function () {
//     if (false) {
//         function yideng() {
//             console.log(2);
//         }
//     }
//     console.log(yideng());
// })();

// 在谷歌下 报错yideng is not a function没有发生完全的函数提升，只声明了但是没有写函数体
//在ie6以下 输出2  会把整个函数提升到当前块级作用域的顶部  
//在火狐  输出1 因为false就不进入那块代码直接调用外部的函数



// // 6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
// // 生以此类推。不允许使用if switch等。（10分）
// 11- Math.ceil(item.indeOf(0)==item.length?(item/10):(item/10+1))

// // 请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(10分)
// Array.from()
// Array.prototype.slice.call()
// [...new set()]


// // 8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
// // 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
// // 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
// // Cruze买给了小王价格是14万。（20分）

// class Car{
//     constructor(color,jiage){
//         this.color = color;
//         this.jiage = jiage
//     }
//     mai(child,name){
//       console.log(this.color + '的' + child + '卖给了' + '小王价格是'+this.jiage)
//     }
// }
// class Cruze extends Car{
//     constructor(color,jiage){
//         super(color,jiage)
//     }
// }
// var newCruze = new Cruze('红色','140000')
// newCruze.mai('Cruze','小王')

// // - 9.请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码？(10分)
// // - 答promise async awit


// // 10.【仔细思考】写出如下代码执行结果，并解释为什么。(12分)
// var length = 10;

// function fn() {
//     console.log(this.length);
// }
// var yideng = {
//     length: 5,
//     method: function (fn) {
//         fn();
//         arguments[0]();
//     }
// };
// yideng.method(fn, 1);
// fn没人调用指向window对象输出10
//arguments[0]()当前的this其实就是qrguments，所以是参数的length
// 注意最外层如果没有声明一个length默认找ifarem的length




// class Car{
//     constructor(color,jiage){
//         this.color = color;
//         this.jiage = jiage
//     }
//     mai(child,name){
//       console.log(this.color + '的' + child + '卖给了' + '小王价格是'+this.jiage)
//     }
// }
// class Cruze extends Car{
//     constructor(color,jiage){
//         super(color,jiage)
//     }
// }
// var newCruze = new Cruze('红色','140000')
// newCruze.mai('Cruze','小王')


console.log(a);
// console.log(yideng);
console.log(typeof yideng(a));
var flag = true;
    if(!flag){
        var a = 1;
    }
if(flag){
    function yideng(a){
        yideng = a;
        console.log('yideng1')
    }
}else{
    function yideng(a){
        yideng = a;
        console.log('yideng2')
    }
}
// 1.当执行上下文的时，在函数级作用域下变量会被提升，在块级作用下(let const 立即执行函数)不会会形成暂时性死区；
// 2. 函数提升比变量提升优先级高
// 3. 在{}形成的块级作用域中会影响函数提升，之提升变量，不提升函数体
// 4. 

