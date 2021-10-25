

    class EffectVO
    {
        public className:string;
        public shine:any;
        public shake:any;
        public freeze:number;
        public sound:string;
        public randRotate:boolean;
        public followDirect:boolean;
        public slowDown:any;
        public blendMode:string = egret.BlendMode.NORMAL;
        public bitmapDataCache:zmovie.ZMovieClip;
        public frameLabelCache:Object;
        public specialEffectId:string;
        public targetColorOffset:any[] = [];
        public isSpecial:boolean = false;

        public constructor(param1:string, param2:Object = null)
        {
            this.className = param1;
            if (param2)
            {
                for(let k in param2){
                    this[k] = param2[k]
                }
            }
            return;
        }// end function

        public clone() : EffectVO
        {
            var _loc_2 = KyoUtils.itemToObject(this);
            delete _loc_2["className"];
            var _loc_1 = new EffectVO(this.className, _loc_2);
            return _loc_1;
        }// end function

        public cacheBitmapData() 
        {
            return;
        }// end function

    }

