var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*招1子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_sasuke_xz;
(function (hero_sasuke_xz) {
    var Timeline_13 = (function () {
        function Timeline_13(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 35, this.frame36, 37, this.frame38, 47, this.frame48]);
        }
        Timeline_13.prototype.frame1 = function () {
            return;
        };
        Timeline_13.prototype.frame2 = function () {
            this.attacker_ctrler.move(8, 0);
            this.attacker_ctrler.setHitTarget("zh10atm", "hit");
            return;
        };
        Timeline_13.prototype.frame36 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        };
        Timeline_13.prototype.frame38 = function () {
            this.attacker_ctrler.damping(10, 0);
            return;
        };
        Timeline_13.prototype.frame48 = function () {
            this.attacker_ctrler.endAct();
            return;
        };
        Timeline_13.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_13;
    }());
    hero_sasuke_xz.Timeline_13 = Timeline_13;
    __reflect(Timeline_13.prototype, "hero_sasuke_xz.Timeline_13");
})(hero_sasuke_xz || (hero_sasuke_xz = {}));
//# sourceMappingURL=Timeline_13.js.map