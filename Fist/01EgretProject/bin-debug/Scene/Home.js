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
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.num = 5;
        _this.newHand = false;
        _this.nowHero = 0;
        Home.instace = _this;
        return _this;
    }
    Home.prototype.onEnter = function () {
        // this.anmei();
        RoomConfig.createUserID();
        var bg = UI.addPic(this, "" + (Main.UItype == Main.UIT2 ? 'demoBg_jpg' : 'homeBg_png'), UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = UI.WINSIZE_W / bg.width;
        bg.scaleY = UI.WINSIZE_H / bg.height;
        this._header = new Header();
        this.addChild(this._header);
        // let money = UI.addBtn(this, "button_delet_png", UI.WINSIZE_W/2, 0, false, () => egret.localStorage.clear());
        var home = new HomeLayer();
        SceneManager.getInstance().AddLayer(home);
        Sound.getInstance().bgPlay();
        if (!NewHand.getNewHandInfo().isComplete) {
            if (SignInData.isNewHandSignIn()) {
                Home.instace.changeLayer(home, new NoviceLayer());
            }
        }
        else {
            // this.newHand = true;
            // SceneManager.getInstance().AddLayer(new WelcomeLayer());
            // return
        }
    };
    Home.prototype.anmei = function () {
        var _this = this;
        var square = new egret.Shape();
        square.graphics.beginFill(0xff0000, 0);
        square.graphics.drawRect(UI.WINSIZE_W - 100, 0, 100, 100);
        square.graphics.endFill();
        square.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.num--;
            if (_this.num < 0) {
                egret.localStorage.clear();
                console.log("清除所有缓存");
            }
        }, square);
        square.touchEnabled = true;
        this.stage.addChild(square);
    };
    Home.prototype.onExit = function () {
        Sound.getInstance().bgColse();
    };
    Home.prototype.changeLayer = function (s, s2) {
        this._header.chageHead(false);
        SceneManager.getInstance().RemoveLayer(s);
        SceneManager.getInstance().AddLayer(s2);
    };
    Home.prototype.getTimeSecond = function (time1, time2) {
        return Math.floor((time1 - time2) / 1000);
    };
    return Home;
}(Scene));
__reflect(Home.prototype, "Home");
//# sourceMappingURL=Home.js.map