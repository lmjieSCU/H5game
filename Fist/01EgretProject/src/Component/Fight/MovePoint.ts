class MovePoint extends egret.DisplayObjectContainer implements egret.DisplayObject {
    private targetMove: egret.DisplayObjectContainer;

    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        FightMainRender.getInstance().Add(this, this.update);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
    }

    private player: number = SplashScene.instance.P2OwnTheBtn ? 2 : 1;
    private p1yz: egret.Bitmap;
    private p2yz: egret.Bitmap;
    private p1yzy: number;
    private p2yzy: number;
    private yzScale = 0.3;

    onEnter() {
        this.targetMove = new egret.DisplayObjectContainer();
        // let point: egret.Shape = new egret.Shape();
        // point.graphics.beginFill(0x000000);
        // point.graphics.drawRect(0, 0, 50, 10);
        // point.graphics.endFill();
        let point: egret.Bitmap = UI.addPic(this, "Fight_pic_lightning_png", 0, 0, true);
        point.anchorOffsetX = point.width / 2;
        this.targetMove.addChild(point);
        this.targetMove.y = _level0.P1_role.y - 250;
        this.addChild(this.targetMove);

        this.p1yz = UI.addPic(this, "yz_png", 0, 0, true, this.yzScale);
        this.p2yz = UI.addPic(this, "yz_png", 0, 0, true, this.yzScale);
        this.p1yz.y = _level0.P1_role.y;
        this.p2yz.y = _level0.P2_role.y;
        this.p1yz.anchorOffsetX = this.p1yz.width/8*5;
        this.p2yz.anchorOffsetX = this.p1yz.width/8*3;
        this.p1yzy = this.p1yz.y;
        this.p2yzy = this.p2yz.y;
    }

    update() {
        switch (this.player) {
            case 1: this.targetMove.x = _level0.P1_role.x; this.targetMove.y = _level0.P1_role.y - 250;break;
            case 2: this.targetMove.x = _level0.P2_role.x; this.targetMove.y = _level0.P2_role.y - 250;break;
        }
        this.p1yz.x = _level0.P1_role.x;
        this.p2yz.x = _level0.P2_role.x;
        this.p1yz.$setScaleX(_level0.P1_role.y/this.p1yzy*2*this.yzScale);
        this.p1yz.$setScaleY(_level0.P1_role.y/this.p1yzy*this.yzScale);
        this.p2yz.$setScaleX(_level0.P2_role.y/this.p2yzy*2*this.yzScale);
        this.p2yz.$setScaleY(_level0.P2_role.y/this.p2yzy*this.yzScale);
    }

    onExit() {
        FightMainRender.getInstance().Remove(this, this.update);
    }
}