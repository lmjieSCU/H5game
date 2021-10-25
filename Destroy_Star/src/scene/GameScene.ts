class GameScene extends Scene {
	public static instance: GameScene;

	//
	public constructor() {
		super();
	}
	//


	protected onEnter() {
		GameScene.instance = this;
		this.addChild(new MainMoive());
	}


	protected onExit() {
	}

}


