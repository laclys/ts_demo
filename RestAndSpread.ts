//传任意数量参数
function func1(...args){
    args.forEach(function (arg){
        console.log(arg);
    })
}
func1(1,2,3,4);
func1(5,6,7,8,9,0);