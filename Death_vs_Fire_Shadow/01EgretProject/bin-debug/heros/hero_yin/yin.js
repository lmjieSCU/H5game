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
/*
*yin主骨骼动画对应的帧事件,选择对应形态
*/
var hero_yin;
(function (hero_yin) {
    var yin = (function (_super) {
        __extends(yin, _super);
        function yin(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_yin";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        yin.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        yin.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        yin.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("银1", RES.getRes("yin_bsface1_png"));
            this._EffectCtrl.setBishaFace("银2", RES.getRes("yin_bsface2_png"));
        };
        yin.prototype.frame1 = function () {
            return;
        };
        yin.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 4, hitx: 4, hity: 8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 6, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 50, hitType: 1, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 50, hitType: 1, hitx: 5, hity: -5, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k5", { power: 80, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 6, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 40, hitType: 1, hitx: 10, hity: -6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 30, hitType: 4, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 30, hitType: 4, hitx: -8, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 130, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 40, hitType: 4, hitx: 2, hity: -2, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh31", { power: 40, hitType: 4, hitx: -8, hity: 8, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 30, hitType: 1, hitx: 0, hity: -1, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 50, hitType: 1, hitx: 8, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 20, hitType: 4, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 300, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 30, hitType: 1, hitx: 0, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh23", { power: 30, hitType: 1, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("银1", bsface1);
            //this._FighterCtrler.defineBishaFace("银2", bsface2);
            this._FighterCtrler.defineHurtSound("snd_hurt1, snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt2");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_yin.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        yin.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return yin;
    }(zmovie.ZMovieClip));
    hero_yin.yin = yin;
    __reflect(yin.prototype, "hero_yin.yin");
})(hero_yin || (hero_yin = {}));
//# sourceMappingURL=yin.js.map