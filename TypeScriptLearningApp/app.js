var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(hunger, thirst, isAgressive) {
        var _this = _super.call(this) || this;
        _this.Hunger = hunger;
        _this.Thirst = thirst;
        _this.IsAgressive = isAgressive;
        return _this;
    }
    Cat.prototype.Eating = function () {
    };
    Cat.prototype.Drinking = function () {
    };
    Cat.prototype.Fighting = function () {
        return true;
    };
    return Cat;
}(Animal));
var Tigris = (function (_super) {
    __extends(Tigris, _super);
    function Tigris(hunger, thirst, isAgressive) {
        var _this = _super.call(this) || this;
        _this.Hunger = hunger;
        _this.Thirst = thirst;
        _this.IsAgressive = isAgressive;
        return _this;
    }
    Tigris.prototype.Eating = function () {
    };
    Tigris.prototype.Drinking = function () {
    };
    Tigris.prototype.Fighting = function () {
        return true;
    };
    return Tigris;
}(Animal));
//# sourceMappingURL=app.js.map