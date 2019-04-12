ECMAScript6简介
---

> ES6转ES5编码器：babel与谷歌的Traceur

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


let和const命令
---
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


模板字符串
---

字符串的格式化，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量（将变量名写入${}中，{}中可以放入任意javascript的表达式）。

展开运算符...
---

**内部使用for of遍历**  

- 1.组装对象或数组
```
//数组
const a = [1,2,3,4]
const b = [...a,5,6]  //[1,2,3,4,,5,6]

//对象
const obj = {a:1}
const obj1 = {...obj,b:2}  //{a:1,b:2} 

```
- 2.获取数组或者对象除了前几项或者除了某几项的其他项。

```
const a = [1,2,3,4];
[first,second,...s] = a
console.log(s)   //[3,4]

const b = {a:1,b:2}
const {a,...d} = b
console.log(d)//{b:2} 

```
- 3.对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边。

```
const a = {a:1,b:2}
const b = {b:5,c:6}
const c = {...a,...b}
console.log(c)   //{a:1,b:5,c:6}
 ```

解构
---
 **在ES6之前我们就是这样获取对象信息的，一个一个获取。现在，解构能让我们从对象或者数组里取出数据存为变量**
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

对象
---

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


函数
---
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
Iterator
---
**是个遍历器、是一个数据结构、保证每次执行都有一个next()**
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
Generator
---

Class
---
- 1.Class可以看做是构造函数的另一种写法  
```
class Point {

}

typeof Point //function类的数据类型是函数  
Point ===Point.prototype.constructor  //true  
prototype对象上的constructor属性直接指向类的本身  
```
- 2.类的所有方法都定义在构造函数的prototype上  
在类的实例上调用方法其实就是调用原型上的方法  
- 3.类内部的方法都是不可以枚举的不能使用es6的keys枚举，可以使用es5的getOwnPropertyNames()枚举  
- 4.类必须使用new调用，生成类的实例也需要new  
- 5.constructor方法  
**constructor方法默认返回实例对象（即this），完全可以指定返回另一个对象**
```
class a{
    constructor(){
        return Object.create(null)
    }
}
new Foo() instanceof Foo  //false
```
- 6.类的所有实例共享一个原型,所以可以通过实例的__proto__属性为类添加方法（但是不推荐，因为这会改变类的原始定义，影响到所有实例）

```
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
```
- 7.取值函数与存值函数
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

- 8.属性表达式
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

- 9.Class表达式
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
- 10。静态方法
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

- 11.静态属性

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
- 12.私有方法和私有属性

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

- 13.new.target属性

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

Class继承
---
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

2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。  

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

    

Set
---

**简介ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。**  
**Set本身是一个构造函数，用来生成 Set 数据结构**  

- 创建set数据结构
**注意**
1)创建set函数可以接受数组（或者其他可迭代的数据结构即类数组）作为参数
```
//数组去重
[...new Set(array)]
//字符串去重
[...new set('abcabc')].join('')   //abc
```


- Set实例的属性和方法
**属性**
1）、Set.prototype.constructor：构造函数，默认就是Set函数。  
2）、Set.prototype.size：返回Set实例的成员总数。  

**操作方法（用于操作数据）**
1）、add(value)：添加某个值，返回 Set 结构本身。  
2）、delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。  
3）、has(value)：返回一个布尔值，表示该值是否为Set的成员。  
4）、clear()：清除所有成员，没有返回值。    
5）、Array.from与...可以把Set结构转换为数组  

**遍历方法（用于遍历成员）**
1）、keys()：返回键名的遍历器  
2）、values()：返回键值的遍历器  
3）、entries()：返回键值对的遍历器  
4）、forEach()：使用回调函数遍历每个成员  当前元素的key、value都是当前元素的值
可以直接使用for of 遍历keys()、value()、new set返回值

**注意**

1) set结构不会加入重复的成员
2) 向数组加入值时不会发生类型转换，多次加入NaN也只会加入一个NaN

Map
---
**ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。**

- Map实例的属性和方法

1)size属性返回 Map 结构的成员总数。  
2)set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。  
3)get方法读取key对应的键值，如果找不到key，返回undefined。  
4)has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。  
5)delete方法删除某个键，返回true。如果删除失败，返回false。    
6)clear方法清除所有成员，没有返回值。  
**遍历方法**
1)keys()：返回键名的遍历器。  key  
2)values()：返回键值的遍历器。   value  
3)entries()：返回所有成员的遍历器。   key：value  
4)forEach()：遍历 Map 的所有成员   
5)直接遍历map对象，相当于遍历map.entries()  
6)结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）



