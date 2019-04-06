> ECMAScript6简介

ES6转ES5编码器：babel与谷歌的Traceur
- babel
```
1.安装babel
2.创建配置文件.babelrc
3.安装插件
```
- Traceur
```
不推荐使用
方式一、直接引用三个js
方式二、安装包traceur
```


> let和const命令
- 1.let 声明变量可以更改，const声明常量不可以修改（对于对象来说可以更改值，不能修改对象的引用地址）
```
let a = 1;
a =2;

const a = 2;
a = 3  //报错
const b = {a:1}
b.a=2  //   b = {a:2}
b = {a:2}  //报错 
```
- 2.块级作用域

```
var arr = [];
for(var i = 0;i<arr.length;i++){
    arr.push(function(){console.log(i)})
}
arr.forEach(function(fn){
    fn()
})//输出10次10

//es6
var arr = [];
for(let i = 0;i<arr.length;i++){
    arr.push(function(){console.log(i)})
}
arr.forEach(fn=>fn())//输出0-9
```

- 3.暂时性死区
解释：如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错（比如赋值，typeof等)
```
var tmp = 123
if(true){
    tmp ='dad'  //报错
    let tmp
}
```
- 4.不存在变量提升；
- 5.不允许重复声明


> 模板字符串

字符串的格式化，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量（将变量名写入${}中，{}中可以放入任意javascript的表达式）。

> 展开运算符...

1.组装对象或数组
```
//数组
const a = [1,2,3,4]
const b = [...a,5,6]  //[1,2,3,4,,5,6]

//对象
const obj = {a:1}
const obj1 = {...obj,b:2}  //{a:1,b:2} 

```
2.获取数组或者对象除了前几项或者除了某几项的其他项。

```
const a = [1,2,3,4];
[first,second,...s] = a
console.log(s)   //[3,4]

const b = {a:1,b:2}
const {a,...d} = b
console.log(d)//{b:2} 

```
3.对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边。

```
const a = {a:1,b:2}
const b = {b:5,c:6}
const c = {...a,...b}
console.log(c)   //{a:1,b:5,c:6}
 ```

 > 解构

 在ES6之前我们就是这样获取对象信息的，一个一个获取。现在，解构能让我们从对象或者数组里取出数据存为变量
 ```
 //对象
 const a = {c:'sa',b:2};
 const {c,b} = a;
 console.log(`${c}----${b}`)//sa----2

 //数组
const a = [1,2,3,4,5,6];
const [s,d,f,g,h,...j] = a;
console.log(s,d,f,g,h,j)//1 2 3 4 5 [6]

//字符串的解构赋值
const [a,b,c] = '123'
console.log(a,b,c)  //1 2 3
const {length:len} = '123a'
console.log(len)   //4

//函数参数的解构赋值
function add([x,y]){
    return x+y
}
add([1,2]) //3

 ```

 例题：
 ```
 var jsonParse = require('body-parser').jsonParse
 var body = request.body;
 var username = body.username;
 var password = body.password

 var {body,body:{username,password}} = request
 e5->e6
 import { jsonParse } from 'body-parser'

 ```

 > 对象

```
var obj = {};
Object.assgin(obj)//复制一个对象

//动态设置对象的key值
var i = 'arr'
obj = {
   [i+1]:2
}//obj:{arr1:2}

NaN == NaN
Object.is(NaN ,NaN)   //判断俩个值是不是相同的值
Obiect.create()   //创建对象
Object.getSrotoytpeOf() //获取原型
Object.setSrotoytpeOf() //设置原型(对象，原型)
可以直接设置__proto__
对象重写父类的方法  用super重新执行,```super```，指向当前对象的原型对象。
const drink = {
    getDrink(){
        return '啤酒';
    }
}
let sunday = {
    __proto__: drink,
    getDink(){
        return super.getDrink()+'daskd'
    }
}
```

- 属性的赋值器（setter）和取值器（getter）

```
const cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
cart.wheels   //4
```


> 函数

- name属性
```
var fn = function (){}
console.log(fn.name)   //fn
```

- 箭头函数

```
注意：
1.改变this指向所属对象的顶级作用域，而不是使用的函数;

this.lives = 6
const cat = {
   lives: 9,
   jumps: () => {
     this.lives--;
     console.log(this.lives)
   }
 }

cat.jumps()

2.不可以当做构造函数，也就是说不可以使用new命令，否则抛出错误；
3.不可以使用arguments对象，该参数不存在，可以使用rest参数代替（...扩展运算符）
4.不可以使用yield命令，因此箭头函数不能用作Generator函数
5.不能使用call、apply、bind改变this指向

(()=>{
    console.log('1')
})()

[1,2,3,4,5,6,7,8,9,10].map(parseInt)   //[1,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,10]

```

- 双冒号运算符::

```
函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。用于代替call,apply,bind
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}
var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```
- 给函数默认参数
```
function test(a=1,{option=true}={}){
   console.log(a,option)
}
test()
```
- 用...扩展运算符代替arguments
```
function test(...result){
    console.log(result)
}
```
> Iterator
  
  是个遍历器、是一个数据结构、保证每次执行都有一个next()
```
let a = function*(){
    yield '1'
    yield '2'
}
const b = a()
b.next()  // 1
b.next()  // 2
```

- for of遍历数组的值
遍历对象的时候可以使用Object.keys
```
const arr = [1,2,3]
for(let i of arr){
    console.log(i)//1 2 3
}
for in遍历的是索引
```
> Generator

