var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_obito;
(function (hero_obito) {
    var Timeline_6 = (function () {
        function Timeline_6(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 58, this.frame59]);
            return;
        } // end function
        Timeline_6.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_6.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_6.prototype.frame59 = function () {
            if (this.attacker_ctrler.owner_fighter_ctrler.target) {
                this.attacker_ctrler.owner_fighter_ctrler.target.visible = true;
            }
            return;
        }; // end function
        return Timeline_6;
    }());
    hero_obito.Timeline_6 = Timeline_6;
    __reflect(Timeline_6.prototype, "hero_obito.Timeline_6");
})(hero_obito || (hero_obito = {}));
//# sourceMappingURL=Timeline_6.js.map