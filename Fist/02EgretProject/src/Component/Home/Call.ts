class Call extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(node: any = null,listener: Function = null) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.listener = listener;
        this.node = node;
    }
    private listener: Function;
    private node: any;

    public onEnter() {
        for(let i=0; i<=2; i++) {
            for(let j=1; j<=3; j++) {
                let number: egret.Bitmap = UI.addBtn(this, `number${i*3+j}_png`, 0, 0, true, () => this.touchTap(i*3+j));
                number.x = number.width/2 + (number.width + 5)*(j-1);
                number.y = number.height/2 + (number.height + 5)*i;
            }
        }
        let number0: egret.Bitmap = UI.addBtn(this, "dial_box_png", 0, 0, true, () => this.touchTap(0));
        number0.x = (number0.width+19)/2*3 + 5;
        number0.y = (number0.height+10)*3.5 + 5;
        UI.addPic(this, "roma0_png", number0.x, number0.y, true);
        let delet: egret.Bitmap = UI.addBtn(this, "button_delet_png", number0.x + number0.width + 5 + 19, number0.y, true, () => this.touchTap(-1));
    }

    public touchTap(num: number) {
        if(this.listener) {
            if(this.node) {
                this.listener.call(this.node, num);
            } else {
                this.listener.call(this, num);
            }
        }
    }

    public clear() {}
}