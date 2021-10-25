var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_gaara;
(function (hero_gaara) {
    var Timeline_9 = (function () {
        function Timeline_9(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 16, this.frame17, 61, this.frame62, 80, this.frame81, 85, this.frame86]);
            return;
        } // end function
        Timeline_9.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_9.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_9.prototype.frame17 = function () {
            return;
        }; // end function
        Timeline_9.prototype.frame62 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        }; // end function
        Timeline_9.prototype.frame81 = function () {
            this.attacker_ctrler.stop();
            return;
        }; // end function
        Timeline_9.prototype.frame86 = function () {
            var fighterCtrler = this.attacker_ctrler.owner_fighter_ctrler;
            if (fighterCtrler) {
                if (fighterCtrler.target) {
                    fighterCtrler.target.visible = true;
                }
            }
            return;
        }; // end function
        return Timeline_9;
    }());
    hero_gaara.Timeline_9 = Timeline_9;
    __reflect(Timeline_9.prototype, "hero_gaara.Timeline_9");
})(hero_gaara || (hero_gaara = {}));
//# sourceMappingURL=Timeline_9.js.map