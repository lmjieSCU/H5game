var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FruitDoor = (function (_super) {
    __extends(FruitDoor, _super);
    function FruitDoor() {
        var _this = _super.call(this) || this;
        UI.addPic("downP_png", true, _this);
        return _this;
    }
    FruitDoor.pool = new BasePool(FruitDoor, 20);
    return FruitDoor;
}(Elements));
__reflect(FruitDoor.prototype, "FruitDoor");
//# sourceMappingURL=FruitDoor.js.map