class GameEndPanel extends BasePanel3D {
 
    public node: egret.Sprite;

    public close_btn: egret.Bitmap;

    public next_btn: egret.Bitmap;

    public replay2_btn: egret.Bitmap;

    public success: egret.Bitmap;

    public failed: egret.Bitmap;

    public scrollDelta: number;

    public score: number;

    public goldDelta: number;

    public gold: number;

    public getGold: number;

    public starSoundIndex: number;

    public scoreIntervalID: number;

    public goldIntervalID: number;

    public scoreLabel: egret.TextField; //得分

    public highscoreLabel: egret.TextField; //最高分

    public goldLabel: egret.TextField;  //目标分数


    public constructor() {
        super();
        //====================================容器==========================================
        this.node = new egret.Sprite();
        this.addChild(this.node);
        //====================================图片==========================================
        UI.addPic("endPanel_png", true, this.node);
        UI.addPic("endscoreinfo_png", true, this.node, -UI.WINSIZE_W / 6);
        this.success = UI.addPic("success_png", true, this.node, 0, -UI.WINSIZE_H / 4.2);
        this.failed = UI.addPic("failed_png", true, this.node, 0, -UI.WINSIZE_H / 4.2);
        //======================================按钮========================================
        this.next_btn = UI.addPic("next_btn_png", true, this.node, 0, UI.WINSIZE_H / 6);
        UI.addClickAction(this, this.next_btn, this.onNextBtnTouch);
        this.close_btn = UI.addPic("close_btn_png", true, this.node, UI.WINSIZE_W / 2.9, -UI.WINSIZE_H / 4.2);
        UI.addClickAction(this, this.close_btn, this.onCloseBtnTouch);
        this.replay2_btn = UI.addPic("replay2_btn_png", true, this.node, 0, UI.WINSIZE_H / 6);
        UI.addClickAction(this, this.replay2_btn, this.onreplayBtnTouch);
        //========================================坐标=======================================
        this.node.x = UI.WINSIZE_W / 2;
        //========================================文本=======================================
        egret.Tween.get(this.node).to({ "y": UI.WINSIZE_H / 2 }, 300).to({ "scaleX": 1.1, "scaleY": 0.9 }, 200).call(this.doUiAnimationEnd1, this);
        this.scoreLabel = UI.addText(this.node, "", true, 0, -UI.WINSIZE_H / 18);
        this.goldLabel = UI.addText(this.node, "", true, 0, UI.WINSIZE_H / 30);
        this.highscoreLabel = UI.addText(this.node, "", true, 0, UI.WINSIZE_H / 50);
        //=======================================更新数据=====================================
        if (Model.gameModel.score > Model.gameModel.highScore || isNaN(Model.gameModel.highScore)) {
            Model.gameModel.highScore = Model.gameModel.score;
        }
        this.highscoreLabel.text = Model.gameModel.highScore + "";
        if (Model.gameModel.isSuccess) //胜利
        {
            SoundCtrl.I.playmusic("game_win");
            let getStar = 0;
            let bigstar: egret.Bitmap = null;
            let cfg = Config.levelConfig.getLevel(Model.levelModel.selectedLevel);
            if (Model.gameModel.score >= cfg.needScore * 6) {
                getStar = 3;
            }
            else if (Model.gameModel.score >= cfg.needScore * 3) {
                getStar = 2;
            }
            else if (Model.gameModel.score >= cfg.needScore) {
                getStar = 1;
            }
            let i = 0;
            while (i < getStar) {
                bigstar = UI.addPic("bigstar_png", true, this);
                bigstar.x = 220 + i * 97;
                bigstar.y = 403;
                bigstar.scaleY = 2;
                bigstar.scaleX = 2;
                bigstar.visible = false;
                egret.Tween.get(bigstar).wait(i * 300 + 500).to({"visible":true},100).to({ "scaleX": 1, "scaleY": 1 }, 500);
                ++i;
            }
            this.success.visible = true;
            this.failed.visible = false;
            this.replay2_btn.visible = false;
            if (Model.levelModel.currentLevel == Model.levelModel.selectedLevel) {
                Model.levelModel.currentLevel = Model.levelModel.currentLevel + 1;
                if (Model.levelModel.currentLevel > Model.levelModel.totalLevel) {
                    Model.levelModel.currentLevel = Model.levelModel.totalLevel;
                }
            }
            let levelVO = Model.levelModel.getLevelVO(Model.levelModel.selectedLevel);
            levelVO.star = Math.max(getStar, levelVO.star);
            levelVO.highscore = Model.gameModel.highScore;
        }
        else //失败
        {
            this.success.visible = false;
            this.failed.visible = true;
            this.next_btn.visible = false;
            this.getGold = 0;
            SoundCtrl.I.playmusic("fail1");
        }
        egret.setTimeout(this.delayToScroll, this, 400);
        this.starSoundIndex = 0;
        Model.levelModel.saveData();
        return;
    }



    public show(arg1: any): void {
        super.show(arg1);
        return;
    }

    public onCloseBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }

    public onreplayBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    }

    public onNextBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.removeAll();
        Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelConfig.TOTAL_LEVEL);
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    }



    public delayToScroll(): void {
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
    }

    public scoreScroll(): void {
        this.score = this.score + this.scrollDelta;
        if (this.score >= Model.gameModel.score) {
            this.score = Model.gameModel.score;
            egret.clearInterval(this.scoreIntervalID);
        }
        this.scoreLabel.text = this.score + "";
        return;
    }

    public goldScroll(): void {
        this.gold = this.gold + this.goldDelta;
        if (this.gold >= this.getGold) {
            this.gold = this.getGold;
            egret.clearInterval(this.goldIntervalID);
        }
        this.goldLabel.text = this.gold + "";
        return;
    }

    public restartGame(): void {
        return;
    }

    public back(): void {
        return;
    }



    public doUiAnimationEnd1(): void {
        egret.Tween.get(this.node).to({ "scaleX": 1, "scaleY": 1 }, 100);
        return;
    }

}
