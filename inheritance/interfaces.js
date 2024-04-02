// interface IEmployee {
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.sum = function () {
        return (this.a + this.b);
    };
    C1.prototype.sub = function () {
        return (this.x - this.y);
    };
    return C1;
}());
var c1 = new C1();
c1.a = 100;
c1.b = 200;
c1.x = 300;
c1.y = 400;
console.log(c1.sum());
console.log(c1.sub());
