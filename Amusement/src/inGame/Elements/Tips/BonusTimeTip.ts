class BonusTimeTip extends Elements
    {

        public static  pool:BasePool  = new BasePool(BonusTimeTip, 10);

        public  constructor()
        {
            super();
            UI.addPic("bonustime_png",true,this);
            return;
        }

        public  doAniamtion():void
        {
            this.y = UI.WINSIZE_H/2;
            this.x = -100;
            SoundCtrl.I.playmusic("finaltry");
            egret.Tween.get(this).to({"x":UI.WINSIZE_W/2},700).wait(1000).to({"x":UI.WINSIZE_W*1.5}).call(this.onActionEnd,this);
        }

        public onActionEnd(){
            this.parent.removeChild(this);
            BonusTimeTip.pool.put(this);
            return;
        }

        

}
