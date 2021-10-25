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
*karin主骨骼动画对应的帧事件,选择对应形态
*/
var hero_karin;
(function (hero_karin) {
    var karin = (function (_super) {
        __extends(karin, _super);
        function karin(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_karin";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        karin.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        karin.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        karin.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("香磷1", RES.getRes("karin_bsface1_png"));
            this._EffectCtrl.setBishaFace("香磷2", RES.getRes("karin_bsface2_png"));
        };
        karin.prototype.frame1 = function () {
            return;
        };
        karin.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 20, hitType: 2, hitx: 1, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 120, hitType: 6, hitx: 5, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz2", { power: 80, hitType: 6, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz3", { power: 80, hitType: 6, hitx: -10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("tz4", { power: 80, hitType: 6, hitx: 10, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 4, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 30, hitType: 2, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 3, hitx: 5, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k4", { power: 90, hitType: 3, hitx: 10, hity: 0, hurtTime: 600, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 20, hitType: 4, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj22", { power: 30, hitType: 2, hitx: 4, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 100, hitType: 6, hitx: 6, hity: -8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 50, hitType: 4, hitx: 8, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh11", { power: 50, hitType: 7, hitx: 8, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 80, hitType: 5, hitx: 6, hity: -10, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 160, hitType: 6, hitx: 5, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 230, hitType: 5, hitx: 5, hity: -3, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 100, hitType: 5, hitx: 15, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 50, hitType: 5, hitx: 0, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 50, hitType: 6, hitx: 0, hity: 0, hurtTime: 2000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 350, hitType: 7, hitx: 20, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("香磷1", bsface1);
            //this._FighterCtrler.defineBishaFace("香磷2", bsface2);
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_karin.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        karin.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return karin;
    }(zmovie.ZMovieClip));
    hero_karin.karin = karin;
    __reflect(karin.prototype, "hero_karin.karin");
})(hero_karin || (hero_karin = {}));
//# sourceMappingURL=karin.js.map