class FightLevel extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.playInfo = playInfo;
    }

    private playInfo: PlayInfo;
    private AI: string;
    private info: egret.DisplayObjectContainer;
    public heroMaxLevel: egret.DisplayObjectContainer;
    public heroPassCount: egret.DisplayObjectContainer;
    public fightLevelInfo: FightLevelInfo;
    public onEnter() {
        this.initLevelInfo();
        this.initChooseLevel();
        UI.addBtn(this, "Choose_button_begin_png", UI.WINSIZE_W/2, UI.WINSIZE_H - 50, true, () => {
            SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, this.AI));
        })
    }

    public initLevelInfo() {
        this.info = new egret.DisplayObjectContainer();
        let bg: egret.Bitmap = UI.addPic(this.info, "Adventure_box_png", 0, 0);
        this.info.width = bg.width;
        this.info.height = bg.height;
        this.info.x = UI.WINSIZE_W - this.info.width - 50;
        this.info.y = this.parent.getChildAt(0).height;

        this.addChild(this.info);
        this.fightLevelInfo = FightData.getFightLevelInfo();

        let progress = (this.parent as FightReady).createProgress(this.fightLevelInfo.allFail/(this.fightLevelInfo.allFail+this.fightLevelInfo.allVictory) || 0);
        this.info.addChild(progress);
        progress.x = this.info.width/2 - progress.width/2;
        progress.y = progress.height + 20;

        let maxVictory = (this.parent as FightReady).getNumber(this.fightLevelInfo.allVictory, this.info);
        maxVictory.x = this.info.width/2;
        maxVictory.y = 60;
        let maxLevel = (this.parent as FightReady).getNumber(this.fightLevelInfo.maxLevel, this.info);
        maxLevel.x = this.info.width/2 - 35;
        maxLevel.y = 80;
        let passCount = (this.parent as FightReady).getNumber(this.fightLevelInfo.passCount, this.info);
        passCount.x = this.info.width/2 - 35;
        passCount.y = 105;
        this.heroMaxLevel = (this.parent as FightReady).getNumber(this.fightLevelInfo.heroList[0].maxLevel, this.info);
        this.heroMaxLevel.x = this.info.width/2 + 15;
        this.heroMaxLevel.y = 125;
        this.heroPassCount = (this.parent as FightReady).getNumber(this.fightLevelInfo.heroList[0].passCount, this.info);
        this.heroPassCount.x = this.info.width/2 + 15;
        this.heroPassCount.y = 145;
    }

    public initChooseLevel() {
        // let bg: egret.Bitmap = UI.addPic(this, "Adventure_box_png", UI.WINSIZE_W/4*3, UI.WINSIZE_H/3, true);


        const levelList = ["K", "Ryu", "Chunli", "Terry", "Mai"];
        let maps: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        levelList.map((data, index) => {
            let map: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            maps.addChild(map);
            let bg:egret.Bitmap = UI.addPic(map, "Adventure_box_map_png", 0, 0, true);
            // bg.x = bg.width/2;
            bg.y = bg.height/2;
            UI.addText(map, data, bg.x, bg.y, true, 20, 0xffffff);
            map.x = (75+bg.width)*(index + 1);
        })
        maps.width += maps.width/2;
        let levelScroll = new ScrollView(maps, this.info.width, maps.height, this.info.x, this.info.y + this.info.height + 10, 1, 1, true, false, this, () => {
            this.AI = `${levelList[levelScroll.getChildNow()]}|8`;
        }, false, true, true, 0.8);
        this.addChild(levelScroll);
        levelScroll.changePosition(0, 0);

        let left: egret.Bitmap = UI.addBtn(this, "loadingArrow_png", levelScroll.x, levelScroll.y + levelScroll.height/2, true, () => levelScroll.changeChild(-1));
        let right: egret.Bitmap = UI.addBtn(this, "loadingArrow_png", levelScroll.x + levelScroll.width, levelScroll.y + levelScroll.height/2, true, () => levelScroll.changeChild(1));
        right.skewY = 180;
    }

    public test() {
        const levels = [
            "K", "Ryu", "Chunli", "Terry"
        ]
        const names = [
            '格斗者', '战士', '武者', '黑拳'
        ]
        let chooseHero: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(chooseHero);
        let shape: egret.Shape = new egret.Shape();
        let hero = 0;
        let choose: egret.Bitmap = UI.addPic(chooseHero, "Fight_pic_lightning_png", 0, 0, true);
        levels.map((data,index) => {
            let ai: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            chooseHero.addChild(ai);
            let a: egret.Bitmap = UI.addPic(ai, `${data}Bg_png`, 0, 0, true);
            let name: egret.TextField = UI.addText(ai, names[index], a.x, ai.y+15, true, 15, 0xffffff);
            ai.x = UI.WINSIZE_W/2 + (index-(levels.length-1)/2)*200;
            ai.y = UI.WINSIZE_H/2 + 125;
            a.anchorOffsetY = a.height;
            ai.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                hero = index;
                choose.x = ai.x;
                choose.y = ai.y - ai.height + 20 - choose.height*0.5;
                chooseHero.setChildIndex(ai, chooseHero.numChildren - 2);
                chooseHero.setChildIndex(shape, chooseHero.numChildren - 3);
                if(Home.instace.newHand) Home.instace.removeChildAt(Home.instace.numChildren - 1);
            }, this);
            ai.touchEnabled = true;
            if(index == 0) {
                choose.x = ai.x;
                choose.y = ai.y - ai.height + 20 - choose.height*0.5;
            } else {
                chooseHero.setChildIndex(ai, chooseHero.numChildren - 3);
            }
        })
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 100, UI.WINSIZE_W, chooseHero.height);
        shape.graphics.endFill();
        chooseHero.addChild(shape);
        chooseHero.setChildIndex(shape, chooseHero.numChildren - 3);
        chooseHero.setChildIndex(choose , chooseHero.numChildren - 1);


        let start: egret.Bitmap = UI.addPic(this, 'Choose_button_begin_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);



        let level = ['简单', '一般', '困难'];
        let l = 1;
        let nan: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        nan.x = start.x + start.width;
        nan.y = start.y - start.height/2;
        let nshape: egret.Shape = new egret.Shape();
        nan.addChild(nshape);
        level.map((data, index) => {
            let n: egret.TextField = UI.addText(nan, data, index*45, 0, false, 20, 0xffffff);
            n.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                nan.setChildIndex(n, nan.numChildren - 1);
                nan.setChildIndex(nshape, nan.numChildren - 2);
                l = index+1;
                if(Home.instace.newHand) Home.instace.removeChildAt(Home.instace.numChildren - 1);
            }, this);
            n.touchEnabled = true;
            if(index != 0) {
                nan.setChildIndex(n, nan.numChildren - 3);
            }
        })
        nshape.graphics.beginFill(0x000000, 0.5);
        nshape.graphics.drawRect(0, 0, nan.width, nan.height);
        nshape.graphics.endFill();
        this.addChild(nan);
        
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // const ai = `${levels[AIscroll.getChildNow()]}|${lv}`
            // console.log(ai)
            // SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, ai))
            const ai = `new ${levels[hero]}_AI_Lv5(${l*4})`;
            this.playInfo.p2 = ai;
            FightMainRender.getInstance().initlize();
            SceneManager.getInstance().ChangeScene(new LoadResScene(this.playInfo));
        }, this)
    }

    public test2() {
        const levels = [
            "K", "Type2_K", "Ryu", "Type2_Ryu", "Chunli", "Type2_Chunli", "Terry", "Type2_Terry"
        ]

        let AIs: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        levels.map((data, index) => {
            let ai: egret.TextField = UI.addText(AIs, data, UI.WINSIZE_W / 2 + index * 200, UI.WINSIZE_H / 4, true);
        })

        AIs.width += AIs.width;

        let AIscroll: ScrollView = new ScrollView(AIs, UI.WINSIZE_W, UI.WINSIZE_H / 2, 0, UI.WINSIZE_H + 20, 1, 1, true, false);
        this.addChild(AIs);
        this.addChild(AIscroll);

        let lv = 3;

        for (let i = 1; i <= 10; i++) {//lv
            let lvs: egret.TextField = UI.addText(this, `lv${i}`, UI.WINSIZE_W / 4 + i * 50, UI.WINSIZE_H - 70, true);
            lvs.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                lv = i;
                console.log(lv);
            }, this);
            lvs.touchEnabled = true;
        }
    }
}