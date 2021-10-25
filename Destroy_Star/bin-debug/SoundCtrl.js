var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundCtrl = (function () {
    function SoundCtrl() {
        this.Bgtag = true;
    }
    SoundCtrl.prototype.BGplay = function (name) {
        this.BGclose();
        if (this.Bgtag) {
            this.bgmusic = new egret.Sound;
            this.bgmusic = RES.getRes(name + "_wav");
            this.bgmusicch = this.bgmusic.play(0, -1);
        }
    };
    SoundCtrl.prototype.BGclose = function () {
        if (this.bgmusicch != null) {
            this.bgmusicch.stop();
        }
    };
    SoundCtrl.prototype.Effectplay = function (name) {
        this.effmusic = new egret.Sound;
        this.effmusic = RES.getRes(name + "_wav");
        this.effmusicch = this.effmusic.play(0, 1);
    };
    Object.defineProperty(SoundCtrl, "I", {
        get: function () {
            if (!SoundCtrl._i) {
                SoundCtrl._i = new SoundCtrl();
            }
            return SoundCtrl._i;
        },
        enumerable: true,
        configurable: true
    });
    return SoundCtrl;
}());
__reflect(SoundCtrl.prototype, "SoundCtrl");
//# sourceMappingURL=SoundCtrl.js.map