> Class
1.Class可以看做是构造函数的另一种写法
```
class Point {

}

typeof Point //function类的数据类型是函数
Point ===Point.prototype.constructor  //true
prototype对象上的constructor属性直接指向类的本身
```
2.类的所有方法都定义在构造函数的prototype上
在类的实例上调用方法其实就是调用原型上的方法
3.类内部的方法都是不可以枚举的不能使用es6的keys枚举，可以使用es5的getOwnPropertyNames()枚举
4.类必须使用new调用，生成类的实例也需要new
5.constructor方法
- constructor方法默认返回实例对象（即this），完全可以指定返回另一个对象
```
class a{
    constructor(){
        return Object.create(null)
    }
}
new Foo() instanceof Foo  //false
```
6.类的所有实例共享一个原型,所以可以通过实例的__proto__属性为类添加方法（但是不推荐，因为这会改变类的原始定义，影响到所有实例）

```
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
```
7.取值函数与存值函数
与ES5一样，在类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```
class Point{
    constructor(food){
        this.food = food
    }
    get eat(){
        return this.food
    }
    set eat(value){
        this.food = value
    }
}
const p1 = new Point('馒头')
console.log(p1.eat) //馒头
p1.eat = '花卷'
console.log(p1.eat)// 花卷

```

8.属性表达式
类的属性名，可以采用表达式
```
let a = 'eat'

class index{
    constrcutor(){}
    [a](){
        //...
    }
}
```

9.Class表达式
与函数一样，类也可以使用表达式的形式定义
```
const MyClass = class Me{
    getClassName(){
        return Me.name
    }
}
//注意类的名字Me只能在函数内部使用，在函数外部只能使用Myclass引用

const MyClass = new class {
    constrcutor(name){
        this.name = name
    }
    getClassName(){
        console.log(name)
    }
}('张三')
```
10。静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
1）.静态方法中的this指向的不是实例对象而是指向的类；
2）父类的静态方法可以被子类继承
3）静态方法也可以从super对象调用。

```
class Foo {
  static classMethod(){return 'hello'}
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function


class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```

11.静态属性

静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

```
class Foo {
     static myStaticProp = 42;
     constructor() {
         console.log(MyClass.myStaticProp); // 42
     }
}

Foo.prop = 1;
Foo.prop // 1
```
12.私有方法和私有属性

私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。 


```
将私有方法移出模块，因为模块内部的所有方法都是对外可见的。

class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}


利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值

const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};

私有属性的提案方法是在属性或方法名前加#表示
```

13.new.target属性

1).确保构造函数必须使用new命令调用
2).子类继承父类时，new.target会返回子类
```
利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
```
3).在函数外部，使用new.target会报错

14.注意：
1）类不存在变量提升
2）在类内部默认的就是严格模式.
3）name属性   
class a{} 
a.name   //a
4）Generator方法
在某个方法前边之前加上*就表示这个方法是一个Generator函数
5）this指向
this默认指向类的实例  如果想要把类中的方法单独提出来使用，需要this指向到window，可以使用bind，箭头函数等,可以使用 

> Class继承

- 1.简介
1).ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

2).如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
```
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```
3)在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color; // ReferenceError
    super(x, y);
    this.color = color; // 正确
  }
}
4).子类的实例对象同时也是父类的实例对象
5).父类的静态方法，也会被子类继承


- 2.Object.getPrototypeof()
Object.getPrototypeOf方法可以用来从子类上获取父类。
```
Object.getPrototypeOf(ManPoint) === Point
// true
可以使用此方法判断一个类是否继承了另一个类
```

- 3.super关键字
1).第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
super作为函数只能在子类的构造函数中使用，在其他地方使用会报错。
super虽然代表父类的构造函数，但是返回的是子类的实例，即super内部的this指向的子类的实例，相当于父类.prototype.constructor.call(this)

```
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B

```
2).super作为对象时在普通方法中指向父类的原型对象，在静态方法中指向父类。由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。如果定义在父类的原型上就可以取得到。
```
class A {
  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.p;
  }
}

let b = new B();
b.m // undefined



class A {}
A.prototype.x = 2;

class B extends A {
  constructor() {
    super();
    console.log(super.x) // 2
  }
}

let b = new B();
```
在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。

```
class A {
  constructor() {
    this.x = 1;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined            A.prototype.x
    console.log(this.x); // 3
  }
}

let b = new B();
```
如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

```
class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg);
  }

  myMethod(msg) {
    super.myMethod(msg);
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2
```
在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。

```
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```
使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。

由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。



- 4.类的prototype属性和__proto__属性

1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

```
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

Object.setPrototypeOf方法的实现
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。



- 5.原生构造函数的继承

ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。下面是一个继承Array的例子。
```
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined

所以，extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数

```

```
class Person{
   constructor(age){
this.age = age
   }
   test(){
       console.log(`年龄是${this.age}`)
   }
}
class Man extends Person{
    constructor(age){
        super(age)
        this.arr = []
    }
    set menu(data){
this.arr.push(data)
    }
    get menu(){
return this.arr
    }
    tell(){
        super.tell();
        console.log('xiaolv')
    }
}
const xiaolv = new Person(30)
//console.log(xiaolv.age) //30
//console.log(xiaolv.tell()) //30
xiaolv.menu = 44;
console.log(xiaolv.menu)
```

    

> Set、Map

Set 
> Module





