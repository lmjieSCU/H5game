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
var NetErrLayer = (function (_super) {
    __extends(NetErrLayer, _super);
    function NetErrLayer(param) {
        var _this = _super.call(this) || this;
        _this.fun = null;
        _this._content = param;
        return _this;
    }
    NetErrLayer.prototype.onEnter = function () {
        NetErrLayer.instance = this;
        var bg = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = 30;
        bg.scaleY = 20;
        this.colorbg = UI.addPic(this, "pub_dialog_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this.colorLabel = new egret.TextField();
        this.colorLabel.textColor = 0xfffff0;
        this.colorLabel.width = 300;
        this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.colorLabel.textAlign = "center";
        this.colorLabel.text = this._content;
        this.colorLabel.size = 22;
        this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
        this.colorLabel.y = UI.WINSIZE_H / 2;
        this.addChild(this.colorLabel);
        //
        UI.addBtn(this, "pub_button_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 100, true, function (arg) {
            if (NetErrLayer.instance.fun) {
                NetErrLayer.instance.fun.call(NetErrLayer.instance);
            }
            SceneManager.Instance.popScene();
        });
    };
    NetErrLayer.prototype.addCallBack = function (func) {
        this.fun = func;
    };
    NetErrLayer.prototype.onExit = function () {
    };
    return NetErrLayer;
}(Scene));
__reflect(NetErrLayer.prototype, "NetErrLayer");
//# sourceMappingURL=NetErrLayer.js.map