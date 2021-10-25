var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_sasuke;
(function (hero_sasuke) {
    var Timeline_9 = (function () {
        function Timeline_9(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 13, this.frame14]);
            return;
        } // end function
        Timeline_9.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_9.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_9.prototype.frame14 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_9;
    }());
    hero_sasuke.Timeline_9 = Timeline_9;
    __reflect(Timeline_9.prototype, "hero_sasuke.Timeline_9");
})(hero_sasuke || (hero_sasuke = {}));
//# sourceMappingURL=Timeline_9.js.map