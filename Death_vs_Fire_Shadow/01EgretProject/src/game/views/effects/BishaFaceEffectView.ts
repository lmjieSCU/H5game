class BishaFaceEffectView 
    {
        public mc:zmovie.ZMovieClip;
        private _faceObj:Object;

        constructor()
        {
            this._faceObj = {};
            this.mc = AssetManager.I.getEffect("bisha_face_mc");
            return;
        }// end function

        public setFace(param1:number, param2:egret.DisplayObject) : void
        {
            var _loc_3:any = this.mc;
            if (!_loc_3)
            {
                return;
            }
            this._faceObj[param1] = param2;
            param2.width = 254;
            param2.height = 180;
            
            _loc_3.addChild(param2);
            
            return;
        }// end function

        public fadIn() : void
        {
            this.mc.gotoAndPlay(2);
            return;
        }// end function

        public destory() : void
        {
            // for (var _loc_1 in this._faceObj)
            // {
                
            //     if (this._faceObj[_loc_1] instanceof egret.Bitmap)
            //     {
            //         (<egret.Bitmap> this._faceObj[_loc_1]).$bitmapData.$dispose();
            //     }
            // }
            this._faceObj = null
            return;
        }// end function
    }
