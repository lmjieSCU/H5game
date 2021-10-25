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
var FightLevel = (function (_super) {
    __extends(FightLevel, _super);
    function FightLevel(playInfo) {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.playInfo = playInfo;
        return _this;
    }
    FightLevel.prototype.onEnter = function () {
        var _this = this;
        this.initLevelInfo();
        this.initChooseLevel();
        UI.addBtn(this, "Choose_button_begin_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 50, true, function () {
            SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, _this.AI));
        });
    };
    FightLevel.prototype.initLevelInfo = function () {
        this.info = new egret.DisplayObjectContainer();
        var bg = UI.addPic(this.info, "Adventure_box_png", 0, 0);
        this.info.width = bg.width;
        this.info.height = bg.height;
        this.info.x = UI.WINSIZE_W - this.info.width - 50;
        this.info.y = this.parent.getChildAt(0).height;
        this.addChild(this.info);
        this.fightLevelInfo = FightData.getFightLevelInfo();
        var progress = this.parent.createProgress(this.fightLevelInfo.allFail / (this.fightLevelInfo.allFail + this.fightLevelInfo.allVictory) || 0);
        this.info.addChild(progress);
        progress.x = this.info.width / 2 - progress.width / 2;
        progress.y = progress.height + 20;
        var maxVictory = this.parent.getNumber(this.fightLevelInfo.allVictory, this.info);
        maxVictory.x = this.info.width / 2;
        maxVictory.y = 60;
        var maxLevel = this.parent.getNumber(this.fightLevelInfo.maxLevel, this.info);
        maxLevel.x = this.info.width / 2 - 35;
        maxLevel.y = 80;
        var passCount = this.parent.getNumber(this.fightLevelInfo.passCount, this.info);
        passCount.x = this.info.width / 2 - 35;
        passCount.y = 105;
        this.heroMaxLevel = this.parent.getNumber(this.fightLevelInfo.heroList[0].maxLevel, this.info);
        this.heroMaxLevel.x = this.info.width / 2 + 15;
        this.heroMaxLevel.y = 125;
        this.heroPassCount = this.parent.getNumber(this.fightLevelInfo.heroList[0].passCount, this.info);
        this.heroPassCount.x = this.info.width / 2 + 15;
        this.heroPassCount.y = 145;
    };
    FightLevel.prototype.initChooseLevel = function () {
        // let bg: egret.Bitmap = UI.addPic(this, "Adventure_box_png", UI.WINSIZE_W/4*3, UI.WINSIZE_H/3, true);
        var _this = this;
        var levelList = ["K", "Ryu", "Chunli", "Terry", "Mai"];
        var maps = new egret.DisplayObjectContainer();
        levelList.map(function (data, index) {
            var map = new egret.DisplayObjectContainer();
            maps.addChild(map);
            var bg = UI.addPic(map, "Adventure_box_map_png", 0, 0, true);
            // bg.x = bg.width/2;
            bg.y = bg.height / 2;
            UI.addText(map, data, bg.x, bg.y, true, 20, 0xffffff);
            map.x = (75 + bg.width) * (index + 1);
        });
        maps.width += maps.width / 2;
        var levelScroll = new ScrollView(maps, this.info.width, maps.height, this.info.x, this.info.y + this.info.height + 10, 1, 1, true, false, this, function () {
            _this.AI = levelList[levelScroll.getChildNow()] + "|8";
        }, false, true, true, 0.8);
        this.addChild(levelScroll);
        levelScroll.changePosition(0, 0);
        var left = UI.addBtn(this, "loadingArrow_png", levelScroll.x, levelScroll.y + levelScroll.height / 2, true, function () { return levelScroll.changeChild(-1); });
        var right = UI.addBtn(this, "loadingArrow_png", levelScroll.x + levelScroll.width, levelScroll.y + levelScroll.height / 2, true, function () { return levelScroll.changeChild(1); });
        right.skewY = 180;
    };
    FightLevel.prototype.test = function () {
        var _this = this;
        var levels = [
            "K", "Ryu", "Chunli", "Terry"
        ];
        var names = [
            '格斗者', '战士', '武者', '黑拳'
        ];
        var chooseHero = new egret.DisplayObjectContainer();
        this.addChild(chooseHero);
        var shape = new egret.Shape();
        var hero = 0;
        var choose = UI.addPic(chooseHero, "Fight_pic_lightning_png", 0, 0, true);
        levels.map(function (data, index) {
            var ai = new egret.DisplayObjectContainer();
            chooseHero.addChild(ai);
            var a = UI.addPic(ai, data + "Bg_png", 0, 0, true);
            var name = UI.addText(ai, names[index], a.x, ai.y + 15, true, 15, 0xffffff);
            ai.x = UI.WINSIZE_W / 2 + (index - (levels.length - 1) / 2) * 200;
            ai.y = UI.WINSIZE_H / 2 + 125;
            a.anchorOffsetY = a.height;
            ai.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                hero = index;
                choose.x = ai.x;
                choose.y = ai.y - ai.height + 20 - choose.height * 0.5;
                chooseHero.setChildIndex(ai, chooseHero.numChildren - 2);
                chooseHero.setChildIndex(shape, chooseHero.numChildren - 3);
                if (Home.instace.newHand)
                    Home.instace.removeChildAt(Home.instace.numChildren - 1);
            }, _this);
            ai.touchEnabled = true;
            if (index == 0) {
                choose.x = ai.x;
                choose.y = ai.y - ai.height + 20 - choose.height * 0.5;
            }
            else {
                chooseHero.setChildIndex(ai, chooseHero.numChildren - 3);
            }
        });
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 100, UI.WINSIZE_W, chooseHero.height);
        shape.graphics.endFill();
        chooseHero.addChild(shape);
        chooseHero.setChildIndex(shape, chooseHero.numChildren - 3);
        chooseHero.setChildIndex(choose, chooseHero.numChildren - 1);
        var start = UI.addPic(this, 'Choose_button_begin_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);
        var level = ['简单', '一般', '困难'];
        var l = 1;
        var nan = new egret.DisplayObjectContainer();
        nan.x = start.x + start.width;
        nan.y = start.y - start.height / 2;
        var nshape = new egret.Shape();
        nan.addChild(nshape);
        level.map(function (data, index) {
            var n = UI.addText(nan, data, index * 45, 0, false, 20, 0xffffff);
            n.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                nan.setChildIndex(n, nan.numChildren - 1);
                nan.setChildIndex(nshape, nan.numChildren - 2);
                l = index + 1;
                if (Home.instace.newHand)
                    Home.instace.removeChildAt(Home.instace.numChildren - 1);
            }, _this);
            n.touchEnabled = true;
            if (index != 0) {
                nan.setChildIndex(n, nan.numChildren - 3);
            }
        });
        nshape.graphics.beginFill(0x000000, 0.5);
        nshape.graphics.drawRect(0, 0, nan.width, nan.height);
        nshape.graphics.endFill();
        this.addChild(nan);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // const ai = `${levels[AIscroll.getChildNow()]}|${lv}`
            // console.log(ai)
            // SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, ai))
            var ai = "new " + levels[hero] + "_AI_Lv5(" + l * 4 + ")";
            _this.playInfo.p2 = ai;
            FightMainRender.getInstance().initlize();
            SceneManager.getInstance().ChangeScene(new LoadResScene(_this.playInfo));
        }, this);
    };
    FightLevel.prototype.test2 = function () {
        var levels = [
            "K", "Type2_K", "Ryu", "Type2_Ryu", "Chunli", "Type2_Chunli", "Terry", "Type2_Terry"
        ];
        var AIs = new egret.DisplayObjectContainer();
        levels.map(function (data, index) {
            var ai = UI.addText(AIs, data, UI.WINSIZE_W / 2 + index * 200, UI.WINSIZE_H / 4, true);
        });
        AIs.width += AIs.width;
        var AIscroll = new ScrollView(AIs, UI.WINSIZE_W, UI.WINSIZE_H / 2, 0, UI.WINSIZE_H + 20, 1, 1, true, false);
        this.addChild(AIs);
        this.addChild(AIscroll);
        var lv = 3;
        var _loop_1 = function (i) {
            var lvs = UI.addText(this_1, "lv" + i, UI.WINSIZE_W / 4 + i * 50, UI.WINSIZE_H - 70, true);
            lvs.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                lv = i;
                console.log(lv);
            }, this_1);
            lvs.touchEnabled = true;
        };
        var this_1 = this;
        for (var i = 1; i <= 10; i++) {
            _loop_1(i);
        }
    };
    return FightLevel;
}(egret.DisplayObjectContainer));
__reflect(FightLevel.prototype, "FightLevel", ["egret.DisplayObject"]);
//# sourceMappingURL=FightLevel.js.map