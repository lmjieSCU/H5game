class EffectView {
    public display: egret.Bitmap;
    public autoRemove: boolean = true;
    public holdFrame: number = -1;
    public isActive: boolean = true;
    private _onRemoveFuncs: any[];
    private _isDestoryed: boolean;
    protected _data: EffectVO;
    private _bitmapDatas: zmovie.ZMovieClip;
    private _frameLabels: any;
    private _orgX: number = 0;
    private _orgY: number = 0;
    private _curFrame: number;
    private _rotation: number;
    private _direct: number;
    public _effectZmovie: zmovie.ZMovieClip;

    constructor(param1: EffectVO) {
        this._data = param1;
        this.display = new egret.Bitmap();
        this.display.blendMode = param1.blendMode;
        this.display.smoothing = EffectCtrl.EFFECT_SMOOTHING;

        //this._bitmapDatas = param1.bitmapDataCache;

        this._frameLabels = param1.frameLabelCache;
        this._effectZmovie = new zmovie.ZMovieClip([
            "effect0_json", "effect1_json", "effect2_json", "effect3_json",
            "effect4_json", "effect5_json", "effect6_json"
        ], RES.getRes("effect_json"), param1.className);
        return;
    }// end function

    public setPos(param1: number, param2: number): void {
        this._orgX = param1;
        this._orgY = param2;
        return;
    }// end function

    public start(param1: number = 0, param2: number = 0, param3: number = 1): void {
        this._orgX = param1;
        this._orgY = param2;
        // this._direct = this._rotation != 0 ? (1) : (param3);
        this._direct = param3
        this._effectZmovie.scaleX = this._direct;
        this._curFrame = 0;
        //设置图像混合模式
        // this._effectZmovie.cacheAsBitmap = true
        if (this._data.blendMode == "sceen") {
            this._effectZmovie.blendMode = egret.BlendMode.ERASE
        }
        else if (this._data.blendMode == "add") {
            this._effectZmovie.blendMode = this._data.blendMode;
        }

        if (this._data.randRotate) {
            this.randRotate();
        }
        if (this._data.sound) {
            SoundCtrl.I.playEffectSound(this._data.sound);
        }
        this.renderDisplay();
        this.isActive = true;
        return;
    }// end function

    public destory(): void {
        this._isDestoryed = true;
        if (this.isActive) {
            this.removeSelf();
        }
        this.display = null;
        return;
    }// end function

    public gotoAndPlay(param1: Object): void {

        if (typeof (param1) == "number") {
            this._curFrame = Number(param1);
        }
        if (typeof (param1) == "string") {
            var _loc4_: number = 0;
            var _loc3_ = this._frameLabels;
            for (var _loc2_1 in this._frameLabels) {
                let _loc2_ = this._frameLabels[_loc2_1];
                if (this._frameLabels[_loc2_] == param1) {
                    this._curFrame = Number(_loc2_);
                }
            }
        }
        return;
    }// end function

    private randRotate(): void {
        this._rotation = Math.random() * 360;
        this.display.rotation = this._rotation;
        this.display.scaleX = 1;
        return;
    }// end function

    public render(): void {
        return;
    }// end function

    public renderAnimate(): void {
        if (this._isDestoryed) {
            return;
        }
        var _loc_1: any = false;
        if (this.autoRemove) {
            if (this._curFrame == (this._effectZmovie.totalFrame)) {
                // this.holdFrame = 0 //--循环测试
                if (this.holdFrame == -1) {
                    this.removeSelf();
                    _loc_1 = true;
                }
                else {
                    this._curFrame = 0;
                    this.holdFrame = -1 //---循环测试
                }
            }
            if (this.holdFrame != -1) {
                this.holdFrame = this.holdFrame - 1;
                if (this.holdFrame <= 0) {
                    this.removeSelf();
                    _loc_1 = true;
                }
            }
        }
        if (!_loc_1) {
            this.renderFrameLabel();
            this.renderDisplay();

            this._curFrame = (this._curFrame + 1);

        }
        return;
    }// end function
    //渲染当前帧的特效图片
    private renderDisplay(): void {
        let xx = this._effectZmovie.x.toFixed(2);
        let yy = this._effectZmovie.y.toFixed(2);
        let frameNum: number = this._curFrame + 1;
        GameScene.instance.addLog("renderDisplay " + this._data.className + "_curFrame " + frameNum + " x=" + xx + " y=" + yy)
        this._effectZmovie.gotoAndStop(frameNum)

        return;
    }// end function

    private renderFrameLabel(): void {
        var _loc_1: any = this._effectZmovie.mcObj.frameLabels;
        var _loc_2: any = _loc_1;
        while (_loc_2 == "loop") {
            this.gotoAndPlay(1);
            break;
        }
        return;
    }// end function

    public remove(): void {
        this.removeSelf();
        return;
    }// end function

    public addRemoveBack(param1: Function): void {
        if (!this._onRemoveFuncs) {
            this._onRemoveFuncs = [];
        }
        if (this._onRemoveFuncs.indexOf(param1) != -1) {
            return;
        }
        this._onRemoveFuncs.push(param1);
        return;
    }// end function

    private removeSelf(): void {
        this.isActive = false;
        for (let _loc_1 of this._onRemoveFuncs) {

            _loc_1(this);
        }
        this._onRemoveFuncs = null;
        if (this._effectZmovie && this._effectZmovie.parent) {
            this._effectZmovie.parent.removeChild(this._effectZmovie);
        }
        return;
    }// end function

}

