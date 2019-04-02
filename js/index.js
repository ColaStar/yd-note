// // {
// //     x = Math.PI;
// //     cx = Math.cos(x);
// //     console.log('cos(1)='+cx)
// // }

// // console.log(s)
// // console.log(d);

// // var s = function(){}
// // function d(){}

// // if(!s)
// // console.log(1)
// // else;

// var o = {
//     next:{
//         next:{
//             next:{
//                 next:{
//                     next:{p:222}
//                 }
//             }
//         }
//     }
// }

// function Ofn(o){
// for(;o.next;o=o.next)/*empty */;
// return o
// }
// console.log(Ofn(o))


// if(true){
//     throw new Error('212122')
// }
var arr = [1,2,3,4,5,6,7,8]
// var b = [].concat(a)
// var c =b.forEach(ele=> ele+1)
// console.log(a,b,c)

var user = { 
    age: 20, 
    init:function(){
           return this.age
          } 
   } 
   var data = {age:40} 
   var s = user.init.bind(data); 
   console.log(s())//40