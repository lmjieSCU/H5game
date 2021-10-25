var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_lee;
(function (hero_lee) {
    var Timeline_21 = (function () {
        function Timeline_21(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [36, this.frame37]);
        }
        Timeline_21.prototype.frame37 = function () {
            this.mc.stop();
            this.mc.parent.removeChild(this.mc);
            return;
        };
        return Timeline_21;
    }());
    hero_lee.Timeline_21 = Timeline_21;
    __reflect(Timeline_21.prototype, "hero_lee.Timeline_21");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=Timeline_21.js.map