var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_15 = (function () {
        function Timeline_15(_attackerCtrl) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 39, this.frame40]);
        }
        Timeline_15.prototype.frame1 = function () {
            return;
        };
        Timeline_15.prototype.frame40 = function () {
            this.attacker_ctrler.removeSelf();
            return;
        }; // end function
        Timeline_15.prototype.setAttackerCtrler = function (param) {
            this.attacker_ctrler = param;
        };
        return Timeline_15;
    }());
    hero_naruto.Timeline_15 = Timeline_15;
    __reflect(Timeline_15.prototype, "hero_naruto.Timeline_15");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_15.js.map