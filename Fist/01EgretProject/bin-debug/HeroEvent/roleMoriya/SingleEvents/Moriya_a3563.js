var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3563 = (function () {
    function Moriya_a3563() {
        this.firstCall = true;
        return;
    }
    Moriya_a3563.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3563.Firstowner == null) {
            Moriya_a3563.Firstowner = owner;
            Moriya_a3563.instance_First = new Moriya_a3563();
            _level0.instance_First.push(this);
            return Moriya_a3563.instance_First;
        }
        else if (Moriya_a3563.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3563.instance_First.firstCall = true;
            }
            return Moriya_a3563.instance_First;
        }
        else {
            if (Moriya_a3563.instance_Second == null) {
                Moriya_a3563.instance_Second = new Moriya_a3563();
            }
            if (firstCall) {
                Moriya_a3563.instance_Second.firstCall = true;
            }
            return Moriya_a3563.instance_Second;
        }
    };
    Moriya_a3563.addEventa3563 = function (MC, own_role) {
        var a3563 = Moriya_a3563.getInstance(own_role, false);
        if (a3563.flag == null) {
            console.log("flag is null in a3563");
            return;
        }
        if (!a3563.firstCall) {
            return;
        }
        a3563.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a3563.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    };
    return Moriya_a3563;
}());
__reflect(Moriya_a3563.prototype, "Moriya_a3563");
//# sourceMappingURL=Moriya_a3563.js.map