

    class ShineEffectView extends egret.Bitmap
    {
        public onRemove:Function;
        public isActive:boolean = true;
        private _loseAlpha:number = 1;
        private _alpha:number;
        private _renderGap:number = 0;
        private _renderFrame:number;
        private _isDestoryed:boolean;
        private _startTimer:number;
        private _frameTime:number;
        private  _skipFrameRate:number = 1.2;

        public constructor()
        {
            super();
           //super(null, "never", false);
            return;
        }// end function

        public destory() 
        {
            this._isDestoryed = true;
            if (this.isActive)
            {
                this.parent.removeChild(this);
            }
            return;
        }// end function

        public init(param1:number = 16777215, param2:number = 0.2) 
        {   
            if (this.$bitmapData)
            {
                //this.$bitmapData.$dispose();
                this.$setBitmapData(null)
            }
            this.texture =  RES.getRes("white_png");
            UI.setImageColor(this, param1);
           // this.$setBitmapData(GameConfig.GApaME_SIZE.x / 10, GameConfig.GAME_SIZE.y / 10, false, param1);
            this.width = GameConfig.GAME_SIZE.x;
            this.height = GameConfig.GAME_SIZE.y;
            this.isActive = true;
            var _loc_3 = 8388607;
            if (param1 > _loc_3)
            {
                this.blendMode = egret.BlendMode.ADD;
            }
            else
            {
                this.blendMode = egret.BlendMode.ADD;// 原来是darken
                param2 = param2 * 0.8;
            }
            this.alpha = param2;
            this._alpha = param2 * 100;
            this._renderFrame = 0;
            this._renderGap = Math.ceil(GameConfig.FPS_GAME / GameConfig.FPS_SHINE_EFFECT) - 1;
            this._startTimer = 0;
            this._loseAlpha = this._renderGap + 1;
            this._frameTime = 1000 / GameConfig.FPS_SHINE_EFFECT;
            return;
        }// end function

        public render() 
        {
            if (this._isDestoryed)
            {
                return;
            }
            if (this._renderGap > 0)
            {
                this._renderFrame = (this._renderFrame + 1);
                if (this._renderFrame % this._renderGap != 0)
                {
                    return;
                }
            }
            this.skipFrame();
            this._alpha = this._alpha - this._loseAlpha;
            if (this._alpha <= 3)
            {
                if(this.parent){
                    this.removeSelf()
                    //this.parent.removeChild(this);
                }
            }
            else
            {
                this.alpha = this._alpha * 0.01;
            }
            return;
        }// end function

        private skipFrame() 
        {
            var _loc_3 = 0;
            var _loc_1 = NaN;
            var _loc_2 = 0;
            if (this._startTimer != 0)
            {
                _loc_3 = egret.getTimer() - this._startTimer;
                _loc_1 = _loc_3 / this._frameTime;
                if (_loc_1 > 1.2)
                {
                    _loc_2 = Math.ceil(this._loseAlpha * _loc_1);
                    if (this._loseAlpha < _loc_2)
                    {
                        this._loseAlpha = _loc_2;
                    }
                }
            }
            this._startTimer = egret.getTimer();
            return;
        }// end function

        public removeSelf() 
        {
            this.isActive = false;
            //  if (this.$bitmapData)
            // {
            //     this.$bitmapData.$dispose();
            //     this.$bitmapData = null;
            // }
            if (this.parent)
            {
                try
                {
                    this.parent.removeChild(this);
                }
                catch (e)
                {
                }
            }
            if (this.onRemove != null)
            {
                this.onRemove(this);
            }
            return;
        }// end function

    }
