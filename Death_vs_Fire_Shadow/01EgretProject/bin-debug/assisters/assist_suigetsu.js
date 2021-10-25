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
var assist_suigetsu = (function (_super) {
    __extends(assist_suigetsu, _super);
    function assist_suigetsu(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_suigetsu.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_suigetsu.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 50, hitType: 6, hitx: 5, hity: -5, hurtTime: 600, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_suigetsu.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 12, this.frame13, 27, this.frame28, 34, this.frame35, 43, this.frame44, 52, this.frame53, 63, this.frame64]);
    };
    assist_suigetsu.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_suigetsu.prototype.frame13 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_suigetsu.prototype.frame28 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_suigetsu.prototype.frame35 = function () {
        this._assisterCtrler.moveToTarget(80, null, true);
        this._assisterCtrler.effect.slowDown(0.5);
        return;
    }; // end function
    assist_suigetsu.prototype.frame44 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_suigetsu.prototype.frame53 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_suigetsu.prototype.frame64 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_suigetsu;
}(Assister));
__reflect(assist_suigetsu.prototype, "assist_suigetsu");
//# sourceMappingURL=assist_suigetsu.js.map