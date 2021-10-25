class MatchLayer extends Scene {
    public matchcode: number;
    public matchType: string;
    // public logTxt: egret.TextField;
    public static instance: MatchLayer;
    public hero: string;

    public constructor(matchcode: number = -1) {
        super();
        this.matchcode = matchcode;
        if (this.matchcode == -1) {
            this.matchType = "matchRoom";
        } else {
            this.matchType = "matchPlayers";
        }
        // UserInfo.playerInfo.customProfile = hero;
        return;
    }

    public onEnter() {
        MatchLayer.instance = this;
        RoomManager.getInstance().AddRoom();
        // let bg: egret.Bitmap = UI.addPic(this, "loadingChunli_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // bg.scaleX = UI.WINSIZE_W/ bg.width; bg.scaleY = bg.scaleX;
        let bg: egret.Bitmap = UI.addBg(this, "loadingChunli_png")
        // this.logTxt = UI.addText(this, "init success", 10, 70);
        UI.addText(this, "MatchLayer\n正在匹配...", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        let cancle_btn = UI.addText(this, "取消匹配", UI.WINSIZE_W / 2, UI.WINSIZE_H * 0.8, true);
        UI.addClickAction(this, cancle_btn, function () {
            this.CancelMatch();
            this.destroy();
        });
        //开始口令匹配
        this.OnMatch();
    }

    public destroy() {
        this.stage.removeChild(this);
        MatchLayer.instance = null;
        FightReady.instance.touchChildren = true;
    }

    //开始匹配
    private OnMatch() {
        switch (this.matchType) {
            case "matchPlayers":
                RoomManager.getInstance().matchPlayers(this.matchcode);
                break;
            case "matchRoom":
                RoomManager.getInstance().matchRoom();
                break;
        }
    }

    //取消匹配
    private CancelMatch() {
        switch (this.matchType) {
            case "matchPlayers":
                RoomManager.getInstance().CancelmatchPlayers();
                break;
            case "matchRoom":
                RoomManager.getInstance().CancelmatchRoom();
                break;
        }
    }

    public onExit() {

    }
}