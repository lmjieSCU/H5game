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
var assist_shishio = (function (_super) {
    __extends(assist_shishio, _super);
    function assist_shishio(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_shishio.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_shishio.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 10, hitType: 11, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
        this._assisterCtrler.defineAction("atm3", { power: 50, hitType: 1, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 50, hitType: 7, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_shishio.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 34, this.frame35, 35, this.frame36, 54, this.frame55, 56, this.frame57, 59, this.frame60, 65, this.frame66, 80, this.frame81, 95, this.frame96]);
    };
    assist_shishio.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_shishio.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_shishio.prototype.frame35 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_shishio.prototype.frame36 = function () {
        this._assisterCtrler.effect.dash();
        this._assisterCtrler.move(15, 0);
        this._assisterCtrler.setHitTarget("ckmc", "攻击2");
        this._assisterCtrler.effect.shadow(0, 0, 200);
        return;
    }; // end function
    assist_shishio.prototype.frame55 = function () {
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    assist_shishio.prototype.frame57 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    assist_shishio.prototype.frame60 = function () {
        this._assisterCtrler.finish();
        return;
    }; // end function
    assist_shishio.prototype.frame66 = function () {
        this._assisterCtrler.effect.shine(9461864);
        this._assisterCtrler.move(0, 0);
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    assist_shishio.prototype.frame81 = function () {
        this._assisterCtrler.effect.shine(16281600);
        return;
    }; // end function
    assist_shishio.prototype.frame96 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_shishio;
}(Assister)); // end function
__reflect(assist_shishio.prototype, "assist_shishio");
//# sourceMappingURL=assist_shishio.js.map