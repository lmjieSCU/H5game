
class UtilSound {
	public static dealMoreSameConfig: any = [];
	public static dealMoreSameConfigSound: any = [];
	public static test: any = [];
	public static soundflag: boolean = true;
	public static soundingFight: string = "";
	public static bgMusicIsPlaying:boolean = false;
	public static fightMusicIsPlaying:boolean = false;
	//
	public static playMusic() {
		 if (!UtilSound.soundflag)
            return;
		let file = "bgmusic_mp3";
		if (UtilSound.dealMoreSameConfig[file]){
			UtilSound.dealMoreSameConfig[file].stop();
			UtilSound.bgMusicIsPlaying = false;
		}
		if (UtilSound.soundflag) {
			if (!UtilSound.dealMoreSameConfig[file]) {
				var sd: egret.Sound = RES.getRes(file);
				UtilSound.dealMoreSameConfig[file] = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
				UtilSound.dealMoreSameConfigSound[file] = sd;
			} else {
				UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
			}
			UtilSound.bgMusicIsPlaying = true;
		}
	}
	public static clickMusicBtn() {
		let file = 'bgmusic_mp3';
		if (UtilSound.soundflag) {
			UtilSound.soundflag = false;
			UtilSound.dealMoreSameConfig[file].stop();
			UtilSound.bgMusicIsPlaying = false;
		} else {
			UtilSound.soundflag = true;
			if (!UtilSound.dealMoreSameConfig[file]) {
				var sd: egret.Sound = RES.getRes(file);
					UtilSound.dealMoreSameConfig[file] = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
					UtilSound.dealMoreSameConfigSound[file] = sd;
			} else {
				UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
			}
			//背景音乐正在播放
			UtilSound.bgMusicIsPlaying = true;
		}
	}

	public static playFightMusic(file: string = "music_liuhunjie_mp3") {
		if (UtilSound.dealMoreSameConfig['bgmusic_mp3']){
			UtilSound.dealMoreSameConfig['bgmusic_mp3'].stop();
			UtilSound.bgMusicIsPlaying = false;
		}
		if (UtilSound.soundflag) {
			if (!UtilSound.dealMoreSameConfig[file]) {
				var sd: egret.Sound =  RES.getRes(file);
					UtilSound.dealMoreSameConfig[file] = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
					UtilSound.dealMoreSameConfigSound[file] = sd;
			} else {
				UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
			}
			UtilSound.soundingFight = file;
			UtilSound.fightMusicIsPlaying = true;
		}
	}
	
	public static playSound(name: string = "click") {
		UtilSound.playCacheSound(name);
	}

	public static stopUISound(name: string = "click") {
		let file = name + "_mp3";
		if (UtilSound.dealMoreSameConfig[file])
			UtilSound.dealMoreSameConfig[file].stop();
	}
	public static playUISound(name: string = "click") {
		let file = name + "_mp3";
		if (UtilSound.dealMoreSameConfig[file])
			UtilSound.dealMoreSameConfig[file].stop();
		//
		UtilSound.playCacheSound(name);
	}

	public static times = 0;

	public static playCacheSound(param1: string){
		 if (!UtilSound.soundflag)
            return;
		try{
        let file = param1 + "_mp3";
        if (!UtilSound.dealMoreSameConfig[file]) {
            	var sound: egret.Sound = RES.getRes(file);
                UtilSound.dealMoreSameConfig[file] = sound.play(0, 1);  //播放一次， 0， 0背景音乐 
                UtilSound.dealMoreSameConfigSound[file] = sound;
				UtilSound.test[file] = false;
				const t = egret.setInterval(() => {
					UtilSound.test[file] = true;
					egret.clearInterval(t);
				},this,400)
		} else if(UtilSound.test[file]){
			UtilSound.test[file] = false
            UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 1);
			const t = egret.setInterval(() => {
				UtilSound.test[file] = true;
				egret.clearInterval(t);
			},this,400)
        } else {
			UtilSound.times++;
			console.log(UtilSound.times);
		}
		}catch(e){
			//
		}
	}
}
