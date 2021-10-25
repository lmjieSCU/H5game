var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20424 = (function () {
    function Ryu_a20424() {
        this.firstCall = true;
        return;
    }
    Ryu_a20424.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20424.Firstowner == null) {
            Ryu_a20424.Firstowner = owner;
            Ryu_a20424.instance_First = new Ryu_a20424();
            _level0.instance_First.push(this);
            return Ryu_a20424.instance_First;
        }
        else if (Ryu_a20424.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20424.instance_First.firstCall = true;
            }
            return Ryu_a20424.instance_First;
        }
        else {
            if (Ryu_a20424.instance_Second == null) {
                Ryu_a20424.instance_Second = new Ryu_a20424();
            }
            if (firstCall) {
                Ryu_a20424.instance_Second.firstCall = true;
            }
            return Ryu_a20424.instance_Second;
        }
    };
    Ryu_a20424.addEventa20424 = function (MC, own_role) {
        var a20424 = Ryu_a20424.getInstance(own_role, false);
        if (a20424.flag == null) {
            console.log("flag is null in a20424");
            return;
        }
        if (!a20424.firstCall) {
            return;
        }
        a20424.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a20424.flag);
        } // end if
        return;
    };
    return Ryu_a20424;
}());
__reflect(Ryu_a20424.prototype, "Ryu_a20424");
//# sourceMappingURL=Ryu_a20424.js.map