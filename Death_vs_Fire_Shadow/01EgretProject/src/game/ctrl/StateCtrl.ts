
    class StateCtrl
    {
        public  transEnabled:boolean = true;
        private _transUI:TransUI;
        public static  _i:StateCtrl;

        public constructor()
        {
            return;
        }// end function

        public transOut(param1:Function = null, param2:boolean = true)
        {

        }

        public transIn(param1:Function = null, param2:boolean = true)
        {

        }

        public quickTrans()
        {
            
        }

        public static get I() : StateCtrl
        {
            if (!StateCtrl._i)
            {
                StateCtrl._i = new StateCtrl;
            }
            return StateCtrl._i;
        }// end function

    }

