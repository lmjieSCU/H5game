class SpecialEffectView extends EffectView
    {
        private  _target:FighterMain;
        private  _finished:boolean;

        public  constructor(param1:EffectVO)
        {
            super(param1);
            return;
        }// end function

        public  setTarget(param1:FighterMain) : void
        {
            var _loc_2:ColorTransform = null;
            this._target = param1;
            if (this._data.targetColorOffset)
            {
                _loc_2 = new ColorTransform();
                _loc_2.r = this._data.targetColorOffset[0];
                _loc_2.g = this._data.targetColorOffset[1];
                _loc_2.b = this._data.targetColorOffset[2];
                UI.setMovieColor(this._target.getDisplay(), _loc_2);
            }
            return;
        }// end function

         public  start(param1:number = 0, param2:number = 0, param3:number = 1) : void
        {
            super.start(param1, param2, param3);
            this._finished = false;
            return;
        }// end function

         public render(): void {
             super.render();
             if (this._finished) {
                 return;
             }
             var _loc1_ = this._target.actionState;
             if (23 !== _loc1_) {
                 if (24 !== _loc1_) {
                     if (0 !== _loc1_) {
                         this.setPos(this._target.x, this._target.y);
                     }
                     return;
                 }
             }
             this.gotoAndPlay("finish");
             this._finished = true;
             if (this._data.targetColorOffset) {
                 UI.setMovieColor(this._target.getDisplay(), _loc_2);
                 var _loc_2 = new ColorTransform();
                _loc_2.r = this._data.targetColorOffset[0];
                _loc_2.g = this._data.targetColorOffset[1];
                _loc_2.b = this._data.targetColorOffset[2];
                 UI.setMovieColor(this._target.getDisplay(), _loc_2);
             }
             return;
         }// end function

    }

