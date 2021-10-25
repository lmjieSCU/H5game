var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4188 = (function () {
    function Moriya_a4188() {
        this.firstCall = true;
        return;
    }
    Moriya_a4188.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4188.Firstowner == null) {
            Moriya_a4188.Firstowner = owner;
            Moriya_a4188.instance_First = new Moriya_a4188();
            _level0.instance_First.push(this);
            return Moriya_a4188.instance_First;
        }
        else if (Moriya_a4188.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4188.instance_First.firstCall = true;
            }
            return Moriya_a4188.instance_First;
        }
        else {
            if (Moriya_a4188.instance_Second == null) {
                Moriya_a4188.instance_Second = new Moriya_a4188();
            }
            if (firstCall) {
                Moriya_a4188.instance_Second.firstCall = true;
            }
            return Moriya_a4188.instance_Second;
        }
    };
    Moriya_a4188.addEventa4188 = function (MC, own_role) {
        var a4188 = Moriya_a4188.getInstance(own_role, false);
        if (!a4188.firstCall) {
            return;
        }
        //a4188.firstCall = false;
        MC.visible = false;
        MC.stop(); //OPP_A
        a4188.MC = MC;
        var _posObj = eval(a4188.posObj).getInstance(own_role); //opp_B"
        var hit = own_role.catch_oppPos2(a4188.MC, _posObj.MC, a4188.status_1, a4188.flag, a4188.land, a4188.hurt, a4188.downHit);
        if (hit) {
            if (a4188['func'] != null)
                a4188['func']();
        }
        else {
            FightMainRender.getInstance().Add(a4188, a4188.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    Moriya_a4188.prototype.enterFrame = function (own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var a4188 = Moriya_a4188.getInstance(own_role);
        var _posObj = eval(a4188.posObj).getInstance(own_role); //opp_B
        var hit = own_role.catch_oppPos2(a4188.MC, _posObj.MC, a4188.status_1, a4188.flag, a4188.land, a4188.hurt, a4188.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a4188, a4188.enterFrame);
            if (a4188['func'] != null)
                a4188['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a4188, a4188.enterFrame);
        }
    };
    return Moriya_a4188;
}());
__reflect(Moriya_a4188.prototype, "Moriya_a4188");
//# sourceMappingURL=Moriya_a4188.js.map