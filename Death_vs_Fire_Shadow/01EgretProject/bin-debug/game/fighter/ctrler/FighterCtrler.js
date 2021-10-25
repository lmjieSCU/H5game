var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterCtrler = (function () {
    function FighterCtrler() {
        this._rectCache = {};
        return;
    } // end function
    FighterCtrler.prototype.destory = function () {
        if (this._effectCtrl) {
            this._effectCtrl.destory();
            this._effectCtrl = null;
        }
        if (this._fighterMcCtrl) {
            this._fighterMcCtrl.destory();
            this._fighterMcCtrl = null;
        }
        if (this._voiceCtrl) {
            this._voiceCtrl.destory();
            this._voiceCtrl = null;
        }
        if (this._rectCache) {
            this._rectCache = null;
        }
        if (this.hitModel) {
            this.hitModel.destory();
            this.hitModel = null;
        }
        this._fighter = null;
        return;
    }; // end function
    FighterCtrler.prototype.getEffectCtrl = function () {
        return this._effectCtrl;
    }; // end function
    FighterCtrler.prototype.getVoiceCtrl = function () {
        return this._voiceCtrl;
    }; // end function
    Object.defineProperty(FighterCtrler.prototype, "hp", {
        get: function () {
            return this._fighter.hp;
        } // end function
        ,
        set: function (param1) {
            var _loc_2 = param1;
            this._fighter.customHpMax = param1;
            _loc_2 = _loc_2;
            this._fighter.hpMax = _loc_2;
            this._fighter.hp = _loc_2;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "energy", {
        get: function () {
            return this._fighter.energyMax;
        } // end function
        ,
        set: function (param1) {
            var _loc_2 = param1;
            this._fighter.energyMax = param1;
            this._fighter.energy = _loc_2;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "speed", {
        get: function () {
            return this._fighter.speed;
        } // end function
        ,
        set: function (param1) {
            this._fighter.speed = param1;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "jumpPower", {
        get: function () {
            return this._fighter.jumpPower;
        } // end function
        ,
        set: function (param1) {
            this._fighter.jumpPower = param1;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "heavy", {
        get: function () {
            return this._fighter.heavy;
        } // end function
        ,
        set: function (param1) {
            this._fighter.heavy = param1;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "defenseType", {
        get: function () {
            return this._fighter.defenseType;
        } // end function
        ,
        set: function (param1) {
            this._fighter.defenseType = param1;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    FighterCtrler.prototype.addHp = function (param1) {
        this._fighter.addHp(param1);
        return;
    }; // end function
    FighterCtrler.prototype.addHpPercent = function (param1) {
        this._fighter.addHp(this._fighter.hpMax * param1);
        return;
    }; // end function
    FighterCtrler.prototype.loseHp = function (param1) {
        this._fighter.loseHp(param1);
        return;
    }; // end function
    FighterCtrler.prototype.loseHpPercent = function (param1) {
        this._fighter.loseHp(param1 * this._fighter.hpMax);
        return;
    }; // end function
    Object.defineProperty(FighterCtrler.prototype, "self", {
        get: function () {
            return this._fighter.getDisplay();
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterCtrler.prototype, "target", {
        get: function () {
            var _loc_1 = this._fighter.getCurrentTarget();
            if (!_loc_1) {
                return null;
            }
            return _loc_1.getDisplay();
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    FighterCtrler.prototype.getTargetSP = function () {
        var _loc_1 = this._fighter.getCurrentTarget();
        if (!_loc_1) {
            return null;
        }
        return _loc_1;
    }; // end function
    FighterCtrler.prototype.getTargetState = function () {
        var _loc_1 = this._fighter.getCurrentTarget();
        if (!_loc_1) {
            return 0;
        }
        return _loc_1.actionState;
    }; // end function
    FighterCtrler.prototype.setTargetVelocity = function (param1, param2) {
        var _loc_3 = this._fighter.getCurrentTarget();
        if (_loc_3 && _loc_3 instanceof BaseGameSprite) {
            _loc_3.setVelocity(param1, param2);
        }
        return;
    }; // end function
    FighterCtrler.prototype.setTargetDamping = function (param1, param2) {
        var _loc_3 = this._fighter.getCurrentTarget();
        if (_loc_3 && _loc_3 instanceof BaseGameSprite) {
            _loc_3.setDamping(param1, param2);
        }
        return;
    }; // end function
    FighterCtrler.prototype.targetInRange = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        var _loc_4 = NaN;
        var _loc_8 = this.target;
        if (!this.target) {
            return false;
        }
        var _loc_3 = this.self;
        if (this._fighter.direct > 0) {
            _loc_4 = _loc_8.x - _loc_3.x;
        }
        else {
            _loc_4 = _loc_3.x - _loc_8.x;
        }
        var _loc_6 = _loc_8.y - _loc_3.y;
        var _loc_7 = true;
        var _loc_5 = true;
        if (param1) {
            _loc_7 = _loc_4 >= param1[0] && _loc_4 <= param1[1];
        }
        if (param2) {
            _loc_5 = _loc_6 >= param2[0] && _loc_6 <= param2[1];
        }
        return _loc_7 && _loc_5;
    }; // end function
    FighterCtrler.prototype.justHit = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        var _loc_3 = null;
        var _loc_5 = null;
        var _loc_4 = this._fighter.getCurrentTarget();
        if (_loc_4 && _loc_4 instanceof FighterMain) {
            _loc_3 = _loc_4.hurtHit;
            if (_loc_3) {
                return _loc_3.id == param1;
            }
            if (param2) {
                _loc_5 = _loc_4.defenseHit;
                if (_loc_5) {
                    return _loc_5.id == param1;
                }
            }
        }
        return false;
    }; // end function
    FighterCtrler.prototype.getMcCtrl = function () {
        return this._fighterMcCtrl;
    }; // end function
    FighterCtrler.prototype.initFighter = function (param1) {
        this._fighter = param1;
        this.hitModel = new FighterHitModel(this._fighter);
        this._voiceCtrl = new FighterVoiceCtrler();
        if (param1.mc.setEffectCtrler) {
            this._effectCtrl = new FighterEffectCtrl(param1);
            param1.mc.setEffectCtrler(this._effectCtrl);
        }
        else {
            throw new Error("初始化效果接口失败，SWF未定义setEffectCtrler()");
        }
        if (param1.mc.setFighterMcCtrler) {
            this._fighterMcCtrl = new FighterMcCtrler(param1);
            this._fighterMcCtrl.effectCtrler = this._effectCtrl;
            param1.mc.setFighterMcCtrler(this._fighterMcCtrl);
        }
        else {
            throw new Error("初始化效果接口失败，SWF未定义setFighterMcCtrler()");
        }
        return;
    }; // end function
    FighterCtrler.prototype.renderAnimate = function () {
        if (this._fighterMcCtrl) {
            this._fighterMcCtrl.renderAnimate();
        }
        return;
    }; // end function
    FighterCtrler.prototype.render = function () {
        if (this._fighterMcCtrl) {
            this._fighterMcCtrl.render();
        }
        return;
    }; // end function
    FighterCtrler.prototype.setActionCtrl = function (param1) {
        if (this._fighterMcCtrl) {
            this._fighterMcCtrl.setActionCtrler(param1);
        }
        else {
            // this.//console.log("设置ctrler失败！");
        }
        return;
    }; // end function
    FighterCtrler.prototype.defineAction = function (param1, param2) {
        this.hitModel.addHitVO(param1, param2);
        return;
    }; // end function
    FighterCtrler.prototype.defineBishaFace = function (param1, param2) {
        this._effectCtrl.setBishaFace(param1, param2);
        return;
    }; // end function
    FighterCtrler.prototype.defineHurtSound = function (args) {
        this._voiceCtrl.setVoice(0, args);
        return;
    }; // end function
    FighterCtrler.prototype.defineHurtFlySound = function (args) {
        this._voiceCtrl.setVoice(1, args);
        return;
    }; // end function
    FighterCtrler.prototype.defineDieSound = function (args) {
        this._voiceCtrl.setVoice(2, args);
        return;
    }; // end function
    FighterCtrler.prototype.initMc = function (param1) {
        var _loc_2 = null;
        if (param1) {
            _loc_2 = new FighterMC();
            _loc_2.initlize(param1, this._fighter, this._fighterMcCtrl);
            if (this._doingWankai) {
                this._fighter.actionState = 50;
                _loc_2.goFrame("开场");
                this._doingWankai = false;
            }
            else {
                this._fighterMcCtrl.idle();
            }
        }
        else {
            throw new Error("FighterCtrler.initMc Error :: mc is null!");
        }
        return;
    }; // end function
    FighterCtrler.prototype.getCurrentHits = function () {
        var _loc_8 = 0;
        var _loc_7 = null;
        var _loc_6 = null;
        var _loc_4 = null;
        var _loc_2 = null;
        var _loc_3 = null;
        var _loc_5 = this._fighter.getMC().getCurrentHitArea(); //array 类型
        if (!_loc_5 || _loc_5.length < 1) {
            return null;
        }
        var _loc_1 = [];
        while (_loc_8 < _loc_5.length) {
            _loc_7 = _loc_5[_loc_8];
            _loc_3 = _loc_7.name;
            _loc_6 = _loc_7.hitVO;
            if (_loc_6) {
                _loc_2 = _loc_7.area; //打击判定范围
                _loc_6.currentArea = this.getCurrentRect(_loc_2, "hit" + _loc_8);
                _loc_1.push(_loc_6);
            }
            _loc_8++;
        }
        return _loc_1;
    }; // end function
    FighterCtrler.prototype.getBodyArea = function () {
        var _loc_1 = this._fighter.getMC().getCurrentBodyArea(); //当前帧动作下的rectangle
        if (_loc_1 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_1, "body");
    }; // end function
    FighterCtrler.prototype.getHitCheckRect = function (param1) {
        var _loc_2 = this._fighter.getMC().getCheckHitRect(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hit_check");
    }; // end function
    FighterCtrler.prototype.getCurrentRect = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = null;
        if (param2 == null) {
            _loc_3 = new egret.Rectangle();
        }
        else if (this._rectCache[param2]) {
            _loc_3 = this._rectCache[param2];
        }
        else {
            _loc_3 = new egret.Rectangle();
            this._rectCache[param2] = _loc_3;
        }
        _loc_3.x = param1.x * this._fighter.direct + this._fighter.x;
        if (this._fighter.direct < 0) {
            _loc_3.x = _loc_3.x - param1.width;
        }
        _loc_3.y = param1.y + this._fighter.y;
        _loc_3.width = param1.width;
        _loc_3.height = param1.height;
        return _loc_3;
    }; // end function
    FighterCtrler.prototype.doWanKai = function () {
        this._doingWankai = true;
        this._fighter.mc.nextFrame();
        return;
    }; // end function
    FighterCtrler.prototype.setDirectToTarget = function () {
        var _loc_1 = this._fighter.getCurrentTarget();
        if (!_loc_1) {
            return;
        }
        this._fighter.direct = this._fighter.x < _loc_1.x ? (1) : (-1);
        return;
    }; // end function
    FighterCtrler.prototype.moveOnce = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._fighter.x = this._fighter.x + param1 * this._fighter.direct;
        this._fighter.y = this._fighter.y + param2;
        return;
    }; // end function
    FighterCtrler.prototype.moveToTarget = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = true; }
        var _loc_6 = NaN;
        var _loc_4 = NaN;
        var _loc_5 = this._fighter.getCurrentTarget();
        if (!this._fighter.getCurrentTarget()) {
            return;
        }
        if (param1 != null) {
            _loc_6 = param1;
            _loc_4 = _loc_5.x + _loc_6 * this._fighter.direct;
            if (_loc_6 > 0) {
                try {
                    if (_loc_5.x < _loc_6) {
                        _loc_4 = _loc_5.x + _loc_6;
                    }
                    else if (_loc_5.x > GameCtrl.I.gameState.getMap().right - _loc_6) {
                        _loc_4 = _loc_5.x - _loc_6;
                    }
                }
                catch (e) {
                }
            }
            this._fighter.x = _loc_4;
        }
        if (param2 != null) {
            this._fighter.y = _loc_5.y + param2;
        }
        if (param3) {
            this._fighter.direct = this._fighter.x < _loc_5.x ? (1) : (-1);
        }
        return;
    }; // end function
    FighterCtrler.prototype.setCross = function (param1) {
        this._fighter.isCross = param1;
        return;
    }; // end function
    FighterCtrler.prototype.getHitRange = function (param1) {
        var _loc_2 = this._fighter.getMC().getHitRange(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hitRange_" + param1);
    }; // end function
    return FighterCtrler;
}());
__reflect(FighterCtrler.prototype, "FighterCtrler");
//# sourceMappingURL=FighterCtrler.js.map