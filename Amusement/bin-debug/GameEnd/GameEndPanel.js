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
var GameEndPanel = (function (_super) {
    __extends(GameEndPanel, _super);
    function GameEndPanel() {
        var _this = _super.call(this) || this;
        //====================================容器==========================================
        _this.node = new egret.Sprite();
        _this.addChild(_this.node);
        //====================================图片==========================================
        UI.addPic("endPanel_png", true, _this.node);
        UI.addPic("endscoreinfo_png", true, _this.node, -UI.WINSIZE_W / 6);
        _this.success = UI.addPic("success_png", true, _this.node, 0, -UI.WINSIZE_H / 4.2);
        _this.failed = UI.addPic("failed_png", true, _this.node, 0, -UI.WINSIZE_H / 4.2);
        //======================================按钮========================================
        _this.next_btn = UI.addPic("next_btn_png", true, _this.node, 0, UI.WINSIZE_H / 6);
        UI.addClickAction(_this, _this.next_btn, _this.onNextBtnTouch);
        _this.close_btn = UI.addPic("close_btn_png", true, _this.node, UI.WINSIZE_W / 2.9, -UI.WINSIZE_H / 4.2);
        UI.addClickAction(_this, _this.close_btn, _this.onCloseBtnTouch);
        _this.replay2_btn = UI.addPic("replay2_btn_png", true, _this.node, 0, UI.WINSIZE_H / 6);
        UI.addClickAction(_this, _this.replay2_btn, _this.onreplayBtnTouch);
        //========================================坐标=======================================
        _this.node.x = UI.WINSIZE_W / 2;
        //========================================文本=======================================
        egret.Tween.get(_this.node).to({ "y": UI.WINSIZE_H / 2 }, 300).to({ "scaleX": 1.1, "scaleY": 0.9 }, 200).call(_this.doUiAnimationEnd1, _this);
        _this.scoreLabel = UI.addText(_this.node, "", true, 0, -UI.WINSIZE_H / 18);
        _this.goldLabel = UI.addText(_this.node, "", true, 0, UI.WINSIZE_H / 30);
        _this.highscoreLabel = UI.addText(_this.node, "", true, 0, UI.WINSIZE_H / 50);
        //=======================================更新数据=====================================
        if (Model.gameModel.score > Model.gameModel.highScore || isNaN(Model.gameModel.highScore)) {
            Model.gameModel.highScore = Model.gameModel.score;
        }
        _this.highscoreLabel.text = Model.gameModel.highScore + "";
        if (Model.gameModel.isSuccess) {
            SoundCtrl.I.playmusic("game_win");
            var getStar = 0;
            var bigstar = null;
            var cfg = Config.levelConfig.getLevel(Model.levelModel.selectedLevel);
            if (Model.gameModel.score >= cfg.needScore * 6) {
                getStar = 3;
            }
            else if (Model.gameModel.score >= cfg.needScore * 3) {
                getStar = 2;
            }
            else if (Model.gameModel.score >= cfg.needScore) {
                getStar = 1;
            }
            var i = 0;
            while (i < getStar) {
                bigstar = UI.addPic("bigstar_png", true, _this);
                bigstar.x = 220 + i * 97;
                bigstar.y = 403;
                bigstar.scaleY = 2;
                bigstar.scaleX = 2;
                bigstar.visible = false;
                egret.Tween.get(bigstar).wait(i * 300 + 500).to({ "visible": true }, 100).to({ "scaleX": 1, "scaleY": 1 }, 500);
                ++i;
            }
            _this.success.visible = true;
            _this.failed.visible = false;
            _this.replay2_btn.visible = false;
            if (Model.levelModel.currentLevel == Model.levelModel.selectedLevel) {
                Model.levelModel.currentLevel = Model.levelModel.currentLevel + 1;
                if (Model.levelModel.currentLevel > Model.levelModel.totalLevel) {
                    Model.levelModel.currentLevel = Model.levelModel.totalLevel;
                }
            }
            var levelVO = Model.levelModel.getLevelVO(Model.levelModel.selectedLevel);
            levelVO.star = Math.max(getStar, levelVO.star);
            levelVO.highscore = Model.gameModel.highScore;
        }
        else {
            _this.success.visible = false;
            _this.failed.visible = true;
            _this.next_btn.visible = false;
            _this.getGold = 0;
            SoundCtrl.I.playmusic("fail1");
        }
        egret.setTimeout(_this.delayToScroll, _this, 400);
        _this.starSoundIndex = 0;
        Model.levelModel.saveData();
        return _this;
    }
    GameEndPanel.prototype.show = function (arg1) {
        _super.prototype.show.call(this, arg1);
        return;
    };
    GameEndPanel.prototype.onCloseBtnTouch = function (arg1) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    GameEndPanel.prototype.onreplayBtnTouch = function (arg1) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    };
    GameEndPanel.prototype.onNextBtnTouch = function (arg1) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelConfig.TOTAL_LEVEL);
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    };
    GameEndPanel.prototype.delayToScroll = function () {
        this.scrollDelta = Math.floor(Model.gameModel.score / 60);
        if (this.scrollDelta == 0) {
            this.scrollDelta = 1;
        }
        this.scoreIntervalID = egret.setInterval(this.scoreScroll, this, 16);
        this.score = 0;
        if (this.getGold > 0) {
            this.goldDelta = this.getGold / 60;
            if (this.goldDelta == 0) {
                this.goldDelta = 1;
            }
            this.goldIntervalID = egret.setInterval(this.goldScroll, this, 16);
            this.gold = 0;
        }
        return;
    };
    GameEndPanel.prototype.scoreScroll = function () {
        this.score = this.score + this.scrollDelta;
        if (this.score >= Model.gameModel.score) {
            this.score = Model.gameModel.score;
            egret.clearInterval(this.scoreIntervalID);
        }
        this.scoreLabel.text = this.score + "";
        return;
    };
    GameEndPanel.prototype.goldScroll = function () {
        this.gold = this.gold + this.goldDelta;
        if (this.gold >= this.getGold) {
            this.gold = this.getGold;
            egret.clearInterval(this.goldIntervalID);
        }
        this.goldLabel.text = this.gold + "";
        return;
    };
    GameEndPanel.prototype.restartGame = function () {
        return;
    };
    GameEndPanel.prototype.back = function () {
        return;
    };
    GameEndPanel.prototype.doUiAnimationEnd1 = function () {
        egret.Tween.get(this.node).to({ "scaleX": 1, "scaleY": 1 }, 100);
        return;
    };
    return GameEndPanel;
}(BasePanel3D));
__reflect(GameEndPanel.prototype, "GameEndPanel");
//# sourceMappingURL=GameEndPanel.js.map