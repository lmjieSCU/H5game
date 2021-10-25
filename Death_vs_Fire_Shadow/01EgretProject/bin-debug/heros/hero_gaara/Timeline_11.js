var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_gaara;
(function (hero_gaara) {
    var Timeline_11 = (function () {
        function Timeline_11(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 61, this.frame62, 108, this.frame109]);
            return;
        } // end function
        Timeline_11.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_11.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_11.prototype.frame10 = function () {
            this.attacker_ctrler.stop();
            return;
        }; // end function
        Timeline_11.prototype.frame62 = function () {
            this.attacker_ctrler.owner_fighter_ctrler.setTargetVelocity(0, -0.1);
            this.attacker_ctrler.owner_fighter_ctrler.setTargetDamping(0, 0);
            return;
        }; // end function
        Timeline_11.prototype.frame109 = function () {
            this.attacker_ctrler.gotoAndPlay("end");
            return;
        }; // end function
        return Timeline_11;
    }());
    hero_gaara.Timeline_11 = Timeline_11;
    __reflect(Timeline_11.prototype, "hero_gaara.Timeline_11");
})(hero_gaara || (hero_gaara = {}));
//# sourceMappingURL=Timeline_11.js.map