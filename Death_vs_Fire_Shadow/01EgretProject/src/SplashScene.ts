class SplashScene extends Scene {
	public static showAd: boolean = false;
	public static isVideo: boolean = false;
	public static version: number = 1;
	public static gameName: string = "ad_homie";
	public static gameChannel: string = "tt_babichiris";
	public static channel: string = "tt";
	public static entryalready: boolean = false;
	public static loginAlready: boolean = false;
	public secondFlag: number = 0;
	public static soundflag: boolean = false;
	public static soundChannel: egret.SoundChannel;
	public static instance: SplashScene;



	public constructor() {
		super();
		SplashScene.instance = this;
	}
	
	public static entryNext() {
		if (!SplashScene.entryalready) {
			SplashScene.entryalready = true;
			SceneManager.Instance.changeScene(new ModeScene());
		}
	}


	//初始化游戏数据
	public GameInit() {
		FighterModel.I.initByXML();
		AssisterModel.I.initByXML();
		MapModel.I.initByXML();
		MessionModel.I.initByXML();
		EffectModel.I.initlize();
	}
	protected onEnter() {
		UI.addPic(this, "bg_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this.GameInit();
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		//设置为 POST 请求
		if (SplashScene.channel != "android") {
			let url: string = "https://www.yiruituo.com/tt.php?ad=0&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
			request.open(url, egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();
			request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
			request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
		}
		//
	
		
		egret.setTimeout(function (arg) {
			SplashScene.entryNext();
		}, this, 2500);
		
		/*
		let txt1 = UI.addText(this, "抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当", UI.WINSIZE_W/2-245, UI.WINSIZE_H-60);
		txt1.size = 20;
		let txt2 = UI.addText(this, "适当游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活", UI.WINSIZE_W/2-245, UI.WINSIZE_H-35);
		txt2.size = 20;
		*/
		this.addEventListener(egret.Event.ENTER_FRAME, this.update2, this);
	}
	//帧循环处理函数
	private update2() {
		if (this.secondFlag++ % 23 == 0 && SplashScene.channel == "tt") {
			if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_ING) {
				console.log(RecordBtn.recordSecond);
				if (RecordBtn.recordSecond++ == 300) {
					RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_END;
					platform.stopRecord();
					RecordBtn.recordSecond = 0;
				}
			}
		}
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////
	public static showBanner(node: any = null) {
		if (SplashScene.channel == "android") {
			egret.ExternalInterface.call("showInsert", "message from js");
			return;
		}
		if (SplashScene.showAd == true) {
			SplashScene.visitAdSum(1);
			SplashScene.showBannerControl(node);
		}
	}
	public static showBannerControl(node: any) {
		if (SplashScene.channel != "tt") {
			if (Math2.numberBetween(0, 100, true) <= 33)
				platform.startRecord();
			else
				platform.showBanner();
		} else {
			platform.showBanner();

		}
		SplashScene.showCloseBtn(node);
	}
	public static showBannerForce(node: any = null) {
		if (SplashScene.channel == "android") {
			egret.ExternalInterface.call("showInsertForce", "message from js");
			return;
		}

		SplashScene.visitAdSum(1);
		if ((SplashScene.channel != "tt")
			&& SplashScene.showAd == true) {
			if (Math2.numberBetween(0, 100, true) <= 33)
				platform.startRecord();
			else
				platform.showBanner();
		} else {
			platform.showBanner();
		}
		//
		SplashScene.showCloseBtn(node);
	}
	//
	public static closeBtn: any;
	public static closeBtnParent: any;
	public static showCloseBtn(node: any) {
		if (node == null)
			return;
		if (SplashScene.channel != "qq")
			return;
		if (SplashScene.showAd == false)
			return;
		//
		SplashScene.closeBtnParent = node;
		SplashScene.closeBtn = UI.addBtn(node, "ad_close_png", UI.WINSIZE_W / 2 + 135 + 33, UI.WINSIZE_H - 100 - 10, true, function (arg) {
			platform.hideBanner();
			try {
				SplashScene.closeBtnParent.removeChild(SplashScene.closeBtn);
			}
			catch (e) {
				//console.error(e);
			}
		});
	}
	//
	public static hideBanner() {
		if (SplashScene.showAd == false)
			platform.hideBanner();
	}

	public static showVideoForce() {
		if (SplashScene.isVideo == true) {
			SplashScene.visitAdSum(2);
			platform.playAdVideo();
		}
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////

	public static loginTT() {
		if (SplashScene.loginAlready == false) {
			SplashScene.loginAlready = true;
			platform.login();
			platform.getUserInfo();
		}
	}
	//
	public static addRecordBtn(node: any, paramX: number, paramY: number) {
		if (SplashScene.channel == "tt") {
			let a: RecordBtn = new RecordBtn(paramX, paramY);
			node.addChild(a);
		}
	}

	private onPostComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		//console.log("post data : ", request.response);
		let content = request.response.substring(0, 50);
		if (content.substr(0, 1) == "2" || content.substr(0, 1) == "3") {
			SplashScene.showAd = true;
		}
		if (content.substr(0, 1) == "3") {
			SplashScene.isVideo = true;
		}
		SplashScene.entryNext();
	}

	private onPostIOError(event: egret.IOErrorEvent): void {
		console.log("post error : " + event);
	}

	private onPostProgress(event: egret.ProgressEvent): void {
		console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}
	protected onExit() {
		//
	}
	public static addVersion(node: any) {
		let txt: any = UI.addText(node, "V:" + SplashScene.version, UI.WINSIZE_W - 100, UI.WINSIZE_H - 40);
		txt.size = 14;
	}

	public static visitAdSum(param: number) {
		if (SplashScene.channel != "4399" && SplashScene.channel != "qq") {

			let url: string = "https://www.yiruituo.com/tt.php?ad=" + param + "&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			request.open(url, egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();
		}
	}
	//
	public static clickMusicBtn() {
		if (SplashScene.soundflag) {
			SplashScene.soundflag = false;
			SplashScene.soundChannel.stop();
		} else {
			SplashScene.soundflag = true;
			var sd: egret.Sound = new egret.Sound();
			sd.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
				SplashScene.soundChannel = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
			}, this);
			sd.load("resource/assets/sound/bgmusic.mp3");
		}
	}
	public static playMusic() {
		var sd: egret.Sound = new egret.Sound();
		sd.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
			SplashScene.soundChannel = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
		}, this);
		sd.load("resource/assets/sound/bgmusic.mp3");
	}
	public static playSound(name: string = "click") {
		if (SplashScene.soundflag) {
			var sound: egret.Sound = new egret.Sound();
			sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
				sound.play(0, 1);  //播放一次， 0， 0背景音乐 
			}, this);
			sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
				console.log("loaded error!");
			}, this);
			sound.load("resource/assets/sound/" + name + ".mp3");
		}
	}
}