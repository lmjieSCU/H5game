var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterKeyCtrl_pack = (function () {
    function FighterKeyCtrl_pack() {
        this.classicMode = false;
        this._justDown = 0;
        this._Assister = false;
        this._enabled = false;
        this.packframe = 0;
        return;
    } // end function
    FighterKeyCtrl_pack.prototype._inputType = function () {
        return this.inputType;
    };
    FighterKeyCtrl_pack.prototype.initlize = function () {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this.kb = new KeyBoard();
        this.kb.addEventListener(KeyBoard.onkeydown, this.check, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.check, this);
        return;
    }; // end function
    FighterKeyCtrl_pack.prototype.check = function (event) {
        var pack = {};
        if (this.kb.isContain(event.data, KeyBoard.W)) {
            pack["_up"] = true;
        }
        else {
            pack["_up"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.A)) {
            pack["_left"] = true;
        }
        else {
            pack["_left"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.S)) {
            pack["_down"] = true;
        }
        else {
            pack["_down"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            pack["_right"] = true;
        }
        else {
            pack["_right"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.U)) {
            pack["_skill"] = true;
        }
        else {
            pack["_skill"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.I)) {
            pack["_Assister"] = true;
        }
        else {
            pack["_Assister"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.O)) {
            pack["_superSkill"] = true;
        }
        else {
            pack["_superSkill"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.J)) {
            pack["_attack"] = true;
        }
        else {
            pack["_attack"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.K)) {
            pack["_jump"] = true;
        }
        else {
            pack["_jump"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.L)) {
            pack["_dash"] = true;
        }
        else {
            pack["_dash"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.P)) {
            pack["_wankai"] = true;
        }
        else {
            pack["_wankai"] = false;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(pack);
        }
        else {
            if (this.inputType != MGOBE.Player.id) {
                return;
            }
            var sendFramePara = { data: pack };
            MatchLayer.room.sendFrame(sendFramePara); //, event => console.log("sendframe",)
        }
    };
    FighterKeyCtrl_pack.prototype.setvalue = function (pack) {
        for (var key in pack) {
            this[key] = pack[key];
        }
    };
    FighterKeyCtrl_pack.prototype.render = function () {
        return;
    }; // end function
    FighterKeyCtrl_pack.prototype.renderAnimate = function () {
        return;
    }; // end function
    FighterKeyCtrl_pack.prototype.destory = function () {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this.kb.removeEventListener(KeyBoard.onkeydown, this.check, this);
        this.kb.removeEventListener(KeyBoard.onkeyup, this.check, this);
        return;
    }; // end function
    FighterKeyCtrl_pack.prototype.setenabled = function (param1) {
        this._enabled = param1;
    };
    FighterKeyCtrl_pack.prototype.enabled = function () {
        return this._enabled;
    }; // end function
    FighterKeyCtrl_pack.prototype.moveLEFT = function () {
        return this._left && !this._right;
    }; // end function
    FighterKeyCtrl_pack.prototype.moveRIGHT = function () {
        return !this._left && this._right;
    }; // end function
    FighterKeyCtrl_pack.prototype.defense = function () {
        return this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.attack = function () {
        return this._attack && !(this._up || this._down || this._jump);
    }; // end function
    FighterKeyCtrl_pack.prototype.jump = function () {
        return this._jump && !this._attack;
    }; // end function
    FighterKeyCtrl_pack.prototype.jumpQuick = function () {
        if (this.classicMode) {
            return false;
        }
        return this._jump && !this._attack;
    }; // end function
    FighterKeyCtrl_pack.prototype.jumpDown = function () {
        return this._down && this._jump;
    }; // end function
    FighterKeyCtrl_pack.prototype.dash = function () {
        return this._dash && !this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.dashJump = function () {
        return this._dash && !this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.skill1 = function () {
        return this._down && this._attack;
    }; // end function
    FighterKeyCtrl_pack.prototype.skill2 = function () {
        return this._up && this._attack;
    }; // end function
    FighterKeyCtrl_pack.prototype.zhao1 = function () {
        return this._skill && !this._up && !this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.zhao2 = function () {
        return this._skill && this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.zhao3 = function () {
        return this._skill && this._up;
    }; // end function
    FighterKeyCtrl_pack.prototype.catch1 = function () {
        return this._attack && (this._left || this._right);
    }; // end function
    FighterKeyCtrl_pack.prototype.catch2 = function () {
        return this._skill && (this._left || this._right);
    }; // end function
    FighterKeyCtrl_pack.prototype.bisha = function () {
        return this._superSkill && !(this._up || this._down);
    }; // end function
    FighterKeyCtrl_pack.prototype.bishaUP = function () {
        return this._superSkill && this._up;
    }; // end function
    FighterKeyCtrl_pack.prototype.bishaSUPER = function () {
        return this._superSkill && this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.assist = function () {
        return this._Assister;
    }; // end function
    FighterKeyCtrl_pack.prototype.specailSkill = function () {
        return this._Assister;
    }; // end function
    FighterKeyCtrl_pack.prototype.attackAIR = function () {
        return this._attack;
    }; // end function
    FighterKeyCtrl_pack.prototype.skillAIR = function () {
        return this._skill;
    }; // end function
    FighterKeyCtrl_pack.prototype.bishaAIR = function () {
        return this._superSkill;
    }; // end function
    FighterKeyCtrl_pack.prototype.waiKai = function () {
        return this._wankai;
    }; // end function
    FighterKeyCtrl_pack.prototype.ghostStep = function () {
        return this._dash && this._down;
    }; // end function
    FighterKeyCtrl_pack.prototype.ghostJump = function () {
        return this._dash && this._up;
    }; // end function
    FighterKeyCtrl_pack.prototype.ghostJumpDown = function () {
        return this._dash && this._down;
    }; // end function
    return FighterKeyCtrl_pack;
}());
__reflect(FighterKeyCtrl_pack.prototype, "FighterKeyCtrl_pack", ["IFighterActionCtrl"]);
//# sourceMappingURL=FighterKeyCtrl_pack.js.map