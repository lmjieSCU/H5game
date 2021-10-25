class Header extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    // public head: egret.DisplayObjectContainer;
    public gold: egret.DisplayObjectContainer;
    public crystal: egret.DisplayObjectContainer;

    public personData = {
        img: "fightui_5_png", level: 1, experienceCount: 10, experienceAll: 100, gold: 100, crystal: 100
    }

    private scaleex;
    private headBox: egret.Bitmap;
    private experienceBarBg: egret.Bitmap;
    private experienceBar: egret.Bitmap;
    private lv: egret.Bitmap;
    private experienceMask: egret.Bitmap;

    onEnter() {
        let bg: egret.Bitmap = UI.addPic(this, "Home_head_png", 0, 0);

        this.headBox = UI.addPic(this, "Home_head_portrait_png", 0, 0);
        UI.addClickAction(this, this.headBox, ()=>egret.localStorage.clear())


        this.experienceBarBg = UI.addPic(this, "Home_loading_bg_png", this.headBox.width * 0.65, this.headBox.height * 0.7);

        this.experienceBar = UI.addPic(this, "Home_loading_png", this.experienceBarBg.x, this.experienceBarBg.y + this.experienceBarBg.height / 2);
        this.experienceBar.anchorOffsetY = this.experienceBar.height / 2;

        this.experienceMask = UI.addPic(this, "Home_loading_bg_png", this.headBox.width * 0.65, this.headBox.height * 0.7);
        this.experienceBar.mask = this.experienceMask;
        this.experienceMask.scaleX = this.personData.experienceCount/this.personData.experienceAll;

        this.scaleex = this.experienceBarBg.width / this.experienceBar.width;
        this.experienceBar.scaleX = this.scaleex;

        this.setChildIndex(this.headBox, this.numChildren - 1);

        // let lv: egret.TextField = UI.addText(this.head, `lv${this.personData.level}`, experienceBg.x + 10, experienceBar.y + experienceBar.height/2, false, 15, 0xffffff);
        this.lv= UI.addPic(this, "Home_word_png", this.headBox.x + this.headBox.width + 10, this.headBox.y + this.headBox.height / 2 - 10, true);
        // this.addChild(this.head);

        this.gold = new egret.DisplayObjectContainer();
        this.gold.x = UI.WINSIZE_W / 2;
        this.gold.y = 10;

        let goldBg: egret.Bitmap = UI.addPic(this.gold, "Home_box_gold_png", 0, 0);

        // let gold: egret.Bitmap = UI.addPic(this.gold, "Home_box_gold_png", 0, 0);
        // gold.anchorOffsetX = gold.width / 2;

        let goldText: egret.TextField = UI.addText(this.gold, this.personData.gold, goldBg.width / 2, goldBg.height / 2, true, 20, 0xffffff);


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

        let crystalBg: egret.Bitmap = UI.addPic(this.crystal, "Home_box_crystal_png", 0, 0)

        // let crystal: egret.Bitmap = UI.addPic(this.crystal, "Home_box_crystal_png", 0, 0);
        // crystal.anchorOffsetX = crystal.width / 2;

        let crystalText: egret.TextField = UI.addText(this.crystal, this.personData.crystal, crystalBg.width / 2, crystalBg.height / 2, true, 20, 0xffffff);

        let addCrystal: egret.Bitmap = UI.addBtn(this.crystal, "Home_button_add_png", crystalBg.width, crystalBg.height / 2, true, () => {
            console.log("addCrystal");
        })

        addCrystal.y += 1;
        crystalText.x += 5;
        crystalText.y += 1;

        this.addChild(this.crystal);
    }

    public chageHead(bool: boolean) {
        this.headBox.$setVisible(bool);
        this.experienceBarBg.$setVisible(bool);
        this.experienceBar.$setVisible(bool);
        this.lv.$setVisible(bool);
        this.experienceMask.$setVisible(bool);
    }
}