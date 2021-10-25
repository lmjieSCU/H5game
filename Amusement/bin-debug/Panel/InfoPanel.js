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
var InfoPanel = (function (_super) {
    __extends(InfoPanel, _super);
    function InfoPanel() {
        var _this = _super.call(this) || this;
        _this.aimLabelDict = new Dicts();
        _this.aimIconDict = new Dicts();
        _this.progress = new HProgressBar();
        UI.setXandY(_this.progress, UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 10 + 30);
        _this.addChild(_this.progress);
        _this.progress.ratio = 0;
        _this.pause_btn = UI.addPic("pause_btn_png", true, _this, UI.WINSIZE_W * 3 / 4 + _this.progress.width * 3 / 4, _this.progress.y);
        UI.addClickAction(_this, _this.pause_btn, _this.onPause);
        var InfoPanel = UI.addPic("infopanel_png", false, _this);
        UI.setscalXandY(InfoPanel, 1, 1.5);
        _this.stepIcon = UI.addPic("step_png", false, _this, UI.WINSIZE_W / 8, 10);
        UI.setscalXandY(_this.stepIcon, 1.3, 1.3);
        _this.timeIcon = UI.addPic("clock_png", false, _this, UI.WINSIZE_W / 8 + 15, 15);
        var score = UI.addPic("score_png", false, _this, UI.WINSIZE_W * 4 / 5, 10);
        UI.setscalXandY(score, 1.3, 1.3);
        _this.stepLabel = UI.addBitText(_this, 0, "info_fnt", true, UI.WINSIZE_W / 8 + 25, 60);
        _this.timeLabel = UI.addBitText(_this, 0, "info_fnt", true, UI.WINSIZE_W / 8 + 25, 60);
        _this.score_txt = UI.addBitText(_this, 0, "info_fnt", true, UI.WINSIZE_W * 4 / 5 + 25, 60);
        var levelimg = UI.addPic("levelimg_png", true, _this, UI.WINSIZE_W / 2 - 100, InfoPanel.height + 20);
        UI.setscalXandY(levelimg, 1.5, 1.5);
        _this.levelLabel = UI.addBitText(_this, 0, "glevel_fnt", true, levelimg.x + levelimg.width / 2 + 50, levelimg.y, 1.3, 1.3);
        //========================================监听事件=====================================================
        EventManager.addEventListener(GameEvents.AIMS_CHANGE, _this.onAimChange, _this);
        EventManager.addEventListener(GameEvents.SCORE_CHANGE, _this.onScoreChange, _this);
        EventManager.addEventListener(GameEvents.STEP_CHANGE, _this.onStepChange, _this);
        EventManager.addEventListener(GameEvents.TIME_CHANGE, _this.onTimeChange, _this);
        return _this;
    }
    InfoPanel.prototype.onPause = function () {
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_PAUSE_UI));
        return;
    };
    InfoPanel.prototype.onTimeChange = function (e) {
        this.timeLabel.text = String(Model.gameModel.time);
        GameCtrl.I.freshTextFieldAnchorOff(this.timeLabel);
        return;
    };
    InfoPanel.prototype.onAimChange = function (e) {
        var arg1 = e.data;
        if (arg1.type == AimType.SCORE) {
            return;
        }
        InfoPanel.instance.aimLabelDict.dict[arg1.type].text = arg1.orgValue - arg1.value + "";
        return;
    };
    InfoPanel.prototype.onScoreChange = function (e) {
        this.score_txt.text = String(Model.gameModel.score);
        GameCtrl.I.freshTextFieldAnchorOff(this.score_txt);
        if (!isNaN(this.scoreAim)) {
            this.progress.ratio = Model.gameModel.score / (this.scoreAim * 6);
        }
        else {
            var total = 0;
            var got = 0;
            for (var loc in Model.gameModel.aimTarget.dict) {
                total = total + Model.gameModel.aimTarget.dict[loc];
                got = got + Model.gameModel.aimObtained.dict[loc];
            }
            this.progress.ratio = got / total;
        }
        return;
    };
    InfoPanel.prototype.onStepChange = function (e) {
        this.stepLabel.text = String(Model.gameModel.step);
        GameCtrl.I.freshTextFieldAnchorOff(this.stepLabel);
        return;
    };
    /**初始化关卡信息
     * 总时间/总步数
     * 通关要求
     */
    InfoPanel.prototype.setInfo = function (levelco) {
        var loc6 = null;
        var loc7 = 0;
        var loc8 = 0;
        this.scoreAim = levelco.needScore;
        this.levelLabel.text = String(Model.levelModel.selectedLevel);
        for (var loc2 in this.aimIconDict.dict) {
            this.aimIconDict.dict[loc2].parent.removeChild(this.aimIconDict.dict[loc2]);
            delete this.aimIconDict.dict[loc2];
        }
        for (var loc2 in this.aimLabelDict.dict) {
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
        var loc3 = 0;
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
        var loc4 = 0;
        while (loc4 < levelco.aim.length) {
            loc6 = levelco.aim[loc4].split(",");
            loc7 = Number(loc6[0]);
            loc8 = Number(loc6[1]);
            Model.gameModel.addAim(loc7, loc8);
            var needAim = UI.addPic(AimType.AIM_ICONS[loc7] + "_png", true);
            if (loc7 != AimType.SCORE) {
                needAim.scaleY = 0.6;
                needAim.scaleX = 0.6;
            }
            needAim.x = loc3 + loc4 * 80 + 20;
            needAim.y = UI.WINSIZE_H / 20;
            this.addChild(needAim);
            this.aimIconDict.put(loc7, needAim);
            var neednum = UI.addBitText(this, loc8, "info_fnt", true, needAim.x + 35, needAim.y);
            this.aimLabelDict.put(loc7, neednum);
            ++loc4;
        }
        return;
    };
    /**获得目标坐标 */
    InfoPanel.prototype.getIconPos = function (arg1) {
        if (this.aimIconDict.dict[arg1] != undefined) {
            return new egret.Point(this.aimIconDict.dict[arg1].x, this.aimIconDict.dict[arg1].y);
        }
        return null;
    };
    InfoPanel.prototype.dispose = function () {
        for (var loc1 in this.aimIconDict.dict) {
            this.aimIconDict.dict[loc1].parent.removeChild(this.aimIconDict.dict[loc1]);
        }
        for (var loc1 in this.aimLabelDict.dict) {
            this.aimLabelDict.dict[loc1].parent.removeChild(this.aimLabelDict.dict[loc1]);
        }
        this.aimIconDict.clear();
        this.aimLabelDict.clear();
        EventManager.removeEventListener(GameEvents.AIMS_CHANGE, this.onAimChange);
        EventManager.removeEventListener(GameEvents.SCORE_CHANGE, this.onScoreChange);
        EventManager.removeEventListener(GameEvents.STEP_CHANGE, this.onStepChange);
        EventManager.removeEventListener(GameEvents.TIME_CHANGE, this.onTimeChange);
    };
    return InfoPanel;
}(Elements));
__reflect(InfoPanel.prototype, "InfoPanel");
//# sourceMappingURL=InfoPanel.js.map