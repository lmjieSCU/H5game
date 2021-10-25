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
*killerbee主骨骼动画对应的帧事件,选择对应形态
*/
var hero_killerbee;
(function (hero_killerbee) {
    var killerbee = (function (_super) {
        __extends(killerbee, _super);
        function killerbee(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_killerbee";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        killerbee.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        killerbee.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        killerbee.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("奇拉比1", RES.getRes("killerbee_bsface1_png"));
            this._EffectCtrl.setBishaFace("奇拉比2", RES.getRes("killerbee_bsface2_png"));
        };
        killerbee.prototype.frame1 = function () {
            return;
        };
        killerbee.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 3, hitx: 4, hity: 10, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 30, hitType: 1, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 30, hitType: 1, hitx: 8, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 40, hitType: 1, hitx: 4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 80, hitType: 6, hitx: 1, hity: -6, hurtTime: 600, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 30, hitType: 1, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 60, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj22", { power: 60, hitType: 1, hitx: 10, hity: -8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 6, hitx: 15, hity: -7, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 40, hitType: 4, hitx: 5, hity: 0, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 180, hitType: 9, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 140, hitType: 6, hitx: 6, hity: -6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 80, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs3", { power: 80, hitType: 3, hitx: 4, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 80, hitType: 3, hitx: 3, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 280, hitType: 5, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 35, hitType: 4, hitx: 5, hity: -0.2, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.speed = 21;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 5;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_killerbee.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return killerbee;
    }(zmovie.ZMovieClip));
    hero_killerbee.killerbee = killerbee;
    __reflect(killerbee.prototype, "hero_killerbee.killerbee");
})(hero_killerbee || (hero_killerbee = {}));
//# sourceMappingURL=killerbee.js.map