class GameScene extends Scene {
	public static instance: GameScene;
	private _tag: boolean = false;
	//------------------------------------------------------
	public _GameState: GameState;
	public _BtnState: egret.Sprite;
	//------------------------------------------------------
	public _isMobile: boolean = false;
	public _effectZmovie: zmovie.ZMovieClip;
	public _logTxt: egret.TextField;
	public _background: egret.Bitmap;
	public _bg: egret.Bitmap;
	public _bgexittag: boolean = true;
	public _msgreceived: boolean = false;
	//------------------------------------------------------
	public constructor(param: boolean = false) {
		super();
		console.log("new GameScene")
		if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE) {
			this._background = UI.addPic(this, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
			this._bg = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
			this._bg.scaleX = 30;
			this._bg.scaleY = 20;
		}
	}
	//

	private BuildConncet() {
		if (player1id == MGOBE.Player.id) {//双方只有一方可以开始帧同步，否则会出错
			MatchLayer.StartFrame();
		}
		else {
			console.log("not player1id,waiting StartFrame");
		}
		if (GameScene.instance._bgexittag) {
			GameScene.instance.removeChild(GameScene.instance._bg);
			GameScene.instance.removeChild(GameScene.instance._background);
			GameScene.instance._bgexittag = false;
		}
	}




	protected onEnter() {
		GameScene.instance = this;
		if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && MatchLayer.room) {	//联机模式
			this.BuildConncet();
			// GameCtrl.I.OfflineTest();
		}
		// else {
		// 	GameConfig.GAME_SIZE = new egret.Point(UI.WINSIZE_W, UI.WINSIZE_H);
		// 	GameScene.instance.doWork();
		// }
		GameConfig.GAME_SIZE = new egret.Point(UI.WINSIZE_W, UI.WINSIZE_H);
		GameScene.instance.doWork();
		this._logTxt = new egret.TextField();
		this._logTxt.x = 20; this._logTxt.y = 100;
		this._effectZmovie = new zmovie.ZMovieClip(["effect0_json", "effect1_json", "effect2_json", "effect3_json", "effect4_json", "effect5_json", "effect6_json"], RES.getRes("effect_json"), "XG_jump");
		this._effectZmovie.x = 200;
		this._effectZmovie.y = 200;
		this._effectZmovie.scaleX = 2.0; this._effectZmovie.scaleY = 2.0;
	}

	public addLog(str: string) {
		this._logTxt.text = str;
	}


	public doWork(): void {
		console.log("enter doWork")
		{	//--------------------------- initlize GameCtrl and GameState
			GameRender.initlize(this.stage);
			this._GameState = new GameState();
			this._GameState.build()
			this.addChild(this._GameState);
			this._BtnState = new egret.Sprite();
			this.addChild(this._BtnState);
		}
		{	//--------------------------- initlize Map and Fighter
			GameLoader_lmj.LoadMap("liuhunjie");//liuhunjie
			let p1 = GameLoader_lmj.loadFighter(1, "kakashi");
			let p2 = GameLoader_lmj.loadFighter(2, "sasuke_xz");
			GameLoader_lmj.loadAssister(1, "kon", p1);
			GameLoader_lmj.loadAssister(2, "kon", p2);
		}
		{	//-------------------------start GAME
			GameCtrl.I.startGame();
		}
	}

	public GetGameState() {
		return this._GameState;
	}

	protected onExit() {
	}

}


