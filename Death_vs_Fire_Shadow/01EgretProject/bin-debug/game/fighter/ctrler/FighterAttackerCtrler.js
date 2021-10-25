var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterAttackerCtrler = (function () {
    function FighterAttackerCtrler(param1) {
        this._attacker = param1;
        return;
    } // end 
    Object.defineProperty(FighterAttackerCtrler.prototype, "_attacker_mc", {
        get: function () {
            return this._attacker.mc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterAttackerCtrler.prototype, "owner_mc_ctrler", {
        get: function () {
            var _loc_1 = this._attacker.getOwner();
            if (_loc_1) {
                return _loc_1.getCtrler().getMcCtrl();
            }
            return null;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterAttackerCtrler.prototype, "owner_fighter_ctrler", {
        get: function () {
            var _loc_1 = this._attacker.getOwner();
            if (_loc_1) {
                return _loc_1.getCtrler();
            }
            return null;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    FighterAttackerCtrler.prototype.destory = function () {
        this._attacker = null;
        this.effect = null;
        this.ownerMc = null;
        return;
    }; // end 
    FighterAttackerCtrler.prototype.endAct = function () {
        this._attacker.isAttacking = false;
        return;
    }; // end 
    FighterAttackerCtrler.prototype.render = function () {
        this.renderCheckTargetHit();
        if (this._attacker.isInAir) {
            this._touchFloor = false;
            return;
        }
        if (!this._touchFloor) {
            this._touchFloor = true;
            if (this._touchFloorFrame) {
                this._attacker.gotoAndPlay(this._touchFloorFrame);
                this._touchFloorFrame = null;
            }
        }
        return;
    }; // end 
    FighterAttackerCtrler.prototype.renderCheckTargetHit = function () {
        var _loc_4 = 0;
        var _loc_1 = null;
        if (!this.hitTargetChecker) {
            return;
        }
        var HitCheckRect = this._attacker.getHitCheckRect(this.hitTargetChecker);
        if (!HitCheckRect) {
            return;
        }
        var Targets = this._attacker.getTargets();
        if (!Targets) {
            return;
        }
        while (_loc_4 < Targets.length) {
            _loc_1 = Targets[_loc_4].getBodyArea();
            if (_loc_1 && HitCheckRect.intersects(_loc_1)) {
                this.gotoAndPlay(this.hitTargetAction);
            }
            _loc_4++;
        }
        return;
    }; // end 
    FighterAttackerCtrler.prototype.stopFollowTarget = function () {
        this._attacker.stopFollowTarget();
        return;
    }; // end 
    FighterAttackerCtrler.prototype.moveToTarget = function (param1, param2) {
        if (param1 === void 0) { param1 = NaN; }
        if (param2 === void 0) { param2 = NaN; }
        this._attacker.moveToTarget(param1, param2);
        return;
    }; // end 
    FighterAttackerCtrler.prototype.move = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._attacker.setVelocity(param1 * this._attacker.direct, param2);
        return;
    }; // end 
    FighterAttackerCtrler.prototype.damping = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._attacker.setDamping(param1, param2);
        return;
    }; // end 
    FighterAttackerCtrler.prototype.stop = function () {
        this._attacker.stop();
        return;
    }; // end 
    FighterAttackerCtrler.prototype.gotoAndPlay = function (param1) {
        this._attacker.gotoAndPlay(param1);
        return;
    }; // end 
    FighterAttackerCtrler.prototype.gotoAndStop = function (param1) {
        this._attacker.gotoAndStop(param1);
        return;
    }; // end 
    FighterAttackerCtrler.prototype.setTouchFloor = function (param1) {
        this._touchFloorFrame = param1;
        return;
    }; // end 
    FighterAttackerCtrler.prototype.justHit = function (param1) {
        var _loc_2 = this._attacker.getOwner();
        if (_loc_2 instanceof FighterMain) {
            return this._attacker.getOwner().getCtrler().justHit(param1);
        }
        if (_loc_2 instanceof Assister) {
            return this._attacker.getOwner().getCtrler().justHit(param1);
        }
        return false;
    }; // end 
    FighterAttackerCtrler.prototype.setHitTarget = function (param1, param2) {
        this.hitTargetAction = param2;
        this.hitTargetChecker = param1;
        return;
    }; // end 
    FighterAttackerCtrler.prototype.setCrossMap = function (param1) {
        var _loc_2 = param1;
        this._attacker.isAllowCrossBottom = param1;
        this._attacker.isAllowCrossX = _loc_2;
        return;
    }; // end 
    FighterAttackerCtrler.prototype.removeSelf = function () {
        this._attacker.removeSelf();
        return;
    }; // end 
    return FighterAttackerCtrler;
}());
__reflect(FighterAttackerCtrler.prototype, "FighterAttackerCtrler");
//# sourceMappingURL=FighterAttackerCtrler.js.map