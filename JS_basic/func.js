function Person(name){
    console.log(this.name=name);
};

var person1=new Person("一号");
var person2=new Person("二号");
console.log("Person:");
console.log(person1.__proto__);
console.log("object:");
console.log(person1.__proto__.__proto__);
console.dir(Object);


console.dir(Person);

console.log(person1.constructor);
console.log(person1.__proto__.constructor);
console.log('------------------');

console.log('------------------');
console.dir(person1);

// console.log(person2.constructor);
// console.log(person2.__proto__);

