
class GameState extends egret.DisplayObjectContainer {
    private _gameLayer: egret.DisplayObjectContainer;
    public _playerLayer: egret.DisplayObjectContainer;
    private _gameSprites: any[] = [];
    private _map: MapMain;
    public camera: GameCamera;
    private _cameraFocus: any[] = [];
    public gameUI: GameUI;

    public constructor() {
        super();
        this._gameLayer = new egret.DisplayObjectContainer();
        this._playerLayer = new egret.DisplayObjectContainer();
        this._gameSprites = [];
        var _loc_1 = false;
        // this.mouseEnabled = false;
        // this.mouseChildren = _loc_1;
        return;
    }// end function

    public get gameLayer(): egret.DisplayObjectContainer {
        return this._gameLayer;
    }// end function


    public getMap(): MapMain {
        return this._map;
    }// end function

    public get display(): egret.DisplayObject {
        return this;
    }// end function

    public getGameSpriteGlobalPosition(param1: IGameSprite, param2: number = 0, param3: number = 0): egret.Point {
        var _loc_4 = this.camera.getZoom(true);
        var _loc_5 = this.camera.getScreenRect(true);
        return new egret.Point((-_loc_5.x + param1.getx() + param2) * _loc_4, (-_loc_5.y + param1.gety() + param3) * _loc_4);
    }// end function

    public getGameSprites(): any[] {
        return this._gameSprites;
    }// end function

    public addGameSprite(param1: IGameSprite) {
        if (this._gameSprites.indexOf(param1) != -1) {
            return;
        }
        this._gameSprites.push(param1);
        this._playerLayer.addChild(param1.getDisplay());
        return;
    }// end function

    public removeGameSprite(param1: IGameSprite) {
        var _loc_2 = this._gameSprites.indexOf(param1);
        if (_loc_2 == -1) {
            return;
        }
        this._gameSprites.splice(_loc_2, 1);
        try {
            this._playerLayer.removeChild(param1.getDisplay());
        }
        catch (e) {
        }
        return;
    }// end function

    public build() {
        GameCtrl.I.initlize(this);
        EffectCtrl.I.initlize(this, this._playerLayer);
        this.gameUI = new GameUI();
        GameCtrl.I.initlizeFrame();
        return;
    }// end function

    public initFight(param1: GameRunFighterGroup, param2: GameRunFighterGroup, param3: MapMain) {
        var _loc_6 = null;
        this._map = param3;
        this._map.gameState = this;
        if (this._map.bgLayer) {
            this.addChild(this._map.bgLayer);
        }
        this.addChild(this._gameLayer);
        if (this._map.mapLayer) {
            this._gameLayer.addChild(this._map.mapLayer);
        }
        this._gameLayer.addChild(this._playerLayer);
        if (this._map.frontFixLayer) {
            this._gameLayer.addChild(this._map.frontFixLayer);
        }
        if (this._map.frontLayer) {
            this._gameLayer.addChild(this._map.frontLayer);
        }
        this._cameraFocus = [];
        var _loc_5 = param1.currentFighter;
        var _loc_4 = param2.currentFighter;
        if (_loc_5) {
            GameLogic.resetFighterHP(_loc_5);
            _loc_5.x = this._map.p1pos.x;
            _loc_5.y = this._map.p1pos.y;
            _loc_5.direct = 1;
            _loc_5.updatePosition();
            this._cameraFocus.push(_loc_5.getDisplay());
        }
        if (_loc_4) {
            GameLogic.resetFighterHP(_loc_4);
            if (GameMode.isAcrade()) {
                //GameLogic.setMessionEnemyAttack(_loc_4);
            }
            _loc_4.x = this._map.p2pos.x;
            _loc_4.y = this._map.p2pos.y;
            _loc_4.direct = -1;
            _loc_4.updatePosition();
            this._cameraFocus.push(_loc_4.getDisplay());
        }
        if (this._map.mapLayer) {
            _loc_6 = new egret.Point(this._map.mapLayer.width, GameConfig.GAME_SIZE.y);
        }
        else {
            throw new Error("map is error! :: mapLayer is null!");
        }
        this.initCamera();
        this.camera.focus(this._cameraFocus);
        this.gameUI.initFight(param1, param2);
        this.addChild(this.gameUI.getUIDisplay());
        return;
    }// end function



