var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var assist_madara_Timeline_2 = (function () {
    function assist_madara_Timeline_2(_attackerCtrl) {
        this.setAttackerCtrler(_attackerCtrl);
        this.mc = _attackerCtrl._attacker_mc;
        this.mc.addFrameScript(this, [0, this.frame1, 11, this.frame12, 34, this.frame35]);
        return;
    } // end function
    assist_madara_Timeline_2.prototype.setAttackerCtrler = function (param1) {
        this.attacker_ctrler = param1;
        return;
    }; // end function
    assist_madara_Timeline_2.prototype.frame1 = function () {
        return;
    }; // end function
    assist_madara_Timeline_2.prototype.frame12 = function () {
        if (!this.attacker_ctrler.justHit("atm1")) {
            this.attacker_ctrler.gotoAndPlay("miss");
        }
        return;
    }; // end function
    assist_madara_Timeline_2.prototype.frame35 = function () {
        //this.attacker_ctrler.removeSelf();
        return;
    }; // end function
    return assist_madara_Timeline_2;
}());
__reflect(assist_madara_Timeline_2.prototype, "assist_madara_Timeline_2");
//# sourceMappingURL=assist_madara_Timeline_2.js.map