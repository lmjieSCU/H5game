class HeroLsitLeft extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(listener: Function = null, node: any = null) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.listener = listener;
        this.node = node;
    }
    private listener: Function;
    private node: any;
    public scrollView: ScrollView;
    public chooseBox: egret.Bitmap;
    public heros: egret.DisplayObjectContainer;

    public onEnter() {
        let bg: egret.Bitmap = UI.addPic(this, "Adventure_left_png", 0, UI.WINSIZE_H/2);
        bg.anchorOffsetY = bg.height/2;
        // let bgMask: egret.Bitmap = UI.addPic(this, "Adventure_left_png", 0, bg.y - bg.height/2);

        let heroList = ["K", "Ryu", "Chunli", "Terry"];
        this.heros = new egret.DisplayObjectContainer();
        // heros.x = bg.x;
        // heros.y = bg.y - bg.height/2;
        // heros.mask = bgMask;

        heroList.map((data,index) => {
            let imgBox: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            let img: egret.Bitmap = UI.addPic(imgBox, "Adventure_smallbox_left_png", 10, 10);
            img.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                if(this.listener) {
                    if(this.node) {
                        this.listener.call(this.node, index);
                    } else {
                        this.listener.call(this, index);
                    }
                }
            }, this);
            img.touchEnabled = true;
            let box: egret.Bitmap = UI.addPic(imgBox, `HeroBox${data}_png`, img.x, img.y);
            // img.y += (img.height + 10)*index;
            imgBox.y += (img.height + 10)*index;
            this.heros.addChild(imgBox);
            let chooseBox: egret.Bitmap = UI.addPic(imgBox, "Home_smallbox_leftshadow_png", img.x + img.width/2, img.y + img.height/2, true);
            if(index != 0) chooseBox.$setVisible(false);
        })
        this.heros.height += this.heros.getChildAt(0).height;

        this.scrollView = new ScrollView(this.heros, bg.width, bg.height, this.heros.x, bg.y - bg.height/2, 1, 1, true, true, this, () => {
            this.changeChoose(this.heros, this.scrollView.getChildNow())
        }, false, false);
        this.scrollView.bounces = false;
        this.addChild(this.scrollView);
    }

    public changeChoose(heros: egret.DisplayObjectContainer,index: number) {
        for(let i=0; i<heros.numChildren; i++) {
            const hero = heros.getChildAt(i) as egret.DisplayObjectContainer;
            const chooseBox = hero.getChildAt(2) as egret.Bitmap;
            if(i==index) chooseBox.$setVisible(true);
            else chooseBox.$setVisible(false); 
        }
    }
}