/**通关总结页面:胜利
 * 返回按钮数组:[返回选关,下一关]
 */
class PassLayer extends Layer {
    private pass: egret.Bitmap;
    private bg: egret.Bitmap;
    private nextLvBtn: egret.Bitmap;
    private toChooseLvBtn: egret.Bitmap;
    private _hasNextLv: boolean = true;
    private highestscore: egret.TextField;
    private nowscore: egret.TextField;
    private totalscore: egret.TextField;
    private starnum: number;
    private star: egret.Bitmap;

    constructor(hasnext: boolean, starnum: number) {
        super();
        this._hasNextLv = hasnext;
        this.starnum = starnum;
    }

    public init(): Array<egret.Bitmap> {
        let ans = new Array<egret.Bitmap>();
        this.bg = UI.addPic(this, "bg_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.1 / this.bg.width, UI.WINSIZE_H * 1.1 / this.bg.height);

        //
        this.pass = UI.addPic(this, "pass_png", true);
        UI.setXandY(this.pass, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.5);
        UI.setscalXandY(this.pass, 0, 0);
        this.star = new egret.Bitmap;
        switch (this.starnum) {
            case 1:
                this.star.texture = RES.getRes("onestar_png");
                break;
            case 2:
                this.star.texture = RES.getRes("twostar_png");
                break;
            case 3:
                this.star.texture = RES.getRes("star_png");
                break;
        }
        UI.setXandY(this.star, UI.WINSIZE_W / 2, this.pass.y - this.pass.height * UI.WINSIZE_W * 1.2 / this.pass.width / 3.2);
        this.star.anchorOffsetX = this.star.width / 2;
        this.star.anchorOffsetY = this.star.height / 2;
        this.star.alpha = 0;
        UI.setscalXandY(this.star,5,5);
        this.addChild(this.star);
        //
        this.nowscore = UI.addText(this, GameCtrl.I._gridCtrl.gridScore, true);
        UI.setXandY(this.nowscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.22);
        this.nowscore.size = 35;
        this.nowscore.alpha = 0;
        this.nowscore.textColor = 0xff69b4;

        this.highestscore = UI.addText(this, LocalDataCtrl.I.highScores[GameData.I.level - 1], true);
        UI.setXandY(this.highestscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.92);
        this.highestscore.size = 35;
        this.highestscore.alpha = 0;
        this.highestscore.textColor = 0x00ffff;


        this.totalscore = UI.addText(this, LocalDataCtrl.I.FreshTotalScore(GameCtrl.I._gridCtrl.gridScore), true);
        UI.setXandY(this.totalscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.7);
        this.totalscore.size = 35;
        this.totalscore.alpha = 0;
        this.totalscore.textColor = 0xda6920;
        //
        this.toChooseLvBtn = UI.addPic(this, "return_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W / 3, UI.WINSIZE_H / 1.4);
        UI.setscalXandY(this.toChooseLvBtn, 100 / this.toChooseLvBtn.width, 100 / this.toChooseLvBtn.height);
        this.toChooseLvBtn.alpha = 0;
        //
        ans.push(this.toChooseLvBtn);
        egret.setTimeout(function () {
            this.toChooseLvBtn.alpha = 1;
            this.totalscore.alpha = 1;
            this.nowscore.alpha = 1;
            this.highestscore.alpha = 1;
            this.star.alpha = 1;
        }, this, 1100);

        //
        if (this._hasNextLv) {
            this.nextLvBtn = UI.addPic(this, "next_png", true);
            UI.setXandY(this.nextLvBtn, UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 1.4);
            UI.setscalXandY(this.nextLvBtn, 100 / this.nextLvBtn.width, 100 / this.nextLvBtn.height);
            this.nextLvBtn.alpha = 0;
            ans.push(this.nextLvBtn);
            egret.setTimeout(function () { this.nextLvBtn.alpha = 1 }, this, 1100);
        } else {
            this.toChooseLvBtn.x = UI.WINSIZE_W / 2;
        }
        //
        let t1 = egret.Tween.get(this.pass).to({ scaleX: UI.WINSIZE_W * 1.2 / this.pass.width, scaleY: UI.WINSIZE_W * 1.2 / this.pass.width }, 1000);
        return ans;
    }
}