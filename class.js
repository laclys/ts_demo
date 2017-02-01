var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var boy = (function () {
    function boy(name) {
        this.name = name;
        console.log('嘿嘿');
    }
    //    public name;
    boy.prototype.eat = function () {
        console.log('eating!!!');
    };
    return boy;
}());
var p1 = new boy('zetman');
// p1.name='zetmen';
p1.eat();
var p2 = new boy('superman');
// p2.name='superman';
p2.eat();
var smallBoy = (function (_super) {
    __extends(smallBoy, _super);
    function smallBoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    smallBoy.prototype.play = function () {
    };
    return smallBoy;
}(boy));
var children = [];
children[0] = new boy('jojo');
//# sourceMappingURL=class.js.map