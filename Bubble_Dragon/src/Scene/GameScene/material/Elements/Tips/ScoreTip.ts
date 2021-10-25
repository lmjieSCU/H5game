class ScoreTip extends Elements {

    public scorelLabel: egret.BitmapText;


    public constructor() {
        super();
        this.scorelLabel = UI.addBitText(this, "", "numtip3_fnt", true);
        this.scorelLabel.textAlign = "center";
        return;
    }

    public setScore(arg1: number): void {
        this.scorelLabel.text = String(arg1);
        UI.FreshLocation(this.scorelLabel);
        this.big();
        return;
    }

    public big(): void {
        this.scaleX = 0;
        this.scaleY = 0;
        this.alpha = 1;
        egret.Tween.get(this).to({ "y": this.y - 20 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500)
            .to({ "alpha": 0 }, 500).to({ "y": this.y - 40 }, 500);
        egret.setTimeout(function () {
            this.parent.removeChild(this);
        }, this, 2000);
        return;
    }
}
