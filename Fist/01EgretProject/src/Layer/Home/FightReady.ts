class FightReady extends Scene {
    public constructor(type: string, hero: string = "") {
        super();
        this.type = type;
        this.playInfo.p1 = `new ${hero}_Player()`
    }
    public static instance: FightReady;
    private type;
    public playInfo: PlayInfo = {
        map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_AI_Lv5(1)", player: 1, time: 0, type: 'pve', p1SkillList: HeroData.getHeroSkillList(2006), p2SkillList: HeroData.getHeroSkillList(2006)
    }

    private heroListLeft: HeroLsitLeft;
    private heroList: HeroList;

    onEnter() {
        FightReady.instance = this;
        let backBg: egret.Bitmap = UI.addPic(this, "Choose_button_backbg_png", 0, 0);

        let back: egret.Bitmap = UI.addPic(this, "Button_back_png", 0, 0);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SceneManager.getInstance().RemoveLayer(this);
            SceneManager.getInstance().AddLayer(new HomeLayer());
        }, this)
        
        this.heroListLeft = new HeroLsitLeft((index) => {
            this.heroList.heroScroll.changePosition(index)
        }, this);
        this.addChild(this.heroListLeft);
        this.heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5, (nowChild) => {
            this.heroListLeft.scrollView.changePosition(nowChild);
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);

        switch (this.type) {
            case 'level':
                // let bg: egret.Shape = new egret.Shape();
                // bg.graphics.beginFill(0x000000);
                // bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
                // bg.graphics.endFill();
                // this.addChild(bg);
                // this.setChildIndex(bg, 0);
                backBg.$setTexture(RES.getRes("Adventure_head_png"))
                this.addChild(new FightLevel(this.playInfo));
                break;
            case 'house':
                this.addChild(new FightHouse(this.playInfo));
                break;
            case 'rank':
                backBg.$setTexture(RES.getRes("Ranking_head_png"));
                this.addChild(new FightRank(this.playInfo));
                break;
            case 'match':
                backBg.$setTexture(RES.getRes("Online_head_png"));
                this.addChild(new FightMatch(this.playInfo));
                break;
        }

        if(Home.instace.newHand) {
            this.newHandHero();
        }
    }

    onExit() {

    }


    private createRankTest() {
        let playInfo = {
            map: 9, life: 500, powerMax: 3, p1: 'new K_AI_Lv5(1)', p2: "new K_AI_Lv5(14)", player: 1, time: 0, type: 'eve',p1SkillList: null, p2SkillList: null
        }

        const hero = [
            'K', 'Type2_K', 'Ryu', 'Type2_Ryu'
        ]

        hero.map((data, index) => {
            for (let i = 1; i <= 5; i++) {
                let t: egret.TextField = UI.addText(this, data + i, UI.WINSIZE_W / 4 + (index - 2) * 80, UI.WINSIZE_H / 2 + (i - 3) * 40, true, 15);
                t.touchEnabled = true;
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    playInfo.p1 = `new ${data}_AI_Lv5(${i})`;
                }, this)
            }
        })

        hero.map((data, index) => {
            for (let i = 1; i <= 5; i++) {
                let t: egret.TextField = UI.addText(this, data + i, UI.WINSIZE_W / 4 * 3 + (index - 2) * 80, UI.WINSIZE_H / 2 + (i - 3) * 40, true, 15);
                t.touchEnabled = true;
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    playInfo.p2 = `new ${data}_AI_Lv5(${i})`;
                }, this)
            }
        })
        let start: egret.TextField = UI.addText(this, '开始游戏', UI.WINSIZE_W / 2 + 200, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SceneManager.getInstance().ChangeScene(new SplashScene(playInfo))
        }, this)
    
    }

    private getHeroRankInfo(id: number, rankHeroInfo: RankHeroInfo[]) {
        for (let i = 0; i < rankHeroInfo.length; i++) {
            if (id == rankHeroInfo[i].heroId) return rankHeroInfo[i];
        }
    }

    public newHandHero() {
        const level = this.getChildAt(3) as FightLevel;
        const choose = level.getChildAt(0) as egret.DisplayObjectContainer;
        const role = choose.getChildAt(choose.numChildren - 2) as egret.DisplayObjectContainer;
        const target = role.getChildAt(0) as egret.Bitmap;
        // Home.instace.addChild(new NewHands(target.x - target.width/2,target.y-target.height, target.width, target.height, "点击选择英雄出战", UI.WINSIZE_W/2, UI.WINSIZE_H/2, this.newHandLevel, this));
        // this.addChild(new Finger(target.x,target.y - target.height/2));
        Home.instace.addChild(new NewHandss(target as egret.Bitmap, "hero", target.parent.x, target.parent.y - target.height/2, this.newHandLevel, this))
    }

    public newHandLevel() {
        const level = this.getChildAt(3) as FightLevel;
        const choose = level.getChildAt(2) as egret.DisplayObjectContainer;
        const target = choose.getChildAt(choose.numChildren - 1);
        // Home.instace.addChild(new NewHands(target.x, target.y, target.width/3, target.height, "点击选择难度", UI.WINSIZE_W/2, UI.WINSIZE_H/2, this.newHandStart, this, 'right'));
        // this.addChild(new Finger(target.x+target.width/6, target.y+target.height/2))
        Home.instace.addChild(new NewHandss(target as egret.TextField, "level", target.parent.x+target.x+target.width/2, target.parent.y+target.y+target.height/2, this.newHandStart, this))
    }

    public newHandStart() {
        const level = this.getChildAt(3) as FightLevel;
        const target = level.getChildAt(1);
        // Home.instace.addChild(new NewHands(target.x - target.width/2, target.y - target.height/2, target.width, target.height, "点击开始游戏", target.x, UI.WINSIZE_H/2));
        // this.addChild(new Finger(target.x, target.y))
        Home.instace.addChild(new NewHandss(target as egret.Bitmap, "start", target.x, target.y,() => SceneManager.getInstance().ChangeScene(new LoadResScene(this.playInfo)), this))
    }

    public createProgress(rate: number) {
        let progress = new egret.DisplayObjectContainer();
        let bg: egret.Bitmap = UI.addPic(progress, "Adventure_loading_blue_png", 0, 0, true);
        bg.x = bg.width/2;
        bg.y = bg.height/2;
        let bar: egret.Bitmap = UI.addPic(progress, "Adventure_loading_red_png", bg.x, bg.y, true);

        let mask: egret.Shape = new egret.Shape();
        mask.graphics.beginFill(0x000000);
        mask.graphics.drawRect(0, 0, bg.width, bg.height);
        mask.graphics.endFill();
        mask.anchorOffsetX = mask.width;
        mask.x = bg.x + bg.width/2;
        mask.y = bg.y - bg.height/2;
        bar.mask = mask;
        progress.addChild(mask);
        mask.scaleX = rate/100;
        return progress;
    }

    public getNumber(num: number,node: any = null) {
        let target = new egret.DisplayObjectContainer();
        let i = 0;
        const arr: number[] = [];
        while(num>0 || i==0) {
            const mod = num%10;
            arr.unshift(mod);
            num = (num-mod)/10;
            i++;
        }
        arr.map((data, index) => {
            let mod: egret.Bitmap = UI.addPic(target, `loading${data}_png`, target.width, 0);
        })
        if(node) node.addChild(target);
        return target;
    }
}