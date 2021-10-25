class LoadResScene extends Scene {
    public static Instance: LoadResScene;
    public textField: egret.TextField;
    public urlRes: Subcontractor = null;
    public _ExitLoadRes: boolean = false;//资源已加载完毕


    public constructor(playInfo: PlayInfo) {
        super();
        LoadResScene.Instance = this;
        this.playInfo = playInfo;
    }

    public playInfo: PlayInfo;
    public onEnter() {
        // let bg: egret.Bitmap = UI.addPic(this, "loadingChunli_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // bg.scaleX = UI.WINSIZE_W/bg.width;
        // bg.scaleY = bg.scaleX;
        let bg: egret.Bitmap = UI.addBg(this, "loadingChunli_png")
        // this.textField = UI.addText(this, "资源加载中...", UI.WINSIZE_W / 2, UI.WINSIZE_H - 120, true, 22, 0xffffff);
        this.urlRes = new Subcontractor();
        let lst: Array<string> = [];
        lst.push("effects");
        lst.push("fightui");
        let hero1 = "role" + (this.playInfo.p1.split("_")[0].split(" ")[1] == "Type2"?this.playInfo.p1.split("_")[1]:this.playInfo.p1.split("_")[0].split(" ")[1]);
        let hero2 = "role" + (this.playInfo.p2.split("_")[0].split(" ")[1] == "Type2"?this.playInfo.p2.split("_")[1]:this.playInfo.p2.split("_")[0].split(" ")[1]);
        lst.push(hero1);
        if(hero1 != hero2) lst.push(hero2);
        this.urlRes.Initialization(this, lst, () => {
            //加载资源成功后进入下一页
            if(this.playInfo.type != Main.PVP_online) {
                FightLoading.instace.p1Success = true;
                console.log(FightLoading.instace.p1Success);
            }
            else {
                const d = {
                    type: 'waitSuccess',
                    player: this.playInfo.player,
                    status: true
                }
                const sendFramePara = { data: d };
                RoomManager.instance.room.sendFrame(sendFramePara);
            }
        }, true);
        this.urlRes.LoadRes();
    }
    public onExit() {
        // LoadResScene.Instance = null;
    }

}