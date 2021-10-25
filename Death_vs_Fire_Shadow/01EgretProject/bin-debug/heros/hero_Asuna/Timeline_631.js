var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_Asuna;
(function (hero_Asuna) {
    var Timeline_631 = (function () {
        function Timeline_631(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 43, this.frame44]);
            return;
        } // end function
        Timeline_631.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_631.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_631.prototype.frame44 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_631;
    }());
    hero_Asuna.Timeline_631 = Timeline_631;
    __reflect(Timeline_631.prototype, "hero_Asuna.Timeline_631");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Timeline_631.js.map