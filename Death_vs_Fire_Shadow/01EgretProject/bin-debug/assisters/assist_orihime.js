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
var assist_orihime = (function (_super) {
    __extends(assist_orihime, _super);
    function assist_orihime(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this.ADDMainTimeline();
        return _this;
    } // end function
    assist_orihime.prototype.setAssistCtrler = function (param1) {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }; // end function
    assist_orihime.prototype.defineActions = function () {
        this._assisterCtrler.defineAction("atm1", { power: 0, hitType: 0, hitx: 0, hity: 0, hurtTime: 0, hurtType: 0, isBreakDef: false });
        return;
    }; // end function
    assist_orihime.prototype.ADDMainTimeline = function () {
        this._mainMc.addFrameScript(this, [
            0, this.frame1, 15, this.frame16, 30, this.frame31, 34, this.frame35, 40, this.frame41, 45, this.frame46, 50, this.frame51, 55, this.frame56, 60, this.frame61, 83, this.frame84
        ]);
    };
    assist_orihime.prototype.frame1 = function () {
        //stop();
        return;
    }; // end function
    assist_orihime.prototype.frame16 = function () {
        this._assisterCtrler.effect.bisha(false);
        return;
    }; // end function
    assist_orihime.prototype.frame31 = function () {
        this._assisterCtrler.effect.endBisha();
        return;
    }; // end function
    assist_orihime.prototype.frame35 = function () {
        this._assisterCtrler.effect.shine(13443195);
        return;
    }; // end function
    assist_orihime.prototype.frame41 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_orihime.prototype.frame46 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_orihime.prototype.frame51 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_orihime.prototype.frame56 = function () {
        try {
            if (this._assisterCtrler.getOwner() instanceof FighterMain) {
                this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
            }
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_orihime.prototype.frame61 = function () {
        try {
            this._assisterCtrler.getOwner().hp = this._assisterCtrler.getOwner().hp + 20;
        }
        catch (e) {
        }
        return;
    }; // end function
    assist_orihime.prototype.frame84 = function () {
        this._assisterCtrler.endAct();
        return;
    }; // end function
    return assist_orihime;
}(Assister));
__reflect(assist_orihime.prototype, "assist_orihime");
//# sourceMappingURL=assist_orihime.js.map