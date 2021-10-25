class FightMatch extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.playInfo = playInfo;
    }

    private playInfo: PlayInfo;

    public info: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    public mapScroll: ScrollView;

    public heroVictory: egret.DisplayObjectContainer;
    public fightMatchInfo: FightMatchInfo;

    public onEnter() {
        this.initInfo();
        this.initMap();
        let start: egret.Bitmap = UI.addPic(this, 'Online_button_startgame_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // this.$setTouchChildren(false)
            this.stage.addChild(new MatchLayer());
        }, this);
    }

    public initInfo() {
        this.info = new egret.DisplayObjectContainer();
        this.addChild(this.info);

        let bg: egret.Bitmap = UI.addPic(this.info, "Online_box_png", 0, 0);
        this.info.width = bg.width;
        this.info.height = bg.height;
        this.info.x = UI.WINSIZE_W - this.info.width - 50;
        this.info.y = this.parent.getChildAt(0).height;

        this.fightMatchInfo = FightData.getFightMatchInfo();

        let progress = (this.parent as FightReady).createProgress(this.fightMatchInfo.failCount/(this.fightMatchInfo.failCount+this.fightMatchInfo.victoryCount) || 0);
        this.info.addChild(progress);
        progress.x = this.info.width/2 - progress.width/2;
        progress.y = progress.height + 20;

        let victory = (this.parent as FightReady).getNumber(this.fightMatchInfo.victoryCount, this.info);
        victory.x = this.info.width/2;
        victory.y = 60;
        let repeatedly = (this.parent as FightReady).getNumber(this.fightMatchInfo.repeatedlyMax, this.info);
        repeatedly.x = this.info.width/2;
        repeatedly.y = 80;
        this.heroVictory = (this.parent as FightReady).getNumber(this.fightMatchInfo.heroList[0].victory, this.info);
        this.heroVictory.x = this.info.width/2;
        this.heroVictory.y = 100;
        let repeatedlyNow = (this.parent as FightReady).getNumber(this.fightMatchInfo.repeatedlyNow, this.info);
        repeatedlyNow.x = this.info.width/2;
        repeatedlyNow.y = 120;

    }

    public initMap() {
        const mapInfo = [1, 2, 3, 4, 5];
        let maps: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        mapInfo.map((data, index) => {
            let map = new egret.DisplayObjectContainer();
            maps.addChild(map);
            let bg: egret.Bitmap = UI.addPic(map, "Adventure_box_map_png", 0, 0);
            map.anchorOffsetX = map.width/2;
            map.anchorOffsetY = map.height/2;
            map.y += map.height/2;
            map.x = (map.width+20) * (index+1);
        })
        maps.width += maps.width/2;
        this.mapScroll = new ScrollView(maps, this.info.width, maps.height + 20, this.info.x, this.info.y + this.info.height + 20, 1, 1, true, false, this, (nowChild) => {
            // for(let i=0;i<maps.numChildren;i++) {
            //     let m = maps.getChildAt(i);
            //     if(i == nowChild) {
            //         m.$setScaleX(1);
            //         m.$setScaleY(1);
            //     } else {
            //         m.$setScaleX(0.8);
            //         m.$setScaleY(0.8);
            //     }
            // }
        }, false, true, true, 0.8);
        this.addChild(this.mapScroll);
        this.mapScroll.changePosition(0,0);

        let left: egret.Bitmap = UI.addBtn(this, "loadingArrow_png", this.mapScroll.x, this.mapScroll.y + this.mapScroll.height/2, true, () => this.mapScroll.last());
        let right: egret.Bitmap = UI.addBtn(this, "loadingArrow_png", this.mapScroll.x+this.mapScroll.width, left.y, true, () => this.mapScroll.next());
        right.skewY = 180;
    }

}