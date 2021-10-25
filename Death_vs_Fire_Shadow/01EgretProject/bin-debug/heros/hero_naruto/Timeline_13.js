var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*sbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_13 = (function () {
        function Timeline_13(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 50, this.frame51]);
        }
        Timeline_13.prototype.frame1 = function () {
            return;
        };
        Timeline_13.prototype.frame51 = function () {
            this.attacker_ctrler.endAct();
            return;
        }; // end function
        Timeline_13.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_13;
    }());
    hero_naruto.Timeline_13 = Timeline_13;
    __reflect(Timeline_13.prototype, "hero_naruto.Timeline_13");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_13.js.map