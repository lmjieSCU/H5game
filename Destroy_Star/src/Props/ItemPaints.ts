/**更改指定星星颜色 */
class ItemPaint extends egret.DisplayObjectContainer {
    private father: Diamonds;
    private bg: egret.Bitmap;
    private red: egret.Bitmap;
    private yellow: egret.Bitmap;
    private green: egret.Bitmap;
    private blue: egret.Bitmap;
    private purple: egret.Bitmap;
    private returns: egret.Bitmap;
    private colorFun: any;


    constructor(star: Diamonds) {
        super();
        this.father = star;
        star.stage.addChild(this);
        this.bg = UI.addPic(this, "background_png", UI.WINSIZE_W / 2, star.y - 65, true);
        this.red = UI.addPic(this, "red_png", UI.WINSIZE_W * 2.5 / 10, star.y -70, true);
        this.yellow = UI.addPic(this, "yellow_png", UI.WINSIZE_W * 3.5 / 10, star.y -70, true);
        this.green = UI.addPic(this, "green_png", UI.WINSIZE_W * 4.5 / 10, star.y -70, true);
        this.blue = UI.addPic(this, "blue_png", UI.WINSIZE_W * 5.5 / 10, star.y -70, true);
        this.purple = UI.addPic(this, "purple_png", UI.WINSIZE_W * 6.5 / 10, star.y -70, true);
        this.returns = UI.addPic(this, "return_png", UI.WINSIZE_W * 7.5 / 10, star.y -70, true);
        this.colorFun = {};
        for (let i: number = 0; i < this.numChildren; i++) {
            this.$children[i].$setTouchEnabled(true);
        }
        this.addBtn();

    }


    private addBtn(): void {
        this.colorFun["red"] = this.TurnColor.bind(this, 2);
        this.colorFun["yellow"] = this.TurnColor.bind(this, 3);
        this.colorFun["green"] = this.TurnColor.bind(this, 4);
        this.colorFun["blue"] = this.TurnColor.bind(this, 5);
        this.colorFun["purple"] = this.TurnColor.bind(this, 6);
        this.red.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["red"], this);
        this.yellow.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["yellow"], this);
        this.green.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["green"], this);
        this.blue.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["blue"], this);
        this.purple.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["purple"], this);
        this.returns.addEventListener(egret.TouchEvent.TOUCH_END, this.ReturnBack, this);

    }

    private TurnColor(color: number): void {
        this.father.color = color;
        this.father.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(color);
        MainMoive.instance.caidan.DeleteJinbi(2,2);
        this.ReturnBack();
    }

    private ReturnBack(): void {
        ItemModel.currentMode = ItemModel.NO_ITEM;
        MainMoive.instance.touchEnbled = true;
        MainMoive.instance.caidan.Animation("Paint",true);
        this.red.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["red"], this);
        this.yellow.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["yellow"], this);
        this.green.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["green"], this);
        this.blue.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["blue"], this);
        this.purple.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["purple"], this);
        this.returns.removeEventListener(egret.TouchEvent.TOUCH_END, this.ReturnBack, this);
        this.parent.removeChild(this);
    }
}