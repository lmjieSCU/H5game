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
/**选择关卡界面 */
var ChooseScene = (function (_super) {
    __extends(ChooseScene, _super);
    function ChooseScene() {
        var _this = _super.call(this) || this;
        _this.renderframe = 0;
        _this.nowPage = 0;
        _this.levelStatuss = new Array();
        _this.levelbgs = new Array();
        _this.levelstars = new Array();
        return _this;
    }
    ChooseScene.prototype.onEnter = function () {
        SoundCtrl.I.playbgSound("bgsound");
        this.bg = UI.addPic(this, "bg_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.1 / this.bg.width, UI.WINSIZE_H * 1.1 / this.bg.height);
        //
        this.toInitBtn = UI.addPic(this, "exit_png", true);
        UI.setXandY(this.toInitBtn, UI.WINSIZE_W / 6, UI.WINSIZE_H / 1.1);
        UI.setscalXandY(this.toInitBtn, 150 / this.toInitBtn.width, 150 / this.toInitBtn.height);
        UI.addClickAction(this, this.toInitBtn, this.ToInitScene);
        //
        this.pageLeftBtn = UI.addPic(this, "changebtn_png", true);
        UI.setXandY(this.pageLeftBtn, UI.WINSIZE_W / 15, UI.WINSIZE_H * 3 / 7);
        UI.setscalXandY(this.pageLeftBtn, 50 / this.pageLeftBtn.width, 100 / this.pageLeftBtn.height);
        UI.addClickAction(this, this.pageLeftBtn, this.leftMoveAnimate);
        this.pagerightBtn = UI.addPic(this, "changebtn_png", true);
        UI.setXandY(this.pagerightBtn, UI.WINSIZE_W * 14 / 15, UI.WINSIZE_H * 3 / 7);
        UI.setscalXandY(this.pagerightBtn, -50 / this.pagerightBtn.width, 100 / this.pagerightBtn.height);
        UI.addClickAction(this, this.pagerightBtn, this.rightMoveAnimate);
        //
        this.Levelgrid();
    };
    /**添加关卡按钮 */
    ChooseScene.prototype.Levelgrid = function () {
        var levelindex = 0;
        for (var page = 0; page < 4; page++) {
            for (var i = 1; i <= 5; i++) {
                for (var j = 1; j <= 5; j++) {
                    this.levelbgs[levelindex] = UI.addPic(this, "levelbtnbg_png", true);
                    UI.setXandY(this.levelbgs[levelindex], UI.WINSIZE_W * (j + 6 * page) / 6, UI.WINSIZE_H * i / 7);
                    if (levelindex <= LocalDataCtrl.I.highLevel) {
                        var s = UI.addText(this, (levelindex + 1), true);
                        s.textColor = 0xf5deb3;
                        UI.setscalXandY(s, 1.2, 1.2);
                        this.levelStatuss[levelindex] = s;
                        var fun = this.levelGame.bind(this, levelindex);
                        UI.addClickAction(this, this.levelbgs[levelindex], fun);
                        if (levelindex != LocalDataCtrl.I.highLevel) {
                            this.levelstars[levelindex] = new egret.Bitmap;
                            switch (LocalDataCtrl.I.highStars[levelindex]) {
                                case 1:
                                    this.levelstars[levelindex].texture = RES.getRes("onestar_png");
                                    break;
                                case 2:
                                    this.levelstars[levelindex].texture = RES.getRes("twostar_png");
                                    break;
                                case 3:
                                    this.levelstars[levelindex].texture = RES.getRes("star_png");
                                    break;
                            }
                            this.levelstars[levelindex].anchorOffsetX = this.levelstars[levelindex].width / 2;
                            this.levelstars[levelindex].anchorOffsetY = this.levelstars[levelindex].height / 2;
                            this.addChild(this.levelstars[levelindex]);
                            UI.setXandY(this.levelstars[levelindex], this.levelbgs[levelindex].x, this.levelbgs[levelindex].y + 25);
                        }
                    }
                    else {
                        this.levelStatuss[levelindex] = UI.addPic(this, "locked_png", true);
                    }
                    UI.setXandY(this.levelStatuss[levelindex], this.levelbgs[levelindex].x, this.levelbgs[levelindex].y);
                    levelindex++;
                }
            }
        }
    };
    /**进入游戏 */
    ChooseScene.prototype.levelGame = function (level) {
        GameData.I.level = level;
        GameData.I.lv_stage = 0;
        SceneManager.I.ChangeScene(new GameScene);
        return;
    };
    /**返回初始界面 */
    ChooseScene.prototype.ToInitScene = function () {
        SceneManager.I.ChangeScene(new InitScene);
    };
    /**关卡移动动画 */
    ChooseScene.prototype.moveAnimation = function (type) {
        var direction = type == "left" ? 1 : -1;
        var speed = direction * UI.WINSIZE_W / 20;
        this.renderfun = this.render.bind(this, speed);
        this.$setTouchChildren(false);
        this.stage.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    };
    ChooseScene.prototype.render = function (speed) {
        this.renderframe++;
        for (var i = 0; i < 100; i++) {
            this.levelbgs[i].x = this.levelbgs[i].x + speed;
            this.levelStatuss[i].x = this.levelStatuss[i].x + speed;
            if (i >= LocalDataCtrl.I.highLevel) {
                continue;
            }
            this.levelstars[i].x = this.levelstars[i].x + speed;
        }
        if (this.renderframe >= 20) {
            this.renderframe = 0;
            this.$setTouchChildren(true);
            this.stage.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        }
        return;
    };
    /**向左移动 */
    ChooseScene.prototype.leftMoveAnimate = function () {
        if (this.nowPage <= 0) {
            return;
        }
        this.nowPage--;
        this.moveAnimation("left");
        return;
    };
    /**向右移动 */
    ChooseScene.prototype.rightMoveAnimate = function () {
        if (this.nowPage >= 3) {
            return;
        }
        this.nowPage++;
        this.moveAnimation("right");
        return;
    };
    ChooseScene.prototype.onExit = function () {
    };
    return ChooseScene;
}(Scene));
__reflect(ChooseScene.prototype, "ChooseScene");
//# sourceMappingURL=ChooseScene.js.map