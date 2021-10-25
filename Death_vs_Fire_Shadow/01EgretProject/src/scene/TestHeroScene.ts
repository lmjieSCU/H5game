
class TestHeroScene extends Scene {
		public static test_hero_name = "hero_kenpachi";
	public static frame_go: number = 2;
	public hero: zmovie.ZMovieClip;

	public tmp: zmovie.ZMovieClip;
	//
	public constructor() {
		super();
	}


	protected onEnter() {
		this.testAtmAnchor();
		UI.addPic(this, "red_dot_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
	}
public frame1() {
		console.log("hello frame1");
		let aa: any = this.hero;
	}
	public frame2() {
		console.log("hello frame2");
		let aa: any = this.hero;
	}
	public frame3() {
		console.log("hello frame3");
	}

	public getMCName(): string {
		if (TestHeroScene.frame_go == 2)
			return "mc";
		else
			return "mc" + TestHeroScene.frame_go;
	}
private testAtmAnchor() {
		let name: string = TestHeroScene.test_hero_name;
		this.hero = new zmovie.ZMovieClip(UI.getHeroMovieJson(name),
			RES.getRes(name + "_json"), "root");
		this.hero.addUIFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3]);
		this.hero.gotoAndStop(TestHeroScene.frame_go);
		this.hero.scaleX = 2.0;
		this.hero.scaleY = 2.0;
		this.hero.x = UI.WINSIZE_W / 2;
		this.hero.y = UI.WINSIZE_H / 2;
		this.addChild(this.hero);
		this.tmp = <zmovie.ZMovieClip>this.hero.getChildByName(this.getMCName());
		if (false) {
			this.tmp.gotoAndStop(257);
			let tt: zmovie.ZMovieClip = this.tmp.getChildMovie("kj22atm");
			let scaleX = tt.scaleX;
			let scaleY = tt.scaleY;
			let x1 = scaleX * 65.95;
			let y1 = scaleY * 40.5;
			console.log(x1);
			console.log(y1);
			return;
		}
		//
		let aa = this.tmp.getCurrLabelObj();
		this.tmp.checkAtmAnchor = true;
		this.tmp.addUIFrameScript(this, [0, this.testAtm])
		//	this.tmp.play();
		for (let i = 0; i <= this.tmp.totalFrame - 1; i++) {
			this.tmp.nextFrame();

		}

		this.stage.frameRate = 200;
	}

	public testAtm() {

		if (this.tmp.currFrame == this.tmp.totalFrame - 1) {
			console.log("run over");
		}
		let _loc_3 = 0;
		while (_loc_3 < this.tmp.numChildren) {

			let _loc_1: egret.DisplayObject = this.tmp.getChildAt(_loc_3);
			if (_loc_1 && _loc_1.name.indexOf("atm") != -1) {
				let abc = _loc_1.matrix;
				let a1 = _loc_1.$getContentBounds();
				let a2 = _loc_1.$getOriginalBounds();
				let a3 = _loc_1.getBounds();
				let a4 = _loc_1.$anchorOffsetX;
				let a5 = _loc_1.$anchorOffsetX;
				let i = 1;

				if (abc.b != 0) {
					console.log("" + (this.tmp.currFrame + 1) + "----" + _loc_1.name + " error!" + abc.b);
					let aaa = _loc_1.$displayList;
					let a1 = _loc_1.$getContentBounds();
					let a2 = _loc_1.$getOriginalBounds();
					let a3 = _loc_1.getBounds();
					let a4 = _loc_1.$anchorOffsetX;
					let a5 = _loc_1.$anchorOffsetX;
					let ii = 1;
				}
			}
			_loc_3++;
		}
	}



	private testZomvie() {
		let name: string = TestHeroScene.test_hero_name;
		this.hero = new zmovie.ZMovieClip(UI.getHeroMovieJson(name),
			RES.getRes(name + "_json"), "root");
		this.hero.addUIFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3]);
		this.hero.gotoAndStop(TestHeroScene.frame_go);
		this.hero.scaleX = 2.0;
		this.hero.scaleY = 2.0;
		this.hero.x = UI.WINSIZE_W / 2;
		this.hero.y = UI.WINSIZE_H / 2;
		this.addChild(this.hero);

		let t = <zmovie.ZMovieClip>this.hero.getChildByName(this.getMCName());
		//t.gotoAndStop(930);
		let i = 1;
		t.gotoAndPlay("招3");//超必杀 空中必杀 防御
		//t.gotoAndStop(786);
		// let fun = this.fun.bind(this,t)
		// t.addEventListener(egret.Event.ENTER_FRAME,fun,this);
	}
	public testSprite5() {
		let name: string = TestHeroScene.test_hero_name;
		let map = new zmovie.ZMovieClip(UI.getHeroMovieJson(name),
			RES.getRes(name + "_json"), "root");
		map.gotoAndStop(TestHeroScene.frame_go);
		let t = <zmovie.ZMovieClip>map.getChildByName(this.getMCName());
		t.gotoAndStop(350);
		//
		let aa: egret.DisplayObject = t.getChildByName("tzatm");
		let x1 = aa.scaleX;
		let y1 = aa.scaleY;
		let xx = x1 * 65.95;
		let yy = y1 * 40.5;
		console.log("xx = " + xx + " yy=" + yy);
	}
	public testbdmn() {
		let name: string = TestHeroScene.test_hero_name;
		let map = new zmovie.ZMovieClip(UI.getHeroMovieJson(name),
			RES.getRes(name + "_json"), "root");
		map.gotoAndStop(TestHeroScene.frame_go);
		let t = <zmovie.ZMovieClip>map.getChildByName(this.getMCName());
		t.gotoAndStop(1);
		//
		let aa: egret.DisplayObject = t.getChildByName("bdmn");
		let x1 = aa.scaleX;
		let y1 = aa.scaleY;
		let xx = x1 * 65.95;
		let yy = y1 * 40.5;
		console.log("testbdmn xx = " + xx + " yy=" + yy);
	}
	protected onExit() {
	}

}