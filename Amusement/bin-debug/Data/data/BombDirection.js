var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BombDirection = (function () {
    function BombDirection() {
    }
    BombDirection.UP = 1; //上
    BombDirection.DOWN = 2; //下
    BombDirection.LEFT = 3; //左
    BombDirection.RIGHT = 4; //右
    return BombDirection;
}());
__reflect(BombDirection.prototype, "BombDirection");
//# sourceMappingURL=BombDirection.js.map