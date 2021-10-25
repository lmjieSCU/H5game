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
/**战斗场景素材
 * 时间,关卡,金币,分数以及部分图片
 */
var FightUI = (function (_super) {
    __extends(FightUI, _super);
    function FightUI(ctrl) {
        var _this = _super.call(this) || this;
        _this.fightctrl = ctrl;
        _this.initUI();
        return _this;
    }
    /**添加游戏素材 */
    FightUI.prototype.initUI = function () {
        //================================================================================
        //***************************************显示图像**********************************
        //================================================================================
        this.addBg();
    };
    FightUI.prototype.addBg = function () {
        var wordbg = UI.addPic("worldBg_2_png", true, this);
        UI.setscalXandY(wordbg, UI.WINSIZE_W * 1.1 / wordbg.width, UI.WINSIZE_W * 1.5 / wordbg.width);
        UI.setXandY(wordbg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        this.addChild(wordbg);
    };
    return FightUI;
}(egret.DisplayObjectContainer));
__reflect(FightUI.prototype, "FightUI");
//# sourceMappingURL=FightUI.js.map