class GoodTip extends Elements {

    public tips: Array<egret.Bitmap>;

    public static pool: BasePool = new BasePool(GoodTip, 3);

    public constructor() {
        super();
        this.tips = [null];
        this.tips.push(UI.addPic("good_png", true, this));
        this.tips.push(UI.addPic("excellent_png", true, this))
        this.tips.push(UI.addPic("prefect_png", true, this))
        return;
    }

    public setType(arg1: number): void {
        let loc1 = null;
        SoundCtrl.I.playmusic("great");
        for (let loc in this.tips) {
            loc1 = this.tips[loc]
            if (loc1 == null) {
                continue;
            }
            loc1.visible = false;
        }
        this.tips[arg1].visible = true;
        this.doAction();
        return;
    }

    public doAction(): void {
        this.scaleY = 0;
        this.scaleX = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100).call(this.action2, this);
        return;
    }

    public action2() {
        egret.Tween.get(this).to({ "y": this.y - 80 }, 700).call(this.onActionEnd, this);;
    }

    public onActionEnd(): void {
        egret.Tween.removeTweens(this);
        GoodTip.pool.put(this);
        this.parent.removeChild(this);
        return;
    }

}
