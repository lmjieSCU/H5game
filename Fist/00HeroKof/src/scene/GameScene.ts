class GameScene extends Scene {

	public static instance: GameScene;
	public body1:zmovie.ZMovieClip=null;
	public body2:zmovie.ZMovieClip=null;
	public logTxt:egret.TextField;
	public hero_name: string ;
	public frameIndex : number = 2;
	public startLogTxtFlag : boolean = false;
	public logList: Array<string>=[];
	public labels : Array<string> = [];
	public startEnterFlag : boolean  = false;
	//
	public currLabel : egret.TextField;
	public constructor() {
		super();
	}
//
	protected onEnter() {
		GameScene.instance = this;
		/*  提示：刚开始进入游戏时，加载了比较多的素材，所以速度较慢，可以使用ResDepot工具只导入你需要检查的英雄的素材加快效率  */
		//这个是检查英雄时使用，第二个参数是有些英雄有分身，1表示第一个英雄，2表示第二个分身，3表示第3个分身
		HeroCheck.checkHero("roleK", 1);
		//
		//这个是检查助手时使用，不使用使用//注释掉
		//HeroCheck.checkAssist("assist_kon");
		this.addEventListener(egret.Event.ENTER_FRAME, this.advanceTime, this);

	}
//
	public advanceTime()
	{
		//if (this.startEnterFlag){
			this.body1.advanceTime();
			this.body2.advanceTime();
		//}
		
	}
//
	protected onExit() {

	}

}


