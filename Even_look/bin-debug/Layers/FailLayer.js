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
/**通关总结页面:失败
 * 返回按钮:[返回选关,重新开始]
 */
var FailLayer = (function (_super) {
    __extends(FailLayer, _super);
    function FailLayer() {
        return _super.call(this) || this;
    }
    FailLayer.prototype.init = function () {
        var ans = new Array();
        this.bg = UI.addPic(this, "bg_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.1 / this.bg.width, UI.WINSIZE_H * 1.1 / this.bg.height);
        //
        this.fail = UI.addPic(this, "defail_png", true);
        UI.setXandY(this.fail, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.5);
        UI.setscalXandY(this.fail, 0, 0);
        //
        this.toChooseLvBtn = UI.addPic(this, "return_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W * 2 / 7, UI.WINSIZE_H / 1.4);
        this.toChooseLvBtn.alpha = 0;
        this.reStartBtn = UI.addPic(this, "restart_png", true);
        UI.setXandY(this.reStartBtn, UI.WINSIZE_W * 5 / 7, UI.WINSIZE_H / 1.4);
        this.reStartBtn.alpha = 0;
        //
        var t1 = egret.Tween.get(this.fail).to({ scaleX: UI.WINSIZE_W * 0.8 / this.fail.width, scaleY: UI.WINSIZE_W * 0.8 / this.fail.width }, 1000);
        egret.setTimeout(function () { this.toChooseLvBtn.alpha = 1, this.reStartBtn.alpha = 1; }, this, 1100);
        ans.push(this.toChooseLvBtn);
        ans.push(this.reStartBtn);
        return ans;
    };
    return FailLayer;
}(Layer));
__reflect(FailLayer.prototype, "FailLayer");
//# sourceMappingURL=FailLayer.js.map