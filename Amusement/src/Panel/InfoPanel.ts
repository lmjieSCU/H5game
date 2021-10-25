class InfoPanel extends Elements {

    public score_txt: egret.BitmapText;

    public stepLabel: egret.BitmapText;

    public timeLabel: egret.BitmapText;

    public levelLabel: egret.BitmapText;

    public pause_btn: egret.Bitmap;

    public timeIcon: egret.Bitmap;

    public stepIcon: egret.Bitmap;

    public progress: HProgressBar;

    public aimLabelDict: Dicts;

    public aimIconDict: Dicts;

    public scoreAim: number;

    public static instance: InfoPanel;


    public constructor() {
        super();
        this.aimLabelDict = new Dicts();
        this.aimIconDict = new Dicts();
        this.progress = new HProgressBar();
        UI.setXandY(this.progress, UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 10 + 30);
        this.addChild(this.progress);
        this.progress.ratio = 0;
        this.pause_btn = UI.addPic("pause_btn_png", true, this, UI.WINSIZE_W * 3 / 4 + this.progress.width * 3 / 4, this.progress.y);
        UI.addClickAction(this, this.pause_btn, this.onPause);
        let InfoPanel = UI.addPic("infopanel_png", false, this);
        UI.setscalXandY(InfoPanel, 1, 1.5);
        this.stepIcon = UI.addPic("step_png", false, this, UI.WINSIZE_W / 8, 10);
        UI.setscalXandY(this.stepIcon, 1.3, 1.3);
        this.timeIcon = UI.addPic("clock_png", false, this, UI.WINSIZE_W / 8 + 15, 15);
        let score = UI.addPic("score_png", false, this, UI.WINSIZE_W * 4 / 5, 10);
        UI.setscalXandY(score, 1.3, 1.3);
        this.stepLabel = UI.addBitText(this, 0, "info_fnt", true, UI.WINSIZE_W / 8 + 25, 60);
        this.timeLabel = UI.addBitText(this, 0, "info_fnt", true, UI.WINSIZE_W / 8 + 25, 60);
        this.score_txt = UI.addBitText(this, 0, "info_fnt", true, UI.WINSIZE_W * 4 / 5 + 25, 60);
        let levelimg = UI.addPic("levelimg_png", true, this, UI.WINSIZE_W / 2 - 100, InfoPanel.height + 20);
        UI.setscalXandY(levelimg, 1.5, 1.5);
        this.levelLabel = UI.addBitText(this, 0, "glevel_fnt", true, levelimg.x + levelimg.width / 2 + 50, levelimg.y, 1.3, 1.3)
        //========================================监听事件=====================================================
        EventManager.addEventListener(GameEvents.AIMS_CHANGE, this.onAimChange, this);
        EventManager.addEventListener(GameEvents.SCORE_CHANGE, this.onScoreChange, this);
        EventManager.addEventListener(GameEvents.STEP_CHANGE, this.onStepChange, this);
        EventManager.addEventListener(GameEvents.TIME_CHANGE, this.onTimeChange, this);

        return;
    }

    public onPause(): void {
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_PAUSE_UI));
        return;
    }


    public onTimeChange(e: egret.Event): void {
        this.timeLabel.text = String(Model.gameModel.time);
        GameCtrl.I.freshTextFieldAnchorOff(this.timeLabel);
        return;
    }


    public onAimChange(e: egret.Event): void {
        let arg1 = e.data;
        if (arg1.type == AimType.SCORE) {
            return;
        }
        InfoPanel.instance.aimLabelDict.dict[arg1.type].text = arg1.orgValue - arg1.value + "";
        return;
    }

    public onScoreChange(e: egret.Event): void {
        this.score_txt.text = String(Model.gameModel.score);
        GameCtrl.I.freshTextFieldAnchorOff(this.score_txt);
        if (!isNaN(this.scoreAim)) {
            this.progress.ratio = Model.gameModel.score / (this.scoreAim * 6);
        } else {
            let total = 0;
            let got = 0;
            for (let loc in Model.gameModel.aimTarget.dict) {
                total = total + Model.gameModel.aimTarget.dict[loc];
                got = got + Model.gameModel.aimObtained.dict[loc];
            }
            this.progress.ratio = got / total;
        }

        return;
    }

    public onStepChange(e: egret.Event): void {
        this.stepLabel.text = String(Model.gameModel.step);
        GameCtrl.I.freshTextFieldAnchorOff(this.stepLabel);
        return;
    }

    /**初始化关卡信息
     * 总时间/总步数
     * 通关要求
     */
    public setInfo(levelco: LevelCO): void {
        let loc6 = null;
        let loc7 = 0;
        let loc8 = 0;
        this.scoreAim = levelco.needScore;
        this.levelLabel.text = String(Model.levelModel.selectedLevel);
        for (let loc2 in this.aimIconDict.dict) {
            this.aimIconDict.dict[loc2].parent.removeChild(this.aimIconDict.dict[loc2]);
            delete this.aimIconDict.dict[loc2];
        }
        for (let loc2 in this.aimLabelDict.dict) {
            this.aimLabelDict.dict[loc2].parent.removeChild(this.aimLabelDict.dict[loc2]);
            delete this.aimLabelDict.dict[loc2];
        }
        this.aimLabelDict.clear();
        this.aimIconDict.clear();
        //移除上一关通关要求
        if (levelco.mode != GameMode.NORMAL) {
            if (levelco.mode == GameMode.TIME) {
                this.stepLabel.visible = false;
                this.timeLabel.visible = true;
                Model.gameModel.time = levelco.step + 15;
                this.stepIcon.visible = false;
                this.timeIcon.visible = true;
            }
        }
        else {
            this.stepLabel.visible = true;
            this.timeLabel.visible = false;
            Model.gameModel.step = levelco.step + 10;
            this.stepIcon.visible = true;
            this.timeIcon.visible = false;
        }
        let loc3 = 0;
        if (levelco.aim.length != 1) {
            if (levelco.aim.length != 2) {
                if (levelco.aim.length == 3) {
                    loc3 = 200;
                }
            }
            else {
                loc3 = 240;
            }
        }
        else {
            loc3 = 300;
        }
        let loc4 = 0;
        while (loc4 < levelco.aim.length) {
            loc6 = levelco.aim[loc4].split(",");
            loc7 = Number(loc6[0]);
            loc8 = Number(loc6[1]);
            Model.gameModel.addAim(loc7, loc8);
            let needAim = UI.addPic(AimType.AIM_ICONS[loc7] + "_png", true);
            if (loc7 != AimType.SCORE) {
                needAim.scaleY = 0.6;
                needAim.scaleX = 0.6;
            }
            needAim.x = loc3 + loc4 * 80 + 20;
            needAim.y = UI.WINSIZE_H / 20;
            this.addChild(needAim);
            this.aimIconDict.put(loc7, needAim);
            let neednum = UI.addBitText(this, loc8, "info_fnt", true, needAim.x + 35, needAim.y);
            this.aimLabelDict.put(loc7, neednum);
            ++loc4;
        }

        return;
    }

    /**获得目标坐标 */
    public getIconPos(arg1: number): egret.Point {
        if (this.aimIconDict.dict[arg1] != undefined) {
            return new egret.Point(this.aimIconDict.dict[arg1].x, this.aimIconDict.dict[arg1].y);
        }
        return null;
    }

    public dispose(): void {
        for (let loc1 in this.aimIconDict.dict) {
            this.aimIconDict.dict[loc1].parent.removeChild(this.aimIconDict.dict[loc1])
        }
        for (let loc1 in this.aimLabelDict.dict) {
            this.aimLabelDict.dict[loc1].parent.removeChild(this.aimLabelDict.dict[loc1])
        }
        this.aimIconDict.clear();
        this.aimLabelDict.clear();
        EventManager.removeEventListener(GameEvents.AIMS_CHANGE, this.onAimChange);
        EventManager.removeEventListener(GameEvents.SCORE_CHANGE, this.onScoreChange);
        EventManager.removeEventListener(GameEvents.STEP_CHANGE, this.onStepChange);
        EventManager.removeEventListener(GameEvents.TIME_CHANGE, this.onTimeChange);
    }
}
