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
var FightLoading = (function (_super) {
    __extends(FightLoading, _super);
    function FightLoading(parent) {
        var _this = _super.call(this) || this;
        _this.heroMap = [];
        _this.heroList = [];
        _this.isLook = false;
        _this.heroIndex = 0;
        _this.p1Success = false;
        _this.p2Success = false;
        _this.breathing = 30;
        _this.breathingStatus = true;
        _this.minBreathing = 30;
        _this.maxBreathing = 100;
        _this.speedBreathing = 4;
        _this.renderFrame = 0;
        _this._parent = parent;
        FightLoading.instace = _this;
        return _this;
    }
    FightLoading.prototype.onEnter = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);
        this.initProgress();
        this.inintHeroInfo();
    };
    FightLoading.prototype.onExit = function () {
        FightMainRender.instance.Remove(this, this.render);
        // FightLoading.instace = null;
    };
    FightLoading.prototype.initProgress = function () {
        this.progress = new egret.DisplayObjectContainer();
        this.addChild(this.progress);
        var progressBg = UI.addPic(this.progress, "progressBg_png", 0, 0, true);
        // progressBg.x = progressBg.width/2;
        progressBg.y = progressBg.height / 2;
        var progress = UI.addPic(this.progress, "progress_png", progressBg.x, progressBg.y, true);
        this.text = UI.addPic(this.progress, "loadingWait_png", progress.x, progressBg.y + progressBg.height / 2, true);
        this.text.y += this.text.height;
        this.initNumber(this.text.x + this.text.width / 2, this.text.y);
        this.progressMask = new egret.Shape();
        this.progressMask.graphics.beginFill(0x000000);
        this.progressMask.graphics.drawRect(0, 0, progress.width, progress.height);
        this.progressMask.graphics.endFill();
        this.progressMask.x = progress.x - progress.width / 2;
        this.progressMask.y = progress.y;
        this.progressMask.anchorOffsetY = progress.height / 2;
        this.progress.addChild(this.progressMask);
        progress.mask = this.progressMask;
        // LoadResScene.Instance.textField.y = progressBg.y - progressBg.height/2 - LoadResScene.Instance.textField.height/2;
    };
    FightLoading.prototype.initNumber = function (x, y) {
        this.progressNumber = null;
        this.progressNumber = new egret.DisplayObjectContainer();
        var num = UI.addPic(this.progressNumber, "loading0_png", 0, 0, false, 0);
        var num1 = UI.addPic(this.progressNumber, "loading0_png", num.width, 0, false, 0);
        var num2 = UI.addPic(this.progressNumber, "loading0_png", num.width * 2, 0);
        var fen = UI.addText(this.progressNumber, "/", num2.width * 3, 0, false, num.width, 0xffffff);
        var num3 = UI.addPic(this.progressNumber, "loading1_png", num.width * 3 + fen.width, 0);
        UI.addPic(this.progressNumber, "loading0_png", num.width * 3 + fen.width + num3.width, 0);
        UI.addPic(this.progressNumber, "loading0_png", num.width * 4 + fen.width + num3.width, 0);
        this.progressNumber.x = x;
        this.progressNumber.y = y - this.progressNumber.height / 2;
        this.progress.addChild(this.progressNumber);
    };
    FightLoading.prototype.changeNumer = function (num) {
        if (num >= 100) {
            this.progressNumber.getChildAt(0).$setTexture(RES.getRes("loading1_png"));
            this.progressNumber.getChildAt(0).$setScaleX(1);
            this.progressNumber.getChildAt(0).$setScaleY(1);
            this.progressNumber.getChildAt(1).$setTexture(RES.getRes("loading0_png"));
            this.progressNumber.getChildAt(2).$setTexture(RES.getRes("loading0_png"));
        }
        else if (num >= 10) {
            this.progressNumber.getChildAt(1).$setTexture(RES.getRes("loading" + Math.floor(num / 10) + "_png"));
            this.progressNumber.getChildAt(1).$setScaleX(1);
            this.progressNumber.getChildAt(1).$setScaleY(1);
            this.progressNumber.getChildAt(2).$setTexture(RES.getRes("loading" + num % 10 + "_png"));
        }
        else {
            this.progressNumber.getChildAt(2).$setTexture(RES.getRes("loading" + num + "_png"));
        }
    };
    FightLoading.prototype.inintHeroInfo = function () {
        var _this = this;
        this.heroMap = ["Ryu", "Chunli", "K", "Terry"];
        var bg = UI.addPic(this, "Loading_box" + this.heroMap[0] + "_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.alpha = 0;
        this.heroMap.map(function (data, index) {
            var hero = UI.addBtn(_this, "loadingHero" + data + "_png", UI.WINSIZE_W / 2, 0, true, function () { return _this.look(index, bg); });
            _this.heroList.push(hero);
            hero.alpha = 0;
            egret.Tween.get(hero).to({ alpha: 1 }, 300 + index * 100, egret.Ease.sineIn);
            hero.y += hero.height / 2;
            hero.x += (index - (_this.heroMap.length - 1) / 2) * (hero.width / 4 * 3);
            if (index == 0) {
                bg.y = hero.y + hero.height / 2 - bg.height / 2;
                bg.x += hero.width / 4;
            }
        });
        this.progress.x = UI.WINSIZE_W / 2;
        this.progress.y = bg.y + bg.height / 2 + 20;
        this.left = UI.addBtn(this, "loadingArrow_png", UI.WINSIZE_W / 2 - this.heroList[0].width * 2, this.heroList[0].y, true, function () {
            if (!_this.isLook)
                _this.look(0, bg);
            else
                _this.look(-1);
        });
        this.right = UI.addBtn(this, "loadingArrow_png", UI.WINSIZE_W / 2 + this.heroList[3].width * 2.25, this.heroList[3].y, true, function () {
            if (!_this.isLook)
                _this.look(0, bg);
            else
                _this.look(1);
        });
        this.right.skewY = 180;
        FightMainRender.instance.Add(this, this.render);
    };
    FightLoading.prototype.initHeroScroll = function (x, y, wid, high, init) {
        var _this = this;
        if (init === void 0) { init = 0; }
        var heroContent = new egret.DisplayObjectContainer();
        this.heroMap.map(function (data, index) {
            var hero = new egret.DisplayObjectContainer();
            heroContent.addChild(hero);
            var bg = UI.addPic(hero, "Loading_box" + data + "_png", 0, 0, true);
            var h = UI.addPic(hero, "loadingHero" + data + "_png", 0, 0, true);
            h.x = -h.width / 8 * 11;
            h.y = h.height;
            h.anchorOffsetY = h.height;
            bg.y = h.y;
            bg.anchorOffsetY = bg.height;
            bg.x += h.width / 4;
            hero.x = (200 + bg.width) * (index + 1);
            if (index == _this.heroMap.length - 1)
                heroContent.width += (150 + bg.width);
        });
        this.heroScroll = new ScrollView(heroContent, wid, high, x, y, 1, 1, false, false, this, function () { }, false, false);
        this.addChild(this.heroScroll);
        this.heroScroll.changePosition(init, 0);
    };
    FightLoading.prototype.look = function (hero, target) {
        var _this = this;
        if (target === void 0) { target = null; }
        if (this.isLook) {
            this.heroIndex += hero;
            if (this.heroIndex < 0)
                this.heroIndex = 0;
            else if (this.heroIndex >= this.heroMap.length)
                this.heroIndex = this.heroMap.length - 1;
            this.heroScroll.changeChild(hero);
        }
        else {
            this.isLook = true;
            this.heroIndex = 0;
            this.heroList.map(function (data, index) {
                if (index == hero)
                    egret.Tween.get(data).to({ x: UI.WINSIZE_W / 2 - data.width / 8 * 11 }, 400, egret.Ease.sineIn)
                        .call(_this.initHeroScroll, _this, [UI.WINSIZE_W / 2 - data.width * 2, 0, data.width * 2 * 2, data.height, index]);
                else
                    egret.Tween.get(data).to({ y: -data.height / 2 }, 400, egret.Ease.sineIn);
            });
            target.$setTexture(RES.getRes("Loading_box" + this.heroMap[hero] + "_png"));
            egret.Tween.get(target).to({ alpha: 1 }, 400, egret.Ease.sineIn)
                .call(function () {
                _this.heroList.map(function (data) {
                    _this.removeChild(data);
                });
                _this.removeChild(target);
            }, this);
        }
    };
    FightLoading.prototype.onProgress = function (current, total) {
        var progress = 0;
        var parent = this._parent;
        progress = Math.floor((current / total + parent._loadResNum) / parent._allResNum * 100);
        progress = Math.min(progress, 100);
        this.changeNumer(progress);
        if (progress == 100) {
            // this.text.$setText("资源加载完毕...准备进入游戏");
            // this.text.anchorOffsetX = this.text.width/2;
        }
        this.progressMask.scaleX = progress / 100;
    };
    FightLoading.prototype.render = function () {
        if (this.p1Success && LoadResScene.Instance.playInfo.type != Main.PVP_online) {
            SceneManager.getInstance().ChangeScene(new SplashScene(LoadResScene.Instance.playInfo));
        }
        this.renderFrame++;
        if (this.renderFrame == 60) {
            this.look(0, this.getChildAt(2));
        }
        if (this.breathing > this.maxBreathing) {
            this.breathing = this.maxBreathing;
            this.breathingStatus = false;
        }
        else if (this.breathing < this.minBreathing) {
            this.breathing = this.minBreathing;
            this.breathingStatus = true;
        }
        if (this.breathing % this.speedBreathing != 0) {
            this.breathing += this.breathingStatus ? 1 : -1;
            return;
        }
        this.left.alpha = this.breathing / this.maxBreathing;
        this.right.alpha = this.breathing / this.maxBreathing;
        this.breathing += this.breathingStatus ? 1 : -1;
    };
    return FightLoading;
}(Scene));
__reflect(FightLoading.prototype, "FightLoading");
//# sourceMappingURL=FightLoading.js.map