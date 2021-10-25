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
/**游戏结束时提示页面 */
var FinishTip = (function (_super) {
    __extends(FinishTip, _super);
    function FinishTip(reward, last) {
        if (reward === void 0) { reward = 0; }
        var _this = _super.call(this) || this;
        _this.reward = reward;
        _this.last = last;
        _this.speedX = UI.WINSIZE_W / 20;
        _this.renderFrame = 0;
        _this.index = 0;
        _this.GameTip();
        return _this;
    }
    /**提示动画 */
    FinishTip.prototype.render = function () {
        this.renderFrame++;
        if (this.renderFrame > 160) {
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
            this.renderFun = null;
            this.renderFrame = 0;
            this.index = 0;
            MainMoive.instance.OutFromFinishTip();
            return;
        }
        if (this.renderFrame > 60) {
            this.DestoryTip();
        }
        ;
        if (this.renderFrame < 12 || this.renderFrame > 50) {
            this.LastTip.x = this.LastTip.x - this.speedX;
        }
    };
    /**进入提示 */
    FinishTip.prototype.GameTip = function () {
        this.LastTip = UI.addText(this, "奖励：" + this.reward + "\n剩余：" + this.last, UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
        // UI.setscalXandY(this.LastTip, 1.5, 1.5);
        this.renderFun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
    };
    /**退出提示 */
    FinishTip.prototype.DestoryTip = function () {
        if (this.index < MainMoive.instance.my_diamond.length) {
            if (MainMoive.instance.my_diamond[this.index].died == false) {
                MainMoive.instance.my_diamond[this.index].died = true;
                MainMoive.instance.my_diamond[this.index].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(MainMoive.instance.my_diamond[this.index].color + 10);
                MainMoive.instance.FivepointStar(MainMoive.instance.my_diamond[this.index].x, MainMoive.instance.my_diamond[this.index].y, MainMoive.instance.my_diamond[this.index].color);
                MainMoive.instance.my_diamond[this.index].color = 1;
                MainMoive.instance.my_diamond[this.index].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(1);
            }
            this.index++;
        }
    };
    return FinishTip;
}(egret.DisplayObjectContainer));
__reflect(FinishTip.prototype, "FinishTip");
//# sourceMappingURL=FinishTip.js.map