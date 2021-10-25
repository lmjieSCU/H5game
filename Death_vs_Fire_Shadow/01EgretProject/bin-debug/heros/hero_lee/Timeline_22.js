var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
var hero_lee;
(function (hero_lee) {
    var Timeline_22 = (function () {
        function Timeline_22(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [22, this.frame23]);
        }
        Timeline_22.prototype.frame23 = function () {
            this.mc.stop();
            this.mc.parent.removeChild(this.mc);
            return;
        };
        return Timeline_22;
    }());
    hero_lee.Timeline_22 = Timeline_22;
    __reflect(Timeline_22.prototype, "hero_lee.Timeline_22");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=Timeline_22.js.map