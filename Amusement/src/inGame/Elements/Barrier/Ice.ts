class Ice extends Elements {

    public row: number;

    public col: number;

    public ice1: egret.Bitmap;

    public ice2: egret.Bitmap;

    public ice3: egret.Bitmap;

    public _life: number;

    public _tileID: number;

    public static pool: BasePool = new BasePool(Ice, 20);

    public constructor() {
        super();
        this.ice1 = UI.addPic("sprite2_png", true, this);
        this.ice2 = UI.addPic("spritemid_png", true, this);
        this.ice3 = UI.addPic("sprite1_png", true, this);
        this.ice1.scaleY = 1.2;
        this.ice1.scaleX = 1.2;
        this.ice2.scaleY = 1.2;
        this.ice2.scaleX = 1.2;
        this.ice3.scaleY = 1.2;
        this.ice3.scaleX = 1.2;
        return;
    }

    public get tileID(): number {
        return this._tileID;
    }

    public set tileID(arg1: number) {
        this._tileID = arg1;
        switch (arg1) {
            case TileConst.ICE1: this.setLife(1); break;
            case TileConst.ICE2: this.setLife(2); break;
            case TileConst.ICE3: this.setLife(3); break;
        }
        return;
    }

    public get life(): number {
        return this._life;
    }

    public setLife(arg1: number, arg2: boolean = false): void {
        let loc1: IceBombEffect = null;
        this._life = arg1;
        if (this._life != 3) {
            if (this._life != 2) {
                if (this._life == 1) {
                    this.ice1.visible = true;
                    this.ice2.visible = false;
                    this.ice3.visible = false;
                }
            }
            else {
                this.ice1.visible = false;
                this.ice2.visible = true;
                this.ice3.visible = false;
            }
        }
        else {
            this.ice1.visible = false;
            this.ice2.visible = false;
            this.ice3.visible = true;
        }
        if (arg2) {
            loc1 = new IceBombEffect();
            loc1.x = this.x - loc1.width * 1.2;
            loc1.y = this.y - loc1.height * 1.2;
            this.parent.addChild(loc1);
            loc1.play();
        }
        return;
    }

}
