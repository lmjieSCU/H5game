var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_Asuna;
(function (hero_Asuna) {
    var Timeline_472 = (function () {
        function Timeline_472(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 50, this.frame51]);
            return;
        } // end function
        Timeline_472.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_472.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_472.prototype.frame51 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_472;
    }());
    hero_Asuna.Timeline_472 = Timeline_472;
    __reflect(Timeline_472.prototype, "hero_Asuna.Timeline_472");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Timeline_472.js.map