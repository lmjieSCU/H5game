var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*sbs子骨骼动画对应的帧事件
*/
var hero_kakashi;
(function (hero_kakashi) {
    var Timeline_10 = (function () {
        function Timeline_10(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2]);
            ;
        }
        Timeline_10.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_10.prototype.frame2 = function () {
            this.attacker_ctrler.move(20, 0);
            return;
        }; // end function
        Timeline_10.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_10;
    }());
    hero_kakashi.Timeline_10 = Timeline_10;
    __reflect(Timeline_10.prototype, "hero_kakashi.Timeline_10");
})(hero_kakashi || (hero_kakashi = {}));
//# sourceMappingURL=Timeline_10.js.map