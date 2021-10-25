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
var FightloadScene = (function (_super) {
    __extends(FightloadScene, _super);
    function FightloadScene(param) {
        var _this = _super.call(this) || this;
        _this._loadFlag = 0; //0加载 1释放
        _this._loadFlag = param;
        return _this;
    }
    FightloadScene.prototype.onEnter = function () {
        FightloadScene.Instance = this;
        UI.addPic(this, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        {
            var aa = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            aa.scaleX = 30;
            aa.scaleY = 20;
        }
        {
            var aa = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            aa.scaleX = 30;
            aa.scaleY = 20;
        }
        //
        if (this._loadFlag == 0) {
            var txt = UI.addText(this, "游戏资源加载中....", UI.WINSIZE_W / 2 - 100, UI.WINSIZE_H - 80);
            txt.textColor = 0xffffff;
        }
        else {
            var txt = UI.addText(this, "游戏资源释放中....", UI.WINSIZE_W / 2 - 100, UI.WINSIZE_H - 80);
            txt.textColor = 0xffffff;
        }
        egret.setTimeout(function (arg) {
            FightloadScene.Instance.doAction();
        }, this, 2000);
    };
    FightloadScene.prototype.doAction = function () {
        if (FightloadScene.Instance._loadFlag == 0) {
            if (GameMode.currentMode == GameMode.TRAINING) {
                SceneManager.Instance.changeScene(new GameScene(false));
            }
            else if (GameMode.currentMode == GameMode.SINGLE_VS_CPU) {
                SceneManager.Instance.changeScene(new GameScene(true));
            }
            else if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE) {
                SceneManager.Instance.changeScene(new GameScene(false));
            }
        }
        else {
            SceneManager.Instance.changeScene(new ModeScene());
        }
    };
    FightloadScene.prototype.onExit = function () {
    };
    return FightloadScene;
}(Scene));
__reflect(FightloadScene.prototype, "FightloadScene");
//# sourceMappingURL=FightLoadScene.js.map