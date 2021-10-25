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
var assist_madara = (function (_super) {
    __extends(assist_madara, _super);
    function assist_madara(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_madara.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_madara.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 3, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
        this._assisterCtrler.defineAction("atm2", { power: 10, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 100, hitType: 7, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_madara.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 30, this.frame31, 35, this.frame36, 36, this.frame37, 65, this.frame66]);
    };
    assist_madara.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_madara.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_madara.prototype.frame31 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_madara.prototype.frame36 = function () {
        var shuilong_mc = this._assisterCtrler.addAttacker("smc", { x: { moveToTarget: true, offset: -20 }, applyG: false });
        if (!shuilong_mc) {
            return;
        }
        var shuilong = new assist_madara_Timeline_2(this._assisterCtrler.getAttacker("smc", this._assisterCtrler._fighter.team.id, shuilong_mc.hashCode));
        return;
    }; // end function
    assist_madara.prototype.frame37 = function () {
        this._assisterCtrler.effect.shine(9461864);
        return;
    }; // end function
    assist_madara.prototype.frame66 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_madara;
}(Assister));
__reflect(assist_madara.prototype, "assist_madara");
//# sourceMappingURL=assist_madara.js.map