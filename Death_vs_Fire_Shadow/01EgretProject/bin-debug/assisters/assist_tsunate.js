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
var assist_tsunate = (function (_super) {
    __extends(assist_tsunate, _super);
    function assist_tsunate(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_tsunate.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_tsunate.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 50, hitType: 5, hitx: 15, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
        return;
    }; // end function
    assist_tsunate.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [0, this.frame1, 16, this.frame17, 18, this.frame19, 20, this.frame21, 38, this.frame39, 44, this.frame45, 59, this.frame60]);
    };
    assist_tsunate.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_tsunate.prototype.frame17 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_tsunate.prototype.frame19 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_tsunate.prototype.frame21 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_tsunate.prototype.frame39 = function () {
        this._assisterCtrler.moveToTarget(-50, null, false);
        return;
    }; // end function
    assist_tsunate.prototype.frame45 = function () {
        this._assisterCtrler.move(10, 0);
        this._assisterCtrler.damping(1, 0);
        return;
    }; // end function
    assist_tsunate.prototype.frame60 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_tsunate;
}(Assister));
__reflect(assist_tsunate.prototype, "assist_tsunate");
//# sourceMappingURL=assist_tsunate.js.map