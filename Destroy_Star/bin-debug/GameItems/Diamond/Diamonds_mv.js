var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**Diamonds的mv子动画帧事件 */
var Diamonds_mv = (function () {
    function Diamonds_mv(_gz) {
        this.renderFrame = 0;
        this.father = _gz;
        this.mc = this.father.getChildBymcName("mv");
        this.renderfun = null;
        this.mc.isLoop = false;
        this.mc.addFrameScript(this, [0, this.frame1, 3, this.frame4, 15, this.frame16, 32, this.frame33, 52, this.frame53]);
    }
    /**mv动画
     * @label:动画标签
     * 向右
     * 向下
     * 向左
     */
    Diamonds_mv.prototype.Animation = function (label) {
        this.label = label;
        this.mc.gotoAndStop(label);
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
        if (this.renderfun == null) {
            this.renderfun = this.render.bind(this);
            this.mc.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        }
    };
    Diamonds_mv.prototype.render = function () {
        this.mc.nextFrame();
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
        this.father.mv_currframe = this.mc.currFrame + 1;
    };
    Diamonds_mv.prototype.stopAnimation = function () {
        if (this.renderfun != null) {
            this.mc.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.renderfun = null;
            // this.father.x = (this.father.dx + 1) * UI.WINSIZE_W / 11;
            // this.father.y = (this.father.dy - 10) * UI.WINSIZE_W / 11 + UI.WINSIZE_H;
        }
    };
    Diamonds_mv.prototype.frame1 = function () {
        this.father.mv_currframe = 1;
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
    };
    Diamonds_mv.prototype.frame4 = function () {
        this.mc.stop();
    };
    Diamonds_mv.prototype.frame16 = function () {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    };
    Diamonds_mv.prototype.frame33 = function () {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    };
    Diamonds_mv.prototype.frame53 = function () {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    };
    return Diamonds_mv;
}());
__reflect(Diamonds_mv.prototype, "Diamonds_mv");
//# sourceMappingURL=Diamonds_mv.js.map