var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效2 */
var Kula_a19868 = (function () {
    function Kula_a19868() {
        this.lastObj = "";
        this.i = 0;
        this.num = 0;
        this.dx = 0;
        this.dy = 0;
        this.firstCall = true;
        return;
    }
    Kula_a19868.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19868.Firstowner == null) {
            Kula_a19868.Firstowner = owner;
            Kula_a19868.instance_First = new Kula_a19868();
            _level0.instance_First.push(this);
            return Kula_a19868.instance_First;
        }
        else if (Kula_a19868.Firstowner == owner) {
            if (firstCall) {
                Kula_a19868.instance_First.firstCall = true;
            }
            return Kula_a19868.instance_First;
        }
        else {
            if (Kula_a19868.instance_Second == null) {
                Kula_a19868.instance_Second = new Kula_a19868();
            }
            if (firstCall) {
                Kula_a19868.instance_Second.firstCall = true;
            }
            return Kula_a19868.instance_Second;
        }
    };
    Kula_a19868.addEventa19868 = function (MC, own_role) {
        var a19868 = Kula_a19868.getInstance(own_role, false);
        if (!a19868.firstCall) {
            return;
        }
        a19868.firstCall = false;
        MC.stop();
        MC.visible = false;
        var pt = own_role.localToGlobal(MC.x, MC.y);
        a19868.i = 0;
        a19868.num = 0;
        a19868.dx = 0;
        a19868.dy = 0;
        //let px=pt.x - _level0.char_mc._x;
        own_role.addSkill_m(name, this, pt.x, pt.y);
        a19868.num++;
        FightMainRender.getInstance().Add(a19868, a19868.onEnterFrame, [MC, own_role]);
    };
    Kula_a19868.prototype.onEnterFrame = function (mc, own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.i++;
        if (this.i == this.intvalFrame) {
            this.i = 0;
            this.num++;
            if (this.num == this.numMax) {
                if (this.lastObj != "") {
                    this.name = this.lastObj;
                }
                own_role.addSkill_m(this.name, mc, own_role.Vx, own_role.Va);
                FightMainRender.getInstance().Remove(this, this.onEnterFrame);
                // this.removeMovieClip();
                mc.parent.removeChild(mc);
            }
            //own_role.addSkill(this.name, mc, own_role.Vx, own_role.Va);
        }
    };
    return Kula_a19868;
}());
__reflect(Kula_a19868.prototype, "Kula_a19868");
//# sourceMappingURL=Kula_a19868.js.map