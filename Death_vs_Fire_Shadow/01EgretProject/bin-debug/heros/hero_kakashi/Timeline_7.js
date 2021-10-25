var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*招2子骨骼动画对应的帧事件
*/
var hero_kakashi;
(function (hero_kakashi) {
    var Timeline_7 = (function () {
        function Timeline_7(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 16, this.frame17, 29, this.frame30, 39, this.frame40, 61, this.frame62, 62, this.frame63]);
        }
        Timeline_7.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_7.prototype.frame10 = function () {
            this.attacker_ctrler.move(20, 0);
            this.attacker_ctrler.setHitTarget("zh20atm", "hit");
            return;
        }; // end function
        Timeline_7.prototype.frame17 = function () {
            this.attacker_ctrler.damping(5, 0);
            return;
        }; // end function
        Timeline_7.prototype.frame30 = function () {
            this.attacker_ctrler.move(15, 0);
            return;
        }; // end function
        Timeline_7.prototype.frame40 = function () {
            this.attacker_ctrler.damping(5, 0);
            return;
        }; // end function
        Timeline_7.prototype.frame62 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        }; // end function
        Timeline_7.prototype.frame63 = function () {
            this.attacker_ctrler.damping(5, 0);
            return;
        }; // end function
        Timeline_7.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_7;
    }());
    hero_kakashi.Timeline_7 = Timeline_7;
    __reflect(Timeline_7.prototype, "hero_kakashi.Timeline_7");
})(hero_kakashi || (hero_kakashi = {}));
//# sourceMappingURL=Timeline_7.js.map