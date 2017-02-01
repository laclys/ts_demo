function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = 'zyy';
var getage = function () {
    return 18;
};
(_a = ["hello my name is ", ",im ", ""], _a.raw = ["hello my name is ", ",im ", ""], test(_a, myname, getage()));
var _a;
//# sourceMappingURL=自动拆分字符串.js.map