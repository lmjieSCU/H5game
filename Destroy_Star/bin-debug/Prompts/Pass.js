var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Pass = (function () {
    function Pass() {
        this.renderFrame = 0;
        this.speedX = 0;
        this.speedX = UI.WINSIZE_W / 40;
        this.mc = new egret.Bitmap;
        this.mc.texture = RES.getRes("tongguo_png");
        UI.setXandY(this.mc, UI.WINSIZE_W, UI.WINSIZE_H / 3);
        UI.setscalXandY(this.mc, 2, 2);
    }
    Pass.prototype.play = function () {
        this.renderfun = this.render.bind(this);
        this.mc.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    };
    Pass.prototype.render = function () {
        this.renderFrame++;
        if (this.renderFrame > 130) {
            this.mc.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.renderfun = null;
            this.renderFrame = 0;
            this.mc.parent.removeChild(this.mc);
            return;
        }
        if (this.renderFrame < 30 || this.renderFrame > 100) {
            this.mc.x = this.mc.x - this.speedX;
        }
    };
    return Pass;
}());
__reflect(Pass.prototype, "Pass");
//# sourceMappingURL=Pass.js.map