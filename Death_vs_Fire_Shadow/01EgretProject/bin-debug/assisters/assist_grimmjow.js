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
var assist_grimmjow = (function (_super) {
    __extends(assist_grimmjow, _super);
    function assist_grimmjow(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_grimmjow.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_grimmjow.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 5, hitType: 1, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 50, hitType: 6, hitx: 5, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_grimmjow.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 40, this.frame41, 44, this.frame45, 107, this.frame108]);
    };
    assist_grimmjow.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_grimmjow.prototype.frame20 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_grimmjow.prototype.frame36 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_grimmjow.prototype.frame37 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(0.5, 0);
        return;
    }; // end function
    assist_grimmjow.prototype.frame41 = function () {
        this._assisterCtrler.moveToTarget(-50, 0, false);
        return;
    }; // end function
    assist_grimmjow.prototype.frame45 = function () {
        this._assisterCtrler.effect.shine(9461864);
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_grimmjow.prototype.frame108 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_grimmjow;
}(Assister));
__reflect(assist_grimmjow.prototype, "assist_grimmjow");
//# sourceMappingURL=assist_grimmjow.js.map