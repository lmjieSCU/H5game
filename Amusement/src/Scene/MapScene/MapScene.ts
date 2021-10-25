class MapScene extends Scene {


    public lvItems: Array<LevelItem>;

    public myscrollview: egret.ScrollView;

    public maps: Array<egret.Bitmap>;

    public lastPosition: number = 0;

    public content: egret.DisplayObjectContainer;

    public posX: Array<number>;

    public posY: Array<number>;

    public stageY: number;

    public _scrollRect: egret.Rectangle;


    public constructor() {
        super();
        this.lvItems = [];
        this.maps = [];
        this.posX = [
            0.65, 0.69, 0.59, 0.4, 0.3, 0.48, 0.7, 0.89, 0.92, 0.73, 0.51, 0.3, 0.14, 0.23, 0.41, 0.63, 0.75, 0.64,
            0.65, 0.81, 0.89, 0.73, 0.55, 0.36, 0.27, 0.44, 0.64, 0.81, 0.88, 0.75, 0.57, 0.38, 0.2, 0.25, 0.44, 0.66,
            0.85, 0.66, 0.47, 0.3, 0.22, 0.4, 0.61, 0.79, 0.8, 0.6, 0.4, 0.3, 0.5, 0.73, 0.86, 0.68, 0.48, 0.28,
            0.28, 0.49, 0.67, 0.85, 0.66, 0.44, 0.23, 0.21, 0.42, 0.62, 0.79, 0.89, 0.78, 0.56, 0.34, 0.25, 0.33, 0.49,
        ];
        this.posY = [
            0.96, 0.86, 0.77, 0.73, 0.64, 0.58, 0.57, 0.54, 0.45, 0.39, 0.42, 0.44, 0.37, 0.28, 0.25, 0.23, 0.14, 0.04,
            0.88, 0.84, 0.75, 0.71, 0.71, 0.69, 0.6, 0.55, 0.52, 0.5, 0.4, 0.35, 0.34, 0.33, 0.29, 0.19, 0.14, 0.1,
            0.94, 0.9, 0.87, 0.83, 0.71, 0.66, 0.63, 0.59, 0.49, 0.45, 0.43, 0.35, 0.3, 0.26, 0.16, 0.11, 0.09, 0.04,
            0.94, 0.9, 0.87, 0.79, 0.72, 0.71, 0.69, 0.59, 0.54, 0.51, 0.46, 0.36, 0.26, 0.27, 0.29, 0.21, 0.12, 0.04,
        ];
        return;
    }

    public onEnter() {
        this.init2();
    }

    public onExit() {

    }

    public init2(): void {
        let loc3 = 0;
        let loc6 = 0;
        let loc7: egret.Bitmap = null;
        this.content = new egret.DisplayObjectContainer();
        this.addChild(this.content);
        let pages = Math.ceil(330 / 18);//一页18关
        loc3 = 1;
        while (loc3 <= pages) {
            loc6 = (loc3 - 1) % 4 + 1;
            loc7 = UI.addPic("map_" + loc6 + "_png", false, this.content, 0, (1 - loc3) * UI.WINSIZE_H);
            this.maps.push(loc7);
            ++loc3;
        };
        this.show2();
        this._scrollRect = new egret.Rectangle(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        this.content.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onscroll, this);
        this.content.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.content.$setTouchEnabled(true);
        let setting = new SettingPanel();
        this.addChild(setting);
    }

    public onscroll(e: egret.TouchEvent) {
        if (e.stageY - this.stageY > 0) {
            if (this._scrollRect.y > (1 - Math.ceil(330 / 18)) * UI.WINSIZE_H + 15) {
                this._scrollRect.y -= 15;
            } else {
                this._scrollRect.y = (1 - Math.ceil(330 / 18)) * UI.WINSIZE_H;
            }
        }//向下移动
        else if (e.stageY - this.stageY < 0) {
            if (this._scrollRect.y < -15) {
                this._scrollRect.y += 15;
            } else {
                this._scrollRect.y = 0;
            }

        }
        this.content.scrollRect = this._scrollRect;
        this.stageY = e.stageY;
        return;
    }

    public onBegin(e: egret.TouchEvent) {
        this.stageY = e.stageY;
        return;
    }



    public show2(): void {
        let loc1: LevelItem = null;
        let level = 0;
        level = (this.lvItems.length - 1);
        while (level >= 0) {
            loc1 = this.lvItems[level];
            loc1.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTouch, this);
            loc1.parent.removeChild(loc1);
            this.lvItems.splice(level, 1);
            --level;
        }
        level = 1;
        while (level <= 330) {
            loc1 = new LevelItem(level);
            loc1.x = this.posX[(level - 1) % 72] * UI.WINSIZE_W;
            loc1.y = (this.posY[(level - 1) % 72] - Math.floor((level - 1) / 18) % 4) * UI.WINSIZE_H - Math.floor((level - 1) / 72) * UI.WINSIZE_H * 4;
            loc1.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTouch, this);
            this.lvItems.push(loc1);
            this.content.addChild(loc1);
            ++level;
        }
        let soon = UI.addPic("soon1_png", true, this.content, UI.WINSIZE_W / 2, -UI.WINSIZE_H * (-1.3 + Math.ceil(330 / 18)));
        UI.setscalXandY(soon, 2,2);
        return;
    }


    public onBtnTouch(e: egret.TouchEvent): void {
        Model.levelModel.selectedLevel = e.target.parent.id;
        SoundCtrl.I.playmusic("button_down");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    }


}
