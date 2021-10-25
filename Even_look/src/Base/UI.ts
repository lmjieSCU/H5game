/**配置各显示对象显示属性 */
class UI {
    public static WINSIZE_H: number = 0;
    public static WINSIZE_W: number = 0;

    //增加图片
    public static addPic(node: any, path: any, anchorCenterFlag: boolean = false): egret.Bitmap {
        let image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    }

    public static setXandY(image: any, x: number, y: number): void {
        image.x = x;
        image.y = y;
    }

    public static setscalXandY(image: any, x: number, y: number): void {
        image.scaleX = x;
        image.scaleY = y;
    }

    //增加文本
    public static addText(node: any, desc: any, tag: boolean = false): egret.TextField {
        let label: egret.TextField = new egret.TextField();
        label.text = desc;
        label.textColor = 0xffffff;
        label.fontFamily = "KaiTi";
        node.addChild(label);
        if (tag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        return label;
    }


    public static addClickAction(node: any, bb: any, listenerTouch: Function) {
        let scaleX = bb.scaleX;
        let scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1.2;
            bb.scaleY = scaleY * 1.2;
        }, this);

        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(node);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(node);
        }, node);
        bb.$setTouchEnabled(true);
    }


}