"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(mobileId, mobileName, mobileCost, mobileType) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    SmartPhone.prototype.printMobileDetails = function () {
        console.log("MobileId: " + this.mobileId);
        console.log("MobileName: " + this.mobileName);
        console.log("MobileCost:" + this.mobileCost);
        console.log("MobileType:" + this.mobileType);
    };
    return SmartPhone;
}(Mobile_1.Mobile));
var p = new SmartPhone(101, "samsung", 8200, "BasicPhone");
p.printMobileDetails();
