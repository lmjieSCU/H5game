var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a14462 = (function () {
    function Chunli_a14462() {
        this.firstCall = true;
        return;
    }
    Chunli_a14462.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a14462.Firstowner == null) {
            Chunli_a14462.Firstowner = owner;
            Chunli_a14462.instance_First = new Chunli_a14462();
            _level0.instance_First.push(this);
            return Chunli_a14462.instance_First;
        }
        else if (Chunli_a14462.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14462.instance_First.firstCall = true;
            }
            return Chunli_a14462.instance_First;
        }
        else {
            if (Chunli_a14462.instance_Second == null) {
                Chunli_a14462.instance_Second = new Chunli_a14462();
            }
            if (firstCall) {
                Chunli_a14462.instance_Second.firstCall = true;
            }
            return Chunli_a14462.instance_Second;
        }
    };
    Chunli_a14462.addEventa14462 = function (MC, own_role) {
        var a14462 = Chunli_a14462.getInstance(own_role, false);
        if (!a14462.firstCall) {
            return;
        }
        a14462.firstCall = false;
        MC.visible = false;
        MC.stop();
        if (a14462.defendSuper == false) {
            //if(own_role.opp.superSkill || own_role.opp.inBurstSkill)
            if (own_role.opp.superSkill) {
                return undefined;
            }
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(a14462.flag);
        }
        FightMainRender.getInstance().Add(a14462, a14462.onEnterFrame, [MC, own_role]);
    };
    Chunli_a14462.prototype.onEnterFrame = function (MC, own_role) {
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
    return Chunli_a14462;
}());
__reflect(Chunli_a14462.prototype, "Chunli_a14462");
//# sourceMappingURL=Chunli_a14462.js.map