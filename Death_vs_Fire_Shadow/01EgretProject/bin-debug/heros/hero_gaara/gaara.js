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
*gaara主骨骼动画对应的帧事件,选择对应形态
*/
var hero_gaara;
(function (hero_gaara) {
    var gaara = (function (_super) {
        __extends(gaara, _super);
        function gaara(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_gaara";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        gaara.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        gaara.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        gaara.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("我爱罗1", RES.getRes("gaara_bsface1_png"));
            this._EffectCtrl.setBishaFace("我爱罗2", RES.getRes("gaara_bsface2_png"));
        };
        gaara.prototype.frame1 = function () {
            return;
        };
        gaara.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 2, hitx: 3, hity: 3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 5, hitx: 2, hity: 6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 2, hitx: 1, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 2, hitx: 1, hity: -2, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 80, hitType: 3, hitx: 10, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 150, hitType: 5, hitx: 15, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 150, hitType: 5, hitx: 8, hity: -7, hurtTime: 500, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh1", { power: 100, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 80, hitType: 3, hitx: 0, hity: -6, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 10, hitType: 2, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 330, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 10, hitType: 2, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 50, hitType: 3, hitx: 0, hity: 3, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs3", { power: 10, hitType: 2, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 250, hitType: 5, hitx: 0, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 200, hitType: 5, hitx: 5, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs3", { power: 150, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs2", { power: 30, hitType: 2, hitx: 0, hity: -1, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 50, hitType: 3, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 3, hitx: 15, hity: -6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("我爱罗1", bsface1);
            //this._FighterCtrler.defineBishaFace("我爱罗2", bsface2);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 8;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 4;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_gaara.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        gaara.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return gaara;
    }(zmovie.ZMovieClip));
    hero_gaara.gaara = gaara;
    __reflect(gaara.prototype, "hero_gaara.gaara");
})(hero_gaara || (hero_gaara = {}));
//# sourceMappingURL=gaara.js.map