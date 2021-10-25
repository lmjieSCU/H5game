class ChooseScene extends Scene {
    public constructor(player: number = 1, type: string = Main.PVE, AI: string = "K|1") {
        super();
        ChooseScene.instance = this;
        this.playInfo.player = player;
        this.playInfo.type = type;
        if (this.playInfo.type == Main.PVE) {
            const ai = AI.split("|");
            this.playInfo.p2 = `new ${ai[0]}_AI_Lv5(${ai[1]})`;
            this.AI = ai[0];
        }
    }

    public static instance: ChooseScene;

    private AI: string;

    private player2 = [
        { id: "roleK", name: "K", resouce: "new K_Player()" },
        { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
        // { id: "Type2_roleK", name: "K", resouce: "new Type2_K_Player()" },
        // { id: "Type2_roleTerry", name: "Terry", resouce: "new Type2_Terry_Player()" },
        // { id: "Type2_roleRyu", name: "Ryu", resouce: "new Type2_Ryu_Player()" },
        // { id: "Type2_roleChunli", name: "Chunli", resouce: "new Type2_Chunli_Player()" },
    ]

    private player1 = [
        { id: "roleK", name: "K", resouce: "new K_Player()" },
        { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
        { id: "roleMai", name: "Mai", resouce: "new Mai_Player()" },
        // { id: "Type2_roleK", name: "K", resouce: "new Type2_K_Player()" },
        // { id: "Type2_roleTerry", name: "Terry", resouce: "new Type2_Terry_Player()" },
        // { id: "Type2_roleRyu", name: "Ryu", resouce: "new Type2_Ryu_Player()" },
        // { id: "Type2_roleChunli", name: "Chunli", resouce: "new Type2_Chunli_Player()" },
    ]

    private allHero = [
        { id: "roleK", name: "K", resouce: "new K_Player()" },
        { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
        { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
        { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
        { id: "roleMai", name: "Mai", resouce: "new Mai_Player()" },

        { id: "Type2_roleTerry", name: "Terry", resouce: "" },
        { id: "Type2_roleRyu", name: "Ryu", resouce: "" },
        { id: "Type2_roleChunli", name: "Chunli", resouce: "" },
        
        { id: "roleTerry", name: "Terry", resouce: "" },
        { id: "roleRyu", name: "Ryu", resouce: "" },
        { id: "roleChunli", name: "Chunli", resouce: "" },
        { id: "roleChunli", name: "Chunli", resouce: "" },
    ]

    // private AI = [
    //     { id: "roleK", name: "k", resouce: "K"},
    //     { id: "roleTerry", name: "terry", resouce: "Terry"},
    //     { id: "roleRyu", name: "ryu", resouce: "Ryu"},
    //     // { id: "roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()"},
    //     { id: "roleChunli", name: "chunli", resouce: "Chunli"},
    // ]

    public playInfo: PlayInfo = {
        map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_Player()", player: 1, time: 0, type: 'pve', p1SkillList: null, p2SkillList: null
    }
    private isType2 = false;

    public hero: ChooseHero;
    public anotherHero: ChooseHero;
    public p1Fight: boolean = false;
    public p2Fight: boolean = false;

    onEnter() {
        UI.addBg(this, "loadingChunli_png");
        let shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        shape.graphics.endFill();
        this.addChild(shape);
        this.initChoose();
        UI.addPic(this, "Choose_button_backbg_png", 0, 0);

        UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            SceneManager.getInstance().ChangeScene(new Home());
        })


        const start: egret.TextField = UI.addBtn(this, "Choose_button_begin_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 100, true, () => {
            if (this.playInfo.p1.length > 0 && this.playInfo.p2.length > 0) {
                // this.removeChild(bg);
                // this.p2 = "new K_Player()";
                // this.type = Main.PVP;
                // if (this.isType2) {
                //     const play = this.playInfo.p1.split(" ");
                //     this.playInfo.p1 = `new Type2_${play[1]}`;
                // }
                if(this.playInfo.type == Main.PVP_online) {
                    // this.playerFight = true;
                    const d = {
                        chooseHero: true,
                        type: 'fight',
                        fight: true,
                        player: this.playInfo.player
                    }
                    const sendFramePara = { data: d };
                    RoomManager.instance.room.sendFrame(sendFramePara);
                }
                else this.goFight();
                // this.addChild(new FightVS(this))
                // SceneManager.getInstance().ChangeScene(new ChooseScene())
                // let i = new egret.Shape();
                // i.graphics.beginFill(0x000000, 0);
                // i.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
                // i.graphics.endFill();
                // this.addChild(i);
                // i.touchEnabled = true;
            }
        })
        // let type: egret.TextField = UI.addText(this, "type1", start.x - start.width - 10, start.y, true, 30);
        // type.touchEnabled = true;
        // type.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     type.$setText(this.isType2 ? 'type1' : 'type2');
        //     this.isType2 = !this.isType2;
        // }, this)

        // const exit: egret.Bitmap = UI.addBtn(this, "exit_png", UI.WINSIZE_W / 8 * 7, 0, true, () => {
        //     SceneManager.getInstance().ChangeScene(new Home());
        // })
        // exit.y = exit.height + 5;

        // this.addChild(new ChooseMap(this, UI.WINSIZE_W / 5 * 3, UI.WINSIZE_H / 2, 200, 200));

        // let set: egret.Bitmap = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //     SceneManager.getInstance().AddLayer(new ChooseSet(this))
        // })

        // set.x -= set.width;
        // set.y -= set.height;

    }

    public initChoose() {
        let bg: egret.Bitmap = UI.addPic(this, "select_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

        const player = this.playInfo.player == 1 ? this.player1 : this.player2;
        const anotherPlayer = this.playInfo.player == 1 ? this.player2 : this.player1;
        this.playInfo.p1 = this.player1[0].resouce;
        if (this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online) this.playInfo.p2 = this.player2[0].resouce;

        this.hero = new ChooseHero(`Choose_hero${player[0].name}_png`, 0, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        this.anotherHero = new ChooseHero(`Choose_hero${(this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online) ? anotherPlayer[0].name : (this.AI.split("|")[0])}_png`, UI.WINSIZE_W / 4 * 3, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        
        this.addChild(this.anotherHero);
        this.addChild(this.hero);

        const len = 12;
        let choose: egret.Bitmap = UI.addPic(this, "Choose_rolebox_shadow_png", 0, 0, true)
        this.allHero.map((data, index) => {
            let i: egret.Bitmap = UI.addPic(this, `select_boxbg_png`, 0, 0, true);
            // i.x = i.width * (len + 5) * 0.25 + i.width * (-Math.floor(index / (len) * 2) * ((len + 1) / 2 - 0.125) + index - (len - 1) / 4);
            i.y = UI.WINSIZE_H / 2 - i.height + (i.height + 20) * Math.floor(index / (len) * 2);
            i.x = UI.WINSIZE_W / 4 + (i.width - 10)*(index%(len/2)) - Math.floor(index/len*2)*10;
            if(index == 0) {
                choose.x = i.x;
                choose.y = i.y - 2;
            }
             if(data.resouce) {
                let hero: egret.Bitmap = UI.addPic(this, `Choose_rolebox${data.name}_png`, i.x, i.y, true);
                let lock: egret.Bitmap = UI.addPic(this, "Choose_rolebox_lock_png", i.x - 2, i.y - 1, true);
                lock.scaleX = i.width/lock.width;
                lock.scaleY = i.height/lock.height;
                lock.touchEnabled = true;
                lock.alpha = 0.8;
                player.map((d) => {
                    if (d.id == data.id) {
                        lock.alpha = 0;
                        lock.touchEnabled = false;
                        i.touchEnabled = true;
                    }
                })
            }
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                choose.x = i.x;
                choose.y = i.y - 2;
                const heroId = PropData.getHeroIdByName(data.id);
                const skillLsit = HeroData.getHeroSkillList(heroId);
                if(this.playInfo.type == Main.PVP_online) {
                    const d = {
                        chooseHero: true,
                        type: 'hero',
                        name: data.name,
                        player: this.playInfo.player,
                        resouce: data.resouce,
                        skillLsit: skillLsit
                    }
                    const sendFramePara = { data: d };
                    RoomManager.instance.room.sendFrame(sendFramePara);
                } else {
                    this.playInfo.player == 1 ? this.playInfo.p1 = data.resouce : this.playInfo.p2 = data.resouce;
                    this.hero.changeHero(`Choose_hero${data.name}_png`);
                    this.playInfo.player == 1? this.playInfo.p1SkillList = skillLsit : this.playInfo.p2SkillList = skillLsit;
                }
            }, this);
            // const t: egret.TextField = UI.addText(this, data.name, i.x, i.y + i.height / 2 + 30, true, 20)
        })
        this.setChildIndex(choose, this.numChildren - 1);
    }
    onExit() {
        // ChooseScene.instance = null;
    }

    public goFight() {
        if(this.playInfo.type != Main.PVP_online) FightMainRender.getInstance().initlize();
        const playInfo = this.playInfo;
        SceneManager.getInstance().ChangeScene(new LoadResScene(playInfo));
        // SplashScene.instance.stage.addChild(new Round(1));
    }

    public choosePlyer() {

    }

    public chooseAnotherPlayer() {

    }
}