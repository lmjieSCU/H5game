class NineNumber extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(count: number, x: number, y: number, callY: number) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.count = count;
        this.x = x;
        this.y = y;
        this.callY = callY;
    }
    public callY: number
    public count: number;
    public call: egret.Bitmap[] = [];

    public onEnter() {
        for(let i=0;i<3;i++) {
            for(let j=1;j<=3;j++) {
                let num = i*3 + j;
                let call: egret.Bitmap = UI.addBtn(this, `number${num}_png`, 0, 0, false,() => this.addNum(num));
                call.x = (call.width + 5)*i;
                call.y = (call.height + 5)*(j-1);
            }
        }
        for(let i=0;i<this.count;i++) {
            let call: egret.Bitmap = UI.addPic(this, "dial_box_png", 0, this.callY);
            call.x = i*(call.width + 5);
        }
    }

    public addNum(num: number) {}
}