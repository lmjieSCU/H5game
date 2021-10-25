class HeroLsitLeft extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    public onEnter() {
        let bg: egret.Bitmap = UI.addPic(this, "Adventure_left_png", 0, UI.WINSIZE_H/2);
        bg.anchorOffsetY = bg.height/2;
        let bgMask: egret.Bitmap = UI.addPic(this, "Adventure_left_png", 0, bg.y - bg.height/2);

        let heroList = ["K", "Ryu", "Chunli", "Terry"];
        let heros: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        // heros.x = bg.x;
        // heros.y = bg.y - bg.height/2;
        heros.mask = bgMask;

        heroList.map((data,index) => {
            let img: egret.Bitmap = UI.addPic(heros, "Adventure_smallbox_left_png", 10, 10);
            img.y += (img.height + 10)*index;
        })

        let scrollView = new ScrollView(heros, bg.width, bg.height, heros.x, heros.y, 1, 1, true, true, null, null, false, false);
        this.addChild(scrollView);
    }
}