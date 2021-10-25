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
var MovePoint = (function (_super) {
    __extends(MovePoint, _super);
    function MovePoint() {
        var _this = _super.call(this) || this;
        _this.player = SplashScene.instance.P2OwnTheBtn ? 2 : 1;
        _this.yzScale = 0.3;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        FightMainRender.getInstance().Add(_this, _this.update);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    MovePoint.prototype.onEnter = function () {
        this.targetMove = new egret.DisplayObjectContainer();
        // let point: egret.Shape = new egret.Shape();
        // point.graphics.beginFill(0x000000);
        // point.graphics.drawRect(0, 0, 50, 10);
        // point.graphics.endFill();
        var point = UI.addPic(this, "Fight_pic_lightning_png", 0, 0, true);
        point.anchorOffsetX = point.width / 2;
        this.targetMove.addChild(point);
        this.targetMove.y = _level0.P1_role.y - 250;
        this.addChild(this.targetMove);
        this.p1yz = UI.addPic(this, "yz_png", 0, 0, true, this.yzScale);
        this.p2yz = UI.addPic(this, "yz_png", 0, 0, true, this.yzScale);
        this.p1yz.y = _level0.P1_role.y;
        this.p2yz.y = _level0.P2_role.y;
        this.p1yz.anchorOffsetX = this.p1yz.width / 8 * 5;
        this.p2yz.anchorOffsetX = this.p1yz.width / 8 * 3;
        this.p1yzy = this.p1yz.y;
        this.p2yzy = this.p2yz.y;
    };
    MovePoint.prototype.update = function () {
        switch (this.player) {
            case 1:
                this.targetMove.x = _level0.P1_role.x;
                this.targetMove.y = _level0.P1_role.y - 250;
                break;
            case 2:
                this.targetMove.x = _level0.P2_role.x;
                this.targetMove.y = _level0.P2_role.y - 250;
                break;
        }
        this.p1yz.x = _level0.P1_role.x;
        this.p2yz.x = _level0.P2_role.x;
        this.p1yz.$setScaleX(_level0.P1_role.y / this.p1yzy * 2 * this.yzScale);
        this.p1yz.$setScaleY(_level0.P1_role.y / this.p1yzy * this.yzScale);
        this.p2yz.$setScaleX(_level0.P2_role.y / this.p2yzy * 2 * this.yzScale);
        this.p2yz.$setScaleY(_level0.P2_role.y / this.p2yzy * this.yzScale);
    };
    MovePoint.prototype.onExit = function () {
        FightMainRender.getInstance().Remove(this, this.update);
    };
    return MovePoint;
}(egret.DisplayObjectContainer));
__reflect(MovePoint.prototype, "MovePoint", ["egret.DisplayObject"]);
//# sourceMappingURL=MovePoint.js.map