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
var HomeLayer = (function (_super) {
    __extends(HomeLayer, _super);
    function HomeLayer() {
        return _super.call(this) || this;
    }
    HomeLayer.prototype.onEnter = function () {
        var _this = this;
        TaskData.startTask();
        RecruitData.initRecruit();
        Home.instace._header.chageHead(true);
        HeroData.initHero();
        this.heroListLeft = new HeroLsitLeft(function (index) {
            _this.heroList.heroScroll.changePosition(index);
        }, this);
        this.addChild(this.heroListLeft);
        this.addChild(new ChooseFight((Main.UItype == Main.UIT2 ? UI.WINSIZE_W * 0.6 : UI.WINSIZE_W / 2), UI.WINSIZE_H / 8));
        this.heroList = new HeroList(this, UI.WINSIZE_W / 8 + 20, UI.WINSIZE_H * 0.2, 200, UI.WINSIZE_H * 0.5, function (nowChild) {
            _this.heroListLeft.scrollView.changePosition(nowChild);
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);
        // Main.UItype == Main.UIT2 || this.addChild(new HomeButton(this));
        this.addChild(new HomeButton(this));
    };
    HomeLayer.prototype.onExit = function () { };
    return HomeLayer;
}(Scene));
__reflect(HomeLayer.prototype, "HomeLayer");
//# sourceMappingURL=HomeLayer.js.map