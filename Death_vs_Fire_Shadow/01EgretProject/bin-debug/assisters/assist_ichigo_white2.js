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
var assist_ichigo_white2 = (function (_super) {
    __extends(assist_ichigo_white2, _super);
    function assist_ichigo_white2(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_ichigo_white2.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_ichigo_white2.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 30, hitType: 1, hitx: 10, hity: -10, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 10, hitType: 1, hitx: 5, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 50, hitType: 5, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: true });
        return;
    }; // end function
    assist_ichigo_white2.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 28, this.frame29, 31, this.frame32, 43, this.frame44, 54, this.frame55, 61, this.frame62, 62, this.frame63, 69, this.frame70, 89, this.frame90, 92, this.frame93]);
    };
    assist_ichigo_white2.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame29 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame32 = function () {
        this._assisterCtrler.moveToTarget(50, 0, true);
        this._assisterCtrler.effect.slowDown(0.5);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame44 = function () {
        this._assisterCtrler.justHit("atm1", "act1", false);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame55 = function () {
        this._assisterCtrler.finish(true);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame62 = function () {
        this._assisterCtrler.moveToTarget(10, 0, true);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame63 = function () {
        this._assisterCtrler.effect.shine();
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame70 = function () {
        this._assisterCtrler.moveToTarget(-30, -50, false);
        this._assisterCtrler.move(1, -1);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame90 = function () {
        this._assisterCtrler.move(0, 0);
        return;
    }; // end function
    assist_ichigo_white2.prototype.frame93 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_ichigo_white2;
}(Assister));
__reflect(assist_ichigo_white2.prototype, "assist_ichigo_white2");
//# sourceMappingURL=assist_ichigo_white2.js.map