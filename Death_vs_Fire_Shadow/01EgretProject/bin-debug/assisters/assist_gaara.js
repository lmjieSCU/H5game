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
var assist_gaara = (function (_super) {
    __extends(assist_gaara, _super);
    function assist_gaara(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_gaara.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_gaara.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 50, hitType: 5, hitx: 0, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_gaara.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 37, this.frame38, 43, this.frame44]);
    };
    assist_gaara.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_gaara.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_gaara.prototype.frame38 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_gaara.prototype.frame44 = function () {
        this._assisterCtrler.effect.shine(9461816);
        this._assisterCtrler.addAttacker("atmmc", { x: { moveToTarget: true, offset: 0 }, applyG: false });
        return;
    }; // end function
    return assist_gaara;
}(Assister));
__reflect(assist_gaara.prototype, "assist_gaara");
//# sourceMappingURL=assist_gaara.js.map