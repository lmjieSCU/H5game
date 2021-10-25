
    class KeyBoarder extends Object
    {
        private static _inited:boolean;
        private static _stage:egret.Stage;
        private static _keyHandlers:any[] = [];

        public KeyBoarder()
        {
            return;
        }// end 

        public static initlize(param1:egret.Stage) 
        {
            /*
            if (_inited)
            {
                return;
            }
            _inited = true;
            _stage = param1;
            param1.addEventListener("keyDown", keyBoardHandler);
            param1.addEventListener("keyUp", keyBoardHandler);
            */
            return;
        }// end 

        public static focus() 
        {
            /*
            if (!_inited)
            {
                return;
            }
            _stage.focus = _stage;
            */
            return;
        }// end 

        public static listen(param1:any) 
        {
            /*
            if (!_inited)
            {
                return;
            }
            if (_keyHandlers.indexOf(param1) == -1)
            {
                _keyHandlers.push(param1);
            }
            */
            return;
        }// end 

        public static unListen(param1:any) 
        {
             /*
            if (!_inited)
            {
                return;
            }
            if (_keyHandlers.indexOf(param1) != -1)
            {
                _keyHandlers.splice(_keyHandlers.indexOf(param1), 1);
            }
            */
            return;
        }// end 

        private static  keyBoardHandler(event:KeyboardEvent) 
        {
            /*
            if (!_inited)
            {
                return;
            }
            var _loc_2 = 0;
            _loc_2 = 0;
            while (_loc_2 < _keyHandlers.length)
            {
                
                _keyHandlers._keyHandlers[_loc_2](event);
                _loc_2++;
            }
            return;
            */
        }// end 

    }
