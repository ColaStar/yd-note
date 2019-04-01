es5简介
----

#### 对象的一些方法
**Object.assign()**    

> 复制对象
```
const obj = {a:1};
const copy = Object.assign({},obj)
console.log(copy)   //{a:1}
```
> 深拷贝问题
针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。

```
var a1 = {a:0,b:{c:0}};
var a2 = Object.assign({},a1) //{a:0,b:{c:0}}

a1.a = 1
//a1 => {a:1,b:{c:0}};
//a2 => {a:0,b:{c:0}};
a2.a = 2
//a1 => {a:1,b:{c:0}};
//a2 => {a:2,b:{c:0}};
a1.b.c = 10
//a1 => {a:1,b:{c:10}};
//a2 => {a:1,b:{c:10}};
a2.b.c = 20;
//a1 => {a:1,b:{c:20}};
//a2 => {a:1,b:{c:20}};
所以assign是浅拷贝，因为他拷贝的只有第一层的属性值，如果想要深拷贝需要换别的方法
var a2 = JSON.parse.(JSON.stringify(a1))
```
> 合并对象
合并后目标对象自身也会改变
如果具有相同属性，前边的属性会被后续参数中具有相同属性的其他对象覆盖。

> 拷贝 symbol 类型的属性
```
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```
> 继承属性和不可枚举属性是不能拷贝的
```
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
**Object.create()**    
创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
```
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```
> 使用 Object.create 的 propertyObject参数
```
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});


function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42, 
    writable: true,
    enumerable: true,
    configurable: true 
  } 
});
```
Object.defineProperty(obj, prop, descriptor)
---
**描述**：该方法允许精确添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来（for...in 或 Object.keys 方法）， 这些属性的值可以被改变，也可以被删除。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。



#### 额外的数组
> **Array.form**  

判断是不是数组
```
//语法
Array.isArray(obj)

Array.isArray([1, 2, 3]);  
// true
Array.isArray(new Array());
// 鲜为人知的事实：其实 true
Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 
// true
```
**注意**：当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.  
**原生方法写**：
```
function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
function isArray (obj) {
  return obj instanceof Array;
}
```
> Array.form

从一个类似数组或可迭代对象中创建一个新的数组实例

```
//语法
Array.from(arrayLike[, mapFn[, thisArg]])

返回值是一个新的数组实例
参数：
arratLike：想要转换为数组的伪数组（拥有一个 length 属性和若干索引属性的任意对象，如字符串等）和可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
mapFn（可选）如果指定了这个参数，新数组的每个元素都会执行该回调函数。
thisArg（可选）执行回调函数是的this对象
```
用法：数组去重
```
const newarr = Array.from(new Set([1,2,3,5,6,7,8,2,1]))
```
在Array.from中使用箭头函数
```
Array.from('123456',x=>x+1)     ==>['11','21','31','41','51','61']
相当于
Array.from('123456').map(ele=>{
  return ele+1
})
```
> Array.of() 

创建一个具有可变数量参数的新数组实例，而不考虑参数的数量和类型
返回一个新的Array实例
```
//语法
Array.of(arr[0],arr[1],arr[2])
//与Array()的区别
Array(7)  //[,,,,,,]   7个空位元素数组不是undefined
Array(1,2,3)   //[1,2,3]

Array.of(7)   //[7]
Array.of(1,2,3)   //7
Array.of() 和 Array 构造函数之间的区别在于处理整数参
```
**原生js实现**
```
Array.prototype.of = function() {
    return Array.prototype.slice.call(arguments);
  };
```

> Array.concat()

合并俩个或多个数组，不会改变现有数组，会返回一个新的数组

```
//语法
const newarr = oldArr.concat(arr1,arr2,arr3,···)
```

**注意**：  
如果用concat方法创建一个数组,返回数组是一个浅拷贝
[].concat(arr)
**实例**
```
//链接n个数组
arr.concat(arr1,arr2,arr3···)

//链接值到数组中
arr.concat(1,[2,3,4])

//合并嵌套数组并保留引用浅拷贝
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]
```
> Array.copyWithin()

浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

```
//语法
arr.copyWithin(target[, start[, end]])

target
0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
start
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
如果 start 被忽略，copyWithin 将会从0开始复制。
end
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。

返回值：改变后的数组
```

**例**
```
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(-2);
//[1,2,3,1,2]
numbers.copyWithin(0, 3);
//[4,5,3,4,5]
numbers.copyWithin(0, 3, 4);
//[4,2,3,4,5]
numbers.copyWithin(-2, -3, -1);
//[1,2,3,3,4]
[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}？？？
// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant: 
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

