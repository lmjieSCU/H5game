class GuideManager {

    public _talkPanel: TalkPanel;

    public container: egret.DisplayObjectContainer;

    public _maskPanel: GuideMask;

    public _guideArrow: GuideArrow;

    public static _instance: GuideManager;

    public static guideVO: GuideVO;

    public static _currentStep: number;

    public constructor() {
        return;
    }

    public setUp(arg1: GuideVO): void {
        GuideManager._currentStep = 0;
        GuideManager.guideVO = arg1;
        return;
    }

    public start(): void {
        GuideManager._currentStep = GuideManager._currentStep + 1;
        this.doGuide();
        return;
    }

    public reset() {
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
    }

    public doGuide(): void {
        if (GuideManager._currentStep > GuideManager.guideVO.totalStep && this.container.parent!=null) {
            this.container.parent.removeChild(this.container);
            return;
        }
        if (GuideManager._currentStep == GuideManager.guideVO.totalStep && Model.levelModel.selectedLevel == 1) {
            egret.setTimeout(this.nextStep, this, 2000);
        }
        let content = GuideManager.guideVO.content[(GuideManager._currentStep - 1)];
        let p1 = GuideManager.guideVO.p1[(GuideManager._currentStep - 1)];
        let p2 = GuideManager.guideVO.p2[(GuideManager._currentStep - 1)];
        let aimPoint = GuideManager.guideVO.aimPoints[(GuideManager._currentStep - 1)];
        //===============================对话框==================================================
        this._talkPanel.x = GuideManager.guideVO.x[(GuideManager._currentStep - 1)] * UI.WINSIZE_W;
        this._talkPanel.y = GuideManager.guideVO.y[(GuideManager._currentStep - 1)] * UI.WINSIZE_H;
        this._talkPanel.setContent(content);
        this._maskPanel.createMask(aimPoint);
        if (aimPoint.length > 0) {
            this._guideArrow.moveBetween(p1, p2);
        }
        return;
    }


    public nextStep(): void {
        GuideManager._currentStep = GuideManager._currentStep + 1;
        this._maskPanel.clear();
        this._guideArrow.clear();
        this.doGuide();
        return;
    }

    public static get instance(): GuideManager {
        if (GuideManager._instance == null) {
            GuideManager._instance = new GuideManager();
        }
        return GuideManager._instance;
    }

}
