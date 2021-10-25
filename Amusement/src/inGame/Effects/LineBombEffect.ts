class LineBombEffect extends Elements {


    public img1: egret.Bitmap;


    public static pool: BasePool = new BasePool(LineBombEffect, 10);


    public constructor() {
        super();
        this.img1 = UI.addPic("hengshu1_png", true, this);
        return;
    }

    public reset() {
        this.img1.scaleX = 1;
        this.img1.scaleY = 1;
        this.img1.rotation = 0;
        this.img1.visible = true;
        return;
    }


    public play(type: number): void {
        this.reset();
        this.img1.scaleX = 0.2;
        this.img1.scaleY = 0.7;
        if (type != 1) {//竖直
            this.img1.rotation = 0;
        }
        else {  //水平
            this.img1.rotation = 90;
        }
        egret.Tween.get(this.img1).to({ "scaleY": 2.5 }, 100).call(this.onActionEnd, this);
        return;
    }

    public onActionEnd(): void {
        this.img1.visible = false;
        this.parent.removeChild(this);
        LineBombEffect.pool.put(this);
        return;
    }

}
