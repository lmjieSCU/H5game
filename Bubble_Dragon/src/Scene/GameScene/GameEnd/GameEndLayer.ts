class GameEndLayer extends Scene {

    public node: egret.DisplayObjectContainer;

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

    public scoreLabel: egret.BitmapText;

    public highscoreLabel: egret.BitmapText;

    public goldLabel: egret.BitmapText;

    public bigStars: Array<egret.Bitmap>;

    public constructor() {
        super();
        this.node = new egret.DisplayObjectContainer();
        this.addChild(this.node);
        this.bigStars = new Array<egret.Bitmap>();
        return;
    }


    public onEnter() {
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
        this.scoreLabel = UI.addBitText(this.node,"","info_fnt",true,0, -100);
        this.scoreLabel.textAlign = "left";
        this.goldLabel = UI.addBitText(this.node,"","info_fnt",true,0, 60);
        this.goldLabel.textAlign = "left";
        this.highscoreLabel = UI.addBitText(this.node,"","info_fnt",true,0, -20);
        this.highscoreLabel.textAlign = "left";
        this.highscoreLabel.text = String(Model.levelModel.currentHighScore);
        SoundCtrl.getInstance().stopMusic();
        SoundCtrl.getInstance().stopBgMusic();
        let getStar = 0;
        if (Model.levelModel.isSuccess) {
            SoundCtrl.getInstance().playmusic("game_win");
            getStar = 0;
            let cfg = Config.levelCfgParser.getLevelCfg(Model.levelModel.selectedLevel);
            if (Model.levelModel.currentScore >= Number(cfg.starLevels[2])) {
                getStar = 3;
            }
            else if (Model.levelModel.currentScore >= Number(cfg.starLevels[1])) {
                getStar = 2;
            }
            else if (Model.levelModel.currentScore >= Number(cfg.starLevels[0])) {
                getStar = 1;
            }
            for (let i = 0; i < getStar; i++) {
                this.bigStars[i] = UI.addPic("res.bigstar", true, this.node);
                this.bigStars[i].x = -100 + i * 96;
                this.bigStars[i].y = -185;
                this.bigStars[i].scaleY = 2;
                this.bigStars[i].scaleX = 2;
                this.bigStars[i].visible = false;
                egret.Tween.get(this.bigStars[i]).wait(i * 300 + 500).to({ "visible": true }, 100).to({ "scaleX": 1.2, "scaleY": 1.2 }, 500);
                egret.setTimeout(function () {
                    this.creatExpEffect(this.bigStars[i].x, this.bigStars[i].y);
                    return;
                }, this, i * 300 + 1200);
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
            let levelVO = Model.levelModel.getLevelVO(Model.levelModel.selectedLevel);
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
    }

    // public ontouch(e: egret.TouchEvent) {
    //     this.bigStars[0].x = e.stageX - this.node.x;
    //     this.bigStars[0].y = e.stageY - this.node.y;
    //     console.log(this.bigStars[0].x, this.bigStars[0].y);
    // }


    public onExit() {

    }

    public onCloseBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }

    public onreplayBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }

    public onNextBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.getInstance().playmusic("anniu");
        Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelCfgParser.TOTAL_LEVEL);
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }




    public delayToScroll(): void {
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
    }

    public scoreScroll(): void {
        this.score = this.score + this.scrollDelta;
        if (this.score >= Model.levelModel.currentScore) {
            this.score = Model.levelModel.currentScore;
            egret.clearInterval(this.scoreIntervalID);
        }
        this.scoreLabel.text = String(this.score);
        return;
    }

    public goldScroll(): void {
        this.gold = this.gold + this.goldDelta;
        if (this.gold >= this.getGold) {
            this.gold = this.getGold;
            egret.clearInterval(this.goldIntervalID);
        }
        this.goldLabel.text = String(this.gold);
        return;
    }



    public creatExpEffect(x: number, y: number): void {
        let effect = new ExpEffect();
        effect.x = x;
        effect.y = y;
        this.node.addChild(effect);
        this.starSoundIndex = this.starSoundIndex + 1;
        return;
    }


}
