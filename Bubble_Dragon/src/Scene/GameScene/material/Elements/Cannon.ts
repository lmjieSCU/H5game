class Cannon extends Elements {

    // public animation: egret.MovieClip;

    public cannon_img: egret.Bitmap;

    public index: number = 1;



    public constructor() {
        super();
        // let data = RES.getRes("cannon_json");
        // let txtr = RES.getRes("cannon_png");
        // let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        // this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("cannon"));
        // this.addChild(this.animation)
        this.cannon_img = UI.addPic("res.shoot_1", false, this, 0, -10);
        this.FreshLocation();
        return;
    }


    public FreshLocation() {
        this.cannon_img.anchorOffsetX = this.cannon_img.width / 2;
        this.cannon_img.anchorOffsetY = this.cannon_img.height - (1-0.9533)*UI.WINSIZE_H;
        return;
    }


    public play() {
        this.index = this.index + 1;
        if (this.index > 4) {
            this.index = 1;
            this.cannon_img.texture = RES.getRes("res.shoot_" + this.index);
            this.FreshLocation();
            GameRender.I.Remove(this);
            return;
        }
        this.cannon_img.texture = RES.getRes("res.shoot_" + this.index);
        this.FreshLocation();
    }



    public setAction(arg1: number): void {
        this.index = 1;
        GameRender.I.Add(this, this.play);
        return;
        // if (arg1 != 1) {
        //     if (arg1 == 2) {
        //         this.animation.gotoAndPlay(1);
        //     }
        // }
        // else {
        //     this.animation.gotoAndPlay(1);
        // }
        // return;
    }

}
