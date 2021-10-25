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
*lee主骨骼动画对应的帧事件,选择对应形态
*/
var hero_lee;
(function (hero_lee) {
    var lee = (function (_super) {
        __extends(lee, _super);
        function lee(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_lee";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        lee.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        lee.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        lee.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("小李1", RES.getRes("lee_bsface1_png"));
            this._EffectCtrl.setBishaFace("小李2", RES.getRes("lee_bsface2_png"));
        };
        lee.prototype.frame1 = function () {
            return;
        };
        lee.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 2, hitx: 3, hity: 5, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 70, hitType: 3, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 30, hitType: 2, hitx: 6, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 50, hitType: 3, hitx: 5, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 50, hitType: 3, hitx: 10, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj11", { power: 50, hitType: 3, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 3, hitx: 7, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 70, hitType: 5, hitx: 3, hity: -8, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh11", { power: 80, hitType: 3, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 3, hitx: 0, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh21", { power: 20, hitType: 2, hitx: 8, hity: 3, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 5, hitx: 7, hity: -7, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("bs", { power: 80, hitType: 3, hitx: 3, hity: -20, hurtTime: 3000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 300, hitType: 5, hitx: 5, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kbs1", { power: 20, hitType: 2, hitx: 0, hity: 20, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs", { power: 200, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 150, hitType: 3, hitx: 15, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs1", { power: 40, hitType: 3, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 40, hitType: 3, hitx: 10, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 40, hitType: 3, hitx: -10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs4", { power: 40, hitType: 3, hitx: -10, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 160, hitType: 3, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 20; //均+10
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_lee.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        lee.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 2, hitx: 3, hity: 8, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 3, hitx: 10, hity: 10, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 30, hitType: 2, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 20, hitType: 2, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k5", { power: 40, hitType: 3, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k6", { power: 50, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 40, hitType: 3, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 40, hitType: 3, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj13", { power: 40, hitType: 5, hitx: 5, hity: -7, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 30, hitType: 2, hitx: 0, hity: -10, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 80, hitType: 3, hitx: 5, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 80, hitType: 5, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 140, hitType: 5, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 110, hitType: 5, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 160, hitType: 0, hitx: -10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 50, hitType: 3, hitx: 0, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 10, hitType: 2, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs3", { power: 0, hitType: 0, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs4", { power: 0, hitType: 0, hitx: 0, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 140, hitType: 5, hitx: 0, hity: 20, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 100, hitType: 5, hitx: 10, hity: -10, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 150, hitType: 7, hitx: 3, hity: -8, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs1", { power: 10, hitType: 4, hitx: 5, hity: 2, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs2", { power: 10, hitType: 4, hitx: 3, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs", { power: 150, hitType: 7, hitx: 10, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 50, hitType: 5, hitx: 3, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 20, hitType: 2, hitx: 4, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 50, hitType: 7, hitx: 20, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: true });
            // this._FighterCtrler.defineHurtSound(snd_hurt1);
            // this._FighterCtrler.defineHurtFlySound(snd_hurt1);
            // this._FighterCtrler.defineDieSound(snd_hurt1);
            this._FighterCtrler.speed = 22;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new hero_lee.Timeline_10(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return lee;
    }(zmovie.ZMovieClip));
    hero_lee.lee = lee;
    __reflect(lee.prototype, "hero_lee.lee");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=lee.js.map