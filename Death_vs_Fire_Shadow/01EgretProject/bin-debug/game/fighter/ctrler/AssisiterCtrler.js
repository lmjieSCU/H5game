var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AssisiterCtrler = (function () {
    function AssisiterCtrler(param1) {
        this._fighter = param1;
        return;
    } // end function
    Object.defineProperty(AssisiterCtrler.prototype, "effect", {
        get: function () {
            return this._effectCtrl;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    AssisiterCtrler.prototype.destory = function () {
        if (this._effectCtrl) {
            this._effectCtrl.destory();
            this._effectCtrl = null;
        }
        if (this.hitModel) {
            this.hitModel.destory();
            this.hitModel = null;
        }
        this._assister = null;
        return;
    }; // end function
    AssisiterCtrler.prototype.getTarget = function () {
        var _loc_1 = this._assister.getOwner();
        if (_loc_1) {
            return _loc_1.getCurrentTarget();
        }
        return null;
    }; // end function
    AssisiterCtrler.prototype.getOwner = function () {
        return this._assister.getOwner();
    }; // end function
    AssisiterCtrler.prototype.setApplyG = function (param1) {
        this._assister.isApplyG = param1;
        return;
    }; // end function
    AssisiterCtrler.prototype.finish = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (param1) {
            EffectCtrl.I.assisterEffect(this._assister);
        }
        this._assister.isAttacking = false;
        this.removeSelf();
        this._assister.gotoAndStop(1);
        return;
    }; // end function
    AssisiterCtrler.prototype.defineAction = function (param1, param2) {
        this.hitModel.addHitVO(param1, param2);
        return;
    }; // end function
    Object.defineProperty(AssisiterCtrler.prototype, "owner_mc_ctrler", {
        get: function () {
            var _loc_1 = this._assister.getOwner();
            if (_loc_1) {
                return _loc_1.getCtrler().getMcCtrl();
            }
            return null;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssisiterCtrler.prototype, "owner_fighter_ctrler", {
        get: function () {
            var _loc_1 = this._assister.getOwner();
            if (_loc_1) {
                return _loc_1.getCtrler();
            }
            return null;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    AssisiterCtrler.prototype.initAssister = function (param1) {
        this.hitModel = new FighterHitModel(param1);
        this._assister = param1;
        this._effectCtrl = new FighterEffectCtrl(param1);
        return;
    }; // end function
    AssisiterCtrler.prototype.endAct = function () {
        this._assister.isAttacking = false;
        return;
    }; // end function
    AssisiterCtrler.prototype.render = function () {
        this.renderCheckTargetHit();
        if (this._assister.isInAir) {
            this._touchFloor = false;
            return;
        }
        if (!this._touchFloor) {
            this._touchFloor = true;
            if (this._touchFloorFrame) {
                this._assister.gotoAndPlay(this._touchFloorFrame);
                this._touchFloorFrame = null;
            }
        }
        return;
    }; // end function
    AssisiterCtrler.prototype.moveToTarget = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = true; }
        var _loc_5 = this._assister.getOwner();
        if (!this._assister.getOwner()) {
            return;
        }
        var _loc_4 = _loc_5.getCurrentTarget();
        if (!_loc_5.getCurrentTarget()) {
            return;
        }
        if (param1 != null) {
            this._assister.x = _loc_4.x + param1 * this._assister.direct;
        }
        if (param2 != null) {
            this._assister.y = _loc_4.y + param2;
        }
        if (param3) {
            this._assister.direct = this._assister.x < _loc_4.x ? (1) : (-1);
        }
        return;
    }; // end function
    AssisiterCtrler.prototype.setDirectToTarget = function () {
        var _loc_1 = this.getTarget();
        if (!_loc_1) {
            return;
        }
        this._assister.direct = this._assister.x < _loc_1.x ? (1) : (-1);
        return;
    }; // end function
    AssisiterCtrler.prototype.move = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._assister.setVelocity(param1 * this._assister.direct, param2);
        return;
    }; // end function
    AssisiterCtrler.prototype.damping = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._assister.setDamping(param1, param2);
        return;
    }; // end function
    AssisiterCtrler.prototype.stop = function () {
        this._assister.stop();
        return;
    }; // end function
    AssisiterCtrler.prototype.gotoAndPlay = function (param1) {
        this._assister.gotoAndPlay(param1);
        return;
    }; // end function
    AssisiterCtrler.prototype.gotoAndStop = function (param1) {
        this._assister.gotoAndStop(param1);
        return;
    }; // end function
    AssisiterCtrler.prototype.setTouchFloor = function (param1) {
        this._touchFloorFrame = param1;
        return;
    }; // end function
    AssisiterCtrler.prototype.justHit = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = false; }
        if (this.isJustHit(param1, param3)) {
            if (param2 != null) {
                this.gotoAndPlay(param2);
            }
            return true;
        }
        return false;
    }; // end function
    AssisiterCtrler.prototype.isJustHit = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        var _loc_3 = null;
        var _loc_6 = null;
        var _loc_5 = this._assister.getOwner();
        var _loc_4 = (_loc_5).getCurrentTarget();
        if ((_loc_5).getCurrentTarget() && _loc_4 instanceof FighterMain) {
            _loc_3 = _loc_4.hurtHit;
            if (_loc_3) {
                return _loc_3.id == param1;
            }
            if (param2) {
                _loc_6 = _loc_4.defenseHit;
                if (_loc_6) {
                    return _loc_6.id == param1;
                }
            }
        }
        return false;
    }; // end function
    AssisiterCtrler.prototype.setHitTarget = function (param1, param2) {
        this.hitTargetAction = param2;
        this.hitTargetChecker = param1;
        return;
    }; // end function
    AssisiterCtrler.prototype.removeSelf = function () {
        this._assister.removeSelf();
        return;
    }; // end function
    AssisiterCtrler.prototype.fire = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var mcName = param1;
        var params = param2;
        var mc = this._assister.mc.getChildMovie(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params.mc = mc;
            params.hitVO = this.hitModel.getHitVO(mcName);
            FighterEventDispatcher.dispatchEvent(this._assister, "FIRE_BULLET", params);
        }
        else {
            this._assister.setAnimateFrameOut(function () {
                this.fire(mcName, params);
                return;
            } // end function
            , 1, this);
        }
        return;
    }; // end function
    AssisiterCtrler.prototype.addAttacker = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var mcName = param1;
        var params = param2;
        var mc = this._assister.mc.getChildMovie(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params.mc = mc;
            params.hitVO = this.hitModel.getHitVOByDisplayName(mcName);
            FighterEventDispatcher.dispatchEvent(this._assister, "ADD_ATTACKER", params);
            return mc;
        }
        else {
            this._assister.setAnimateFrameOut(function () {
                this.addAttacker(mcName, params);
                return;
            } // end function
            , 1, this);
            return null;
        }
    }; // end function
    AssisiterCtrler.prototype.getAttacker = function (param1, teamid, param2) {
        if (param2 === void 0) { param2 = -1; }
        var _loc_2 = GameCtrl.I.getAttacker(param1, teamid, param2);
        if (_loc_2) {
            return _loc_2.getCtrler();
        }
        return null;
    }; // end function
    AssisiterCtrler.prototype.renderCheckTargetHit = function () {
        var _loc_4 = 0;
        var _loc_1 = null;
        if (!this.hitTargetChecker) {
            return;
        }
        var _loc_2 = this._assister.getHitCheckRect(this.hitTargetChecker);
        if (!_loc_2) {
            return;
        }
        var _loc_3 = this._assister.getTargets();
        if (!_loc_3) {
            return;
        }
        while (_loc_4 < _loc_3.length) {
            _loc_1 = _loc_3[_loc_4].getBodyArea();
            if (_loc_1 && _loc_2.intersects(_loc_1)) {
                this.gotoAndPlay(this.hitTargetAction);
            }
            _loc_4++;
        }
        return;
    }; // end function
    return AssisiterCtrler;
}());
__reflect(AssisiterCtrler.prototype, "AssisiterCtrler");
//# sourceMappingURL=AssisiterCtrler.js.map