var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this.rateOfInterest = 0;
    }
    Bank.prototype.roi = function () {
        return this.rateOfInterest;
    };
    return Bank;
}());
var BankX = /** @class */ (function (_super) {
    __extends(BankX, _super);
    function BankX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankX.prototype.roi = function () {
        return 10.0;
    };
    return BankX;
}(Bank));
var BankY = /** @class */ (function (_super) {
    __extends(BankY, _super);
    function BankY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankY.prototype.roi = function () {
        return 5.0;
    };
    return BankY;
}(Bank));
var bankx = new BankX();
console.log(bankx.roi());
