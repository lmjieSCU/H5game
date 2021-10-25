var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_toushirou;
(function (hero_toushirou) {
    var Timeline_6 = (function () {
        function Timeline_6(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 86, this.frame87]);
            return;
        } // end function
        //
        Timeline_6.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_6.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_6.prototype.frame87 = function () {
            this.attacker_ctrler.effect.shine();
            return;
        }; // end function
        return Timeline_6;
    }());
    hero_toushirou.Timeline_6 = Timeline_6;
    __reflect(Timeline_6.prototype, "hero_toushirou.Timeline_6");
})(hero_toushirou || (hero_toushirou = {}));
//# sourceMappingURL=Timeline_6.js.map