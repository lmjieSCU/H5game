var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_uryuu;
(function (hero_uryuu) {
    var Timeline_13 = (function () {
        function Timeline_13(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3, 5, this.frame6, 6, this.frame7, 12, this.frame13]);
            return;
        } // end function
        Timeline_13.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_13.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_13.prototype.frame2 = function () {
            this.attacker_ctrler.move(0, 30);
            return;
        }; // end function
        Timeline_13.prototype.frame3 = function () {
            this.attacker_ctrler.setTouchFloor("击地");
            return;
        }; // end function
        Timeline_13.prototype.frame6 = function () {
            this.attacker_ctrler.stop();
            return;
        }; // end function
        Timeline_13.prototype.frame7 = function () {
            this.attacker_ctrler.effect.shake(0, 3);
            return;
        }; // end function
        Timeline_13.prototype.frame13 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_13;
    }());
    hero_uryuu.Timeline_13 = Timeline_13;
    __reflect(Timeline_13.prototype, "hero_uryuu.Timeline_13");
})(hero_uryuu || (hero_uryuu = {}));
//# sourceMappingURL=Timeline_13.js.map