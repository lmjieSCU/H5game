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
var FightVS = (function (_super) {
    __extends(FightVS, _super);
    function FightVS(parent) {
        var _this = _super.call(this) || this;
        _this.eff_vs = [];
        _this.eff_num = 0;
        _this.goFight = 120;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        GameRender.I.Add(_this, _this.update);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this._parent = parent;
        return _this;
    }
    FightVS.prototype.onEnter = function () {
        for (var i = 1; i <= 6; i++) {
            var eff = UI.addPic(this, "eff_vs_bg000" + i + "_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            eff.scaleX = UI.WINSIZE_W / eff.width;
            eff.scaleY = UI.WINSIZE_H / 2 / eff.height;
            eff.alpha = 0;
            this.eff_vs.push(eff);
        }
        var p1 = UI.addPic(this, "head0001_png", 0, UI.WINSIZE_H / 2, true);
        p1.x = UI.WINSIZE_W / 4 * 3;
        var p2 = UI.addPic(this, "head0003_png", 0, UI.WINSIZE_H / 2, true);
        p2.x = UI.WINSIZE_W / 4;
        p2.skewY = 180;
        egret.Tween.get(p1).to({ x: p1.width / 2 }, 400, egret.Ease.sineIn);
        egret.Tween.get(p2).to({ x: UI.WINSIZE_W - p2.width / 2 }, 400, egret.Ease.sineIn);
        var vs = UI.addPic(this, "vs_icon_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, 2);
        vs.alpha = 0;
        egret.setTimeout(function () {
            vs.alpha = 1;
            egret.Tween.get(vs).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.sineIn);
        }, this, 200);
    };
    FightVS.prototype.update = function () {
        if (this.goFight <= 0) {
            this._parent.goFight();
        }
        this.goFight--;
        if (this.eff_num >= this.eff_vs.length)
            this.eff_num = 0;
        for (var i = 0; i < this.eff_vs.length; i++) {
            this.eff_vs[i].alpha = 0;
        }
        this.eff_vs[this.eff_num].$setAlpha(1);
        this.eff_num++;
    };
    FightVS.prototype.onExit = function () {
        GameRender.I.Remove(this, this.update);
    };
    return FightVS;
}(egret.DisplayObjectContainer));
__reflect(FightVS.prototype, "FightVS", ["egret.DisplayObject"]);
//# sourceMappingURL=FightVS.js.map