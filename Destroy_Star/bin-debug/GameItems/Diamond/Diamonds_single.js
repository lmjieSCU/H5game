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
/**星星*/
var Diamonds = (function (_super) {
    __extends(Diamonds, _super);
    function Diamonds(imgArr, libObj, mcName, scale_, _name) {
        if (mcName === void 0) { mcName = null; }
        if (scale_ === void 0) { scale_ = 1; }
        if (_name === void 0) { _name = ""; }
        var _this = _super.call(this, imgArr, libObj, mcName, scale_, _name) || this;
        _this.mv_currframe = 1;
        _this.isLoop = false;
        return _this;
    }
    Diamonds.prototype.initlize = function (dx, dy, color, dj, died, jg, parent) {
        this.mvAnimation = new Diamonds_mv(this);
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.dj = dj;
        this.died = died;
        this.jg = jg;
        this.parent = parent;
        this.renderSci = null;
        this.addFrameScript(this, [2, this.frame3, 22, this.frame23, 42, this.frame43, 62, this.frame63,
            82, this.frame83, 99, this.frame100, 109, this.frame110]);
    };
    Diamonds.prototype.frame = function () {
        this.getChildBymcName("mv").gotoAndStop(this.mv_currframe);
        this.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.color);
    };
    Diamonds.prototype.MVAnimation = function (label) {
        this.mvAnimation.Animation(label);
    };
    Diamonds.prototype.Animation = function (frame) {
        this.gotoAndStop(frame);
        DiamondRender.AddDiamond(this, this.render);
        DiamondRender.Animation(this.stage);
    };
    //
    Diamonds.prototype.render = function () {
        if (this.currFrame != 2) {
            this.nextFrame();
            this.getChildBymcName("mv").gotoAndStop(this.mv_currframe);
            this.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.color);
        }
        else {
            this.checkCurrFrameFunc();
        }
    };
    Diamonds.prototype.stopAnimation = function () {
        DiamondRender.RemoveDiamond(this);
    };
    Diamonds.prototype.frame3 = function () {
        if (this.jg <= 0) {
            this.gotoAndStop(this.parent.gh);
        }
        else {
            this.jg = this.jg - 1;
            // this.gotoAndStop(2);
        } // end else if
    };
    Diamonds.prototype.frame23 = function () {
        this.stopAnimation();
    };
    Diamonds.prototype.frame43 = function () {
        this.stopAnimation();
    };
    Diamonds.prototype.frame63 = function () {
        this.stopAnimation();
    };
    Diamonds.prototype.frame83 = function () {
        this.stopAnimation();
    };
    Diamonds.prototype.frame100 = function () {
        if (this.dj <= 0) {
            this.gotoAndStop("xc");
            // this.parent.fuzhixingxing(this.x, this.y, this.color);
        }
        else {
            this.dj = this.dj - 1;
            this.Animation("sp");
        } // end else if
    };
    Diamonds.prototype.frame110 = function () {
        this.stopAnimation();
    };
    return Diamonds;
}(zmovie.ZMovieClip));
__reflect(Diamonds.prototype, "Diamonds");
//# sourceMappingURL=Diamonds_single.js.map