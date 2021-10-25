class HomeLayer extends Scene {
    public constructor() {
        super();
    }

    onEnter() {
        
        TaskData.startTask();
        RecruitData.initRecruit();
        
        // let pvp: egret.TextField = UI.addText(this, "pvp", UI.WINSIZE_W/4, UI.WINSIZE_H/2, true, 30, 0xffffff);
        // pvp.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVP));
        // }, this)
        // pvp.touchEnabled = true;

        // let pve: egret.TextField = UI.addText(this, "pve", UI.WINSIZE_W/4*3, UI.WINSIZE_H/2, true, 30, 0xffffff);
        // pve.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     SceneManager.getInstance().ChangeScene(new LevelMap())
        // }, this);
        // pve.touchEnabled = true;

        this.addChild(new ChooseFight((Main.UItype == Main.UIT2?UI.WINSIZE_W*0.6:UI.WINSIZE_W/2), UI.WINSIZE_H/4))

        let heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5);
        this.addChild(heroList);
        heroList.heroScroll.changeChild(Home.instace.nowHero);

        // Main.UItype == Main.UIT2 || this.addChild(new HomeButton(this));
        this.addChild(new HomeButton(this));
    }

    onExit() {}
}