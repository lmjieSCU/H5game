var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3555 = (function () {
    function Moriya_a3555() {
        this.firstCall = true;
        return;
    }
    Moriya_a3555.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3555.Firstowner == null) {
            Moriya_a3555.Firstowner = owner;
            Moriya_a3555.instance_First = new Moriya_a3555();
            _level0.instance_First.push(this);
            return Moriya_a3555.instance_First;
        }
        else if (Moriya_a3555.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3555.instance_First.firstCall = true;
            }
            return Moriya_a3555.instance_First;
        }
        else {
            if (Moriya_a3555.instance_Second == null) {
                Moriya_a3555.instance_Second = new Moriya_a3555();
            }
            if (firstCall) {
                Moriya_a3555.instance_Second.firstCall = true;
            }
            return Moriya_a3555.instance_Second;
        }
    };
    Moriya_a3555.addEventa3555 = function (MC, own_role) {
        var a3555 = Moriya_a3555.getInstance(own_role, false);
        if (!a3555.firstCall) {
            return;
        }
        a3555.firstCall = false;
        MC.stop();
        MC.visible = false;
        var dx = own_role.x + MC.x * own_role.dir;
        var dy = own_role.y + MC.y;
        var f_time = 10;
        var bgType = "0";
        _level0.effect_mc.superStart(a3555.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a3555;
}());
__reflect(Moriya_a3555.prototype, "Moriya_a3555");
//# sourceMappingURL=Moriya_a3555.js.map