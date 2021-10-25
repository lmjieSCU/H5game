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
var assist_tenten = (function (_super) {
    __extends(assist_tenten, _super);
    function assist_tenten(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_tenten.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_tenten.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 10, hitType: 1, hitx: 2, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 50, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_tenten.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 37, this.frame38, 39, this.frame40, 45, this.frame46, 51, this.frame52, 57, this.frame58, 63, this.frame64, 77, this.frame78, 113, this.frame114]);
    };
    assist_tenten.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_tenten.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_tenten.prototype.frame38 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_tenten.prototype.frame40 = function () {
        this._assisterCtrler.fire("atm1", { x: 20, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame46 = function () {
        this._assisterCtrler.fire("atm1", { x: 20, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame52 = function () {
        this._assisterCtrler.fire("atm1", { x: 20, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame58 = function () {
        this._assisterCtrler.fire("atm1", { x: 20, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame64 = function () {
        this._assisterCtrler.fire("atm1", { x: 20, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame78 = function () {
        this._assisterCtrler.fire("atm2", { x: 30, hits: 1 });
        return;
    }; // end function
    assist_tenten.prototype.frame114 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_tenten;
}(Assister));
__reflect(assist_tenten.prototype, "assist_tenten");
//# sourceMappingURL=assist_tenten.js.map