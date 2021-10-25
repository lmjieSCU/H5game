var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a14862 = (function () {
    function Chunli_a14862() {
        this.firstCall = true;
        return;
    }
    Chunli_a14862.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a14862.Firstowner == null) {
            Chunli_a14862.Firstowner = owner;
            Chunli_a14862.instance_First = new Chunli_a14862();
            _level0.instance_First.push(this);
            return Chunli_a14862.instance_First;
        }
        else if (Chunli_a14862.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14862.instance_First.firstCall = true;
            }
            return Chunli_a14862.instance_First;
        }
        else {
            if (Chunli_a14862.instance_Second == null) {
                Chunli_a14862.instance_Second = new Chunli_a14862();
            }
            if (firstCall) {
                Chunli_a14862.instance_Second.firstCall = true;
            }
            return Chunli_a14862.instance_Second;
        }
    };
    Chunli_a14862.addEventa14862 = function (MC, own_role) {
        var a14862 = Chunli_a14862.getInstance(own_role, false);
        if (!a14862.firstCall) {
            return;
        }
        a14862.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a14862.status_1, a14862.flag, a14862.land, a14862.hurt, a14862.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Chunli_a14862;
}());
__reflect(Chunli_a14862.prototype, "Chunli_a14862");
//# sourceMappingURL=Chunli_a14862.js.map