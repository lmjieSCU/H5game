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
var assist_temari = (function (_super) {
    __extends(assist_temari, _super);
    function assist_temari(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_temari.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_temari.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 10, hitType: 4, hitx: 0.5, hity: -1, hurtTime: 300, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_temari.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 37, this.frame38, 38, this.frame39, 68, this.frame69]);
    };
    assist_temari.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_temari.prototype.frame20 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_temari.prototype.frame36 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_temari.prototype.frame37 = function () {
        this._assisterCtrler.move(5, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_temari.prototype.frame38 = function () {
        this._assisterCtrler.fire("atm1", { x: { start: 20, hit: 1 }, hits: -1 });
        return;
    }; // end function
    assist_temari.prototype.frame39 = function () {
        this._assisterCtrler.effect.shine(9461864);
        return;
    }; // end function
    assist_temari.prototype.frame69 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_temari;
}(Assister));
__reflect(assist_temari.prototype, "assist_temari");
//# sourceMappingURL=assist_temari.js.map