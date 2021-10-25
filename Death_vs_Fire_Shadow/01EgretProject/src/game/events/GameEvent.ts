
class GameEvent extends egret.Event
    {
        public param:Object;
        public static SCORE_UPDATE:string = "SCORE_UPDATE";
        public static PAUSE_GAME:string = "PAUSE_GAME";
        public static RESUME_GAME:string = "RESUME_GAME";
        public static LOAD_GAME_COMPLETE:string = "LOAD_GAME_COMPLETE";
        public static GAME_START:string = "GAME_START";
        public static ROUND_START:string = "ROUND_START";
        public static ROUND_END:string = "ROUND_END";
        public static GAME_END:string = "GAME_END";
        public static GAME_OVER:string = "GAME_OVER";
        public static GAME_PASS_ALL:string = "GAME_PASS_ALL";
        public static SELECT_FIGHTER_STEP:string = "SELECT_FIGHTER_STEP";
        public static SELECT_FIGHTER_FINISH:string = "SELECT_FIGHTER_FINISH";
        public static SELECT_FIGHTER_INDEX:string = "SELECT_FIGHTER_INDEX";
        private static _dispatcher:egret.EventDispatcher = new egret.EventDispatcher();

        constructor(param1:string, param2 = null, param3:boolean = false, param4:boolean = false)
        {
            super(param1, param3, param4);
            this.param = param2;
            return;
        }// end function

        public static dispatchEvent2(param1:string, param2 = null, param3:boolean = false, param4:boolean = false) 
        {
            GameEvent._dispatcher.dispatchEvent(new GameEvent(param1, param2, param3, param4));
            return;
        }// end function

        public static addEventListener(param1:string, param2:Function, param3:boolean = false, param4:number = 0, param5:boolean = false) : void
        {
            GameEvent._dispatcher.addEventListener(param1, param2, param3,param5, param4);
            return;
        }// end function

        public static removeEventListener(param1:string, param2:Function, param3:boolean = false) : void
        {
            GameEvent._dispatcher.removeEventListener(param1, param2, param3);
            return;
        }// end function

    }

