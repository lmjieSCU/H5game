/**道具仓库 */
class PropPanel extends Elements {


    public constructor() {
        super();
        let loc5 = 0;
        let loc6 = null;
        let loc7 = null;
        let board = UI.addPic("res.propBoarder", true, this);
        UI.setscalXandY(board, 1.5, 1);
        let loc2 = false;
        let loc3 = 0;
        let loc4 = 0;
        while (loc4 < Model.levelModel.buyProps.length) {
            loc5 = Model.levelModel.buyProps[loc4];
            if (!((loc6 = Config.propCfgParser.getPropCfg(loc5)).type == PropType.PROP_2) && !(loc6.type == PropType.PROP_3) && !(loc6.type == PropType.PROP_7)) {
                (loc7 = new PropItem(loc6)).x = loc3 * 53 + 40 - this.width / 2;
                // loc7.y = 0;
                this.addChild(loc7);
                loc2 = true;
                ++loc3;
            }
            ++loc4;
        }
        if (loc2) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
        return;
    }

}



class PropItem extends Elements {

    public data: PropCfg;

    public _count: number;

    public countLabel: egret.BitmapText;

    public btn: egret.Bitmap;

    public constructor(arg1: PropCfg) {
        super();
        this.data = arg1;
        this.btn = UI.addPic("res.prop_" + arg1.id, true, this);
        UI.addClickAction(this, this.btn, this.onBtnTouch);
        this.countLabel = UI.addBitText(this, "", "info_fnt", false, 0, 40);
        this.countLabel.textAlign = "left";
        this.setCount(this.data.p1);
        return;
    }

    public onBtnTouch(arg1: egret.TouchEvent): void {
        if (GameScene.instance.isOver || !GameScene.instance.isReady) {
            return;
        }
        this.setCount((this.getCount() - 1));
        if (this.data.type == PropType.PROP_6) {
            GameScene.instance.addShieldToLunchBubble(this.x, this.y);
        }
        else {
            GameScene.instance.changeLunchBubble(this.data.p2, this.x, this.y);
        }
        return;
    }

    public setCount(arg1: number): void {
        this._count = arg1;
        this.countLabel.text = String(arg1);
        if (arg1 == 0) {
            this.btn.$setTouchEnabled(false);
        }
        return;
    }

    public getCount(): number {
        return this._count;
    }


}