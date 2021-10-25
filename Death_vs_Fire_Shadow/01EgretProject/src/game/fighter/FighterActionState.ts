
class FighterActionState
    {
        public static NORMAL:number = 0;
        public static FREEZE:number = 40;
        public static ATTACK_ING:number = 10;
        public static SKILL_ING:number = 11;
        public static BISHA_ING:number = 12;
        public static BISHA_SUPER_ING:number = 13;
        public static JUMP_ING:number = 14;
        public static DASH_ING:number = 15;
        public static HURT_ACT_ING:number = 16;
        public static DEFENCE_ING:number = 20;  
        public static HURT_ING:number = 21;
        public static HURT_FLYING:number = 22;
        public static HURT_DOWN:number = 23;
        public static HURT_DOWN_TAN:number = 24;
        public static DEAD:number = 30;
        public static WAN_KAI_ING:number = 50;
        public static KAI_CHANG:number = 60;
        public static WIN:number = 61;
        public static LOSE:number = 62;

        constructor()
        {
            return;
        }// end function

        public static isAllowWinState(param1:number) : boolean
        {
            return param1 != 12 && param1 != 13 && param1 != 50;
        }// end function

        public static isAttacking(param1:number) : boolean
        {
            return [10, 11, 12, 13].indexOf(param1) != -1;
        }// end function

        public static allowGhostStep(param1:number) : boolean
        {
            return param1 != 12 && param1 != 13 && param1 != 50;
        }// end function

        public static isHurting(param1:number) : boolean
        {
            return [21, 22, 23, 24].indexOf(param1) != -1;
        }// end function

    }

