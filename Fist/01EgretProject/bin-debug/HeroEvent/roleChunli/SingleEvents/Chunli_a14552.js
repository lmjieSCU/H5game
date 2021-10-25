var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a14552 = (function () {
    function Chunli_a14552() {
        this.firstCall = true;
        return;
    }
    ;
    Chunli_a14552.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a14552.Firstowner == null) {
            Chunli_a14552.Firstowner = owner;
            Chunli_a14552.instance_First = new Chunli_a14552();
            _level0.instance_First.push(this);
            return Chunli_a14552.instance_First;
        }
        else if (Chunli_a14552.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14552.instance_First.firstCall = true;
            }
            return Chunli_a14552.instance_First;
        }
        else {
            if (Chunli_a14552.instance_Second == null) {
                Chunli_a14552.instance_Second = new Chunli_a14552();
            }
            if (firstCall) {
                Chunli_a14552.instance_Second.firstCall = true;
            }
            return Chunli_a14552.instance_Second;
        }
    };
    Chunli_a14552.addEventa14552 = function (MC, own_role) {
        var a14552 = Chunli_a14552.getInstance(own_role, false);
        if (!a14552.firstCall) {
            return;
        }
        a14552.firstCall = false;
        MC.visible = false;
        // var num = a14552.soundArray.length;
        // var id = Math.floor(Math.random() * num);
        // var soundName = a14552.soundArray[id];
        // if(soundName == "none")
        // {
        // return undefined;
        // }
        // var sound_snd = new Sound(this);
        // sound_snd.attachSound(soundName);
        // sound_snd.start(startPos,loop);
        // return;
    };
    return Chunli_a14552;
}());
__reflect(Chunli_a14552.prototype, "Chunli_a14552");
//# sourceMappingURL=Chunli_a14552.js.map