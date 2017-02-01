var myname = 'zyy';
// myname=13;
//自定义类型
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var xiaoming = new Person();
//会有类型提示
xiaoming.name = 'String';
xiaoming.age = 40;
//# sourceMappingURL=参数特性.js.map