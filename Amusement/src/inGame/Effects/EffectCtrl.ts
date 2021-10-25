/**特效控制器
 * 生成连线特效,stage提示特效,cell消失特效,comb特效
 */
class EffectCtrl {
    public static instance: EffectCtrl;
    public _effectLayer: egret.DisplayObjectContainer;
    public _gameStage: GameState;



    private constructor() {
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
    }


    /**移除特效 */
    public removeEffect(): void {
    }


}