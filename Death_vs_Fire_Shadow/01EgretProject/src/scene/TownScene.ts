class TownScene extends Scene
{
    private _ui:egret.Sprite;

    private _versionTxt:egret.TextField;
    private static _i:TownScene;

   
  public onEnter()
    {
        this._ui = new egret.Sprite();
        this._ui.width = UI.WINSIZE_W;
        this._ui.height = UI.WINSIZE_H;
        // -----------------------------
        let pic1 = new egret.Bitmap(RES.getRes("home_bg2.0_png"));
        this.addChild(pic1);
          UI.addPic(this, "home_foot_png", UI.WINSIZE_W/2, UI.WINSIZE_H-40, true);
       
        //
        UI.addBtn(this, "home_button_achievement_png", 15, 80, false, function(arg){
             SceneManager.Instance.changeScene(new Tasklayer);

        });
        UI.addBtn(this, "home_button_assignment_png", 15, 190, false, function(arg){
             SceneManager.Instance.changeScene(new Tasklayer);

        });
        UI.addBtn(this, "home_shop_png", 15, 300, false, function(arg){
            SceneManager.Instance.changeScene(new ShopLayer);
        });
        
        //购买
        UI.addBtn(this, "home_button_purchase_png", UI.WINSIZE_W/2, UI.WINSIZE_H-42, true, function(arg){
             SceneManager.Instance.changeScene(new ShopLayer);
        });
        //转盘
        UI.addBtn(this, "home_button_turntable_png", UI.WINSIZE_W/2-80, UI.WINSIZE_H-42, true, function(arg){
           
        });
        UI.addBtn(this, "home_button_noad_png", UI.WINSIZE_W/2+80, UI.WINSIZE_H-42, true, function(arg){

        });
        
        //开战
        UI.addBtn(this, "home_button_start_png", UI.WINSIZE_W/2+300, UI.WINSIZE_H-45, true, function(arg){
            SceneManager.Instance.changeScene(new ModeScene);
        });
        //英雄 
        UI.addBtn(this, "home_button_herochoose_png", UI.WINSIZE_W/2-300, UI.WINSIZE_H-45, true, function(arg){

        });
       //
     
         let goldLayer: GoldDiamondLayer =  new GoldDiamondLayer(this);
        this.addChild(goldLayer);


        return;
    }// end function

    public onExit()
    {
       
        return;
    }// end function

}