var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_gaara;
(function (hero_gaara) {
    var Timeline_7 = (function () {
        function Timeline_7(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 3, this.frame4]);
            return;
        } // end function
        Timeline_7.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_7.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_7.prototype.frame4 = function () {
            this.attacker_ctrler.stopFollowTarget();
            return;
        }; // end function
        return Timeline_7;
    }());
    hero_gaara.Timeline_7 = Timeline_7;
    __reflect(Timeline_7.prototype, "hero_gaara.Timeline_7");
})(hero_gaara || (hero_gaara = {}));
//# sourceMappingURL=Timeline_7.js.map