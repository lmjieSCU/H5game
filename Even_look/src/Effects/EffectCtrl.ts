/**特效控制器
 * 生成连线特效,stage提示特效,cell消失特效,comb特效
 */
class EffectCtrl {
    public static instance: EffectCtrl;
    public _effectLayer: egret.DisplayObjectContainer;
    public _gameStage: GameState;
    //
    private _gridEffect: GridEffect;
    private _combEffect: ComboEffect;
    private _stageEffect: StageTipEffect;
    private _gridPathAngs: Array<egret.Bitmap> = [];
    private _gridPathLines: Array<egret.Bitmap> = [];
    private _combImgs: Array<egret.Bitmap> = [];
    private _stageTips: Array<egret.Bitmap> = [];
    //
    private stageTipMoveAnimate: boolean = false;
    private stageTipMoveFrame: number = 0;


    private constructor() {
        this._gridEffect = new GridEffect();
        this._combEffect = new ComboEffect();
        this._stageEffect = new StageTipEffect();
    }

    public static get I(): EffectCtrl {
        if (this.instance == null) {
            this.instance = new EffectCtrl();
        }
        return this.instance;
    }

    public initlize(param1: GameState, param2: egret.DisplayObjectContainer) {
        this._gameStage = param1;
        this._effectLayer = param2;
    }

    public render() {
        if (this.stageTipMoveAnimate) {
            this.stageTipsRender();
        }
        this.removeEffect();
    }


    /**移除特效 */
    public removeEffect(): void {
        for (let i in this._gridPathAngs) {
            if (this._gridPathAngs[i].alpha == 0) {
                this._effectLayer.removeChild(this._gridPathAngs[i]);
                this._gridPathAngs.splice(Number(i), 1);
            }
        }
        for (let i in this._gridPathLines) {
            if (this._gridPathLines[i].alpha == 0) {
                this._effectLayer.removeChild(this._gridPathLines[i]);
                this._gridPathLines.splice(Number(i), 1);
            }
        }
        for (let i in this._combImgs) {
            if (this._combImgs[i].alpha == 0) {
                this._effectLayer.removeChild(this._combImgs[i]);
                this._combImgs.splice(Number(i), 1);
            }
        }
        return;
    }

    public stageTipsRender() {
        this.stageTipMoveFrame++;
        if (this.stageTipMoveFrame >= 22 && this.stageTipMoveFrame <= 40) {
            return;
        }
        for (let i in this._stageTips) {
            this._stageTips[i].x = this._stageTips[i].x - 20;
        }
        if (this._stageTips[1].x + this._stageTips[1].width < -80) {
            this.stageTipMoveAnimate = false;
            this.stageTipMoveFrame = 0;
        }
        if (this.stageTipMoveAnimate) {
            return;
        }
        for (let i in this._stageTips) {
            this._effectLayer.removeChild(this._stageTips[i]);
        }
        this._effectLayer.$setTouchChildren(true);
        GameCtrl.I.running = true;
        SoundCtrl.I.playSound("go");
        return;
    }



    public createstageTipsEft() {
        SoundCtrl.I.playSound("ready");
        this._effectLayer.$setTouchChildren(false);
        this._stageTips = this._stageEffect.createStageEft();
        for (let i in this._stageTips) {
            this._effectLayer.addChild(this._stageTips[i]);
        }
        this.stageTipMoveAnimate = true;
    }


    public createComboEft(cell1: Cell, cell2: Cell, combnum: number) {
        if (combnum <= 0) {
            return;
        }
        if (combnum >= 10) {
            combnum = 10;
        }
        let sound = combnum >= 5 ? "MaxCombo" : "Combo";
        SoundCtrl.I.playSound(sound);
        let comb = this._combEffect.createCombImgAt((cell1.dx + cell2.dx) / 2, (cell1.dy + cell2.dy) / 2, combnum);
        this._combImgs.push(comb);
        this._effectLayer.addChild(comb);
        egret.Tween.get(comb).to({ alpha: 0 }, 1000);
        return;
    }


    /**添加连线特效,连线由多条单一线组成 */
    public createGridPathEft(loc: Array<NPoint>): void {
        for (let i = 0; i < loc.length - 1; i++) {
            this.createGrid_LineAt(loc[i], loc[i + 1]);
        }
        SoundCtrl.I.playSound("link");
        return;
    }

    /**添加节点特效 */
    public createGrid_AngAt(cell: Cell) {
        let angle = this._gridEffect.createAngImgAt(cell.dx, cell.dy);
        this._effectLayer.addChild(angle);
        this._gridPathAngs.push(angle);
        egret.Tween.get(angle).to({ alpha: 0 }, 800);
    }

    /**连线-单一线特效 */
    private createGrid_LineAt(arg1: NPoint, arg2: NPoint) {
        let lines: Array<egret.Bitmap> = this._gridEffect.createLineImgAt(arg1, arg2);
        for (let i in lines) {
            this._effectLayer.addChild(lines[i]);
            this._gridPathLines.push(lines[i]);
            egret.Tween.get(lines[i]).to({ alpha: 0 }, 800);
        }
    }
}