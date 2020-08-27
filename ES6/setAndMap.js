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

