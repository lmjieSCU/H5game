var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LocalVSScene = (function (_super) {
    __extends(LocalVSScene, _super);
    function LocalVSScene() {
        var _this = _super.call(this) || this;
        _this.mapNum = 0;
        _this.hero_lst = [
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
        return _this;
    }
    LocalVSScene.prototype.refreshHero = function () {
        this.hero1Label.text = "hero1:" + LocalVSScene.hero1Name;
        this.hero2Label.text = "hero2:" + LocalVSScene.hero2Name;
    };
    LocalVSScene.prototype.onEnter = function () {
        LocalVSScene.instance = this;
        var bg = UI.addPic(this, "vein_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = 20;
        bg.scaleY = 20;
        //
        var startPos = [0, 13];
        this.hero1Label = UI.addText(this, "hero1:" + LocalVSScene.hero1Name, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 90);
        this.hero2Label = UI.addText(this, "hero2:" + LocalVSScene.hero2Name, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 90);
        this.mapLabel = UI.addText(this, "mapName:" + LocalVSScene.mapName, UI.WINSIZE_W / 2, 20);
        var vs = UI.addText(this, "VS", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        vs.size = 33;
        var vsFight = UI.addText(this, "点击开战！！！！", UI.WINSIZE_W / 2 - 40, UI.WINSIZE_H - 40);
        vsFight.size = 44;
        UI.addClickAction(this, vsFight, function (arg) {
            SceneManager.Instance.changeScene(new GameScene);
        });
        {
            var vsFight_1 = UI.addText(this, "随机地图", UI.WINSIZE_W / 2, 60);
            vsFight_1.size = 26;
            UI.addClickAction(this, vsFight_1, function (arg) {
                LocalVSScene.instance.mapNum++;
                if (LocalVSScene.instance.mapNum == 5)
                    LocalVSScene.instance.mapNum = 0;
                LocalVSScene.mapName = LocalVSScene.map_lst[LocalVSScene.instance.mapNum];
                LocalVSScene.instance.mapLabel.text = "mapName:" + LocalVSScene.mapName;
            });
        }
        LocalVSScene.instance = this;
        {
            var xx = [UI.WINSIZE_W / 2 - 450, UI.WINSIZE_W / 2 - 300];
            for (var i = 0; i < 2; i++) {
                var y = 20;
                var yInter = 33;
                var _loop_1 = function (j) {
                    if (this_1.hero_lst[startPos[i] + j]) {
                        var name1 = UI.addText(this_1, this_1.hero_lst[startPos[i] + j], xx[i], y + j * yInter);
                        var clickName_1 = this_1.hero_lst[startPos[i] + j];
                        UI.addClickAction(this_1, name1, function (arg) {
                            LocalVSScene.hero1Name = clickName_1;
                            LocalVSScene.instance.refreshHero();
                        });
                    }
                };
                var this_1 = this;
                for (var j = 0; j < startPos[1]; j++) {
                    _loop_1(j);
                }
            }
        }
        {
            var xx = [UI.WINSIZE_W / 2 + 450, UI.WINSIZE_W / 2 + 300];
            for (var i = 0; i < 2; i++) {
                var y = 20;
                var yInter = 33;
                var _loop_2 = function (j) {
                    if (this_2.hero_lst[startPos[i] + j]) {
                        var name1 = UI.addText(this_2, this_2.hero_lst[startPos[i] + j], xx[i], y + j * yInter);
                        var clickName_2 = this_2.hero_lst[startPos[i] + j];
                        UI.addClickAction(this_2, name1, function (arg) {
                            LocalVSScene.hero2Name = clickName_2;
                            LocalVSScene.instance.refreshHero();
                        });
                    }
                };
                var this_2 = this;
                for (var j = 0; j < startPos[1]; j++) {
                    _loop_2(j);
                }
            }
        }
    };
    LocalVSScene.prototype.onExit = function () {
    };
    LocalVSScene.hero1Name = "chad";
    LocalVSScene.hero2Name = "lufei";
    LocalVSScene.mapName = "pubu";
    LocalVSScene.map_lst = [
        "liuhunjie",
        "muyecun",
        "pubu",
        "shihunjietongdao",
        "wenquan",
    ];
    return LocalVSScene;
}(Scene));
__reflect(LocalVSScene.prototype, "LocalVSScene");
//# sourceMappingURL=LocalVSScene.js.map