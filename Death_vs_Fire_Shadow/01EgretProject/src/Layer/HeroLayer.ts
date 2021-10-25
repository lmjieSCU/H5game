class HeroLayer extends Scene
{
    private _ui:egret.Sprite;

    public constructor()      
    {
        super();
        return;
    }// end function


    public onEnter() : void
    {
        this._ui = new egret.Sprite();
        this._ui.width = UI.WINSIZE_W;
        this._ui.height = UI.WINSIZE_H;
        // -----------------------------
        let bg = new egret.Bitmap(RES.getRes("background3_png"))
        this.addChild(bg)

        let pic1 = new egret.Bitmap(RES.getRes("statu_bar_png"))
        this.addChild(pic1)

        let pic2 = new egret.Bitmap(RES.getRes("return_png"))
        this.addChild(pic2)

        let pic3 = new egret.Bitmap(RES.getRes("hero_button_png"))
        pic3.x = pic2.x + pic2.width + 18;
        pic3.y = pic1.height - 20 - pic3.height;
        this.addChild(pic3)

        let pic4 = new egret.Bitmap(RES.getRes("helper_button_png"))
        pic4.x = pic3.x + pic3.width + 18;
        pic4.y = pic3.y;
        this.addChild(pic4)

        let pic5 = new egret.Bitmap(RES.getRes("gold_png"));
        pic5.x = 410
        pic5.y = 13
        this.addChild(pic5); 

        let pic6 = new egret.Bitmap(RES.getRes("diamond_png"));
        pic6.x = pic5.x + pic5.width + 39
        pic6.y = 13
        this.addChild(pic6); 

        let pic7 = new egret.Bitmap(RES.getRes("add_png"));
        pic7.x = pic5.x + pic5.width - pic7.width
        pic7.y = 17
        this.addChild(pic7);

        let pic8 = new egret.Bitmap(RES.getRes("add_png"));
        pic8.x = pic6.x + pic6.width - pic8.width;
        pic8.y = 17
        this.addChild(pic8); 

        let pic9 = new egret.Bitmap(RES.getRes("set_up_png"));
        pic9.x = UI.WINSIZE_W - 40
        pic9.y = 8
        this.addChild(pic9); 

        let pic10 = new egret.Bitmap(RES.getRes("box2_png"))
        pic10.x = 24
        pic10.y = pic2.height + 22 
        this.addChild(pic10)

        
        return;
    }// end function

   

    public onExit()
    {
       
        return;
    }// end function

}