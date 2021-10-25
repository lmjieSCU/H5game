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
*renji主骨骼动画对应的帧事件,选择对应形态
*/
var hero_renji;
(function (hero_renji) {
    var renji = (function (_super) {
        __extends(renji, _super);
        function renji(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_renji";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        renji.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        renji.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        renji.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("bsface1", RES.getRes("renji_bsface1_png"));
            this._EffectCtrl.setBishaFace("bsface2", RES.getRes("renji_bsface2_png"));
            this._EffectCtrl.setBishaFace("bsface3", RES.getRes("renji_bsface3_png"));
        };
        renji.prototype.frame1 = function () {
            return;
        };
        renji.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 1, hitx: 2, hity: 6, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 6, hitx: 6, hity: 6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 1, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 150, hitType: 5, hitx: 8, hity: -2, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("kj2", { power: 50, hitType: 1, hitx: 0, hity: -7, hurtTime: 450, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 80, hitType: 6, hitx: 2, hity: 2, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 110, hitType: 6, hitx: 4, hity: -10, hurtTime: 800, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 20, hitType: 1, hitx: 2, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 7, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 5, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 50, hitType: 1, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 100, hitType: 6, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 100, hitType: 6, hitx: -5, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 30, hitType: 1, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 100, hitType: 6, hitx: 3, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 30, hitType: 1, hitx: 10, hity: 0, hurtTime: 0, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 300, hitType: 5, hitx: 30, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: true });
            //this._FighterCtrler.defineBishaFace("bsface1", bsface1);
            //this._FighterCtrler.defineBishaFace("bsface2", bsface2);
            //this._FighterCtrler.defineBishaFace("bsface3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 8;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_renji.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        renji.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return renji;
    }(zmovie.ZMovieClip));
    hero_renji.renji = renji;
    __reflect(renji.prototype, "hero_renji.renji");
})(hero_renji || (hero_renji = {}));
//# sourceMappingURL=renji.js.map