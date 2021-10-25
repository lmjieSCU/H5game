var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_karin;
(function (hero_karin) {
    var Timeline_15 = (function () {
        function Timeline_15(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [1, this.frame2, 3, this.frame4, 4, this.frame5, 5, this.frame5, 23, this.frame24]);
            return;
        } // end function
        Timeline_15.prototype.setAttackerCtrler = function (param1) {
            this.attacker_ctrler = param1;
            return;
        }; // end function
        Timeline_15.prototype.frame2 = function () {
            this.attacker_ctrler.move(25, 0);
            this.attacker_ctrler.setHitTarget("hitmc", "hit");
            this.attacker_ctrler.setCrossMap(true);
            this.yy = this.mc.y;
            this.mc.checkAtmAnchor = true;
            this.mc.addUIFrameScript(this, [0, this.updateYY]);
            return;
        }; // end function
        Timeline_15.prototype.frame4 = function () {
            this.attacker_ctrler.stop();
            //this.attacker_ctrler.gotoAndPlay("hit");
            return;
        }; // end function
        Timeline_15.prototype.frame5 = function () {
            this.attacker_ctrler.move(0, 0);
            this.attacker_ctrler.moveToTarget(0);
            return;
        }; // end function
        Timeline_15.prototype.frame24 = function () {
            SoundCtrl.I.playZmovieSound("hero_karin", "l_67");
        };
        Timeline_15.prototype.updateYY = function () {
            this.mc.y = this.yy;
        };
        return Timeline_15;
    }());
    hero_karin.Timeline_15 = Timeline_15;
    __reflect(Timeline_15.prototype, "hero_karin.Timeline_15");
})(hero_karin || (hero_karin = {}));
//# sourceMappingURL=Timeline_15.js.map