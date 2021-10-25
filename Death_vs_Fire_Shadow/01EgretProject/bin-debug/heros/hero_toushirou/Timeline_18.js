var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_toushirou;
(function (hero_toushirou) {
    var Timeline_18 = (function () {
        function Timeline_18(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1]);
            return;
        } // end function
        Timeline_18.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_18.prototype.frame1 = function () {
            return;
        }; // end function
        return Timeline_18;
    }());
    hero_toushirou.Timeline_18 = Timeline_18;
    __reflect(Timeline_18.prototype, "hero_toushirou.Timeline_18");
})(hero_toushirou || (hero_toushirou = {}));
//# sourceMappingURL=Timeline_18.js.map