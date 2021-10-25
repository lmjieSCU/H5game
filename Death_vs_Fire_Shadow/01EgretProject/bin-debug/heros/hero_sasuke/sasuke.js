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
*sasuke主骨骼动画对应的帧事件,选择对应形态
*/
var hero_sasuke;
(function (hero_sasuke) {
    var sasuke = (function (_super) {
        __extends(sasuke, _super);
        function sasuke(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_sasuke";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        sasuke.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        sasuke.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        sasuke.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("佐助1", RES.getRes("sasuke_bsface1_png"));
            this._EffectCtrl.setBishaFace("佐助2", RES.getRes("sasuke_bsface2_png"));
            this._EffectCtrl.setBishaFace("佐助3", RES.getRes("sasuke_bsface3_png"));
        };
        sasuke.prototype.frame1 = function () {
            return;
        };
        sasuke.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 2, hitx: 3, hity: 3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 50, hitType: 1, hitx: 1, hity: 10, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 2, hitx: 6, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 80, hitType: 6, hitx: 8, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 110, hitType: 9, hitx: 6, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 30, hitType: 1, hitx: 1, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 9, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 40, hitType: 2, hitx: 3, hity: -3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 70, hitType: 3, hitx: 5, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 70, hitType: 9, hitx: 7, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 50, hitType: 3, hitx: 7, hity: -7, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh31", { power: 60, hitType: 3, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 9, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 250, hitType: 9, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 250, hitType: 9, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs1", { power: 100, hitType: 9, hitx: 10, hity: -9, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs2", { power: 30, hitType: 1, hitx: 1, hity: -4, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 55, hitType: 6, hitx: 3, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 280, hitType: 7, hitx: 30, hity: 20, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 9, hitx: 0, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("佐助1", bsface1);
            //this._FighterCtrler.defineBishaFace("佐助2", bsface2);
            //this._FighterCtrler.defineBishaFace("佐助3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 8;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_sasuke.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        sasuke.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 20, hitType: 1, hitx: 5, hity: 3, hurtTime: 100, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 140, hitType: 7, hitx: 10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 2, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 2, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 3, hitx: 8, hity: -6, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 100, hitType: 9, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 80, hitType: 5, hitx: -10, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 20, hitType: 1, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 160, hitType: 9, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 100, hitType: 6, hitx: -8, hity: -8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 60, hitType: 9, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 30, hitType: 4, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 30, hitType: 4, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 280, hitType: 7, hitx: 10, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 200, hitType: 9, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs", { power: 300, hitType: 5, hitx: 15, hity: -10, hurtTime: 500, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 9, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("佐助1", bsface1);
            //this._FighterCtrler.defineBishaFace("佐助2", bsface2);
            //this._FighterCtrler.defineBishaFace("佐助3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new hero_sasuke.Timeline_12(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return sasuke;
    }(zmovie.ZMovieClip));
    hero_sasuke.sasuke = sasuke;
    __reflect(sasuke.prototype, "hero_sasuke.sasuke");
})(hero_sasuke || (hero_sasuke = {}));
//# sourceMappingURL=sasuke.js.map