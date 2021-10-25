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
*naruto主骨骼动画对应的帧事件,选择对应形态
*/
var hero_naruto;
(function (hero_naruto) {
    var naruto = (function (_super) {
        __extends(naruto, _super);
        function naruto(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_naruto";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3, 3, _this.frame4]);
            return _this;
        }
        naruto.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        naruto.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        naruto.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("鸣人1", RES.getRes("naruto_bsface1_png"));
            this._EffectCtrl.setBishaFace("鸣人2", RES.getRes("naruto_bsface2_png"));
            this._EffectCtrl.setBishaFace("鸣人3", RES.getRes("naruto_bsface3_png"));
            this._EffectCtrl.setBishaFace("鸣人4", RES.getRes("naruto_bsface4_png"));
            this._EffectCtrl.setBishaFace("鸣人5", RES.getRes("naruto_bsface5_png"));
            this._EffectCtrl.setBishaFace("鸣人6", RES.getRes("naruto_bsface6_png"));
        };
        naruto.prototype.frame1 = function () {
            return;
        };
        naruto.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 2, hitx: 3, hity: 8, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 3, hitx: 10, hity: 10, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 40, hitType: 2, hitx: 5, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 50, hitType: 3, hitx: 5, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 100, hitType: 5, hitx: 8, hity: -1, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj2", { power: 10, hitType: 2, hitx: 3, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj22", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj23", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj24", { power: 40, hitType: 3, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj25", { power: 40, hitType: 3, hitx: 4, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 1, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 20, hitType: 1, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 30, hitType: 1, hitx: 10, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh32", { power: 60, hitType: 3, hitx: 8, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh21", { power: 20, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh22", { power: 20, hitType: 4, hitx: -10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 10, hitType: 4, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs3", { power: 30, hitType: 4, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 100, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sbs", { power: 30, hitType: 2, hitx: 0, hity: 2, hurtTime: 800, hurtType: 0, isBreakDef: false, checkDirect: false });
            this._FighterCtrler.defineAction("sbs2", { power: 30, hitType: 1, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false, checkDirect: false });
            this._FighterCtrler.defineAction("cbs1", { power: 10, hitType: 1, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 10, hitType: 6, hitx: 0, hity: -6, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 30, hitType: 4, hitx: 0, hity: 10, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs4", { power: 50, hitType: 4, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 100, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 18;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_naruto.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        naruto.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 60, hitType: 2, hitx: 3, hity: 6, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 3, hitx: 3, hity: 5, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 60, hitType: 3, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 60, hitType: 6, hitx: 2, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 200, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 10, hitType: 11, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 190, hitType: 3, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh11", { power: 20, hitType: 2, hitx: -4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 60, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 3, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 20, hitType: 1, hitx: 0, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 30, hitType: 4, hitx: 6, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 130, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 350, hitType: 3, hitx: 15, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 500, hitType: 5, hitx: 50, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 20;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 4;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new hero_naruto.Timeline_19(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        naruto.prototype.frame4 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 3, hitx: 3, hity: 6, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 3, hitx: 3, hity: 5, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 25, hitType: 1, hitx: 2, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 50, hitType: 3, hitx: 10, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 80, hitType: 6, hitx: -7, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 120, hitType: 3, hitx: 0, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 120, hitType: 3, hitx: 0, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 100, hitType: 5, hitx: 8, hity: -5, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 60, hitType: 3, hitx: 7, hity: -3, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 110, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 20, hitType: 1, hitx: -2, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh32", { power: 30, hitType: 1, hitx: 2, hity: -6, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh33", { power: 30, hitType: 1, hitx: 5, hity: -8, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 3, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 60, hitType: 3, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 230, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sbs", { power: 350, hitType: 3, hitx: 10, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 350, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 100, hitType: 5, hitx: 20, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 300, hitType: 5, hitx: 20, hity: -20, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.speed = 20;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 5;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc4");
            this.mc.ClearFrameScript();
            new hero_naruto.Timeline_30(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return naruto;
    }(zmovie.ZMovieClip));
    hero_naruto.naruto = naruto;
    __reflect(naruto.prototype, "hero_naruto.naruto");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=naruto.js.map