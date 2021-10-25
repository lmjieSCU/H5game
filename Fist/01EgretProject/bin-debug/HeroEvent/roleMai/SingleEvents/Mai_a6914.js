var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**火焰子骨骼 */
///帧事件索引，人为命名错误，为a6917非a6914
var Mai_a6914 = (function () {
    function Mai_a6914() {
        this.firstCall = true;
        return;
    }
    Mai_a6914.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6914.Firstowner == null) {
            Mai_a6914.Firstowner = owner;
            Mai_a6914.instance_First = new Mai_a6914();
            _level0.instance_First.push(this);
            return Mai_a6914.instance_First;
        }
        else if (Mai_a6914.Firstowner == owner) {
            if (firstCall) {
                Mai_a6914.instance_First.firstCall = true;
            }
            return Mai_a6914.instance_First;
        }
        else {
            if (Mai_a6914.instance_Second == null) {
                Mai_a6914.instance_Second = new Mai_a6914();
            }
            if (firstCall) {
                Mai_a6914.instance_Second.firstCall = true;
            }
            return Mai_a6914.instance_Second;
        }
    };
    Mai_a6914.addEventa6914 = function (MC, own_role) {
        var a6914 = Mai_a6914.getInstance(own_role, false);
        if (!a6914.firstCall) {
            return;
        }
        a6914.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a6914.name);
        own_role.addSkill(a6914.name, MC, own_role.Vx, own_role.Va);
    };
    return Mai_a6914;
}());
__reflect(Mai_a6914.prototype, "Mai_a6914");
//# sourceMappingURL=Mai_a6914.js.map