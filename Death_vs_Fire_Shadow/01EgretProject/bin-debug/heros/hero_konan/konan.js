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
*konan主骨骼动画对应的帧事件,选择对应形态
*/
var hero_konan;
(function (hero_konan) {
    var konan = (function (_super) {
        __extends(konan, _super);
        function konan(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_konan";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        konan.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        konan.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        konan.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("小南1", RES.getRes("konan_bsface1_png"));
            this._EffectCtrl.setBishaFace("小南2", RES.getRes("konan_bsface2_png"));
        };
        konan.prototype.frame1 = function () {
            return;
        };
        konan.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 1, hitx: 4, hity: 8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 6, hitx: -10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz2", { power: 80, hitType: 6, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz3", { power: 80, hitType: 6, hitx: -10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz4", { power: 80, hitType: 6, hitx: 10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 60, hitType: 6, hitx: 4, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 70, hitType: 6, hitx: 3, hity: 0, hurtTime: 350, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 50, hitType: 1, hitx: 5, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 20, hitType: 4, hitx: 5, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 80, hitType: 5, hitx: 4, hity: -6, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 70, hitType: 6, hitx: 0, hity: -8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh31", { power: 20, hitType: 11, hitx: 0, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 7, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 5, hitx: 15, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 10, hitType: 2, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 150, hitType: 6, hitx: 0, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 20, hitType: 1, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 250, hitType: 5, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 20;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 1;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_konan.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return konan;
    }(zmovie.ZMovieClip));
    hero_konan.konan = konan;
    __reflect(konan.prototype, "hero_konan.konan");
})(hero_konan || (hero_konan = {}));
//# sourceMappingURL=konan.js.map