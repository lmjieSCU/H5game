var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_juggo;
(function (hero_juggo) {
    var Timeline_11 = (function () {
        function Timeline_11(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 4, this.frame5, 5, this.frame6]);
            return;
        } // end function
        Timeline_11.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_11.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_11.prototype.frame2 = function () {
            this.attacker_ctrler.move(30, 0);
            this.attacker_ctrler.setHitTarget("hitmc", "hit");
            this.attacker_ctrler.setCrossMap(true);
            return;
        }; // end function
        Timeline_11.prototype.frame5 = function () {
            this.attacker_ctrler.stop();
            return;
        }; // end function
        Timeline_11.prototype.frame6 = function () {
            if (this.attacker_ctrler.owner_mc_ctrler) {
                var tu = this.attacker_ctrler.owner_mc_ctrler.getAttacker("tu");
                if (tu) {
                    tu.gotoAndPlay("bow");
                }
            }
            this.attacker_ctrler.move(0, 0);
            return;
        }; // end function
        return Timeline_11;
    }());
    hero_juggo.Timeline_11 = Timeline_11;
    __reflect(Timeline_11.prototype, "hero_juggo.Timeline_11");
})(hero_juggo || (hero_juggo = {}));
//# sourceMappingURL=Timeline_11.js.map