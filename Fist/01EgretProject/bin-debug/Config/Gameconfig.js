var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConfig = (function () {
    function GameConfig() {
    }
    /**适配屏幕大小*/
    GameConfig.zoomFightWindow = function () {
        if (UI.WINSIZE_H == undefined) {
            return;
        }
        egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.EXACT_FIT; //FIXED_WIDTH
        egret.MainContext.instance.stage.setContentSize(GameConfig.FightWidth, GameConfig.FightHeight);
        //更新参数
        UI.WINSIZE_W = egret.MainContext.instance.stage.stageWidth;
        UI.WINSIZE_H = egret.MainContext.instance.stage.stageHeight;
        // console.log(UI.WINSIZE_W, UI.WINSIZE_H);
        return;
    };
    GameConfig.setStage_image = function (image) {
        GameConfig.stage_image = image;
        GameConfig.stageWidth = image.width;
        return;
    };
    GameConfig.FightWidth = 1068; //战斗窗口长度1068
    GameConfig.FightHeight = 480; //战斗窗口长度1068
    GameConfig.land_Y = 440;
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=Gameconfig.js.map