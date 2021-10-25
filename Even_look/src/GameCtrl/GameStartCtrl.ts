/**游戏开始逻辑
 * 初始化cellgrid
 */

class GameStartCtrl {

    constructor() {
    }

    /**重设grid,初始化cells */
    public dostartGame() {
        let stageinfos = GameData.I.stageInfo(GameData.I.level);
        if (stageinfos.length >= 10) {
            SoundCtrl.I.playbgSound("bossbgLv");
        } else {
            SoundCtrl.I.playbgSound("bgsound");
        }
        GameCtrl.I._gridCtrl.gridInit(stageinfos[GameData.I.lv_stage].x,
            stageinfos[GameData.I.lv_stage].y);

        return;
    }

}