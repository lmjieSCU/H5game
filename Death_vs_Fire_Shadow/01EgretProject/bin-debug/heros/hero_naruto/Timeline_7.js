var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*砍技2,第一个分身子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_7 = (function () {
        function Timeline_7(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 6, this.frame7, 19, this.frame20]);
        }
        Timeline_7.prototype.frame1 = function () {
            return;
        };
        Timeline_7.prototype.frame2 = function () {
            this.attacker_ctrler.move(20);
            return;
        }; // end function
        Timeline_7.prototype.frame7 = function () {
            this.attacker_ctrler.damping(2);
            return;
        }; // end function
        Timeline_7.prototype.frame20 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        Timeline_7.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_7;
    }());
    hero_naruto.Timeline_7 = Timeline_7;
    __reflect(Timeline_7.prototype, "hero_naruto.Timeline_7");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_7.js.map