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
var assist_tsuchikage = (function (_super) {
    __extends(assist_tsuchikage, _super);
    function assist_tsuchikage(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_tsuchikage.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_tsuchikage.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 50, hitType: 1, hitx: 10, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 100, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_tsuchikage.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 29, this.frame30, 35, this.frame36, 61, this.frame62]);
    };
    assist_tsuchikage.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_tsuchikage.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_tsuchikage.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_tsuchikage.prototype.frame36 = function () {
        this._assisterCtrler.effect.shine(9461816);
        return;
    }; // end function
    assist_tsuchikage.prototype.frame62 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_tsuchikage;
}(Assister));
__reflect(assist_tsuchikage.prototype, "assist_tsuchikage");
//# sourceMappingURL=assist_tsuchikage.js.map