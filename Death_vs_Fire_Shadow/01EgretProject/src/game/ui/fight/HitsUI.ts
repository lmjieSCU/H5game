 class HitsUI extends egret.DisplayObject
{
    private _mc:zmovie.ZMovieClip;
    private _txtmc:MCNumber;
    private _isShow:boolean;
    private _orgPos:egret.Point;
    private ct:any;
    private numPic:egret.Bitmap;
    private numPic2:egret.Bitmap;
    private hitCounts:number = 0

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        param1.visible = false
        this._mc = param1;
        this._mc.x = 300;
        this._mc.y = 80
        this._txtmc = new MCNumber(param1, 0, 1, 35);
        this._orgPos = new egret.Point(param1.x, param1.y);
        this.ct = this._mc.getChildMovie("ct")
        this.numPic = new egret.Bitmap(RES.getRes("score_num_json").getTexture("hits_num_mc_0"))
        this.numPic2 = new egret.Bitmap(RES.getRes("score_num_json").getTexture("hits_num_mc_0"))
        this.numPic.x -= 20;
        if(this.ct instanceof zmovie.ZImage){
            this.ct.addChild(this.numPic)
            this.ct.addChild(this.numPic2)
        }
       // this.dot.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_1");

        this._mc.addFrameScript(this,[0, this.frame1, 9, this.frame10, 19, this.frame20, 37, this.frame38,55, this.frame56]);
        return;
    }// end function

    public destory() : void
    {
        if (this._txtmc)
        {
            try
            {
                this._mc.getChildMovie("ct").removeChild(this._txtmc);
            }
            catch (e)
            {

            }
            this._txtmc = null;
        }
        if (this._mc)
        {
            this._mc = null;
        }
        this._orgPos = null;
        return;
    }// end function

    public show(param1:number) : void
    {
        this._mc.visible = true
        this._txtmc.number = param1;
        var _loc_2 = this._txtmc.width + 45;
        this._txtmc.x = _loc_2;
        let firstNum =Math.floor( param1 / 10);
        let secondNum = Math.floor( param1 % 10);
        if(firstNum != 0){
            this.numPic.visible = true
            this.numPic.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_"+(firstNum+1));
        }else{
            this.numPic.visible = false
        }
        
        this.numPic2.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_"+(secondNum+1));
       //this.ct.img.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_"+(param1+1));
        if (this._mc.name == "hits1")
        {
            this._mc.x = UI.WINSIZE_W/2-350;
            //this._mc.x = 200
        }
        else if(this._mc.name == "hits2"){
            this._mc.x = UI.WINSIZE_W/2+350;
        }
        if (this._isShow)
        {
            this._mc.gotoAndPlay("update");
            return;
        }
        this._isShow = true;
        this._mc.gotoAndPlay("fadin");
        
        
        //this._mc.play()
        return;
    }// end function

    public hide() : void
    {
        if (!this._isShow)
        {
            return;
        }
        this._isShow = false;
        this._mc.gotoAndPlay("fadout");
        return;
    }// end function

    public frame1()
    {
        this._mc.visible = false;
        return;
    }

    public frame10()
    {
        this._mc.visible = true;
        return;
    }

    public frame20()
    {
        this._mc.stop();
        return;
    }

    public frame38()
    {
        this._mc.stop();
        return;
    }

    public frame56()
    {
        this._mc.gotoAndStop(1);
        this._mc.visible = false;
        return;
    }

}