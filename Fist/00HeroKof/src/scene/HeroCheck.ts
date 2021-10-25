class HeroCheck {


	public static getHeroMovieJson(heroName: string): any{
		 let Js_object = [];
		for (let i = 0; i < 8; i ++){
			let nm : string = heroName+ i + "_json";
			if (RES.getRes(nm)){
				Js_object.push(nm);
			}else{
				break;
			}
		}
		return Js_object;
	}
	

	public static rank(prop) {
		return function (obj1, obj2) {
			var val1 = obj1[prop];
			var val2 = obj2[prop];
			if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
				val1 = Number(val1);
				val2 = Number(val2);
			}
			if (val1 < val2) { //降序排列
				return -1;
			} else if (val1 > val2) {
				return 1;
			} else {
				return 0;
			}
		};
	}



	public static showHero(isBodyFlag2:boolean){
			
			let body1: zmovie.ZMovieClip = new zmovie.ZMovieClip(
				HeroCheck.getHeroMovieJson(GameScene.instance.hero_name),
				RES.getRes(GameScene.instance.hero_name + "_json"), "root", 1, isBodyFlag2);
			
			body1.x = 240;
			if (isBodyFlag2)
				body1.x = 600;
			body1.y = 240;
			GameScene.instance.addChild(body1);
			body1.scaleX = 1.0;
			body1.scaleY = 1.0;
			let bodyMC = <zmovie.ZMovieClip>body1.$children[0];
			//GameScene.instance.labels.push("play");
			if (GameScene.instance.labels.length == 0){
				let labels = bodyMC.getLabels();
				let ary=[];
				let i =0;
				for (let key in labels) {
					ary[i]= {};
					ary[i] = {name:key, begin:labels[key].begin};
					i ++;
				}

				ary.sort(HeroCheck.rank('begin'));
				for (let i = 0; i < ary.length; i ++) {
					GameScene.instance.labels.push(ary[i].name);
				}
			}
			
			/*
			站立 走 瞬步 起跳 跳 跳中 落 落地 跳砍  跳招 跳招loop 跳招2 砍1 砍2 砍3 砍4 砍5
			砍技1 砍技2  招1 招2  招20 招21 招30 招3
			摔1 摔2 必杀 上必杀 上必杀1 空中必杀 超必杀 
			防御 防御恢复 被打 击飞 击飞_落 击飞_弹 击飞_倒 击飞_起 起身 开场 胜利 失败
			*/
			//
			bodyMC.gotoAndPlay("begin");
			return bodyMC;
	}

	public static checkHero(heroName:string, frame : number){
		GameScene.instance.hero_name = heroName;//"hero_rukia"
		GameScene.instance.frameIndex = frame;
		GameScene.instance.stage.frameRate = 30;
		GameScene.instance.body1 = HeroCheck.showHero(false);
		GameScene.instance.body2 = HeroCheck.showHero(true);
		GameScene.instance.logTxt = UI.addText(GameScene.instance, "", 100, 240);
		GameScene.instance.logTxt.text="";
		GameScene.instance.logTxt.textColor=0xcafc04;
		let strlst:Array<string> = GameScene.instance.labels;
		/*["站立","走","瞬步","起跳","跳","跳中","落","落地","跳砍"
				,"跳招","跳招loop","跳招2","砍1","砍2","砍3","砍4"
				,"砍5", "砍技1","砍技2","","招1","招2","","招20","招21","招30","招3",
			    "摔1","摔2","必杀","上必杀","上必杀1","空中必杀","超必杀","防御","防御恢复"
			   ,"被打","击飞","击飞_落","击飞_弹","击飞_倒","击飞_起","起身","开场","胜利","失败"];*/
		let start = 0;
		let startX = 20;
		let startY = 120;
		let lstlst = [12, 14, 10, 10, 9, 10, 10, 10, 10, 10];
		//
		GameScene.instance.currLabel= UI.addText(GameScene.instance, "", 10, 20);
		GameScene.instance.currLabel.textColor = 0xfd081f;
		for (let i = 0 ; i < 10; i ++){
			let LastWidth = 0;
			let totaWidth = 0;
			for (let j = 0; j < lstlst[i]; j ++){
				let ii = start;
				let txt:egret.TextField = UI.addText(GameScene.instance, strlst[start],startX+ LastWidth, startY+i*45);
				UI.addClickAction(GameScene.instance, txt, function(arg){
					GameScene.instance.startEnterFlag = true;
					GameScene.instance.startLogTxtFlag = true;
					GameScene.instance.logList=[];
					GameScene.instance.logTxt.text = "";
					
						GameScene.instance.body1.gotoAndPlay(strlst[ii]);
						GameScene.instance.body2.gotoAndPlay(strlst[ii]);
					
					GameScene.instance.currLabel.text = strlst[ii];

				});
				LastWidth = LastWidth + txt.textWidth + 20;
				//
				start ++;
				if (start == strlst.length){
					return;
				}
			}
		}
		//
	}

	public static addAssist(isBodyFlag2 : boolean):zmovie.ZMovieClip
	{
			let body1: zmovie.ZMovieClip = new zmovie.ZMovieClip(
				HeroCheck.getHeroMovieJson(GameScene.instance.hero_name),
				RES.getRes(GameScene.instance.hero_name + "_json"), "root", 1, isBodyFlag2);
			body1.x = 240;
			if (isBodyFlag2)
				body1.x = 600;
			body1.y = 300;
			GameScene.instance.addChild(body1);
			body1.scaleX = 4.0;
			body1.scaleY = 4.0;
			body1.play();
			return body1;
	}

	public static checkAssist(heroName:string){
		GameScene.instance.hero_name = heroName;
		GameScene.instance.body1 = HeroCheck.addAssist(false);
		GameScene.instance.body2 = HeroCheck.addAssist(true);
	}


	protected onExit() {

	}

}


