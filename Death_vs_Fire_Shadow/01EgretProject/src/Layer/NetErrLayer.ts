class NetErrLayer extends Scene{
    public static instance : NetErrLayer;
    public colorLabel;
	public colorbg;
    public fun: Function = null;
    public _content : string;
    public constructor(param:string){
        super();
        this._content = param;
    }

    protected onEnter(){
        NetErrLayer.instance = this;
         let bg: egret.Bitmap = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = 30;
        bg.scaleY = 20;

        
        this.colorbg = UI.addPic(this, "pub_dialog_png", UI.WINSIZE_W/2, UI.WINSIZE_H / 2, true);
		this.colorLabel = new egret.TextField();
		this.colorLabel.textColor = 0xfffff0;
		this.colorLabel.width = 300;
		this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
		this.colorLabel.textAlign = "center";
		this.colorLabel.text = this._content;
		this.colorLabel.size = 22;
		this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
		this.colorLabel.y = UI.WINSIZE_H / 2;
		this.addChild(this.colorLabel);
        //
        UI.addBtn(this, "pub_button_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2+100, true, function(arg){
            if (NetErrLayer.instance.fun){
                NetErrLayer.instance.fun.call(NetErrLayer.instance);
            }
            SceneManager.Instance.popScene();
        });
    }

    public addCallBack(func:Function){
          this.fun = func;
    }

    protected onExit(){
        
    }
}