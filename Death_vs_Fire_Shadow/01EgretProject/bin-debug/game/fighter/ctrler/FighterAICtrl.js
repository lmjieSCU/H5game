var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterAICtrl = (function () {
    function FighterAICtrl() {
        this._enabled = true;
        return;
    } // end function
    FighterAICtrl.prototype._inputType = function () {
        return "AI";
    };
    FighterAICtrl.prototype.initlize = function () {
        this._AIlogic = new FighterAILogic(this.AILevel, this.fighter);
        return;
    }; // end function
    FighterAICtrl.prototype.destory = function () {
        this.fighter = null;
        this._target = null;
        if (this._AIlogic) {
            this._AIlogic.destory();
            this._AIlogic = null;
        }
        return;
    }; // end function
    FighterAICtrl.prototype.setenabled = function (param1) {
        this._enabled = param1;
    };
    FighterAICtrl.prototype.enabled = function () {
        // return GameCtrl.I.actionEnable;      zhushi by lmj for AI actioning in 2020-7-17
        return this._enabled;
    }; // end function
    FighterAICtrl.prototype.render = function () {
        return;
    }; // end function
    FighterAICtrl.prototype.renderAnimate = function () {
        this._AIlogic.render();
        return;
    }; // end function
    FighterAICtrl.prototype.moveLEFT = function () {
        return this._AIlogic.moveLeft;
    }; // end function
    FighterAICtrl.prototype.moveRIGHT = function () {
        return this._AIlogic.moveRight;
    }; // end function
    FighterAICtrl.prototype.defense = function () {
        return this._AIlogic.defense;
    }; // end function
    FighterAICtrl.prototype.attack = function () {
        return this._AIlogic.attack;
    }; // end function
    FighterAICtrl.prototype.jump = function () {
        return this._AIlogic.jump;
    }; // end function
    FighterAICtrl.prototype.jumpQuick = function () {
        return false;
    }; // end function
    FighterAICtrl.prototype.jumpDown = function () {
        return this._AIlogic.jumpDown;
    }; // end function
    FighterAICtrl.prototype.dash = function () {
        return this._AIlogic.dash;
    }; // end function
    FighterAICtrl.prototype.dashJump = function () {
        return this._AIlogic.dashJump;
    }; // end function
    FighterAICtrl.prototype.skill1 = function () {
        return this._AIlogic.skill1;
    }; // end function
    FighterAICtrl.prototype.skill2 = function () {
        return this._AIlogic.skill2;
    }; // end function
    FighterAICtrl.prototype.zhao1 = function () {
        return this._AIlogic.zhao1;
    }; // end function
    FighterAICtrl.prototype.zhao2 = function () {
        return this._AIlogic.zhao2;
    }; // end function
    FighterAICtrl.prototype.zhao3 = function () {
        return this._AIlogic.zhao3;
    }; // end function
    FighterAICtrl.prototype.catch1 = function () {
        return this._AIlogic.catch1;
    }; // end function
    FighterAICtrl.prototype.catch2 = function () {
        return this._AIlogic.catch2;
    }; // end function
    FighterAICtrl.prototype.bisha = function () {
        return this._AIlogic.bisha;
    }; // end function
    FighterAICtrl.prototype.bishaUP = function () {
        return this._AIlogic.bishaUP;
    }; // end function
    FighterAICtrl.prototype.bishaSUPER = function () {
        return this._AIlogic.bishaSUPER;
    }; // end function
    FighterAICtrl.prototype.assist = function () {
        return this._AIlogic.assist;
    }; // end function
    FighterAICtrl.prototype.specailSkill = function () {
        // console.log(this._AIlogic.specialSkill)
        return this._AIlogic.specialSkill;
    }; // end function
    FighterAICtrl.prototype.attackAIR = function () {
        return this._AIlogic.attackAIR;
    }; // end function
    FighterAICtrl.prototype.skillAIR = function () {
        return this._AIlogic.skillAIR;
    }; // end function
    FighterAICtrl.prototype.bishaAIR = function () {
        return this._AIlogic.bishaAIR;
    }; // end function
    FighterAICtrl.prototype.waiKai = function () {
        return false;
    }; // end function
    FighterAICtrl.prototype.ghostStep = function () {
        return this._AIlogic.ghostStep;
    }; // end function
    FighterAICtrl.prototype.ghostJump = function () {
        return this._AIlogic.ghostJump;
    }; // end function
    FighterAICtrl.prototype.ghostJumpDown = function () {
        return this._AIlogic.ghostJumpDown;
    }; // end function
    return FighterAICtrl;
}());
__reflect(FighterAICtrl.prototype, "FighterAICtrl", ["IFighterActionCtrl"]);
//# sourceMappingURL=FighterAICtrl.js.map