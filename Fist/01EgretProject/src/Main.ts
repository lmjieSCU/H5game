class Main extends egret.DisplayObjectContainer {
    public static entryAlready: boolean = false;
    public static loadResAlready: boolean = false;   //预加载资源
    //
    public static androidVideoCallback: any; //激励视频的回调
    public static androidVideoParent: any;   //激励视频父
    public static fixed_Width: number = 854;
    public static PVP_offline: string = "PVP_offline";
    public static PVP_online: string = "PVP_online";
    public static PVE: string = "pve";
    public static EVE: string = "eve";
    public static UIT1 = 'guofeng';
    public static UIT2 = 'pengke';
    public static UItype = Main.UIT2;//ui风格
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    //
    private onAddToStage(event: egret.Event) {
        RES.setMaxLoadingThread(1);
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })

    }


    private async runGame() {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loading");
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        Main.entryAlready = true;
        UI.WINSIZE_W = egret.MainContext.instance.stage.stageWidth;
        UI.WINSIZE_H = egret.MainContext.instance.stage.stageHeight;
        this.stage.frameRate = 30;//45
        SceneManager.getInstance().ChangeRoot(this);
        GameRender.I.initlize(this.stage);  //增加enterframe帧驱动
        // SceneManager.getInstance().ChangeScene(new Home());
        let playInfo = {
            map: 9, life: 500, powerMax: 3, p1: 'new Type2_Kula_Player()', p2: "new K_AI_Lv5(1)", player: 1, time: 0, type: 'pve',
            p1SkillList: null, p2SkillList: null
        }
        FightMainRender.getInstance().initlize();
        SceneManager.getInstance().ChangeScene(new LoadResScene(playInfo));
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}
