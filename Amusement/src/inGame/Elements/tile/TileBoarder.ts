class TileBoarder extends Elements {

    public static x_border_heng_shang: number = 1;

    public static x_border_heng_xia: number = 2;

    public static x_border_left_down: number = 3;

    public static x_border_left_down_x: number = 4;

    public static x_border_left_up: number = 5;

    public static x_border_left_up_x: number = 6;

    public static x_border_right_down: number = 7;

    public static x_border_right_down_x: number = 8;

    public static x_border_right_up: number = 9;

    public static x_border_right_up_x: number = 10;

    public static x_border_shu_you: number = 11;

    public static x_border_shu_zuo: number = 12;

    public static pool: BasePool = new BasePool(TileBoarder, 100);

    public resDict: Dicts;

    public constructor() {
        super();
        this.resDict = new Dicts();
        this.resDict.put(1, UI.addPic("x_border_heng_shang_png", true, this));
        this.resDict.put(2, UI.addPic("x_border_heng_xia_png", true, this));
        this.resDict.put(3, UI.addPic("x_border_left_down_png", true, this));
        this.resDict.put(4, UI.addPic("x_border_left_down_x_png", true, this));
        this.resDict.put(5, UI.addPic("x_border_left_up_png", true, this));
        this.resDict.put(6, UI.addPic("x_border_left_up_x_png", true, this));
        this.resDict.put(7, UI.addPic("x_border_right_down_png", true, this));
        this.resDict.put(8, UI.addPic("x_border_right_down_x_png", true, this));
        this.resDict.put(9, UI.addPic("x_border_right_up_png", true, this));
        this.resDict.put(10, UI.addPic("x_border_right_up_x_png", true, this));
        this.resDict.put(11, UI.addPic("x_border_shu_you_png", true, this));
        this.resDict.put(12, UI.addPic("x_border_shu_zuo_png", true, this));
        return;
    }

    public setType(arg1: number, arg2: egret.DisplayObjectContainer, arg3: number, arg4: number): void {
        arg2.addChild(this);
        for (let loc1 in this.resDict.dict) {
            this.resDict.dict[loc1].visible = false;
        }
        this.x = arg3;
        this.y = arg4;
        this.resDict.dict[arg1].visible = true;
        return;
    }

}
