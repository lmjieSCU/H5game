var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*砍技2,第二个分身子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_8 = (function () {
        function Timeline_8(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 14, this.frame15, 21, this.frame22]);
        }
        Timeline_8.prototype.frame1 = function () {
            return;
        };
        Timeline_8.prototype.frame2 = function () {
            this.attacker_ctrler.move(25);
            return;
        }; // end function
        Timeline_8.prototype.frame15 = function () {
            this.attacker_ctrler.damping(4);
            return;
        }; // end function
        Timeline_8.prototype.frame22 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        Timeline_8.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_8;
    }());
    hero_naruto.Timeline_8 = Timeline_8;
    __reflect(Timeline_8.prototype, "hero_naruto.Timeline_8");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_8.js.map