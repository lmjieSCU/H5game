class ChooseScene extends Scene {
    public constructor(player: number = 1, type: string = Main.PVE, AI: string = "K|1") {
        super();
        this.playInfo.player = player;
        this.playInfo.type = type;
        if (this.playInfo.type == Main.PVE) {
            const ai = AI.split("|");
            this.playInfo.p2 = `new ${ai[0]}_AI_Lv5(${ai[1]})`;
        }
        this.AI = AI;
    }

    private AI: string;

    private player2 = [
        { id: "roleK", name: "k", resouce: "new K_Player()" },
        { id: "roleTerry", name: "terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "chunli", resouce: "new Chunli_Player()" },
        { id: "Type2_roleK", name: "k", resouce: "new Type2_K_Player()" },
        { id: "Type2_roleTerry", name: "terry", resouce: "new Type2_Terry_Player()" },
        { id: "Type2_roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()" },
        { id: "Type2_roleChunli", name: "chunli", resouce: "new Type2_Chunli_Player()" },
    ]

    private player1 = [
        { id: "roleK", name: "k", resouce: "new K_Player()" },
        { id: "roleTerry", name: "terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "chunli", resouce: "new Chunli_Player()" },
        { id: "Type2_roleK", name: "k", resouce: "new Type2_K_Player()" },
        { id: "Type2_roleTerry", name: "terry", resouce: "new Type2_Terry_Player()" },
        { id: "Type2_roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()" },
        { id: "Type2_roleChunli", name: "chunli", resouce: "new Type2_Chunli_Player()" },
    ]

    private allHero = [
        { id: "roleK", name: "k", resouce: "new K_Player()" },
        { id: "roleTerry", name: "terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "chunli", resouce: "new Chunli_Player()" },
        { id: "Type2_roleK", name: "k", resouce: "new Type2_K_Player()" },
        { id: "Type2_roleTerry", name: "terry", resouce: "new Type2_Terry_Player()" },
        { id: "Type2_roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()" },
        { id: "Type2_roleChunli", name: "chunli", resouce: "new Type2_Chunli_Player()" },
        { id: "Type3_roleK", name: "k", resouce: "new Type2_K_Player()" },
        { id: "Type3_roleTerry", name: "terry", resouce: "new Type2_Terry_Player()" },
        { id: "Type3_roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()" },
        { id: "Type3_roleChunli", name: "chunli", resouce: "new Type2_Chunli_Player()" },
    ]

    // private AI = [
    //     { id: "roleK", name: "k", resouce: "K"},
    //     { id: "roleTerry", name: "terry", resouce: "Terry"},
    //     { id: "roleRyu", name: "ryu", resouce: "Ryu"},
    //     // { id: "roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()"},
    //     { id: "roleChunli", name: "chunli", resouce: "Chunli"},
    // ]

    public playInfo: PlayInfo = {
        map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_Player()", player: 1, time: 0, type: 'pve'
    }
    private isType2 = false;

    onEnter() {
        let bg: egret.Bitmap = UI.addPic(this, "chooseBg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

        // let choose: egret.Shape = new egret.Shape();
        // choose.graphics.beginFill(0x000000, 0.5);
        // choose.graphics.drawRect(0, 0, 100, 100);
        // choose.graphics.endFill();
        // choose.anchorOffsetX = choose.width / 2;
        // choose.anchorOffsetY = choose.height / 2;
        // this.addChild(choose);

        const player = this.playInfo.player == 1 ? this.player1 : this.player2;
        const anotherPlayer = this.playInfo.player == 1 ? this.player2 : this.player1;
        this.playInfo.p1 = this.player1[0].resouce;
        if (this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online) this.playInfo.p2 = this.player2[0].resouce;

        // this.addChild(new ChooseHero(this, "role", 0, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H));
        let hero1 = new ChooseHero(this, `${player[0].name}Choose_png`, 0, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        let hero2 = new ChooseHero(this, `${(this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online) ? anotherPlayer[0].name : (this.AI.split("|")[0]).toLocaleLowerCase()}Choose_png`, UI.WINSIZE_W / 4 * 3, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        this.addChild(hero1);
        this.addChild(hero2);

        let fenkai: egret.Bitmap = UI.addPic(this, "fenkai_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

        let flash: egret.Bitmap = UI.addPic(this, "flash_png", fenkai.x + fenkai.width / 2, UI.WINSIZE_H / 2, true);
        flash.anchorOffsetX = flash.width / 4 * 3;
        const len = this.allHero.length;

        this.allHero.map((data, index) => {
            let i: egret.Bitmap = UI.addPic(this, `${data.name}_png`, 0, 0, true, 0.8);
            i.x = flash.x - i.width * (len + 1) * 0.25 * i.scaleX + i.width * i.scaleX * 0.75 * (-Math.floor(index / (len) * 2) * ((len + 1) / 2 - 0.125) + index - (len - 1) / 4);
            i.y = UI.WINSIZE_H / 4 + i.height * i.scaleY * Math.floor(index / (len) * 2);
            let lock: egret.Bitmap = UI.addPic(this, "lock_png", i.x, i.y, true, i.scaleX);
            lock.alpha = 0.5;
            lock.touchEnabled = true;
            player.map((d) => {
                if (d.id == data.id) {
                    lock.alpha = 0;
                    lock.touchEnabled = false;
                }
            })
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                // choose.x = i.x;
                // choose.y = i.y;
                this.playInfo.player == 1 ? this.playInfo.p1 = data.resouce : this.playInfo.p2 = data.resouce;
                hero1.changeHero(`${data.name}Choose_png`);
            }, this);
            i.touchEnabled = true;
            // const t: egret.TextField = UI.addText(this, data.name, i.x, i.y + i.height / 2 + 30, true, 20)
        })


        const start: egret.TextField = UI.addPic(this, "start_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 100, true, 0.5);
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (this.playInfo.p1.length > 0 && this.playInfo.p2.length > 0) {
                this.removeChild(bg);
                // this.p2 = "new K_Player()";
                // this.type = Main.PVP;
                if (this.isType2) {
                    const play = this.playInfo.p1.split(" ");
                    this.playInfo.p1 = `new Type2_${play[1]}`;
                }
                this.addChild(new FightVS(this))
                let i = new egret.Shape();
                i.graphics.beginFill(0x000000, 0);
                i.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
                i.graphics.endFill();
                this.addChild(i);
                i.touchEnabled = true;
            }
        }, this);
        start.touchEnabled = true;

        // let type: egret.TextField = UI.addText(this, "type1", start.x - start.width - 10, start.y, true, 30);
        // type.touchEnabled = true;
        // type.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     type.$setText(this.isType2 ? 'type1' : 'type2');
        //     this.isType2 = !this.isType2;
        // }, this)

        const exit: egret.Bitmap = UI.addBtn(this, "exit_png", UI.WINSIZE_W / 8 * 7, 0, true, () => {
            SceneManager.getInstance().ChangeScene(new Home());
        })
        exit.y = exit.height + 5;

        // this.addChild(new ChooseMap(this, UI.WINSIZE_W / 5 * 3, UI.WINSIZE_H / 2, 200, 200));

        let set: egret.Bitmap = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
            SceneManager.getInstance().AddLayer(new ChooseSet(this))
        })

        set.x -= set.width;
        set.y -= set.height;

    }
    onExit() { }

    goFight() {
        FightMainRender.getInstance().initlize();
        SceneManager.getInstance().ChangeScene(new LoadResScene(this.playInfo));
        // SplashScene.instance.stage.addChild(new Round(1));
    }

    public choosePlyer() {

    }

    public chooseAnotherPlayer() {

    }
}