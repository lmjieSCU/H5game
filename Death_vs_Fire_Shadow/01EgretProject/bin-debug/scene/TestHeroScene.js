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
var TestHeroScene = (function (_super) {
    __extends(TestHeroScene, _super);
    //
    function TestHeroScene() {
        return _super.call(this) || this;
    }
    TestHeroScene.prototype.onEnter = function () {
        this.testAtmAnchor();
        UI.addPic(this, "red_dot_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
    };
    TestHeroScene.prototype.frame1 = function () {
        console.log("hello frame1");
        var aa = this.hero;
    };
    TestHeroScene.prototype.frame2 = function () {
        console.log("hello frame2");
        var aa = this.hero;
    };
    TestHeroScene.prototype.frame3 = function () {
        console.log("hello frame3");
    };
    TestHeroScene.prototype.getMCName = function () {
        if (TestHeroScene.frame_go == 2)
            return "mc";
        else
            return "mc" + TestHeroScene.frame_go;
    };
    TestHeroScene.prototype.testAtmAnchor = function () {
        var name = TestHeroScene.test_hero_name;
        this.hero = new zmovie.ZMovieClip(UI.getHeroMovieJson(name), RES.getRes(name + "_json"), "root");
        this.hero.addUIFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3]);
        this.hero.gotoAndStop(TestHeroScene.frame_go);
        this.hero.scaleX = 2.0;
        this.hero.scaleY = 2.0;
        this.hero.x = UI.WINSIZE_W / 2;
        this.hero.y = UI.WINSIZE_H / 2;
        this.addChild(this.hero);
        this.tmp = this.hero.getChildByName(this.getMCName());
        if (false) {
            this.tmp.gotoAndStop(257);
            var tt = this.tmp.getChildMovie("kj22atm");
            var scaleX = tt.scaleX;
            var scaleY = tt.scaleY;
            var x1 = scaleX * 65.95;
            var y1 = scaleY * 40.5;
            console.log(x1);
            console.log(y1);
            return;
        }
        //
        var aa = this.tmp.getCurrLabelObj();
        this.tmp.checkAtmAnchor = true;
        this.tmp.addUIFrameScript(this, [0, this.testAtm]);
        //	this.tmp.play();
        for (var i = 0; i <= this.tmp.totalFrame - 1; i++) {
            this.tmp.nextFrame();
        }
        this.stage.frameRate = 200;
    };
    TestHeroScene.prototype.testAtm = function () {
        if (this.tmp.currFrame == this.tmp.totalFrame - 1) {
            console.log("run over");
        }
        var _loc_3 = 0;
        while (_loc_3 < this.tmp.numChildren) {
            var _loc_1 = this.tmp.getChildAt(_loc_3);
            if (_loc_1 && _loc_1.name.indexOf("atm") != -1) {
                var abc = _loc_1.matrix;
                var a1 = _loc_1.$getContentBounds();
                var a2 = _loc_1.$getOriginalBounds();
                var a3 = _loc_1.getBounds();
                var a4 = _loc_1.$anchorOffsetX;
                var a5 = _loc_1.$anchorOffsetX;
                var i = 1;
                if (abc.b != 0) {
                    console.log("" + (this.tmp.currFrame + 1) + "----" + _loc_1.name + " error!" + abc.b);
                    var aaa = _loc_1.$displayList;
                    var a1_1 = _loc_1.$getContentBounds();
                    var a2_1 = _loc_1.$getOriginalBounds();
                    var a3_1 = _loc_1.getBounds();
                    var a4_1 = _loc_1.$anchorOffsetX;
                    var a5_1 = _loc_1.$anchorOffsetX;
                    var ii = 1;
                }
            }
            _loc_3++;
        }
    };
    TestHeroScene.prototype.testZomvie = function () {
        var name = TestHeroScene.test_hero_name;
        this.hero = new zmovie.ZMovieClip(UI.getHeroMovieJson(name), RES.getRes(name + "_json"), "root");
        this.hero.addUIFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3]);
        this.hero.gotoAndStop(TestHeroScene.frame_go);
        this.hero.scaleX = 2.0;
        this.hero.scaleY = 2.0;
        this.hero.x = UI.WINSIZE_W / 2;
        this.hero.y = UI.WINSIZE_H / 2;
        this.addChild(this.hero);
        var t = this.hero.getChildByName(this.getMCName());
        //t.gotoAndStop(930);
        var i = 1;
        t.gotoAndPlay("招3"); //超必杀 空中必杀 防御
        //t.gotoAndStop(786);
        // let fun = this.fun.bind(this,t)
        // t.addEventListener(egret.Event.ENTER_FRAME,fun,this);
    };
    TestHeroScene.prototype.testSprite5 = function () {
        var name = TestHeroScene.test_hero_name;
        var map = new zmovie.ZMovieClip(UI.getHeroMovieJson(name), RES.getRes(name + "_json"), "root");
        map.gotoAndStop(TestHeroScene.frame_go);
        var t = map.getChildByName(this.getMCName());
        t.gotoAndStop(350);
        //
        var aa = t.getChildByName("tzatm");
        var x1 = aa.scaleX;
        var y1 = aa.scaleY;
        var xx = x1 * 65.95;
        var yy = y1 * 40.5;
        console.log("xx = " + xx + " yy=" + yy);
    };
    TestHeroScene.prototype.testbdmn = function () {
        var name = TestHeroScene.test_hero_name;
        var map = new zmovie.ZMovieClip(UI.getHeroMovieJson(name), RES.getRes(name + "_json"), "root");
        map.gotoAndStop(TestHeroScene.frame_go);
        var t = map.getChildByName(this.getMCName());
        t.gotoAndStop(1);
        //
        var aa = t.getChildByName("bdmn");
        var x1 = aa.scaleX;
        var y1 = aa.scaleY;
        var xx = x1 * 65.95;
        var yy = y1 * 40.5;
        console.log("testbdmn xx = " + xx + " yy=" + yy);
    };
    TestHeroScene.prototype.onExit = function () {
    };
    TestHeroScene.test_hero_name = "hero_kenpachi";
    TestHeroScene.frame_go = 2;
    return TestHeroScene;
}(Scene));
__reflect(TestHeroScene.prototype, "TestHeroScene");
//# sourceMappingURL=TestHeroScene.js.map