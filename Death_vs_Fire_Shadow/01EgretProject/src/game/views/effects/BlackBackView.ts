

     class BlackBackView extends egret.DisplayObjectContainer
    {
        private  _bishaFace:BishaFaceEffectView;
        private  isRenderFadIn:boolean;
        private  isRenderFadOut:boolean;
        private  _bg:egret.Bitmap;

        public  constructor()
        {
            super();
            this._bg = UI.BitmapData(GameConfig.GAME_SIZE.x / 10, GameConfig.GAME_SIZE.y / 10, false, UI.RGB2HEX16(255,0,0));
            this._bg.width = GameConfig.GAME_SIZE.x;
            this._bg.height = GameConfig.GAME_SIZE.y;
            return;
        }// end function

        public  destory() : void
        {
            if (this._bg)
            {
                try
                {
                    this.removeChild(this._bg);
                }
                catch (e)
                {
                }
                //this._bg.$bitmapData.$dispose();
                this._bg = null;
            }
            this.removeBishaFace();
            return;
        }// end function

        public  renderAnimate() : void
        {
            return;
        }// end function

        public  fadIn() 
        {
            this.addChild(this._bg);
            return;
        }// end function

        public  fadOut() 
        {
            this.removeBishaFace();
            try
            {
                this.removeChildren()
                this.parent.removeChild(this);
            }
            catch (e)
            {
            }
            return;
        }// end function

        public  showBishaFace(param1:number, param2:egret.DisplayObject) : void
        {
            var _loc_3 = NaN;
            if (!this._bishaFace)
            {
                this._bishaFace = new BishaFaceEffectView();
                _loc_3 = 1;
                if (GameCtrl.I && GameCtrl.I.gameState && GameCtrl.I.gameState.camera)
                {
                    _loc_3 = GameCtrl.I.gameState.camera.getZoom();
                }
                this._bishaFace.mc.y = 100 + 100 / _loc_3;
                this.addChild(this._bishaFace.mc);
            }
            this._bishaFace.setFace(param1, param2);
            this._bishaFace.fadIn();
            return;
        }// end function

        private  removeBishaFace() : void
        {
            if (this._bishaFace)
            {
                this._bishaFace.destory();
                this._bishaFace = null;
            }
            return;
        }// end function

    }
