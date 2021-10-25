
    class SelectStageConfigVO extends Object
    {
        public x:number = 0;
        public y:number = 0;
        public width:number = 800;
        public height:number = 600;
        public top:number = 0;
        public bottom:number = 0;
        public left:number = 0;
        public right:number = 0;
        public charList:SelectCharListConfigVO;
        public assistList:SelectCharListConfigVO;
        public unitSize:egret.Point;

        public constructor()
        {
            super();
            this.unitSize = new egret.Point(50, 50);
            return;
        }// end function

        public setByXML(param1:egret.XML) 
        {
          
            return;
        }// end function

       

    }

