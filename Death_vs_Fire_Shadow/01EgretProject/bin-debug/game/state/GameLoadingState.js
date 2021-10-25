var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameLoadingState = (function () {
    function GameLoadingState() {
    }
    GameLoadingState.prototype.GameLoadingState = function () {
        return;
    }; // end function
    GameLoadingState.prototype.display = function () {
        return this._ui;
    }; // end function
    GameLoadingState.prototype.build = function () {
        //this._ui = ResUtils.I.createDisplayObject(ResUtils.I.loading, "loading_cover_mc");
        return;
    }; // end function
    GameLoadingState.prototype.loadGame = function (param1, param2) {
        this._initBack = param1;
        this._initFail = param2;
        //GameData.I.loadConfig(loadConfigBack, loadConfigFail);
        //msg("游戏初始化：正在加载配置文件");
        return;
    }; // end function
    GameLoadingState.prototype.loadConfigFail = function (param1) {
        //Debugger.log("游戏初始化失败：加载配置文件失败：", param1);
        //msg("游戏初始化失败：加载配置文件失败!");
        if (this._initFail != null) {
            this._initFail(param1);
        }
        return;
    }; // end function
    GameLoadingState.prototype.loadConfigBack = function () {
        //AssetManager.I.loadBasic(loadAssetBack, loadAssetProcess);
        //msg("游戏初始化：正在加载游戏资源");
        return;
    }; // end function
    GameLoadingState.prototype.loadAssetProcess = function (param1, param2, param3, param4) {
        if (param1 > 1) {
            //this.trace(param2 + "::进度超过100%");
            param1 = 1;
        }
        //this._ui.bar.bar.scaleX = param1;
        //msg("游戏初始化：正在加载" + param2 + "资源(" + param3 + "/" + param4 + ")");
        return;
    }; // end function
    GameLoadingState.prototype.loadAssetBack = function () {
        if (this._initBack != null) {
            this._initBack();
            this._initBack = null;
        }
        this._initFail = null;
        return;
    }; // end function
    GameLoadingState.prototype.afterBuild = function () {
        return;
    }; // end function
    GameLoadingState.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = null; }
        return;
    }; // end function
    GameLoadingState.prototype.msg = function (param1) {
        //this._ui.bar.txt.text = param1;
        return;
    }; // end function
    return GameLoadingState;
}());
__reflect(GameLoadingState.prototype, "GameLoadingState", ["Istage"]);
//# sourceMappingURL=GameLoadingState.js.map