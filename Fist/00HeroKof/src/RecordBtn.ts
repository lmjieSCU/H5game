class RecordBtn extends  egret.DisplayObjectContainer {
	public btn1: egret.Bitmap;
	public btn2: egret.Bitmap;
	public btn3: egret.Bitmap;
	public colorLabel;
	public colorbg;
	public secondFlag : number = 0;
	public static RECORD_STATUS_IDLE:number=0;	//没有分享状态
	public static RECORD_STATUS_ING:number=1;  //正在录制状态
	public static RECORD_STATUS_END:number=2;	//等等分享状态
	public static recordSecond : number = 0;	//录制的时间
	public static recordStatus:number =0;	//录制的状态
	public constructor(paramX: number, paramY: number) {
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onExit,this);
		this.btn1 = UI.addBtn(this, "share_btn1_png", 0, 0, true, null);
		this.btn1.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_ING;
			platform.startRecord();
		}, this);
		this.btn2 = UI.addBtn(this, "share_btn2_png", 0, 0, true, null);
		this.btn2.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			
			if (RecordBtn.recordSecond >3) {
				this.btn1.visible = false;
				this.btn2.visible = false;
				this.btn3.visible = true;
				RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_END;
				platform.stopRecord();
			} else {
				//不到3秒不能够录制
				this.btn1.visible = true;
				this.btn2.visible = false;
				this.btn3.visible = false;
				this.less3Tip();
				RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_IDLE;
			}
			RecordBtn.recordSecond = 0;

		}, this);
		this.btn3 = UI.addBtn(this, "share_btn3_png", 0, 0, true, null);
		this.btn3.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_IDLE;
			platform.shareRecord();
		}, this);
		this.btn1.visible = true;
		this.btn2.visible = false;
		this.btn3.visible = false;

		this.btn1.x = paramX;
		this.btn1.y = paramY;
		this.btn2.x = paramX;
		this.btn2.y = paramY;
		this.btn3.x = paramX;
		this.btn3.y = paramY;

		this.colorbg = UI.addPic(this, "tipbg_png", 0, UI.WINSIZE_H / 2 - 12, false);
		this.colorLabel = new egret.TextField();
		this.colorLabel.textColor = 0xf90000;
		this.colorLabel.width = 300;
		this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
		this.colorLabel.textAlign = "center";
		this.colorLabel.text = "不到3秒未能生成分享内容";
		this.colorLabel.size = 22;
		this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
		this.colorLabel.y = UI.WINSIZE_H / 2;
		this.addChild(this.colorLabel);
		//
		this.colorLabel.visible = false;
		this.colorbg.visible = false;
		//
		this.addEventListener(egret.Event.ENTER_FRAME,this.update2,this);
		this.showBtn();
	}
	public  static stopRecord()
	{
		RecordBtn.recordStatus =  RecordBtn.RECORD_STATUS_IDLE;
		platform.stopRecord();
	}

	public  showBtn()
	{
		let aaa:number = RecordBtn.recordStatus;

		if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_IDLE)
		{
			this.btn1.visible = true;
			this.btn2.visible = false;
			this.btn3.visible = false;
		}else if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_ING)
		{
			this.btn1.visible = false;
			this.btn2.visible = true;
			this.btn3.visible = false;
		}else if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_END)
		{
			this.btn1.visible = false;
			this.btn2.visible = false;
			this.btn3.visible = true;
		}
	}
	private update2()
	{
		if (this.secondFlag++ % 23 == 0) {
			this.showBtn();
		}
	}
	private less3Tip() {
		this.colorLabel.visible = true;
		this.colorbg.visible = true;
		egret.setTimeout(function (arg) {
			this.colorLabel.visible = false;
			this.colorbg.visible = false;
		}, this, 2000);
	}

	private onExit()
	{
		this.removeEventListener(egret.Event.ENTER_FRAME,this.update2,this);
	}
}