    public resetFight(param1: GameRunFighterGroup, param2: GameRunFighterGroup) {
        var _loc_4 = param1.currentFighter;
        var _loc_3 = param2.currentFighter;
        this._cameraFocus = [];
        if (_loc_4) {
            GameLogic.resetFighterHP(_loc_4);
            _loc_4.x = this._map.p1pos.x;
            _loc_4.y = this._map.p1pos.y;
            _loc_4.direct = 1;
            _loc_4.idle();
            _loc_4.updatePosition();
            this._cameraFocus.push(_loc_4.getDisplay());
        }
        if (_loc_3) {
            GameLogic.resetFighterHP(_loc_3);
            _loc_3.x = this._map.p2pos.x;
            _loc_3.y = this._map.p2pos.y;
            _loc_3.direct = -1;
            _loc_3.idle();
            _loc_3.updatePosition();
            this._cameraFocus.push(_loc_3.getDisplay());
        }
        this.gameUI.initFight(param1, param2);
        this.cameraResume();
        return;
    }// end function

    public cameraFocusOne(param1: egret.DisplayObject) {
        this.camera.focus([param1]);
        this.camera.setZoom(3.5);
        this.camera.tweenSpd = 2.5 / GameConfig.SPEED_PLUS_DEFAULT;
        return;
    }// end function

    public cameraResume() {
        this.camera.focus(this._cameraFocus);
        this.camera.tweenSpd = 2.5 / GameConfig.SPEED_PLUS_DEFAULT;
        return;
    }// end function

    private initCamera() {
        if (this.camera) {
            // throw new Error("camera inited!");
            return;
        }
        var _loc_4 = this._map.getStageSize();  //(this.mapLayer.width, GameConfig.GAME_SIZE.y);
        this.camera = new GameCamera(this._gameLayer, GameConfig.GAME_SIZE, _loc_4, true);
        this.camera.focusX = true;
        this.camera.focusY = true;
        this.camera.offsetY = this._map.getMapBottomDistance();
        this.camera.setStageBounds(new egret.Rectangle(this._map.mapLayer.x, -800, _loc_4.x, _loc_4.y));//created by lmj in 2020-7-3
        this.camera.autoZoom = true;
        this.camera.autoZoomMin = GameConfig.GAME_SIZE.x / this._map.mapLayer.width;
        this.camera.autoZoomMax = 2.5;
        this.camera.tweenSpd = 2.5 / GameConfig.SPEED_PLUS_DEFAULT;
        var _loc_3 = 2;
        var _loc_1 = _loc_4.x / 2 * _loc_3 - 350;
        var _loc_2 = this._map.bottom - 200;
        this.camera.setZoom(_loc_3);
        this.camera.setX(-_loc_1);
        this.camera.setY(-_loc_2);
        this.camera.updateNow();
        return;
    }// end function

    public render() {
        var _loc_1 = null;
        this.clearDrawGameRect();
        if (this.camera) {
            this.camera.render();
        }
        if (this.gameUI) {
            this.gameUI.render();
        }
        if (this._map && this.camera) {
            _loc_1 = this.camera.getScreenRect(true);
            this._map.render(-_loc_1.x, -_loc_1.y, this.camera.getZoom(true));
        }
        return;
    }// end function


    public drawGameRect(param1: egret.Rectangle, param2: number = 16711680, param3: number = 0.5, param4: boolean = false) {
        /*
        if (param4)
        {
            this._gameLayer.graphics.clear();
        }
        this._gameLayer.graphics.beginFill(param2, param3);
        this._gameLayer.graphics.drawRect(param1.x, param1.y, param1.width, param1.height);
        this._gameLayer.graphics.endFill();
        */
        return;
    }// end function

    public clearDrawGameRect() {
        // this._gameLayer.graphics.clear();
        return;
    }// end function

    public afterBuild() {
        return;
    }// end function

    public destory(param1: Function = null) {
        var _loc_2 = null;
        this.removeChildren();
        if (this._gameSprites) {
            _loc_2 = this._gameSprites.concat();
            for (var _loc_3 in _loc_2) {

                this.removeGameSprite(_loc_2[_loc_3]);
            }
            this._gameSprites = null;
        }
        if (this._playerLayer) {
            this._playerLayer.removeChildren();
            this._playerLayer = null;
        }
        if (this._gameLayer) {
            this._gameLayer.removeChildren();
            this._gameLayer = null;
        }
        if (this.camera) {
            this.camera = null;
        }
        if (this.gameUI) {
            this.gameUI.destory();
            this.gameUI = null;
        }
        EffectCtrl.I.destory();
        GameCtrl.I.destory();
        if (this._map) {
            this._map.destory();
            this._map = null;
        }
        return;
    }// end function



}
