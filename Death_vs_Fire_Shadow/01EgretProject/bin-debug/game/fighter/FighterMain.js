var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
*定义人物共有属性,如qi,qimax,speed等
*从FighterMain出发可以到达FighterMc,fighterMCctrl，可视为其父节点
*
*/
var FighterMain = (function (_super) {
    __extends(FighterMain, _super);
    function FighterMain(param1) {
        var _this = _super.call(this, param1) || this;
        _this.qi = 0;
        _this.qiMax = 300;
        _this.energy = 100;
        _this.energyMax = 100;
        _this.energyOverLoad = false;
        _this.customHpMax = 0;
        _this.fzqi = 100;
        _this.fzqiMax = 100;
        _this.speed = 20;
        _this.jumpPower = 15;
        _this.airHitTimes = 1;
        _this.jumpTimes = 2;
        _this.actionState = 0;
        _this.defenseType = 0;
        _this._area = null;
        //设置fightVO
        var heroName = _this.mc._name;
        heroName = heroName.substring(5);
        _this.data = FighterModel.I.getFighter(heroName);
        return _this;
    } // end function
    FighterMain.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (!param1) {
            return;
        }
        if (this._fighterCtrl) {
            this._fighterCtrl.destory();
            this._fighterCtrl = null;
        }
        if (this._mainMc) {
            this._mainMc.gotoAndStop(1);
        }
        this.targetTeams = null;
        this._currentTarget = null;
        this._currentHurts = null;
        _super.prototype.destory.call(this, param1);
        return;
    }; // end function
    Object.defineProperty(FighterMain.prototype, "attackRate", {
        set: function (param1) {
            this.attackRate = param1;
            if (this._fighterCtrl && this._fighterCtrl.hitModel) {
                this._fighterCtrl.hitModel.setPowerRate(param1);
            }
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    FighterMain.prototype.currentHurtDamage = function () {
        if (!this._currentHurts) {
            return 0;
        }
        var _loc_1 = 0;
        for (var _i = 0, _a = this._currentHurts; _i < _a.length; _i++) {
            var _loc_2 = _a[_i];
            _loc_1 = _loc_1 + _loc_2.getDamage();
        }
        return _loc_1;
    }; // end function
    FighterMain.prototype.getLastHurtHitVO = function () {
        if (!this._currentHurts) {
            return null;
        }
        return this._currentHurts[(this._currentHurts.length - 1)];
    }; // end function
    FighterMain.prototype.hurtBreakHit = function () {
        for (var _i = 0, _a = this._currentHurts; _i < _a.length; _i++) {
            var _loc_1 = _a[_i];
            if (_loc_1.isBreakDef) {
                return true;
            }
        }
        return false;
    }; // end function
    FighterMain.prototype.clearHurtHits = function () {
        this._currentHurts = null;
        return;
    }; // end function
    FighterMain.prototype.getCtrler = function () {
        return this._fighterCtrl;
    }; // end function
    FighterMain.prototype.getCurrentTarget = function () {
        if (this._currentTarget) {
            if (this._currentTarget instanceof BaseGameSprite && this._currentTarget.isAlive) {
                return this._currentTarget;
            }
        } //不存在currentTarget
        var _loc_2 = this.getTargets();
        var _loc_1 = [];
        if (_loc_2 && _loc_2.length > 0) {
            for (var _i = 0, _loc_2_1 = _loc_2; _i < _loc_2_1.length; _i++) {
                var _loc_3 = _loc_2_1[_i];
                if (_loc_3.getBodyArea() == null) {
                    _loc_1.push({ fighter: _loc_3, order: 5 });
                    continue;
                }
                if (_loc_3 instanceof FighterMain && _loc_3.isAlive) {
                    _loc_1.push({ fighter: _loc_3, order: 0 });
                    continue;
                }
                if (_loc_3 instanceof BaseGameSprite && _loc_3.isAlive) {
                    _loc_1.push({ fighter: _loc_3, order: 1 });
                    continue;
                }
                _loc_1.push({ fighter: _loc_3, order: 2 });
            }
            // _loc_1.sortOn("order", 16);  //按照order从小到大排序
            _loc_1.sort(this.Fun_compare);
            this._currentTarget = _loc_1[0].fighter;
        }
        return this._currentTarget;
    }; // end function
    FighterMain.prototype.Fun_compare = function (a, b) {
        if (a.order > b.order) {
            return 1;
        }
        return -1;
    };
    FighterMain.prototype.getTargets = function () {
        var _loc_2 = 0;
        if (!this.targetTeams || this.targetTeams.length < 1) {
            return null;
        }
        var _loc_1 = new Array();
        while (_loc_2 < this.targetTeams.length) {
            _loc_1 = _loc_1.concat(this.targetTeams[_loc_2].getAliveChildren());
            _loc_2++;
        }
        return _loc_1;
    }; // end function
    FighterMain.prototype.getMC = function () {
        if (!this._fighterCtrl) {
            return null;
        }
        if (!this._fighterCtrl.getMcCtrl()) {
            return null;
        }
        return this._fighterCtrl.getMcCtrl().getFighterMc();
    }; // end function
    FighterMain.prototype.setActionCtrl = function (param1) {
        if (this._fighterCtrl) {
            this._fighterCtrl.setActionCtrl(param1);
            param1.initlize();
        }
        return;
    }; // end function
    FighterMain.prototype.initlize = function () {
        this._fighterCtrl = new FighterCtrler();
        if (this._mainMc.setFighterCtrler) {
            this._mainMc.setFighterCtrler(this._fighterCtrl);
            this._fighterCtrl.initFighter(this);
        }
        else {
            throw new Error("初始化失败，SWF未定义setFighterCtrler()");
        }
        this._mainMc.gotoAndStop(this.data ? ((this.data.startFrame + 1)) : (2));
        return;
    }; // end function
    FighterMain.prototype.renderAnimate = function () {
        _super.prototype.renderAnimate.call(this);
        if (this._destoryed) {
            return;
        }
        this.renderEnergy();
        this.renderFzQi();
        if (this._fighterCtrl) {
            this._fighterCtrl.renderAnimate();
        }
        if (this._explodeHitFrame > 0) {
            this._explodeHitFrame = this._explodeHitFrame - 1;
            if (this._explodeHitFrame == 8) {
                this.idle();
                this.isAllowBeHit = false;
            }
            if (this._explodeHitFrame <= 0) {
                this._explodeHitVO = null;
                this.isAllowBeHit = true;
            }
        }
        if (this._replaceSkillFrame > 0) {
            this._replaceSkillFrame = this._replaceSkillFrame - 1;
            if (this._replaceSkillFrame <= 0) {
                this.isAllowBeHit = true;
            }
        }
        return;
    }; // end function
    FighterMain.prototype.render = function () {
        _super.prototype.render.call(this);
        if (this._destoryed) {
            return;
        }
        if (this._fighterCtrl) {
            this._fighterCtrl.render();
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
        if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
        if (this.qi < 0) {
            this.qi = 0;
        }
        if (this.qi > 300) {
            this.qi = 300;
        }
        if (this.fzqi < 0) {
            this.fzqi = 0;
        }
        if (this.fzqi > 100) {
            this.fzqi = 100;
        }
        return;
    }; // end function
    FighterMain.prototype.jump = function () {
        this._g = 0;
        this.setVelocity(0, -this.jumpPower);
        this.setDamping(0, 0.5);
        return;
    }; // end function
    FighterMain.prototype.getCurrentHits = function () {
        if (this._explodeHitVO && this._explodeHitFrame < 8) {
            return [this._explodeHitVO];
        }
        return this._fighterCtrl.getCurrentHits();
    }; // end function
    FighterMain.prototype.getBodyArea = function () {
        if (!this._fighterCtrl) {
            return null;
        }
        return this._fighterCtrl.getBodyArea();
    }; // end function
    FighterMain.prototype.hit = function (param1, param2) {
        _super.prototype.hit.call(this, param1, param2);
        this.lastHitVO = param1;
        var _loc_3 = 0;
        if (param2 instanceof FighterMain) {
            if (param1.isBisha()) {
                _loc_3 = param1.power * 0.02;
            }
            else {
                _loc_3 = param1.power * 0.17;
            }
            if (_loc_3 > 15) {
                _loc_3 = 15;
            }
            this.addQi(_loc_3);
        }
        GameLogic.hitTarget(param1, this, param2); //addscore 
        return;
    }; // end function
    FighterMain.prototype.beHit = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        if (!this.isAllowBeHit) {
            return;
        }
        _super.prototype.beHit.call(this, param1, param2);
        this._fighterCtrl.getMcCtrl().beHit(param1, param2);
        var _loc_3 = param1.power * 0.08;
        if (_loc_3 > 20) {
            _loc_3 = 20;
        }
        this.addQi(_loc_3);
        if (this.actionState == 21 || this.actionState == 22) {
            if (!this._currentHurts) {
                this._currentHurts = new Array();
            }
            this._currentHurts.push(param1);
        }
        return;
    }; // end function
    FighterMain.prototype.renderEnergy = function () {
        if (this._energyAddGap > 0) {
            this._energyAddGap = this._energyAddGap - 1;
            return;
        }
        if (this.energy < this.energyMax) {
            if (this.energyOverLoad) {
                this.energy = this.energy + 0.6;
                if (this.energy > 30) {
                    this.energyOverLoad = false;
                }
            }
            else if (this.actionState == 20) {
                this.energy = this.energy + 0.8;
            }
            else {
                this.energy = this.energy + 2;
            }
        }
        return;
    }; // end function
    FighterMain.prototype.renderFzQi = function () {
        if (this.fzqi < 100) {
            this.fzqi = this.fzqi + 0.2;
        }
        return;
    }; // end function
    FighterMain.prototype.hasEnergy = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        if (this.energy >= param1) {
            return true;
        }
        if (param2) {
            if (!this.energyOverLoad) {
                return true;
            }
        }
        return false;
    }; // end function
    FighterMain.prototype.useEnergy = function (param1) {
        this.energy = this.energy - param1;
        this._energyAddGap = 0.8 * 30;
        if (this.energy < 0) {
            this.energy = 0;
            this.energyOverLoad = true;
        }
        return;
    }; // end function
    FighterMain.prototype.useQi = function (param1) {
        if (this.qi < param1) {
            return false;
        }
        this.qi = this.qi - param1;
        return true;
    }; // end function
    FighterMain.prototype.addQi = function (param1) {
        this.qi = this.qi + param1;
        if (this.qi > 300) {
            this.qi = 300;
        }
        return;
    }; // end function
    FighterMain.prototype.addEnergy = function (param1) {
        this.energy = this.energy + param1;
        if (this.energy > this.energyMax) {
            this.energy = this.energyMax;
        }
        return;
    }; // end function
    FighterMain.prototype.sayIntro = function () {
        this._fighterCtrl.getMcCtrl().sayIntro();
        return;
    }; // end function
    FighterMain.prototype.win = function () {
        this._fighterCtrl.getMcCtrl().doWin();
        return;
    }; // end function
    FighterMain.prototype.idle = function () {
        this._fighterCtrl.getMcCtrl().idle();
        return;
    }; // end function
    FighterMain.prototype.lose = function () {
        this._fighterCtrl.getMcCtrl().doLose();
        return;
    }; // end function
    FighterMain.prototype.getHitRange = function (param1) {
        return this._fighterCtrl.getHitRange(param1);
    }; // end function
    FighterMain.prototype.energyExplode = function () {
        this._fighterCtrl.getEffectCtrl().energyExplode();
        this._explodeHitVO = new HitVO();
        var _loc_1 = new egret.Rectangle(-100, -200, 200, 210);
        this._explodeHitVO.currentArea = this._fighterCtrl.getCurrentRect(_loc_1);
        this._explodeHitVO.power = 50;
        this._explodeHitVO.hitx = 15 * this.direct;
        this._explodeHitVO.hitType = 5;
        this._explodeHitVO.hurtType = 1;
        this._explodeHitFrame = 10;
        this.isAllowBeHit = false;
        return;
    }; // end function
    FighterMain.prototype.replaceSkill = function () {
        this._fighterCtrl.getEffectCtrl().replaceSkill();
        this.move(250 * this.direct);
        this.idle();
        this.isAllowBeHit = false;
        _super.prototype.render.call(this);
        this.renderAnimate();
        this._fighterCtrl.setDirectToTarget();
        this._replaceSkillFrame = 30;
        return;
    }; // end function
    FighterMain.prototype.getArea = function () {
        if (!this._area) {
            this._area = this.getBodyArea();
        }
        return this._area;
    }; // end function
    FighterMain.prototype.hasWankai = function () {
        return this._fighterCtrl.getMcCtrl().getFighterMc().checkFrame("万解");
    }; // end function
    FighterMain.prototype.die = function () {
        this.hp = 0;
        this.isAlive = false;
        if (!FighterActionState.isHurting(this.actionState) && this.actionState != 30) {
            this._fighterCtrl.getMcCtrl().getFighterMc().playHurtDown();
        }
        return;
    }; // end function
    FighterMain.prototype.relive = function () {
        this.isAlive = true;
        this.idle();
        return;
    }; // end function
    return FighterMain;
}(BaseGameSprite));
__reflect(FighterMain.prototype, "FighterMain");
//# sourceMappingURL=FighterMain.js.map