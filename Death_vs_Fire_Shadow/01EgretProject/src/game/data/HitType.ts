class HitType extends Object
    {
        public static  KAN:number = 1;
        public static  KAN_HEAVY:number = 6;
        public static  DA:number = 2;
        public static  DA_HEAVY:number = 3;
        public static  MAGIC:number = 4;
        public static  MAGIC_HEAVY:number = 5;
        public static  FIRE:number = 7;
        public static  ICE:number = 8;
        public static  ELECTRIC:number = 9;
        public static  STONE:number = 10;
        public static  CATCH:number = 11;
        private static  heavyTypes:any[] = [6, 3, 5, 7, 8, 9];

        public HitType()
        {
            return;
        }// end function

        public static isHeavy(param1:number) : boolean
        {
            return this.heavyTypes.indexOf(param1) != -1;
        }// end function

    }

