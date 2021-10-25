var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterKeyCtrl = (function () {
    function FighterKeyCtrl() {
        this.classicMode = false;
        this._justDown = 0;
        return;
    } // end function
    FighterKeyCtrl.prototype._inputType = function () {
        return this.inputType;
    };
    FighterKeyCtrl.prototype.initlize = function () {
        if (!this.classicMode) {
            this._justDown = 2;
            GameInputer.listenKeys(this.inputType, ["attack", "jump", "dash", "skill", "superSkill"], 2);
        }
        else {
            this._justDown = 0;
        }
        return;
    }; // end function
    FighterKeyCtrl.prototype.render = function () {
        return;
    }; // end function
    FighterKeyCtrl.prototype.renderAnimate = function () {
        return;
    }; // end function
    FighterKeyCtrl.prototype.destory = function () {
        if (!this.classicMode) {
            GameInputer.unListenKeys(this.inputType, 2);
        }
        return;
    }; // end function
    FighterKeyCtrl.prototype.enabled = function () {
        return GameCtrl.I.actionEnable;
    }; // end function
    FighterKeyCtrl.prototype.setenabled = function () {
    }; // end function
    FighterKeyCtrl.prototype.moveLEFT = function () {
        return GameInputer.left(this.inputType, 0) && !GameInputer.right(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.moveRIGHT = function () {
        return GameInputer.right(this.inputType, 0) && !GameInputer.left(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.defense = function () {
        return GameInputer.down(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.attack = function () {
        return GameInputer.attack(this.inputType, this._justDown) && !(GameInputer.up(this.inputType, 0) || GameInputer.down(this.inputType, 0) || GameInputer.jump(this.inputType, 0));
    }; // end function
    FighterKeyCtrl.prototype.jump = function () {
        return GameInputer.jump(this.inputType, this._justDown) && !GameInputer.attack(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.jumpQuick = function () {
        if (this.classicMode) {
            return false;
        }
        return GameInputer.jump(this.inputType, this._justDown) && !GameInputer.attack(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.jumpDown = function () {
        return GameInputer.down(this.inputType, 0) && GameInputer.jump(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.dash = function () {
        GameInputer.up(this.inputType, 0);
        return GameInputer.dash(this.inputType, this._justDown) && !GameInputer.down(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.dashJump = function () {
        return GameInputer.dash(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.skill1 = function () {
        return GameInputer.down(this.inputType, 0) && GameInputer.attack(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.skill2 = function () {
        return GameInputer.up(this.inputType, 0) && GameInputer.attack(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.zhao1 = function () {
        return GameInputer.skill(this.inputType, this._justDown) && !GameInputer.up(this.inputType, 0) && !GameInputer.down(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.zhao2 = function () {
        return GameInputer.down(this.inputType, 0) && GameInputer.skill(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.zhao3 = function () {
        return GameInputer.up(this.inputType, 0) && GameInputer.skill(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.catch1 = function () {
        return GameInputer.attack(this.inputType, this._justDown) && (GameInputer.left(this.inputType, 0) || GameInputer.right(this.inputType, 0));
    }; // end function
    FighterKeyCtrl.prototype.catch2 = function () {
        return GameInputer.skill(this.inputType, this._justDown) && (GameInputer.left(this.inputType, 0) || GameInputer.right(this.inputType, 0));
    }; // end function
    FighterKeyCtrl.prototype.bisha = function () {
        return GameInputer.superSkill(this.inputType, this._justDown) && !(GameInputer.up(this.inputType, 0) || GameInputer.down(this.inputType, 0));
    }; // end function
    FighterKeyCtrl.prototype.bishaUP = function () {
        return GameInputer.superSkill(this.inputType, this._justDown) && GameInputer.up(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.bishaSUPER = function () {
        return GameInputer.superSkill(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.assist = function () {
        return GameInputer.special(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.specailSkill = function () {
        return GameInputer.special(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.attackAIR = function () {
        return GameInputer.attack(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.skillAIR = function () {
        return GameInputer.skill(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.bishaAIR = function () {
        return GameInputer.superSkill(this.inputType, this._justDown);
    }; // end function
    FighterKeyCtrl.prototype.waiKai = function () {
        return GameInputer.wankai(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.ghostStep = function () {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.ghostJump = function () {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.up(this.inputType, 0);
    }; // end function
    FighterKeyCtrl.prototype.ghostJumpDown = function () {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }; // end function
    return FighterKeyCtrl;
}());
__reflect(FighterKeyCtrl.prototype, "FighterKeyCtrl", ["IFighterActionCtrl"]);
//# sourceMappingURL=FighterKeyCtrl.js.map