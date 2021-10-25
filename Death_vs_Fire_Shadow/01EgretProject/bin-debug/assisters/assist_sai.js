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
var assist_sai = (function (_super) {
    __extends(assist_sai, _super);
    function assist_sai(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_sai.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_sai.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 10, hitType: 4, hitx: 0, hity: -5, hurtTime: 800, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_sai.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 29, this.frame30, 31, this.frame32, 32, this.frame33, 53, this.frame54]);
    };
    assist_sai.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_sai.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_sai.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_sai.prototype.frame32 = function () {
        this._assisterCtrler.addAttacker("atmmc", { x: { moveToTarget: true, offset: 0 }, applyG: false });
        return;
    }; // end function
    assist_sai.prototype.frame33 = function () {
        this._assisterCtrler.effect.shine(0);
        return;
    }; // end function
    assist_sai.prototype.frame54 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_sai;
}(Assister));
__reflect(assist_sai.prototype, "assist_sai");
//# sourceMappingURL=assist_sai.js.map