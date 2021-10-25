var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectCtrl = (function () {
    function EffectCtrl() {
        this.shineMaxCount = 3;
        this.freezeEnabled = true;
        this._freezeFrame = 0;
        this._shadowEffects = [];
        this._shakePowX = 0;
        this._shakePowY = 0;
        this._shakeFrameX = 0;
        this._shakeFrameY = 0;
        this._shakeLoseX = 0;
        this._shakeLoseY = 0;
        this._renderAnimateGap = 0;
        this._renderAnimateFrame = 0;
        this._renderAnimate = true;
        this._zMovieArray = [];
        this._renderAnimateFrame = 0;
        this._renderAnimateGap = 0;
        this._freezeFrame = 0;
        this.initlize(GameCtrl.I.gameState, GameCtrl.I.gameState._playerLayer);
        return;
    } // end function
    EffectCtrl.prototype.destory = function () {
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
    }; // end function
    EffectCtrl.prototype.initlize = function (param1, param2) {
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
    }; // end function
    EffectCtrl.prototype.render = function () {
        var _loc_2 = 0;
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
            for (var _a = 0, _b = this._justRenderTargets; _a < _b.length; _a++) {
                var _loc_1 = _b[_a];
                _loc_1.render();
                GameLogic.fixGameSpritePosition(_loc_1);
            }
        }
        return;
    }; // end function
    EffectCtrl.prototype.renderShine = function () {
        var _loc_1 = null;
        var _loc_2 = 0;
        _loc_2 = 0;
        while (_loc_2 < this._shineEffects.length) {
            _loc_1 = this._shineEffects[_loc_2];
            _loc_1.render();
            _loc_2++;
        }
        return;
    }; // end function
    EffectCtrl.prototype.renderAnimate = function () {
        var _loc_4 = null;
        var _loc_2 = null;
        var _loc_3 = null;
        var _loc_1 = null;
        var _loc_5 = 0;
        _loc_5 = 0;
        while (_loc_5 < this._effects.length) {
            _loc_2 = this._effects[_loc_5];
            _loc_2.renderAnimate();
            _loc_5++;
        }
        for (var k in this._shadowEffects) {
            this._shadowEffects[k].render();
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
    }; // end function
    EffectCtrl.prototype.isRenderAnimate = function () {
        if (this._renderAnimateGap > 0) {
            this._renderAnimateFrame = (this._renderAnimateFrame + 1);
            if (this._renderAnimateFrame >= this._renderAnimateGap) {
                this._renderAnimateFrame = 0;
                return true;
            }
            return false;
        }
        return true;
    }; // end function
    EffectCtrl.prototype.renderFreeze = function () {
        if (this._freezeFrame > 0) {
            this._freezeFrame = (this._freezeFrame - 1);
            if (this._freezeFrame <= 0) {
                GameCtrl.I.resume();
            }
        }
        return;
    }; // end function
    EffectCtrl.prototype.renderShakeX = function () {
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
    }; // end function
    EffectCtrl.prototype.renderShakeY = function () {
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
    }; // end function
    EffectCtrl.prototype.doHitEffect = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        // if(!this._doeffect){return;}
        var _loc6_ = this._manager.getEffectVOByHitVO(param1);
        if (!_loc6_) {
            return;
        }
        var _loc_5 = param2.x;
        var _loc_7 = param2.y;
        var _loc_4 = 1;
        if (_loc6_.followDirect && param1.owner && param1.owner instanceof BaseGameSprite) {
            _loc_4 = param1.owner.getdirect();
        }
        this.doEffectVO(_loc6_, _loc_5, _loc_7, _loc_4, param3);
        return;
    }; // end function
    EffectCtrl.prototype.doDefenseEffect = function (param1, param2, param3, param4) {
        if (param4 === void 0) { param4 = null; }
        var _loc_8 = NaN;
        var _loc_11 = NaN;
        var _loc7_ = param1.hitType;
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
        var _loc_9 = EffectModel.I.getDefenseEffect(_loc7_);
        if (!EffectModel.I.getDefenseEffect(_loc7_)) {
            return;
        }
        var _loc_6 = param2.x + param2.width / 2;
        var _loc_10 = param2.y + param2.height / 2;
        if (_loc_9.shake) {
            if (_loc_9.shake.pow != undefined && _loc_9.shake.pow != 0) {
                _loc_8 = _loc_9.shake.pow;
                _loc_11 = Math.abs(param1.hitx) + Math.abs(param1.hity);
                _loc_9.shake.x = _loc_8 * (param1.hitx / _loc_11);
                _loc_9.shake.y = _loc_8 * (param1.hity / _loc_11);
            }
        }
        var _loc_5 = 1;
        if (_loc_9.followDirect && param1.owner && param1.owner instanceof BaseGameSprite) {
            _loc_5 = param1.owner.getdirect();
        }
        this.doEffectVO(_loc_9, _loc_6, _loc_10, _loc_5, param4);
        return;
    }; // end function
    EffectCtrl.prototype.doEffectById = function (param1, param2, param3, param4, param5) {
        if (param4 === void 0) { param4 = 1; }
        if (param5 === void 0) { param5 = null; }
        var _loc_6 = EffectModel.I.getEffect(param1);
        if (EffectModel.I.getEffect(param1)) {
            this.doEffectVO(_loc_6, param2, param3, param4, param5);
        }
        return;
    }; // end function
    EffectCtrl.prototype.assisterEffect = function (param1) {
        return; //return by lmj in 2020-7-22 because no param1.data:fighterVO
        var _loc_2 = param1.data.comicType == 1;
        if (_loc_2) {
            this.doEffectById("fz_naruto", param1.x, param1.y);
        }
        else {
            this.doEffectById("fz_bleach", param1.x, param1.y);
        }
        return;
    }; // end function
    EffectCtrl.prototype.doEffectVO = function (param1, param2, param3, param4, param5) {
        if (param4 === void 0) { param4 = 1; }
        if (param5 === void 0) { param5 = null; }
        var _loc_10 = NaN;
        var _loc_9 = NaN;
        var _loc_8 = NaN;
        var _loc_12 = 0;
        var _loc_13 = NaN;
        var _loc_11 = NaN;
        var _loc_7 = 0;
        var _loc_6 = this.addEffect(param1, param2, param3, param4);
        if (_loc_6) {
            //GameScene.instance._GameState.gameLayer.addChild(_loc_6._effectZmovie);
            this._effectLayer.addChild(_loc_6._effectZmovie);
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
            this.doSpecialEffect(param1.specialEffectId, param5);
        }
        return;
    }; // end function
    EffectCtrl.prototype.doSpecialEffect = function (param1, param2) {
        var _loc_4 = EffectModel.I.getEffect(param1);
        var _loc_3 = this.addEffect(_loc_4, param2.x, param2.y, param2.direct);
        if (_loc_3) {
            _loc_3.setTarget(param2);
            this._effectLayer.addChild(_loc_3._effectZmovie);
        }
        return;
    }; // end function
    EffectCtrl.prototype.addEffect = function (param1, param2, param3, param4) {
        if (param4 === void 0) { param4 = 1; }
        var _loc_5 = this._manager.getEffectView(param1);
        if (!_loc_5) {
            return null;
        }
        //设置获取的zmovie
        var _tempZmovie = _loc_5._effectZmovie;
        //坐标
        _tempZmovie.x = param2;
        _tempZmovie.y = param3;
        //存入到zmovie缓存
        this._zMovieArray.push(_tempZmovie);
        _loc_5.start(param2, param3, param4);
        _loc_5.addRemoveBack(this.removeEffect);
        this._effects.push(_loc_5);
        return _loc_5;
    }; // end function
    EffectCtrl.prototype.removeEffect = function (param1) {
        var _loc_2 = EffectCtrl.I._effects.indexOf(param1);
        var _tempZmovie = EffectCtrl.I._zMovieArray.indexOf(param1._effectZmovie);
        if (_loc_2 != -1) {
            EffectCtrl.I._effects.splice(_loc_2, 1);
            EffectCtrl.I._zMovieArray.splice(_tempZmovie, 1);
        }
        if (param1 instanceof SpecialEffectView) {
            param1["_target"].mc.filters = null;
        }
        return;
    }; // end function
    EffectCtrl.prototype.freeze = function (param1) {
        if (!this.freezeEnabled) {
            return;
        }
        if (param1 < 1) {
            return;
        }
        var _loc_2 = param1 / 1000 * GameConfig.FPS_GAME;
        if (_loc_2 < 1) {
            return;
        }
        this._freezeFrame = _loc_2;
        GameCtrl.I.pause();
        return;
    }; // end function
    EffectCtrl.prototype.justRender = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param1) {
            if (param1 instanceof BaseGameSprite) {
                this._justRenderAnimateTargets.push(param1); //new BaseGameSprite();
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
                this._justRenderTargets = param2; //
            }
            else {
                this._justRenderTargets = param2; //<Vector> param2.<BaseGameSprite>;
            }
        }
        else {
            this._justRenderTargets = null;
        }
        return;
    }; // end function
    EffectCtrl.prototype.shine = function (param1, param2) {
        if (param1 === void 0) { param1 = 16777215; }
        if (param2 === void 0) { param2 = 0.2; }
        if (GameConfig.FPS_SHINE_EFFECT == 0) {
            return;
        }
        if (this._shineEffects.length > this.shineMaxCount) {
            this._shineEffects = [];
        }
        var _loc_3 = this._manager.getShine();
        _loc_3.init(param1, param2);
        _loc_3.onRemove = this.removeShine;
        this._shineEffects.push(_loc_3);
        GameScene.instance.addChild(_loc_3);
        return;
    }; // end function
    EffectCtrl.prototype.removeShine = function (param1) {
        var _loc_2 = EffectCtrl.I._shineEffects.indexOf(param1);
        if (_loc_2 != -1) {
            EffectCtrl.I._shineEffects.splice(_loc_2, 1);
        }
        return;
    }; // end function
    EffectCtrl.prototype.shake = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 3; }
        if (param3 === void 0) { param3 = 0; }
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
        var _loc_5 = Math.ceil(this._shakePowX / (param3 / 1000 * 30) * 2);
        var _loc_4 = Math.ceil(this._shakePowY / (param3 / 1000 * 30) * 2);
        this._shakeLoseX = Math.max(_loc_5, this._shakeLoseX);
        this._shakeLoseY = Math.max(_loc_4, this._shakeLoseY);
        return;
    }; // end function
    EffectCtrl.prototype.startShadow = function (param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = 0; }
        if (!EffectCtrl.SHADOW_ENABLED) {
            return;
        }
        var _loc_5 = this._shadowEffects[param1];
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
    }; // end function
    EffectCtrl.prototype.endShadow = function (param1 /*egret.DisplayObject*/) {
        if (!EffectCtrl.SHADOW_ENABLED) {
            return;
        }
        if (!this._shadowEffects) {
            return;
        }
        var _loc_2 = this._shadowEffects[param1];
        if (_loc_2) {
            _loc_2.stopShadow = true;
            param1.filters = null;
        }
        return;
    }; // end function
    EffectCtrl.prototype.removeShadow = function (param1) {
        if (!this._shadowEffects) {
            return;
        }
        return;
    }; // end function
    EffectCtrl.prototype.bisha = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = null; }
        // this.justRender(param1);
        GameCtrl.I.pause(false);
        GameCtrl.I.setRenderHit(false);
        //GameCtrl.I.pause(false);
        //GameCtrl.I.setRenderHit(false);
        this._gameStage.addChildAt(this._blackBack, 0);
        // GameScene.instance.addChildAt(this._blackBack, 0);
        this._blackBack.fadIn();
        if (param3 && param1 instanceof FighterMain) {
            this.showFace(param1, param3);
        }
        if (param2) {
            GameCtrl.I.gameState.cameraFocusOne(param1.getDisplay());
            GameCtrl.I.gameState.cameraFocusOne(param1.getDisplay());
            this.doEffectById("bisha_super", param1.x, param1.y - 50);
        }
        else {
            this.doEffectById("bisha", param1.x, param1.y - 50);
        }
        this._gameStage.getMap().setVisible(false);
        return;
    }; // end function
    EffectCtrl.prototype.endBisha = function () {
        // this.justRender(null, null);
        GameCtrl.I.resume();
        GameCtrl.I.gameState.cameraResume();
        GameCtrl.I.setRenderHit(true);
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        //
        // for(let k in GameScene.instance.$children){
        //     if(GameScene.instance.getChildAt(Number(k)) instanceof ShineEffectView){
        //         GameScene.instance.removeChild(GameScene.instance.getChildAt(Number(k)))
        //     }
        // }
        return;
    }; // end function
    EffectCtrl.prototype.showFace = function (param1, param2) {
        var _loc_5 = null;
        var _loc_4 = 1;
        var _loc_3 = param1.getCurrentTarget();
        if (_loc_3) {
            _loc_5 = _loc_3.getDisplay();
            if (_loc_5) {
                _loc_4 = param1.getDisplay().x > _loc_5.x ? (2) : (1);
            }
        }
        this._blackBack.showBishaFace(_loc_4, param2);
        return;
    }; // end function
    EffectCtrl.prototype.wanKai = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
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
    }; // end function
    EffectCtrl.prototype.endWanKai = function () {
        // this.justRender(null, null);
        GameCtrl.I.resume();
        GameCtrl.I.gameState.cameraResume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        return;
    }; // end function
    EffectCtrl.prototype.jumpEffect = function (param1, param2) {
        this.doEffectById("jump", param1, param2);
        return;
    }; // end function
    EffectCtrl.prototype.jumpAirEffect = function (param1, param2) {
        this.doEffectById("jump_air", param1, param2);
        return;
    }; // end function
    EffectCtrl.prototype.touchFloorEffect = function (param1, param2) {
        this.doEffectById("touch_floor", param1, param2);
        return;
    }; // end function
    EffectCtrl.prototype.hitFloorEffect = function (param1, param2, param3) {
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
    }; // end function
    EffectCtrl.prototype.slowDown = function (param1, param2) {
        if (param2 === void 0) { param2 = 1000; }
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
    }; // end function
    Object.defineProperty(EffectCtrl.prototype, "slowDownFrame", {
        get: function () {
            return this._slowDownFrame;
        },
        enumerable: true,
        configurable: true
    });
    EffectCtrl.prototype.renderSlowDown = function () {
        if (this._slowDownFrame > 0) {
            this._slowDownFrame = this._slowDownFrame - 1;
            if (this._slowDownFrame <= 0) {
                this.slowDownResume();
            }
        }
        return;
    }; // end function
    EffectCtrl.prototype.slowDownResume = function () {
        GameCtrl.I.slowResume();
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        // console.log("slowDownResume: " + this._renderAnimateGap)
        this._slowDownFrame = 0;
        return;
    }; // end function
    EffectCtrl.prototype.BGEffect = function (param1, param2) {
        if (param2 === void 0) { param2 = -1; }
        var id = param1;
        var hold = param2;
        var data = EffectModel.I.getEffect(id);
        if (!data) {
            return;
        }
        var effect = this.addEffect(data, 0, 0, 1);
        if (hold != -1) {
            effect.holdFrame = hold * 30;
        }
        if (effect) {
            effect.addRemoveBack(function () {
                //this._gameStage.getMap().setVisible(true);
                return;
            } // end function
            );
            //this._gameStage.getMap().setVisible(false);
            this._gameStage.addChild(effect._effectZmovie);
        }
        return;
    }; // end function
    EffectCtrl.prototype.replaceSkill = function (param1) {
        GameCtrl.I.pause();
        // this._gameStage.addChildAt(this._blackBack, 0);
        // this._gameStage.getMap().setVisible(false);
        this.doEffectById("replaceSp", param1.x, param1.y);
        this._replaceSkillPos = new egret.Point(param1.x, param1.y);
        this._replaceSkillFrame = 0;
        this._replaceSkillFrameHold = GameConfig.FPS_GAME;
        return;
    }; // end function
    EffectCtrl.prototype.endReplaceSkill = function () {
        GameCtrl.I.resume();
        // this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        this._replaceSkillFrameHold = 0;
        return;
    }; // end function
    EffectCtrl.prototype.renderReplaceSkill = function () {
        this._replaceSkillFrame = (this._replaceSkillFrame + 1);
        if (this._replaceSkillFrame == 1) {
            this.doEffectById("replaceSp2", this._replaceSkillPos.x, this._replaceSkillPos.y);
        }
        if (this._replaceSkillFrame > this._replaceSkillFrameHold) {
            this.endReplaceSkill();
        }
        return;
    }; // end function
    EffectCtrl.prototype.energyExplode = function (param1) {
        GameCtrl.I.pause();
        this._gameStage.addChildAt(this._blackBack, 0);
        // GameScene.instance.addChildAt(this._blackBack, 0);
        this._gameStage.getMap().setVisible(false);
        this.doEffectById("explodeSp", param1.x, param1.y);
        this._explodeEffectPos = new egret.Point(param1.x, param1.y);
        this._explodeSkillFrame = 0.7 * GameConfig.FPS_GAME;
        return;
    }; // end function
    EffectCtrl.prototype.endEnergyExplode = function () {
        this.doEffectById("explodeSp2", this._explodeEffectPos.x, this._explodeEffectPos.y);
        GameCtrl.I.resume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        this._explodeSkillFrame = 0;
        return;
    }; // end function
    EffectCtrl.prototype.renderEnergyExplode = function () {
        this._explodeSkillFrame = (this._explodeSkillFrame - 1);
        if (this._explodeSkillFrame <= 0) {
            this.endEnergyExplode();
        }
        return;
    }; // end function
    EffectCtrl.prototype.ghostStep = function (param1) {
        //this.justRender(param1, param1);
        GameCtrl.I.pause();
        GameScene.instance.addChildAt(this._blackBack, 0);
        this._blackBack.fadIn();
        this._gameStage.getMap().setVisible(false);
        SoundCtrl.I.playEffectSound("snd_ghost_jump"); //NOT found resource "snd_ghost_jump"
        return;
    }; // end function
    EffectCtrl.prototype.endGhostStep = function () {
        //this.justRender(null, null);
        GameCtrl.I.resume();
        this._blackBack.fadOut();
        this._gameStage.getMap().setVisible(true);
        return;
    }; // end function
    Object.defineProperty(EffectCtrl, "I", {
        get: function () {
            if (!EffectCtrl._i) {
                EffectCtrl._i = new EffectCtrl;
            }
            return EffectCtrl._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    EffectCtrl.EFFECT_SMOOTHING = true;
    EffectCtrl.SHADOW_ENABLED = true;
    EffectCtrl.SHAKE_ENABLED = true;
    return EffectCtrl;
}());
__reflect(EffectCtrl.prototype, "EffectCtrl");
//# sourceMappingURL=EffectCtrl.js.map