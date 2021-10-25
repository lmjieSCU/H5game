class NewHands extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(x: number, y: number, wid: number, high: number, text: string, textX: number, textY: number, listener: Function = null, node: any = null, point: string = 'lfet') {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.destory, this);
        this.pointX = x;
        this.pointY = y;
        this.wid = wid;
        this.high = high;
        this.text = text;
        this.listener = listener;
        this.node = node;
        this.textX = textX;
        this.textY = textY;
        this.point = point;
    }
    private pointX: number;
    private pointY: number;
    private wid: number;
    private high: number;
    private text: string;
    private listener: Function;
    private node: any;
    private textX: number;
    private textY: number;
    private point: string;

    public onEnter() {
        this.createShape(0, 0, UI.WINSIZE_W, this.pointY);
        this.createShape(0, this.pointY, this.pointX, this.high);
        this.createShape(0, this.pointY+this.high, UI.WINSIZE_W, UI.WINSIZE_H-this.pointY-this.high);
        this.createShape(this.pointX+this.wid, this.pointY, UI.WINSIZE_W - this.pointX - this.wid, this.high);

        let text: egret.TextField = UI.addText(this, this.text, this.textX, this.textY, true, 20, 0xffffff);
        let txt: egret.Bitmap = UI.addPic(this, "Word_13_box_png", this.textX, this.textY, true);
        txt.scaleX = (text.width+20)/txt.width;
        txt.scaleY = (text.height+15)/txt.height;
        // if(this.pointY >= UI.WINSIZE_H - this.pointY - this.high) {
        //     txt.y = this.pointY - txt.height/2;
        // } else {
        //     txt.y = this.pointY + this.high + txt.height/2;
        // }
        // txt.x += txt.width/2;
        let doll: egret.Bitmap = UI.addPic(this, "doll_png", this.pointX+this.wid/2, this.pointY+this.high/2, true);

        if(txt.x == doll.x || txt.y == doll.y) {
            let changeX = 0;
            let changeY = 0;
            if(doll.y == txt.y && doll.x < txt.x) changeX = -txt.width/2*txt.scaleX;
            else if(doll.y == txt.y && doll.x > txt.x) changeX = txt.width/2*txt.scaleX;
            else if(doll.x == txt.x && doll.y > txt.y) changeY = txt.height/2*txt.scaleY;
            else if(doll.x == txt.x && doll.y < txt.y) changeY = -txt.height/2*txt.scaleY;
            let line: egret.Bitmap = UI.addPic(this, "line_png", (txt.x + doll.x + changeX)/2, (txt.y+doll.y+changeY)/2, true);
            line.scaleX = Math.abs(txt.x-doll.x + txt.y-doll.y  + changeX + changeY ) / line.width;
            line.rotation = txt.x == doll.x?90:0;
        } else {
            let centerX;
            let centerY;
            if(this.point == 'lfet') {
                centerX = txt.x>doll.x?doll.x:txt.x;
                centerY = txt.x>doll.x?txt.y:doll.y;
            } else {
                centerX = txt.x<doll.x?doll.x:txt.x;
                centerY = txt.x<doll.x?txt.y:doll.y;
            }
            let line1: egret.Bitmap = UI.addPic(this, "line_png", (centerX + doll.x)/2, (centerY+doll.y)/2, true);
            line1.scaleX = Math.abs(centerX-doll.x +centerY-doll.y) / line1.width;
            line1.rotation = centerX == doll.x?90:0;
            let changeX = 0;
            let changeY = 0;
            if(centerY == txt.y && centerX < txt.x) changeX = -txt.width/2*txt.scaleX;
            else if(centerY == txt.y && centerX > txt.x) changeX = txt.width/2*txt.scaleX;
            else if(centerX == txt.x && centerY > txt.y) changeY = txt.height/2*txt.scaleY;
            else if(centerX == txt.x && centerY < txt.y) changeY = -(txt.height - 10)/2*txt.scaleY;
            let line2: egret.Bitmap = UI.addPic(this, "line_png", (txt.x + centerX + changeX)/2, (txt.y+centerY+changeY)/2, true);
            line2.scaleX = Math.abs(txt.x-centerX + txt.y-centerY + changeX + changeY) / line2.width;
            line2.rotation = txt.x == centerX?90:0;
        }
        this.setChildIndex(doll, this.numChildren-1);
        this.setChildIndex(txt, this.numChildren - 1);
    }

    createShape(x: number, y: number, wid: number, high: number) {
        let shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(x, y, wid, high);
        shape.graphics.endFill();
        shape.touchEnabled = true;
        this.addChild(shape);
    }

    public destory() {
        if(this.listener) {
            if(this.node) {
                this.listener.call(this.node, this.node);
            } else {
                this.listener.call(this, this);
            }
        }
    }
}