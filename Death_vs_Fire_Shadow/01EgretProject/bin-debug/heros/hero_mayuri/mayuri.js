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
*mayuri主骨骼动画对应的帧事件,选择对应形态
*/
var hero_mayuri;
(function (hero_mayuri) {
    var mayuri = (function (_super) {
        __extends(mayuri, _super);
        function mayuri(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_mayuri";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        mayuri.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        mayuri.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        mayuri.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("涅浊利1", RES.getRes("mayuri_bsface1_png"));
            this._EffectCtrl.setBishaFace("涅浊利2", RES.getRes("mayuri_bsface2_png"));
        };
        mayuri.prototype.frame1 = function () {
            return;
        };
        mayuri.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 60, hitType: 6, hitx: 6, hity: 6, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 60, hitType: 3, hitx: 0, hity: -6, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 120, hitType: 6, hitx: 10, hity: -6, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 60, hitType: 3, hitx: 6, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k31", { power: 30, hitType: 2, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 70, hitType: 3, hitx: 5, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj12", { power: 30, hitType: 2, hitx: -10, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 100, hitType: 6, hitx: 9, hity: -8, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 110, hitType: 9, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 150, hitType: 7, hitx: 10, hity: -8, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("zh31", { power: 20, hitType: 2, hitx: 12, hity: -8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 150, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs1", { power: 20, hitType: 2, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs2", { power: 30, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs3", { power: 50, hitType: 3, hitx: -10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs4", { power: 50, hitType: 6, hitx: 8, hity: -8, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs5", { power: 50, hitType: 3, hitx: -8, hity: 8, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 100, hitType: 6, hitx: 15, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs1", { power: 100, hitType: 6, hitx: 5, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 150, hitType: 9, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 40, hitType: 4, hitx: 10, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 100, hitType: 5, hitx: 20, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 5, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("涅浊利1", bsface1);
            //this._FighterCtrler.defineBishaFace("涅浊利2", bsface2);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt2");
            this._FighterCtrler.defineDieSound("snd_hurt2");
            this._FighterCtrler.speed = 10 + 6;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 4;
            this._FighterCtrler.defenseType = 0;
            this.mc = this.getChildByName("mc");
            new hero_mayuri.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        mayuri.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return mayuri;
    }(zmovie.ZMovieClip));
    hero_mayuri.mayuri = mayuri;
    __reflect(mayuri.prototype, "hero_mayuri.mayuri");
})(hero_mayuri || (hero_mayuri = {}));
//# sourceMappingURL=mayuri.js.map