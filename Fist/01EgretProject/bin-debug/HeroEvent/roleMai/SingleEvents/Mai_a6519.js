var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6519 = (function () {
    function Mai_a6519() {
        this.firstCall = true;
        return;
    }
    Mai_a6519.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6519.Firstowner == null) {
            Mai_a6519.Firstowner = owner;
            Mai_a6519.instance_First = new Mai_a6519();
            _level0.instance_First.push(this);
            return Mai_a6519.instance_First;
        }
        else if (Mai_a6519.Firstowner == owner) {
            if (firstCall) {
                Mai_a6519.instance_First.firstCall = true;
            }
            return Mai_a6519.instance_First;
        }
        else {
            if (Mai_a6519.instance_Second == null) {
                Mai_a6519.instance_Second = new Mai_a6519();
            }
            if (firstCall) {
                Mai_a6519.instance_Second.firstCall = true;
            }
            return Mai_a6519.instance_Second;
        }
    };
    Mai_a6519.addEventa6519 = function (MC, own_role) {
        var a6519 = Mai_a6519.getInstance(own_role, false);
        if (!a6519.firstCall) {
            return;
        }
        if (own_role.isKO) {
            return undefined;
        }
        a6519.firstCall = false;
        MC.visible = false;
        var num = a6519.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a6519.soundArray[id];
        if (soundName == "none") {
            return undefined;
        }
        var music = new egret.Sound();
        if (RES.getRes(soundName) != null) {
            music = RES.getRes(soundName + "_mp3");
            music.play(a6519.startPos, a6519.loop);
        }
    };
    return Mai_a6519;
}());
__reflect(Mai_a6519.prototype, "Mai_a6519");
//# sourceMappingURL=Mai_a6519.js.map