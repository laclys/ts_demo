var sum = function (arg1, arg2) { return arg1 + arg2; };
var sum2 = function (arg1) {
    console.log(arg1);
};
var myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArr.filter(function (value) { return value % 2 == 0; }));
//解决this指针问题
function getStock(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log('name is' + _this.name);
    }, 1000);
}
var stock = new getStock('SONY');
//# sourceMappingURL=箭头表达式.js.map