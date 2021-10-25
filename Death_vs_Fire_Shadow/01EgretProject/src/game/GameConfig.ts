
 class GameConfig {
    public static  G: number = 12;
    public static  G_ADD: number = 1.2;
    public static  G_ON_FLOOR: number = 4;
    public static  GAME_SIZE: egret.Point = new egret.Point(800,480);
    public static  FPS_GAME:number = 60;
    public static  FPS_UI: number = 30;
    public static  FPS_ANIMATE: number = 30;
    public static  FPS_SHINE_EFFECT:number = 15;
    public static  SHOW_HOW_TO_PLAY:boolean = true;
    public static  SPEED_PLUS:number = 30 / 60;
    public static  BULLET_HOLD_FRAME_PLUS: number = 2;
    public static  JUMP_DELAY_FRAME: number = 2;
    public static  JUMP_DELAY_FRAME_AIR: number = 1;
    public static  JUMP_DAMPING: number = 0.5;
    public static  HURT_JUMP_FRAME: number = 15;
    public static  HURT_GAP_FRAME: number = 4;
    public static  BREAK_DEF_GAP_FRAME: number = 4;
    public static  BREAK_DEF_DOWN_GAP_FRAME: number = 10;
    public static  BREAK_DEF_HOLD_FRAME: number = 42;
    public static  DEFENSE_GAP_FRAME: number = 4;
    public static  DEFENSE_DAMPING_X: number = 1;
    public static  DEFENSE_GAP_FRAME_DOWN: number = 8;
    public static  DEFENSE_LOSE_HP_RATE: number = 0.05;
    public static  DEFENSE_HOLD_FRAME_MIN: number = 5;
    public static  DEFENSE_HOLD_FRAME_MAX: number = 10;
    public static  DEFENSE_HOLD_FRAME_DOWN: number = 10;
    public static  HURT_DAMPING_X: number = 0.1;
    public static  HURT_DAMPING_Y: number = 0.5;
    public static  HURT_Y_ADD_INAIR: number = 3;
    public static  HURT_Y_ADD: number = 6;
    public static  HURT_FLY_DAMPING_X: number = 0;
    public static  HURT_FLY_DAMPING_Y: number = 0.5;
    public static  HIT_FLOOR_DAMPING_X: number = 2;
    public static  HIT_FLOOR_DAMPING_X_HEAVY: number = 4;
    public static  HIT_FLOOR_TAN_Y_MIN: number = 3;
    public static  HIT_FLOOR_TAN_Y_MAX: number = 8;
    public static  HIT_DOWN_FRAME: number = 15;
    public static  HIT_DOWN_FRAME_HEAVY: number = 30;
    public static  HIT_DOWN_BY_HITY: number = 5;
    public static  NO_TOUCH_BAN_ON_VECY: number = 5;
    public static  HURT_FRAME_OFFSET:number = 3;
    public static  X_SIDE_OFFSET: number = 10;
    public static  HURT_DOWN_JUMP_FRAME: number = 20;
    public static  HURT_DOWN_JUMP_DAMPING: number = 1;
    public static  USE_ENERGY_CD: number = 0.8;
    public static  ENERGY_ADD_NORMAL: number = 2;
    public static  ENERGY_ADD_DEFENSE: number = 0.8;
    public static  ENERGY_ADD_OVER_LOAD_PERFRAME: number = 0.6;
    public static  ENERGY_ADD_OVER_LOAD_RESUME: number = 30;
    public static  QI_ADD_HIT_BISHA_RATE: number = 0.02;
    public static  QI_ADD_HIT_RATE: number = 0.17;
    public static  QI_ADD_HIT_BULLET_RATE: number = 0.1;
    public static  QI_ADD_HIT_ATTACKER_RATE: number = 0.13;
    public static  QI_ADD_HIT_ASSISTER_RATE: number = 0.15;
    public static  QI_ADD_HIT_MAX: number = 15;
    public static  QI_ADD_HURT_RATE: number = 0.08;
    public static  QI_ADD_HURT_MAX: number = 20;
    public static  FUZHU_QU_ADD_PERFRAME: number = 0.2;
    public static  CAMERA_TWEEN_SPD: number = 2.5;
    public static  FIGHTER_HP_MAX: number = 1000;
    public static  MAP_LOGO_STATE:number = 0;
    public static setGameFps(param1:number) 
        {
            GameConfig.FPS_GAME = param1;
            GameConfig.SPEED_PLUS = GameConfig.SPEED_PLUS_DEFAULT;
            return;
        }// end function

        public static get SPEED_PLUS_DEFAULT() : number
        {
            return 30 / GameConfig.FPS_GAME;
        }// end function
}
