var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a804 = (function () {
    function K_a804() {
        this.firstCall = true;
        return;
    }
    K_a804.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a804.Firstowner == null) {
            K_a804.Firstowner = owner;
            K_a804.instance_First = new K_a804();
            _level0.instance_First.push(this);
            return K_a804.instance_First;
        }
        else if (K_a804.Firstowner == owner) {
            if (firstCall) {
                K_a804.instance_First.firstCall = true;
            }
            return K_a804.instance_First;
        }
        else {
            if (K_a804.instance_Second == null) {
                K_a804.instance_Second = new K_a804();
            }
            if (firstCall) {
                K_a804.instance_Second.firstCall = true;
            }
            return K_a804.instance_Second;
        }
    };
    K_a804.addEventa804 = function (MC, own_role) {
        var a804 = K_a804.getInstance(own_role, false);
        if (!a804.firstCall) {
            return;
        }
        //a804.firstCall = false;
        MC.visible = false;
        MC.stop(); //OPP_A
        a804.MC = MC;
        var _posObj = eval(a804.posObj).getInstance(own_role); //opp_B"
        var hit = own_role.catch_oppPos2(a804.MC, _posObj.MC, a804.status_1, a804.flag, a804.land, a804.hurt, a804.downHit);
        if (hit) {
            if (a804['func'] != null)
                a804['func']();
        }
        else {
            FightMainRender.getInstance().Add(a804, a804.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    K_a804.prototype.enterFrame = function (own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var a804 = K_a804.getInstance(own_role);
        var _posObj = eval(a804.posObj).getInstance(own_role); //opp_B
        var hit = own_role.catch_oppPos2(a804.MC, _posObj.MC, a804.status_1, a804.flag, a804.land, a804.hurt, a804.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a804, a804.enterFrame);
            if (a804['func'] != null)
                a804['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a804, a804.enterFrame);
        }
    };
    return K_a804;
}());
__reflect(K_a804.prototype, "K_a804");
//# sourceMappingURL=K_a804.js.map