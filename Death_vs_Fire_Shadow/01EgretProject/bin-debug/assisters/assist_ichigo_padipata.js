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
var assist_ichigo_padipata = (function (_super) {
    __extends(assist_ichigo_padipata, _super);
    function assist_ichigo_padipata(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_ichigo_padipata.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_ichigo_padipata.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 150, hitType: 5, hitx: 5, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: true });
        return;
    }; // end function
    assist_ichigo_padipata.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 14, this.frame15, 28, this.frame29, 59, this.frame60]);
    };
    assist_ichigo_padipata.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_ichigo_padipata.prototype.frame15 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_ichigo_padipata.prototype.frame29 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_ichigo_padipata.prototype.frame60 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_ichigo_padipata;
}(Assister));
__reflect(assist_ichigo_padipata.prototype, "assist_ichigo_padipata");
//# sourceMappingURL=assist_ichigo_padipata.js.map