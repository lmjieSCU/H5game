var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameKeyInput = (function () {
    function GameKeyInput() {
        this._enabled = true;
        this._downKeys = {};
        return;
    } // end 
    GameKeyInput.prototype.initlize = function (param1) {
        KeyBoarder.initlize(param1);
        KeyBoarder.listen(this.keyBoardHandler);
        return;
    }; // end 
    Object.defineProperty(GameKeyInput.prototype, "enabled", {
        get: function () {
            return this._enabled;
        } // end 
        ,
        set: function (param1) {
            this._enabled = param1;
            return;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    GameKeyInput.prototype.setConfig = function (param1) {
        this._config = param1;
        return;
    }; // end 
    GameKeyInput.prototype.focus = function () {
        KeyBoarder.focus();
        return;
    }; // end 
    GameKeyInput.prototype.anyKey = function () {
        var _loc3_ = 0;
        var _loc2_ = this._downKeys;
        for (var _loc1_ in this._downKeys) {
            if (this._downKeys[this._downKeys[_loc1_]] == 1) {
                return true;
            }
        }
        return false;
    }; // end 
    GameKeyInput.prototype.back = function () {
        return this.isDown(27);
    }; // end 
    GameKeyInput.prototype.select = function () {
        for (var _loc_1 in this._config.selects) {
            if (this.isDown(this._config.selects[_loc_1])) {
                return true;
            }
        }
        return false;
    }; // end 
    GameKeyInput.prototype.up = function () {
        return this.isDown(this._config.up);
    }; // end 
    GameKeyInput.prototype.down = function () {
        return this.isDown(this._config.down);
    }; // end 
    GameKeyInput.prototype.left = function () {
        return this.isDown(this._config.left);
    }; // end 
    GameKeyInput.prototype.right = function () {
        return this.isDown(this._config.right);
    }; // end 
    GameKeyInput.prototype.attack = function () {
        return this.isDown(this._config.attack);
    }; // end 
    GameKeyInput.prototype.jump = function () {
        return this.isDown(this._config.jump);
    }; // end 
    GameKeyInput.prototype.dash = function () {
        return this.isDown(this._config.dash);
    }; // end 
    GameKeyInput.prototype.skill = function () {
        return this.isDown(this._config.skill);
    }; // end 
    GameKeyInput.prototype.superSkill = function () {
        return this.isDown(this._config.superKill);
    }; // end 
    GameKeyInput.prototype.special = function () {
        return this.isDown(this._config.beckons);
    }; // end 
    GameKeyInput.prototype.wankai = function () {
        return this.isDown(this._config.attack) && this.isDown(this._config.jump);
    }; // end 
    GameKeyInput.prototype.clear = function () {
        this._downKeys = {};
        return;
    }; // end 
    GameKeyInput.prototype.keyBoardHandler = function (param1) {
        var _loc2_ = param1.type;
        if ("keyDown" !== _loc2_) {
            if ("keyUp" === _loc2_) {
                this._downKeys[param1.keyCode] = 0;
            }
        }
        else {
            this._downKeys[param1.keyCode] = 1;
        }
    }; // end 
    GameKeyInput.prototype.isDown = function (param1) {
        return this._downKeys[param1] == 1;
    }; // end 
    return GameKeyInput;
}());
__reflect(GameKeyInput.prototype, "GameKeyInput", ["IGameInput"]);
//# sourceMappingURL=GameKeyInput.js.map