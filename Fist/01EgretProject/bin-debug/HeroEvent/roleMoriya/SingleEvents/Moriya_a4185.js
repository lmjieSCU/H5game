var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4185 = (function () {
    function Moriya_a4185() {
        this.firstCall = true;
        return;
    }
    Moriya_a4185.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4185.Firstowner == null) {
            Moriya_a4185.Firstowner = owner;
            Moriya_a4185.instance_First = new Moriya_a4185();
            _level0.instance_First.push(this);
            return Moriya_a4185.instance_First;
        }
        else if (Moriya_a4185.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4185.instance_First.firstCall = true;
            }
            return Moriya_a4185.instance_First;
        }
        else {
            if (Moriya_a4185.instance_Second == null) {
                Moriya_a4185.instance_Second = new Moriya_a4185();
            }
            if (firstCall) {
                Moriya_a4185.instance_Second.firstCall = true;
            }
            return Moriya_a4185.instance_Second;
        }
    };
    Moriya_a4185.addEventa4185 = function (MC, own_role) {
        var a4185 = Moriya_a4185.getInstance(own_role, false);
        if (!a4185.firstCall) {
            return;
        }
        a4185.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a4185.attFrame, a4185.endFrame, a4185.S, a4185.Vx);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a4185;
}());
__reflect(Moriya_a4185.prototype, "Moriya_a4185");
//# sourceMappingURL=Moriya_a4185.js.map