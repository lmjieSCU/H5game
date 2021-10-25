var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_Asuna;
(function (hero_Asuna) {
    var Timeline_990 = (function () {
        function Timeline_990(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 28, this.frame29]);
            return;
        } // end function
        Timeline_990.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_990.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_990.prototype.frame29 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_990;
    }());
    hero_Asuna.Timeline_990 = Timeline_990;
    __reflect(Timeline_990.prototype, "hero_Asuna.Timeline_990");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Timeline_990.js.map