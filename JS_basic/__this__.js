var person1={
    name:"羽",
    age:12,
    say:function (school){
        console.log('学校：'+school+'姓名'+this.name);
    }
    
};
var person2={
    name:"雨",
    age:13
};
person1.say.apply(person2,["二小"]);
console.log(person2.say);

