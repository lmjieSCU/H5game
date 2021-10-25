
class GameLoader_lmj {

	public static _mapName:string;

	public constructor() {
		return;
	}// end 



	public static loadFighter(id: number=1, hero: string="kakashi"):FighterMain {
		if (id == 0 || !hero) {
			return;
		}
		let Hero_Class: any = egret.getDefinitionByName("hero_" + hero)[hero];
		let Loadjs = [];
		let num = 8;
		for (let index = 0; index < 8; index++) {
			Loadjs.push("hero_" + hero + String(index) + "_json")
		}
		let Hero = new Hero_Class(Loadjs, RES.getRes("hero_" + hero + "_json"), "root");      //zmoive.zmoiveClip
		let _Group: any = null;
		let _SelectGroup:any = null;
		switch (Number(id) - 1) {
			case 0:
				_Group = GameCtrl.I.gameRunData.p1FighterGroup;
				_SelectGroup = GameData.I.p1Select;
				break;
			case 1:
				_Group = GameCtrl.I.gameRunData.p2FighterGroup;
				_SelectGroup = GameData.I.p2Select;
				break;
		}
		if(_Group.fighter1 == null){
			_Group.fighter1 = new FighterMain(Hero);
			_SelectGroup.fighter1 = hero;
		}
		else if(_Group.fighter2 == null){
			_Group.fighter2 = new FighterMain(Hero);
			_SelectGroup.fighter2 = hero;
		}
		else if(_Group.fighter3 == null){
			_Group.fighter3 = new FighterMain(Hero);
			_SelectGroup.fighter3 = hero;
		}
		_Group.currentFighter = _Group.fighter1;
		return _Group.currentFighter;
	}


	public static loadAssister(id: number, assist: string,_FighterMain:FighterMain) {
		if (id == 0 || !assist) {
			return;
		}
		let Js_object = [];
		let num = 8;
		for (let index = 0; index < num; index++) {
			Js_object.push("assist_" + assist + String(index) + "_json")
		}
		let Assister = new zmovie.ZMovieClip(Js_object, RES.getRes("assist_" + assist + "_json"), "root");
		let Assister_Class: any = egret.getDefinitionByName("assist_" + assist);
		switch (Number(id) - 1) {
			case 0:
				GameCtrl.I.gameRunData.p1FighterGroup.fuzhu = new Assister_Class(Assister,_FighterMain);
				break;
			case 1:
				GameCtrl.I.gameRunData.p2FighterGroup.fuzhu = new Assister_Class(Assister,_FighterMain);
				break;
		}
	}

	public static LoadMap(map: string = "pubu") {
		this._mapName = map;
		let Map = new zmovie.ZMovieClip(["map_" + map + "0_json"], RES.getRes("map_" + map + "_json"), "map_" + map);
		GameCtrl.I.gameRunData.map = new MapMain(Map);
	}

}