var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameLoader_lmj = (function () {
    function GameLoader_lmj() {
        return;
    } // end 
    GameLoader_lmj.loadFighter = function (id, hero) {
        if (id === void 0) { id = 1; }
        if (hero === void 0) { hero = "kakashi"; }
        if (id == 0 || !hero) {
            return;
        }
        var Hero_Class = egret.getDefinitionByName("hero_" + hero)[hero];
        var Loadjs = [];
        var num = 8;
        for (var index = 0; index < 8; index++) {
            Loadjs.push("hero_" + hero + String(index) + "_json");
        }
        var Hero = new Hero_Class(Loadjs, RES.getRes("hero_" + hero + "_json"), "root"); //zmoive.zmoiveClip
        var _Group = null;
        var _SelectGroup = null;
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
        if (_Group.fighter1 == null) {
            _Group.fighter1 = new FighterMain(Hero);
            _SelectGroup.fighter1 = hero;
        }
        else if (_Group.fighter2 == null) {
            _Group.fighter2 = new FighterMain(Hero);
            _SelectGroup.fighter2 = hero;
        }
        else if (_Group.fighter3 == null) {
            _Group.fighter3 = new FighterMain(Hero);
            _SelectGroup.fighter3 = hero;
        }
        _Group.currentFighter = _Group.fighter1;
        return _Group.currentFighter;
    };
    GameLoader_lmj.loadAssister = function (id, assist, _FighterMain) {
        if (id == 0 || !assist) {
            return;
        }
        var Js_object = [];
        var num = 8;
        for (var index = 0; index < num; index++) {
            Js_object.push("assist_" + assist + String(index) + "_json");
        }
        var Assister = new zmovie.ZMovieClip(Js_object, RES.getRes("assist_" + assist + "_json"), "root");
        var Assister_Class = egret.getDefinitionByName("assist_" + assist);
        switch (Number(id) - 1) {
            case 0:
                GameCtrl.I.gameRunData.p1FighterGroup.fuzhu = new Assister_Class(Assister, _FighterMain);
                break;
            case 1:
                GameCtrl.I.gameRunData.p2FighterGroup.fuzhu = new Assister_Class(Assister, _FighterMain);
                break;
        }
    };
    GameLoader_lmj.LoadMap = function (map) {
        if (map === void 0) { map = "pubu"; }
        this._mapName = map;
        var Map = new zmovie.ZMovieClip(["map_" + map + "0_json"], RES.getRes("map_" + map + "_json"), "map_" + map);
        GameCtrl.I.gameRunData.map = new MapMain(Map);
    };
    return GameLoader_lmj;
}());
__reflect(GameLoader_lmj.prototype, "GameLoader_lmj");
//# sourceMappingURL=GameLoader_lmj.js.map