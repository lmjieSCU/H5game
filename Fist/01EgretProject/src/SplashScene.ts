class SplashScene extends Scene {
	public static instance: SplashScene;
	public P2OwnTheBtn: boolean = true; //P2是否使用按钮控制
	public static hero_layer: egret.DisplayObjectContainer;
	public _life: LifePower;
	// public P1_TEST: egret.TextField;
	// public P2_TEST: egret.TextField;
	private Waiting_text: egret.TextField;
	private Waiting_img: egret.Bitmap;
	public static CloseEffects: boolean = false; //特效开关
	//
	private p2: string;
	private p1: string;//
	private role1: any;
	private role2: any;
	private round: number = 1;//当前回合
	public type: string = '';//判断是pve还是pvp
	private p1Data: any; //第二回合与第三回合得到的上一回合的数据
	private p2Data: any;
	public time: number;//回合时间限制
	public player: number;//操作的人物
	public playInfo: PlayInfo;//初始化战斗信息
	public p1SkillList: SkillList;
	public p2SkillList: SkillList;//技能列表


	public constructor(playInfo: PlayInfo, round: number = 1, p1Data: any = null, p2Data: any = null) {
		super();
		// console.log(UI.WINSIZE_H);
		// console.log(UI.WINSIZE_W);
		SplashScene.instance = this;
		this.p2 = playInfo.p2;
		this.p1 = playInfo.p1;
		//this.p1 = 'new Ryu_Player()';
		// this.p2 = 'new K_Player()';
		this.round = round;
		this.type = playInfo.type;
		// this.type = Main.PVP_offline;
		if (this.round >= 2) {
			this.p1Data = p1Data;
			this.p2Data = p2Data;
		}
		this.p1SkillList = playInfo.p1SkillList;
		this.p2SkillList = playInfo.p2SkillList;
		this.time = playInfo.time;
		this.P2OwnTheBtn = playInfo.player == 1 ? false : true;
		this.player = playInfo.player;
		this.playInfo = playInfo;
	}


	private initGame() {
		SplashScene.instance.stage.addChild(new Round(this.round));
		Main.loadResAlready = true;  //加载资源成功
		GameConfig.zoomFightWindow();
		this.initLayer();
		this.initPlayer();
		this.initLevel0();
		this.initLife();
		this.initP1_notice_piece();
		this.initLog();
		// if(this.round == 1) this.stage.addChild(new Round(this.round));//第一回合
		if (K_AI_Lv5.PlanningSwitch != null) {
			SplashScene.hero_layer.stage.addChild(K_AI_Lv5.PlanningSwitch);
			// SplashScene.instance.stage.removeChild(this.P1_TEST);
			// SplashScene.instance.stage.removeChild(this.P2_TEST);
		}
		//NoviceGuidance.I().step1();
	}
	//
	protected onEnter() {
		this.initGame();
		// this.BuildConncet();
		Sound.getInstance().fightBgPlay();
	}
	//

	public initWaitingBG() {
		this.Waiting_img = UI.addPic(this.stage, "loadingChunli_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this.Waiting_text = UI.addText(this.stage, "资源加载完成...等待对方加载", UI.WINSIZE_W / 2, UI.WINSIZE_H - 120, true, 22, 0xffffff);
	}

	/**握手检测,双方均加载完成后开始对战 */
	public BuildConncet() {
		if (GameModel.currentMode != GameModel.VS_PERSON) {
			console.log("非联机对战");
			return;
		}
		if (!RoomManager.getInstance().room) {
			console.log("房间实例为空");
			return;
		}
		if (RoomManager._EntryGameScene) {
			return;
		}
		this.initWaitingBG();
		this.Handshake_Detection();
		return;
	}

	public Handshake_Detection() {
		RoomManager.getInstance().room.onStartFrameSync = event => {
			if (this.Waiting_img.stage) {
				this.stage.removeChild(this.Waiting_img);
				this.stage.removeChild(this.Waiting_text);
				RoomManager._EntryGameScene = true;
			}
		}
		const sendToClientPara = {
			recvType: MGOBE.ENUM.RecvType.ROOM_ALL,
			recvPlayerList: [],
			msg: "hello",
		};
		RoomManager.getInstance().room.sendToClient(sendToClientPara);
	}



	public initLog() {
		// this.P1_TEST = UI.addText(this.stage, "log", 10, 100, false);
		// this.P2_TEST = UI.addText(this.stage, "log", 10, 200, false);
	}

	public initLayer() {
		//背景显示层
		BgScene.stageBGContainer = new egret.DisplayObjectContainer;//非移动
		this.addChild(BgScene.stageBGContainer);
		//全屏特效显示层
		Stage_effect.effectContainer = new egret.DisplayObjectContainer;//移动
		this.addChild(Stage_effect.effectContainer);
		//英雄活动层和英雄打击特效，必杀特效显示层
		SplashScene.hero_layer = new egret.DisplayObjectContainer;//移动
		this.addChild(SplashScene.hero_layer);
		new BgScene().initObj(`map${this.playInfo.map}`);
	}

	public initPlayer() {
		this.role1 = eval(this.p1);
		this.role2 = eval(this.p2);
		// this.role1.init(keyButtons.P1, "easy");
		switch (this.type) {
			case Main.PVP_offline:
				if (!this.P2OwnTheBtn) {
					this.role1.init(keyButtons.btn, "easy", 'KeyControl_btn');
					this.role2.init(keyButtons.P2, "easy");
					this.stage.addChild(this.role1.keyCtrl.key);
				} else {
					this.role2.init(keyButtons.btn, "easy", 'KeyControl_btn');
					this.stage.addChild(this.role2.keyCtrl.key);
					this.role1.init(keyButtons.P1, "easy");
				}
				break;
			case Main.PVP_online:
				this.role1.init(keyButtons.btn, "easy", 'KeyControl_btn');
				this.role2.init(keyButtons.btn, "easy", 'KeyControl_btn');
				if (!this.P2OwnTheBtn) {
					this.stage.addChild(this.role1.keyCtrl.key);
				} else {
					this.stage.addChild(this.role2.keyCtrl.key);
				}
				break;
			case Main.PVE:
				if (this.P2OwnTheBtn) {//!
					this.role1.init(keyButtons.btn, "easy", 'KeyControl_btn');
					this.stage.addChild(this.role1.keyCtrl.key);
				} else {
					this.role1.init(keyButtons.P1, "easy");
				}
				break;
		}
		SplashScene.hero_layer.addChild(this.role1);
		SplashScene.hero_layer.addChild(this.role2);
		//设置人物对手,血量等
		this.role1.stageVar(this.playInfo.life, this.playInfo.powerMax, this.playInfo.powerMax, this.role2, null);
		this.role2.stageVar(this.playInfo.life, this.playInfo.powerMax, this.playInfo.powerMax, this.role1, null);
		//设置舞台信息和人物位置
		let edge_max = GameConfig.stage_image.x + GameConfig.stage_image.width;//地图右边界
		let edge_min = GameConfig.stage_image.x;//地图左边界
		this.role1.stageInf(GameConfig.stage_image.width, edge_max, edge_min, GameConfig.FightWidth / 2 - 200, GameConfig.land_Y);
		this.role2.stageInf(GameConfig.stage_image.width, edge_max, edge_min, GameConfig.FightWidth / 2 + 200, GameConfig.land_Y);
		//设置人物方向
		this.role1.checkSide_abs();
		this.role2.checkSide_abs();
		//
		// this.role1.start();
		// this.role2.start();
	}

	public initLife() {
		this._life = new LifePower(this.p1Data, this.p2Data);
		this.stage.addChild(this._life);
	}


	public initLevel0() {
		_level0.P1_role = this.role1;
		_level0.P2_role = this.role2;
		_level0.effect_mc.start();
		HitCounter.showHits();
	}


	public initP1_notice_piece() {
		let move = new MovePoint();
		this.addChild(move);
		this.setChildIndex(move, 1);
	}


	public nextRound() {//进入游戏下一回合
		const p1 = _level0.P1_role;
		const p2 = _level0.P2_role
		this.clear();
		const p1Data = { power: this._life.p1_power.playerData.power, powerNum: this._life.p1_power.playerData.powerNum, winTimes: p1.winTimes };
		const p2Data = { power: this._life.p2_power.playerData.power, powerNum: this._life.p2_power.playerData.powerNum, winTimes: p2.winTimes };
		SceneManager.getInstance().ChangeScene(new SplashScene(this.playInfo, p1.winTimes + p2.winTimes + 1, p1Data, p2Data));
	}


	public clear() {//清除舞台的东西
		SplashScene.instance.stage.removeChild(SplashScene.instance._life);
		if (this.type != Main.EVE) {
			let keyCtrl_key = this.P2OwnTheBtn ? _level0.P2_role.keyCtrl.key : _level0.P1_role.keyCtrl.key;
			if (keyCtrl_key instanceof Key_btn && this.type != 'eve') {
				SplashScene.instance.stage.removeChild(keyCtrl_key);
			}
		}
		if(this.role1.parent){
			SplashScene.hero_layer.removeChild(this.role1);
		}
		if(this.role2.parent){
			SplashScene.hero_layer.removeChild(this.role2);
		}
		if(HitCounter.container.parent){
			SplashScene.hero_layer.stage.removeChild(HitCounter.container);
		}
		if(HitCounter.containerMask.parent){
			SplashScene.hero_layer.stage.removeChild(HitCounter.containerMask);
		}
		Stage_effect.clert();
		// SplashScene.instance.stage.removeChild(SplashScene.hero_layer);
		// this.removeChildren();
		// this.role1 = null;
		// this.role2 = null;
		SplashScene.instance.removeChildren();
		SplashScene.instance.parent.removeChildAt(0);
		// (this.P1_TEST) && SplashScene.instance.stage.removeChild(this.P1_TEST);
		FightMainRender.getInstance().renderMc = [];
		_level0.eliminate_static();
		// if (this.P2_TEST) {
		// 	SplashScene.instance.stage.removeChild(this.P2_TEST);
		// }
		if (K_AI_Lv5.PlanningSwitch != null && K_AI_Lv5.PlanningSwitch.parent) {
			K_AI_Lv5.PlanningSwitch.stage.removeChild(K_AI_Lv5.PlanningSwitch);
		}
		if(Round.instance) {
			SplashScene.instance.stage.removeChild(Round.instance);
			Round.instance = null;
		}
		if (this.Waiting_img && this.Waiting_img.stage) {
			this.stage.removeChild(this.Waiting_img);
			this.stage.removeChild(this.Waiting_text);
		}

	}


	protected onExit() {
		Sound.getInstance().fightBgClose();
	}

}