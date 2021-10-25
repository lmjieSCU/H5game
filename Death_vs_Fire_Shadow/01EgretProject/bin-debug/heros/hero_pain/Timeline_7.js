var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_pain;
(function (hero_pain) {
    var Timeline_7 = (function () {
        function Timeline_7(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 2, this.frame3, 14, this.frame15, 24, this.frame25]);
            return;
        } // end function
        Timeline_7.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_7.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_7.prototype.frame3 = function () {
            this.attacker_ctrler.move(5, 0);
            return;
        }; // end function
        Timeline_7.prototype.frame15 = function () {
            this.attacker_ctrler.damping(1, 0);
            return;
        }; // end function
        Timeline_7.prototype.frame25 = function () {
            this.attacker_ctrler.move(8, 0);
            this.attacker_ctrler.damping(0.8, 0);
            return;
        }; // end function
        return Timeline_7;
    }());
    hero_pain.Timeline_7 = Timeline_7;
    __reflect(Timeline_7.prototype, "hero_pain.Timeline_7");
})(hero_pain || (hero_pain = {}));
//# sourceMappingURL=Timeline_7.js.map