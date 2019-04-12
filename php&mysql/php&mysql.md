MySQL & PHP
---
#### 安装开发集成环境
XAMPP就是X-系统，A-Apache，M-Mysql，P-php，P-Phpmyadmin/Perl的缩写
#### 初识PHP
- 1.PHP 脚本以 <?php 开始，以 ?> 结束;
- 2.PHP 文件的默认文件扩展名是 ".php"。
- 3.有两种在浏览器输出文本的基础指令：echo 和 print;
- 4.PHP 中的每个代码行都必须以分号结束。分号是一种分隔符，用于把指令集区分开来;
- 5.PHP注释可以通过//和/***/
- 6.声明变量以 $ 符号开始，后面跟着变量的名称,
- 7.作用域:在所有函数外部定义的变量，拥有全局作用域。除了函数外，全局变量可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 global 关键字。    
在 PHP 函数内部声明的变量是局部变量，仅能在函数内部访问;
Static 作用域:当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。

```
<?php
 if (false) {
	  $a = "测试";
	}
	echo $a; // 这里直接报错，因为php是块级作用域。javascript是函数级作用域，所有变量提升。
	
	// php 中有一个函数是 isset, 用于判断变量是否声明
	if (isset($a)) {
	  echo "我是一个声明的";
	} else {
	  echo "我没有声明";
	}
?>
```

```
$a = "我是外面的";
  function test() {
    echo $a;
  }
  
  test(); // 报错，函数里面的拿不到外面的变量
  
  // 如果要拿到外边的变量，必须要这样写
  function test() {
    global $a; //global 关键字用于函数内访问全局变量
    echo $a
  }
  test();
```

```
  <?php
  $GLOBALS['index'] = something 
  ?>
  //PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。
```

- 7.如何引入其他脚本的文件

```
- include
- require

require_once('./index.php');

include_once('./index.php') 
不管有没有错,include_once都要执行
```
- 8.array() 函数用于创建数组：
```
//数值数组
$cars=array("Volvo","BMW","Toyota");

//关联数组
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```
- 9.json_encode与json_decode()
json_encode对变量进行JSON编码
json_decode() 对JSON数据进行解码，转换为PHP变量
- 10.session
session 变量用于存储关于用户会话（session）的信息，或者更改用户会话（session）的设置。Session 变量存储单一用户的信息，并且对于应用程序中的所有页面都是可用的

存储到session中，必须启动会话session_start() 函数必须位于 < html > 标签之前：
```
<?php
//启动会话
session_start();
// 存储 session 数据
$_SESSION['views']=1;
if(isset($_SESSION['views']))//isset() 函数检测是否已设置 "views" 变量
{
    unset($_SESSION['views']);//unset() 函数用于释放指定的 session 变量：
}
//销毁session
session_destroy();
 ?>
```
- 11.$_GET、$_POST、$_REQUEST
> $_GET 变量用于收集来自 method="GET" 的表单中的值。
> $_POST 变量用于收集来自 method="post" 的表单中的值。
> $_REQUEST 变量包含了 $_GET、$_POST 和 $_COOKIE 的内容。  $_REQUEST 变量可用来收集通过 GET 和 POST 方法发送的表单数据。值。


#### PHP中的Mysql
- 连接Mysql
```
//面向对象
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";
?>

//实例 (MySQLi - 面向过程)
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
 
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "连接成功";
?>
```
//实例 (MySQLi - 面向过程)

