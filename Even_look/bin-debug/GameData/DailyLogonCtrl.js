var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**每日登录,奖励200金币 */
var DailyLogonCtrl = (function () {
    function DailyLogonCtrl() {
        this.firstLogin = true;
        if (egret.localStorage.getItem("lastday") == null) {
            egret.localStorage.setItem("lastday", String(new Date().getDate()));
            console.log("new lastday");
        }
        else {
            this.firstLogin = false;
        }
        this.lastday = Number(egret.localStorage.getItem("lastday"));
    }
    Object.defineProperty(DailyLogonCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new DailyLogonCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    DailyLogonCtrl.prototype.checkLogon = function () {
        if (this.firstLogin) {
            this.DailyReward();
            return;
        }
        var today = new Date().getDate();
        var lastday = Number(egret.localStorage.getItem("lastday"));
        if (today != lastday) {
            egret.localStorage.setItem("lastday", String(today));
            this.DailyReward();
        }
        else {
            InitScene.instance.toChooseLvBtn.alpha = 1;
        }
        return;
    };
    DailyLogonCtrl.prototype.DailyReward = function () {
        this.reward = UI.addPic(InitScene.instance, "login_png", true);
        UI.setXandY(this.reward, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.reward, UI.WINSIZE_W * 0.86 / this.reward.width, UI.WINSIZE_W * 0.86 / this.reward.width);
        this.cancelBtn = UI.addPic(InitScene.instance, "cancel_png", true);
        UI.setXandY(this.cancelBtn, this.reward.x + UI.WINSIZE_W * 0.43, this.reward.y - UI.WINSIZE_W * 0.43 / this.reward.width * this.reward.height);
        UI.addClickAction(this, this.cancelBtn, this.CancelPic);
        LocalDataCtrl.I.Freshcoins(200);
    };
    DailyLogonCtrl.prototype.CancelPic = function () {
        InitScene.instance.removeChild(this.reward);
        InitScene.instance.removeChild(this.cancelBtn);
        InitScene.instance.toChooseLvBtn.alpha = 1;
        return;
    };
    return DailyLogonCtrl;
}());
__reflect(DailyLogonCtrl.prototype, "DailyLogonCtrl");
//# sourceMappingURL=DailyLogonCtrl.js.map