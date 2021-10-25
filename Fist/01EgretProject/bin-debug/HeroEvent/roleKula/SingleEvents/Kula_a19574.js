var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效2 */
var Kula_a19574 = (function () {
    function Kula_a19574() {
        this.lastObj = "";
        this.i = 0;
        this.num = 0;
        this.firstCall = true;
        return;
    }
    Kula_a19574.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19574.Firstowner == null) {
            Kula_a19574.Firstowner = owner;
            Kula_a19574.instance_First = new Kula_a19574();
            _level0.instance_First.push(this);
            return Kula_a19574.instance_First;
        }
        else if (Kula_a19574.Firstowner == owner) {
            if (firstCall) {
                Kula_a19574.instance_First.firstCall = true;
            }
            return Kula_a19574.instance_First;
        }
        else {
            if (Kula_a19574.instance_Second == null) {
                Kula_a19574.instance_Second = new Kula_a19574();
            }
            if (firstCall) {
                Kula_a19574.instance_Second.firstCall = true;
            }
            return Kula_a19574.instance_Second;
        }
    };
    Kula_a19574.addEventa19574 = function (MC, own_role) {
        var a19574 = Kula_a19574.getInstance(own_role, false);
        if (!a19574.firstCall) {
            return;
        }
        a19574.firstCall = false;
        MC.stop();
        MC.visible = false;
        a19574.i = 0;
        a19574.num = 0;
        FightMainRender.getInstance().Add(a19574, a19574.onEnterFrame, [MC, own_role]);
        var coordinate_stage = MC.parent.localToGlobal(MC.x, MC.y);
        a19574.coordinate_local = SplashScene.hero_layer.globalToLocal(coordinate_stage.x, coordinate_stage.y);
    };
    Kula_a19574.prototype.onEnterFrame = function (mc, own_role) {
        if (_level0.inPause) {
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
                own_role.addSkill_Kula(this.name, this.coordinate_local);
                FightMainRender.getInstance().Remove(this, this.onEnterFrame);
                // this.removeMovieClip();
                //mc.parent.removeChild(mc);
            }
            own_role.addSkill_Kula(this.name, this.coordinate_local);
        }
    };
    return Kula_a19574;
}());
__reflect(Kula_a19574.prototype, "Kula_a19574");
//# sourceMappingURL=Kula_a19574.js.map