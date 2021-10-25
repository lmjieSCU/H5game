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
var assist_kimimaro = (function (_super) {
    __extends(assist_kimimaro, _super);
    function assist_kimimaro(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_kimimaro.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_kimimaro.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 15, hitType: 1, hitx: 0, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_kimimaro.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 29, this.frame30, 33, this.frame34, 49, this.frame50, 64, this.frame65, 69, this.frame70, 100, this.frame101]);
    };
    assist_kimimaro.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_kimimaro.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_kimimaro.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_kimimaro.prototype.frame34 = function () {
        this._assisterCtrler.move(20, 0);
        this._assisterCtrler.setHitTarget("atm0", "动作2");
        this._assisterCtrler.effect.dash();
        return;
    }; // end function
    assist_kimimaro.prototype.frame50 = function () {
        this._assisterCtrler.endAct();
        this._assisterCtrler.damping(2, 0);
        return;
    }; // end function
    assist_kimimaro.prototype.frame65 = function () {
        this._assisterCtrler.finish();
        return;
    }; // end function
    assist_kimimaro.prototype.frame70 = function () {
        this._assisterCtrler.damping(4, 0);
        return;
    }; // end function
    assist_kimimaro.prototype.frame101 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_kimimaro;
}(Assister));
__reflect(assist_kimimaro.prototype, "assist_kimimaro");
//# sourceMappingURL=assist_kimimaro.js.map