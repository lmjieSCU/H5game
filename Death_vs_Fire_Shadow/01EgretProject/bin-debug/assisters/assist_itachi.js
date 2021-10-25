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
var assist_itachi = (function (_super) {
    __extends(assist_itachi, _super);
    function assist_itachi(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_itachi.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_itachi.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 0, hitType: 4, hitx: 0, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 20, hitType: 1, hitx: 0, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 40, hitType: 1, hitx: -3, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_itachi.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 23, this.frame24, 41, this.frame42, 46, this.frame47, 58, this.frame59, 60, this.frame61, 75, this.frame76, 91, this.frame92, 124, this.frame125, 127, this.frame128, 143, this.frame144, 159, this.frame160, 175, this.frame176, 180, this.frame181]);
    };
    assist_itachi.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_itachi.prototype.frame24 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_itachi.prototype.frame42 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_itachi.prototype.frame47 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_itachi.prototype.frame59 = function () {
        this._assisterCtrler.justHit("atm1", "攻击2", false);
        return;
    }; // end function
    assist_itachi.prototype.frame61 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    assist_itachi.prototype.frame76 = function () {
        this._assisterCtrler.finish();
        return;
    }; // end function
    assist_itachi.prototype.frame92 = function () {
        this._assisterCtrler.moveToTarget(0, null, false);
        return;
    }; // end function
    assist_itachi.prototype.frame125 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_itachi.prototype.frame128 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_itachi.prototype.frame144 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_itachi.prototype.frame160 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_itachi.prototype.frame176 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_itachi.prototype.frame181 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_itachi;
}(Assister));
__reflect(assist_itachi.prototype, "assist_itachi");
//# sourceMappingURL=assist_itachi.js.map