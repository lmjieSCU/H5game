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
var LineBombEffect = (function (_super) {
    __extends(LineBombEffect, _super);
    function LineBombEffect() {
        var _this = _super.call(this) || this;
        _this.img1 = UI.addPic("hengshu1_png", true, _this);
        return _this;
    }
    LineBombEffect.prototype.reset = function () {
        this.img1.scaleX = 1;
        this.img1.scaleY = 1;
        this.img1.rotation = 0;
        this.img1.visible = true;
        return;
    };
    LineBombEffect.prototype.play = function (type) {
        this.reset();
        this.img1.scaleX = 0.2;
        this.img1.scaleY = 0.7;
        if (type != 1) {
            this.img1.rotation = 0;
        }
        else {
            this.img1.rotation = 90;
        }
        egret.Tween.get(this.img1).to({ "scaleY": 2.5 }, 100).call(this.onActionEnd, this);
        return;
    };
    LineBombEffect.prototype.onActionEnd = function () {
        this.img1.visible = false;
        this.parent.removeChild(this);
        LineBombEffect.pool.put(this);
        return;
    };
    LineBombEffect.pool = new BasePool(LineBombEffect, 10);
    return LineBombEffect;
}(Elements));
__reflect(LineBombEffect.prototype, "LineBombEffect");
//# sourceMappingURL=LineBombEffect.js.map