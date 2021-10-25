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
*sakura主骨骼动画对应的帧事件,选择对应形态
*/
var hero_sakura;
(function (hero_sakura) {
    var sakura = (function (_super) {
        __extends(sakura, _super);
        function sakura(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_sakura";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        sakura.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        sakura.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        sakura.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("樱1", RES.getRes("sakura_bsface1_png"));
            this._EffectCtrl.setBishaFace("樱2", RES.getRes("sakura_bsface2_png"));
        };
        sakura.prototype.frame1 = function () {
            return;
        };
        sakura.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { power: 40, hitType: 2, hitx: 4, hity: 8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz1", { power: 10, hitType: 2, hitx: 6, hity: 8, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("tz", { power: 100, hitType: 3, hitx: 10, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("k1", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k2", { power: 40, hitType: 2, hitx: 5, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("k3", { power: 60, hitType: 3, hitx: 5, hity: 0, hurtTime: 600, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj1", { power: 30, hitType: 2, hitx: 10, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("kj11", { power: 80, hitType: 3, hitx: 9, hity: -3, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kj21", { power: 30, hitType: 2, hitx: 6, hity: -1, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kj2", { power: 60, hitType: 3, hitx: 4, hity: -5, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh1", { power: 30, hitType: 1, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh12", { power: 30, hitType: 6, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh2", { power: 60, hitType: 3, hitx: 7, hity: -8, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("zh3", { power: 130, hitType: 6, hitx: 5, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh31", { power: 130, hitType: 6, hitx: 5, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("zh32", { power: 130, hitType: 6, hitx: 5, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("bs", { power: 200, hitType: 5, hitx: 10, hity: -4, hurtTime: 0, hurtType: 1, isBreakDef: true });
            this._FighterCtrler.defineAction("bs1", { power: 30, hitType: 4, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs2", { power: 10, hitType: 2, hitx: 0, hity: 10, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sbs", { power: 200, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs2", { power: 10, hitType: 2, hitx: 0, hity: 10, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("kbs", { power: 250, hitType: 3, hitx: 10, hity: 0, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs1", { power: 30, hitType: 2, hitx: 0, hity: -0.1, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("cbs2", { power: 50, hitType: 3, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("cbs", { power: 100, hitType: 3, hitx: 20, hity: -2, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._FighterCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._FighterCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._FighterCtrler.defineAction("sh22", { power: 150, hitType: 3, hitx: 10, hity: 10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            //this._FighterCtrler.defineBishaFace("樱1", bsface1);
            //this._FighterCtrler.defineBishaFace("樱2", bsface1);
            this._FighterCtrler.speed = 10 + 6;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_sakura.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }; // end function
        return sakura;
    }(zmovie.ZMovieClip));
    hero_sakura.sakura = sakura;
    __reflect(sakura.prototype, "hero_sakura.sakura");
})(hero_sakura || (hero_sakura = {}));
//# sourceMappingURL=sakura.js.map