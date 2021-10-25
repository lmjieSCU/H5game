class FightloadScene extends Scene {
	public static Instance: FightloadScene;
	public _loadFlag: number = 0;		//0加载 1释放
	public constructor(param: number) {
		super();
		this._loadFlag = param;
	}
	protected onEnter() {
		FightloadScene.Instance = this;
		UI.addPic(this, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		{
			let aa = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
			aa.scaleX = 30;
			aa.scaleY = 20;
		}
		{
			let aa = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
			aa.scaleX = 30;
			aa.scaleY = 20;
		}
		//
		if (this._loadFlag == 0) {
			let txt: egret.TextField = UI.addText(this, "游戏资源加载中....", UI.WINSIZE_W / 2 - 100, UI.WINSIZE_H - 80);
			txt.textColor = 0xffffff;
		} else {
			let txt: egret.TextField = UI.addText(this, "游戏资源释放中....", UI.WINSIZE_W / 2 - 100, UI.WINSIZE_H - 80);
			txt.textColor = 0xffffff;
		}
		egret.setTimeout(function (arg) {
			FightloadScene.Instance.doAction();
		}, this, 2000);
	}

	protected doAction() {
		if (FightloadScene.Instance._loadFlag == 0) {
			if (GameMode.currentMode == GameMode.TRAINING) {
				SceneManager.Instance.changeScene(new GameScene(false));
			} else if (GameMode.currentMode == GameMode.SINGLE_VS_CPU) {
				SceneManager.Instance.changeScene(new GameScene(true));
			} else if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE) {
				SceneManager.Instance.changeScene(new GameScene(false));
			}
		} else {
			SceneManager.Instance.changeScene(new ModeScene());
		}

	}

	protected onExit() {
	}

}