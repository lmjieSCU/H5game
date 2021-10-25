var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_lufei;
(function (hero_lufei) {
    var Timeline_16 = (function () {
        function Timeline_16(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 26, this.frame27]);
            return;
        } // end function
        Timeline_16.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_16.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_16.prototype.frame27 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_16;
    }());
    hero_lufei.Timeline_16 = Timeline_16;
    __reflect(Timeline_16.prototype, "hero_lufei.Timeline_16");
})(hero_lufei || (hero_lufei = {}));
//# sourceMappingURL=Timeline_16.js.map