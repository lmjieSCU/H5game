class LoginScene extends Scene{
	public result: number;
	public static Instance: LoginScene;
	public secondFlag : number = 0;
	public constructor() {
		super();
	}
	protected onEnter() {
		LoginScene.Instance = this;
		UI.addPic(this, "bg_jpg",  UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		UI.addBtn(this, "startBtn_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true, function(arg)
		{
			
			SplashScene.loginTT();
			let s1:GameScene =  new GameScene();
      			 SceneManager.Instance.changeScene(s1);
			 
        });
		SplashScene.playMusic();
		SplashScene.showBannerForce(LoginScene.Instance);
		SplashScene.addVersion(this);
		//UI.addText(this, "H", 111, 111);
	}


	
	protected onExit() {
		}

}