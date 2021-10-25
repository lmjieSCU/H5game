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
*orihime主骨骼动画对应的帧事件,选择对应形态
*/
var hero_orihime;
(function (hero_orihime) {
    var orihime = (function (_super) {
        __extends(orihime, _super);
        function orihime(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_orihime";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        orihime.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        orihime.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        orihime.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("织姬1", RES.getRes("orihime_bsface1_png"));
            this._EffectCtrl.setBishaFace("织姬2", RES.getRes("orihime_bsface2_png"));
        };
        orihime.prototype.frame1 = function () {
            return;
        };
        orihime.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 2, hitx: 4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 5, hitx: 0, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 70, hitType: 3, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 10, hitType: 2, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 300, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh22", { power: 150, hitType: 5, hitx: 5, hity: 0, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 5, hitx: 7, hity: -7, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 2, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh21", { power: 150, hitType: 5, hitx: 0, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 270, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 100, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 50, hitType: 3, hitx: 2, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 30, hitType: 4, hitx: 2, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 50, hitType: 5, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs5", { power: 15, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 15, hitType: 4, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt2");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 16.5;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 1;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_orihime.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return orihime;
    }(zmovie.ZMovieClip));
    hero_orihime.orihime = orihime;
    __reflect(orihime.prototype, "hero_orihime.orihime");
})(hero_orihime || (hero_orihime = {}));
//# sourceMappingURL=orihime.js.map