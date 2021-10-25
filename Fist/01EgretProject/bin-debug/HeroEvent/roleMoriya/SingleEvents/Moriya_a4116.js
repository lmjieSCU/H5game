var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4116 = (function () {
    function Moriya_a4116() {
        this.freeze = false;
        this.firstCall = true;
        return;
    }
    Moriya_a4116.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4116.Firstowner == null) {
            Moriya_a4116.Firstowner = owner;
            Moriya_a4116.instance_First = new Moriya_a4116();
            _level0.instance_First.push(this);
            return Moriya_a4116.instance_First;
        }
        else if (Moriya_a4116.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4116.instance_First.firstCall = true;
            }
            return Moriya_a4116.instance_First;
        }
        else {
            if (Moriya_a4116.instance_Second == null) {
                Moriya_a4116.instance_Second = new Moriya_a4116();
            }
            if (firstCall) {
                Moriya_a4116.instance_Second.firstCall = true;
            }
            return Moriya_a4116.instance_Second;
        }
    };
    Moriya_a4116.addEventa4116 = function (MC, own_role) {
        var a4116 = Moriya_a4116.getInstance(own_role, false);
        if (!a4116.firstCall) {
            return;
        }
        a4116.firstCall = false;
        MC.visible = false;
        MC.stop();
        FightMainRender.getInstance().Add(a4116, a4116.onEnterFrame, [own_role]);
        a4116.checkCounter(own_role);
    };
    Moriya_a4116.prototype.checkCounter = function (role) {
        if (role.inCount && role.opp.status_3 == "attack") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
            //onHit();
            this.waitFrame(role);
        }
    };
    Moriya_a4116.prototype.onEnterFrame = function (role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.inCount && role.opp.status_3 == "attack") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
            //onHit();
            this.waitFrame(role);
        }
        if (role.status_3 == "" || role.status_3 == "stand" || role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
    };
    Moriya_a4116.prototype.waitFrame = function (role) {
        if (this.freeze == false) {
            role.bodyMC.gotoAndStop(this.flag);
            return undefined;
        }
        FightMainRender.getInstance().Add(this, this.onEnterFrame2, [role]);
    };
    Moriya_a4116.prototype.onEnterFrame2 = function (role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.inFreeze == false) {
            role.bodyMC.gotoAndStop(this.flag);
            FightMainRender.getInstance().Remove(this, this.onEnterFrame2);
        }
        if (role.status_3 == "" || role.status_3 == "stand" || role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame2);
        }
    };
    return Moriya_a4116;
}());
__reflect(Moriya_a4116.prototype, "Moriya_a4116");
//# sourceMappingURL=Moriya_a4116.js.map