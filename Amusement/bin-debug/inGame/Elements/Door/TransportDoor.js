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
/**传送门 */
var TransportDoor = (function (_super) {
    __extends(TransportDoor, _super);
    function TransportDoor() {
        var _this = _super.call(this) || this;
        var data = RES.getRes("TransportDoor_json");
        var txtr = RES.getRes("TransportDoor_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("TransportDoor"));
        _this.animation.frameRate = 5;
        _this.animation.anchorOffsetX = _this.animation.width / 2;
        _this.animation.anchorOffsetY = _this.animation.height / 2;
        _this.addChild(_this.animation);
        return _this;
    }
    TransportDoor.prototype.start = function () {
        this.animation.gotoAndPlay(1, -1);
        return;
    };
    Object.defineProperty(TransportDoor.prototype, "tileID", {
        get: function () {
            return this._tileID;
        },
        set: function (arg1) {
            this._tileID = arg1;
            if (arg1 >= TileConst.T_DOOR_ENTRY1 && arg1 <= TileConst.T_DOOR_ENTRY9) {
                this.animation.y = 30;
            }
            else if (arg1 >= TileConst.T_DOOR_EXIT1 && arg1 <= TileConst.T_DOOR_EXIT9) {
                this.animation.y = -30;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    TransportDoor.prototype.dispose = function () {
        return;
    };
    TransportDoor.pool = new BasePool(TransportDoor, 10);
    return TransportDoor;
}(Elements));
__reflect(TransportDoor.prototype, "TransportDoor");
//# sourceMappingURL=TransportDoor.js.map