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
*byakuya主骨骼动画对应的帧事件,选择对应形态
*/
var hero_byakuya;
(function (hero_byakuya) {
    var byakuya = (function (_super) {
        __extends(byakuya, _super);
        function byakuya(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_byakuya";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        byakuya.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        byakuya.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        byakuya.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("白哉1", RES.getRes("byakuya_bsface1_png"));
            this._EffectCtrl.setBishaFace("白哉2", RES.getRes("byakuya_bsface2_png"));
            this._EffectCtrl.setBishaFace("白哉3", RES.getRes("byakuya_bsface3_png"));
        };
        byakuya.prototype.frame1 = function () {
            return;
        };
        byakuya.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 0, hity: 0, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 70, hitType: 6, hitx: 5, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 1, hitx: 3, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 1, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 50, hitType: 6, hitx: 7, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 60, hitType: 6, hitx: 8, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 30, hitType: 1, hitx: 1, hity: 0, hurtTime: 100, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 50, hitType: 5, hitx: 5, hity: -10, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 40, hitType: 4, hitx: 8, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 5, hitx: 12, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 30, hitType: 1, hitx: 8, hity: -6, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh32", { power: 50, hitType: 1, hitx: 8, hity: -6, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 30, hitType: 1, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 80, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 30, hitType: 1, hitx: 0, hity: -1, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 30, hitType: 1, hitx: 5, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 450, hitType: 5, hitx: 5, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 0, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("白哉1", bsface1);
            //this._FighterCtrler.defineBishaFace("白哉2", bsface2);
            //this._FighterCtrler.defineBishaFace("白哉3", bsface3);
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_byakuya.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return byakuya;
    }(zmovie.ZMovieClip));
    hero_byakuya.byakuya = byakuya;
    __reflect(byakuya.prototype, "hero_byakuya.byakuya");
})(hero_byakuya || (hero_byakuya = {}));
//# sourceMappingURL=byakuya.js.map