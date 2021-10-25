/**游戏开始时stage飘过特效 */
class StageTipEffect {

    public createStageEft(): Array<egret.Bitmap> {
        let stage = new egret.Bitmap;
        let num = new egret.Bitmap;
        let stages = new Array<egret.Bitmap>();
        stage.texture = RES.getRes("stage_png");
        UI.setXandY(stage, UI.WINSIZE_W, UI.WINSIZE_H * 2.4 / 4);
        UI.setscalXandY(stage, 1.5, 1.5);
        num.texture = RES.getRes("stage" + (GameData.I.lv_stage + 1) + "_png");
        UI.setXandY(num, UI.WINSIZE_W + stage.width * 1.6, UI.WINSIZE_H * 2.4 / 4);
        UI.setscalXandY(num, 1.5, 1.5);
        stages.push(stage);
        stages.push(num);
        return stages;
    }
}