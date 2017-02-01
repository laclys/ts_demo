function test(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxx', 'yyy', 'zzzz');
test('xxx', 'yyy');
//可选参数
function test2(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test2('xxx');
//# sourceMappingURL=默认参数.js.map