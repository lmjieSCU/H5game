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
*sasuke_xz主骨骼动画对应的帧事件,选择对应形态
*/
var hero_sasuke_xz;
(function (hero_sasuke_xz) {
    var sasuke_xz = (function (_super) {
        __extends(sasuke_xz, _super);
        function sasuke_xz(imgArr, libObj, mcName, scale_) {
            if (mcName === void 0) { mcName = null; }
            if (scale_ === void 0) { scale_ = 1; }
            var _this = _super.call(this, imgArr, libObj, mcName, scale_) || this;
            _this._name = "hero_sasuke_xz";
            _this.addFrameScript(_this, [0, _this.frame1, 1, _this.frame2]);
            return _this;
        }
        sasuke_xz.prototype.setFighterCtrler = function (param1) {
            this._FighterCtrler = param1;
        };
        sasuke_xz.prototype.setFighterMcCtrler = function (param1) {
            this._mcctrl = param1;
        };
        sasuke_xz.prototype.setEffectCtrler = function (param1) {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("须佐助1", RES.getRes("sasuke_xz_bsface1_png"));
            this._EffectCtrl.setBishaFace("须佐助2", RES.getRes("sasuke_xz_bsface2_png"));
        };
        sasuke_xz.prototype.frame1 = function () {
            return;
        };
        sasuke_xz.prototype.frame2 = function () {
            if (!this._FighterCtrler) {
                return;
            }
            this._FighterCtrler.defineAction("tk", { "power": 30, "hitType": 9, "hitx": 2, "hity": 0, "hurtTime": 500, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("tz", { "power": 130, "hitType": 7, "hitx": 5, "hity": 10, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("k1", { "power": 20, "hitType": 1, "hitx": 4, "hity": 0, "hurtTime": 300, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("k2", { "power": 20, "hitType": 1, "hitx": 4, "hity": 0, "hurtTime": 400, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("k3", { "power": 40, "hitType": 1, "hitx": 6, "hity": 0, "hurtTime": 500, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("k4", { "power": 60, "hitType": 6, "hitx": 8, "hity": -7, "hurtTime": 500, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("k5", { "power": 80, "hitType": 7, "hitx": 8, "hity": -8, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("kj1", { "power": 30, "hitType": 1, "hitx": 2, "hity": 0, "hurtTime": 700, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("kj11", { "power": 40, "hitType": 9, "hitx": 0, "hity": 0, "hurtTime": 600, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("kj12", { "power": 80, "hitType": 7, "hitx": 5, "hity": -4, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("kj21", { "power": 30, "hitType": 2, "hitx": 3, "hity": 0, "hurtTime": 600, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("kj2", { "power": 30, "hitType": 7, "hitx": 10, "hity": 5, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh1", { "power": 100, "hitType": 7, "hitx": 7, "hity": 0, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh11", { "power": 10, "hitType": 2, "hitx": 1, "hity": 0, "hurtTime": 400, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh2", { "power": 50, "hitType": 5, "hitx": 4, "hity": 0, "hurtTime": 800, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh21", { "power": 50, "hitType": 5, "hitx": 4, "hity": -7, "hurtTime": 800, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh22", { "power": 50, "hitType": 5, "hitx": 7, "hity": 9, "hurtTime": 0, "hurtType": 1, "isBreakDef": true });
            this._FighterCtrler.defineAction("zh3", { "power": 60, "hitType": 3, "hitx": 5, "hity": -8, "hurtTime": 600, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("zh31", { "power": 30, "hitType": 2, "hitx": 3, "hity": -3, "hurtTime": 400, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("bs", { "power": 280, "hitType": 7, "hitx": 10, "hity": -10, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("sbs", { "power": 260, "hitType": 7, "hitx": 12, "hity": -8, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("kbs", { "power": 260, "hitType": 7, "hitx": 10, "hity": 10, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("cbs1", { "power": 150, "hitType": 5, "hitx": 0, "hity": 0, "hurtTime": 1000, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("cbs2", { "power": 150, "hitType": 7, "hitx": 0, "hity": -3, "hurtTime": 1000, "hurtType": 0, "isBreakDef": true });
            this._FighterCtrler.defineAction("cbs3", { "power": 20, "hitType": 4, "hitx": 0, "hity": -2, "hurtTime": 1000, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("cbs", { "power": 20, "hitType": 4, "hitx": 5, "hity": -10, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineAction("sh1", { "power": 0, "hitType": 11, "hitx": 0, "hity": 0, "hurtTime": 1000, "hurtType": 0, "isBreakDef": true });
            this._FighterCtrler.defineAction("sh12", { "power": 50, "hitType": 9, "hitx": 3, "hity": -2, "hurtTime": 1000, "hurtType": 0, "isBreakDef": false });
            this._FighterCtrler.defineAction("sh2", { "power": 0, "hitType": 11, "hitx": 0, "hity": 0, "hurtTime": 1000, "hurtType": 0, "isBreakDef": true });
            this._FighterCtrler.defineAction("sh22", { "power": 150, "hitType": 7, "hitx": 0, "hity": -8, "hurtTime": 0, "hurtType": 1, "isBreakDef": false });
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 22; //移动速度,越快水平移动越快,均+10
            this._FighterCtrler.jumpPower = 15; //跳跃力,越大跳跃高度越高
            this._FighterCtrler.heavy = 3; //重力,越大下降越快,但applayG()中会设置上限,同时影响推动距离
            this._FighterCtrler.defenseType = 1;
            this.mc = this.getChildByName("mc");
            new hero_sasuke_xz.Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
        };
        return sasuke_xz;
    }(zmovie.ZMovieClip));
    hero_sasuke_xz.sasuke_xz = sasuke_xz;
    __reflect(sasuke_xz.prototype, "hero_sasuke_xz.sasuke_xz");
})(hero_sasuke_xz || (hero_sasuke_xz = {}));
//# sourceMappingURL=sasuke_xz.js.map