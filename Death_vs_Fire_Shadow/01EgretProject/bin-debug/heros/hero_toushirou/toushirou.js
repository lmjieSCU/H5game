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
*toushirou主骨骼动画对应的帧事件,选择对应形态
*/
var hero_toushirou;
(function (hero_toushirou) {
    var toushirou = (function (_super) {
        __extends(toushirou, _super);
        function toushirou(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_toushirou";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        toushirou.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        toushirou.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        toushirou.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("日番谷1", RES.getRes("toushirou_bsface1_png"));
            this._EffectCtrl.setBishaFace("日番谷2", RES.getRes("toushirou_bsface2_png"));
            this._EffectCtrl.setBishaFace("日番谷3", RES.getRes("toushirou_bsface3_png"));
        };
        toushirou.prototype.frame1 = function () {
            return;
        };
        toushirou.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 1, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 8, hitx: 5, hity: 5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 100, hitType: 8, hitx: 5, hity: 5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz2", { power: 100, hitType: 8, hitx: 5, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 1, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 6, hitx: 5, hity: -5, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 100, hitType: 5, hitx: 8, hity: -4, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 50, hitType: 1, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 70, hitType: 8, hitx: 5, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 25, hitType: 4, hitx: 5, hity: 0, hurtTime: 200, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 25, hitType: 4, hitx: 5, hity: 0, hurtTime: 200, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 50, hitType: 8, hitx: 2, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 40, hitType: 4, hitx: 6, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 50, hitType: 4, hitx: 15, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 100, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 50, hitType: 6, hitx: 10, hity: -3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 50, hitType: 1, hitx: 10, hity: -3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 50, hitType: 1, hitx: 10, hity: -3, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 10, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 300, hitType: 5, hitx: 0, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("日番谷1", bsface1);
            //this._FighterCtrler.defineBishaFace("日番谷2", bsface2);
            //this._FighterCtrler.defineBishaFace("日番谷3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt2");
            this._FighterCtrler.defineDieSound("snd_hurt2");
            this._FighterCtrler.speed = 8 + 10;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_toushirou.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        toushirou.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 0, hity: 3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 5, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 1, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 50, hitType: 6, hitx: 7, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 80, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj21", { power: 50, hitType: 6, hitx: 5, hity: -10, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 100, hitType: 5, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 30, hitType: 1, hitx: 5, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh21", { power: 30, hitType: 6, hitx: 10, hity: -3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh22", { power: 30, hitType: 1, hitx: 10, hity: -3, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 30, hitType: 1, hitx: 10, hity: -3, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 40, hitType: 4, hitx: 5, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 50, hitType: 8, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("bs1", { power: 200, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sbs", { power: 320, hitType: 6, hitx: 3, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 10, hitType: 4, hitx: 0, hity: 10, hurtTime: 0, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 400, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 10, hitType: 4, hitx: 0, hity: -1, hurtTime: 5000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 6, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("日番谷1", bsface1);
            //this._FighterCtrler.defineBishaFace("日番谷2", bsface2);
            //this._FighterCtrler.defineBishaFace("日番谷3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt2");
            this._FighterCtrler.defineDieSound("snd_hurt2");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 18;
            this._FighterCtrler.heavy = 4;
            this._FighterCtrler.defenseType = 0;
            //
            this.mc = this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new hero_toushirou.Timeline_8(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return toushirou;
    }(zmovie.ZMovieClip));
    hero_toushirou.toushirou = toushirou;
    __reflect(toushirou.prototype, "hero_toushirou.toushirou");
})(hero_toushirou || (hero_toushirou = {}));
//# sourceMappingURL=toushirou.js.map