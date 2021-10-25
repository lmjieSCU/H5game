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
var Round = (function (_super) {
    __extends(Round, _super);
    function Round(round) {
        var _this = _super.call(this) || this;
        _this.lazy = false;
        _this.roundResouce = [
            "Fight_word_R_png", "Fight_word_O_png", "Fight_word_U_png", "Fight_word_N_png", "Fight_word_D_png"
        ];
        _this.fightResouce = [
            "Fight_word_F_png", "Fight_word_I_png", "Fight_word_G_png", "Fight_word_H_png", "Fight_word_T_png"
        ];
        _this.rounds = [];
        _this.fight = [];
        _this.fightShadow = [];
        _this.RenderAnimate = 0;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.round = round;
        Round.instance = _this;
        if (round >= 2)
            _this.lazy = true;
        return _this;
    }
    Round.prototype.onEnter = function () {
        this.init();
        FightMainRender.getInstance().Add(this, this.render);
        this.render();
    };
    Round.prototype.init = function () {
        var _this = this;
        this.roundResouce.map(function (data, index) {
            var bit = UI.addPic(_this, data, GameConfig.FightWidth / 2 - (2.5 - index) * 120, UI.WINSIZE_H / 2, true, 0);
            _this.rounds.push(bit);
        });
        var rou = UI.addPic(this, "Fight_word_" + this.round + "_png", GameConfig.FightWidth / 2 + 300, UI.WINSIZE_H / 2, true, 0);
        this.rounds.push(rou);
        this.fightResouce.map(function (data, index) {
            var f = UI.addPic(_this, data, GameConfig.FightWidth / 2 - (2 - index) * 120, 0, true);
            var f2 = UI.addPic(_this, data, GameConfig.FightWidth / 2 - (2 - index) * 120, UI.WINSIZE_H / 2 - 30, true);
            var shadow = new egret.Shape();
            shadow.graphics.beginFill(0xffffff);
            shadow.graphics.drawRect(0, 0, f2.width, f2.height);
            shadow.graphics.endFill();
            shadow.anchorOffsetX = shadow.width / 2;
            shadow.anchorOffsetY = shadow.height / 2;
            shadow.x = f2.x;
            shadow.y = f2.y;
            _this.addChild(shadow);
            shadow.mask = f2;
            _this.fightShadow.push(shadow);
            shadow.alpha = 0;
            f.y -= f.height / 2;
            _this.fight.push(f);
        });
    };
    Round.prototype.render = function () {
        this.RenderAnimate += 1;
        if (this.lazy && this.RenderAnimate < 15)
            return;
        else if (this.lazy) {
            this.lazy = false;
            this.RenderAnimate = 1;
        }
        if (this.RenderAnimate == 2) {
            _level0.P1_role.start();
            _level0.P2_role.start();
        }
        if (this.RenderAnimate == 4)
            Sound.getInstance().oneTimesPlay("round" + this.round);
        if (this.RenderAnimate % 6 == 0 && this.RenderAnimate <= 30) {
            this.drop(Math.floor(this.RenderAnimate / 6 - 1));
        }
        else if (this.RenderAnimate == 40) {
            this.drop(5);
        }
        else if (this.RenderAnimate % 3 == 0 && this.RenderAnimate <= 73 && this.RenderAnimate > 58) {
            this.drop(Math.floor((this.RenderAnimate - 58) / 3 - 1) + 7);
        }
        else if (this.RenderAnimate % 2 == 0 && this.RenderAnimate <= 85 && this.RenderAnimate > 73) {
            this.flash();
        }
        else if (this.RenderAnimate > 85) {
            this.roundStart();
        }
    };
    Round.prototype.flash = function () {
        this.fightShadow.map(function (data) {
            data.alpha == 0 ? data.$setAlpha(1) : data.$setAlpha(0);
        });
    };
    Round.prototype.drop = function (item) {
        var _this = this;
        if (item <= 5) {
            this.rounds[item].scaleX = 5;
            this.rounds[item].scaleY = 5;
            egret.Tween.get(this.rounds[item]).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.sineIn);
        }
        else if (item <= 10) {
            if (item == 6) {
                this.rounds.map(function (data) {
                    _this.removeChild(data);
                });
                Sound.getInstance().oneTimesPlay("fight");
            }
            egret.Tween.get(this.fight[item - 6]).to({ y: UI.WINSIZE_H / 2 - 30 }, 100, egret.Ease.sineIn);
        }
    };
    Round.prototype.roundStart = function () {
        var count = Number(egret.localStorage.getItem("isComplete")) || 0;
        if (count == 0) {
            NoviceGuidance.I().step1();
        }
        SplashScene.instance._life.timeStart = true;
        SplashScene.instance.stage.removeChild(this);
        Round.instance = null;
        _level0.P1_role.start_control();
        _level0.P2_role.start_control();
        FightMainRender.getInstance().Remove(this, this.render);
    };
    return Round;
}(egret.DisplayObjectContainer));
__reflect(Round.prototype, "Round", ["egret.DisplayObject"]);
//# sourceMappingURL=Round.js.map