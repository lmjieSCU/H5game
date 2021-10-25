var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a8585 = (function () {
    function Terry_a8585() {
        this.firstCall = true;
        return;
    }
    Terry_a8585.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a8585.Firstowner == null) {
            Terry_a8585.Firstowner = owner;
            Terry_a8585.instance_First = new Terry_a8585();
            _level0.instance_First.push(this);
            return Terry_a8585.instance_First;
        }
        else if (Terry_a8585.Firstowner == owner) {
            if (firstCall) {
                Terry_a8585.instance_First.firstCall = true;
            }
            return Terry_a8585.instance_First;
        }
        else {
            if (Terry_a8585.instance_Second == null) {
                Terry_a8585.instance_Second = new Terry_a8585();
            }
            if (firstCall) {
                Terry_a8585.instance_Second.firstCall = true;
            }
            return Terry_a8585.instance_Second;
        }
    };
    Terry_a8585.addEventa8585 = function (MC, own_role) {
        var a8669 = Terry_a8585.getInstance(own_role, false);
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        MC.visible = false;
        var num = a8669.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a8669.soundArray[id];
        if (soundName == "none") {
            return undefined;
        }
        // var sound_snd = new Sound(this);
        // sound_snd.attachSound(soundName);
        // sound_snd.start(startPos,loop);
        // return;
    };
    return Terry_a8585;
}());
__reflect(Terry_a8585.prototype, "Terry_a8585");
//# sourceMappingURL=Terry_a8585.js.map