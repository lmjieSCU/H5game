

    class HitVO
    {
        public id:string;
        public owner:IGameSprite;
        public power:number = 0;
        public powerRate:number = 1;
        public hitType:number = 1;
        public isBreakDef:boolean = false;
        public hitx:number = 0;
        public hity:number = 0;
        public hurtTime:number = 300;
        public hurtType:number = 0;
        public checkDirect:boolean = true;
        public currentArea:egret.Rectangle;
        private _cloneKey:any[];

        constructor(param1:Object = null)
        {
            this._cloneKey = ["id", "owner", "power", "powerRate", "hitType", "isBreakDef", "hitx", "hity", "hurtTime", "hurtType", "currentArea", "checkDirect"];
            if (param1)
            {
                KyoUtils.setValueByObject(this, param1);
            }
            if (this.hitType == 1)
            {
                if (this.hurtTime < 100)
                {
                    this.hurtTime = 100;
                }
            }
            return;
        }// end function

        public clone() : HitVO
        {
            var _loc_1:any = new HitVO();
            KyoUtils.cloneValue(_loc_1, this, this._cloneKey);
            return _loc_1;
        }// end function

        public isBisha() : boolean
        {
            if (this.id == null)
            {
                return false;
            }
            return this.id.indexOf("bs") != -1 || this.id.indexOf("sbs") != -1 || this.id.indexOf("cbs") != -1 || this.id.indexOf("kbs") != -1;
        }// end function

        public getDamage() : number
        {
            return this.power * this.powerRate;
        }// end function

    }

