class HeroList extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(parent: any, x: number, y: number, wid: number, high: number, listener: Function = null, node: any = null) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
        this._parent = parent;
        this.x = x;
        this.y = y;
        this.width = wid;
        this.height = high;
        this.listener = listener;
        this.node = node;
    }
    private listener: Function;
    private node: any;
    private _parent: Home;
    private heros: egret.DisplayObjectContainer;
    public heroScroll: ScrollView;
    // private wid: number;
    public nowHero: number = 0;

    private nowRender: number = 0;

    private herosData = [
        {id: 'roleK', name: 'K',render:[22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]},
        {id: 'roleRyu', name: 'Ryu',render:[1,36,37,38,39,40,41,42,43,44]},
        {id: 'roleChunli', name: 'Chunli', render: [70,71,72,73,74,75,76,77,78,79]},
        {id: 'roleTerry', name: 'Terry',render:[17,18,19,23,24]},
    ]

    public hero: egret.Bitmap[][] = [];

    private rank = [1,1];

    private nowPoint: number = 0;

    onEnter() {
        // let rank: egret.Bitmap = UI.addPic(this, `Home_gard${this.rank[0]}_png`, this.width, 40, true);
        // for(let i=1;i<=3;i++) {
        //     let star: egret.Bitmap = UI.addPic(this, `Home_star_${this, this.rank[1] >= i?'on':'off'}_png`, rank.x + (i-2)*10, rank.y + rank.height/2 - (i%2-1)*5 - 8, true);
        // }
        let last: egret.Bitmap = UI.addBtn(this, `Home_${Main.UItype == Main.UIT1?'button_arrow':'arrow_left'}_png`, 0, this.height/2, true, () => {
            if(this.nowHero>0) this.nowHero--;
            this.heroScroll.last();
        })

        let next: egret.Bitmap = UI.addBtn(this, `Home_${Main.UItype == Main.UIT1?'button_arrow2':'arrow_right'}_png`, this.width, this.height/2, true, () => {
            if(this.nowHero<this.herosData.length-1) this.nowHero++;
            this.heroScroll.next();
        })
        this.heros = new egret.DisplayObjectContainer();
        this.heros.height = this.height;

        this.herosData.map((data,index) => {
            let hero: egret.Bitmap[] = [];
            let heroDisplayObject = new egret.DisplayObjectContainer();
            heroDisplayObject.x = this.width/2+ 200*(index);
            data.render.map((d,j) => {
                let i: egret.Bitmap = UI.addJsonPic(heroDisplayObject, "stand_json",`${data.id}_i_${d}`, 0, 0, true);
                i.y = this.heros.height;
                i.anchorOffsetY = i.height;
                hero.push(i);
                if(j!=0) i.$setVisible(false);
            })
            this.heros.addChild(heroDisplayObject);
            this.hero.push(hero);
            // i.x += i.width/2;
        })
        this.heros.width += 200;
        this.addChild(this.heros);
        
        
        this.heroScroll = new ScrollView(this.heros, this.width, this.heros.height, 0, 0, 0.2, this.width/100, true, false, this, (nowChild) => {
            this.nowRender = 0;
            Home.instace.nowHero = nowChild;
            if(this.listener) {
                if(this.node) {
                    this.listener.call(this.node, nowChild);
                } else {
                    this.listener.call(this, nowChild)
                }
            }
        }, true, true);

        if(Main.UItype == Main.UIT1) {
            let heroStage: egret.Bitmap = UI.addPic(this, "stage_png", this.heroScroll.x + this.heroScroll.width/2, this.heroScroll.height/4*3, true);
            heroStage.anchorOffsetY = 0;
            
            this.addChild(this.heroScroll);
            

            let recruitBg: egret.Bitmap = UI.addPic(this, "Home_button_inhadow_png", last.x, last.y + 20, true);
            recruitBg.y += recruitBg.height/2;
            let recruit: egret.Bitmap = UI.addBtn(this, "Home_button_recruit_png", recruitBg.x, recruitBg.y, true, () => {
                console.log("招募");
                Home.instace.changeLayer(this._parent, new RecruitLayer())
            })

            let recruitRed: egret.Bitmap = UI.addPic(this, "Home_red_png", recruit.x + recruit.width/4, recruit.y - recruit.height/3, true);
            recruitRed.$setVisible(RecruitData.isHasRecruit());

            let inheriBg: egret.Bitmap = UI.addPic(this, "Home_button_inhadow_png", next.x, recruitBg.y, true);
            let inheri: egret.Bitmap = UI.addBtn(this, "Home_button_inherit_png", inheriBg.x, inheriBg.y, true, () => {
                console.log("传承")
            })

            let tili: egret.Bitmap = UI.addPic(this, "Home_tili_png", heroStage.x, heroStage.y + heroStage.height*0.9, true);
            // tili.y += tili.height/2;

            let addTili: egret.Bitmap = UI.addBtn(this, "Home_button_AD_png", tili.x, tili.y + tili.height/2 + 5, true, () => {
                console.log("添加体力")
            });

            addTili.y += addTili.height/2;
        } else if(Main.UItype == Main.UIT2) {
            let heroStage: egret.Bitmap = UI.addPic(this, "stage_png", this.heroScroll.x + this.heroScroll.width/2, this.heroScroll.height/4*3, true);
            heroStage.anchorOffsetY = 0;
            heroStage.y += 50;
            this.heroScroll.y += 20;
            this.addChild(this.heroScroll);
            this.heroScroll.changePosition(Home.instace.nowHero, 0);
            
            let tili: egret.Bitmap = UI.addPic(this, "Home_box_pilao_png", heroStage.x, heroStage.y + heroStage.height*0.9, true);
            // tili.y += tili.height/2;

            let addTili: egret.Bitmap = UI.addBtn(this, "Home_button_supplement_png", tili.x, tili.y + tili.height/2 + 5, true, () => {
                console.log("添加体力")
            });

            addTili.y += addTili.height/2;
        }
        GameRender.I.Add(this, this.update);
    }

    onExit() {
        GameRender.I.Remove(this, this.update);
    }

    private max = 3;
    private now = 0;
    update() {
        if(this.now >= this.max && this.heros) {
            this.nowHero = this.heroScroll.getChildNow();
            const hero = this.herosData[this.nowHero];
            this.hero[this.nowHero].map((data,index) => {
                data.$setVisible(false);
            })
            this.nowRender++;
            if(this.nowRender >= this.hero[this.nowHero].length) this.nowRender = 0;
            this.hero[this.nowHero][this.nowRender].$setVisible(true);
            this.now = -1;
        }
        this.now++;
    }

    public getHeroName() {
        return this.herosData[this.heroScroll.getChildNow()].name;
    }
}