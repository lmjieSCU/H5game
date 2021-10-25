

     class FighterEventDispatcher 
    {
        private static _dispatcher:egret.EventDispatcher = new egret.EventDispatcher();
        private static _addedEvents:Object = {};

        constructor()
        {
            return;
        }// end function

        public static hasEventListener(param1:string) : boolean
        {
            return FighterEventDispatcher._addedEvents[param1] != null;
        }// end function

        public static addEventListener(param1:string, param2:Function, param3:boolean = false, param4:number = 0, param5:boolean = false) 
        {
            FighterEventDispatcher._addedEvents[param1] = param2;
            FighterEventDispatcher._dispatcher.addEventListener(param1, param2, param3, param5, param4);
            return;
        }// end function

        public static removeEventListener(param1:string, param2:Function, param3:boolean = false) 
        {
            delete FighterEventDispatcher._addedEvents[param1];
            FighterEventDispatcher._dispatcher.removeEventListener(param1, param2, param3);
            return;
        }// end function

        public static removeAllListeners() 
        {
            for (var _loc_1 in FighterEventDispatcher._addedEvents)
            {
                
                FighterEventDispatcher._dispatcher.removeEventListener( _loc_1, FighterEventDispatcher._addedEvents[_loc_1], true);
            }
            FighterEventDispatcher._addedEvents = {};
            return;
        }// end function

        public static dispatchEvent(param1:BaseGameSprite, param2:string, param3:Object = null) 
        {
            var _loc_4:any = new FighterEvent(param2, false, false);
            _loc_4.fighter = param1;
            _loc_4.params = param3;
            FighterEventDispatcher._dispatcher.dispatchEvent(_loc_4);
            return;
        }// end function

    }


