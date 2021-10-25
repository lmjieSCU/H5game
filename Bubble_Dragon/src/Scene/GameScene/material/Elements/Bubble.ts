class Bubble extends Elements {
    public _row: number;

    public _col: number;

    public data: BubbleCfg;

    public isBacking: boolean = false;

    public destoryedByBomb: boolean = false;

    public hasShield: boolean = false;

    public resBottom: egret.Bitmap;

    public resTop: egret.Bitmap;

    public vx: number = 0;

    public vy: number = 0;

    public _life: number;

    public backRadians: number;

    public backLevel: number;

    public oldX: number;

    public oldY: number;

    public shield: egret.Bitmap;


    public scale: number = 1;

    public constructor(arg1: number, scale: number = 1) {
        super();
        this.scale = scale;
        this.data = Config.bubbleCfgParser.getBubbleCfg(arg1);
        this.initSelf();
        return;
    }


    public get col(): number {
        return this._col;
    }

    public set col(arg1: number) {
        this._col = arg1;
    }

    public get row(): number {
        return this._row;
    }

    public set row(arg1: number) {
        this._row = arg1;
    }

    /**撞击后摇晃特效 */
    public doBackEffect(): void {
        if (!this.isBacking) {
            this.isBacking = true;
            this.oldX = this.x;
            this.oldY = this.y;
            let tx = Math.cos(this.backRadians) * (5 - this.backLevel) + this.oldX;
            let ty = Math.sin(this.backRadians) * (5 - this.backLevel) + this.oldY;
            egret.Tween.get(this).to({ "x": tx, "y": ty }, 250).to({ "x": this.oldX, "y": this.oldY }, 250);
            egret.setTimeout(this.BackReset, this, 501);
        }
        return;
    }

    public BackReset() {
        this.isBacking = false;
        return;
    }

    public doBigEffect(): void {
        this.resBottom.visible = false;
        egret.Tween.get(this).to({ "scaleX": 2, "scaleY": 2 }, 500);
        return;
    }

    public initSelf(): void {
        this.destoryedByBomb = false;
        if (this.data.effectType == BubbleEffectType.BUBBLE_INVISIBLE) {
            this.visible = false;
        }
        this.resBottom = UI.addPic("res." + this.data.resBottom, true, this);
        UI.setscalXandY(this.resBottom, this.scale, this.scale)
        var loc1;
        this.vy = loc1 = 0;
        this.vx = loc1;
        if (this.data.resTop != "") {
            this.resTop = UI.addPic("res." + this.data.resTop, true, this);
            UI.setscalXandY(this.resTop, this.scale, this.scale);
        }
        if (this.data.effectType != BubbleEffectType.BLANK_BUBBLE) {
            if (this.data.effectType != BubbleEffectType.STONE_DISABLE_BUBBLE) {
                if (this.data.effectType == BubbleEffectType.SKELETON_BUBBLE) {
                    this.bubbleZoom();
                }
            }
            else {
                this.setBubbleLife(3);
            }
        }
        else {
            this.bubbleExtruded();
        }
        return;
    }

    public bubbleExtruded(): void {
        egret.Tween.get(this).to({ "scaleX": 1.1, "scaleY": 0.9 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(this.bubbleExtruded, this, 1001);
        return;
    }

    public bubbleZoom(): void {
        egret.Tween.get(this.resTop).to({ "scaleX": 1.1, "scaleY": 1.1 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(this.bubbleZoom, this, 1001);
        return;
    }

    public getBubbleLife(): number {
        return this._life;
    }

    public setBubbleLife(arg1: number): void {
        this._life = arg1;
        var loc1 = this.data.resBottom;
        if (arg1 != 2) {
            if (arg1 == 1) {
                loc1 = loc1 + "_2";
                this.resBottom.texture = RES.getRes(loc1);
                UI.FreshLocation(this.resBottom);
            }
        }
        else {
            loc1 = loc1 + "_1";
            this.resBottom.texture = RES.getRes(loc1);
            UI.FreshLocation(this.resBottom);
        }
        return;
    }

    public addShield(): void {
        this.shield = UI.addPic("res.prop_6", true, this);
        this.hasShield = true;
        return;
    }

    public removeShield(): void {
        this.removeChild(this.shield);
        this.hasShield = false;
        return;
    }


}
