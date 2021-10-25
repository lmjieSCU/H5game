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
var FightReady = (function (_super) {
    __extends(FightReady, _super);
    function FightReady(type, hero) {
        if (hero === void 0) { hero = ""; }
        var _this = _super.call(this) || this;
        _this.playInfo = {
            map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_AI_Lv5(1)", player: 1, time: 0, type: 'pve', p1SkillList: HeroData.getHeroSkillList(2006), p2SkillList: HeroData.getHeroSkillList(2006)
        };
        _this.type = type;
        _this.playInfo.p1 = "new " + hero + "_Player()";
        return _this;
    }
    FightReady.prototype.onEnter = function () {
        var _this = this;
        FightReady.instance = this;
        var backBg = UI.addPic(this, "Choose_button_backbg_png", 0, 0);
        var back = UI.addPic(this, "Button_back_png", 0, 0);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.getInstance().RemoveLayer(_this);
            SceneManager.getInstance().AddLayer(new HomeLayer());
        }, this);
        this.heroListLeft = new HeroLsitLeft(function (index) {
            _this.heroList.heroScroll.changePosition(index);
        }, this);
        this.addChild(this.heroListLeft);
        this.heroList = new HeroList(this, UI.WINSIZE_W / 8 + 20, UI.WINSIZE_H * 0.2, 200, UI.WINSIZE_H * 0.5, function (nowChild) {
            _this.heroListLeft.scrollView.changePosition(nowChild);
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);
        switch (this.type) {
            case 'level':
                // let bg: egret.Shape = new egret.Shape();
                // bg.graphics.beginFill(0x000000);
                // bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
                // bg.graphics.endFill();
                // this.addChild(bg);
                // this.setChildIndex(bg, 0);
                backBg.$setTexture(RES.getRes("Adventure_head_png"));
                this.addChild(new FightLevel(this.playInfo));
                break;
            case 'house':
                this.addChild(new FightHouse(this.playInfo));
                break;
            case 'rank':
                backBg.$setTexture(RES.getRes("Ranking_head_png"));
                this.addChild(new FightRank(this.playInfo));
                break;
            case 'match':
                backBg.$setTexture(RES.getRes("Online_head_png"));
                this.addChild(new FightMatch(this.playInfo));
                break;
        }
        if (Home.instace.newHand) {
            this.newHandHero();
        }
    };
    FightReady.prototype.onExit = function () {
    };
    FightReady.prototype.createRankTest = function () {
        var _this = this;
        var playInfo = {
            map: 9, life: 500, powerMax: 3, p1: 'new K_AI_Lv5(1)', p2: "new K_AI_Lv5(14)", player: 1, time: 0, type: 'eve', p1SkillList: null, p2SkillList: null
        };
        var hero = [
            'K', 'Type2_K', 'Ryu', 'Type2_Ryu'
        ];
        hero.map(function (data, index) {
            var _loop_1 = function (i) {
                var t = UI.addText(_this, data + i, UI.WINSIZE_W / 4 + (index - 2) * 80, UI.WINSIZE_H / 2 + (i - 3) * 40, true, 15);
                t.touchEnabled = true;
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    playInfo.p1 = "new " + data + "_AI_Lv5(" + i + ")";
                }, _this);
            };
            for (var i = 1; i <= 5; i++) {
                _loop_1(i);
            }
        });
        hero.map(function (data, index) {
            var _loop_2 = function (i) {
                var t = UI.addText(_this, data + i, UI.WINSIZE_W / 4 * 3 + (index - 2) * 80, UI.WINSIZE_H / 2 + (i - 3) * 40, true, 15);
                t.touchEnabled = true;
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    playInfo.p2 = "new " + data + "_AI_Lv5(" + i + ")";
                }, _this);
            };
            for (var i = 1; i <= 5; i++) {
                _loop_2(i);
            }
        });
        var start = UI.addText(this, '开始游戏', UI.WINSIZE_W / 2 + 200, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.getInstance().ChangeScene(new SplashScene(playInfo));
        }, this);
    };
    FightReady.prototype.getHeroRankInfo = function (id, rankHeroInfo) {
        for (var i = 0; i < rankHeroInfo.length; i++) {
            if (id == rankHeroInfo[i].heroId)
                return rankHeroInfo[i];
        }
    };
    FightReady.prototype.newHandHero = function () {
        var level = this.getChildAt(3);
        var choose = level.getChildAt(0);
        var role = choose.getChildAt(choose.numChildren - 2);
        var target = role.getChildAt(0);
        // Home.instace.addChild(new NewHands(target.x - target.width/2,target.y-target.height, target.width, target.height, "点击选择英雄出战", UI.WINSIZE_W/2, UI.WINSIZE_H/2, this.newHandLevel, this));
        // this.addChild(new Finger(target.x,target.y - target.height/2));
        Home.instace.addChild(new NewHandss(target, "hero", target.parent.x, target.parent.y - target.height / 2, this.newHandLevel, this));
    };
    FightReady.prototype.newHandLevel = function () {
        var level = this.getChildAt(3);
        var choose = level.getChildAt(2);
        var target = choose.getChildAt(choose.numChildren - 1);
        // Home.instace.addChild(new NewHands(target.x, target.y, target.width/3, target.height, "点击选择难度", UI.WINSIZE_W/2, UI.WINSIZE_H/2, this.newHandStart, this, 'right'));
        // this.addChild(new Finger(target.x+target.width/6, target.y+target.height/2))
        Home.instace.addChild(new NewHandss(target, "level", target.parent.x + target.x + target.width / 2, target.parent.y + target.y + target.height / 2, this.newHandStart, this));
    };
    FightReady.prototype.newHandStart = function () {
        var _this = this;
        var level = this.getChildAt(3);
        var target = level.getChildAt(1);
        // Home.instace.addChild(new NewHands(target.x - target.width/2, target.y - target.height/2, target.width, target.height, "点击开始游戏", target.x, UI.WINSIZE_H/2));
        // this.addChild(new Finger(target.x, target.y))
        Home.instace.addChild(new NewHandss(target, "start", target.x, target.y, function () { return SceneManager.getInstance().ChangeScene(new LoadResScene(_this.playInfo)); }, this));
    };
    FightReady.prototype.createProgress = function (rate) {
        var progress = new egret.DisplayObjectContainer();
        var bg = UI.addPic(progress, "Adventure_loading_blue_png", 0, 0, true);
        bg.x = bg.width / 2;
        bg.y = bg.height / 2;
        var bar = UI.addPic(progress, "Adventure_loading_red_png", bg.x, bg.y, true);
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000);
        mask.graphics.drawRect(0, 0, bg.width, bg.height);
        mask.graphics.endFill();
        mask.anchorOffsetX = mask.width;
        mask.x = bg.x + bg.width / 2;
        mask.y = bg.y - bg.height / 2;
        bar.mask = mask;
        progress.addChild(mask);
        mask.scaleX = rate / 100;
        return progress;
    };
    FightReady.prototype.getNumber = function (num, node) {
        if (node === void 0) { node = null; }
        var target = new egret.DisplayObjectContainer();
        var i = 0;
        var arr = [];
        while (num > 0 || i == 0) {
            var mod = num % 10;
            arr.unshift(mod);
            num = (num - mod) / 10;
            i++;
        }
        arr.map(function (data, index) {
            var mod = UI.addPic(target, "loading" + data + "_png", target.width, 0);
        });
        if (node)
            node.addChild(target);
        return target;
    };
    return FightReady;
}(Scene));
__reflect(FightReady.prototype, "FightReady");
//# sourceMappingURL=FightReady.js.map