
class LocalVSScene extends Scene {
	public static instance: LocalVSScene;
	public static hero1Name:string = "chad";
	public static hero2Name:string = "lufei";
	public static mapName:string = "pubu";

	public hero1Label: egret.TextField;
	public hero2Label: egret.TextField;
	public mapLabel: egret.TextField;
	public mapNum :number  = 0;
	public static map_lst:Array<string> = [
		"liuhunjie",
		"muyecun",
		"pubu",
		"shihunjietongdao",
		"wenquan",
	];
	public hero_lst:Array<string> = [
		"chad",
		"didala",
		"gaara",
		"ichigo",
		"ikkaku",
		"juggo",
		"kakashi",
		"karin",
		"killerbee",
		"konan",
		"lee",
		"mayuri",
		"naruto",
		"neji",
		"obito",
		"orihime",
		"pain",
		"renji",
		"rukia",
		"sakura",
		"sasuke",
		"sasuke_xz",
		"temari",
		"toushirou",
		"yin"
	];
	public constructor() {
		super();
	}

	public refreshHero()
	{
		this.hero1Label.text = "hero1:"+ LocalVSScene.hero1Name;
		this.hero2Label.text  = "hero2:"+ LocalVSScene.hero2Name;
	}
	protected onEnter() {
		LocalVSScene.instance = this;
		let bg: egret.Bitmap = UI.addPic(this, "vein_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		bg.scaleX = 20;
		bg.scaleY = 20;
		//
		let startPos: Array<number> = [0, 13];

		this.hero1Label = UI.addText(this, "hero1:"+ LocalVSScene.hero1Name , UI.WINSIZE_W/2, UI.WINSIZE_H/2-90);
		this.hero2Label = UI.addText(this, "hero2:"+ LocalVSScene.hero2Name , UI.WINSIZE_W/2, UI.WINSIZE_H/2+90);
		this.mapLabel = UI.addText(this, "mapName:"+ LocalVSScene.mapName , UI.WINSIZE_W/2, 20);


		let vs:egret.TextField = UI.addText(this, "VS" , UI.WINSIZE_W/2, UI.WINSIZE_H/2);
		vs.size = 33;

		let vsFight:egret.TextField = UI.addText(this, "点击开战！！！！" , UI.WINSIZE_W/2-40, UI.WINSIZE_H-40);
		vsFight.size = 44;
		UI.addClickAction(this, vsFight, function (arg) {
							SceneManager.Instance.changeScene(new GameScene);
						});
		{
			let vsFight: egret.TextField = UI.addText(this, "随机地图", UI.WINSIZE_W / 2, 60);
			vsFight.size = 26;
			UI.addClickAction(this, vsFight, function (arg) {
				LocalVSScene.instance.mapNum ++;
				if (LocalVSScene.instance.mapNum == 5)
					LocalVSScene.instance.mapNum = 0;
				LocalVSScene.mapName =  LocalVSScene.map_lst[LocalVSScene.instance.mapNum];
				LocalVSScene.instance.mapLabel.text  = "mapName:"+ LocalVSScene.mapName;
			});
		}


		LocalVSScene.instance = this;
		{
			let xx: Array<number> = [UI.WINSIZE_W / 2 - 450, UI.WINSIZE_W / 2 - 300];
			for (let i = 0; i < 2; i++) {
				let y = 20; let yInter = 33;
				for (let j = 0; j < startPos[1]; j++) {
					if (this.hero_lst[startPos[i] + j]) {
						let name1 = UI.addText(this, this.hero_lst[startPos[i] + j], xx[i], y + j * yInter);
						let clickName = this.hero_lst[startPos[i] + j];
						UI.addClickAction(this, name1, function (arg) {
							LocalVSScene.hero1Name = clickName;
							LocalVSScene.instance.refreshHero();
						});
					}
				}
			}
		}
		{
			let xx: Array<number> = [UI.WINSIZE_W / 2 + 450, UI.WINSIZE_W / 2 + 300];
			for (let i = 0; i < 2; i++) {
				let y = 20; let yInter = 33;
				for (let j = 0; j < startPos[1]; j++) {
					if (this.hero_lst[startPos[i] + j]) {
						let name1 = UI.addText(this, this.hero_lst[startPos[i] + j], xx[i], y + j * yInter);
						let clickName = this.hero_lst[startPos[i] + j];
						UI.addClickAction(this, name1, function (arg) {
							LocalVSScene.hero2Name = clickName;
							LocalVSScene.instance.refreshHero();
						});
					}
				}
			}
		}
	}


	protected onExit() {
	}

}