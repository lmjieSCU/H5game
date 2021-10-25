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
*kenpachi主骨骼动画对应的帧事件,选择对应形态
*/
var hero_kenpachi;
(function (hero_kenpachi) {
    var kenpachi = (function (_super) {
        __extends(kenpachi, _super);
        function kenpachi(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_kenpachi";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        kenpachi.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        kenpachi.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        kenpachi.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("剑八1", RES.getRes("kenpachi_bsface1_png"));
            this._EffectCtrl.setBishaFace("剑八2", RES.getRes("kenpachi_bsface2_png"));
        };
        kenpachi.prototype.frame1 = function () {
            return;
        };
        kenpachi.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 70, hitType: 6, hitx: 0, hity: 15, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 130, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 20, hitType: 4, hitx: 0, hity: 30, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 40, hitType: 1, hitx: 3, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 1, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 6, hitx: 4, hity: -6, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj11", { power: 40, hitType: 1, hitx: 6, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 60, hitType: 7, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj2", { power: 70, hitType: 6, hitx: 1, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 70, hitType: 6, hitx: 5, hity: -8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 120, hitType: 5, hitx: 20, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 200, hitType: 9, hitx: 10, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 130, hitType: 9, hitx: 12, hity: -6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 100, hitType: 6, hitx: 20, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 100, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sbs1", { power: 20, hitType: 1, hitx: 1, hity: -1, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 40, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 40, hitType: 6, hitx: 6, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 20, hitType: 1, hitx: 4, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 40, hitType: 6, hitx: 2, hity: -4, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs4", { power: 10, hitType: 1, hitx: 1, hity: -0.2, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs5", { power: 20, hitType: 2, hitx: 3, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 60, hitType: 7, hitx: 15, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 30, hitType: 1, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh23", { power: 100, hitType: 5, hitx: 15, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("剑八1", bsface1);
            //this._FighterCtrler.defineBishaFace("剑八2", bsface2);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 5;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_kenpachi.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return kenpachi;
    }(zmovie.ZMovieClip));
    hero_kenpachi.kenpachi = kenpachi;
    __reflect(kenpachi.prototype, "hero_kenpachi.kenpachi");
})(hero_kenpachi || (hero_kenpachi = {}));
//# sourceMappingURL=kenpachi.js.map