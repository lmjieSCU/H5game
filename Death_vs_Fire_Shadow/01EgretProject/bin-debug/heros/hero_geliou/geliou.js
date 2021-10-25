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
*geliou主骨骼动画对应的帧事件,选择对应形态
*/
var hero_geliou;
(function (hero_geliou) {
    var geliou = (function (_super) {
        __extends(geliou, _super);
        function geliou(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_geliou";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        geliou.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        geliou.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        geliou.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("一户1", RES.getRes("geliou_bsface1_png"));
            this._EffectCtrl.setBishaFace("一户2", RES.getRes("geliou_bsface2_png"));
            ///   this._EffectCtrl.setBishaFace("一户万解",RES.getRes("geliou_bsface1_png"))
            //  this._EffectCtrl.setBishaFace("一户万解1",RES.getRes("geliou_bsface2_png"))
        };
        geliou.prototype.frame1 = function () {
            return;
        };
        geliou.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 2, hitx: 2, hity: -3, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 60, hitType: 3, hitx: 5, hity: 8, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 50, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 50, hitType: 2, hitx: 2, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 3, hitx: 6, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 10, hitType: 4, hitx: 1, hity: -1, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 30, hitType: 5, hitx: 6, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 40, hitType: 4, hitx: 1, hity: -1, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj22", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 6, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 80, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 3, hitx: 8, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 6, hitx: 2, hity: -3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh32", { power: 80, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 6, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 60, hitType: 5, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 10, hitType: 4, hitx: 1, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 60, hitType: 6, hitx: 10, hity: -12, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 10, hitType: 1, hitx: 2, hity: 2, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 150, hitType: 5, hitx: 8, hity: -4, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 30, hitType: 4, hitx: 4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 120, hitType: 5, hitx: 12, hity: -9, hurtTime: 500, hurtType: 1, isBreakDef: true });
            //this._FighterCtrler.defineBishaFace("一户1", bsface1);
            //this._FighterCtrler.defineBishaFace("一户2", bsface2);
            //this._FighterCtrler.defineBishaFace("一户万解", bsface3);
            //this._FighterCtrler.defineBishaFace("一户万解1", bsface4);
            this._FighterCtrler.defineHurtSound("snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this.mc = this.getChildByName("mc");
            new hero_geliou.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return geliou;
    }(zmovie.ZMovieClip));
    hero_geliou.geliou = geliou;
    __reflect(geliou.prototype, "hero_geliou.geliou");
})(hero_geliou || (hero_geliou = {}));
//# sourceMappingURL=geliou.js.map