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
*Asuna主骨骼动画对应的帧事件,选择对应形态
*/
var hero_Asuna;
(function (hero_Asuna) {
    var Asuna = (function (_super) {
        __extends(Asuna, _super);
        function Asuna(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_Asuna";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        Asuna.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        Asuna.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        Asuna.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("鹰佐1", RES.getRes("Asuna_bsface5_png"));
            this._EffectCtrl.setBishaFace("鹰佐2", RES.getRes("Asuna_bsface6_png"));
            this._EffectCtrl.setBishaFace("鹰佐3", RES.getRes("Asuna_bsface7_png"));
        };
        Asuna.prototype.frame1 = function () {
            return;
        };
        Asuna.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 3, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("mmp", { power: 80, hitType: 5, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 5, hitx: 5, hity: 8, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("mmp2atm", { power: 10, hitType: 3, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("k1", { power: 40, hitType: 1, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 50, hitType: 1, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 3, hitx: 3, hity: -3, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 70, hitType: 5, hitx: 5, hity: 0, hurtTime: 600, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 100, hitType: 5, hitx: 8, hity: 0, hurtTime: 700, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 60, hitType: 3, hitx: 0, hity: -5, hurtTime: 800, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 10, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 50, hitType: 1, hitx: 3, hity: -8, hurtTime: 500, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 9, hitx: -3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 3, hitx: 8, hity: -3, hurtTime: 600, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 100, hitType: 9, hitx: 0, hity: -8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 5, hitx: 5, hity: -8, hurtTime: 500, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("bs233", { power: 20, hitType: 1, hitx: 0, hity: 1, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 10, hitType: 1, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2333", { power: 400, hitType: 1, hitx: 0, hity: 0, hurtTime: 800, hurtType: 1, isBreakDef: false, checkDirect: false });
            this._FighterCtrler.defineAction("bs2", { power: 100, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false, checkDirect: false });
            this._FighterCtrler.defineAction("sbs", { power: 350, hitType: 9, hitx: 10, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("asd", { power: 80, hitType: 5, hitx: 8, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 20, hitType: 1, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("鹰佐1", bsface5);
            //this._FighterCtrler.defineBishaFace("鹰佐2", bsface6);
            // this._FighterCtrler.defineBishaFace("鹰佐3", bsface7);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this.mc = this.getChildByName("mc");
            new hero_Asuna.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return Asuna;
    }(zmovie.ZMovieClip));
    hero_Asuna.Asuna = Asuna;
    __reflect(Asuna.prototype, "hero_Asuna.Asuna");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Asuna.js.map