

    class GameLoger extends egret.DisplayObject
    {
        private static _loger:ILoger;

        public GameLoger()
        {
            return;
        }// end function

        public static setLoger(param1:ILoger) 
        {
            this._loger = param1;
            return;
        }// end function

        public static log(param1:string) 
        {
            if (this._loger)
            {
                //_loger.log(param1);
            }
            else
            {
                //GameLoger.trace(param1);
            }
            return;
        }// end function

    }

