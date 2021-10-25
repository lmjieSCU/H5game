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
var GoodTip = (function (_super) {
    __extends(GoodTip, _super);
    function GoodTip() {
        var _this = _super.call(this) || this;
        _this.tips = [null];
        _this.tips.push(UI.addPic("good_png", true, _this));
        _this.tips.push(UI.addPic("excellent_png", true, _this));
        _this.tips.push(UI.addPic("prefect_png", true, _this));
        return _this;
    }
    GoodTip.prototype.setType = function (arg1) {
        var loc1 = null;
        SoundCtrl.I.playmusic("great");
        for (var loc in this.tips) {
            loc1 = this.tips[loc];
            if (loc1 == null) {
                continue;
            }
            loc1.visible = false;
        }
        this.tips[arg1].visible = true;
        this.doAction();
        return;
    };
    GoodTip.prototype.doAction = function () {
        this.scaleY = 0;
        this.scaleX = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100).call(this.action2, this);
        return;
    };
    GoodTip.prototype.action2 = function () {
        egret.Tween.get(this).to({ "y": this.y - 80 }, 700).call(this.onActionEnd, this);
        ;
    };
    GoodTip.prototype.onActionEnd = function () {
        egret.Tween.removeTweens(this);
        GoodTip.pool.put(this);
        this.parent.removeChild(this);
        return;
    };
    GoodTip.pool = new BasePool(GoodTip, 3);
    return GoodTip;
}(Elements));
__reflect(GoodTip.prototype, "GoodTip");
//# sourceMappingURL=GoodTip.js.map