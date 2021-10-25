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
var assist_yoruichi = (function (_super) {
    __extends(assist_yoruichi, _super);
    function assist_yoruichi(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_yoruichi.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_yoruichi.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 80, hitType: 5, hitx: 5, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
        return;
    }; // end function
    assist_yoruichi.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 12, this.frame13, 41, this.frame42, 46, this.frame47, 57, this.frame58]);
    };
    assist_yoruichi.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_yoruichi.prototype.frame13 = function () {
        this._assisterCtrler.effect.bisha();
        return;
    }; // end function
    assist_yoruichi.prototype.frame42 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_yoruichi.prototype.frame47 = function () {
        this._assisterCtrler.effect.shine();
        this._assisterCtrler.effect.shine(1069248);
        return;
    }; // end function
    assist_yoruichi.prototype.frame58 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_yoruichi;
}(Assister));
__reflect(assist_yoruichi.prototype, "assist_yoruichi");
//# sourceMappingURL=assist_yoruichi.js.map