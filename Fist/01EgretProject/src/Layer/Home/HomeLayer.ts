class HomeLayer extends Scene {
    public constructor() {
        super();
    }

    private heroListLeft: HeroLsitLeft;
    private heroList: HeroList;

    onEnter() {
        
        TaskData.startTask();
        RecruitData.initRecruit();
        Home.instace._header.chageHead(true);
        HeroData.initHero();

        this.heroListLeft = new HeroLsitLeft((index) => {
            this.heroList.heroScroll.changePosition(index)
        }, this);

        this.addChild(this.heroListLeft);

        this.addChild(new ChooseFight((Main.UItype == Main.UIT2?UI.WINSIZE_W*0.6:UI.WINSIZE_W/2), UI.WINSIZE_H/8))

        this.heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5, (nowChild) => {
            this.heroListLeft.scrollView.changePosition(nowChild);
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);

        // Main.UItype == Main.UIT2 || this.addChild(new HomeButton(this));
        this.addChild(new HomeButton(this));
    }

    onExit() {}
}