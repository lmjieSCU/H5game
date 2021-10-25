

     class SetBtnEvent extends egret.Event
    {
        public selectedLabel:string;
        public optionKey:string;
        public optionValue:Object;
        public static SELECT:string = "SELECT";
        public static OPTION_CHANGE:string = "OPTION_CHANGE";
        public static APPLY_SET:string = "APPLY_SET";
        public static CANCEL_SET:string = "CANCEL_SET";

        constructor(param1:string, param2:boolean = false, param3:boolean = false)
        {
            super(param1, param2, param3);
            return;
        }// end function

        public newEvent() : SetBtnEvent
        {
            var _loc_1:any = new SetBtnEvent(this.type, this.bubbles, this.cancelable);
            _loc_1.selectedLabel = this.selectedLabel;
            _loc_1.optionKey = this.optionKey;
            _loc_1.optionValue = this.optionValue;
            return _loc_1;
        }// end function

    }

