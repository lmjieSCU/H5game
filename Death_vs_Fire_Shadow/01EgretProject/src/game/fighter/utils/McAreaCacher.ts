
    class McAreaCacher
    {
        private _idCache:Object;
        private _frameCache:Object;
        public name:string;

       constructor(param1:string)
        {
            this._idCache = {};
            this._frameCache = {};
            this.name = param1;
            return;
        }// end function

        public getframe(){
            return this._frameCache;
        }

        public destory() 
        {
            this._idCache = null;
            this._frameCache = null;
            return;
        }// end function

        public areaFrameDefined(param1:number) : boolean
        {
            return this._frameCache[param1] != undefined;
        }// end function

        public getAreaByFrame(param1:number) : any
        {
            return this._frameCache[param1];
        }// end function

        public cacheAreaByFrame(param1:number, param2:Object) 
        {
            this._frameCache[param1] = param2;
            return;
        }// end function

        public getAreaByDisplay(param1:egret.DisplayObject) : any
        {
            var _loc_2 = this.getDisplayCacheId(param1);
            if (this._idCache[_loc_2])
            {
                return this._idCache[_loc_2];
            }
            return null;
        }// end function
;
        public cacheAreaByDisplay(param1:egret.DisplayObject, param2:egret.Rectangle, param3:Object = null) : Object
        {
            var _loc_4 = this.getDisplayCacheId(param1);
            var _loc_5 = param1.name;   
            var _loc_7 = {};
            _loc_7["name"] = _loc_5;    //bdmn
            _loc_7["area"] = param2;    //Rectangle
            if (param3)
            {
                for (var _loc_6 in param3)
                {
                    // _loc_7[param3[_loc_6]] = param3[param3[_loc_6]];
                     _loc_7[_loc_6] = param3[_loc_6];
                }
            }
            this._idCache[_loc_4] = _loc_7;
            return _loc_7;
        }// end function

        private  getDisplayCacheId(param1:egret.DisplayObject) : string
        {
            return param1.name + "_" + param1.x + "," + param1.y + "," + param1.scaleX + "," + param1.scaleY + "," + param1.rotation;
        }// end function

    }
