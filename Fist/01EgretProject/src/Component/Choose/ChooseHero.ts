class ChooseHero extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(resouce: string, x: number, y: number, wid: number, high: number) {
        super();
        this.x = x;
        this.y = y;
        this.width = wid;
        this.height = high;
        this.heroResouce = resouce;
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    private hero: egret.Bitmap;
    private heroResouce: string

    onEnter() {
        this.hero = UI.addPic(this, this.heroResouce, this.width/2, this.height/2, true);
        // this.hero.scaleX = this.width/this.hero.width;
        // this.hero.scaleY = this.height/this.hero.height;
    }

    public changeHero(resouce: string) {
        this.hero.$setTexture(RES.getRes(resouce));
        // this.hero.scaleX = this.width/this.hero.width;
        // this.hero.scaleY = this.height/this.hero.height;
        this.hero.anchorOffsetX = this.hero.width/2;
        this.hero.anchorOffsetY = this.hero.height/2;
        this.hero.x = -this.hero.width/2;
        egret.Tween.get(this.hero).to({x:this.width/2}, 300, egret.Ease.sineIn);
    }
}