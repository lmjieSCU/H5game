class Stone extends Elements {
    
    public row: number;

    public col: number;

    public stone1: egret.Bitmap;

    public stone2: egret.Bitmap;

    public _life: number;

    public _tileID: number;

    public static pool: BasePool =new  BasePool(Stone, 20);

    public constructor() {
        super();
        this.stone2 = UI.addPic("stone1_png",true,this);
        this.stone1 = UI.addPic("stone2_png",true,this);
        return;
    }

    public get tileID(): number {
        return this._tileID;
    }

    public set tileID(arg1: number) {
        this._tileID = arg1;
        this.setLife(2);
        return;
    }

    public get life(): number {
        return this._life;
    }

    public setLife(arg1: number, arg2: boolean = false) {
        this._life = arg1;
        if (this._life != 2) {
            if (this._life == 1) {
                this.stone1.visible = true;
                this.stone2.visible = false;
            }
        }
        else {
            this.stone1.visible = false;
            this.stone2.visible = true;
        }
        if (arg2) {
            let loc1 = new IceBombEffect();
            loc1.play();
            this.parent.addChild(loc1);
            loc1.x = this.x;
            loc1.y = this.y;
        }
        return;
    }

}
