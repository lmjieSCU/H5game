class Candy extends Elements {

    public row: number;

    public col: number;

    public _color: number;

    public _status: number; //0:普通，1：水平,2:竖直

    public img: egret.Bitmap;   //candy图像

    public mark: boolean = false;

    public remove: boolean = false;

    public _bombLeftCount: number = 0;  //剩余时间

    public path: Array<any>;

    public queue: Array<any>;

    public r: number = 0;

    public rspeed: number = 0.2;

    public _isShake: boolean;

    public _nextStatus: number;

    public static pool: BasePool = new BasePool(Candy, 81);

    public bomb_txt: egret.BitmapText;//textures

    public isMoving: boolean = false;



    //
    public shakecount: number = 100;

    public constructor() {
        super();
        this.path = [];
        this.queue = [];
        return;
    }

    public setBomb(arg1: number): void {
        if (this.img != null) {
            this.img.parent.removeChild(this.img);
            this.img = null;
        }
        this.img = UI.addPic("candytimer" + (this.color - 1) + "_png", true, this);
        this._bombLeftCount = arg1;
        // com.popchan.framework.manager.Debug.log("炸弹步数:" + arg1);
        if (!this.bomb_txt) {
            this.bomb_txt = UI.addBitText(this, arg1, "bomb_fnt", true, 0, 20, 1.3, 1.3);
            this.bomb_txt.letterSpacing = 2;
        }
        return;
    }

    public isBomb(): boolean {
        return this._bombLeftCount > 0;
    }

    /**炸弹炸掉游戏失败 */
    public bombCountUpdate(): void {
        this._bombLeftCount = this._bombLeftCount - 1;
        if (this._bombLeftCount <= 0) {
            this._bombLeftCount = 0;
            Model.gameModel.isSuccess = false;
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        }
        this.bomb_txt.text = String(this._bombLeftCount);
        console.log(this.bomb_txt.text)
        return;
    }

    public getBombCount(): number {
        return this._bombLeftCount;
    }

    public reset(): void {
        egret.Tween.removeTweens(this);
        this.stopShake();
        this._bombLeftCount = 0;
        this._status = 0;
        this.mark = false;
        this.remove = false;
        this.scaleY = 1;
        this.scaleX = 1;
        if (this.img != null) {
            this.img.scaleY = 1;
            this.img.scaleX = 1;
        }
        return;
    }

    public shake(): void {
        egret.Tween.removeTweens(this.img);
        this._isShake = true;
        return;
    }

    public Shakerender() {
        if (!this._isShake) {
            return;
        }
        let loc1 = Math.sin(this.r) * 10;
        this.r = this.r + this.rspeed;
        this.img.rotation = Math.PI * loc1;
        return;
    }

    public stopShake(): void {
        this._isShake = false;
        if (this.img) {
            egret.Tween.removeTweens(this.img);
            this.img.rotation = 0;
        }
        this.r = 0;
        return;
    }

    public setNextStatus(arg1: number): void {
        this._nextStatus = arg1;
        return;
    }

    public get isShake(): boolean {
        return this._isShake;
    }

    public isFruit(): boolean {
        if (this._color == ColorType.FRUIT1 || this._color == ColorType.FRUIT2 || this._color == ColorType.FRUIT3) {
            return true;
        }
        return false;
    }

    public get color(): number {
        if (this.status == CandySpecialStatus.COLORFUL) {
            return 0;
        }
        return this._color;
    }

    public set color(arg1: number) {
        this._color = arg1;
        if (this.img != null) {
            this.img.parent.removeChild(this.img);
            // this.img.dispose();
            this.img = null;
        }
        let loc1 = "candy" + (this.color - 1);
        if (this.color != 7) {
            if (this.color != 8) {
                if (this.color == 9) {
                    loc1 = "fruit3";
                }
            }
            else {
                loc1 = "fruit2";
            }
        }
        else {
            loc1 = "fruit1";
        }
        this.img = UI.addPic(loc1 + "_png", true, this);
        return;
    }

    public collidePoint(arg1: egret.Point): boolean {
        let loc1 = new egret.Rectangle(-32 + this.x, -32 + this.y, 64, 64);
        if (loc1.containsPoint(arg1)) {
            return true;
        }
        return false;
    }

    public get status(): number {
        return this._status;
    }

    public getNextStatus(): number {
        return this._nextStatus;
    }


    //swap动画
    public runMoveAction(point: egret.Point, time: number, callFun: any = null, callthis: any = null, callparams: Array<any> = null, way: any = null): void {
        this.isMoving = true;
        if (callFun == null) {
            egret.Tween.get(this).to({ "x": point.x, "y": point.y }, time);
            egret.setTimeout(this.resetMoving, this, time + 100);
        } else {
            egret.Tween.get(this).to({ "x": point.x, "y": point.y }, time).call(callFun, callthis, callparams).call(this.resetMoving, this);
            // egret.setTimeout(this.resetMoving, this, time + 100);
        }
        return;
    }

    public resetMoving() {
        this.isMoving = false;
    }


    public addPath(arg1: Object): void {
        this.path.push(arg1);
        return;
    }

    public stopAllActions(): void {
        this.img.scaleY = 1;
        this.img.scaleX = 1;
        egret.Tween.removeTweens(this.img);
        egret.Tween.removeTweens(this);
        return;
    }

    public runAsPath(): void {
        let loc2 = null;
        let loc6 = null;
        let loc7 = null;
        this.stopAllActions();
        this.queue = [];
        let loc1 = this.path[0];
        if (loc1.type != 1) {
            if (loc1.type == 2) {
                loc2 = this.setCandMoveAction(loc1.pos);
            }
        }
        else {
            loc2 = this.getCandyMoveAction(new egret.Point(this.x, this.y), loc1.pos);
        }
        this.queue.push(loc2);
        let loc3 = 1;
        while (loc3 < this.path.length) {
            if ((loc6 = this.path[loc3]).type != 1) {
                if (loc6.type == 2) {
                    loc7 = this.setCandMoveAction(this.path[loc3].pos);
                }
            }
            else {
                loc7 = this.getCandyMoveAction(this.path[(loc3 - 1)].pos, this.path[loc3].pos);
            }
            this.queue.push(loc7);
            ++loc3;
        }
        let loc4 = { "time": 100, path: { "y": this.path[(loc3 - 1)].pos.y - 3 } };
        let loc5 = { "time": 100, path: { "y": this.path[(loc3 - 1)].pos.y + 3 } };
        this.queue.push(loc4);
        this.queue.push(loc5);
        this.path = [];
        this.runMoveQueueAction();
        return;
    }

    public runMoveQueueAction(): void {
        if (this.queue.length > 0) {
            this.isMoving = true;
            let param = this.queue.shift();
            egret.Tween.get(this).to(param.path, param.time);
            egret.setTimeout(function () {
                this.resetMoving();
                this.runMoveQueueAction();
            }, this, param.time);
        }
        return;
    }

    public getCandyMoveAction(arg1: egret.Point, arg2: egret.Point): Object {
        let loc1 = Math.abs(arg2.y - arg1.y);
        let loc2 = Math.abs(arg2.x - arg1.x);
        return { path: { "x": arg2.x, "y": arg2.y }, time: Math.sqrt(loc2 * loc2 + loc1 * loc1) };
    }

    public setCandMoveAction(arg1: egret.Point): Object {
        return { path: { "x": arg1.x, "y": arg1.y }, time: 10 };
    }

    public setSpecialStatus(status: number, arg2: boolean = false, arg3: boolean = false): void {
        if (this.img != null) {
            this.img.parent.removeChild(this.img);
            this.img = null;
        }
        this.img = UI.addPic("candy" + (this.color - 1) + "_png", true);
        this._status = status;
        if (status != CandySpecialStatus.HORIZ) {
            if (status != CandySpecialStatus.VERT) {
                if (status != CandySpecialStatus.BOMB) {
                    if (status == CandySpecialStatus.COLORFUL) {
                        this.img = UI.addPic("candyking_png", true);
                    }
                }
                else {
                    this.img = UI.addPic("candybomb" + (this.color - 1) + "_png", true);
                }
            }
            else {
                this.img = UI.addPic("candy" + (this.color - 1) + "b_png", true);
            }
        }
        else {
            this.img = UI.addPic("candy" + (this.color - 1) + "a_png", true);
        }
        this.addChild(this.img);
        if (arg2) {
            this.img.scaleY = 0;
            this.img.scaleX = 0;
            this.isMoving = true;
            egret.Tween.get(this.img).to({ "scaleX": 1, "scaleY": 1 }, 250);
            egret.setTimeout(this.resetMoving, this, 300);
            SoundCtrl.I.playmusic("candyspgrow1");
        }
        if (status == 4) {
            this._color = 0;
        }
        return;
    }
}