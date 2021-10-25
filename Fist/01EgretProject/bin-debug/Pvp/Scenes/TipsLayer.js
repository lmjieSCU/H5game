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
var TipsLayer = (function (_super) {
    __extends(TipsLayer, _super);
    function TipsLayer(param) {
        var _this = _super.call(this) || this;
        _this._content = param;
        return _this;
    }
    TipsLayer.prototype.onEnter = function () {
        TipsLayer.instance = this;
        this.colorbg = UI.addPic(this, "tipbg_png", 0, UI.WINSIZE_H / 2 - 12, false);
        this.colorLabel = new egret.TextField();
        this.colorLabel.textColor = 0xf90000;
        this.colorLabel.width = 300;
        this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.colorLabel.textAlign = "center";
        this.colorLabel.text = this._content;
        this.colorLabel.size = 30;
        this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
        this.colorLabel.y = UI.WINSIZE_H / 2;
        this.addChild(this.colorLabel);
        //
        egret.setTimeout(function (arg) {
            this.stage.removeChild(this);
        }, this, 1000);
    };
    TipsLayer.prototype.onExit = function () {
    };
    return TipsLayer;
}(Scene));
__reflect(TipsLayer.prototype, "TipsLayer");
//# sourceMappingURL=TipsLayer.js.map