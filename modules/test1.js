"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myfunc = exports.myvar = void 0;
exports.myvar = "welcome";
function myfunc() {
    console.log("This is my function");
}
exports.myfunc = myfunc;
var MyClass = /** @class */ (function () {
    function MyClass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = b;
        this.b = b;
    }
    return MyClass;
}());
exports.MyClass = MyClass;
