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
var assist_stake = (function (_super) {
    __extends(assist_stake, _super);
    function assist_stake(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_stake.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_stake.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 2, hitx: 4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 800, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_stake.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 20, this.frame21, 26, this.frame27, 33, this.frame34, 42, this.frame43, 73, this.frame74]);
    };
    assist_stake.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_stake.prototype.frame10 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_stake.prototype.frame21 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_stake.prototype.frame27 = function () {
        this._assisterCtrler.moveToTarget(-50, 0, false);
        return;
    }; // end function
    assist_stake.prototype.frame34 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_stake.prototype.frame43 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_stake.prototype.frame74 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_stake;
}(Assister));
__reflect(assist_stake.prototype, "assist_stake");
//# sourceMappingURL=assist_stake.js.map