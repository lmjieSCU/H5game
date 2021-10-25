var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19498 = (function () {
    function Kula_a19498() {
        this.firstCall = true;
        return;
    }
    Kula_a19498.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19498.Firstowner == null) {
            Kula_a19498.Firstowner = owner;
            Kula_a19498.instance_First = new Kula_a19498();
            _level0.instance_First.push(this);
            return Kula_a19498.instance_First;
        }
        else if (Kula_a19498.Firstowner == owner) {
            if (firstCall) {
                Kula_a19498.instance_First.firstCall = true;
            }
            return Kula_a19498.instance_First;
        }
        else {
            if (Kula_a19498.instance_Second == null) {
                Kula_a19498.instance_Second = new Kula_a19498();
            }
            if (firstCall) {
                Kula_a19498.instance_Second.firstCall = true;
            }
            return Kula_a19498.instance_Second;
        }
    };
    Kula_a19498.addEventa19498 = function (MC, own_role) {
        var a19498 = Kula_a19498.getInstance(own_role, false);
        if (!a19498.firstCall) {
            return;
        }
        a19498.firstCall = false;
        MC.visible = false;
        MC.stop();
        if (a19498.defendSuper == false) {
            //if(own_role.opp.superSkill || own_role.opp.inBurstSkill)
            if (own_role.opp.superSkill) {
                return undefined;
            }
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(a19498.flag);
        }
        FightMainRender.getInstance().Add(a19498, a19498.onEnterFrame, [MC, own_role]);
    };
    Kula_a19498.prototype.onEnterFrame = function (MC, own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(this.flag);
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
        if (own_role.status_3 == "stand") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
    };
    return Kula_a19498;
}());
__reflect(Kula_a19498.prototype, "Kula_a19498");
//# sourceMappingURL=Kula_a19498.js.map