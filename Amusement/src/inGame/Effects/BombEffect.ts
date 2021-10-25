class BombEffect extends Elements {

    public animation: egret.MovieClip;

    public static pool: BasePool = new BasePool(BombEffect, 10);

    public constructor() {
        super();
        let data = RES.getRes("candybomb_json");
        let txtr = RES.getRes("candybomb_png");
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("candybomb"));
        this.animation.frameRate = 10;
        this.animation.scaleY = 1.5;
        this.animation.scaleX = 1.5;
        this.animation.anchorOffsetX = this.animation.width * 1.1;
        this.animation.anchorOffsetY = this.animation.height * 1.1;
        this.addChild(this.animation)
        return;
    }

    public play(): void {
        this.animation.addEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.animation.gotoAndPlay(1);
        return;
    }

    public onAnimationEnd(arg1: egret.Event): void {
        this.animation.removeEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.parent.removeChild(this);
        BombEffect.pool.put(this);
        return;
    }

}
