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
var assist_kon = (function (_super) {
    __extends(assist_kon, _super);
    function assist_kon(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_kon.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_kon.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 10, hitType: 2, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_kon.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 29, this.frame30, 66, this.frame67, 68, this.frame69]);
    };
    assist_kon.prototype.frame1 = function () {
        return;
    }; // end function
    assist_kon.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_kon.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_kon.prototype.frame67 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    assist_kon.prototype.frame69 = function () {
        this.target = this._assisterCtrler.getTarget();
        if (this.target instanceof FighterMain) {
            try {
                this.target.qi = this.target.qi - 50;
            }
            catch (e) {
            }
        }
        return;
    }; // end function
    return assist_kon;
}(Assister));
__reflect(assist_kon.prototype, "assist_kon");
//# sourceMappingURL=assist_kon.js.map