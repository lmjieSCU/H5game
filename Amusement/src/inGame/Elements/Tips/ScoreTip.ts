class ScoreTip extends Elements {


    public scoreLabel: egret.BitmapText;


    public static pool: BasePool = new BasePool(ScoreTip, 10);

    public constructor() {
        super();
        this.scoreLabel = new egret.BitmapText();
        this.addChild(this.scoreLabel);
        return;
    }

    public setData(score: number, color: number = 0): void {
        if ((color - 1) < 0) {
            color = 3;
        }
        else if (color > 5) {
            color = 5;
        }
        this.scoreLabel.text = String(score);
        this.scoreLabel.font = RES.getRes("numtip" + color + "_fnt");
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
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
        egret.Tween.get(this).to({ "y": this.y - 40 }, 350).call(this.onActionEnd, this);;
    }


    public onActionEnd(): void {
        this.reset();
        egret.Tween.removeTweens(this);
        ScoreTip.pool.put(this);
        this.parent.removeChild(this);
        return;
    }

    public reset() {
        this.alpha = 1;
        return;
    }


}
