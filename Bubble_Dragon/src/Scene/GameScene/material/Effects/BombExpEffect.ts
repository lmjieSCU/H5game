class BombExpEffect extends Elements {

    public image: egret.Bitmap;

    public index: number = 0;

    public bombwidth = 696;

    public bombheight = 587;

    public renderframe: number = 0;


    constructor() {
        super();
        this.image = UI.addPic("effect.bombexp_0", true, this);
        GameRender.I.Add(this, this.playBomb);
        return;
    }

    public playBomb() {
        this.renderframe = this.renderframe + 1;
        if (this.renderframe % 3 != 0) {
            return;
        }
        this.index = this.index + 1;
        if (this.index > 6) {
            this.index = 0;
            this.renderframe = 0;
            this.parent.removeChild(this);
            GameRender.I.Remove(this);
            return;
        }
        this.image.texture = RES.getRes("effect.bombexp_" + this.index);
        this.FreshLocation();
    }

    public FreshLocation() {
        this.image.anchorOffsetX = this.image.width / 2;
        this.image.anchorOffsetY = this.image.height / 2;
        this.image.scaleX = this.bombwidth / this.image.width;
        this.image.scaleY = this.bombheight / this.image.height;
        return;
    }


}






