
    class MoveTargetParamVO 
    {
        public x:number;
        public y:number;
        public followMcName:string;
        public target:IGameSprite;
        public speed:egret.Point;

        public constructor(param1:any = null)
        {
            if (!param1)
            {
                return;
            }
            this.x = param1.x != undefined ? (param1.x) : (0);
            this.y = param1.y != undefined ? (param1.y) : (0);
            this.followMcName = param1.followmc != undefined ? (param1.followmc) : (null);
            if (param1.speed)
            {
                this.speed = new egret.Point();
                if (typeof(param1.speed)== "number")
                {
                    var _loc_2 = param1.speed * GameConfig.SPEED_PLUS;
                    this.speed.y = param1.speed * GameConfig.SPEED_PLUS;
                    this.speed.x = _loc_2;
                }
                else
                {
                    this.speed.x = param1.speed.x != undefined ? (param1.speed.x * GameConfig.SPEED_PLUS) : (0);
                    this.speed.y = param1.speed.y != undefined ? (param1.speed.y * GameConfig.SPEED_PLUS) : (0);
                }
            }
            return;
        }// end function

        public setTarget(param1:IGameSprite) 
        {
            this.target = param1;
            if (this.target instanceof BaseGameSprite)
            {
                (<BaseGameSprite>this.target).setVelocity(0, 0);
            }
            return;
        }// end function

        public clear() 
        {
            if (this.target)
            {
                if (this.target instanceof BaseGameSprite)
                {
                    (<BaseGameSprite>this.target).isApplyG = true;
                }
            }
            return;
        }// end function

    }
