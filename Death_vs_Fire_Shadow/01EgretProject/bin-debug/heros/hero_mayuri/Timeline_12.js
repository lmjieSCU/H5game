var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_mayuri;
(function (hero_mayuri) {
    var Timeline_12 = (function () {
        function Timeline_12(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 39, this.frame40, 41, this.frame42, 54, this.frame55]);
            return;
        } // end function
        Timeline_12.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_12.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_12.prototype.frame2 = function () {
            this.attacker_ctrler.move(10, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame40 = function () {
            this.attacker_ctrler.damping(2, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame42 = function () {
            this.attacker_ctrler.effect.shine(4580164);
            return;
        }; // end function
        Timeline_12.prototype.frame55 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_12;
    }());
    hero_mayuri.Timeline_12 = Timeline_12;
    __reflect(Timeline_12.prototype, "hero_mayuri.Timeline_12");
})(hero_mayuri || (hero_mayuri = {}));
//# sourceMappingURL=Timeline_12.js.map