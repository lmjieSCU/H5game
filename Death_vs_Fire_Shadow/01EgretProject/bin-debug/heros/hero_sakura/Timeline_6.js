var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_sakura;
(function (hero_sakura) {
    var Timeline_6 = (function () {
        function Timeline_6(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 5, this.frame6, 9, this.frame10, 14, this.frame15, 24, this.frame25]);
            return;
        } // end function
        Timeline_6.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_6.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_6.prototype.frame2 = function () {
            this.attacker_ctrler.move(12, -7);
            this.attacker_ctrler.damping(0, 1);
            return;
        }; // end function
        Timeline_6.prototype.frame6 = function () {
            this.attacker_ctrler.setTouchFloor("touchfloor");
            return;
        }; // end function
        Timeline_6.prototype.frame10 = function () {
            this.attacker_ctrler.stop();
            return;
        }; // end function
        Timeline_6.prototype.frame15 = function () {
            this.attacker_ctrler.move(0, 0);
            this.attacker_ctrler.effect.shake(0, 3);
            return;
        }; // end function
        Timeline_6.prototype.frame25 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_6;
    }());
    hero_sakura.Timeline_6 = Timeline_6;
    __reflect(Timeline_6.prototype, "hero_sakura.Timeline_6");
})(hero_sakura || (hero_sakura = {}));
//# sourceMappingURL=Timeline_6.js.map