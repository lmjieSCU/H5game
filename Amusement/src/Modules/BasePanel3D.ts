class BasePanel3D extends egret.Sprite
    {
        
        public  _winName:string;

        public  destoryAfterClose:Boolean=true;

        public constructor()
        {
            super();
            return;
        }

        public  get winName():string
        {
            return this._winName;
        }

        public  set winName(arg1:string)
        {
            this._winName = arg1;
            return;
        }

        public  init():void
        {
            return;
        }

        public  show(arg1:any):void
        {
            return;
        }

        public  hide():void
        {
            return;
        }

        public  updateData(arg1:any):void
        {
            return;
        }

        public  close():void
        {
            this.parent.removeChild(this);
            // com.popchan.sugar.core.manager.WindowManager3D.getInstance().removeWindow(this.winName);
            return;
        }

        public  destory():void
        {
            return;
        }

}
