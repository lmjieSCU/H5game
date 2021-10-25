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
var assist_nemu = (function (_super) {
    __extends(assist_nemu, _super);
    function assist_nemu(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_nemu.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_nemu.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 40, hitType: 3, hitx: 10, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
        return;
    }; // end function
    assist_nemu.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 30, this.frame31, 31, this.frame32, 50, this.frame51, 56, this.frame57, 64, this.frame65, 71, this.frame72, 74, this.frame75, 81, this.frame82, 92, this.frame93]);
    };
    assist_nemu.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_nemu.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_nemu.prototype.frame31 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_nemu.prototype.frame32 = function () {
        this._assisterCtrler.move(20, 0);
        this._assisterCtrler.setHitTarget("ckm", "攻击2");
        this._assisterCtrler.effect.shadow(100, -50, 100);
        return;
    }; // end function
    assist_nemu.prototype.frame51 = function () {
        this._assisterCtrler.effect.shine(9461864);
        this._assisterCtrler.move(5, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_nemu.prototype.frame57 = function () {
        this._assisterCtrler.move(5, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_nemu.prototype.frame65 = function () {
        this._assisterCtrler.justHit("atm1", "attack2", false);
        return;
    }; // end function
    assist_nemu.prototype.frame72 = function () {
        this._assisterCtrler.finish(true);
        return;
    }; // end function
    assist_nemu.prototype.frame75 = function () {
        this._assisterCtrler.move(13, 0);
        this._assisterCtrler.damping(0.5, 0);
        return;
    }; // end function
    assist_nemu.prototype.frame82 = function () {
        this._assisterCtrler.setDirectToTarget();
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    assist_nemu.prototype.frame93 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_nemu;
}(Assister));
__reflect(assist_nemu.prototype, "assist_nemu");
//# sourceMappingURL=assist_nemu.js.map