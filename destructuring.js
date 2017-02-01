function getStock() {
    return {
        code: 'IBM',
        price: 100,
        name: {
            name1: 'xiaoming',
            name2: 'xiaoyang'
        }
    };
}
/*var stock=getStock();
var code=stock.code;
var price=stock.price;*/
//析构表达式
var _a = getStock(), code = _a.code, price = _a.price, name2 = _a.name.name2;
console.log(code);
console.log(price);
console.log(name2);
//数组
var arr1 = [1, 2, 3, 4];
var num1 = arr1[0], num2 = arr1[1], others = arr1.slice(2);
console.log(num1);
console.log(num2);
console.log(others);
//# sourceMappingURL=destructuring.js.map