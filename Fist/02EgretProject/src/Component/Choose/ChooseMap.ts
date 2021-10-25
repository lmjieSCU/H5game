class ChooseMap extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(map: number, x: number, y: number, width: number, height: number, listener: Function = null, node: any = null) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.listener = listener;
        this.node = node;
    }
    public map: number;
    private listener: Function;
    private node: any;

    onEnter() {
        const wid = this.width;
        const high = this.height;
        let last: egret.TextField = UI.addText(this, "last", 0, high/2, true, 30, 0x000000);
        last.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.changeMap(-1)
        }, this);
        last.touchEnabled = true;
        let next: egret.TextField = UI.addText(this, "next", wid, high/2, true, 30, 0x000000);
        next.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.changeMap(1)
        }, this);
        next.touchEnabled = true;

        let map: egret.Bitmap = UI.addPic(this, `bg_${this.map}_1_png`, wid/2, high/2, true);
        map.scaleX = wid/map.width;
        map.scaleY = high/map.height;
    }

    public changeMap(num: number) {
        this.map += num;
        if(this.map < 1) this.map = 1;
        if(this.map > 9) this.map = 9;
        const map = this.getChildAt(this.numChildren-1) as egret.Bitmap;
        map.$setTexture(RES.getRes(`bg_${this.map}_1_png`));
        map.scaleX = this.width/map.width;
        map.scaleY = this.height/map.height;
        map.anchorOffsetX = map.width/2;
        map.anchorOffsetY = map.height/2;
        // this._parent.playInfo.map = this.map;
        if(this.listener) {
            if(this.node) {
                this.listener.call(this.node, [this.map]);
            } else {
                this.listener.call(this, this, [this.map]);
            }
        }
        return this.map;
    }
}