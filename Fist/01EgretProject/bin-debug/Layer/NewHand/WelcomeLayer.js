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
var WelcomeLayer = (function (_super) {
    __extends(WelcomeLayer, _super);
    function WelcomeLayer() {
        return _super.call(this) || this;
    }
    WelcomeLayer.prototype.onContent = function () {
        var bg = UI.addPic(this, "Popup_welcome_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // let text: egret.TextField = UI.addText(this, "欢迎进入拳皇新世界", UI.WINSIZE_W/2, UI.WINSIZE_H/2 - 10, true, 20, 0xffffff);
        // let text2: egret.TextField = UI.addText(this, "点击屏幕任意位置进入新手引导", UI.WINSIZE_W/2, UI.WINSIZE_H/2 + 20, true, 20, 0xffffff);
        // bg.scaleX = (text2.width+20)/bg.width;
        // bg.scaleY = (text.height+text2.height+60)/bg.height;
    };
    WelcomeLayer.prototype.onClickBg = function () {
        Home.instace.getChildAt(2).getChildAt(1).newHand();
        SceneManager.getInstance().RemoveLayer(this);
    };
    return WelcomeLayer;
}(WindowLayer));
__reflect(WelcomeLayer.prototype, "WelcomeLayer");
//# sourceMappingURL=WelcomeLayer.js.map