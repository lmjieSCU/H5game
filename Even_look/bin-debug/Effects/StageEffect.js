var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**游戏开始时stage飘过特效 */
var StageTipEffect = (function () {
    function StageTipEffect() {
    }
    StageTipEffect.prototype.createStageEft = function () {
        var stage = new egret.Bitmap;
        var num = new egret.Bitmap;
        var stages = new Array();
        stage.texture = RES.getRes("stage_png");
        UI.setXandY(stage, UI.WINSIZE_W, UI.WINSIZE_H * 2.4 / 4);
        UI.setscalXandY(stage, 1.5, 1.5);
        num.texture = RES.getRes("stage" + (GameData.I.lv_stage + 1) + "_png");
        UI.setXandY(num, UI.WINSIZE_W + stage.width * 1.6, UI.WINSIZE_H * 2.4 / 4);
        UI.setscalXandY(num, 1.5, 1.5);
        stages.push(stage);
        stages.push(num);
        return stages;
    };
    return StageTipEffect;
}());
__reflect(StageTipEffect.prototype, "StageTipEffect");
//# sourceMappingURL=StageEffect.js.map