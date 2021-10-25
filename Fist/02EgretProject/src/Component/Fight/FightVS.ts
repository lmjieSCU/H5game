class FightVS extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(parent: ChooseScene) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        GameRender.I.Add(this, this.update);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
        this._parent = parent;
    }
    private _parent: ChooseScene;
    private time: number;

    private eff_vs: egret.Bitmap[] = [];
    private eff_num: number = 0;
    private goFight: number = 120;

    onEnter() {
        for (let i = 1; i <= 6; i++) {
            let eff: egret.Bitmap = UI.addPic(this, `eff_vs_bg000${i}_png`, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            eff.scaleX = UI.WINSIZE_W / eff.width;
            eff.scaleY = UI.WINSIZE_H / 2 / eff.height;
            eff.alpha = 0;
            this.eff_vs.push(eff);
        }

        let p1: egret.Bitmap = UI.addPic(this, "head0001_png", 0, UI.WINSIZE_H / 2, true);
        p1.x = UI.WINSIZE_W / 4 * 3;
        let p2: egret.Bitmap = UI.addPic(this, "head0003_png", 0, UI.WINSIZE_H / 2, true);
        p2.x = UI.WINSIZE_W / 4;
        p2.skewY = 180;
        egret.Tween.get(p1).to({ x: p1.width / 2 }, 400, egret.Ease.sineIn);
        egret.Tween.get(p2).to({ x: UI.WINSIZE_W - p2.width / 2 }, 400, egret.Ease.sineIn);
        let vs: egret.Bitmap = UI.addPic(this, "vs_icon_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, 2);
        vs.alpha = 0;
        egret.setTimeout(() => {
            vs.alpha = 1;
            egret.Tween.get(vs).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.sineIn);
        }, this, 200)
    }
    update() {
        if (this.goFight <= 0) {
            this._parent.goFight();
        }
        this.goFight--;
        if (this.eff_num >= this.eff_vs.length) this.eff_num = 0;
        for (let i = 0; i < this.eff_vs.length; i++) {
            this.eff_vs[i].alpha = 0;
        }
        this.eff_vs[this.eff_num].$setAlpha(1);
        this.eff_num++;
    }
    onExit() {
        GameRender.I.Remove(this, this.update);
    }
}