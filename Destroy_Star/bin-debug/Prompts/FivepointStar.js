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
/**小五角星 */
var FivepointStar = (function (_super) {
    __extends(FivepointStar, _super);
    function FivepointStar(imgArr, libObj, mcName, scale_, _name, color) {
        if (mcName === void 0) { mcName = null; }
        if (scale_ === void 0) { scale_ = 1; }
        if (_name === void 0) { _name = ""; }
        var _this = _super.call(this, imgArr, libObj, mcName, scale_, _name) || this;
        _this.color = 0;
        _this.dy = 0;
        _this.addFrameScript(_this, [59, _this.frame60]);
        _this.color = color;
        _this.fun = _this.Fun.bind(_this);
        _this.addEventListener(egret.TouchEvent.ENTER_FRAME, _this.fun, _this);
        return _this;
    }
    FivepointStar.prototype.Fun = function () {
        this.getChildBymcName("mc_1").gotoAndStop(this.color);
        this.nextFrame();
        if (this.y < UI.WINSIZE_H * 3 / 5 || this.y > 50) {
            this.y = this.y + this.dy;
            this.dy = this.dy + 1;
        }
        else {
            this.destroy();
        } // end else if
    };
    FivepointStar.prototype.frame60 = function () {
        // this.stop();
        this.destroy();
    };
    FivepointStar.prototype.destroy = function () {
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.fun, this);
        this.parent.removeChild(this);
    };
    return FivepointStar;
}(zmovie.ZMovieClip));
__reflect(FivepointStar.prototype, "FivepointStar");
//# sourceMappingURL=FivepointStar.js.map