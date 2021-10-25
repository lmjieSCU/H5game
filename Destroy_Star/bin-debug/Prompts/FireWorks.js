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
/**烟花 */
var FireWorks = (function (_super) {
    __extends(FireWorks, _super);
    function FireWorks(imgArr, libObj, mcName, scale_, _name, color) {
        if (mcName === void 0) { mcName = null; }
        if (scale_ === void 0) { scale_ = 1; }
        if (_name === void 0) { _name = ""; }
        var _this = _super.call(this, imgArr, libObj, mcName, scale_, _name) || this;
        _this.addFrameScript(_this, [109, _this.frame120]);
        _this.color = color;
        _this.renderfun = _this.render.bind(_this);
        _this.addEventListener(egret.TouchEvent.ENTER_FRAME, _this.renderfun, _this);
        return _this;
    }
    FireWorks.prototype.render = function () {
        this.nextFrame();
        this.nextFrame();
        this.$children[0].gotoAndStop(this.color);
    };
    FireWorks.prototype.frame120 = function () {
        this.stop();
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        this.parent.removeChild(this);
    };
    return FireWorks;
}(zmovie.ZMovieClip));
__reflect(FireWorks.prototype, "FireWorks");
//# sourceMappingURL=FireWorks.js.map