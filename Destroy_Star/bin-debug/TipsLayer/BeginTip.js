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
/**游戏开始时关卡提示页面 */
var BeginTip = (function (_super) {
    __extends(BeginTip, _super);
    function BeginTip(level, obScore) {
        if (level === void 0) { level = 1; }
        if (obScore === void 0) { obScore = 1000; }
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.obScore = obScore;
        _this.speedX = UI.WINSIZE_W / 20;
        _this.renderFrame = 0;
        if (GameModel.currentMode != GameModel.NORMAL) {
            GameModel.jinbi = GameModel.jinbi - 5;
            MainMoive.instance.caidan.Jinbi = GameModel.jinbi;
        }
        _this.GameTip();
        return _this;
    }
    /**提示动画 */
    BeginTip.prototype.render = function () {
        this.renderFrame++;
        if (this.renderFrame > 70) {
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
            this.renderFun = null;
            this.renderFrame = 0;
            this.DestoryTip();
            return;
        }
        if (this.renderFrame < 10 || this.renderFrame > 50) {
            switch (GameModel.currentMode) {
                case GameModel.NORMAL:
                    this.tip_in_normal.x = this.tip_in_normal.x - this.speedX;
                    this.level_tip.x = this.level_tip.x - this.speedX;
                    this.obscore_tip.x = this.obscore_tip.x - this.speedX;
                    break;
                case GameModel.TIMELIMIT:
                    this.tip_in_time.x = this.tip_in_time.x - this.speedX;
                    break;
                case GameModel.BULIMIT:
                    this.tip_in_bu.x = this.tip_in_bu.x - this.speedX;
                    break;
            }
        }
    };
    /**提示 */
    BeginTip.prototype.GameTip = function () {
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                this.tip_in_normal = UI.addPic(this, "shuoming0001_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                this.level_tip = UI.addText(this, this.level, UI.WINSIZE_W - 30, UI.WINSIZE_H / 2 - 70);
                // UI.setscalXandY(this.level_tip, 1.5, 1.5);
                this.obscore_tip = UI.addText(this, this.obScore, UI.WINSIZE_W - 30, UI.WINSIZE_H / 2 + 20);
                // UI.setscalXandY(this.obscore_tip, 1.5, 1.5);
                break;
            case GameModel.TIMELIMIT:
                this.tip_in_time = UI.addPic(this, "shuoming0002_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                break;
            case GameModel.BULIMIT:
                this.tip_in_bu = UI.addPic(this, "shuoming0003_png", UI.WINSIZE_W, UI.WINSIZE_H / 2, true);
                break;
        }
        this.renderFun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderFun, this);
    };
    /**移除提示 */
    BeginTip.prototype.DestoryTip = function () {
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                this.removeChild(this.tip_in_normal);
                this.removeChild(this.level_tip);
                this.removeChild(this.obscore_tip);
                break;
            case GameModel.TIMELIMIT:
                this.removeChild(this.tip_in_time);
                break;
            case GameModel.BULIMIT:
                this.removeChild(this.tip_in_bu);
                break;
        }
        MainMoive.instance.OutFromBeginTip();
    };
    return BeginTip;
}(egret.DisplayObjectContainer));
__reflect(BeginTip.prototype, "BeginTip");
//# sourceMappingURL=BeginTip.js.map