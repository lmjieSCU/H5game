var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20745 = (function () {
    function Ryu_a20745() {
        this.firstCall = true;
        return;
    }
    Ryu_a20745.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20745.Firstowner == null) {
            Ryu_a20745.Firstowner = owner;
            Ryu_a20745.instance_First = new Ryu_a20745();
            _level0.instance_First.push(this);
            return Ryu_a20745.instance_First;
        }
        else if (Ryu_a20745.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20745.instance_First.firstCall = true;
            }
            return Ryu_a20745.instance_First;
        }
        else {
            if (Ryu_a20745.instance_Second == null) {
                Ryu_a20745.instance_Second = new Ryu_a20745();
            }
            if (firstCall) {
                Ryu_a20745.instance_Second.firstCall = true;
            }
            return Ryu_a20745.instance_Second;
        }
    };
    Ryu_a20745.addEventa20745 = function (MC, own_role) {
        var a20745 = Ryu_a20745.getInstance(own_role, false);
        if (!a20745.firstCall) {
            return;
        }
        a20745.firstCall = false;
        MC.visible = false;
        MC.stop(); //OPP_A
        a20745.MC = MC;
        var _posObj = eval(a20745.posObj).getInstance(own_role); //opp_B
        var hit = own_role.catch_oppPos2(a20745.MC, _posObj.MC, a20745.status_1, a20745.flag, a20745.land, a20745.hurt, a20745.downHit);
        if (hit) {
            if (a20745['func'] != null)
                a20745['func']();
        }
        else {
            FightMainRender.getInstance().Add(a20745, a20745.enterFrame, [own_role]);
        }
    };
    Ryu_a20745.prototype.enterFrame = function (own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var a20745 = Ryu_a20745.getInstance(own_role);
        var _posObj = eval(a20745.posObj).getInstance(own_role); //opp_B
        var hit = own_role.catch_oppPos2(a20745.MC, _posObj.MC, a20745.status_1, a20745.flag, a20745.land, a20745.hurt, a20745.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a20745, a20745.enterFrame);
            if (a20745['func'] != null)
                a20745['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a20745, a20745.enterFrame);
        }
    };
    return Ryu_a20745;
}());
__reflect(Ryu_a20745.prototype, "Ryu_a20745");
//# sourceMappingURL=Ryu_a20745.js.map