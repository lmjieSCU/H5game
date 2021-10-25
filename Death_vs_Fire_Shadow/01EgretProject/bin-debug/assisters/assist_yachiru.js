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
var assist_yachiru = (function (_super) {
    __extends(assist_yachiru, _super);
    function assist_yachiru(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_yachiru.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_yachiru.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 50, hitType: 3, hitx: 5, hity: -2, hurtTime: 700, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_yachiru.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 51, this.frame52, 57, this.frame58, 62, this.frame63, 73, this.frame74]);
    };
    assist_yachiru.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_yachiru.prototype.frame20 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_yachiru.prototype.frame36 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_yachiru.prototype.frame37 = function () {
        this._assisterCtrler.move(20, 0);
        this._assisterCtrler.setHitTarget("atmck", "攻击2");
        this._assisterCtrler.effect.shadow(200, -50, 100);
        return;
    }; // end function
    assist_yachiru.prototype.frame52 = function () {
        this._assisterCtrler.damping(2, 0);
        return;
    }; // end function
    assist_yachiru.prototype.frame58 = function () {
        this._assisterCtrler.finish(true);
        return;
    }; // end function
    assist_yachiru.prototype.frame63 = function () {
        this._assisterCtrler.effect.shine(9461864);
        this._assisterCtrler.setDirectToTarget();
        this._assisterCtrler.move(-10, 0);
        this._assisterCtrler.damping(2, 0);
        return;
    }; // end function
    assist_yachiru.prototype.frame74 = function () {
        this._assisterCtrler.endAct();
        this._assisterCtrler.effect.endShadow();
        return;
    }; // end function
    return assist_yachiru;
}(Assister));
__reflect(assist_yachiru.prototype, "assist_yachiru");
//# sourceMappingURL=assist_yachiru.js.map