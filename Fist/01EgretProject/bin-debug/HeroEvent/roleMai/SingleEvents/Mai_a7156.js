var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a7156 = (function () {
    function Mai_a7156() {
        this.firstCall = true;
        return;
    }
    Mai_a7156.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7156.Firstowner == null) {
            Mai_a7156.Firstowner = owner;
            Mai_a7156.instance_First = new Mai_a7156();
            _level0.instance_First.push(this);
            return Mai_a7156.instance_First;
        }
        else if (Mai_a7156.Firstowner == owner) {
            if (firstCall) {
                Mai_a7156.instance_First.firstCall = true;
            }
            return Mai_a7156.instance_First;
        }
        else {
            if (Mai_a7156.instance_Second == null) {
                Mai_a7156.instance_Second = new Mai_a7156();
            }
            if (firstCall) {
                Mai_a7156.instance_Second.firstCall = true;
            }
            return Mai_a7156.instance_Second;
        }
    };
    Mai_a7156.addEventa7156 = function (MC, own_role) {
        var a7156 = Mai_a7156.getInstance(own_role, false);
        if (!a7156.firstCall) {
            return;
        }
        //a7156.firstCall = false;
        MC.visible = false;
        MC.stop(); //OPP_A
        a7156.MC = MC;
        var _posObj = eval(a7156.posObj).getInstance(own_role); //opp_B"
        var hit = own_role.catch_oppPos2(a7156.MC, _posObj.MC, a7156.status_1, a7156.flag, a7156.land, a7156.hurt, a7156.downHit);
        if (hit) {
            if (a7156['func'] != null)
                a7156['func']();
        }
        else {
            FightMainRender.getInstance().Add(a7156, a7156.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    Mai_a7156.prototype.enterFrame = function (own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var a7156 = Mai_a7156.getInstance(own_role);
        var _posObj = eval(a7156.posObj).getInstance(own_role); //opp_B
        var hit = own_role.catch_oppPos2(a7156.MC, _posObj.MC, a7156.status_1, a7156.flag, a7156.land, a7156.hurt, a7156.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a7156, a7156.enterFrame);
            if (a7156['func'] != null)
                a7156['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a7156, a7156.enterFrame);
        }
    };
    return Mai_a7156;
}());
__reflect(Mai_a7156.prototype, "Mai_a7156");
//# sourceMappingURL=Mai_a7156.js.map