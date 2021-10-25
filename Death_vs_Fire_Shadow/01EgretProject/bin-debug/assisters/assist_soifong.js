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
var assist_soifong = (function (_super) {
    __extends(assist_soifong, _super);
    function assist_soifong(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_soifong.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_soifong.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 150, hitType: 7, hitx: 15, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: true });
        return;
    }; // end function
    assist_soifong.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 44, this.frame45, 48, this.frame49, 75, this.frame76]);
    };
    assist_soifong.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_soifong.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_soifong.prototype.frame45 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_soifong.prototype.frame49 = function () {
        this._assisterCtrler.effect.shine();
        this._assisterCtrler.fire("atm1", { x: { start: 0, add: 2, max: 50 }, hits: 1, hold: 5, hp: 300 });
        return;
    }; // end function
    assist_soifong.prototype.frame76 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_soifong;
}(Assister));
__reflect(assist_soifong.prototype, "assist_soifong");
//# sourceMappingURL=assist_soifong.js.map