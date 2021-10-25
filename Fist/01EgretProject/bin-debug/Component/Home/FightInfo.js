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
var FightInfo = (function (_super) {
    __extends(FightInfo, _super);
    function FightInfo(type, x, y, wid, high) {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.type = type;
        _this.x = x;
        _this.y = y;
        _this.width = wid;
        _this.height = high;
        return _this;
    }
    FightInfo.prototype.onEnter = function () {
        switch (this.type) {
            case 'level':
                this.createLvel();
                break;
            case 'house':
                this.createHouse();
                break;
            case 'rank':
                this.createRank();
                break;
            case 'match':
                this.createMatch();
                break;
        }
    };
    FightInfo.prototype.createLvel = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(this.width / 4, 0, this.width / 2, 40);
        bg.graphics.endFill();
    };
    FightInfo.prototype.createHouse = function () { };
    FightInfo.prototype.createRank = function () { };
    FightInfo.prototype.createMatch = function () { };
    return FightInfo;
}(egret.DisplayObjectContainer));
__reflect(FightInfo.prototype, "FightInfo", ["egret.DisplayObject"]);
//# sourceMappingURL=FightInfo.js.map