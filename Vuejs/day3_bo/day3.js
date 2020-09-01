// function a(){
//     console.log('enter a');
//     b();
// };

// function b(){
//     console.log('enter b');
//     // debugger;
//     c();
// };

// function c(){
//     console.log('enter c');
//     console.trace();
// };

// a();

// let pkg = {
//     "name": "mini_tools",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "dependencies": {
//         "jquery": "^1.12.4"
//     },
//     "devDependencies": {},
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC"
// };

// console.table(pkg);

// var a = 1;

//     function foo() {
//         console.log(a);
//         a = 2;     // 此处的a相当于window.a
//     }

//     foo();
//     console.log(a); 
// function foo() {
//     var a = b = 100; // 连续赋值
// }

// foo();

// console.log(window.b); // 在全局范围内访问 b
// console.log(b); // 在全局范围内访问 b，但是前面没有加 window 这个关键字

// console.log(window.a); // 在全局范围内访问 a
// console.log(a); // 

function fun(){
    console.log(this);
    console.log(this.name);
    
};
var obj1 ={
    name: "Tom",
    sayName: fun
};
var obj2 = {
    name: "Vae",
    sayName: fun
};
var name = "全局的name属性";
// fun();
//*以函数形式调用 this 是 window

//obj2.sayName();
//*以方法形式调用 this 是调用方法的对象

