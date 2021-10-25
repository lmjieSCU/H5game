var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3742 = (function () {
    function Moriya_a3742() {
        this.firstCall = true;
        return;
    }
    Moriya_a3742.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3742.Firstowner == null) {
            Moriya_a3742.Firstowner = owner;
            Moriya_a3742.instance_First = new Moriya_a3742();
            _level0.instance_First.push(this);
            return Moriya_a3742.instance_First;
        }
        else if (Moriya_a3742.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3742.instance_First.firstCall = true;
            }
            return Moriya_a3742.instance_First;
        }
        else {
            if (Moriya_a3742.instance_Second == null) {
                Moriya_a3742.instance_Second = new Moriya_a3742();
            }
            if (firstCall) {
                Moriya_a3742.instance_Second.firstCall = true;
            }
            return Moriya_a3742.instance_Second;
        }
    };
    Moriya_a3742.addEventa3742 = function (MC, own_role) {
        var a3742 = Moriya_a3742.getInstance(own_role, false);
        if (!a3742.firstCall) {
            return;
        }
        a3742.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a3742.status_1, a3742.flag, a3742.land, a3742.hurt, a3742.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a3742;
}());
__reflect(Moriya_a3742.prototype, "Moriya_a3742");
//# sourceMappingURL=Moriya_a3742.js.map