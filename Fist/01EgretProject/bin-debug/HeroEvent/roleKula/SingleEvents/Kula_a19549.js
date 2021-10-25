var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19549 = (function () {
    function Kula_a19549() {
        this.firstCall = true;
        return;
    }
    Kula_a19549.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19549.Firstowner == null) {
            Kula_a19549.Firstowner = owner;
            Kula_a19549.instance_First = new Kula_a19549();
            _level0.instance_First.push(this);
            return Kula_a19549.instance_First;
        }
        else if (Kula_a19549.Firstowner == owner) {
            if (firstCall) {
                Kula_a19549.instance_First.firstCall = true;
            }
            return Kula_a19549.instance_First;
        }
        else {
            if (Kula_a19549.instance_Second == null) {
                Kula_a19549.instance_Second = new Kula_a19549();
            }
            if (firstCall) {
                Kula_a19549.instance_Second.firstCall = true;
            }
            return Kula_a19549.instance_Second;
        }
    };
    Kula_a19549.addEventa19549 = function (MC, own_role) {
        var a19549 = Kula_a19549.getInstance(own_role, false);
        if (!a19549.firstCall) {
            return;
        }
        a19549.firstCall = false;
        MC.visible = false;
        if (a19549.soundArray == undefined) {
            return;
        }
        var num = a19549.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a19549.soundArray[id];
        if (soundName == "none") {
            return undefined;
        }
        var music = new egret.Sound();
        if (RES.getRes(soundName) != null) {
            music = RES.getRes(soundName);
            music.play(a19549.startPos, a19549.loop);
        }
    };
    return Kula_a19549;
}());
__reflect(Kula_a19549.prototype, "Kula_a19549");
//# sourceMappingURL=Kula_a19549.js.map