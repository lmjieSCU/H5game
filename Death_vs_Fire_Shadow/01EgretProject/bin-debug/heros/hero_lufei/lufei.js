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
*lufei主骨骼动画对应的帧事件,选择对应形态
*/
var hero_lufei;
(function (hero_lufei) {
    var lufei = (function (_super) {
        __extends(lufei, _super);
        function lufei(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_lufei";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        lufei.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        lufei.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        lufei.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("路飞1", RES.getRes("lufei_bsface1_png"));
            this._EffectCtrl.setBishaFace("路飞2", RES.getRes("lufei_bsface2_png"));
            this._EffectCtrl.setBishaFace("路飞3", RES.getRes("lufei_bsface2_png"));
        };
        lufei.prototype.frame1 = function () {
            return;
        };
        lufei.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk1", { power: 10, hitType: 2, hitx: 0, hity: -2, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tk2", { power: 30, hitType: 5, hitx: 3, hity: -3, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 3, hitx: 3, hity: -3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 10, hitType: 2, hitx: 0, hity: 1, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz2", { power: 50, hitType: 2, hitx: 0, hity: 2, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 2, hitx: 6, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 50, hitType: 3, hitx: 2, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 60, hitType: 5, hitx: 2, hity: -5, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 20, hitType: 5, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("kj12", { power: 20, hitType: 2, hitx: 2, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj13", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 60, hitType: 5, hitx: 3, hity: 3, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 50, hitType: 5, hitx: 5, hity: -3, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 120, hitType: 5, hitx: 8, hity: -3, hurtTime: 300, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 120, hitType: 5, hitx: 8, hity: -3, hurtTime: 300, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("mmp", { power: 80, hitType: 7, hitx: 3, hity: -10, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("mmpxx", { power: 80, hitType: 7, hitx: 0, hity: -20, hurtTime: 3000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh32", { power: 60, hitType: 3, hitx: 8, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 20, hitType: 3, hitx: 3, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 40, hitType: 5, hitx: 8, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 100, hitType: 5, hitx: 1, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 300, hitType: 7, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sbs1", { power: 450, hitType: 5, hitx: 0, hity: 5, hurtTime: 800, hurtType: 1, isBreakDef: false, checkDirect: false });
            this._FighterCtrler.defineAction("cbs1", { power: 50, hitType: 5, hitx: 1, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 10, hitType: 2, hitx: 1, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 350, hitType: 7, hitx: 10, hity: -10, hurtTime: 1000, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kzbs1", { power: 150, hitType: 5, hitx: 5, hity: 0, hurtTime: 0, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kzbs2", { power: 200, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("路飞1", face1);
            //this._FighterCtrler.defineBishaFace("路飞2", face2);
            //this._FighterCtrler.defineBishaFace("路飞3", face3);
            this._FighterCtrler.defineHurtSound("voice_hurt2");
            this._FighterCtrler.defineHurtFlySound("voice_hurt1");
            this._FighterCtrler.defineDieSound("voice_die");
            this._FighterCtrler.speed = 10 + 8;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_lufei.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        lufei.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return lufei;
    }(zmovie.ZMovieClip));
    hero_lufei.lufei = lufei;
    __reflect(lufei.prototype, "hero_lufei.lufei");
})(hero_lufei || (hero_lufei = {}));
//# sourceMappingURL=lufei.js.map