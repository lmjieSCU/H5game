var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*cbs子骨骼动画对应的帧事件
*/
var hero_kakashi;
(function (hero_kakashi) {
    var Timeline_11 = (function () {
        function Timeline_11(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 36, this.frame37, 40, this.frame41, 54, this.frame55]);
            ;
        }
        Timeline_11.prototype.frame1 = function () {
            this._isHit = false;
            return;
        }; // end function
        Timeline_11.prototype.frame37 = function () {
            if (this.attacker_ctrler.justHit("cbs1")) {
                this.target = this.attacker_ctrler.owner_fighter_ctrler.getTargetSP();
                if (this.target) {
                    this.hitTarget = this.target;
                    this.target.isApplyG = false;
                    this.target.getDisplay().visible = false;
                    this._isHit = true;
                }
            }
            return;
        }; // end function
        Timeline_11.prototype.frame41 = function () {
            if (!this._isHit) {
                this.attacker_ctrler.removeSelf();
            }
            return;
        }; // end function
        Timeline_11.prototype.frame55 = function () {
            if (this.hitTarget) {
                this.target.getDisplay().visible = true;
                this.target.isApplyG = true;
            }
            return;
        }; // end function
        Timeline_11.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_11;
    }());
    hero_kakashi.Timeline_11 = Timeline_11;
    __reflect(Timeline_11.prototype, "hero_kakashi.Timeline_11");
})(hero_kakashi || (hero_kakashi = {}));
//# sourceMappingURL=Timeline_11.js.map