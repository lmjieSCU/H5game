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
*ichigo主骨骼动画对应的帧事件,选择对应形态
*/
var hero_ichigo;
(function (hero_ichigo) {
    var ichigo = (function (_super) {
        __extends(ichigo, _super);
        function ichigo(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_ichigo";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3, 3, _this.frame4]);
            return _this;
        }
        ichigo.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        ichigo.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        ichigo.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("一户1", RES.getRes("ichigo_bsface1_png"));
            this._EffectCtrl.setBishaFace("一户2", RES.getRes("ichigo_bsface2_png"));
            this._EffectCtrl.setBishaFace("一户万解", RES.getRes("ichigo_bsface3_png"));
            this._EffectCtrl.setBishaFace("一户万解1", RES.getRes("ichigo_bsface4_png"));
            this._EffectCtrl.setBishaFace("虚护1", RES.getRes("ichigo_bsface5_png"));
            this._EffectCtrl.setBishaFace("虚护2", RES.getRes("ichigo_bsface6_png"));
            this._EffectCtrl.setBishaFace("虚护3", RES.getRes("ichigo_bsface7_png"));
        };
        ichigo.prototype.frame1 = function () {
            return;
        };
        ichigo.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 2, hity: 6, hurtTime: 350, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 5, hitx: 5, hity: 5, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 40, hitType: 1, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 50, hitType: 1, hitx: 2, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 6, hitx: 7, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 80, hitType: 3, hitx: 8, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 20, hitType: 1, hitx: 1, hity: 0, hurtTime: 100, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 60, hitType: 4, hitx: 1, hity: -10, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 80, hitType: 5, hitx: 3, hity: 0, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 80, hitType: 6, hitx: 8, hity: -3, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 5, hitx: 5, hity: -5, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 80, hitType: 5, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 240, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 250, hitType: 5, hitx: 3, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 450, hitType: 5, hitx: 40, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            // this._FighterCtrler.defineHurtSound("snd_hurt2", "snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 16;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this.mc = this.getChildByName("mc");
            new hero_ichigo.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        ichigo.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 1, hitx: 2, hity: 6, hurtTime: 350, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 110, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 1, hitx: 2, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 1, hitx: 2, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 40, hitType: 1, hitx: 7, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 80, hitType: 5, hitx: -2, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 20, hitType: 4, hitx: 1, hity: -14, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 70, hitType: 6, hitx: 1, hity: 15, hurtTime: 450, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 50, hitType: 6, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 80, hitType: 6, hitx: 5, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 6, hitx: 4, hity: -4, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 3, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 5, hitx: 25, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 20, hitType: 1, hitx: 0, hity: -0.5, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 20, hitType: 1, hitx: 0, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 600, hitType: 5, hitx: 30, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 22;
            this._FighterCtrler.jumpPower = 17;
            this._FighterCtrler.heavy = 3;
            this.mc = this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new hero_ichigo.Timeline_15(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        ichigo.prototype.frame4 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 50, hitType: 1, hitx: 5, hity: 5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 20, hitType: 1, hitx: 5, hity: 5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 70, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 1, hitx: 5, hity: 0, hurtTime: 250, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 1, hitx: 7, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 30, hitType: 1, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 80, hitType: 6, hitx: 6, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k5", { power: 60, hitType: 1, hitx: 7, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 90, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 110, hitType: 5, hitx: 12, hity: 8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 50, hitType: 6, hitx: 15, hity: -8, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 50, hitType: 1, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 50, hitType: 6, hitx: 4, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 6, hitx: 5, hity: -10, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 100, hitType: 5, hitx: 12, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 50, hitType: 6, hitx: 10, hity: -7, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh23", { power: 120, hitType: 5, hitx: 10, hity: 8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 5, hitx: 25, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 300, hitType: 5, hitx: 20, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs", { power: 500, hitType: 5, hitx: 30, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 100, hitType: 6, hitx: 7, hity: -15, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineHurtSound("snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt2");
            this._FighterCtrler.speed = 24;
            this._FighterCtrler.jumpPower = 19;
            this._FighterCtrler.heavy = 4;
            this.mc = this.getChildByName("mc4");
            this.mc.ClearFrameScript();
            new hero_ichigo.Timeline_30(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return ichigo;
    }(zmovie.ZMovieClip));
    hero_ichigo.ichigo = ichigo;
    __reflect(ichigo.prototype, "hero_ichigo.ichigo");
})(hero_ichigo || (hero_ichigo = {}));
//# sourceMappingURL=ichigo.js.map