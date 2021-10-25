class Header extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    // public head: egret.DisplayObjectContainer;
    public gold: egret.DisplayObjectContainer;
    public crystal: egret.DisplayObjectContainer;

    public personData = {
        img: "fightui_5_png", level: 1, experienceNum: 10, experienceCount: 100, gold: 100, crystal: 100
    }

    private scaleex;

    onEnter() {
        // let bg: egret.Shape = new egret.Shape();
        // bg.graphics.beginFill(0x000000);
        // bg.graphics.drawRect(0, 0, UI.WINSIZE_W, 50);
        // bg.graphics.endFill();
        // this.addChild(bg);
        let bg: egret.Bitmap = UI.addPic(this, "Home_head_png", 0, 0);
        // this.head = new egret.DisplayObjectContainer();
        // this.head.x = 0;
        // this.head.y = 0;
        // let img: egret.Bitmap = UI.addBtn(this.head, this.personData.img, 0, 0, false, () => {
        //     console.log("头像")
        // });

        let headBox: egret.Bitmap = UI.addPic(this, "Home_box_head_png", 0, 0);
        UI.addClickAction(this, headBox, ()=>egret.localStorage.clear())

        // let experienceBg: egret.Shape = new egret.Shape();
        // experienceBg.graphics.beginFill(0x00ff00);
        // experienceBg.graphics.drawRect(0, 0, 100, 30);
        // experienceBg.graphics.endFill();
        // experienceBg.x = 100;
        // experienceBg.anchorOffsetY = experienceBg.height/2;
        // experienceBg.y = bg.height;
        // this.head.addChild(experienceBg);

        let experienceBarBg: egret.Bitmap = UI.addPic(this, "Home_loading_bg_png", headBox.width * 0.65, headBox.height * 0.7);

        let experienceBar: egret.Bitmap = UI.addPic(this, "Home_loading_ex_png", experienceBarBg.x, experienceBarBg.y + experienceBarBg.height / 2);
        experienceBar.anchorOffsetY = experienceBar.height / 2;

        this.scaleex = experienceBarBg.width / experienceBar.width;
        experienceBar.scaleX = this.scaleex;

        this.setChildIndex(headBox, this.numChildren - 1);

        // let experienceBarBg: egret.Shape = new egret.Shape();
        // experienceBarBg.graphics.beginFill(0x000000);
        // experienceBarBg.graphics.drawRect(0, 0, 100, 15);
        // experienceBarBg.graphics.endFill();
        // experienceBarBg.x = experienceBg.x;
        // experienceBarBg.anchorOffsetY = experienceBarBg.height/2;
        // experienceBarBg.y = bg.height;
        // this.head.addChild(experienceBarBg);

        // let experienceBar: egret.Shape = new egret.Shape();
        // experienceBar.graphics.beginFill(0xffffff);
        // experienceBar.graphics.drawRect(0, 0, 100, 15);
        // experienceBar.graphics.endFill();
        // experienceBar.x = experienceBg.x;
        // experienceBar.anchorOffsetY = experienceBar.height/2;
        // experienceBar.y = bg.height;
        // this.head.addChild(experienceBar);

        // let experienceBarMask: egret.Shape = new egret.Shape();
        // experienceBarMask.graphics.beginFill(0xffffff);
        // experienceBarMask.graphics.drawRect(0, 0, 100, 15);
        // experienceBarMask.graphics.endFill();
        // experienceBarMask.x = experienceBg.x;
        // experienceBarMask.anchorOffsetY = experienceBarMask.height/2;
        // experienceBarMask.y = bg.height;
        // this.head.addChild(experienceBarMask);
        // experienceBar.mask = experienceBarMask;
        // experienceBarMask.scaleX = this.personData.experienceNum/this.personData.experienceCount;

        // let lv: egret.TextField = UI.addText(this.head, `lv${this.personData.level}`, experienceBg.x + 10, experienceBar.y + experienceBar.height/2, false, 15, 0xffffff);
        let lv: egret.Bitmap = UI.addPic(this, "Home_word_png", headBox.x + headBox.width + 10, headBox.y + headBox.height / 2 - 10, true);
        // this.addChild(this.head);

        this.gold = new egret.DisplayObjectContainer();
        this.gold.x = UI.WINSIZE_W / 2;
        this.gold.y = 10;

        // let goldBg: egret.Shape = new egret.Shape();
        // goldBg.graphics.beginFill(0xffffff);
        // goldBg.graphics.drawRect(0, 0, 100, 30);
        // goldBg.graphics.endFill();
        // this.gold.addChild(goldBg);
        let goldBg: egret.Bitmap = UI.addPic(this.gold, "Home_box1_png", 0, 0);

        // let gold: egret.Shape = new egret.Shape();
        // gold.x = 5;
        // gold.graphics.beginFill(0x00ff00);
        // gold.graphics.drawRect(0, 10, 10, 10);
        // gold.graphics.endFill();
        // this.gold.addChild(gold);
        let gold: egret.Bitmap = UI.addPic(this.gold, "Home_pic_money_png", 0, 0);
        gold.anchorOffsetX = gold.width / 2;

        let goldText: egret.TextField = UI.addText(this.gold, this.personData.gold, goldBg.width / 2, goldBg.height / 2, true, 20, 0xffffff);
        // this.gold.y = bg.height - goldBg.height/2;

        let addGold: egret.Bitmap = UI.addBtn(this.gold, "Home_button_add_png", goldBg.width, goldBg.height / 2, true, () => {
            console.log("addGold");
            TaskData.setTask(1, 1, 0);
            TaskData.setTask(2, 1, 0);
            TaskData.setTask(3, 1, 0);
            TaskData.setTask(1, 1, 1);
            TaskData.setTask(2, 1, 1);
            TaskData.setTask(3, 1, 1);
            TaskData.setTask(1, 1, 2);
            TaskData.setTask(2, 1, 2);
            TaskData.setTask(3, 1, 2);
            TaskData.setTask(1, 1, 4);
            TaskData.setTask(2, 1, 4);
            TaskData.setTask(3, 1, 4);
        });

        this.addChild(this.gold);


        this.crystal = new egret.DisplayObjectContainer();
        this.crystal.x = UI.WINSIZE_W / 2 + goldBg.width + 50;
        this.crystal.y = this.gold.y;

        // let crystalBg: egret.Shape = new egret.Shape();
        // crystalBg.graphics.beginFill(0xffffff);
        // crystalBg.graphics.drawRect(0, 0, 100, 30);
        // crystalBg.graphics.endFill();
        // this.crystal.addChild(crystalBg);
        let crystalBg: egret.Bitmap = UI.addPic(this.crystal, "Home_box1_png", 0, 0)

        // let crystal: egret.Shape = new egret.Shape();
        // crystal.x = 5;
        // crystal.graphics.beginFill(0x00ff00);
        // crystal.graphics.drawRect(0, 10, 10, 10);
        // crystal.graphics.endFill();
        // this.crystal.addChild(crystal);
        let crystal: egret.Bitmap = UI.addPic(this.crystal, "Home_pic_crystal_png", 0, 0);
        crystal.anchorOffsetX = crystal.width / 2;

        let crystalText: egret.TextField = UI.addText(this.crystal, this.personData.crystal, crystalBg.width / 2, crystalBg.height / 2, true, 20, 0xffffff);

        let addCrystal: egret.Bitmap = UI.addBtn(this.crystal, "Home_button_add_png", crystalBg.width, crystalBg.height / 2, true, () => {
            console.log("addCrystal");
        })
        // this.crystal.y = bg.height - crystalBg.height/2;

        this.addChild(this.crystal);
    }
}