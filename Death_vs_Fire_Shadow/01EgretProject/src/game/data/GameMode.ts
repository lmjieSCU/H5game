
    class GameMode 
    {
        public static  TEAM_ACRADE:number = 10;                 //小队--闯关模式
        public static  TEAM_VS_PEOPLE:number = 11;              //小队--真人对战
        public static  TEAM_VS_CPU:number = 12;                 //小队--电脑对战
//
        public static  SINGLE_ACRADE:number = 20;               //个人--闯关模式
        public static  SINGLE_VS_PEOPLE:number = 21;            //个人--真人对战
        public static  SINGLE_VS_PEOPLE_TYPE :number = 0;       //个人--真人对战--0自由匹配--1房间号匹配
        public static  SINGLE_VS_CPU:number = 22;               //个人--电脑对战
//
        public static  SURVIVOR:number = 30;                     
        public static  TRAINING:number = 40;                    //训练模式
//
        public static currentMode:number = GameMode.TRAINING //默认设置模式(单人模式)

        constructor()
        {
            return;
        }// end function

        public static getTeams() : any[]
        {
            return [{id:1, name:"P1"}, {id:2, name:"P2"}];
        }// end function

        public static isTeamMode() : boolean
        {
            return this.currentMode == GameMode.TEAM_ACRADE || this.currentMode == GameMode.TEAM_VS_CPU || this.currentMode == GameMode.TEAM_VS_PEOPLE;
        }// end function

        public static isSingleMode() : boolean
        {
            return this.currentMode == GameMode.SINGLE_ACRADE || this.currentMode == GameMode.SINGLE_VS_CPU || this.currentMode == GameMode.SINGLE_VS_PEOPLE;
        }// end function

        public static isVsPeople() : boolean
        {
            return this.currentMode == GameMode.TEAM_VS_PEOPLE || this.currentMode == GameMode.SINGLE_VS_PEOPLE;
        }// end function

        public static isVsCPU(param1:boolean = true) : boolean
        {
            return this.currentMode == GameMode.TEAM_VS_CPU || this.currentMode == GameMode.SINGLE_VS_CPU || param1 && this.currentMode == GameMode.TRAINING;
        }// end function

        public static isAcrade() : boolean
        {
            return this.currentMode == GameMode.SINGLE_ACRADE || this.currentMode == GameMode.TEAM_ACRADE || this.currentMode == GameMode.SURVIVOR;
        }// end function

    }
