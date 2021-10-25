var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3565 = (function () {
    function Moriya_a3565() {
        this.firstCall = true;
        return;
    }
    Moriya_a3565.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3565.Firstowner == null) {
            Moriya_a3565.Firstowner = owner;
            Moriya_a3565.instance_First = new Moriya_a3565();
            _level0.instance_First.push(this);
            return Moriya_a3565.instance_First;
        }
        else if (Moriya_a3565.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3565.instance_First.firstCall = true;
            }
            return Moriya_a3565.instance_First;
        }
        else {
            if (Moriya_a3565.instance_Second == null) {
                Moriya_a3565.instance_Second = new Moriya_a3565();
            }
            if (firstCall) {
                Moriya_a3565.instance_Second.firstCall = true;
            }
            return Moriya_a3565.instance_Second;
        }
    };
    Moriya_a3565.addEventa3565 = function (MC, own_role) {
        var a3565 = Moriya_a3565.getInstance(own_role, false);
        if (!a3565.firstCall) {
            return;
        }
        a3565.firstCall = false;
        MC.visible = false;
        if (a3565.soundArray == undefined) {
            return;
        }
        var num = a3565.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a3565.soundArray[id];
        if (soundName == "none") {
            return undefined;
        }
        var music = new egret.Sound();
        if (RES.getRes(soundName) != null) {
            music = RES.getRes(soundName);
            music.play(a3565.startPos, a3565.loop);
        }
    };
    return Moriya_a3565;
}());
__reflect(Moriya_a3565.prototype, "Moriya_a3565");
//# sourceMappingURL=Moriya_a3565.js.map