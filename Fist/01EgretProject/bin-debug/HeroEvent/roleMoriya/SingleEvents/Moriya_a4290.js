/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4290 = (function () {
    function Moriya_a4290() {
        this.firstCall = true;
        return;
    }
    Moriya_a4290.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4290.Firstowner == null) {
            Moriya_a4290.Firstowner = owner;
            Moriya_a4290.instance_First = new Moriya_a4290();
            _level0.instance_First.push(this);
            return Moriya_a4290.instance_First;
        }
        else if (Moriya_a4290.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4290.instance_First.firstCall = true;
            }
            return Moriya_a4290.instance_First;
        }
        else {
            if (Moriya_a4290.instance_Second == null) {
                Moriya_a4290.instance_Second = new Moriya_a4290();
            }
            if (firstCall) {
                Moriya_a4290.instance_Second.firstCall = true;
            }
            return Moriya_a4290.instance_Second;
        }
    };
    Moriya_a4290.addEventa4290 = function (MC, own_role) {
        var a4290 = Moriya_a4290.getInstance(own_role, false);
        if (!a4290.firstCall) {
            return;
        }
        a4290.firstCall = false;
        MC.stop();
        MC.visible = false;
        console.log(a4290.name);
        own_role.addSkill2(a4290.name, MC, own_role.Vx, own_role.Va);
    };
    return Moriya_a4290;
}());
__reflect(Moriya_a4290.prototype, "Moriya_a4290");
//# sourceMappingURL=Moriya_a4290.js.map