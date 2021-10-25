var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6541 = (function () {
    function Mai_a6541() {
        this.firstCall = true;
        return;
    }
    Mai_a6541.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6541.Firstowner == null) {
            Mai_a6541.Firstowner = owner;
            Mai_a6541.instance_First = new Mai_a6541();
            _level0.instance_First.push(this);
            return Mai_a6541.instance_First;
        }
        else if (Mai_a6541.Firstowner == owner) {
            if (firstCall) {
                Mai_a6541.instance_First.firstCall = true;
            }
            return Mai_a6541.instance_First;
        }
        else {
            if (Mai_a6541.instance_Second == null) {
                Mai_a6541.instance_Second = new Mai_a6541();
            }
            if (firstCall) {
                Mai_a6541.instance_Second.firstCall = true;
            }
            return Mai_a6541.instance_Second;
        }
    };
    Mai_a6541.addEventa6541 = function (MC, own_role) {
        var a6541 = Mai_a6541.getInstance(own_role, false);
        if (!a6541.firstCall) {
            return;
        }
        a6541.firstCall = false;
        MC.visible = false;
        if (a6541.soundArray == undefined) {
            return;
        }
        var num = a6541.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a6541.soundArray[id];
        if (soundName == "none") {
            return undefined;
        }
        var music = new egret.Sound();
        if (RES.getRes(soundName) != null) {
            music = RES.getRes(soundName);
            music.play(a6541.startPos, a6541.loop);
        }
    };
    return Mai_a6541;
}());
__reflect(Mai_a6541.prototype, "Mai_a6541");
//# sourceMappingURL=Mai_a6541.js.map