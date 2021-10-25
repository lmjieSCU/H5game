class Brick extends Elements {

    public _brickID: number;

    public img: egret.Bitmap;

    public _life: number;

    public row: number;

    public col: number;

    public static pool: BasePool = new BasePool(Brick, 50);

    public constructor() {
        super();
        this.img = new egret.Bitmap();
        return;
    }

    public get life(): number {
        return this._life;
    }

    public get brickID(): number {
        return this._brickID;
    }

    public set brickID(arg1: number) {
        this._brickID = arg1;
        switch (arg1) {
            case TileConst.BRICK2:
                this.img.texture = RES.getRes("brick2_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                this._life = 2;
                break;
            case TileConst.BRICK:
                this.img.texture = RES.getRes("brick1_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                this._life = 1;
                break;
        }
        this.addChild(this.img);
        return;
    }

    public loseLife(): void {
        let loc2 :BrickExp= null;
        var loc1 = -1;
        if (this.col >= 4) {
            loc1 = 1;
        }
        if (this._life != 2) {
            if (this._life == 1) {
                loc2 = BrickExp.pool.take() as BrickExp;
                loc2.setInfo(1, loc1);
                loc2.x = this.x;
                loc2.y = this.y;
                this.parent.parent.addChild(loc2);
            }
        }
        else {
            this.img.texture = RES.getRes("brick1_png");
            loc2 = BrickExp.pool.take() as BrickExp;
            loc2.setInfo(2, loc1);
            loc2.x = this.x;
            loc2.y = this.y;
            this.parent.parent.addChild(loc2);
        }
        --this._life;
        return;
    }

}
