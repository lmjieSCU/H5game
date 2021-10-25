

     class FighterEvent extends egret.Event
    {
        public params:any;
        public fighter:BaseGameSprite;
        public static FIRE_BULLET:string = "FIRE_BULLET";
        public static ADD_ATTACKER:string = "ADD_ATTACKER";
        public static ADD_ASSISTER:string = "ADD_ASSISTER";
        public static HIT_TARGET:string = "HIT_TARGET";
        public static HURT_RESUME:string = "HURT_RESUME";
        public static HURT_DOWN:string = "HURT_DOWN";
        public static DIE:string = "DIE";
        public static DO_ACTION:string = "DO_ACTION";

        constructor(param1:string, param2:boolean = false, param3:boolean = false)
        {
            super(param1, param2, param3);
            return;
        }// end function

    }


