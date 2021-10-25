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
/**手指移动*/
var GuideArrow = (function (_super) {
    __extends(GuideArrow, _super);
    function GuideArrow() {
        var _this = _super.call(this) || this;
        _this.shouzhi = UI.addPic("shouzhi_png", true, _this);
        _this.shouzhi.x = _this.shouzhi.width / 2;
        _this.shouzhi.y = _this.shouzhi.height / 2;
        return _this;
    }
    GuideArrow.prototype.moveBetween = function (arg1, arg2) {
        this.shouzhi.alpha = 1;
        this.p1Pos = GameCtrl.I._fightCtrl.getCandyPosition(arg1.x, arg1.y);
        this.p2Pos = GameCtrl.I._fightCtrl.getCandyPosition(arg2.x, arg2.y);
        this.x = this.p1Pos.x;
        this.y = this.p1Pos.y;
        var disX = this.p2Pos.x - this.p1Pos.x;
        var disY = this.p2Pos.y - this.p1Pos.y;
        var dis = Math.sqrt(disX * disX + disY * disY);
        egret.Tween.get(this, { loop: true }).to({ "x": this.p2Pos.x, "y": this.p2Pos.y, }, dis * 10).wait(200).to({ "x": this.p1Pos.x, "y": this.p1Pos.y, }, dis * 10);
        return;
    };
    GuideArrow.prototype.clear = function () {
        egret.Tween.removeTweens(this);
        this.shouzhi.alpha = 0;
        return;
    };
    return GuideArrow;
}(egret.DisplayObjectContainer));
__reflect(GuideArrow.prototype, "GuideArrow");
//# sourceMappingURL=GuideArrow.js.map