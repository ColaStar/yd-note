TypeScript 前世今生
------------------------------------------------------------------------------------------------
- 曾经的笑柄
- Node.js
- 名门正派
- 正规语言的心经
### 1.1 曾经的笑柄
```
function test() {
  return
  {
    a: 1
  }
}
var f = new test();
console.log(f.a); // undefined
``` 
自动加了逗号
```
(function() {alert(1)})()
(function() {alert(2)})()
```
需要加逗号
### 1.2 Node.js
- 有模有样的后端语言
- 又是一个新玩具...
- 大量的闭包、回调、内存浪费、全站崩溃。。
- 面向过程的观念无法改变
- 对于继承、或者接口等一听就迷糊
### 1.3 名门正派
拿PHP和Node.js做对比。

为了前端更好地做性能优化，前端要搭一层服务器叫代理服务器。这层不动数据库，做一层代理层，很轻很薄。发送请求，自己控制路由。

所谓大前端，都是这两个在参与。

### 1.4 正规语言的心经 (重点)

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上这个语言添加了可选的静态类型和基于类型的面向对象过程

> 学习TypeScript,就是学习优良语言家族的全部特性。

- 强类型编程语言 显示声明字符串
- 常量、变量、作用域、this、可空类型、真实数组、结构、枚举
- 面向对象 类、继承、多态、接口、命名空间、变量的修饰、构造函数、访问器（Get、Set）、静态属性
> 接口只负责声明，不实现。基于接口可以做无限个类。
- 委托、泛型、反射、集合（动态数组 （ArrayList/HashTable/SortedList/Stack/Queue））、匿名方法、拆箱
> JS 怎么做委托
- 多线程
> 为什么 setTimeout 不准
### 2. 未来
ECMAScript 6