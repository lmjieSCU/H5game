
    class FighterHitRange //攻击类别
    {
        public static  JUMP_ATTACK:string = "tkanmian";
        public static  JUMP_SKILL:string = "tzmian";
        public static  ATTACK:string = "kanmian";
        public static  SKILL1:string = "kj1mian";
        public static  SKILL2:string = "kj2mian";
        public static  ZHAO1:string = "zh1mian";
        public static  ZHAO2:string = "zh2mian";
        public static  ZHAO3:string = "zh3mian";
        public static  BISHA:string = "bsmian";
        public static  BISHA_AIR:string = "kbsmian";
        public static  BISHA_UP:string = "sbsmian";
        public static  BISHA_SUPER:string = "cbsmian";

        public constructor()
        {
            return;
        }// end function

        public static getALL() : any[]
        {
            return ["tkanmian", "tzmian", "kanmian", "kj1mian", "kj2mian", "zh1mian", "zh2mian", "zh3mian", "bsmian", "kbsmian", "sbsmian", "cbsmian"];
        }// end function

    }

