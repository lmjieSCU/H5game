var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*必杀子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_sasuke_xz;
(function (hero_sasuke_xz) {
    var Timeline_15 = (function () {
        function Timeline_15(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 22, this.frame23, 24, this.frame25, 27, this.frame28]);
            ;
        }
        Timeline_15.prototype.frame1 = function () {
            return;
        };
        Timeline_15.prototype.frame2 = function () {
            this.attacker_ctrler.move(13, 0);
            this.attacker_ctrler.setHitTarget("mian", "hit");
            return;
        };
        Timeline_15.prototype.frame23 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        };
        Timeline_15.prototype.frame25 = function () {
            this.attacker_ctrler.move(5, 0);
            this.attacker_ctrler.damping(0.1, 0);
            return;
        };
        Timeline_15.prototype.frame28 = function () {
            this.attacker_ctrler.endAct();
            return;
        };
        Timeline_15.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_15;
    }());
    hero_sasuke_xz.Timeline_15 = Timeline_15;
    __reflect(Timeline_15.prototype, "hero_sasuke_xz.Timeline_15");
})(hero_sasuke_xz || (hero_sasuke_xz = {}));
//# sourceMappingURL=Timeline_15.js.map