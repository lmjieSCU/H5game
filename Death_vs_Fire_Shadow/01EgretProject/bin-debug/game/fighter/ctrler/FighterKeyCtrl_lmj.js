var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterKeyCtrl_lmj = (function () {
    function FighterKeyCtrl_lmj() {
        this.classicMode = false;
        this._justDown = 0;
        this._Assister = false;
        this._enabled = false;
        this.kb = new KeyBoard();
        return;
    } // end function
    FighterKeyCtrl_lmj.prototype._inputType = function () {
        return this.inputType;
    };
    FighterKeyCtrl_lmj.prototype.initlize = function () {
        this.kb.addEventListener(KeyBoard.onkeydown, this.onkeydown, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.onkeyup, this);
        return;
    }; // end function
    FighterKeyCtrl_lmj.prototype.onkeydown = function (event) {
        if (this.kb.isContain(event.data, KeyBoard.W)) {
            this._up = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.A)) {
            this._left = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.S)) {
            this._down = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            this._right = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.U)) {
            this._skill = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.I)) {
            this._Assister = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.O)) {
            this._superSkill = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.J)) {
            this._attack = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.K)) {
            this._jump = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.L)) {
            this._dash = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.P)) {
            this._wankai = true;
        }
    };
    FighterKeyCtrl_lmj.prototype.onkeyup = function (event) {
        if (!this.kb.isContain(event.data, KeyBoard.W)) {
            this._up = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.A)) {
            this._left = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.S)) {
            this._down = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.D)) {
            this._right = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.U)) {
            this._skill = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.I)) {
            this._Assister = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.O)) {
            this._superSkill = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.J)) {
            this._attack = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.K)) {
            this._jump = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.L)) {
            this._dash = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.P)) {
            this._wankai = false;
        }
    };
    FighterKeyCtrl_lmj.prototype.setvalue = function (Package) {
        for (var key in Package) {
            if (this[key]) {
                this[key] = Package[key];
            }
        }
    };
    FighterKeyCtrl_lmj.prototype.render = function () {
        return;
    }; // end function
    FighterKeyCtrl_lmj.prototype.renderAnimate = function () {
        return;
    }; // end function
    FighterKeyCtrl_lmj.prototype.destory = function () {
        this.kb.removeEventListener(KeyBoard.onkeydown, this.onkeydown, this);
        this.kb.removeEventListener(KeyBoard.onkeyup, this.onkeyup, this);
        return;
    }; // end function
    FighterKeyCtrl_lmj.prototype.setenabled = function (param1) {
        this._enabled = param1;
    };
    FighterKeyCtrl_lmj.prototype.enabled = function () {
        return this._enabled;
    }; // end function
    FighterKeyCtrl_lmj.prototype.moveLEFT = function () {
        return this._left && !this._right;
    }; // end function
    FighterKeyCtrl_lmj.prototype.moveRIGHT = function () {
        return !this._left && this._right;
    }; // end function
    FighterKeyCtrl_lmj.prototype.defense = function () {
        return this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.attack = function () {
        return this._attack && !(this._up || this._down || this._jump);
    }; // end function
    FighterKeyCtrl_lmj.prototype.jump = function () {
        return this._jump && !this._attack;
    }; // end function
    FighterKeyCtrl_lmj.prototype.jumpQuick = function () {
        if (this.classicMode) {
            return false;
        }
        return this._jump && !this._attack;
    }; // end function
    FighterKeyCtrl_lmj.prototype.jumpDown = function () {
        return this._down && this._jump;
    }; // end function
    FighterKeyCtrl_lmj.prototype.dash = function () {
        return this._dash && !this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.dashJump = function () {
        return this._dash && !this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.skill1 = function () {
        return this._down && this._attack;
    }; // end function
    FighterKeyCtrl_lmj.prototype.skill2 = function () {
        return this._up && this._attack;
    }; // end function
    FighterKeyCtrl_lmj.prototype.zhao1 = function () {
        return this._skill && !this._up && !this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.zhao2 = function () {
        return this._skill && this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.zhao3 = function () {
        return this._skill && this._up;
    }; // end function
    FighterKeyCtrl_lmj.prototype.catch1 = function () {
        return this._attack && (this._left || this._right);
    }; // end function
    FighterKeyCtrl_lmj.prototype.catch2 = function () {
        return this._skill && (this._left || this._right);
    }; // end function
    FighterKeyCtrl_lmj.prototype.bisha = function () {
        return this._superSkill && !(this._up || this._down);
    }; // end function
    FighterKeyCtrl_lmj.prototype.bishaUP = function () {
        return this._superSkill && this._up;
    }; // end function
    FighterKeyCtrl_lmj.prototype.bishaSUPER = function () {
        return this._superSkill && this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.assist = function () {
        return this._Assister;
    }; // end function
    FighterKeyCtrl_lmj.prototype.specailSkill = function () {
        return this._Assister;
    }; // end function
    FighterKeyCtrl_lmj.prototype.attackAIR = function () {
        return this._attack;
    }; // end function
    FighterKeyCtrl_lmj.prototype.skillAIR = function () {
        return this._skill;
    }; // end function
    FighterKeyCtrl_lmj.prototype.bishaAIR = function () {
        return this._superSkill;
    }; // end function
    FighterKeyCtrl_lmj.prototype.waiKai = function () {
        return this._wankai;
    }; // end function
    FighterKeyCtrl_lmj.prototype.ghostStep = function () {
        return this._dash && this._down;
    }; // end function
    FighterKeyCtrl_lmj.prototype.ghostJump = function () {
        return this._dash && this._up;
    }; // end function
    FighterKeyCtrl_lmj.prototype.ghostJumpDown = function () {
        return this._dash && this._down;
    }; // end function
    return FighterKeyCtrl_lmj;
}());
__reflect(FighterKeyCtrl_lmj.prototype, "FighterKeyCtrl_lmj", ["IFighterActionCtrl"]);
//# sourceMappingURL=FighterKeyCtrl_lmj.js.map