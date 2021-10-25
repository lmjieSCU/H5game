
    class SelectCharListItemVO extends Object
    {
        public x:number;
        public y:number;
        public fighterID:string;
        public offset:egret.Point;

        public SelectCharListItemVO(param1:number, param2:number, param3:string, param4:egret.Point = null)
        {
            this.x = param1;
            this.y = param2;
            this.fighterID = param3;
            this.offset = param4;
            return;
        }// end function

    }