> Array.entries()

返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

```
//语法
arr.entries()
返回值：返回一个新的Array迭代器对象，Array Iterator对象的原型上有一个next()方法可用于遍历迭代器取得原数组的[key:value]

//next()方法
var arr = ["a", "b", "c"]; 
var iterator = arr.entries();
console.log(iterator.next());

/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next()返回一个对象，对于有元素的数组，
// 是next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
// 直到迭代器结束done才是true。
// next.value是一个["key":"value"]的数组，是返回的迭代器中的元素值。
```
**例**
```
const arr = [1,2,3]
arr.entries().next().value  //[0,1] 
arr.entries().next().value  //[1,2] 
arr.entries().next().value  //[2,3] 
```
**二维数组按行排序**
```
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
sortArr(arr);
```
> Array.prototype.fill()

```
//语法
arr.fill(value[, start[, end]])
value:用来填充数组的值
star:t起始索引默认为0
end:结束索引默认为this.length
```
**例**
```
[1, 2, 3].fill(4);               //[4,4,4]
[1, 2, 3].fill(4, 1);            //[1,4,4]
[1, 2, 3].fill(4, 1, 2);         //[1,4,3]
[1, 2, 3].fill(4, 1, 1);         // [1,2,3]
[1, 2, 3].fill(4, 3, 3);         // [1,2,3]
[1, 2, 3].fill(4, -3, -2);       // [4,2,3]
[1, 2, 3].fill(4, NaN, NaN);     // [1,2,3]
[1, 2, 3].fill(4, 3, 5);         // [1,2,3]
Array(3).fill(4);                // [4,4,4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
> Array.prototype.find() 

**ie浏览器不兼容**

返回数组中满足测试函数的第一个元素的值，否则返回undefined
```
//语法
arr.find(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值数组中第一个满足测试函数的元素的值，否则返回undefined
```
**例**
```
//用对象的属性查找数组里的对象
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));
//寻找数组中的质数
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```
> Array.prototype.findIndex

返回数组中中第一个满足测试函数的元素的索引值，否则返回-1

**ie浏览器不兼容**
```
//语法
arr.find(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值数组中第一个满足测试函数的元素的索引值，否则返回-1

```
**例**
```
//查找数组中首个质数元素的索引
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```
> Array.prototype.flat()

会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

//不兼容ie，Samsung Internet
```
//语法
var newArray = arr.flat(depth)
//参数
指定要提取嵌套数组的结构深度，默认值为 1
//返回值
一个包含将数组与子数组中所有元素的新数组。
```
**例**
```
//扁平化嵌套数组
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]


//扁平化与空项
flat() 方法会移除数组中的空项:
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```
**代替方案**
```
var arr1 = [1, 2, [3, 4]];
arr1.flat();

// 反嵌套一层数组
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

// 或使用 ...
const flatSingle = arr => [].concat(...arr);
```
```
// 使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```
```
// 不使用递归，使用 stack 无限反嵌套多层嵌套数组
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

```

> Array.prototype.some

判断是否至少有一个元素通过由提供的函数实现的测试。不会改变原数组
```
//语法
arr.some(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值:至少有一个元素通过指定函数的测试，返回true，否则false
```
**例**
```
//测试数组元素的值
//使用箭头函数测试数组元素的值
//判断数组元素中是否存在某个值
//使用箭头函数判断数组元素中是否存在某个值
```
> Array.prototype.every()

判断是否所有元素通过指定函数的测试,不会改变原数组
```
//语法
arr.every(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值:如果所有元素通过指定函数的测试，返回true，否则false
```

**例**
```
//检测所有数组元素的大小---->数组中的所有元素是否都大于 10
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
//原生js实现
if (!Array.prototype.every)
{
  Array.prototype.every = function(fun /*, thisArg */)
  {
    'use strict';

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
        throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && !fun.call(thisArg, t[i], i, t))
        return false;
    }

    return true;
  };
}
```

> Array.prototype.filter()

filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素，不会改变原素组

```
//语法
arr.every(callback[, thisArg])
//参数
callback
在数组每一项上执行的函数，接收 3 个参数：
   item 当前便利的元素
   index 当前便利的索引值
   arr 数组本身
thisArg 执行回调时用做的this对象
//返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组
```

**例**

```
//筛选排除所有较小的值
//过滤 JSON 中的无效条目
//在数组中搜索
//ES方法实现
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

//Array.prototype.includes()
includes方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
```
//语法
arr.includes(valueToFind[, fromIndex])
//参数
valueToFind：需要查找的元素值。
fromIndex 可选：
从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
//返回值
如果包含则返回 true，否则返回false。

```


