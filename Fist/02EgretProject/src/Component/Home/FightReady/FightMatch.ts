class FightMatch extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.playInfo = playInfo;
    }

    private playInfo: PlayInfo;

    public onEnter() {
        let heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5)
        this.addChild(heroList);
        heroList.heroScroll.changeChild(Home.instace.nowHero);
        
        let bg: egret.Bitmap = UI.addPic(this, "matchboard_png", UI.WINSIZE_W/2 + 20, UI.WINSIZE_H/2, true);
        // let info: egret.TextField = UI.addText(this, "点击右方按钮房间号匹配", bg.x, bg.y, true, 15, 0xffffff);
        // let info2: egret.TextField = UI.addText(this, "点击下方按钮随机匹配", bg.x, bg.y + 40, true, 15, 0xffffff);
        // let chooseNum = new ChooseNumber(3, UI.WINSIZE_W/2 + 20, UI.WINSIZE_H/2, true)
        // this.addChild(chooseNum);
        let roomNumberBg: egret.Bitmap[] = [];
        let roomNumber: egret.Bitmap[] = [];

        let roomInfo = 0;

        let call = new Call(this, (num) => {
            if(num==-1) {
                roomInfo = Math.floor(roomInfo/10);
                if(roomNumber.length>0) {
                    this.removeChild(roomNumber[roomNumber.length - 1]);
                    roomNumber.pop();
                }
            } else {
                if(roomNumber.length<3) {
                    roomInfo = roomInfo*10+num;
                    roomNumber.push(UI.addPic(this, `roma${num}_png`, roomNumberBg[2-roomNumber.length].x, roomNumberBg[2-roomNumber.length].y, true));
                }
            }
        });
        this.addChild(call);
        call.x = bg.x;
        call.y = bg.y - 5;
        call.anchorOffsetX = call.width/2;
        call.anchorOffsetY = call.height/2;
        
        for(let i=0; i<3; i++) {
            let num: egret.Bitmap = UI.addPic(this, "dial_box_png", 0, bg.y + bg.height/2, true);
            num.x = call.x + (1-i)*(num.width+15);
            num.y -= num.height/2 + 10;
            roomNumberBg.push(num);
        }


        let start: egret.Bitmap = UI.addPic(this, 'Choose_button_begin_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // this.$setTouchChildren(false)
            console.log(roomInfo)
            const hero = `new ${heroList.getHeroName()}_Player()`;
            this.stage.addChild(new MatchLayer(hero, roomInfo >= 100?roomInfo:-1));
        }, this);
    }

}