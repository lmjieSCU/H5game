var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConfig = (function () {
    function GameConfig() {
    }
    GameConfig.setGameFps = function (param1) {
        GameConfig.FPS_GAME = param1;
        GameConfig.SPEED_PLUS = GameConfig.SPEED_PLUS_DEFAULT;
        return;
    }; // end function
    Object.defineProperty(GameConfig, "SPEED_PLUS_DEFAULT", {
        get: function () {
            return 30 / GameConfig.FPS_GAME;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    GameConfig.G = 12;
    GameConfig.G_ADD = 1.2;
    GameConfig.G_ON_FLOOR = 4;
    GameConfig.GAME_SIZE = new egret.Point(800, 480);
    GameConfig.FPS_GAME = 60;
    GameConfig.FPS_UI = 30;
    GameConfig.FPS_ANIMATE = 30;
    GameConfig.FPS_SHINE_EFFECT = 15;
    GameConfig.SHOW_HOW_TO_PLAY = true;
    GameConfig.SPEED_PLUS = 30 / 60;
    GameConfig.BULLET_HOLD_FRAME_PLUS = 2;
    GameConfig.JUMP_DELAY_FRAME = 2;
    GameConfig.JUMP_DELAY_FRAME_AIR = 1;
    GameConfig.JUMP_DAMPING = 0.5;
    GameConfig.HURT_JUMP_FRAME = 15;
    GameConfig.HURT_GAP_FRAME = 4;
    GameConfig.BREAK_DEF_GAP_FRAME = 4;
    GameConfig.BREAK_DEF_DOWN_GAP_FRAME = 10;
    GameConfig.BREAK_DEF_HOLD_FRAME = 42;
    GameConfig.DEFENSE_GAP_FRAME = 4;
    GameConfig.DEFENSE_DAMPING_X = 1;
    GameConfig.DEFENSE_GAP_FRAME_DOWN = 8;
    GameConfig.DEFENSE_LOSE_HP_RATE = 0.05;
    GameConfig.DEFENSE_HOLD_FRAME_MIN = 5;
    GameConfig.DEFENSE_HOLD_FRAME_MAX = 10;
    GameConfig.DEFENSE_HOLD_FRAME_DOWN = 10;
    GameConfig.HURT_DAMPING_X = 0.1;
    GameConfig.HURT_DAMPING_Y = 0.5;
    GameConfig.HURT_Y_ADD_INAIR = 3;
    GameConfig.HURT_Y_ADD = 6;
    GameConfig.HURT_FLY_DAMPING_X = 0;
    GameConfig.HURT_FLY_DAMPING_Y = 0.5;
    GameConfig.HIT_FLOOR_DAMPING_X = 2;
    GameConfig.HIT_FLOOR_DAMPING_X_HEAVY = 4;
    GameConfig.HIT_FLOOR_TAN_Y_MIN = 3;
    GameConfig.HIT_FLOOR_TAN_Y_MAX = 8;
    GameConfig.HIT_DOWN_FRAME = 15;
    GameConfig.HIT_DOWN_FRAME_HEAVY = 30;
    GameConfig.HIT_DOWN_BY_HITY = 5;
    GameConfig.NO_TOUCH_BAN_ON_VECY = 5;
    GameConfig.HURT_FRAME_OFFSET = 3;
    GameConfig.X_SIDE_OFFSET = 10;
    GameConfig.HURT_DOWN_JUMP_FRAME = 20;
    GameConfig.HURT_DOWN_JUMP_DAMPING = 1;
    GameConfig.USE_ENERGY_CD = 0.8;
    GameConfig.ENERGY_ADD_NORMAL = 2;
    GameConfig.ENERGY_ADD_DEFENSE = 0.8;
    GameConfig.ENERGY_ADD_OVER_LOAD_PERFRAME = 0.6;
    GameConfig.ENERGY_ADD_OVER_LOAD_RESUME = 30;
    GameConfig.QI_ADD_HIT_BISHA_RATE = 0.02;
    GameConfig.QI_ADD_HIT_RATE = 0.17;
    GameConfig.QI_ADD_HIT_BULLET_RATE = 0.1;
    GameConfig.QI_ADD_HIT_ATTACKER_RATE = 0.13;
    GameConfig.QI_ADD_HIT_ASSISTER_RATE = 0.15;
    GameConfig.QI_ADD_HIT_MAX = 15;
    GameConfig.QI_ADD_HURT_RATE = 0.08;
    GameConfig.QI_ADD_HURT_MAX = 20;
    GameConfig.FUZHU_QU_ADD_PERFRAME = 0.2;
    GameConfig.CAMERA_TWEEN_SPD = 2.5;
    GameConfig.FIGHTER_HP_MAX = 1000;
    GameConfig.MAP_LOGO_STATE = 0;
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map