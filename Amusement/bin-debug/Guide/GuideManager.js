var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GuideManager = (function () {
    function GuideManager() {
        return;
    }
    GuideManager.prototype.setUp = function (arg1) {
        GuideManager._currentStep = 0;
        GuideManager.guideVO = arg1;
        return;
    };
    GuideManager.prototype.start = function () {
        GuideManager._currentStep = GuideManager._currentStep + 1;
        this.doGuide();
        return;
    };
    GuideManager.prototype.reset = function () {
        if (this.container != null && this.container.parent != null) {
            this.container.parent.removeChild(this.container);
        }
        this.container = new egret.DisplayObjectContainer();
        this._maskPanel = new GuideMask();
        this.container.addChild(this._maskPanel);
        this._talkPanel = new TalkPanel();
        this.container.addChild(this._talkPanel);
        this._guideArrow = new GuideArrow();
        this.container.addChild(this._guideArrow);
    };
    GuideManager.prototype.doGuide = function () {
        if (GuideManager._currentStep > GuideManager.guideVO.totalStep && this.container.parent != null) {
            this.container.parent.removeChild(this.container);
            return;
        }
        if (GuideManager._currentStep == GuideManager.guideVO.totalStep && Model.levelModel.selectedLevel == 1) {
            egret.setTimeout(this.nextStep, this, 2000);
        }
        var content = GuideManager.guideVO.content[(GuideManager._currentStep - 1)];
        var p1 = GuideManager.guideVO.p1[(GuideManager._currentStep - 1)];
        var p2 = GuideManager.guideVO.p2[(GuideManager._currentStep - 1)];
        var aimPoint = GuideManager.guideVO.aimPoints[(GuideManager._currentStep - 1)];
        //===============================对话框==================================================
        this._talkPanel.x = GuideManager.guideVO.x[(GuideManager._currentStep - 1)] * UI.WINSIZE_W;
        this._talkPanel.y = GuideManager.guideVO.y[(GuideManager._currentStep - 1)] * UI.WINSIZE_H;
        this._talkPanel.setContent(content);
        this._maskPanel.createMask(aimPoint);
        if (aimPoint.length > 0) {
            this._guideArrow.moveBetween(p1, p2);
        }
        return;
    };
    GuideManager.prototype.nextStep = function () {
        GuideManager._currentStep = GuideManager._currentStep + 1;
        this._maskPanel.clear();
        this._guideArrow.clear();
        this.doGuide();
        return;
    };
    Object.defineProperty(GuideManager, "instance", {
        get: function () {
            if (GuideManager._instance == null) {
                GuideManager._instance = new GuideManager();
            }
            return GuideManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    return GuideManager;
}());
__reflect(GuideManager.prototype, "GuideManager");
//# sourceMappingURL=GuideManager.js.map