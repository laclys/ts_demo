//传任意数量参数
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3, 4);
func1(5, 6, 7, 8, 9, 0);
//# sourceMappingURL=RestAndSpread.js.map