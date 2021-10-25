class TipsLayer extends Scene{
    public static instance : TipsLayer;
    public colorLabel;
	public colorbg;
    public _content : string;
    public constructor(param:string){
        super();
        this._content = param;
    }

    protected onEnter(){
        TipsLayer.instance = this;
        this.colorbg = UI.addPic(this, "tipbg_png", 0, UI.WINSIZE_H / 2 - 12, false);
		this.colorLabel = new egret.TextField();
		this.colorLabel.textColor = 0xf90000;
		this.colorLabel.width = 300;
		this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
		this.colorLabel.textAlign = "center";
		this.colorLabel.text = this._content;
		this.colorLabel.size = 22;
		this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
		this.colorLabel.y = UI.WINSIZE_H / 2;
		this.addChild(this.colorLabel);
        //
        egret.setTimeout(function (arg) {
            SceneManager.Instance.popScene();
		}, this, 2000);
    }

    protected onExit(){
        
    }
}