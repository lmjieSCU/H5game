/**传送门 */
class TransportDoor extends Elements {

    public animation: egret.MovieClip;

    public _tileID: number;

    public row: number;

    public col: number;

    public static pool: BasePool = new BasePool(TransportDoor, 10);

    public constructor() {
        super();
        let data = RES.getRes("TransportDoor_json");
        let txtr = RES.getRes("TransportDoor_png");
        let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("TransportDoor"));
        this.animation.frameRate = 5;
        this.animation.anchorOffsetX = this.animation.width / 2;
        this.animation.anchorOffsetY = this.animation.height / 2;
        this.addChild(this.animation);
        return;
    }

    public start(): void {
        this.animation.gotoAndPlay(1, -1);
        return;
    }

    public get tileID(): number {
        return this._tileID;
    }

    public set tileID(arg1: number) {
        this._tileID = arg1;
        if (arg1 >= TileConst.T_DOOR_ENTRY1 && arg1 <= TileConst.T_DOOR_ENTRY9) {
            this.animation.y = 30;
        }
        else if (arg1 >= TileConst.T_DOOR_EXIT1 && arg1 <= TileConst.T_DOOR_EXIT9) {
            this.animation.y = -30;
        }
        return;
    }

    public dispose(): void {
        return;
    }

}
