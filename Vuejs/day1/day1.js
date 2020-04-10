// let name = '前端小课';
// console.log(name);
// let call = function(){
//     console.log('call fun:',name);
// }
// //*调用刚创建的函数
// call();

// function kill(a, b) {
//     // { '0': 3, '1': 2 }
//     console.log(arguments);
// //*arguments属性打印参数
//     return a * a - b;
// }
// kill(3, 2);

// // call 这个函数被提升了
// call();

// function call() {
//     // name 被提升了
//     console.log(name);
//     let name = '前端小课';
// }
// call();
var numbers = [];
for(var i = 0; i < 4; i++) {
    numbers.push(function() {
     return i;
 });
}
var result = numbers.map(function(e) {
    return e();
});
console.log(numbers); // 值是什么？