- 关闭连接
```
mysqli_close($conn);
```
- 创建库与数据表
我自己一般是在PHPAdmin里边配置  
1.创建数据库需要设置库名，与字符类型（一般是utf8_general_ci）  
创建数据表的时：
1.表名，字段数
2.主键是设置自增，字符类型设置VARCHAR，数字类型设置INT，文本类型（内容较多）设置TEXT，时间设置DATE
当然了设置数据类型是根据业务而设置，一般就是字符，数字，文本，时间等
- 插入数据
```
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)


//例
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 
```
**插入多条数据**
```
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";
 
if ($conn->multi_query($sql) === TRUE) {  //mysqli_multi_query($conn, $sql)
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
```
- 删除数据库中的数据 
```
mysqli_query($con,"DELETE FROM Persons WHERE LastName='Griffin'");
```
- 修改数据库表中的数据
```
mysqli_query($con,"UPDATE Persons SET Age=36
WHERE FirstName='Peter' AND LastName='Griffin'");
```
- 查询数据库中数据
```
select * from ydbiao where id =1
```
#### PHP与PDO
- **简介**：PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。
PDO 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。
- **使用PDO连接MySql数据库的实例**
```
<?php
$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='test';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='';          //对应的密码
$dsn="$dbms:host=$host;dbname=$dbName";


try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    echo "连接成功<br/>";
    /*你还可以进行一次搜索操作
    foreach ($dbh->query('SELECT * from FOO') as $row) {
        print_r($row); //你可以用 echo($GLOBAL); 来看到这些值
    }
    */
    $dbh = null;
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
//默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
$db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));

?>
```
#### PHP与Mysql实战
```
a.php请求b.php
<from action="./b.php">
<div class="case">
   <label for="username">用户名<label>
   <input type="text" name="username" class="username"/>
</div>
<div class="case">
   <label for="password">密码<label>
   <input type="text" name="password" class="password"/>
</div>
   <input type="submit" name="password" value="登陆"/>
</from>
<script>
const username = $('.username').val()
const password = $('.password').val()
$.ajax({
  url:'./php',
  type:'post',
  data:{
    username:username,
    password:password
  }，
  success:function(data){
    alert(data)
  }
})
</script>

//b.php

<?php
$usernames = $_REQUEST['username'];
$passwords = $_REQUEST['password'];

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";

$sql = "SELECT * FROM yd-test WHERE username = $usernames";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 结果";
}
$conn->close();
?>

```

#### 面向对象的介绍
> 面向对象的产生
**软件危机->软件工程学->面向对象**
软件生产方式无法满足迅速增长的计算机软件需求->软件工程学->结构化方法（按软件周期分为三个阶段分析/设计/编程）与面向对象


> 面向对象的概念
OOP（面向对象的编程）技术，使其编程的代码更简洁、更易于维护、并且具有更强的可重用性。
OOP达到了软件工程学的三个目标：重用性、灵活性、扩展性
OOP面向对象编程都的特点：封装，继承，多态。

> 类与面向对象的关系
什么是类？
什么是对象？
别的语言必须new出来的
> 想想对象的程序设计
面向对象的三个主要特性：
- 对象的行为
- 对象的状态
- 对象的标识
> 如何抽象一个类
- 类的声明
```
//简单格式

[修饰符] class 类名 {//使用class关键字加空格后加类名
  [成员属性]//也叫成员变量
  [成员方法]  //也叫成员函数
}

//完整格式：

[修饰符] class 类名 [extends父类][implements 接口1，[接口2...]] {//使用class关键字加空格后加类名
  [成员属性]//也叫成员变量
  [成员方法]  //也叫成员函数
}
```
- 成员属性 
具体的一个值
```
格式：修饰符$变量名[=默认值]//如:public $name = "zhangsan"
注意成员属性不可以是带运算符的表达式、变量、方法或者函数调用

public $var1 = 1+1;错误格式
public $var2 = self:myStaticMethod();错误格式
public $var3 = $myVar;错误格式

正确的定义格式：
public $var1 = 2;//普通数值（4个标量：整数，浮点数，布尔，字符串）
public $var2 = myConstant;//常量
public $var3 = self:myStaticMethod;//静态属性
public $var4 = array(trye,false);//数组

```
- 成员方法
成员的方法格式：
```
[修饰符] function 方法名(参数...){
[方法体]
[return 返回值]
}


public function eat(){  //我在吃饭的方法
    echo "我在吃饭"  //方法体
}
```
> 通过类实例化对象
- 实例化对象
当定义好类,我们使用new关键字来生成一个对象,类的第一个字母大写。成员属性方法用驼峰
```
$对象名称 = new类的名称();
$对象名称 = new类的名称([参数列表])//在实例化对象上传递参数，在类的内部是可以接收到的
```
- 对象中成员的访问
$引用名 = new类的名称(构造参数);
$引用名 -> 成员属性 = 赋值;//对象属性赋值
echo $引用名 -> 成员属性；//输出对象的属性
$引用名 -> 成员方法； //调用对象的方法

