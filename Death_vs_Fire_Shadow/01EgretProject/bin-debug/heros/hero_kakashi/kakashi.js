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
*kakashi主骨骼动画对应的帧事件,选择对应形态
*/
var hero_kakashi;
(function (hero_kakashi) {
    var kakashi = (function (_super) {
        __extends(kakashi, _super);
        function kakashi(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_kakashi";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        } // end 
        kakashi.prototype.setFighterCtrler = function (param1) {
            this._fighteCtrler = param1;
            return;
        }; // end 
        kakashi.prototype.setFighterMcCtrler = function (param1) {
            this._mcCtrler = param1;
            return;
        }; // end 
        kakashi.prototype.setEffectCtrler = function (param1) {
            this._effectCtrl = param1;
            //设置必杀脸
            this._effectCtrl.setBishaFace("卡卡西1", RES.getRes("kakashi_bsface1_png"));
            this._effectCtrl.setBishaFace("卡卡西2", RES.getRes("kakashi_bsface2_png"));
            this._effectCtrl.setBishaFace("卡卡西3", RES.getRes("kakashi_bsface3_png"));
            return;
        }; // end 
        kakashi.prototype.frame1 = function () {
            return;
        }; // end 
        kakashi.prototype.frame2 = function () {
            if (!this._fighteCtrler) {
                return;
            }
            this._fighteCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 5, hity: 4, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("tz", { power: 50, hitType: 6, hitx: 4, hity: 4, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("k1", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k2", { power: 20, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k21", { power: 20, hitType: 2, hitx: 4, hity: -3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k3", { power: 60, hitType: 3, hitx: 7, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh2", { power: 80, hitType: 6, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("kj1", { power: 80, hitType: 6, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("kj2", { power: 40, hitType: 2, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("kj22", { power: 80, hitType: 3, hitx: 10, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("zh1", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh12", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh13", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("zh14", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh31", { power: 40, hitType: 1, hitx: 4, hity: -2, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh32", { power: 40, hitType: 3, hitx: 10, hity: -13, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh3", { power: 60, hitType: 3, hitx: 8, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("sbs", { power: 30, hitType: 4, hitx: 8, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("sbs2", { power: 30, hitType: 4, hitx: 8, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("bs", { power: 180, hitType: 9, hitx: 10, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("bs1", { power: 50, hitType: 4, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("cbs1", { power: 10, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("cbs", { power: 400, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: -10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.speed = 20;
            this._fighteCtrler.jumpPower = 16;
            this._fighteCtrler.heavy = 3;
            this._fighteCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_kakashi.Timeline_1(this.mc);
            this._fighteCtrler.initMc(this.mc);
            return;
        }; // end 
        return kakashi;
    }(zmovie.ZMovieClip));
    hero_kakashi.kakashi = kakashi;
    __reflect(kakashi.prototype, "hero_kakashi.kakashi");
})(hero_kakashi || (hero_kakashi = {}));
//# sourceMappingURL=kakashi.js.map