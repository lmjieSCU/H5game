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
/**阴影mask*/
var GuideMask = (function (_super) {
    __extends(GuideMask, _super);
    function GuideMask() {
        var _this = _super.call(this) || this;
        return _this;
    }
    GuideMask.prototype.createMask = function (arg1) {
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0xff0000);
        for (var loc in arg1) {
            var pos = GameCtrl.I._fightCtrl.getCandyPosition(arg1[loc].x, arg1[loc].y);
            sp.graphics.drawRect(pos.x - GameConst.CARD_W / 2, pos.y - GameConst.CARD_W / 2, GameConst.CARD_W, GameConst.CARD_W);
        }
        sp.graphics.endFill();
        this.addChild(sp);
        this.init(sp);
        return;
    };
    GuideMask.prototype.clear = function () {
        this.removeChildren();
    };
    GuideMask.prototype.init = function (dp) {
        var container = new egret.DisplayObjectContainer();
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.8);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        container.addChild(bg);
        container.addChild(dp);
        dp.blendMode = egret.BlendMode.ERASE;
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(container);
        var bitmap = new egret.Bitmap(renderTexture);
        this.addChild(bitmap);
        bitmap.touchEnabled = true; //允许点击
        bitmap.pixelHitTest = true; //镂空区域不响应点击，这样可以穿透点击到下面的背景
    };
    return GuideMask;
}(egret.DisplayObjectContainer));
__reflect(GuideMask.prototype, "GuideMask");
//# sourceMappingURL=GuideMask.js.map