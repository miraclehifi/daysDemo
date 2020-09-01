// prototype的引入
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.getName = function getName(){
        console.log('名字 :'+this.name);
    };
    var per1 = new Person("Alice",16,"girl");
    var per2 = new Person("AIa",16,"boy");
    //调用
    per1.getName();
    per2.getName();
};
//? getName()方法写在构造函数 Person() 内部，构造函数每执行一次，就会给每个实例创建一个新的 sayName 方法
//* 较好的改进方式：把方法添加到原型中
Person.prototype.getName = function (){
    console.log('名字 :'+this.name);
};
//原型规则
//p1 所有的引用类型（数组、对象、函数），都具有对象特性，都可以自由扩展属性。null除外。
var obj={};
var arr=[];
obj.a=1;
arr.a=1;
function fn(){

};
fn.a=1;
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);

console.log(fn.prototype);

//p2 判断一个数组的变量类型
var arrP=[];
console.log(arrP instanceof Array);
console.log(typeof arrP);//typeof方法无法判断是否为数组

//p3 原型链继承
var Animal=function (){
    this.name=function (){
        console.log("Animal");
    };   
};
var Dog=function (){
    this.fear=function(){
        console.log("Dog");
    };
};

Dog.prototype=new Animal();
var hsq=new Dog();




//p4

//p5


//创建数组
//p1 数组字面量
var arr1=[];
var arr2=[1,2,3];
//p2 构造函数
var arr=new Array();
//*参数为空，空数组；参数为一个数值，数组长度；参数为多个数值，数组元素；
var arr3=[];
arr3[0]=1;
arr3[2]=3;
//*非连续数组
//遍历数组
var arr4=[1,2,3,4,5];
for(var i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
//翻转数组
var arr5=[1,2,3,4,5];
var arr5New=new Array();
for(var i=0;i<arr5.length;i++){
    arr5New[i]=arr5[arr5.length-i-1];
}
console.log(JSON.stringify(arr5New));
//?JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串
//冒泡排序
var arr7=[3,2,4,5,1,];
for(var i=0;i<arr7.length-1;i++){
    for(var j=0;j<arr7.length-i-1;j++){
        if(arr7[j]>arr7[j+1]){
            var exchange=arr7[j];
            arr7[j]=arr7[j+1];
            arr7[j+1]=exchange;
        }
    }
}
console.log(JSON.stringify(arr7));

//数组的基本方法

//p1 push() 向数组最后面插入一个或多个元素
var arrE=["一","二","三"];
var result1=arrE.push("四","五");
//*返回值为改变后的数组长度

//p2 pop() 删除数组的最后一个元素
var arrE1=["一","二","三"];
var result2=arrE1.POP();
//*返回值为被删除的元素

//p3 unshift()  向数组最前面插入一个或多个元素
var arrE2=["一","二","三"];
var result3=arrE2.unshift("零");
//*返回值为改变后的长度，插入后，元素索引依次更新

//p4 shift() 删除数组的第一个元素
var arrE3=new Array("一","二","三");
var result4=arrE3.shift();
//*返回值为被删除的元素

//数组的常见方法

//p1 slice() 从数组中提取指定的一个或多个元素
var arrF=new Array("一","二","三");
var result5=arrF.slice(0,1);
//*返回值为新的数组

//p2 splice() 从数组中删除指定的一个或多个元素
var arrF1=new Array("一","二","三");
var result6=arrF1.splice(0,1);
var result7=arrF.splice(0,2,"1","2");
//*返回值为被删除元素组成的数组
//p3 concat() 连接两个或多个数组
var arrF2=new Array("一","二","三");
var arrF3=new Array("四","五","六");
var result8=arrF2.concat(arrF3);
//*返回值为新数组

//p4 join() 将数组转换为字符串
var arrF3=new Array("一","二","三");
var rusult9=arrF3.join();
//*返回值为转换的字符串

//p5 reverse() 翻转数组
var arrF4=new Array("一","二","三");
var result10=arrF.reverse();
//*返回值为翻转后的数组

//p6 sort() 对数组的元素,默认按照Unicode编码，从小到大进行排序
let arrF5=[
    {
        title:'雨伞',
        price:'50',
    },
    {
        title:'T恤',
        price:'500',
    },
    {
        title:'雨衣',
        price:'20',
    },
]
var result11=arrF5.sort(function(a,b){
    return parseInt(a.price)-parseInt(b.price);  
})
//*返回值为排序后的原数组

//数组的遍历

//p1 for循环
var arrG=["一","二","三"];
for(var i=0;i<arrG.length;i++){
    console.log(arrG[i]);
}

//p2 forEach()
var arrG1=["一","二","三"];
arrG1.forEach(function (item, index, obj){
  console.log(item);
});
//*forEach() 的返回值是 undefined

//p3 map()
var arrG2=[1,2,3,4,5,6];
var newArrG2=arrG2.map(item=>item+1);
console.log(arrG2);
console.log(newArrG2);
//?开发中经常用到的案例
var arrG3=[
    {
        name:'余羽',age:'16'
    },
    {
        name:'一叶',age:'15'
    },
]
var arrG4=arrG3.map(item=>item.name);
var arrG5=arrG3.map(item=>({
    myName:item.name,
    myAge:item.age,
}));
console.log(arrG3);
console.log(arrG4);
console.log(arrG5);
//*返回值为提取后的新数组

//p4 filter()
var arrG6=[1,2,3,4,5,6,7,8,9];
var arrNew1=arrG6.filter(item=>item>4);
//?开发中经常用到的案例
const arrG7 = [
    { name: '许嵩', type: '一线' },
    { name: '周杰伦', type: '过气' },
    { name: '邓紫棋', type: '一线' },
];
var arrNew2=arrG7.filter(item=>item.type=='一线');
console.log(arrNew2);



//p5 every()
var arrG8 = ["千古", "宿敌", "南山忆", "素颜"];
var bool1=arrG8.every(function (element,index,array){
    return element.length>2;   
});
console.log(bool1);

//p6 some()同上

//p7 reduce()如果能熟练使用 reduce 的用法，将能替代很多其他的数组方法。
var arrG9=[1,2,3,4,5,6,7,8,9];
var sumValue=arrG9.reduce(function (total,item){
    return total=total+item;});
console.log(sumValue);

//数组的其他用法

//p1 indexOf() 和 lastIndexOf()：获取数据的索引
var arrH = ["a","b","c","d","e","d","c"];
var index1=arrH.indexOf("c");//从前往后
var index2=arrH1.indexOf("c");//从后往前
//*返回值为数组下标，没找到则返回-1，利用这个方法，我们可以判断某个值是否在指定的数组中。

//p2 find()


//p3 findIndex()

//p4 Array.from()

//p5 Array.of()

//数组练习
//p1 数组去重

//创建一个数组
var arrJ = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素
for(var i=0;i<arrJ.length;i++){
    for(var j=i+1;j<arrJ.length;j++){
        if(arrJ[i]==arrJ[j]){
            arrJ.splice(j,1);
            j--;
        }
    }
}
console.log(arrJ);

//P2 
/**
 * 
 */
function test(){
    var num=1;
    return  console.log(num);
};
