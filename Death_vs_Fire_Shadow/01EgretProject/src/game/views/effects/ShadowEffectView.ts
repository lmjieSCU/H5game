class ShadowEffectView extends egret.DisplayObjectContainer
    {
        public target:egret.DisplayObject;
        public r:number = 0;
        public g:number = 0;
        public b:number = 0;
        public container:egret.DisplayObjectContainer;
        private _bps:Array<egret.Bitmap>;
        private _alphaLose:number = 0.1;
        private _alphaStart:number = 0.8;
        private _addBpGap:number = 1;
        private _addBpFrame:number = 0;
        public stopShadow:boolean;
        public onRemove:Function;

        public constructor(param1:egret.DisplayObject, param2:number = 0, param3:number = 0, param4:number = 0)
        {
            super();
            this._bps = new Array();
            this.target = param1;
            this.r = param2;
            this.g = param3;
            this.b = param4;
            this._addBpFrame = 0;
            return;
        }// end function

        public  destory() : void
        {
            var _loc_2 = 0;
            var _loc_1:egret.Bitmap = null;
            this.target = null;
            while (_loc_2 < this._bps.length)
            {
                
                _loc_1 = this._bps[_loc_2];
                _loc_1.$bitmapData.$dispose();
                try
                {
                    this.container.removeChild(_loc_1);
                }
                catch (error)
                {
                }
                _loc_2++;
            }
            this._bps = null;
            return;
        }// end function

        public  render() : void
        {
            var _loc_2 = 0;
            var _loc_1 = null;
            if (this.stopShadow)
            {
                if (this._bps.length <= 0)
                {
                    this.removeSelf();
                }
            }
            else
            {
                this._addBpFrame = this._addBpFrame + 1;
                if (this._addBpFrame > this._addBpGap)
                {
                    this.addShadowBp();
                    this._addBpFrame = 0;
                }
            }
            while (_loc_2 < this._bps.length)
            {
                
                _loc_1 = this._bps[_loc_2];
                _loc_1.alpha = _loc_1.alpha - this._alphaLose;
                if (_loc_1.alpha <= 0)
                {
                    this.removeBitmap(_loc_1);
                }
                _loc_2++;
            }
            return;
        }// end function

        private  addShadowBp() : void
        {
            var _loc_3 = null;
            if (this.r != 0 || this.g != 0 || this.b != 0)
            {
                _loc_3 = new ColorTransform();
                _loc_3.r = this.r;
                _loc_3.g = this.g;
                _loc_3.b = this.b;
            }
            var _loc_2 = this.target.getBounds();
            let aa:egret.Bitmap = new egret.Bitmap()
            
            var _loc_1 = KyoUtils.drawDisplay(this.target, true, true, 0, _loc_3);
            if (_loc_1 == null)
            {
                return;
            }
            _loc_1.alpha = this._alphaStart;
            _loc_1.x = this.target.x
            _loc_1.y = this.target.y
            _loc_1.width = this.target.width;
            _loc_1.height = this.target.height
            _loc_1.anchorOffsetX = this.target.anchorOffsetX
            _loc_1.anchorOffsetY = this.target.anchorOffsetY
            _loc_1.scaleX = this.target.scaleX;
            _loc_1.scaleY = this.target.scaleY;
            //this.container.addChildAt(_loc_1, 0);
            this.target.parent.addChild(_loc_1)
            this._bps.push(_loc_1);
            return;
        }// end function

        private  removeBitmap(param1:egret.Bitmap) : void
        {
            var _loc_2 = this._bps.indexOf(param1);
            if (_loc_2 != -1)
            {
                this._bps.splice(_loc_2, 1);
            }
            try
            {
                this.target.parent.removeChild(param1);
            }
            catch (e)
            {
            }
            if(param1.$bitmapData){
                //param1.$bitmapData.$dispose();
            }
            return;
        }// end function

        private  removeSelf() : void
        {
            if (this.onRemove != null)
            {
                this.onRemove(this);
            }
            return;
        }// end function

    }
