var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_juggo;
(function (hero_juggo) {
    var Symbol1_10 = (function () {
        function Symbol1_10(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 55, this.frame56]);
            return;
        } // end function
        Symbol1_10.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Symbol1_10.prototype.frame1 = function () {
            return;
        }; // end function
        Symbol1_10.prototype.frame16 = function () {
            if (this.attacker_ctrler.justHit("zh2") && this.attacker_ctrler.owner_mc_ctrler) {
                this.attacker_ctrler.owner_mc_ctrler.gotoAndPlay("招22");
            }
            else {
                this.attacker_ctrler.gotoAndPlay("miss");
            }
            return;
        }; // end function
        Symbol1_10.prototype.frame56 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        }; // end function
        return Symbol1_10;
    }());
    hero_juggo.Symbol1_10 = Symbol1_10;
    __reflect(Symbol1_10.prototype, "hero_juggo.Symbol1_10");
})(hero_juggo || (hero_juggo = {}));
//# sourceMappingURL=Symbol1_10.js.map