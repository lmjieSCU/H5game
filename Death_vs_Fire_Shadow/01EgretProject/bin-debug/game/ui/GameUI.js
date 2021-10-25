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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this._renderAnimateFrame = 0;
        _this._renderAnimateFrame = 0;
        GameUI.I = _this;
        _this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        return _this;
    } // end function
    GameUI.prototype.getUI = function () {
        return this._ui;
    }; // end function
    GameUI.prototype.getUIDisplay = function () {
        return this._ui.getUI();
    }; // end function
    GameUI.prototype.initFight = function (param1, param2) {
        if (this._ui) {
            if (this._ui instanceof FightUI == false) {
                this._ui.destory();
                this._ui = new FightUI();
            }
        }
        else {
            this._ui = new FightUI();
        }
        this._ui.initlize(param1, param2);
        return;
    }; // end function
    GameUI.prototype.render = function () {
        if (!this._ui) {
            return;
        }
        this._ui.render();
        if (this.isRenderAnimate()) {
            this.renderAnimate();
        }
        return;
    }; // end function
    GameUI.prototype.renderAnimate = function () {
        if (this._ui) {
            this._ui.renderAnimate();
        }
        return;
    }; // end function
    GameUI.prototype.isRenderAnimate = function () {
        if (this._renderAnimateGap > 0) {
            this._renderAnimateFrame = (this._renderAnimateFrame + 1);
            if (this._renderAnimateFrame >= this._renderAnimateGap) {
                this._renderAnimateFrame = 0;
                return true;
            }
            return false;
        }
        return true;
    }; // end function
    GameUI.prototype.fadIn = function () {
        if (this._ui) {
            this._ui.fadIn(true);
        }
        return;
    }; // end function
    GameUI.prototype.fadOut = function () {
        if (this._ui) {
            this._ui.fadIn(true);
        }
        return;
    }; // end function
    GameUI.prototype.destory = function () {
        if (this._ui) {
            this._ui.destory();
        }
        return;
    }; // end function
    GameUI.showingDialog = function () {
        return GameUI._confrimUI != null || GameUI._alertUI != null;
    }; // end function
    GameUI.confrim = function (param1, param2, param3, param4) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        var enMsg = param1;
        var cnMsg = param2;
        var yes = param3;
        var no = param4;
        var yesClose = function () {
            if (yes != null) {
                yes();
            }
            GameUI.closeConfrim();
            return;
        } // end function
        ;
        var noClose = function () {
            if (no != null) {
                no();
            }
            GameUI.closeConfrim();
            return;
        } // end function
        ;
        GameUI.closeConfrim();
        GameUI._confrimUI = new ConfrimUI();
        GameUI._confrimUI.setMsg(enMsg, cnMsg);
        GameUI._confrimUI.yesBack = yesClose;
        GameUI._confrimUI.noBack = noClose;
        MainGame.I.root.addChild(GameUI._confrimUI);
        return;
    }; // end function
    GameUI.alert = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
        var enMsg = param1;
        var cnMsg = param2;
        var close = param3;
        var closeBack = function () {
            if (close != null) {
                close();
            }
            GameUI.closeAlert();
            return;
        } // end function
        ;
        GameUI.closeAlert();
        GameUI._alertUI = new AlertUI();
        GameUI._alertUI.setMsg(enMsg, cnMsg);
        GameUI._alertUI.closeBack = closeBack;
        MainGame.I.root.addChild(GameUI._alertUI);
        return;
    }; // end function
    GameUI.closeAlert = function () {
        if (GameUI._alertUI) {
            try {
                MainGame.I.root.removeChild(GameUI._alertUI);
            }
            catch (e) {
            }
            GameUI._alertUI.destory();
            GameUI._alertUI = null;
        }
        return;
    }; // end function
    GameUI.closeConfrim = function () {
        if (GameUI._confrimUI) {
            try {
                MainGame.I.root.removeChild(GameUI._confrimUI);
            }
            catch (e) {
            }
            GameUI._confrimUI.destory();
            GameUI._confrimUI = null;
        }
        return;
    }; // end function
    GameUI.BITMAP_UI = true;
    GameUI.SHOW_CN_TEXT = true;
    return GameUI;
}(egret.DisplayObject));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map