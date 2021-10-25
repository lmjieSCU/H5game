class Ranking extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(node: any = null, listener: Function = null,open: boolean = true) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.isOpen = open;
        this.listener = listener;
        this.node = node;
    }

    public rank: egret.DisplayObjectContainer;
    public btn: egret.Shape;
    private data = ['fightui_55_png', 'fightui_57_png', 'fightui_59_png','fightui_55_png', 'fightui_57_png', 'fightui_59_png','fightui_55_png', 'fightui_57_png', 'fightui_59_png'];

    private isOpen: boolean;
    private listener: Function;
    private node: any;

    onEnter() {
        this.rank = new egret.DisplayObjectContainer();
        let bg = new egret.Shape();
        bg.graphics.beginFill(0x00ff00);
        bg.graphics.drawRect(0, 0, 100, 400);
        bg.graphics.endFill();
        this.rank.addChild(bg);
        this.rank.width = bg.width;
        this.rank.height = bg.height;
        this.rank.x = this.isOpen?0:-bg.width;
        this.rank.y = (UI.WINSIZE_H - bg.height)/2;
        this.addChild(this.rank);

        this.btn = new egret.Shape();
        this.btn.graphics.beginFill(0xffffff);
        this.btn.graphics.drawRect(0, 0, 40, 100);
        this.btn.graphics.endFill();
        this.rank.addChild(this.btn);
        this.btn.x = this.rank.width;
        this.btn.y = this.rank.height/2;
        this.btn.anchorOffsetY = this.btn.height/2;

        // UI.addClickAction(this, this.btn, () => {
        //     egret.Tween.get(this.rank).to({x: this.isOpen?-bg.width:0}, 300, egret.Ease.sineIn);
        //     // this.rank.x = this.isOpen?-bg.width:0;
        //     this.isOpen = !this.isOpen;
        // })

        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            egret.Tween.get(this.rank).to({x: this.isOpen?-bg.width:0}, 300, egret.Ease.sineIn);
            // this.rank.x = this.isOpen?-bg.width:0;
            this.isOpen = !this.isOpen;
        }, this)
        this.btn.touchEnabled = true;

        let list: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        list.x = 0;
        list.y = 0;
        this.rank.addChild(list);

        this.data.map((data, index) => {
            UI.addBtn(list, data, 0, index*50, false, () => {
                if(this.listener) {
                    if(this.node) this.listener.call(this.node, this.node);
                    else this.listener.call(this, this);
                }
            });
        })

        let scrollView: egret.ScrollView = new egret.ScrollView(list);
        scrollView.x = 0;
        scrollView.y = 0;
        scrollView.width = this.rank.width;
        scrollView.height = this.rank.height;
        scrollView.verticalScrollPolicy = 'on';
        scrollView.horizontalScrollPolicy = 'off';
        this.rank.addChild(scrollView);
    }
}