**注意**  
1)如果对同一个键多次赋值，后面的值将覆盖前面的值  
2)如果读取一个未知的键，则返回undefined  
3)只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。即===，同样的值的两个实例，在 Map 结构中被视为两个键。  
4)Map的键是与内存地址绑定的  
5)set方法返回的是当前的Map对象，因此可以采用链式写法,  
6)Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。  
```
[...map.keys()]
// [1, 2, 3]
```
7)数组为Map  
将数组传入 Map 构造函数，就可以转为Map  
8)Map转换为对象  
如果所有 Map 的键都是字符串，它可以无损地转为对象  
9)对象转换为Map  
```
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```
10)Map转换为JSON   
```
方法一、先转换为对象在使用JSON.stringify()
```
11)JSON转换为Map  
使用JSON.parse把JSON转换为对象，再转换为Map


Module
---
**export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。**
- export 命令
  1)export命令除了可以输出变量也可以输出函数或类
  
  2)通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
  使用as关键字，重命名了函数的对外接口俩次。重命名后，v2可以用不同的名字输出两次
```
// 写法一
  export var m = 1;

// 写法二
  var m = 1;
  export {m};

// 写法三
  var n = 1;
  export {n as m};
  ```
  3) export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
  4)export命令可以出现在模块的任何位置，只要处于模块顶层就可以。 不能放到块级作用域和条件代码块，函数代码块里

- import 命令
**使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。**
1)import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
2)如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
3)import命令输入的变量都是只读的，因为它的本质是输入接口,这个变量跟对象一样，可以更改对象内的属性，其他模块也可以读到改写后的值，但是报错后很难查错，因此不要轻易更改
4)import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件。
5)import命令具有提升效果，会提升到整个模块的头部，首先执行,所以可以在import的执行前调用
6)因为import是静态执行所以不可以使用变量和表达式，或if结构
7)多次重复执行同一个import语句只执行一次
```
surname();
import { lastName as surname } from './profile.js';
```
- 整体模块加载
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

但是是不可以更改的不管是变量还是属性
```
export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}


import * as circle from './circle';
```
- export default

1)使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。如果使用export default 可以用任意名称指向export-default.js输出的方法，这时在import后不需要使用大括号
2)export default 可以用在匿名函数和命名函数或{}，导出的文件名在模块外部是无效的加载时
3)一个模块export default命令只能使用一次
4)export default它后面不能跟变量声明语句。
```
// 错误
export default var a = 1;
```
5)如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样
```
import _, { each, forEach } from 'lodash';
```

- export 与import的复合写法
```
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

export * from 'my_module'
//可以理解为
export { default } from 'foo';
```
- 模块的继承
```
// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}

// main.js

import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));
```
- import()
动态加载  
按需加载  
```
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  })
});
```
条件加载  
动态的模块路径  

- 注意 
1)ES6的模块化自动采用严格模式，不管你有没有在头部加没加"use strict";
2)ES6的模块加载可以叫做“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，而不是直接把整个模块的所有方法都加载回来。require加载模块时是把整个模块都会加载回来。

Module 的加载实现
---
- 浏览器加载

```
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>

<script>标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。
```
defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
- 加载规则

1)浏览器加载 ES6 模块，也使用 < script >标签，但是要加入type="module"属性。  
2)浏览器对于带有type="module"的< script >，都是异步加载,不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了< script >标签的defer属性。  
3)代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。  
4)模块脚本自动采用严格模式，不管有没有声明use strict。  
5)模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。   
6)模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。  
7)同一个模块如果加载多次，将只执行一次   

- ES6模块与CommonJS的差异
> CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS加载模块时调用模块内部的变量会把模块内部的变量缓存下来，ES6模块不会，
ES6模块加载时输入的变量是只读的的
ES6模块加载中，不同的脚本加载这个模块，得到的都是同一个实例。

> CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。  
而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

<!-- - ES6 模块加载 CommonJS 模块  -->

Promise
---

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

> Promise对象的特点：
- 对象的状态不受外界影响。promise对象代表异步操作，有三种状态：pending（进行中），fulfilled(已成功)，rejected（已失败）。
只有异步操作的结果，可以决定当前是哪种状态，任何其他操作都无法改变这个状态。
- 一旦状态改变，就不会再变，（从pending变为fulfilled和从pending变为rejected）任何时候都可以得到这个结果。
- 将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
- Promise 新建后就会立即执行，执行顺序：首先输出的是Promise----->将在当前脚本所有同步任务执行完才会执行，----->然后，then方法指定的回调函数。
-  resolved 的 Promise 是在本轮事件循环的末尾执行（注意return的妙用，加return后resolved后的代码就不会执行了）

> Promise.prototype.then()

- Promise.then()方法可以传递俩个值一个是成功回调一个是失败回调(可选)
- 返回一个新的Promise实例所以可以采用链式调用

> Promise.prototype.catch()

- 用于指定发生错误时的回调函数,另外then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。
- 如果 Promise 状态已经变成resolved，再抛出错误是无效的
- Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
```
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```
- 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
- 第二个catch方法用来捕获前一个catch方法抛出的错误

> Promise.prototype.finally()

```
promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);
```
- finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的
- 不接收任何参数
```
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```
> Promise.all()

