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
*uryuu主骨骼动画对应的帧事件,选择对应形态
*/
var hero_uryuu;
(function (hero_uryuu) {
    var uryuu = (function (_super) {
        __extends(uryuu, _super);
        function uryuu(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_uryuu";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2, 2, _this.frame3]);
            return _this;
        }
        uryuu.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        uryuu.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        uryuu.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("石田1", RES.getRes("uryuu_bsface1_png"));
            this._EffectCtrl.setBishaFace("石田2", RES.getRes("uryuu_bsface1_png"));
            this._EffectCtrl.setBishaFace("石田3", RES.getRes("uryuu_bsface1_png"));
        };
        uryuu.prototype.frame1 = function () {
            return;
        };
        uryuu.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 20, hitType: 4, hitx: 4, hity: 2, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 80, hitType: 5, hitx: 8, hity: 5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 20, hitType: 4, hitx: 4, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 4, hitx: 6, hity: 0, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 30, hitType: 4, hitx: 7, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k31", { power: 30, hitType: 4, hitx: 7, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k32", { power: 30, hitType: 4, hitx: 7, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 130, hitType: 5, hitx: 8, hity: -2, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 80, hitType: 3, hitx: 10, hity: -8, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 130, hitType: 5, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh21", { power: 50, hitType: 6, hitx: 0, hity: 20, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 100, hitType: 5, hitx: 0, hity: -8, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("zh3", { power: 150, hitType: 5, hitx: 10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 300, hitType: 5, hitx: 20, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 280, hitType: 5, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs", { power: 60, hitType: 5, hitx: 10, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs1", { power: 130, hitType: 5, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 60, hitType: 4, hitx: 0, hity: -3, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 20, hitType: 2, hitx: -3, hity: -6, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh23", { power: 150, hitType: 5, hitx: 0, hity: -15, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("石田1", bsface1);
            //this._FighterCtrler.defineBishaFace("石田2", bsface2);
            //this._FighterCtrler.defineBishaFace("石田3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurtfly");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 1;
            this._FighterCtrler.energy = 150;
            this.mc = this.getChildByName("mc");
            new hero_uryuu.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        uryuu.prototype.frame3 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            return;
        }; // end function
        return uryuu;
    }(zmovie.ZMovieClip));
    hero_uryuu.uryuu = uryuu;
    __reflect(uryuu.prototype, "hero_uryuu.uryuu");
})(hero_uryuu || (hero_uryuu = {}));
//# sourceMappingURL=uryuu.js.map