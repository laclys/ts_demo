function test(a:string,b:string,c:string="jojo"){
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxx','yyy','zzzz');
test('xxx','yyy');
//可选参数
function test2(a:string,b?:string,c:string="jojo"){
    console.log(a);
    console.log(b);
    console.log(c);
}
test2('xxx');