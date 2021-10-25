class InHeritLayer extends Scene {
    public constructor() {
        super();
    }
    
    private heroListLeft: HeroLsitLeft;
    private heroList: HeroList;

    private inHerit: egret.DisplayObjectContainer;
    private lv: number;
    private exp: number;

    public heroId: number;
    public heroIds: number[];
    public heroIndex: number;
    public skillId: number[] = [];

    private skillScroll: ScrollView[] = [];

    public skillMask: egret.Bitmap;
    public progressText: egret.DisplayObjectContainer;
    public addSkill: egret.Bitmap;
    public skillAdd: egret.DisplayObjectContainer;

    private highSkillFragment: number;
    private ancientSkillFragment: number;

    public onEnter() {
        let backBg: egret.Bitmap = UI.addPic(this, "Personal_head_png", 0, 0);
        let back: egret.Bitmap = UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        })

        // this.heroIds = HeroData.getHeroList();
        this.heroIds = [2006, 2007, 2008, 2009];
        this.heroIds.map(()=>{
            this.skillId.push(0);
        })

        // this.highSkillFragment = PropData.getPorp(1005);
        // this.ancientSkillFragment = PropData.getPorp(1006);
        this.highSkillFragment = 100;
        this.ancientSkillFragment = 4;
        


        this.heroListLeft = new HeroLsitLeft((index) => {
            this.heroList.heroScroll.changePosition(index)
        }, this);
        this.addChild(this.heroListLeft);
        this.heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5, (nowChild) => {
            this.heroListLeft.scrollView.changePosition(nowChild);
            this.heroIndex = nowChild;
            if(this.skillScroll.length>0) {
                this.skillScroll.map((data,index) => {//每个英雄的技能滚动列表改变
                    if(index == nowChild) {
                        data.$setVisible(true);
                        data.changePosition(this.skillId[this.heroIndex]);
                    }
                    else data.$setVisible(false);
                })
            }
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);

        this.createInHerit()
    }

    public createInHerit() {
        this.inHerit = new egret.DisplayObjectContainer();
        this.addChild(this.inHerit);

        let bg: egret.Bitmap = UI.addPic(this.inHerit, "Personal_holebox_bg_png", 0, 0);
        this.inHerit.width = bg.width;
        this.inHerit.height = bg.height;
        this.inHerit.x = UI.WINSIZE_W - 25 - this.inHerit.width;
        this.inHerit.y = this.heroList.y + this.heroList.height/2 - this.inHerit.height/2;

        const lvData = PlayerData.setPlayerLv();
        // this.lv = lvData.lv;
        // this.exp = lvData.exp;
        this.lv = 5;
        this.exp = 700;

        let progressBg: egret.Bitmap = UI.addPic(this.inHerit, "Personal_loading_bg_png", this.inHerit.width/2, 35, true);
        let progress: egret.Bitmap = UI.addPic(this.inHerit, "Personal_progress_png", progressBg.x, progressBg.y, true);
        let progressMask: egret.Bitmap = UI.addPic(this.inHerit, "Personal_loading_bg_png", progressBg.x - progressBg.width/2, progressBg.y - progressBg.height/2);
        progress.mask = progressMask;
        progressMask.scaleX = this.exp/PlayerData.playerLv[this.lv-1].exp;
        // progressMask.scaleX = 0.5;

        let lvBg: egret.Bitmap = UI.addPic(this.inHerit, "Personal_levelbox_png", progressMask.x, progressBg.y, true);
        let lv = this.createLv(this.lv);
        this.inHerit.addChild(lv);
        lv.x = lvBg.x;
        lv.y = lvBg.y;

        let expBg: egret.Bitmap = UI.addPic(this.inHerit, "Personal_word_exp_png", progressBg.x + progressBg.width/2 + 10, progressBg.y, true);
        expBg.x += expBg.width/2;

        let training: egret.Bitmap = UI.addBtn(this.inHerit, "Personal_button_training_png", this.inHerit.width - 10, this.inHerit.height - 10, false, () => {})
        training.anchorOffsetX = training.width;
        training.anchorOffsetY = training.height;

        this.heroIndex = 0;
        this.heroIds.map((data) => {//根据拥有的heroId创建技能列表
            this.createSkillScroll(data, this.inHerit.width/4, 75, this.inHerit.width/2);
        })
        this.skillScroll.map((data, index) => {
            if(index != 0) data.$setVisible(false);
        })

        let last: egret.Bitmap = UI.addBtn(this.inHerit, "Personal_pic_arrow_png", this.skillScroll[0].x, this.skillScroll[0].y + this.skillScroll[0].height/2, true, () => {
            this.skillScroll[this.heroIndex].last();
        });
        last.skewY = 180;
        let next: egret.Bitmap = UI.addBtn(this.inHerit, "Personal_pic_arrow_png", last.x + this.skillScroll[0].width, last.y, true, () => {
            this.skillScroll[this.heroIndex].next();
        });
        last.x -= last.width;
        next.x += next.width;

        this.createAddSkill();
        this.skillScroll[0].changePosition(0);
    }
    public onExit() {}

    public createLv(lv: number) {//创建lv数字
        let lvDisplay: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        if(lv >= 10) {
            let ten: egret.Bitmap = UI.addPic(lvDisplay, `Personal_word_${Math.floor(lv/10)}_png`, 0, 0);
            let one: egret.Bitmap = UI.addPic(lvDisplay, `Personal_word_${lv%10}_png`, 0, 0);
            one.x = ten.width;
        } else UI.addPic(lvDisplay, `Personal_word_${lv}_png`, 0, 0);
        lvDisplay.anchorOffsetX = lvDisplay.width/2;
        lvDisplay.anchorOffsetY = lvDisplay.height/2;
        return lvDisplay;
    }

    public createSkillScroll(heroId: number, x: number, y: number, width: number) {//为每个英雄创建滚动列表
        // const skillList: SkillList = HeroData.getHeroSkillList(heroId);
        const skillList = HeroData.initSkillList;
        let skillContent: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        for(let i=1; i<=12; i++) {
            let skill: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            let choose: egret.Bitmap = UI.addPic(skill, "Personal_mask_Select_png", 0, 0);
            let img: egret.Bitmap = UI.addPic(skill, "Personal_box_mask_png", choose.width/2, choose.height/2, true);
            
            skill.height = choose.height;
            skill.width = choose.width;
            skill.anchorOffsetX = skill.width/2;
            skill.anchorOffsetY = skill.height/2;
            skill.x = (i+1)*(skill.width + 15);
            skill.y = skill.height/2;
            skillContent.addChild(skill);
            choose.$setVisible(false);
        }
        skillContent.width += skillContent.width/2;
        let scroll: ScrollView = new ScrollView(skillContent, width, skillContent.height, x, y, 1, 1, true, false, this, () => {
            for(let i=0; i<skillContent.numChildren; i++) {//每一个英雄技能列表滚动之后的操作
                const content = skillContent.getChildAt(i) as egret.DisplayObjectContainer;
                const target = content.getChildAt(0);
                if(i == scroll.getChildNow()) {
                    target.$setVisible(true);
                    this.skillId[this.heroIndex] = i+1;
                } else target.$setVisible(false);
            }
            this.changeSkill();//
        }, false, true, true, 0.7);
        this.inHerit.addChild(scroll);
        this.skillScroll.push(scroll);
    }

    public createAddSkill() {//创建合成技能控件
        this.skillAdd = new egret.DisplayObjectContainer();
        this.inHerit.addChild(this.skillAdd);
        let bg: egret.Bitmap = UI.addPic(this.skillAdd, "Personal_box_skillbg_png", this.skillScroll[0].x + this.skillScroll[0].width/2, this.skillScroll[0].y + this.skillScroll[0].height, true);
        bg.y += 10;
        let progress: egret.Bitmap = UI.addPic(this.skillAdd, "Personal_mask_skillbg_png", bg.x, bg.y, true);
        this.skillMask = UI.addPic(this.skillAdd, "Personal_box_skillbg_png", bg.x - bg.width/2, bg.y - bg.height/2);
        progress.mask = this.skillMask;
        let skillWord: egret.Bitmap = UI.addPic(this.skillAdd, "Personal_box_skillword_png", bg.x - bg.width/2, bg.y, true);
        skillWord.x += skillWord.width/4*3;
        this.createPorogress(2, 10, this.skillAdd);
        // this.skillAdd.addChild(this.progressText);
        this.progressText.x = skillWord.x + skillWord.width;
        this.progressText.y = skillWord.y;

        this.addSkill = UI.addBtn(this.skillAdd, "Personal_button_lock_png", bg.x, bg.y+bg.height/2, true, () => this.composeSkill());
        this.addSkill.y += this.addSkill.height;
    }

    public createPorogress(count: number, all: number, _parent: any) {//创建技能碎片合成的进度
        let progress: number[] = [];
        let pointX = 0;
        let pointY = 0;
        if(this.progressText) {
            pointX = this.progressText.x;
            pointY = this.progressText.y;
            this.progressText.removeChildren();
            this.progressText = null;
        }
        this.progressText = new egret.DisplayObjectContainer();
        if(count == 0) progress.push(0);
        else {
            while(count>0) {
                const mod = count%10;
                progress.unshift(mod);
                count = (count-mod)/10;
            }
        }
        let progress2: number[] = [];
        if(all == 0) progress2.push(0);
        else {
            while(all>0) {
                const mod = all%10;
                progress2.unshift(mod);
                all = (all-mod)/10;
            }
        }
        progress.map((data) => {
            let num: egret.Bitmap = UI.addPic(this.progressText, `loading${data}_png`, this.progressText.width, 0);
        })
        UI.addText(this.progressText, "/", this.progressText.width, 0, false, this.progressText.height+5, 0xffffff);
        progress2.map((data) => {
            UI.addPic(this.progressText, `loading${data}_png`, this.progressText.width, 0);
        })
        this.progressText.x = pointX;
        this.progressText.y = pointY;
        this.progressText.anchorOffsetY = this.progressText.height/2;
        _parent.addChild(this.progressText);
    }

    public changeSkill() {//进行显示的数据更新
        this.heroId = this.heroIds[this.heroIndex];
        const skillId = this.skillId[this.heroIndex];
        // const skillList: SkillList = HeroData.getHeroSkillList(this.heroId);
        const skillList: SkillList = HeroData.initSkillList;
        if(skillList[`skill${skillId}`]) {
            this.skillAdd.$setVisible(false);
        } else {
            this.skillAdd.$setVisible(true);
            let all = skillId>=9?5:50;
            let count = skillId>=9?this.ancientSkillFragment:this.highSkillFragment;
            this.createPorogress(count, all, this.skillAdd);
            this.skillMask.scaleX = count/all;
            this.addSkill.touchEnabled = count>=all;
            this.addSkill.$setTexture(RES.getRes(`Personal_button_${count>=all?'Un':''}lock_png`))
        }
    }

    public composeSkill() {//合成技能
        this.heroId = this.heroIds[this.heroIndex];
        const skillId = this.skillId[this.heroIndex];
        HeroData.setHeroSkill(this.heroId, skillId);
        const use = skillId>=9?5:50;
        const useId = skillId>=9?1006:1005;
        // PropData.setProp(useId, -use);
        skillId>=9?this.ancientSkillFragment-=5:this.highSkillFragment-=50;
        this.changeSkill();
    }
}