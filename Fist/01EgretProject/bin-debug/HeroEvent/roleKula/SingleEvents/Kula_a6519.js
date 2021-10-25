var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a6519 = (function () {
    function Kula_a6519() {
        this.firstCall = true;
        return;
    }
    Kula_a6519.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a6519.Firstowner == null) {
            Kula_a6519.Firstowner = owner;
            Kula_a6519.instance_First = new Kula_a6519();
            _level0.instance_First.push(this);
            return Kula_a6519.instance_First;
        }
        else if (Kula_a6519.Firstowner == owner) {
            if (firstCall) {
                Kula_a6519.instance_First.firstCall = true;
            }
            return Kula_a6519.instance_First;
        }
        else {
            if (Kula_a6519.instance_Second == null) {
                Kula_a6519.instance_Second = new Kula_a6519();
            }
            if (firstCall) {
                Kula_a6519.instance_Second.firstCall = true;
            }
            return Kula_a6519.instance_Second;
        }
    };
    Kula_a6519.addEventa6519 = function (MC, own_role) {
        var a6519 = Kula_a6519.getInstance(own_role, false);
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
    return Kula_a6519;
}());
__reflect(Kula_a6519.prototype, "Kula_a6519");
//# sourceMappingURL=Kula_a6519.js.map