- 特殊对象引用this
```
特殊对象的引用$this
class Person{
  public $age;
  public function say($word){
    echo "she say {$word}";
  }
  public function info(){
    $this->say('Hi');
    return $this -> age
  }
}
$xiaowang = new Person();
$xiaowang -> age = 26;
$age = $xiaowang->info();
echo "<br/>"
echo $age;
```

#### 构造方法与析构析构方法
- 构造方法
//当这个类new的时候被自动执行的
```
构造方法语法格式
[修饰符]function __construct(参数){

}
```
- 析构方法
//当对应类不会再使用相关的方法和属性的时候，被调用
```
[修饰符]function __destruct(参数){
[代码体]
}
```
- 构造方法与析构方法的实例
```
class App{
  public function __construct($name,$age){
//当这个类new的时候被自动执行的
$this ->name =$name
$this ->age =$age
  }
  public function data(){
    return $this->age
  }
  public function __destruct(){
    //用途 可以进行资源的释放操作 数据库关闭
    //对象被销毁的时候被执行，没有代码被运行了
    echo "bye bye{$this->name}"
  }
}
$xiaowang = new App('first',20)
echo $xiaowang ->data();
```
#### 面向对象的封装性
> 设置私有成员与私有成员的访问

- 封装的修饰符

封装是面向对象编程中的三大特性之一，封装就是把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象的内部细节，已达到对成员的访问控制（切记不是拒绝访问)。

**PHP5支持如下3种访问修饰符**
```
public    (公有的 默认)
private    (私有的)
protected    (受保护的)
```
- 设置私有成员
只要在声明成员属性或方法时，使用private关键词修饰就是实现了对成员的私有封装。
```
class Penson{
  private $name;
  private $age;
  private function say(){
    //...
  }
}
```
- 访问私有成员
封装后的成员在对象外部不能直接访问，只能在对象内部方法中使用$this访问
```
class Penson{
  private $name;
  public function say(){
    return $this->name
  }
}
```
- 魔术方法__set()
当外边类里的属性设置的时候被调用
- 魔术方法__get()
- 魔术方法__isset()
- 魔术方法__unset()
- 类的访问权限
||private|protexted|public默认的|
|:--:|:--:|:--:|:--:|
|在同一类|可以|可以|可以|
|在类的外部|不可以|不可以|可以|
```
class Penson{
  piblic $name ='张三、';//公有的
  private $age = 27;//私有的
  protected $money= 90;//受保护的的
  
  //私有的成员方法  不能在类的外部直接访问
  private function getAge(){
return $this -> age;
  }
  //被保护的成员方法  不能在类的外部直接访问
  protected function getMoney(){
return $this -> money;
    
  }
  public function userCard(){
echo $this->getName() . $thi -> getMoney();
  }
  public function __set($name,$value){
    //魔术方法的set，只针对保护的和私有的
    if($key == 'name' && $value === 'laowang'){
       $this ->name = 'xiaowang';
    }
  }
  public function __get($key){
if($key =='age'){
  return '唉呀妈呀';
}
  }
  public function __isset($key){
     if($key == 'age'){
       return 'true';
     }
  }
  public function __unset($key){
     if($key == 'name'){
       return;
     }
  }
}
$xiaowang = new Penson();
//echo $xiaowang->name; //张三
//echo $xiaowang->age; //私有的
//echo $xiaowang->money ;//被保护的
//echo $xiaowang->userCard();张三90

$xiaowang->name  = '老王';//张三
echo $xiaowang->userCard()xiaowang90;
echo $xiaowang->age;
echo isset($xiaowang->age)//判断类里边有没有这个成员属性，返回布尔值，当私有或者首保护的时候返回false;
echo unset(xiaowang->name)//把成员属性干掉

```