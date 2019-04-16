PHP与mysql开发入门（下）
----------------------------------------------------
#### Mysql数据库客户端基础

mysql-数据库客户端界面mysql---workbench
www.mysql.com/downloads
- 创建数据库的语句
create schema 库名 default chracter set utf8
- 切换默认数据库
1)点右键第一项 set default schema
2)use 库名//命令行
- 如何用命令行操作数据库
```
先登陆数据库
mysql -u用户权限  -p(使用密码登陆)  
mysql -uroot -p  
提示输入密码  
登陆到mysql的管理环境中  
查看库列表  
show databases;  
会出现数据库私有库（一般不允许用户操作）与用户创建的库
进入到哪个数据库（即设置默认数据库）
use 库名;
命令需要加;分号（因为一些命令必须要有，系统会以为你没有输入完）

创建数据表
create table `库名`.`表名`(`id` INI NOT null AAUTO_INCREMENT COMMENT,`name` VARCHAR(40) NOT null COMMENT,`date` DATE NOT null COMMENT,`gender` CHAR(1) NOT null COMMENT,`PRIMARY` KEY(`id`) COMMENT '');

插入 insert into
删除 delete
修改 update
查询 select
```
数据库注释
```
-- max()
用--表示
```
复杂的sql语句
```
//所有的*
SELECT * FROM 库名.表明
//条件查询
配合函数的用法

//符合某一条件的总 count()
SELECT count(*),表明.* FROM 库名.表明 SHERE 字段="M";
//符合某一条件后里的最小值 min(某一字段) FROM 库名.表名
//求最大值max()
//求和sum()
//求平方根sqrt()
//求随机数的 rand()返回0-1的数字可以+、-、*、/
//第一个first()
//最后一个last()
//当前事件now()
//拼字符串的函数concat('132d','dsd')

//可以写自定义函数function选项
```
WHERE、BETWEEN、AND语句条件查询
```
大于、小于、等于、大于等于、小于等于符号
从某表中查询4<=id<10的数据
方法一：
SELECT * from 表名 WHERE ID>=4 AND ID<=10

方法二：
SELECT * from 表名 WHERE ID BETWEEN '4' AND '10'
BETWEEN与AND同时出现

//筛选姓王的学生
link %王%模糊查询   %号叫通配符，代表任意字符，%在哪对哪边模糊查询
'%六'  以六结尾
'%六%'  含有六
'六%'  //以什么开头
SELECT * from 表名 WHERE name link "王%"


```
mysql数据库不适合做大量数据的模糊查询，link不要滥用，查询速度慢，太占内存一般的搜索引擎不会用sql，

- 复杂语句
```
//按照某字段去排序order by(从小到大)
select * from 表名 order by 字段

//按照某字段去排序order by(从大到小)逆序排序
select * from 表名 order by 字段 desc

//按照某字段去排序order by(从小到大)asc正序排序（可以被省略）
select * from 表名 order by 字段 asc

//多表查询一些字段（where子句）
select 第一表名.字段名,第二表名.字段名  from 第一表名,第二表名 where 第一表名.字段名 = 第二表名.字段名

查询最需要的字段，节约计算机的资源，尽量不要*。

//多表查询一些字段（左连接LEFT JOIN）
select 第一表名.字段名,第二表名.字段名  from 第一表名 left join 第二表名 on 第一表名.字段名 = 第二表名.字段名 




```
