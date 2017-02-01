var myname: string = 'zyy';
// myname=13;
//自定义类型
class Person {
    name: string;
    age: number;
}
var xiaoming: Person = new Person();
//会有类型提示
xiaoming.name = 'String';
xiaoming.age = 40;