- 用于将多个 Promise 实例，包装成一个新的 Promise 实例
```
const p = Promise.all([p1, p2, p3]);

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
```

```
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // posts --> 结果的数组
}).catch(function(reason){
  // ...  如果每个promise没有自己的catch方法，就会调用Promise.all()的catch方法。
});
```
- 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
> Promise.race()
**Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例**
- 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

> Promise.resolve()

**Promise.resolve方法将现有对象转为 Promise 对象，**
- （1）参数是一个 Promise 实例

如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

- （2）参数是一个thenable对象

thenable对象指的是具有then方法的对象，比如下面这个对象。
```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
```
Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
```
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
```
- （3）参数不是具有then方法的对象，或根本就不是对象
如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
```
const p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});
// Hello
```
- （4）不带有任何参数
立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
```
setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

// one
// two
// three
```

> Promise.reject()
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
```
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```
注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致

> Promise.try()

不管函数f是同步函数还是异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。
```
Promise.resolve().then(f)
```


Proxy
=====

1.  [概述](#docs/proxy#概述)
2.  [Proxy 实例的方法](#docs/proxy#Proxy 实例的方法)
3.  [Proxy.revocable()](#docs/proxy#Proxy.revocable())
4.  [this 问题](#docs/proxy#this 问题)
5.  [实例：Web 服务的客户端](#docs/proxy#实例：Web 服务的客户端)

概述
--

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

    var obj = new Proxy({}, {
      get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
      }
    });
    

上面代码对一个空对象架设了一层拦截，重定义了属性的读取（`get`）和设置（`set`）行为。这里暂时先不解释具体的语法，只看运行结果。对设置了拦截行为的对象`obj`，去读写它的属性，就会得到下面的结果。

    obj.count = 1
    //  setting count!
    ++obj.count
    //  getting count!
    //  setting count!
    //  2
    

上面代码说明，Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

    var proxy = new Proxy(target, handler);
    

Proxy 对象的所有用法，都是上面这种形式，不同的只是`handler`参数的写法。其中，`new Proxy()`表示生成一个`Proxy`实例，`target`参数表示所要拦截的目标对象，`handler`参数也是一个对象，用来定制拦截行为。

下面是另一个拦截读取属性行为的例子。

    var proxy = new Proxy({}, {
      get: function(target, property) {
        return 35;
      }
    });
    
    proxy.time // 35
    proxy.name // 35
    proxy.title // 35
    

上面代码中，作为构造函数，`Proxy`接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有`Proxy`的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，配置对象有一个`get`方法，用来拦截对目标对象属性的访问请求。`get`方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回`35`，所以访问任何属性都得到`35`。

注意，要使得`Proxy`起作用，必须针对`Proxy`实例（上例是`proxy`对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

如果`handler`没有设置任何拦截，那就等同于直接通向原对象。

    var target = {};
    var handler = {};
    var proxy = new Proxy(target, handler);
    proxy.a = 'b';
    target.a // "b"
    

上面代码中，`handler`是一个空对象，没有任何拦截效果，访问`proxy`就等同于访问`target`。

一个技巧是将 Proxy 对象，设置到`object.proxy`属性，从而可以在`object`对象上调用。

    var object = { proxy: new Proxy(target, handler) };
    

Proxy 实例也可以作为其他对象的原型对象。

    var proxy = new Proxy({}, {
      get: function(target, property) {
        return 35;
      }
    });
    
    let obj = Object.create(proxy);
    obj.time // 35
    

上面代码中，`proxy`对象是`obj`对象的原型，`obj`对象本身并没有`time`属性，所以根据原型链，会在`proxy`对象上读取该属性，导致被拦截。

同一个拦截器函数，可以设置拦截多个操作。

    var handler = {
      get: function(target, name) {
        if (name === 'prototype') {
          return Object.prototype;
        }
        return 'Hello, ' + name;
      },
    
      apply: function(target, thisBinding, args) {
        return args[0];
      },
    
      construct: function(target, args) {
        return {value: args[1]};
      }
    };
    
    var fproxy = new Proxy(function(x, y) {
      return x + y;
    }, handler);
    
    fproxy(1, 2) // 1
    new fproxy(1, 2) // {value: 2}
    fproxy.prototype === Object.prototype // true
    fproxy.foo === "Hello, foo" // true
    

对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。

下面是 Proxy 支持的拦截操作一览，一共 13 种。

*   **get(target, propKey, receiver)**：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
*   **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
*   **has(target, propKey)**：拦截`propKey in proxy`的操作，返回一个布尔值。
*   **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
*   **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
*   **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
*   **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
*   **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
*   **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
*   **isExtensible(target)**：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
*   **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
*   **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
*   **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

Proxy 实例的方法
-----------

下面是上面这些拦截方法的详细介绍。

### get()

`get`方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。

`get`方法的用法，上文已经有一个例子，下面是另一个拦截读取操作的例子。

    var person = {
      name: "张三"
    };
    
    var proxy = new Proxy(person, {
      get: function(target, property) {
        if (property in target) {
          return target[property];
        } else {
          throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
      }
    });
    
    proxy.name // "张三"
    proxy.age // 抛出一个错误
    

上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回`undefined`。

`get`方法可以继承。

    let proto = new Proxy({}, {
      get(target, propertyKey, receiver) {
        console.log('GET ' + propertyKey);
        return target[propertyKey];
      }
    });
    
    let obj = Object.create(proto);
    obj.foo // "GET foo"
    

上面代码中，拦截操作定义在`Prototype`对象上面，所以如果读取`obj`对象继承的属性时，拦截会生效。

下面的例子使用`get`拦截，实现数组读取负数的索引。

    function createArray(...elements) {
      let handler = {
        get(target, propKey, receiver) {
          let index = Number(propKey);
          if (index < 0) {
            propKey = String(target.length + index);
          }
          return Reflect.get(target, propKey, receiver);
        }
      };
    
      let target = [];
      target.push(...elements);
      return new Proxy(target, handler);
    }
    
    let arr = createArray('a', 'b', 'c');
    arr[-1] // c
    

上面代码中，数组的位置参数是`-1`，就会输出数组的倒数第一个成员。

利用 Proxy，可以将读取属性的操作（`get`），转变为执行某个函数，从而实现属性的链式操作。

    var pipe = (function () {
      return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({} , {
          get : function (pipeObject, fnName) {
            if (fnName === 'get') {
              return funcStack.reduce(function (val, fn) {
                return fn(val);
              },value);
            }
            funcStack.push(window[fnName]);
            return oproxy;
          }
        });
    
        return oproxy;
      }
    }());
    
    var double = n => n * 2;
    var pow    = n => n * n;
    var reverseInt = n => n.toString().split("").reverse().join("") | 0;
    
    pipe(3).double.pow.reverseInt.get; // 63
    

上面代码设置 Proxy 以后，达到了将函数名链式使用的效果。

下面的例子则是利用`get`拦截，实现一个生成各种 DOM 节点的通用函数`dom`。

    const dom = new Proxy({}, {
      get(target, property) {
        return function(attrs = {}, ...children) {
          const el = document.createElement(property);
          for (let prop of Object.keys(attrs)) {
            el.setAttribute(prop, attrs[prop]);
          }
          for (let child of children) {
            if (typeof child === 'string') {
              child = document.createTextNode(child);
            }
            el.appendChild(child);
          }
          return el;
        }
      }
    });
    
    const el = dom.div({},
      'Hello, my name is ',
      dom.a({href: '//example.com'}, 'Mark'),
      '. I like:',
      dom.ul({},
        dom.li({}, 'The web'),
        dom.li({}, 'Food'),
        dom.li({}, '…actually that\'s it')
      )
    );
    
    document.body.appendChild(el);
    

下面是一个`get`方法的第三个参数的例子，它总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。

    const proxy = new Proxy({}, {
      get: function(target, property, receiver) {
        return receiver;
      }
    });
    proxy.getReceiver === proxy // true
    

上面代码中，`proxy`对象的`getReceiver`属性是由`proxy`对象提供的，所以`receiver`指向`proxy`对象。

    const proxy = new Proxy({}, {
      get: function(target, property, receiver) {
        return receiver;
      }
    });
    
    const d = Object.create(proxy);
    d.a === d // true
    

上面代码中，`d`对象本身没有`a`属性，所以读取`d.a`的时候，会去`d`的原型`proxy`对象找。这时，`receiver`就指向`d`，代表原始的读操作所在的那个对象。

如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。

    const target = Object.defineProperties({}, {
      foo: {
        value: 123,
        writable: false,
        configurable: false
      },
    });
    
    const handler = {
      get(target, propKey) {
        return 'abc';
      }
    };
    
    const proxy = new Proxy(target, handler);
    
    proxy.foo
    // TypeError: Invariant check failed
    

### set()

`set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

假定`Person`对象有一个`age`属性，该属性应该是一个不大于 200 的整数，那么可以使用`Proxy`保证`age`的属性值符合要求。

    let validator = {
      set: function(obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid');
          }
        }
    
        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
      }
    };
    
    let person = new Proxy({}, validator);
    
    person.age = 100;
    
    person.age // 100
    person.age = 'young' // 报错
    person.age = 300 // 报错
    

上面代码中，由于设置了存值函数`set`，任何不符合要求的`age`属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。利用`set`方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。

有时，我们会在对象上面设置内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用。结合`get`和`set`方法，就可以做到防止这些内部属性被外部读写。

    const handler = {
      get (target, key) {
        invariant(key, 'get');
        return target[key];
      },
      set (target, key, value) {
        invariant(key, 'set');
        target[key] = value;
        return true;
      }
    };
    function invariant (key, action) {
      if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
      }
    }
    const target = {};
    const proxy = new Proxy(target, handler);
    proxy._prop
    // Error: Invalid attempt to get private "_prop" property
    proxy._prop = 'c'
    // Error: Invalid attempt to set private "_prop" property
    

上面代码中，只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的。

下面是`set`方法第四个参数的例子。

    const handler = {
      set: function(obj, prop, value, receiver) {
        obj[prop] = receiver;
      }
    };
    const proxy = new Proxy({}, handler);
    proxy.foo = 'bar';
    proxy.foo === proxy // true
    

上面代码中，`set`方法的第四个参数`receiver`，指的是原始的操作行为所在的那个对象，一般情况下是`proxy`实例本身，请看下面的例子。

    const handler = {
      set: function(obj, prop, value, receiver) {
        obj[prop] = receiver;
      }
    };
    const proxy = new Proxy({}, handler);
    const myObj = {};
    Object.setPrototypeOf(myObj, proxy);
    
    myObj.foo = 'bar';
    myObj.foo === myObj // true
    

上面代码中，设置`myObj.foo`属性的值时，`myObj`并没有`foo`属性，因此引擎会到`myObj`的原型链去找`foo`属性。`myObj`的原型对象`proxy`是一个 Proxy 实例，设置它的`foo`属性会触发`set`方法。这时，第四个参数`receiver`就指向原始赋值行为所在的对象`myObj`。

注意，如果目标对象自身的某个属性，不可写且不可配置，那么`set`方法将不起作用。

    const obj = {};
    Object.defineProperty(obj, 'foo', {
      value: 'bar',
      writable: false,
    });
    
    const handler = {
      set: function(obj, prop, value, receiver) {
        obj[prop] = 'baz';
      }
    };
    
    const proxy = new Proxy(obj, handler);
    proxy.foo = 'baz';
    proxy.foo // "bar"
    

上面代码中，`obj.foo`属性不可写，Proxy 对这个属性的`set`代理将不会生效。

注意，严格模式下，`set`代理如果没有返回`true`，就会报错。

    'use strict';
    const handler = {
      set: function(obj, prop, value, receiver) {
        obj[prop] = receiver;
        // 无论有没有下面这一行，都会报错
        return false;
      }
    };
    const proxy = new Proxy({}, handler);
    proxy.foo = 'bar';
    // TypeError: 'set' on proxy: trap returned falsish for property 'foo'
    

上面代码中，严格模式下，`set`代理返回`false`或者`undefined`，都会报错。

### apply()

`apply`方法拦截函数的调用、`call`和`apply`操作。

`apply`方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（`this`）和目标对象的参数数组。

    var handler = {
      apply (target, ctx, args) {
        return Reflect.apply(...arguments);
      }
    };
    

下面是一个例子。

    var target = function () { return 'I am the target'; };
    var handler = {
      apply: function () {
        return 'I am the proxy';
      }
    };
    
    var p = new Proxy(target, handler);
    
    p()
    // "I am the proxy"
    

上面代码中，变量`p`是 Proxy 的实例，当它作为函数调用时（`p()`），就会被`apply`方法拦截，返回一个字符串。

下面是另外一个例子。

    var twice = {
      apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
      }
    };
    function sum (left, right) {
      return left + right;
    };
    var proxy = new Proxy(sum, twice);
    proxy(1, 2) // 6
    proxy.call(null, 5, 6) // 22
    proxy.apply(null, [7, 8]) // 30
    

上面代码中，每当执行`proxy`函数（直接调用或`call`和`apply`调用），就会被`apply`方法拦截。

另外，直接调用`Reflect.apply`方法，也会被拦截。

    Reflect.apply(proxy, null, [9, 10]) // 38
    

### has()

`has`方法用来拦截`HasProperty`操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是`in`运算符。

`has`方法可以接受两个参数，分别是目标对象、需查询的属性名。

下面的例子使用`has`方法隐藏某些属性，不被`in`运算符发现。

    var handler = {
      has (target, key) {
        if (key[0] === '_') {
          return false;
        }
        return key in target;
      }
    };
    var target = { _prop: 'foo', prop: 'foo' };
    var proxy = new Proxy(target, handler);
    '_prop' in proxy // false
    

上面代码中，如果原对象的属性名的第一个字符是下划线，`proxy.has`就会返回`false`，从而不会被`in`运算符发现。

如果原对象不可配置或者禁止扩展，这时`has`拦截会报错。

    var obj = { a: 10 };
    Object.preventExtensions(obj);
    
    var p = new Proxy(obj, {
      has: function(target, prop) {
        return false;
      }
    });
    
    'a' in p // TypeError is thrown
    

上面代码中，`obj`对象禁止扩展，结果使用`has`拦截就会报错。也就是说，如果某个属性不可配置（或者目标对象不可扩展），则`has`方法就不得“隐藏”（即返回`false`）目标对象的该属性。

值得注意的是，`has`方法拦截的是`HasProperty`操作，而不是`HasOwnProperty`操作，即`has`方法不判断一个属性是对象自身的属性，还是继承的属性。

另外，虽然`for...in`循环也用到了`in`运算符，但是`has`拦截对`for...in`循环不生效。

    let stu1 = {name: '张三', score: 59};
    let stu2 = {name: '李四', score: 99};
    
    let handler = {
      has(target, prop) {
        if (prop === 'score' && target[prop] < 60) {
          console.log(`${target.name} 不及格`);
          return false;
        }
        return prop in target;
      }
    }
    
    let oproxy1 = new Proxy(stu1, handler);
    let oproxy2 = new Proxy(stu2, handler);
    
    'score' in oproxy1
    // 张三 不及格
    // false
    
    'score' in oproxy2
    // true
    
    for (let a in oproxy1) {
      console.log(oproxy1[a]);
    }
    // 张三
    // 59
    
    for (let b in oproxy2) {
      console.log(oproxy2[b]);
    }
    // 李四
    // 99
    

上面代码中，`has`拦截只对`in`运算符生效，对`for...in`循环不生效，导致不符合要求的属性没有被`for...in`循环所排除。

### construct()

`construct`方法用于拦截`new`命令，下面是拦截对象的写法。

    var handler = {
      construct (target, args, newTarget) {
        return new target(...args);
      }
    };
    

`construct`方法可以接受两个参数。

*   `target`：目标对象
*   `args`：构造函数的参数对象
*   `newTarget`：创造实例对象时，`new`命令作用的构造函数（下面例子的`p`）

    var p = new Proxy(function () {}, {
      construct: function(target, args) {
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };
      }
    });
    
    (new p(1)).value
    // "called: 1"
    // 10
    

`construct`方法返回的必须是一个对象，否则会报错。

    var p = new Proxy(function() {}, {
      construct: function(target, argumentsList) {
        return 1;
      }
    });
    
    new p() // 报错
    // Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')
    

### deleteProperty()

`deleteProperty`方法用于拦截`delete`操作，如果这个方法抛出错误或者返回`false`，当前属性就无法被`delete`命令删除。

    var handler = {
      deleteProperty (target, key) {
        invariant(key, 'delete');
        delete target[key];
        return true;
      }
    };
    function invariant (key, action) {
      if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
      }
    }
    
    var target = { _prop: 'foo' };
    var proxy = new Proxy(target, handler);
    delete proxy._prop
    // Error: Invalid attempt to delete private "_prop" property
    

上面代码中，`deleteProperty`方法拦截了`delete`操作符，删除第一个字符为下划线的属性会报错。

注意，目标对象自身的不可配置（configurable）的属性，不能被`deleteProperty`方法删除，否则报错。

### defineProperty()

`defineProperty`方法拦截了`Object.defineProperty`操作。

    var handler = {
      defineProperty (target, key, descriptor) {
        return false;
      }
    };
    var target = {};
    var proxy = new Proxy(target, handler);
    proxy.foo = 'bar' // 不会生效
    

上面代码中，`defineProperty`方法返回`false`，导致添加新属性总是无效。

注意，如果目标对象不可扩展（non-extensible），则`defineProperty`不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），则`defineProperty`方法不得改变这两个设置。

### getOwnPropertyDescriptor()

`getOwnPropertyDescriptor`方法拦截`Object.getOwnPropertyDescriptor()`，返回一个属性描述对象或者`undefined`。

    var handler = {
      getOwnPropertyDescriptor (target, key) {
        if (key[0] === '_') {
          return;
        }
        return Object.getOwnPropertyDescriptor(target, key);
      }
    };
    var target = { _foo: 'bar', baz: 'tar' };
    var proxy = new Proxy(target, handler);
    Object.getOwnPropertyDescriptor(proxy, 'wat')
    // undefined
    Object.getOwnPropertyDescriptor(proxy, '_foo')
    // undefined
    Object.getOwnPropertyDescriptor(proxy, 'baz')
    // { value: 'tar', writable: true, enumerable: true, configurable: true }
    

上面代码中，`handler.getOwnPropertyDescriptor`方法对于第一个字符为下划线的属性名会返回`undefined`。

### getPrototypeOf()

`getPrototypeOf`方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。

*   `Object.prototype.__proto__`
*   `Object.prototype.isPrototypeOf()`
*   `Object.getPrototypeOf()`
*   `Reflect.getPrototypeOf()`
*   `instanceof`

下面是一个例子。

    var proto = {};
    var p = new Proxy({}, {
      getPrototypeOf(target) {
        return proto;
      }
    });
    Object.getPrototypeOf(p) === proto // true
    

上面代码中，`getPrototypeOf`方法拦截`Object.getPrototypeOf()`，返回`proto`对象。

注意，`getPrototypeOf`方法的返回值必须是对象或者`null`，否则报错。另外，如果目标对象不可扩展（non-extensible）， `getPrototypeOf`方法必须返回目标对象的原型对象。

### isExtensible()

`isExtensible`方法拦截`Object.isExtensible`操作。

    var p = new Proxy({}, {
      isExtensible: function(target) {
        console.log("called");
        return true;
      }
    });
    
    Object.isExtensible(p)
    // "called"
    // true
    

上面代码设置了`isExtensible`方法，在调用`Object.isExtensible`时会输出`called`。

注意，该方法只能返回布尔值，否则返回值会被自动转为布尔值。

这个方法有一个强限制，它的返回值必须与目标对象的`isExtensible`属性保持一致，否则就会抛出错误。

    Object.isExtensible(proxy) === Object.isExtensible(target)
    

下面是一个例子。

    var p = new Proxy({}, {
      isExtensible: function(target) {
        return false;
      }
    });
    
    Object.isExtensible(p)
    // Uncaught TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')
    

### ownKeys()

`ownKeys`方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

*   `Object.getOwnPropertyNames()`
*   `Object.getOwnPropertySymbols()`
*   `Object.keys()`
*   `for...in`循环

下面是拦截`Object.keys()`的例子。

    let target = {
      a: 1,
      b: 2,
      c: 3
    };
    
    let handler = {
      ownKeys(target) {
        return ['a'];
      }
    };
    
    let proxy = new Proxy(target, handler);
    
    Object.keys(proxy)
    // [ 'a' ]
    

上面代码拦截了对于`target`对象的`Object.keys()`操作，只返回`a`、`b`、`c`三个属性之中的`a`属性。

下面的例子是拦截第一个字符为下划线的属性名。

    let target = {
      _bar: 'foo',
      _prop: 'bar',
      prop: 'baz'
    };
    
    let handler = {
      ownKeys (target) {
        return Reflect.ownKeys(target).filter(key => key[0] !== '_');
      }
    };
    
    let proxy = new Proxy(target, handler);
    for (let key of Object.keys(proxy)) {
      console.log(target[key]);
    }
    // "baz"
    

注意，使用`Object.keys`方法时，有三类属性会被`ownKeys`方法自动过滤，不会返回。

*   目标对象上不存在的属性
*   属性名为 Symbol 值
*   不可遍历（`enumerable`）的属性

    let target = {
      a: 1,
      b: 2,
      c: 3,
      [Symbol.for('secret')]: '4',
    };
    
    Object.defineProperty(target, 'key', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: 'static'
    });
    
    let handler = {
      ownKeys(target) {
        return ['a', 'd', Symbol.for('secret'), 'key'];
      }
    };
    
    let proxy = new Proxy(target, handler);
    
    Object.keys(proxy)
    // ['a']
    

上面代码中，`ownKeys`方法之中，显式返回不存在的属性（`d`）、Symbol 值（`Symbol.for('secret')`）、不可遍历的属性（`key`），结果都被自动过滤掉。

`ownKeys`方法还可以拦截`Object.getOwnPropertyNames()`。

    var p = new Proxy({}, {
      ownKeys: function(target) {
        return ['a', 'b', 'c'];
      }
    });
    
    Object.getOwnPropertyNames(p)
    // [ 'a', 'b', 'c' ]
    

`for...in`循环也受到`ownKeys`方法的拦截。

    const obj = { hello: 'world' };
    const proxy = new Proxy(obj, {
      ownKeys: function () {
        return ['a', 'b'];
      }
    });
    
    for (let key in proxy) {
      console.log(key); // 没有任何输出
    }
    

上面代码中，`ownkeys`指定只返回`a`和`b`属性，由于`obj`没有这两个属性，因此`for...in`循环不会有任何输出。

`ownKeys`方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。

    var obj = {};
    
    var p = new Proxy(obj, {
      ownKeys: function(target) {
        return [123, true, undefined, null, {}, []];
      }
    });
    
    Object.getOwnPropertyNames(p)
    // Uncaught TypeError: 123 is not a valid property name
    

上面代码中，`ownKeys`方法虽然返回一个数组，但是每一个数组成员都不是字符串或 Symbol 值，因此就报错了。

如果目标对象自身包含不可配置的属性，则该属性必须被`ownKeys`方法返回，否则报错。

    var obj = {};
    Object.defineProperty(obj, 'a', {
      configurable: false,
      enumerable: true,
      value: 10 }
    );
    
    var p = new Proxy(obj, {
      ownKeys: function(target) {
        return ['b'];
      }
    });
    
    Object.getOwnPropertyNames(p)
    // Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'
    

上面代码中，`obj`对象的`a`属性是不可配置的，这时`ownKeys`方法返回的数组之中，必须包含`a`，否则会报错。

另外，如果目标对象是不可扩展的（non-extensible），这时`ownKeys`方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。

    var obj = {
      a: 1
    };
    
    Object.preventExtensions(obj);
    
    var p = new Proxy(obj, {
      ownKeys: function(target) {
        return ['a', 'b'];
      }
    });
    
    Object.getOwnPropertyNames(p)
    // Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
    

上面代码中，`obj`对象是不可扩展的，这时`ownKeys`方法返回的数组之中，包含了`obj`对象的多余属性`b`，所以导致了报错。

### preventExtensions()

`preventExtensions`方法拦截`Object.preventExtensions()`。该方法必须返回一个布尔值，否则会被自动转为布尔值。

这个方法有一个限制，只有目标对象不可扩展时（即`Object.isExtensible(proxy)`为`false`），`proxy.preventExtensions`才能返回`true`，否则会报错。

    var proxy = new Proxy({}, {
      preventExtensions: function(target) {
        return true;
      }
    });
    
    Object.preventExtensions(proxy)
    // Uncaught TypeError: 'preventExtensions' on proxy: trap returned truish but the proxy target is extensible
    

上面代码中，`proxy.preventExtensions`方法返回`true`，但这时`Object.isExtensible(proxy)`会返回`true`，因此报错。

为了防止出现这个问题，通常要在`proxy.preventExtensions`方法里面，调用一次`Object.preventExtensions`。

    var proxy = new Proxy({}, {
      preventExtensions: function(target) {
        console.log('called');
        Object.preventExtensions(target);
        return true;
      }
    });
    
    Object.preventExtensions(proxy)
    // "called"
    // Proxy {}
    

### setPrototypeOf()

`setPrototypeOf`方法主要用来拦截`Object.setPrototypeOf`方法。

下面是一个例子。

    var handler = {
      setPrototypeOf (target, proto) {
        throw new Error('Changing the prototype is forbidden');
      }
    };
    var proto = {};
    var target = function () {};
    var proxy = new Proxy(target, handler);
    Object.setPrototypeOf(proxy, proto);
    // Error: Changing the prototype is forbidden
    

上面代码中，只要修改`target`的原型对象，就会报错。

注意，该方法只能返回布尔值，否则会被自动转为布尔值。另外，如果目标对象不可扩展（non-extensible），`setPrototypeOf`方法不得改变目标对象的原型。

Proxy.revocable()
-----------------

`Proxy.revocable`方法返回一个可取消的 Proxy 实例。

    let target = {};
    let handler = {};
    
    let {proxy, revoke} = Proxy.revocable(target, handler);
    
    proxy.foo = 123;
    proxy.foo // 123
    
    revoke();
    proxy.foo // TypeError: Revoked
    

`Proxy.revocable`方法返回一个对象，该对象的`proxy`属性是`Proxy`实例，`revoke`属性是一个函数，可以取消`Proxy`实例。上面代码中，当执行`revoke`函数之后，再访问`Proxy`实例，就会抛出一个错误。

`Proxy.revocable`的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。

this 问题
-------

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的`this`关键字会指向 Proxy 代理。

    const target = {
      m: function () {
        console.log(this === proxy);
      }
    };
    const handler = {};
    
    const proxy = new Proxy(target, handler);
    
    target.m() // false
    proxy.m()  // true
    

上面代码中，一旦`proxy`代理`target.m`，后者内部的`this`就是指向`proxy`，而不是`target`。

下面是一个例子，由于`this`指向的变化，导致 Proxy 无法代理目标对象。

    const _name = new WeakMap();
    
    class Person {
      constructor(name) {
        _name.set(this, name);
      }
      get name() {
        return _name.get(this);
      }
    }
    
    const jane = new Person('Jane');
    jane.name // 'Jane'
    
    const proxy = new Proxy(jane, {});
    proxy.name // undefined
    

上面代码中，目标对象`jane`的`name`属性，实际保存在外部`WeakMap`对象`_name`上面，通过`this`键区分。由于通过`proxy.name`访问时，`this`指向`proxy`，导致无法取到值，所以返回`undefined`。

此外，有些原生对象的内部属性，只有通过正确的`this`才能拿到，所以 Proxy 也无法代理这些原生对象的属性。

    const target = new Date();
    const handler = {};
    const proxy = new Proxy(target, handler);
    
    proxy.getDate();
    // TypeError: this is not a Date object.
    

上面代码中，`getDate`方法只能在`Date`对象实例上面拿到，如果`this`不是`Date`对象实例就会报错。这时，`this`绑定原始对象，就可以解决这个问题。

    const target = new Date('2015-01-01');
    const handler = {
      get(target, prop) {
        if (prop === 'getDate') {
          return target.getDate.bind(target);
        }
        return Reflect.get(target, prop);
      }
    };
    const proxy = new Proxy(target, handler);
    
    proxy.getDate() // 1
    

实例：Web 服务的客户端
-------------

Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。

    const service = createWebService('http://example.com/data');
    
    service.employees().then(json => {
      const employees = JSON.parse(json);
      // ···
    });
    

上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。

    function createWebService(baseUrl) {
      return new Proxy({}, {
        get(target, propKey, receiver) {
          return () => httpGet(baseUrl+'/' + propKey);
        }
      });
    }
    

同理，Proxy 也可以用来实现数据库的 ORM 层。
