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
var assist_uryuu = (function (_super) {
    __extends(assist_uryuu, _super);
    function assist_uryuu(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_uryuu.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_uryuu.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 80, hitType: 5, hitx: 3, hity: 10, hurtTime: 500, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_uryuu.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 16, this.frame17, 19, this.frame20, 38, this.frame39, 40, this.frame41, 46, this.frame47]);
    };
    assist_uryuu.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_uryuu.prototype.frame17 = function () {
        this._assisterCtrler.moveToTarget(0, -100);
        this._assisterCtrler.setApplyG(false);
        return;
    }; // end function
    assist_uryuu.prototype.frame20 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_uryuu.prototype.frame39 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_uryuu.prototype.frame41 = function () {
        this._assisterCtrler.effect.shine();
        this._assisterCtrler.effect.shine(7329791);
        this._assisterCtrler.move(0, -5);
        this._assisterCtrler.damping(0, 0.5);
        return;
    }; // end function
    assist_uryuu.prototype.frame47 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_uryuu;
}(Assister));
__reflect(assist_uryuu.prototype, "assist_uryuu");
//# sourceMappingURL=assist_uryuu.js.map