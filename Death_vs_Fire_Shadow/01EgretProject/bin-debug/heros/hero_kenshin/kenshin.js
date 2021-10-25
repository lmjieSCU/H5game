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
*kenshin主骨骼动画对应的帧事件,选择对应形态
*/
var hero_kenshin;
(function (hero_kenshin) {
    var kenshin = (function (_super) {
        __extends(kenshin, _super);
        function kenshin(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_kenshin";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        kenshin.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        kenshin.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        kenshin.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            // this._EffectCtrl.setBishaFace("茶渡",RES.getRes("kenshin_bsface1_png"))
        };
        kenshin.prototype.frame1 = function () {
            return;
        };
        kenshin.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 1, hity: 7, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 7, hitx: 10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 1, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 60, hitType: 6, hitx: 8, hity: -8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 50, hitType: 1, hitx: -1, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 100, hitType: 6, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 3, hitx: 1, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh1", { power: 40, hitType: 4, hitx: 10, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 15, hitType: 1, hitx: 3, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 110, hitType: 6, hitx: 0, hity: -10, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 60, hitType: 1, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 60, hitType: 6, hitx: 0, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 400, hitType: 6, hitx: 0, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 300, hitType: 6, hitx: -3, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 10, hitType: 2, hitx: -1, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 400, hitType: 5, hitx: 20, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.speed = 10 + 12;
            this._FighterCtrler.jumpPower = 17;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_kenshin.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return kenshin;
    }(zmovie.ZMovieClip));
    hero_kenshin.kenshin = kenshin;
    __reflect(kenshin.prototype, "hero_kenshin.kenshin");
})(hero_kenshin || (hero_kenshin = {}));
//# sourceMappingURL=kenshin.js.map