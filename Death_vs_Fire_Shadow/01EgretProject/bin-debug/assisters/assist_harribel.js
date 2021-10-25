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
var assist_harribel = (function (_super) {
    __extends(assist_harribel, _super);
    function assist_harribel(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_harribel.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_harribel.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 110, hitType: 5, hitx: 10, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_harribel.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 29, this.frame30, 31, this.frame32, 32, this.frame33, 42, this.frame43, 54, this.frame55]);
    };
    assist_harribel.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_harribel.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_harribel.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_harribel.prototype.frame32 = function () {
        this._assisterCtrler.move(30, 0);
        return;
    }; // end function
    assist_harribel.prototype.frame33 = function () {
        this._assisterCtrler.effect.shine(9461864);
        return;
    }; // end function
    assist_harribel.prototype.frame43 = function () {
        this._assisterCtrler.damping(3, 0);
        return;
    }; // end function
    assist_harribel.prototype.frame55 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_harribel;
}(Assister));
__reflect(assist_harribel.prototype, "assist_harribel");
//# sourceMappingURL=assist_harribel.js.map