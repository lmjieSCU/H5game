/**游戏舞台,显示对象加载至此处 */
class GameState extends egret.DisplayObjectContainer {
    public _playerLayer: egret.DisplayObjectContainer;
    private _gameSprites: Array<egret.DisplayObject>;

    public constructor() {
        super();
        this._playerLayer = new egret.DisplayObjectContainer();
        this._gameSprites = new Array<egret.DisplayObject>();
        this.addChild(this._playerLayer);
    }

    public build() {
        EffectCtrl.I.initlize(this, this._playerLayer);
        GameCtrl.I.initlize(this);
    }

    public getGameSprites(): Array<egret.DisplayObject> {
        return this._gameSprites;
    }// end function

    public addGameSprite(param1: egret.DisplayObject) {
        if (this._gameSprites.indexOf(param1) != -1) {
            return;
        }
        this._gameSprites.push(param1);
        this._playerLayer.addChild(param1);
        return;
    }// end function

    public removeGameSprite(param1: egret.DisplayObject) {
        var _loc_2 = this._gameSprites.indexOf(param1);
        if (_loc_2 == -1) {
            return;
        }
        this._gameSprites.splice(_loc_2, 1);
        try {
            this._playerLayer.removeChild(param1);
        }
        catch (e) {
        }
        return;
    }// end function


}