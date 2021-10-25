class ShopLayer extends Scene {

    public playBtn: egret.Bitmap;

    public node: egret.DisplayObjectContainer;

    public close_btn: egret.Bitmap;

    public levelLabel: egret.BitmapText;

    public goldLabel: egret.BitmapText;

    public items: Array<any>;

    constructor() {
        super();
        return;
    }


    public onEnter() {
        SceneManager.getInstance().currScene.$setTouchEnabled(false);
        this.$setTouchEnabled(true);
        this.items = [];
        this.node = new egret.DisplayObjectContainer();
        this.addChild(this.node);
        let panel = UI.addPic("shopPanel_png", true, this.node);
        UI.addPic("res.goldBoarder", true, this.node, -70, -panel.height / 2.3);
        UI.addPic("res.shoptitle", true, this.node, 0, -panel.height / 2.2);
        UI.addPic("res.daojugoumai", true, this.node, -panel.width / 3.3, -130);
        let play = UI.addPic("res.play2_btn", true, this.node, 0, panel.height / 2.5);
        let close = UI.addPic("res.close_btn", true, this.node, panel.width / 2, -panel.height / 2.5);
        UI.addClickAction(this, play, this.onPlayBtnTouch);
        UI.addClickAction(this, close, this.onCloseBtnTouch);
        this.node.x = UI.WINSIZE_W / 2;
        egret.Tween.get(this.node).to({ "y": UI.WINSIZE_H / 2 }, 500).to({ "scaleX": 1.1, "scaleY": 0.9 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500);
        this.levelLabel = UI.addBitText(this.node, 0, "info_fnt", false, -20, -panel.height / 2.15);
        this.levelLabel.textAlign = "center"; this.levelLabel.text = Model.levelModel.selectedLevel + "";
        this.goldLabel = UI.addBitText(this.node, 0, "info_fnt", false, -30, -panel.height / 1.75);
        this.goldLabel.textAlign = "left"; this.goldLabel.text = Model.diamondModel.diamond + "";
        let loc1 = Model.levelModel.getLevelVO(Model.levelModel.selectedLevel);
        for (let loc2 = 0; loc2 < loc1.star; loc2++) {
            let star = UI.addPic("res.bigstar", true, this.node, loc2 * 108 - 108, -222);
            UI.setscalXandY(star, 1.5, 1.5);
        }

        let loc3 = Config.levelCfgParser.getLevelCfg(Model.levelModel.selectedLevel);
        // if (loc3 == null) {
        //     com.popchan.debug.Debug.debugToBrowser("cfg2=null");
        // }
        var loc4: ShopItem = null;
        var loc5 = 0;
        var loc6: PropCfg = null;
        for (let loc2 = 0; loc2 < loc3.props.length; loc2++) {
            (loc4 = new ShopItem()).x = -panel.width / 3.4;
            loc4.y = -50 + loc2 * 100;
            this.node.addChild(loc4);
            loc5 = Number(loc3.props[loc2]);
            loc6 = Config.propCfgParser.getPropCfg(loc5);
            loc4.setData(loc6);
            this.items.push(loc4);
        }
        return;

    }


    public updateInfo(): void {
        for (let loc in this.items) {
            let loc1 = this.items[loc];
            loc1.updateInfo();
        }
        this.goldLabel.text = Model.diamondModel.diamond + "";
        return;
    }

    public onCloseBtnTouch(arg1: egret.Event): void {
        SoundCtrl.getInstance().playmusic("anniu");
        if (this.parent) {
            this.parent.removeChild(this);
        }
        return;
    }

    public onPlayBtnTouch(arg1: egret.Event): void {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    }

    public onExit() {
        SceneManager.getInstance().currScene.$setTouchEnabled(true);
    }
}