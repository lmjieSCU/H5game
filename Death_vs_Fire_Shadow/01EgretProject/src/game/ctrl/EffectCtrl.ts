class EffectCtrl {
    public shineMaxCount: number = 3;
    private _gameStage: GameState;
    public _effectLayer: egret.DisplayObjectContainer;
    private _manager: EffectManager;
    public freezeEnabled: boolean = true;
    private _freezeFrame: number = 0;
    public _effects: EffectView[];
    private _justRenderAnimateTargets: any;
    private _justRenderTargets: any;
    private _shineEffects: ShineEffectView[];
    private _shadowEffects: any[] = [];
    private _blackBack: BlackBackView;
    private _shakePowX: number = 0;
    private _shakePowY: number = 0;
    private _shakeXDirect: number;
    private _shakeYDirect: number;
    private _shakeFrameX: number = 0;
    private _shakeFrameY: number = 0;
    private _shakeLoseX: number = 0;
    private _shakeLoseY: number = 0;
    private _renderAnimateGap: number = 0;
    private _renderAnimateFrame: number = 0;
    private _renderAnimate: boolean = true;
    private _slowDownFrame: number;
    private _replaceSkillFrame: number;
    private _replaceSkillFrameHold: number;
    private _replaceSkillPos: egret.Point;
    private _explodeSkillFrame: number;
    private _explodeEffectPos: egret.Point;
    public static EFFECT_SMOOTHING: boolean = true;
    public static SHADOW_ENABLED: boolean = true;
    public static SHAKE_ENABLED: boolean = true;
    public static _i: EffectCtrl;
    public _zMovieArray: Array<zmovie.ZMovieClip> = [];



    constructor() {
        this._renderAnimateFrame = 0;
        this._renderAnimateGap = 0;
        this._freezeFrame = 0;
        this.initlize(GameCtrl.I.gameState, GameCtrl.I.gameState._playerLayer)
        return;
    }// end function

    public destory(): void {
        if (this._manager) {
            this._manager.destory();
            this._manager = null;
        }
        if (this._blackBack) {
            this._blackBack.destory();
            this._blackBack = null;
        }
        this._effects = null;
        this._justRenderAnimateTargets = null;
        this._justRenderTargets = null;
        this._shineEffects = null;
        this._shadowEffects = null;
        this._gameStage = null;
        this._effectLayer = null;
        return;
    }// end function

    public initlize(param1: GameState, param2: egret.DisplayObjectContainer): void {
        this._manager = new EffectManager();
        this._gameStage = param1;
        this._effectLayer = param2;
        this._effects = new Array();
        this._justRenderAnimateTargets = new Array();
        this._justRenderTargets = new Array();
        this._shineEffects = new Array();
        this._shadowEffects = new Array();
        this._blackBack = new BlackBackView();
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        this._renderAnimateFrame = 0;
        return;
    }// end function

    public render(): void {
        var _loc_2: any = 0;
        if (this.freezeEnabled) {
            this.renderFreeze();
        }
        this.renderSlowDown();
        this.renderShine();
        _loc_2 = 0;
        while (_loc_2 < this._effects.length) {

            this._effects[_loc_2].render();
            _loc_2++;
        }
        if (this.isRenderAnimate()) {
            this.renderAnimate();
        }
        if (this._replaceSkillFrameHold > 0) {
            this.renderReplaceSkill();
        }
        if (this._explodeSkillFrame > 0) {
            this.renderEnergyExplode();
        }
        if (this._justRenderTargets) {
            for (let _loc_1 of this._justRenderTargets) {
                _loc_1.render();
                GameLogic.fixGameSpritePosition(_loc_1);
            }
        }
        return;
    }// end function

    private renderShine(): void {
        var _loc_1: any = null;
        var _loc_2: any = 0;
        _loc_2 = 0;
        while (_loc_2 < this._shineEffects.length) {

            _loc_1 = this._shineEffects[_loc_2];
            _loc_1.render();
            _loc_2++;
        }
        return;
    }// end function

    private renderAnimate(): void {
        var _loc_4: any = null;
        var _loc_2: any = null;
        var _loc_3: any = null;
        var _loc_1: any = null;
        var _loc_5: any = 0;
        _loc_5 = 0;
        while (_loc_5 < this._effects.length) {
            _loc_2 = this._effects[_loc_5];
            _loc_2.renderAnimate();
            _loc_5++;
        }
        for (let k in this._shadowEffects) {
            this._shadowEffects[k].render()

        }
        if (this._justRenderAnimateTargets) {
            for (var _loc_11 in this._justRenderAnimateTargets) {

                this._justRenderAnimateTargets[_loc_11].renderAnimate();
            }
        }
        if (this._blackBack) {
            this._blackBack.renderAnimate();
        }
        this.renderShakeX();
        this.renderShakeY();
        return;
    }// end function

    private isRenderAnimate(): boolean {
        if (this._renderAnimateGap > 0) {
            this._renderAnimateFrame = (this._renderAnimateFrame + 1);
            if (this._renderAnimateFrame >= this._renderAnimateGap) {
                this._renderAnimateFrame = 0;
                return true;
            }
            return false;
        }
        return true;
    }// end function

    private renderFreeze(): void {
        if (this._freezeFrame > 0) {
            this._freezeFrame = (this._freezeFrame - 1);
            if (this._freezeFrame <= 0) {
                GameCtrl.I.resume();
            }
        }
        return;
    }// end function

    private renderShakeX(): void {
        if (this._shakePowX > 0) {
            this._gameStage.x = this._shakePowX * this._shakeXDirect;
            if (this._shakeFrameX % 2 == 0) {
                this._shakePowX = this._shakePowX - this._shakeLoseX;
                if (this._shakePowX < this._shakeLoseX) {
                    this._shakePowX = 0;
                    this._gameStage.x = 0;
                    this._shakeFrameX = 0;
                    this._shakeLoseX = 0;
                    return;
                }
            }
            (this._shakeFrameX + 1);
            this._shakeXDirect = this._shakeXDirect * -1;
        }
        return;
    }// end function

    private renderShakeY(): void {
        if (this._shakePowY > 0) {
            this._gameStage.y = this._shakePowY * this._shakeYDirect;
            if (this._shakeFrameY % 2 == 0) {
                this._shakePowY = this._shakePowY - this._shakeLoseY;
                if (this._shakePowY < this._shakeLoseY) {
                    this._shakePowY = 0;
                    this._gameStage.y = 0;
                    this._shakeLoseY = 0;
                    return;
                }
            }
            this._shakeYDirect = this._shakeYDirect * -1;
            (this._shakeFrameY + 1);
        }
        return;
    }// end function

    public doHitEffect(param1: HitVO, param2: egret.Rectangle, param3: IGameSprite = null): void {
        // if(!this._doeffect){return;}
        var _loc6_: EffectVO = this._manager.getEffectVOByHitVO(param1);
        if (!_loc6_) {
            return;
        }
        var _loc_5: any = param2.x
        var _loc_7: any = param2.y
        var _loc_4: any = 1;
        if (_loc6_.followDirect && param1.owner && param1.owner instanceof BaseGameSprite)  //instanceof IGameSprite)
        {
            _loc_4 = (<IGameSprite>param1.owner).getdirect();
        }
        this.doEffectVO(_loc6_, _loc_5, _loc_7, _loc_4, param3);
        return;
    }// end function

    public doDefenseEffect(param1: HitVO, param2: egret.Rectangle, param3: number, param4: IGameSprite = null): void {
        var _loc_8: any = NaN;
        var _loc_11: any = NaN;
        var _loc7_: any = param1.hitType;
        switch (Number(param3)) {
            case 0:
                break;
            case 1:
                if (_loc7_ == 1) {
                    _loc7_ = 2;
                }
                if (_loc7_ == 6) {
                    _loc7_ = 3;
                    break;
                }
        }
        var _loc_9: any = EffectModel.I.getDefenseEffect(_loc7_);
        if (!EffectModel.I.getDefenseEffect(_loc7_)) {
            return;
        }
        var _loc_6: any = param2.x + param2.width / 2;
        var _loc_10: any = param2.y + param2.height / 2;
        if (_loc_9.shake) {
            if (_loc_9.shake.pow != undefined && _loc_9.shake.pow != 0) {
                _loc_8 = _loc_9.shake.pow;
                _loc_11 = Math.abs(param1.hitx) + Math.abs(param1.hity);
                _loc_9.shake.x = _loc_8 * (param1.hitx / _loc_11);
                _loc_9.shake.y = _loc_8 * (param1.hity / _loc_11);
            }
        }
        var _loc_5: any = 1;
        if (_loc_9.followDirect && param1.owner && param1.owner instanceof BaseGameSprite)  // //instanceof IGameSprite)
        {
            _loc_5 = (<IGameSprite>param1.owner).getdirect();
        }
        this.doEffectVO(_loc_9, _loc_6, _loc_10, _loc_5, param4);
        return;
    }// end function

    public doEffectById(param1: string, param2: number, param3: number, param4: number = 1, param5: IGameSprite = null): void {
        var _loc_6: EffectVO = EffectModel.I.getEffect(param1);
        if (EffectModel.I.getEffect(param1)) {
            this.doEffectVO(_loc_6, param2, param3, param4, param5);
        }
        return;
    }// end function

    public assisterEffect(param1: Assister): void {
        return; //return by lmj in 2020-7-22 because no param1.data:fighterVO
        var _loc_2: any = param1.data.comicType == 1;
        if (_loc_2) {
            this.doEffectById("fz_naruto", param1.x, param1.y);
        }
        else {
            this.doEffectById("fz_bleach", param1.x, param1.y);
        }
        return;
    }// end function

    public doEffectVO(param1: EffectVO, param2: number, param3: number, param4: number = 1, param5: IGameSprite = null): void {
        var _loc_10: any = NaN;
        var _loc_9: any = NaN;
        var _loc_8: any = NaN;
        var _loc_12: any = 0;
        var _loc_13: any = NaN;
        var _loc_11: any = NaN;
        var _loc_7: any = 0;
        var _loc_6: EffectView = this.addEffect(param1, param2, param3, param4);
        if (_loc_6) {
            //GameScene.instance._GameState.gameLayer.addChild(_loc_6._effectZmovie);
            this._effectLayer.addChild(_loc_6._effectZmovie)
        }
        if (param1.freeze > 0) {
            this.freeze(param1.freeze);
        }
        if (param1.shake) {
            _loc_10 = param1.shake.time != undefined ? (param1.shake.time) : (0);
            _loc_9 = param1.shake.x != undefined ? (param1.shake.x) : (0);
            _loc_8 = param1.shake.y != undefined ? (param1.shake.y) : (0);
            this.shake(_loc_9, _loc_8, _loc_10);
        }
        if (param1.shine) {
            _loc_12 = param1.shine.color != undefined ? (param1.shine.color) : (16777215);
            _loc_13 = param1.shine.alpha != undefined ? (param1.shine.alpha) : (0.2);
            this.shine(_loc_12, _loc_13);
        }
        if (param1.slowDown) {
            _loc_11 = param1.slowDown.rate != undefined ? (param1.slowDown.rate) : (1.5);
            _loc_7 = param1.slowDown.time != undefined ? (param1.slowDown.time) : (1000);
            this.slowDown(_loc_11, _loc_7);
        }
        if (param1.specialEffectId && param5 && param5 instanceof FighterMain) {
            this.doSpecialEffect(param1.specialEffectId, <FighterMain>param5);
        }
        return;
    }// end function

    public doSpecialEffect(param1: string, param2: FighterMain): void {
        var _loc_4: any = EffectModel.I.getEffect(param1);
        var _loc_3: any = this.addEffect(_loc_4, param2.x, param2.y, param2.direct) as SpecialEffectView;
        if (_loc_3) {
            _loc_3.setTarget(param2);
            this._effectLayer.addChild(_loc_3._effectZmovie);
        }
        return;
    }// end function

    private addEffect(param1: EffectVO, param2: number, param3: number, param4: number = 1): EffectView {
        var _loc_5: EffectView = this._manager.getEffectView(param1);
        if (!_loc_5) {
            return null;
        }
        //设置获取的zmovie
        let _tempZmovie = _loc_5._effectZmovie
        //坐标
        _tempZmovie.x = param2;
        _tempZmovie.y = param3;
        //存入到zmovie缓存
        this._zMovieArray.push(_tempZmovie)


        _loc_5.start(param2, param3, param4);
        _loc_5.addRemoveBack(this.removeEffect);
        this._effects.push(_loc_5);
        return _loc_5;
    }// end function

    private removeEffect(param1: EffectView): void {
        var _loc_2: any = EffectCtrl.I._effects.indexOf(param1);
        let _tempZmovie = EffectCtrl.I._zMovieArray.indexOf(param1._effectZmovie)
        if (_loc_2 != -1) {
            EffectCtrl.I._effects.splice(_loc_2, 1);
            EffectCtrl.I._zMovieArray.splice(_tempZmovie, 1);
        }
        if (param1 instanceof SpecialEffectView) {
            param1["_target"].mc.filters = null;
        }
        return;
    }// end function

    public freeze(param1: number): void {
        if (!this.freezeEnabled) {
            return;
        }
        if (param1 < 1) {
            return;
        }
        var _loc_2: any = param1 / 1000 * GameConfig.FPS_GAME;
        if (_loc_2 < 1) {
            return;
        }
        this._freezeFrame = _loc_2;
        GameCtrl.I.pause();
        return;
    }// end function

    private justRender(param1: Object = null, param2: any = null): void {
        if (param1) {
            if (param1 instanceof BaseGameSprite) {
                this._justRenderAnimateTargets.push(param1);//new BaseGameSprite();
            }
            else {
                this._justRenderAnimateTargets.push(param1);
            }
        }
        else {
            // this._justRenderAnimateTargets = null;
        }
        if (param2) {
            if (param2 instanceof BaseGameSprite) {
                //[][0] = <BaseGameSprite> param2;
                this._justRenderTargets = param2;//
            }
            else {
                this._justRenderTargets = param2;//<Vector> param2.<BaseGameSprite>;
            }
        }
        else {
            this._justRenderTargets = null;
        }
        return;
    }// end function

    public shine(param1: number = 16777215, param2: number = 0.2): void {
        if (GameConfig.FPS_SHINE_EFFECT == 0) {
            return;
        }
        if (this._shineEffects.length > this.shineMaxCount) {
            this._shineEffects = []
        }
        var _loc_3: ShineEffectView = this._manager.getShine();
        _loc_3.init(param1, param2);
        _loc_3.onRemove = this.removeShine;
        this._shineEffects.push(_loc_3);

        GameScene.instance.addChild(_loc_3);
        return;
    }// end function

    private removeShine(param1: ShineEffectView): void {
        var _loc_2: any = EffectCtrl.I._shineEffects.indexOf(param1);
        if (_loc_2 != -1) {
            EffectCtrl.I._shineEffects.splice(_loc_2, 1);
        }
        return;
    }// end function

    public shake(param1: number = 0, param2: number = 3, param3: number = 0): void {
        if (!EffectCtrl.SHAKE_ENABLED) {
            return;
        }
        if (Flash.isNaN(param1) || Flash.isNaN(param2)) {
            return;
        }
        if (param1 != 0) {
            if (this._shakePowX == 0) {
                this._shakeXDirect = param1 > 0 ? (1) : (-1);
            }
            this._shakePowX = Math.max(this._shakePowX, Math.abs(param1));
        }
        if (param2 != 0) {
            if (this._shakePowY == 0) {
                this._shakeYDirect = param2 > 0 ? (1) : (-1);
            }
            this._shakePowY = Math.max(this._shakePowX, Math.abs(param2));
        }
        if (param3 == -1) {
            this._shakeLoseX = 0;
            this._shakeLoseY = 0;
            return;
        }
        if (param3 <= 0) {
            param3 = 500;
        }
        var _loc_5: any = Math.ceil(this._shakePowX / (param3 / 1000 * 30) * 2);
        var _loc_4: any = Math.ceil(this._shakePowY / (param3 / 1000 * 30) * 2);
        this._shakeLoseX = Math.max(_loc_5, this._shakeLoseX);
        this._shakeLoseY = Math.max(_loc_4, this._shakeLoseY);
        return;
    }// end function

    public startShadow(param1: any, param2: number = 0, param3: number = 0, param4: number = 0): void { //param1:/*egret.DisplayObject*/
        if (!EffectCtrl.SHADOW_ENABLED) {
            return;
        }
        var _loc_5: any = this._shadowEffects[param1];
        if (this._shadowEffects[param1]) {
            _loc_5.r = param2;
            _loc_5.g = param3;
            _loc_5.b = param4;
            _loc_5.stopShadow = false;
            return;
        }
        _loc_5 = new ShadowEffectView(param1, param2, param3, param4);
        _loc_5.onRemove = this.removeShadow;
        _loc_5.container = this._effectLayer;
        this._shadowEffects[param1] = _loc_5;
        return;
    }// end function

    public endShadow(param1: any/*egret.DisplayObject*/): void {
        if (!EffectCtrl.SHADOW_ENABLED) {
            return;
        }
        if (!this._shadowEffects) {
            return;
        }
        var _loc_2: any = this._shadowEffects[param1];
        if (_loc_2) {
            _loc_2.stopShadow = true;
            param1.filters = null
        }
        return;
    }// end function

    private removeShadow(param1: ShadowEffectView): void {
        if (!this._shadowEffects) {
            return;
        }
        return;
    }// end function

    public bisha(param1: BaseGameSprite, param2: boolean = false, param3: egret.DisplayObject = null): void {
        // this.justRender(param1);
        GameCtrl.I.pause(false)
        GameCtrl.I.setRenderHit(false)
        //GameCtrl.I.pause(false);
        //GameCtrl.I.setRenderHit(false);
        this._gameStage.addChildAt(this._blackBack, 0);
        // GameScene.instance.addChildAt(this._blackBack, 0);
        this._blackBack.fadIn();
        if (param3 && param1 instanceof FighterMain) {
            this.showFace(<FighterMain>param1, param3);
        }
        if (param2) {
            GameCtrl.I.gameState.cameraFocusOne(param1.getDisplay());
            GameCtrl.I.gameState.cameraFocusOne(param1.getDisplay())
            this.doEffectById("bisha_super", param1.x, param1.y - 50);
        }
        else {
            this.doEffectById("bisha", param1.x, param1.y - 50);
        }
        this._gameStage.getMap().setVisible(false);
        return;
    }// end function

    public endBisha(): void {
        // this.justRender(null, null);
        GameCtrl.I.resume();
        GameCtrl.I.gameState.cameraResume();
        GameCtrl.I.setRenderHit(true)
        this._blackBack.fadOut();

        this._gameStage.getMap().setVisible(true);
        //
        // for(let k in GameScene.instance.$children){
        //     if(GameScene.instance.getChildAt(Number(k)) instanceof ShineEffectView){
        //         GameScene.instance.removeChild(GameScene.instance.getChildAt(Number(k)))
        //     }
        // }
        return;
    }// end function

    private showFace(param1: FighterMain, param2: egret.DisplayObject): void {
        var _loc_5: any = null;
        var _loc_4: any = 1;
        var _loc_3: any = param1.getCurrentTarget();
        if (_loc_3) {
            _loc_5 = _loc_3.getDisplay();
            if (_loc_5) {
                _loc_4 = param1.getDisplay().x > _loc_5.x ? (2) : (1);
            }
        }
        this._blackBack.showBishaFace(_loc_4, param2);
        return;
    }// end function

    public wanKai(param1: FighterMain, param2: egret.DisplayObject = null): void {
        // this.justRender(param1);
        GameCtrl.I.pause();
        this._blackBack.fadIn();
        if (param2) {
            this.showFace(param1, param2);
        }

        GameCtrl.I.gameState.cameraFocusOne(param1.getDisplay());
        this.doEffectById("bisha_super", param1.x, param1.y - 50);
        this._gameStage.getMap().setVisible(false);
        return;
    }// end function

    public endWanKai(): void {
        // this.justRender(null, null);
        GameCtrl.I.resume();
        GameCtrl.I.gameState.cameraResume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        return;
    }// end function

    public jumpEffect(param1: number, param2: number): void {
        this.doEffectById("jump", param1, param2);
        return;
    }// end function

    public jumpAirEffect(param1: number, param2: number): void {
        this.doEffectById("jump_air", param1, param2);
        return;
    }// end function

    public touchFloorEffect(param1: number, param2: number): void {
        this.doEffectById("touch_floor", param1, param2);
        return;
    }// end function

    public hitFloorEffect(param1: number, param2: number, param3: number): void {
        switch (Number(param1)) {
            case 0:
                this.doEffectById("hit_floor", param2, param3);
                break;
            case 1:
                this.doEffectById("hit_floor_low", param2, param3);
                break;
            case 2:
                this.doEffectById("hit_floor_heavy", param2, param3);
                this.doEffectById("hit_floor_yan", param2, param3);
        }
    }// end function

    public slowDown(param1: number, param2: number = 1000): void {
        GameCtrl.I.slow(param1);
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / (30 / param1)) - 1;
        // console.log("slowDown: " + this._renderAnimateGap)
        if (param2 == 0) {
            this._slowDownFrame = 0;
        }
        else {
            this._slowDownFrame = param2 / 1000 * GameConfig.FPS_GAME;
        }
        // console.log("slowDown " + this._slowDownFrame)
        return;
    }// end function

    public get slowDownFrame(){
        return this._slowDownFrame;
    }
    private renderSlowDown(): void {
        if (this._slowDownFrame > 0) {
            this._slowDownFrame = this._slowDownFrame - 1;
            if (this._slowDownFrame <= 0) {
                this.slowDownResume();
            }
        }
        return;
    }// end function

    public slowDownResume(): void {
        GameCtrl.I.slowResume();
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        // console.log("slowDownResume: " + this._renderAnimateGap)
        this._slowDownFrame = 0;
        return;
    }// end function

    public BGEffect(param1: string, param2: number = -1): void {
        let id = param1;
        let hold = param2;
        var data: any = EffectModel.I.getEffect(id);
        if (!data) {
            return;
        }
        var effect: any = this.addEffect(data, 0, 0, 1);
        if (hold != -1) {
            effect.holdFrame = hold * 30;
        }
        if (effect) {
            effect.addRemoveBack(function (): void {
                //this._gameStage.getMap().setVisible(true);
                return;
            }// end function
            );
            //this._gameStage.getMap().setVisible(false);
            this._gameStage.addChild(effect._effectZmovie);
        }
        return;
    }// end function

    public replaceSkill(param1: BaseGameSprite): void {
        GameCtrl.I.pause();
        // this._gameStage.addChildAt(this._blackBack, 0);
        // this._gameStage.getMap().setVisible(false);
        this.doEffectById("replaceSp", param1.x, param1.y);
        this._replaceSkillPos = new egret.Point(param1.x, param1.y);
        this._replaceSkillFrame = 0;
        this._replaceSkillFrameHold = GameConfig.FPS_GAME;
        return;
    }// end function

    private endReplaceSkill(): void {
        GameCtrl.I.resume();
        // this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        this._replaceSkillFrameHold = 0;
        return;
    }// end function

    private renderReplaceSkill(): void {
        this._replaceSkillFrame = (this._replaceSkillFrame + 1);
        if (this._replaceSkillFrame == 1) {
            this.doEffectById("replaceSp2", this._replaceSkillPos.x, this._replaceSkillPos.y);
        }
        if (this._replaceSkillFrame > this._replaceSkillFrameHold) {
            this.endReplaceSkill();
        }
        return;
    }// end function

    public energyExplode(param1: BaseGameSprite): void {
        GameCtrl.I.pause();
        this._gameStage.addChildAt(this._blackBack, 0);
        // GameScene.instance.addChildAt(this._blackBack, 0);
        this._gameStage.getMap().setVisible(false);
        this.doEffectById("explodeSp", param1.x, param1.y);
        this._explodeEffectPos = new egret.Point(param1.x, param1.y);
        this._explodeSkillFrame = 0.7 * GameConfig.FPS_GAME;
        return;
    }// end function

    private endEnergyExplode(): void {
        this.doEffectById("explodeSp2", this._explodeEffectPos.x, this._explodeEffectPos.y);
        GameCtrl.I.resume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        this._explodeSkillFrame = 0;
        return;
    }// end function

    private renderEnergyExplode(): void {
        this._explodeSkillFrame = (this._explodeSkillFrame - 1);
        if (this._explodeSkillFrame <= 0) {
            this.endEnergyExplode();
        }
        return;
    }// end function

    public ghostStep(param1: BaseGameSprite): void {
        //this.justRender(param1, param1);
        GameCtrl.I.pause();
        GameScene.instance.addChildAt(this._blackBack, 0);
        this._blackBack.fadIn();
        this._gameStage.getMap().setVisible(false);
        SoundCtrl.I.playEffectSound("snd_ghost_jump")   //NOT found resource "snd_ghost_jump"
        return;
    }// end function

    public endGhostStep(): void {
        //this.justRender(null, null);
        GameCtrl.I.resume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        return;
    }// end function

    public static get I(): EffectCtrl {
        if (!EffectCtrl._i) {
            EffectCtrl._i = new EffectCtrl;
        }
        return EffectCtrl._i;
    }// end function

}

