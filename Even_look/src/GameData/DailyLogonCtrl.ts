/**每日登录,奖励200金币 */
class DailyLogonCtrl {
    public static instance: DailyLogonCtrl;
    public lastday: number;
    private firstLogin: boolean = true;
    private reward: egret.Bitmap;
    private cancelBtn: egret.Bitmap;

    private constructor() {
        if (egret.localStorage.getItem("lastday") == null) {
            egret.localStorage.setItem("lastday", String(new Date().getDate()));
            console.log("new lastday");
        } else {
            this.firstLogin = false;
        }
        this.lastday = Number(egret.localStorage.getItem("lastday"));
    }

    public static get I(): DailyLogonCtrl {
        if (this.instance == null) {
            this.instance = new DailyLogonCtrl();
        }
        return this.instance;
    }

    public checkLogon() {
        if (this.firstLogin) {    //初次注册
            this.DailyReward();
            return;
        }
        let today = new Date().getDate();
        let lastday = Number(egret.localStorage.getItem("lastday"));
        if (today != lastday) {
            egret.localStorage.setItem("lastday", String(today));
            this.DailyReward();
        } else {
            InitScene.instance.toChooseLvBtn.alpha = 1;
        }
        return;
    }

    public DailyReward() {
        this.reward = UI.addPic(InitScene.instance, "login_png", true);
        UI.setXandY(this.reward, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.reward, UI.WINSIZE_W * 0.86 / this.reward.width, UI.WINSIZE_W * 0.86 / this.reward.width);
        this.cancelBtn = UI.addPic(InitScene.instance, "cancel_png", true);
        UI.setXandY(this.cancelBtn, this.reward.x + UI.WINSIZE_W * 0.43, this.reward.y - UI.WINSIZE_W * 0.43 / this.reward.width * this.reward.height)
        UI.addClickAction(this, this.cancelBtn, this.CancelPic);
        LocalDataCtrl.I.Freshcoins(200);
    }

    public CancelPic() {
        InitScene.instance.removeChild(this.reward);
        InitScene.instance.removeChild(this.cancelBtn);
        InitScene.instance.toChooseLvBtn.alpha = 1;
        return;
    }
}