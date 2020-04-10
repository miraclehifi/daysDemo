// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction();
// }
// // increment 是一个函数
// const increment = createCounter();
// const c1 = increment;
// const c2 = increment;
// const c3 = increment;
// console.log(c1, c2, c3); // 1,2,3
(function () {
    var numbers = [];
    for (var i = 0; i < 4; i++) {
        numbers.push(function () {
            return i;
        });
    }
    var result = numbers.map(function (e) {
        return e();
    });
    console.log(result); // 值是什么？
})();