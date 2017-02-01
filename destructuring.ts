function getStock() {
    return {
        code: 'IBM',
        price: 100,
        name:{
            name1:'xiaoming',
            name2:'xiaoyang'
        }
    }
}
/*var stock=getStock();
var code=stock.code;
var price=stock.price;*/
//析构表达式
var {code,price,name:{name2}}=getStock();

console.log(code);
console.log(price);
console.log(name2);

//数组
var arr1=[1,2,3,4];
var[num1,num2,...others]=arr1;
console.log(num1);
console.log(num2);
console.log(others);