var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_lee;
(function (hero_lee) {
    var Timeline_18 = (function () {
        function Timeline_18(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [20, this.frame21]);
        }
        Timeline_18.prototype.frame21 = function () {
            this.mc.stop();
            this.mc.parent.removeChild(this.mc);
            return;
        };
        return Timeline_18;
    }());
    hero_lee.Timeline_18 = Timeline_18;
    __reflect(Timeline_18.prototype, "hero_lee.Timeline_18");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=Timeline_18.js.map