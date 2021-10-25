class NewHandss extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(target: egret.Bitmap | egret.TextField, type: string, pointX: number, pointY: number, listener: Function = null, node: any = null,) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.destory, this);
        this.target = target;
        this.listener = listener;
        this.node = node;
        this.type = type;
        this.pointX = pointX;
        this.pointY = pointY;
    }

    
    private listener: Function;
    private node: any;
    private target: egret.Bitmap | egret.TextField;
    private type: string;
    private pointX: number;
    private pointY: number;

    public onEnter() {
        let shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        shape.graphics.endFill();
        shape.touchEnabled = true;
        this.addChild(shape);
        let textTure:egret.Texture | string;
        switch(this.type) {
            case "fight": 
                textTure = (this.target as egret.Bitmap).texture;
                this.chooseFight(textTure as egret.Texture);break;
            case "hero": 
                textTure = (this.target as egret.Bitmap).texture;
                this.chooseHero(textTure as egret.Texture);break;
            case "level": 
                textTure = (this.target as egret.TextField).text;
                this.chooseLeve(textTure as string);break;
            case "start": 
                textTure = (this.target as egret.Bitmap).texture;
                this.start(textTure as egret.Texture);break;
        }
        UI.addPic(this, "Word_point_png", this.pointX, this.pointY, true);
        // this.addChild(new Finger(this.pointX, this.pointY))
    }

    public chooseFight(textTure: egret.Texture) {
        let btn: egret.Bitmap = this.addBtn(this, textTure, this.pointX, this.pointY, true, () => {
            Home.instace.removeChild(this);
        })
        let txt: egret.Bitmap = UI.addPic(this, "Word_20_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
    }

    public chooseHero(textTure: egret.Texture) {
        let btn: egret.Bitmap = this.addBtn(this, textTure, this.pointX, this.pointY, true, () => {
            Home.instace.removeChild(this);
        })
        let txt: egret.Bitmap = UI.addPic(this, "Word_21_png", this.pointX, this.pointY);
        txt.anchorOffsetY = txt.height/2;
    }

    public chooseLeve(textTure: string) {
        let btn: egret.TextField = UI.addText(this, textTure, this.pointX, this.pointY, true, 20, 0xffffff);
        UI.addClickAction(this, btn, () => {
            Home.instace.removeChild(this);
        })
        let txt: egret.Bitmap = UI.addPic(this, "Word_22_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
    }

    public start(textTure: egret.Texture) {
        let btn: egret.Bitmap = this.addBtn(this, textTure, this.pointX, this.pointY, true, () => {
            Home.instace.removeChild(this);
        })
        let txt: egret.Bitmap = UI.addPic(this, "Word_23_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
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

    public addBtn(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean=false, listener: Function, mc: any = null, scale: number = 1, sound: string = 'click'): any {
		let btn = new egret.Bitmap;
		btn.texture = path;
		node.addChild(btn);
		if (anchorCenterFlag) {
			btn.anchorOffsetX = btn.width / 2;
			btn.anchorOffsetY = btn.height / 2;
		}
		btn.x = x;
		btn.y = y;
		btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			btn.scaleX = 1.05 * scale
			btn.scaleY = 1.05 * scale;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
			if (listener != null) {
				if (mc)
					listener.call(mc, mc);
				else
					listener.call(node, node);
			}
			Sound.getInstance().oneTimesPlay(sound);
		}, node);
		btn.scaleX = scale;
		btn.scaleY = scale;
		btn.$setTouchEnabled(true);
		return btn;
	}
}