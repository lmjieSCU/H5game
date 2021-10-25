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
/**击败对手使用*/
var Winner = (function (_super) {
    __extends(Winner, _super);
    function Winner(winner, winTimes) {
        if (winTimes === void 0) { winTimes = 1; }
        var _this = _super.call(this) || this;
        _this.RenderAnimate = 0;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.winner = winner;
        _this.winner.winTimes += winTimes;
        return _this;
    }
    Winner.prototype.onEnter = function () {
        this.initlize();
        FightMainRender.getInstance().Add(this, this.render);
        return;
    };
    Winner.prototype.initlize = function () {
        this.player = _level0.deepCompare(_level0.P1_role, this.winner) ? SplashScene.instance._life.p1_life : SplashScene.instance._life.p2_life;
        // this.win_img = UI.addPic(this, "Fight_word_I_png", GameConfig.FightWidth / 2, -50, true);
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
    Winner.prototype.render = function () {
        this.RenderAnimate += 1;
        if (this.RenderAnimate == 15) {
            var victory = (_level0.deepCompare(_level0.P1_role, this.winner) && SplashScene.instance.player == 1) || (_level0.deepCompare(_level0.P2_role, this.winner) && SplashScene.instance.player == 2);
            // let x = this.player.x + this.player.width / 2 - 25 - this.winner.winTimes * 25;
            // let y = this.player.y + this.player.height + 10;
            // egret.Tween.get(this.win_img).to({ scale: 0, x: x, y: y }, 300, egret.Ease.sineIn);
            var result = UI.addPic(this, "Fight_pic_" + (victory ? 'victory' : 'fail') + "_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, 3);
            egret.Tween.get(result).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.sineIn);
        }
        else if (this.RenderAnimate == 20) {
            var v = UI.addPic(this.player, "Word_pic_v_png", this.player.width - this.winner.winTimes * 20, this.player.height);
            v.anchorOffsetX = v.width / 2;
            v.x += v.width / 2;
            if (_level0.deepCompare(this.winner, _level0.P2_role))
                v.$setSkewY(180);
        }
        else if (this.RenderAnimate == 30) {
            this.CloseBlack_cloth();
        }
        else if (this.RenderAnimate == 50) {
            this.RoundEnd();
        }
        else if (this.RenderAnimate == 55) {
            this.OpenBlack();
        }
        else if (this.RenderAnimate >= 75) {
            FightMainRender.getInstance().Remove(this, this.render);
            this.RenderAnimate = 0;
            this.AddRoundBegin_Animate();
        }
    };
    Winner.prototype.CloseBlack_cloth = function () {
        this.removeChildAt(this.numChildren - 1);
        egret.Tween.get(this.black1).to({ y: 0 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
    };
    Winner.prototype.RoundEnd = function () {
        if (this.winner.winTimes >= 2)
            return;
        SplashScene.instance.nextRound();
        FightMainRender.getInstance().Add(this, this.render);
        SplashScene.instance.stage.setChildIndex(this, -1);
    };
    Winner.prototype.OpenBlack = function () {
        if (this.winner.winTimes >= 2 || NoviceGuidance.I().AI_stop) {
            SplashScene.instance.clear();
            var victory = SplashScene.instance.player == 1 ? _level0.deepCompare(_level0.P1_role, this.winner) : _level0.deepCompare(_level0.P2_role, this.winner);
            if (NoviceGuidance.I().AI_stop)
                victory = true;
            SceneManager.getInstance().ChangeScene(new FightOver(victory, SplashScene.instance.type, SplashScene.instance.player == 1 ? SplashScene.instance.playInfo.p1 : SplashScene.instance.playInfo.p2));
            this.stage.removeChild(this);
            FightMainRender.getInstance().destroy();
            return;
        }
        egret.Tween.get(this.black1).to({ y: -UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H }, 500, egret.Ease.sineIn);
    };
    Winner.prototype.AddRoundBegin_Animate = function () {
        // if (this.winner.winTimes < 2) {
        //     SplashScene.instance.stage.addChild(new Round(_level0.P1_role.winTimes + _level0.P2_role.winTimes + 1))
        // }
        this.stage.removeChild(this);
    };
    return Winner;
}(egret.DisplayObjectContainer));
__reflect(Winner.prototype, "Winner", ["egret.DisplayObject"]);
//# sourceMappingURL=Winner.js.map