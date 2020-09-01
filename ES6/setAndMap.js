const set = new Set();
let array = [1,2,2,3,3,3];
array.forEach(item => set.add(item));
// for(let i = 1; i < set.length; i++){
//     console.log(set[i]);
// };
for (let item of set) {
    // console.log(item);
};
//* 通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。

function arrayMax(){
    let result = 0;
    for(let item of arguments){
        if(result < item){
            result = item;
        };
    };
    return result;
};
// console.log(arrayMax(3,4,2,0));
//* 使用arguments参数

function isPush(one,two,three,...arr){
    if(arr.indexOf(one) == -1) arr.push(one);
    if(arr.indexOf(two) == -1) arr.push(two);
    if(arr.indexOf(three) == -1) arr.push(three);
    return arr;
}
// console.log(isPush(1,2,3,1,2,5,6,4));
//* 使用rest参数