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
var assist_minato = (function (_super) {
    __extends(assist_minato, _super);
    function assist_minato(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_minato.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_minato.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 5, hitx: 0, hity: 20, hurtTime: 0, hurtType: 1, isBreakDef: false });
        this._assisterCtrler.defineAction("atm3", { power: 20, hitType: 3, hitx: 5, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm5", { power: 5, hitType: 4, hitx: 0, hity: 20, hurtTime: 300, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 20, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm4", { power: 20, hitType: 6, hitx: -4, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
        ;
        return;
    }; // end function
    assist_minato.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 2, this.frame3, 24, this.frame25, 30, this.frame31, 34, this.frame35, 39, this.frame40, 49, this.frame50, 59, this.frame60, 69, this.frame70, 84, this.frame85, 90, this.frame91, 91, this.frame92, 98, this.frame99, 133, this.frame134, 138, this.frame139, 163, this.frame164, 169, this.frame170]);
    };
    assist_minato.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_minato.prototype.frame3 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_minato.prototype.frame25 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_minato.prototype.frame31 = function () {
        this._assisterCtrler.moveToTarget(-100, 0, false);
        this._assisterCtrler.move(15, 0);
        this._assisterCtrler.damping(0.5, 0);
        this._assisterCtrler.effect.shadow(200, 200, 0);
        return;
    }; // end function
    assist_minato.prototype.frame35 = function () {
        this._assisterCtrler.effect.shine();
        this._assisterCtrler.effect.shine(1069248);
        return;
    }; // end function
    assist_minato.prototype.frame40 = function () {
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    assist_minato.prototype.frame50 = function () {
        this._assisterCtrler.justHit("atm2", "attack2", false);
        return;
    }; // end function
    assist_minato.prototype.frame60 = function () {
        this._assisterCtrler.gotoAndPlay("atm");
        return;
    }; // end function
    assist_minato.prototype.frame70 = function () {
        this._assisterCtrler.moveToTarget(10, 0, false);
        return;
    }; // end function
    assist_minato.prototype.frame85 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    assist_minato.prototype.frame91 = function () {
        this._assisterCtrler.finish(false);
        return;
    }; // end function
    assist_minato.prototype.frame92 = function () {
        this._assisterCtrler.effect.shine();
        this._assisterCtrler.effect.shine(1069248);
        return;
    }; // end function
    assist_minato.prototype.frame99 = function () {
        this._assisterCtrler.moveToTarget(40, 0, true);
        return;
    }; // end function
    assist_minato.prototype.frame134 = function () {
        this._assisterCtrler.moveToTarget(-20, -200, false);
        this._assisterCtrler.move(0, 20);
        this._assisterCtrler.effect.shadow(200, 200, 0);
        return;
    }; // end function
    assist_minato.prototype.frame139 = function () {
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    assist_minato.prototype.frame164 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    assist_minato.prototype.frame170 = function () {
        this._assisterCtrler.finish(false);
        return;
    }; // end function
    return assist_minato;
}(Assister));
__reflect(assist_minato.prototype, "assist_minato");
//# sourceMappingURL=assist_minato.js.map