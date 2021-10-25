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
/**超时时使用,暂未用到*/
var RoundOver = (function (_super) {
    __extends(RoundOver, _super);
    function RoundOver() {
        var _this = _super.call(this) || this;
        _this.RenderAnimate = 0;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        return _this;
    }
    RoundOver.prototype.onEnter = function () {
        this.initlize();
        // this.gameOver = UI.addPic(this, "fightui_55_png", GameConfig.FightWidth / 2, -30, true);
        // this.drawGame = UI.addPic(this, "fightui_57_png", GameConfig.FightWidth / 2, -30, true);
        // egret.Tween.get(this.gameOver).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
        FightMainRender.getInstance().Add(this, this.render);
        return;
    };
    RoundOver.prototype.initlize = function () {
        this.black1 = new egret.Shape();
        this.black2 = new egret.Shape();
        this.black1.graphics.beginFill(0x000000);
        this.black1.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
        this.black1.graphics.endFill();
        this.black1.y = -UI.WINSIZE_H / 2;
        this.addChild(this.black1);
        //上下黑色幕布
        this.black2.graphics.beginFill(0x000000);
        this.black2.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
        this.black2.graphics.endFill();
        this.black2.y = UI.WINSIZE_H;
        this.addChild(this.black2);
    };
    RoundOver.prototype.render = function () {
        this.RenderAnimate += 1;
        if (this.RenderAnimate == 20) {
            // this.removeChild(this.gameOver);
            // egret.Tween.get(this.drawGame).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
        }
        if (this.RenderAnimate == 35) {
            this.CloseBlack_cloth();
        }
        else if (this.RenderAnimate == 50) {
            this.RoundEnd();
        }
        else if (this.RenderAnimate >= 65) {
            this.RenderAnimate = 0;
            this.AddRoundBegin_Animate();
            FightMainRender.getInstance().Remove(this, this.render);
        }
    };
    RoundOver.prototype.CloseBlack_cloth = function () {
        egret.Tween.get(this.black1).to({ y: 0 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
    };
    RoundOver.prototype.RoundEnd = function () {
        egret.Tween.get(this.black1).to({ y: -UI.WINSIZE_H / 2 }, 300, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H }, 300, egret.Ease.sineIn);
    };
    RoundOver.prototype.AddRoundBegin_Animate = function () {
        SplashScene.instance.nextRound();
        // SplashScene.instance.stage.addChild(new Round(_level0.P1_role.winTimes + _level0.P2_role.winTimes + 1));
        SplashScene.instance.stage.removeChild(this);
    };
    return RoundOver;
}(egret.DisplayObjectContainer));
__reflect(RoundOver.prototype, "RoundOver", ["egret.DisplayObject"]);
//# sourceMappingURL=RoundOver.js.map