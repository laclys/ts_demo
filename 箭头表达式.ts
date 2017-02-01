var sum = (arg1, arg2) => arg1 + arg2;
var sum2 = arg1 => {
    console.log(arg1);
}
var myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArr.filter(value => value % 2 == 0));

//解决this指针问题
function getStock(name:string){
    this.name=name;
    setInterval(()=>{
        console.log('name is'+this.name);
    },1000);
}

var stock =new getStock('SONY');