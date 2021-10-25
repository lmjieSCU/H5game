var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a5740 = (function () {
    function K_a5740() {
        this.firstCall = true;
        return;
    }
    K_a5740.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a5740.Firstowner == null) {
            K_a5740.Firstowner = owner;
            K_a5740.instance_First = new K_a5740();
            _level0.instance_First.push(this);
            return K_a5740.instance_First;
        }
        else if (K_a5740.Firstowner == owner) {
            if (firstCall) {
                K_a5740.instance_First.firstCall = true;
            }
            return K_a5740.instance_First;
        }
        else {
            if (K_a5740.instance_Second == null) {
                K_a5740.instance_Second = new K_a5740();
            }
            if (firstCall) {
                K_a5740.instance_Second.firstCall = true;
            }
            return K_a5740.instance_Second;
        }
    };
    K_a5740.addEventa5740 = function (MC, own_role) {
        var a5740 = K_a5740.getInstance(own_role, false);
        if (!a5740.firstCall) {
            return;
        }
        a5740.firstCall = false;
        MC.stop();
        a5740.onUnload = a5740.endFunc;
        MC['own_role'] = own_role;
        FightMainRender.getInstance().Add(a5740, a5740.enterFrame, [MC, own_role]);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    K_a5740.prototype.enterFrame = function (mc, role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (mc._mcName != "a5740" || mc.parent == null) {
            this.onUnload(mc, role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
        if (role.keyCtrl && role.keyCtrl.key.isDown(this.key)) {
            this.holdFunc();
        }
        else {
            this.releaseFunc(mc, role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
    };
    return K_a5740;
}());
__reflect(K_a5740.prototype, "K_a5740");
//# sourceMappingURL=K_a5740.js.map