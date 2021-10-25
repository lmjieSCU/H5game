/**游戏开始逻辑
 * 初始化cellgrid
 */

class GameStartCtrl {

    constructor() {
    }

    /**重设grid,初始化cells */
    public dostartGame() {
        GameCtrl.I._fightCtrl.init();
    }
}