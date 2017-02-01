function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = 'zyy';
var getage=function(){
    return 18;
}
test`hello my name is ${myname},im ${getage()}`;