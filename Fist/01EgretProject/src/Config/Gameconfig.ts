class GameConfig {

    public static stageWidth;//舞台窗口长度
    public static FightWidth = 1068;//战斗窗口长度1068
    public static FightHeight = 480;//战斗窗口长度1068
    public static land_Y = 440;
    public static stage_image: egret.Bitmap;

    /**适配屏幕大小*/
    public static zoomFightWindow() {
        if (UI.WINSIZE_H == undefined) {
            return;
        }
        egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;//FIXED_WIDTH
        egret.MainContext.instance.stage.setContentSize(GameConfig.FightWidth, GameConfig.FightHeight);
        //更新参数
        UI.WINSIZE_W = egret.MainContext.instance.stage.stageWidth;
        UI.WINSIZE_H = egret.MainContext.instance.stage.stageHeight;

        // console.log(UI.WINSIZE_W, UI.WINSIZE_H);
        return;
    }


    public static setStage_image(image: egret.Bitmap) {
        GameConfig.stage_image = image;
        GameConfig.stageWidth = image.width;
        return;
    }


}
