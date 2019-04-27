// function a(){
//     return arguments
// }
// console.log(a(1,2,3,4,5,6))
// console.log(a(1,2,3,4,5,6)[0])
// console.log([...a(1,2,3,4,5,6)])

// function b(name){
//     this.name = name
//     return this.name
// }

// a.prototype.s=function(){
//     console.log(this.name)
// }
// var p1 = new b('we')
// var p2 = new b('eqwdsa')

// console.log(p1)
// console.log(p2.s)

// var obj = {
//     user:'zhangsan.zx',
//     getName:function(){
//         return user;
//     }
// }
// var getNameFn = obj.getName;
// console.log(getNameFn)
// console.log(getNameFn());  //user is not defined
// console.log(obj.getName) //user is not defined


function fun(n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n)
        }
    }
}
var a = fun(0)   //undefined    fun函数
a.fun(1)  //0  fun函数
a.fun(2)  //0
var b = fun(0).fun(1).fun(2).fun(3)
var c = fun(0).fun(1)
c.fun(2)
c.fun(3)

