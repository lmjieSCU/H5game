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
var assist_jiraiya = (function (_super) {
    __extends(assist_jiraiya, _super);
    function assist_jiraiya(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_jiraiya.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_jiraiya.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 50, hitType: 4, hitx: 3, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
        this._assisterCtrler.defineAction("atm2", { power: 50, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_jiraiya.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 29, this.frame30, 30, this.frame31, 35, this.frame36, 47, this.frame48, 73, this.frame74]);
    };
    assist_jiraiya.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_jiraiya.prototype.frame10 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_jiraiya.prototype.frame30 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_jiraiya.prototype.frame31 = function () {
        this._assisterCtrler.effect.dash();
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_jiraiya.prototype.frame36 = function () {
        this._assisterCtrler.moveToTarget(-100, 0, false);
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(0.5, 0);
        return;
    }; // end function
    assist_jiraiya.prototype.frame48 = function () {
        this._assisterCtrler.effect.shine();
        return;
    }; // end function
    assist_jiraiya.prototype.frame74 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_jiraiya;
}(Assister));
__reflect(assist_jiraiya.prototype, "assist_jiraiya");
//# sourceMappingURL=assist_jiraiya.js.map