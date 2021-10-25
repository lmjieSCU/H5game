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
var ScoreTip = (function (_super) {
    __extends(ScoreTip, _super);
    function ScoreTip() {
        var _this = _super.call(this) || this;
        _this.renderFrame = 0;
        _this.renderFrame = 0;
        _this.textColor = 0x1ffff1;
        _this.size = 25;
        return _this;
    }
    ScoreTip.prototype.play = function () {
        this.speedx = (UI.WINSIZE_W * 2 / 5 - this.x) / 20;
        this.speedy = (UI.WINSIZE_H / 15 - this.y) / 20;
        this.renderfun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    };
    ScoreTip.prototype.render = function () {
        if (this.renderFrame < 20) {
            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;
            this.renderFrame++;
        }
        else {
            this.destroy();
        }
    };
    ScoreTip.prototype.destroy = function () {
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        this.parent.removeChild(this);
    };
    return ScoreTip;
}(egret.TextField));
__reflect(ScoreTip.prototype, "ScoreTip");
//# sourceMappingURL=ScoreTip.js.map