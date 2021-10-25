/**手指移动*/
class GuideArrow extends egret.DisplayObjectContainer {

    public p1Pos: egret.Point;

    public p2Pos: egret.Point;

    public shouzhi: egret.Bitmap;

    public constructor() {
        super();
        this.shouzhi = UI.addPic("shouzhi_png", true, this);
        this.shouzhi.x = this.shouzhi.width / 2;
        this.shouzhi.y = this.shouzhi.height / 2;
        return;
    }

    public moveBetween(arg1: egret.Point, arg2: egret.Point): void {
        this.shouzhi.alpha = 1;
        this.p1Pos = GameCtrl.I._fightCtrl.getCandyPosition(arg1.x, arg1.y);
        this.p2Pos = GameCtrl.I._fightCtrl.getCandyPosition(arg2.x, arg2.y);
        this.x = this.p1Pos.x;
        this.y = this.p1Pos.y;
        let disX = this.p2Pos.x - this.p1Pos.x;
        let disY = this.p2Pos.y - this.p1Pos.y;
        let dis = Math.sqrt(disX * disX + disY * disY);
        egret.Tween.get(this, { loop: true }).to({ "x": this.p2Pos.x, "y": this.p2Pos.y, }, dis * 10).wait(200).to({ "x": this.p1Pos.x, "y": this.p1Pos.y, }, dis * 10);
        return;
    }

    public clear() {
        egret.Tween.removeTweens(this);
        this.shouzhi.alpha = 0;
        return;
    }


}
