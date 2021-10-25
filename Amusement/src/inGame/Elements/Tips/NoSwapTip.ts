class NoSwapTip extends Elements {

    public end: Function;

    public constructor() {
        super();
        UI.addPic("nomatch_png", true, this);
        this.x = UI.WINSIZE_W / 2;
        this.y = UI.WINSIZE_H / 2;
        return;
    }
    
    public doAniamtion(): void {
        this.scaleY = 0;
        this.scaleX = 0;
        SoundCtrl.I.playmusic("nomatch");
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100).call(this.action2, this);
        return;
    }

    public action2() {
        egret.Tween.get(this).to({ "y": this.y - 80 }, 700).call(this.onActionEnd, this);;
    }

    public onActionEnd(): void {
        egret.Tween.removeTweens(this);
        this.parent.removeChild(this);
        return;
    }
}
