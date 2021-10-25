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
var ProgressLayer = (function (_super) {
    __extends(ProgressLayer, _super);
    function ProgressLayer(parent, type) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this.type = type;
        return _this;
    }
    ProgressLayer.prototype.onEnter = function () {
        this.initProgress();
    };
    ProgressLayer.prototype.onExit = function () { };
    ProgressLayer.prototype.initProgress = function () {
        // let progressBg: egret.Bitmap = UI.addPic(this, "", UI.WINSIZE_W/2, UI.WINSIZE_H/4*3, true);
        var progress = UI.addPic(this, "progress_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 4 * 3, true);
        this.progressMask = new egret.Shape();
        this.progressMask.graphics.beginFill(0x000000);
        this.progressMask.graphics.drawRect(0, 0, progress.width, progress.height);
        this.progressMask.graphics.endFill();
        this.progressMask.x = progress.x - progress.width / 2;
        this.progressMask.y = progress.y;
        this.progressMask.anchorOffsetY = progress.height / 2;
        this.addChild(this.progressMask);
        progress.mask = this.progressMask;
    };
    ProgressLayer.prototype.onProgress = function (current, total) {
        // this.progressMask.scaleX = current/total;
        var progress = 0;
        switch (this.type) {
            case "subPackage":
                var parent_1 = this._parent;
                // progress = Math.floor(current/total) + Math.floor(parent._loadResNum / parent._allResNum*100);
                progress = Math.floor((current / total + parent_1._loadResNum) / parent_1._allResNum * 100);
                progress = Math.min(progress, 100);
        }
        console.log(progress);
        this.progressMask.scaleX = progress / 100;
    };
    return ProgressLayer;
}(Scene));
__reflect(ProgressLayer.prototype, "ProgressLayer");
//# sourceMappingURL=ProgressLayer.js.map