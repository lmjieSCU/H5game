var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_Asuna;
(function (hero_Asuna) {
    var Timeline_1704 = (function () {
        function Timeline_1704(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 16, this.frame17]);
            return;
        } // end function
        Timeline_1704.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_1704.prototype.frame1 = function () {
            return;
        }; // end function
        Timeline_1704.prototype.frame17 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        return Timeline_1704;
    }());
    hero_Asuna.Timeline_1704 = Timeline_1704;
    __reflect(Timeline_1704.prototype, "hero_Asuna.Timeline_1704");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Timeline_1704.js.map