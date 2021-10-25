var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameInputer = (function () {
    function GameInputer() {
        return;
    } // end 
    GameInputer.initlize = function (param1) {
        this.initInput();
        this.callVoid("initlize", param1);
        GameRender.add(this.render);
        return;
    }; // end 
    GameInputer.initInput = function () {
        var _loc_3 = GameInterface.instance.getGameInput("MENU");
        if (!_loc_3) {
            _loc_3 = new Array(new GameKeyInput());
        }
        var _loc_2 = GameInterface.instance.getGameInput("P1");
        if (!_loc_2) {
            _loc_2 = new Array(new GameKeyInput());
        }
        var _loc_1 = GameInterface.instance.getGameInput("P2");
        if (!_loc_1) {
            _loc_1 = new Array(new GameKeyInput());
        }
        this.setInput("MENU", _loc_3);
        GameInputer.setInput("P1", _loc_2);
        GameInputer.setInput("P2", _loc_1);
        return;
    }; // end 
    GameInputer.setInput = function (param1, param2) {
        this._inputMap[param1] = param2;
        return;
    }; // end 
    GameInputer.updateConfig = function () {
        if (GameInterface.instance.updateInputConfig()) {
            return;
        }
        this.setConfig("MENU", GameData.I.config.key_menu);
        this.setConfig("P1", GameData.I.config.key_p1);
        this.setConfig("P2", GameData.I.config.key_p2);
        return;
    }; // end 
    GameInputer.setConfig = function (param1, param2) {
        this.call(param1, "setConfig", param2);
        return;
    }; // end 
    GameInputer.focus = function () {
        this.callVoid("focus");
        return;
    }; // end 
    GameInputer.listenKeys = function (param1, param2, param3) {
        if (param3 != 1 && param3 != 2) {
            return;
        }
        if (!this._listenKeys) {
            this._listenKeys = {};
        }
        var _loc_4 = param1 + "_" + param3;
        this._listenKeys[_loc_4] = { type: param1, ids: param2, justDown: param3 };
        return;
    }; // end 
    GameInputer.unListenKeys = function (param1, param2) {
        var _loc_3 = param1 + "_" + param2;
        return;
    }; // end 
    GameInputer.renderListenKeys = function () {
        var _loc_3 = 0;
        var _loc_1 = null;
        var _loc_4 = 0;
        if (!this._listenKeys) {
            return;
        }
        for (var _loc_2 in this._listenKeys) {
            _loc_1 = this._listenKeys[_loc_2].ids;
            _loc_3 = _loc_1.length;
            _loc_4 = 0;
            while (_loc_4 < _loc_3) {
                this.isDown(this._listenKeys[_loc_2].type, _loc_1[_loc_4], this._listenKeys[_loc_2].justDown, true);
                _loc_4++;
            }
        }
        return;
    }; // end 
    GameInputer.isListenedKey = function (param1, param2, param3) {
        if (!this._listenKeys) {
            return false;
        }
        var _loc_4 = param1 + "_" + param3;
        var _loc_5 = this._listenKeys[_loc_4];
        if (!this._listenKeys[_loc_4] || !_loc_5.ids) {
            return false;
        }
        return _loc_5.ids.indexOf(param2) != -1;
    }; // end 
    GameInputer.render = function () {
        var _loc2_ = null;
        var _loc1_ = false;
        var _loc3_ = null;
        var _loc8_ = 0;
        var _loc7_ = this._justDownDelayKeys;
        for (_loc3_ in this._justDownDelayKeys) {
            if (this._justDownDelayKeys[this._justDownDelayKeys[_loc3_]] > 0) {
                var _loc4_ = this._justDownDelayKeys;
                var _loc5_ = this._justDownDelayKeys[_loc3_];
                var _loc6_ = Number(_loc4_[_loc5_]) - 1;
                _loc4_[_loc5_] = _loc6_;
            }
            else {
                delete this._justDownDelayKeys[this._justDownDelayKeys[_loc3_]];
            }
        }
        this.renderListenKeys();
        return;
    }; // end 
    GameInputer.anyKey = function (param1) {
        if (param1 === void 0) { param1 = 0; }
        return this.isDown("MENU", "anyKey", param1);
    }; // end 
    GameInputer.back = function (param1) {
        if (param1 === void 0) { param1 = 0; }
        return this.isDown("MENU", "back", param1);
    }; // end 
    GameInputer.select = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "select", param2);
    }; // end 
    GameInputer.up = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "up", param2);
    }; // end 
    GameInputer.down = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "down", param2);
    }; // end 
    GameInputer.left = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "left", param2);
    }; // end 
    GameInputer.right = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "right", param2);
    }; // end 
    GameInputer.attack = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "attack", param2);
    }; // end 
    GameInputer.jump = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "jump", param2);
    }; // end 
    GameInputer.dash = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "dash", param2);
    }; // end 
    GameInputer.skill = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "skill", param2);
    }; // end 
    GameInputer.superSkill = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "superSkill", param2);
    }; // end 
    GameInputer.special = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "special", param2);
    }; // end 
    GameInputer.wankai = function (param1, param2) {
        if (param2 === void 0) { param2 = 0; }
        return this.isDown(param1, "wankai", param2);
    }; // end 
    GameInputer.clearInput = function () {
        this._justDownKeys = {};
        this._justDownDelayKeys = {};
        this.callVoid("clear");
        return;
    }; // end 
    GameInputer.isDown = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = false; }
        var _loc_5 = param4 ? (false) : (this.isListenedKey(param1, param2, param3));
        if (param3 == 1) {
            return this.isJustDown(param1, param2);
        }
        if (param3 == 2) {
            return this.isJustDownDelay(param1, param2, _loc_5);
        }
        return this.call(param1, param2);
    }; // end 
    GameInputer.isJustDown = function (param1, param2) {
        var _loc_3 = param1 + "_" + param2;
        var _loc_4 = this.call(param1, param2);
        if (!this.call(param1, param2)) {
            this._justDownKeys[_loc_3] = false;
            return false;
        }
        if (this._justDownKeys[_loc_3]) {
            return false;
        }
        this._justDownKeys[_loc_3] = true;
        return true;
    }; // end 
    GameInputer.isJustDownDelay = function (param1, param2, param3) {
        var _loc_5 = this.isJustDown(param1, param2);
        var _loc_4 = param1 + "_" + param2;
        if (_loc_5) {
            this._justDownDelayKeys[_loc_4] = 0.1 * MainGame.I.getFPS();
        }
        return this._justDownDelayKeys[_loc_4] && this._justDownDelayKeys[_loc_4] > 0;
    }; // end 
    GameInputer.call = function (param1, param2) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var _loc_6 = 0;
        var _loc_5 = null;
        if (!this.enabled) {
            return false;
        }
        if (!this._inputMap[param1]) {
            return false;
        }
        args = this._inputMap[param1];
        while (_loc_6 < args.length) {
            if (args[_loc_6].enabled) {
                _loc_5 = args[_loc_6][param2];
                if (_loc_5 != null) {
                    if (_loc_5.apply(null, args)) {
                        return true;
                    }
                }
            }
            _loc_6++;
        }
        return false;
    }; // end 
    GameInputer.callVoid = function (param1) {
        var argsv = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argsv[_i - 1] = arguments[_i];
        }
        args = undefined;
        var _loc_5 = 0;
        var _loc_4 = null;
        for (var args in this._inputMap) {
            _loc_5 = 0;
            while (_loc_5 < this._inputMap[args].length) {
                if (this._inputMap[args][_loc_5].enabled) {
                    _loc_4 = this._inputMap[args][_loc_5][param1];
                    if (_loc_4 != null) {
                        _loc_4.apply(null, this._inputMap[args]);
                    }
                }
                _loc_5++;
            }
        }
        return;
    }; // end 
    GameInputer.JUST_DOWN_DELAY = 0.1;
    GameInputer._inputMap = [];
    GameInputer.enabled = true;
    GameInputer._justDownKeys = {};
    GameInputer._justDownDelayKeys = {};
    return GameInputer;
}());
__reflect(GameInputer.prototype, "GameInputer");
//# sourceMappingURL=GameInputer.js.map