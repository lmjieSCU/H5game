class LevelItem extends egret.Sprite {

    public btn: egret.Bitmap;

    public id: number;

    public mcMovieClip: egret.MovieClip;

    public levelText: egret.BitmapText;

    public star: egret.Bitmap;

    public constructor(arg1: number) {
        super();
        let loc3 = 0;
        this.id = arg1;
        let loc1 = Model.levelModel.currentLevel;
        if (arg1 <= loc1) {
            if (arg1 != loc1) {
                this.btn = UI.addPic("lv_pass_png", true, this);
            }
            else {
                let data = RES.getRes("e_current_json");
                let txtr = RES.getRes("e_current_png");
                let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                this.mcMovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("e_current"));
                this.mcMovieClip.anchorOffsetX = this.mcMovieClip.width * 1.8;
                this.mcMovieClip.anchorOffsetY = this.mcMovieClip.height * 1.8;
                this.mcMovieClip.gotoAndPlay(1, -1);
                this.addChild(this.mcMovieClip);
                this.btn = UI.addPic("lv_current_png", true, this);
            }
            if ((loc3 = Model.levelModel.getLevelVO(arg1).star) > 0) {
                this.star = UI.addPic("star" + loc3 + "_png", true, this);
            }
            this.setOpen(true);
        }
        else {
            this.btn = UI.addPic("lv_lock_png", true, this);
            this.setOpen(false);
        }
        this.levelText = UI.addBitText(this, arg1, "lvfont_fnt", true, 0, 0, 1.3, 1.3);
        return;
    }

    public set x(x: number) {
        this.btn.x = x;
        this.levelText.x = x;
        if (this.id == Model.levelModel.currentLevel) {
            this.mcMovieClip.x = x;
        }
        if (this.star) {
            this.star.x = x;
        }
    }

    public set y(y: number) {
        this.btn.y = y;
        this.levelText.y = y + this.btn.height / 1.5;
        if (this.id == Model.levelModel.currentLevel) {
            this.mcMovieClip.y = y;
        }
        if (this.star) {
            this.star.y = y;
        }
    }

    public setOpen(arg1: boolean): void {
        this.btn.$setTouchEnabled(arg1);
        return;
    }

    public


}

