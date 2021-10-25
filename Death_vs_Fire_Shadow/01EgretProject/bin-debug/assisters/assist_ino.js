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
var assist_ino = (function (_super) {
    __extends(assist_ino, _super);
    function assist_ino(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_ino.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_ino.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 20, hitType: 5, hitx: 0, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_ino.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 19, this.frame20, 35, this.frame36, 40, this.frame41, 44, this.frame45, 55, this.frame56]);
    };
    assist_ino.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_ino.prototype.frame20 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_ino.prototype.frame36 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_ino.prototype.frame41 = function () {
        this._assisterCtrler.effect.shine();
        return;
    }; // end function
    assist_ino.prototype.frame45 = function () {
        this._assisterCtrler.effect.shine(9461816);
        return;
    }; // end function
    assist_ino.prototype.frame56 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_ino;
}(Assister));
__reflect(assist_ino.prototype, "assist_ino");
//# sourceMappingURL=assist_ino.js.map