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
*chad主骨骼动画对应的帧事件,选择对应形态
*/
var hero_chad;
(function (hero_chad) {
    var chad = (function (_super) {
        __extends(chad, _super);
        function chad(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_chad";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        chad.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        chad.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        chad.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("茶渡", RES.getRes("chad_bsface1_png"));
        };
        chad.prototype.frame1 = function () {
            return;
        };
        chad.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 70, hitType: 3, hitx: 3, hity: 3, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 20, hitType: 4, hitx: 10, hity: 10, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 60, hitType: 3, hitx: 10, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 100, hitType: 3, hitx: 1, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 5, hitx: 5, hity: -7, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 130, hitType: 5, hitx: 20, hity: 0, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 80, hitType: 3, hitx: 5, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 150, hitType: 5, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 290, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 100, hitType: 5, hitx: 10, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 120, hitType: 5, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 200, hitType: 3, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs1", { power: 350, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 0, hitx: -5, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 16;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 5;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_chad.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return chad;
    }(zmovie.ZMovieClip));
    hero_chad.chad = chad;
    __reflect(chad.prototype, "hero_chad.chad");
})(hero_chad || (hero_chad = {}));
//# sourceMappingURL=chad.js.map