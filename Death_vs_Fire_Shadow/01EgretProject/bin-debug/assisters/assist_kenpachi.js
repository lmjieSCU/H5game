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
var assist_kenpachi = (function (_super) {
    __extends(assist_kenpachi, _super);
    function assist_kenpachi(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_kenpachi.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_kenpachi.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 100, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
        return;
    }; // end function
    assist_kenpachi.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 54, this.frame55, 64, this.frame65, 80, this.frame81]);
    };
    assist_kenpachi.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_kenpachi.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_kenpachi.prototype.frame55 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_kenpachi.prototype.frame65 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_kenpachi.prototype.frame81 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_kenpachi;
}(Assister));
__reflect(assist_kenpachi.prototype, "assist_kenpachi");
//# sourceMappingURL=assist_kenpachi.js.map