
    class GameData extends Object
    {
        public config:ConfigVO;
        public p1Select:SelectVO;
        public p2Select:SelectVO;
        public selectMap:string;
        public score:number = 0;
        public isFristRun:boolean = true;
        private  SAVE_ID:string = "bvn3.01";
        private static _i:GameData;

        public constructor()
        {
            super();
            this.config = new ConfigVO();
            this.p1Select = new SelectVO();
            this.p2Select = new SelectVO();
            return;
        }// end function

        public loadConfig(param1:Function, param2:Function = null) 
        {
            
            return;
        }// end function

        public saveData() 
        {
           
            return;
        }// end function

        public loadData() 
        {
           
            return;
        }// end function

        public static get I() : GameData
        {
            if (!GameData._i)
            {
                GameData._i = new GameData();
            }
            return GameData._i;
        }// end function

    }

