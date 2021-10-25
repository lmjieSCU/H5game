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
var GameEndLayer = (function (_super) {
    __extends(GameEndLayer, _super);
    function GameEndLayer() {
        var _this = _super.call(this) || this;
        _this.node = new egret.DisplayObjectContainer();
        _this.addChild(_this.node);
        _this.bigStars = new Array();
        return _this;
    }
    GameEndLayer.prototype.onEnter = function () {
        //====================================图片==========================================
        UI.addPic("endPanel_png", true, this.node);
        UI.addPic("res.endscoreinfo", true, this.node, -UI.WINSIZE_W / 8, -UI.WINSIZE_H / 20 + 20);
        this.success = UI.addPic("res.success", true, this.node, 0, -UI.WINSIZE_H / 4);
        this.failed = UI.addPic("res.failed", true, this.node, 0, -UI.WINSIZE_H / 4);
        //======================================按钮========================================
        this.next_btn = UI.addPic("res.next_btn", true, this.node, 0, UI.WINSIZE_H / 5.5);
        UI.addClickAction(this, this.next_btn, this.onNextBtnTouch);
        this.close_btn = UI.addPic("res.close_btn", true, this.node, UI.WINSIZE_W / 2.9, -UI.WINSIZE_H / 4.3);
        UI.addClickAction(this, this.close_btn, this.onCloseBtnTouch);
        this.replay2_btn = UI.addPic("res.replay2_btn", true, this.node, 0, UI.WINSIZE_H / 5.5);
        UI.addClickAction(this, this.replay2_btn, this.onreplayBtnTouch);
        this.node.x = UI.WINSIZE_W / 2;
        egret.Tween.get(this.node).to({ "y": UI.WINSIZE_H / 2 }, 500).to({ "scaleX": 1.1, "scaleY": 0.9 }, 200).to({ "scaleX": 1, "scaleY": 1 }, 200);
        this.scoreLabel = UI.addBitText(this.node, "", "info_fnt", true, 0, -100);
        this.scoreLabel.textAlign = "left";
        this.goldLabel = UI.addBitText(this.node, "", "info_fnt", true, 0, 60);
        this.goldLabel.textAlign = "left";
        this.highscoreLabel = UI.addBitText(this.node, "", "info_fnt", true, 0, -20);
        this.highscoreLabel.textAlign = "left";
        this.highscoreLabel.text = String(Model.levelModel.currentHighScore);
        SoundCtrl.getInstance().stopMusic();
        SoundCtrl.getInstance().stopBgMusic();
        var getStar = 0;
        if (Model.levelModel.isSuccess) {
            SoundCtrl.getInstance().playmusic("game_win");
            getStar = 0;
            var cfg = Config.levelCfgParser.getLevelCfg(Model.levelModel.selectedLevel);
            if (Model.levelModel.currentScore >= Number(cfg.starLevels[2])) {
                getStar = 3;
            }
            else if (Model.levelModel.currentScore >= Number(cfg.starLevels[1])) {
                getStar = 2;
            }
            else if (Model.levelModel.currentScore >= Number(cfg.starLevels[0])) {
                getStar = 1;
            }
            var _loop_1 = function (i) {
                this_1.bigStars[i] = UI.addPic("res.bigstar", true, this_1.node);
                this_1.bigStars[i].x = -100 + i * 96;
                this_1.bigStars[i].y = -185;
                this_1.bigStars[i].scaleY = 2;
                this_1.bigStars[i].scaleX = 2;
                this_1.bigStars[i].visible = false;
                egret.Tween.get(this_1.bigStars[i]).wait(i * 300 + 500).to({ "visible": true }, 100).to({ "scaleX": 1.2, "scaleY": 1.2 }, 500);
                egret.setTimeout(function () {
                    this.creatExpEffect(this.bigStars[i].x, this.bigStars[i].y);
                    return;
                }, this_1, i * 300 + 1200);
            };
            var this_1 = this;
            for (var i = 0; i < getStar; i++) {
                _loop_1(i);
            }
            this.success.visible = true;
            this.failed.visible = false;
            this.replay2_btn.visible = false;
            if (Model.levelModel.selectedLevel != Model.levelModel.currentLevel) {
                this.getGold = Math.floor(Model.levelModel.currentScore / 4000);
            }
            else {
                this.getGold = Math.floor(Model.levelModel.currentScore / 1000);
            }
            if (Model.levelModel.currentLevel == Model.levelModel.selectedLevel) {
                Model.levelModel.currentLevel = Model.levelModel.currentLevel + 1;
                if (Model.levelModel.currentLevel > Model.levelModel.totalLevel) {
                    Model.levelModel.currentLevel = Model.levelModel.totalLevel;
                }
            }
            var levelVO = Model.levelModel.getLevelVO(Model.levelModel.selectedLevel);
            levelVO.star = getStar;
            levelVO.highscore = Model.levelModel.currentHighScore;
        }
        else {
            this.success.visible = false;
            this.failed.visible = true;
            this.next_btn.visible = false;
            this.getGold = 0;
            SoundCtrl.getInstance().playmusic("game_lost");
            this.goldLabel.text = "0";
        }
        if (Model.levelModel.checkHasProp(PropType.PROP_3)) {
            this.getGold = this.getGold * 2;
        }
        Model.diamondModel.diamond = Model.diamondModel.diamond + this.getGold;
        egret.setTimeout(this.delayToScroll, this, 400);
        this.starSoundIndex = 0;
        Model.levelModel.buyProps = [];
        Model.levelModel.saveData();
        return;
    };
    // public ontouch(e: egret.TouchEvent) {
    //     this.bigStars[0].x = e.stageX - this.node.x;
    //     this.bigStars[0].y = e.stageY - this.node.y;
    //     console.log(this.bigStars[0].x, this.bigStars[0].y);
    // }
    GameEndLayer.prototype.onExit = function () {
    };
    GameEndLayer.prototype.onCloseBtnTouch = function (arg1) {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    GameEndLayer.prototype.onreplayBtnTouch = function (arg1) {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    GameEndLayer.prototype.onNextBtnTouch = function (arg1) {
        SoundCtrl.getInstance().playmusic("anniu");
        Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelCfgParser.TOTAL_LEVEL);
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    GameEndLayer.prototype.delayToScroll = function () {
        this.scrollDelta = Math.ceil(Model.levelModel.currentScore / 60);
        if (this.scrollDelta == 0) {
            this.scrollDelta = 1;
        }
        this.scoreIntervalID = egret.setInterval(this.scoreScroll, this, 16);
        this.score = 0;
        if (this.getGold > 0) {
            this.goldDelta = Math.ceil(this.getGold / 60);
            if (this.goldDelta == 0) {
                this.goldDelta = 1;
            }
            this.goldIntervalID = egret.setInterval(this.goldScroll, this, 16);
            this.gold = 0;
        }
        return;
    };
    GameEndLayer.prototype.scoreScroll = function () {
        this.score = this.score + this.scrollDelta;
        if (this.score >= Model.levelModel.currentScore) {
            this.score = Model.levelModel.currentScore;
            egret.clearInterval(this.scoreIntervalID);
        }
        this.scoreLabel.text = String(this.score);
        return;
    };
    GameEndLayer.prototype.goldScroll = function () {
        this.gold = this.gold + this.goldDelta;
        if (this.gold >= this.getGold) {
            this.gold = this.getGold;
            egret.clearInterval(this.goldIntervalID);
        }
        this.goldLabel.text = String(this.gold);
        return;
    };
    GameEndLayer.prototype.creatExpEffect = function (x, y) {
        var effect = new ExpEffect();
        effect.x = x;
        effect.y = y;
        this.node.addChild(effect);
        this.starSoundIndex = this.starSoundIndex + 1;
        return;
    };
    return GameEndLayer;
}(Scene));
__reflect(GameEndLayer.prototype, "GameEndLayer");
//# sourceMappingURL=GameEndLayer.js.map