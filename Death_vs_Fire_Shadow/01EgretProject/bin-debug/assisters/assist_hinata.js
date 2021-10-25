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
var assist_hinata = (function (_super) {
    __extends(assist_hinata, _super);
    function assist_hinata(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_hinata.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_hinata.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 4, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
        return;
    }; // end function
    assist_hinata.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 12, this.frame13, 27, this.frame28, 29, this.frame30, 48, this.frame49]);
    };
    assist_hinata.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_hinata.prototype.frame13 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_hinata.prototype.frame28 = function () {
        this._assisterCtrler.effect.endBisha();
        this._assisterCtrler.move(5, 0);
        this._assisterCtrler.damping(0.5, 0);
        return;
    }; // end function
    assist_hinata.prototype.frame30 = function () {
        this._assisterCtrler.effect.shine();
        return;
    }; // end function
    assist_hinata.prototype.frame49 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_hinata;
}(Assister));
__reflect(assist_hinata.prototype, "assist_hinata");
//# sourceMappingURL=assist_hinata.js.map