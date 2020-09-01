//内置对象 Math
var num=-0.6;

console.log(Math.abs(num));        //取绝对值

console.log(Math.floor(num));      //向下取整，向小取

console.log(Math.ceil(num));       //向上取整，向大取

console.log(Math.round(num));      //四舍五入取整（正数四舍五入，负数五舍六入）

console.log(Math.random());        //生成0-1之间的随机数

//内置对象 Date
var date0=new Date();
console.log(date0);
//Date对象的方法



//String对象的方法

//p1 charAt()
var str="qwertyui";
console.log(str.charAt(0));
var str1=new String("asdfghjkl");
for(var i=0;i<str1.length;i++){
    console.log(str1.charAt(i));
}
//*一般打印数组和json的时候用索引，打印String不建议用索引。

//p2 charCodeAt()
var str3="q的";
console.log(str3.charCodeAt(0));
console.log(str3.charCodeAt(1));

//代码举例：打印字符串的占位长度
//提示：一个英文占一个位置，一个中文占两个位置。
//思路：判断该字符是否在0-127之间（在的话是英文，不在是非英文）。

var strE = "I love my country!我你爱中国！";

function stringZFlength(str){
    var count=0;
    for(var i=0;i<strE.length;i++){
        if(strE.charCodeAt(i)<=127){
            count++;
        }else{
            count+=2;
        } 
    };
    return count;
};
var ZFlength=stringZFlength(strE);
console.log(ZFlength);

//*sort()方法其实底层也是用到了charCodeAt()，因为用到了Unicode编码

//p3 String.fromCharCode()

//p4 indexOf()  lastIndexOf()

var str4="qweqrtyuiop";
console.log(str4.indexOf('q',0));
console.log(str4.indexOf('q',1));
//*如果获取的索引值为0，说明字符串是以查询的参数为开头的。这个方法还可以指定第二个参数，用来 指定开始查找的位置。

//p5 concat()
//*这种方法基本不用，直接把两个字符串相加就好。

//p6 slice()
var str5="qwertyuiop";
console.log(str5.slice(1,4));//包左不包右，0,[1,2,3],4,5

//p7 substring()
//*substring()和slice()是类似的,但比slice()稍微智能一些

//p8 substr() 
//*ECMAscript 没有对 substr() 方法进行标准化，因此不建议使用它

//p9 split() 
//![重要]
var str6="qwertyuiop";
var arrStr=str6.split("");
console.log(arrStr);
console.log(str6);
var str7 = "生命壹号|许嵩|smyhvae";
console.log(str7.split("|"));//""里的字符不会出现在数组的任何一个元素中
//*split()这个方法在实际开发中用得非常多。一般来说，从接口拿到的json数据中，经常会收到类似于"q, i, a, n"这样的字符串，前端需要将这个字符串拆分成['q', 'i', 'a', 'n']数组，这个时候split()方法就排上用场了

//p10 trim()
var str8="  a b c  ";
console.log(str8.trim());

//p11 replace()
var str9 = "Today is fine day,today is fine day !!!"
    console.log(str9);
    console.log(str9.replace("today","tomorrow"));  //只能替换第一个today
    console.log(str9.replace(/today/gi,"tomorrow")); //这里用到了正则，才能替换所有的today
//p11 toLowerCase(),toUpperCase()
    var str10 = "abcdEFG";
    //转换成小写
    console.log(str.toLowerCase());
    //转换成大写
    console.log(str.toUpperCase());

//字符串练习
//?"smyhvaevaesmyh"查找字符串中所有m出现的位置
var strL = "abcoefoxyozzopp";
for(var i=0;i<strL.length;i++){
    if(strL.charAt(i)==="o"){
        console.log(i);
    };
};

//?判断一个字符串中出现次数最多的字符，统计这个次数
var strL1 = "smyhvaevaesmyhvae";
var json={};
for(var i=0;i<strL1.length;i++){
    var key=strL.charAt(i)
    if(json[key]===undefined){
        json[key]=1;
    }else{
        json[key]++;
    };
}
console.log(json);
//获取json中属性值最大的选项
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        return i;
        
    }, i*1000 );
    console.log(i);
}

arr1.map(function (当前元素, 当前元素索引) {})