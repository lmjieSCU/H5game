/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20657 = (function () {
    function Ryu_a20657() {
        this.firstCall = true;
        return;
    }
    Ryu_a20657.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20657.Firstowner == null) {
            Ryu_a20657.Firstowner = owner;
            Ryu_a20657.instance_First = new Ryu_a20657();
            _level0.instance_First.push(this);
            return Ryu_a20657.instance_First;
        }
        else if (Ryu_a20657.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20657.instance_First.firstCall = true;
            }
            return Ryu_a20657.instance_First;
        }
        else {
            if (Ryu_a20657.instance_Second == null) {
                Ryu_a20657.instance_Second = new Ryu_a20657();
            }
            if (firstCall) {
                Ryu_a20657.instance_Second.firstCall = true;
            }
            return Ryu_a20657.instance_Second;
        }
    };
    Ryu_a20657.addEventa20657 = function (MC, own_role) {
        var a20657 = Ryu_a20657.getInstance(own_role, false);
        if (!a20657.firstCall) {
            return;
        }
        a20657.firstCall = false;
        MC.stop();
        MC.visible = false;
        // var pt = new egret.DisplayObject();
        // pt.x = MC.x;
        // pt.y = MC.y;
        // own_role.localToGlobal(pt);
        console.log(a20657.name);
        own_role.addSkill(a20657.name, MC, own_role.Vx, own_role.Va);
    };
    return Ryu_a20657;
}());
__reflect(Ryu_a20657.prototype, "Ryu_a20657");
//# sourceMappingURL=Ryu_a20657.js.map