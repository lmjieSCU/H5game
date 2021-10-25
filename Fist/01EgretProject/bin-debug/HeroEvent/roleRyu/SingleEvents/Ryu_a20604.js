var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20604 = (function () {
    function Ryu_a20604() {
        this.firstCall = true;
        return;
    }
    Ryu_a20604.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20604.Firstowner == null) {
            Ryu_a20604.Firstowner = owner;
            Ryu_a20604.instance_First = new Ryu_a20604();
            _level0.instance_First.push(this);
            return Ryu_a20604.instance_First;
        }
        else if (Ryu_a20604.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20604.instance_First.firstCall = true;
            }
            return Ryu_a20604.instance_First;
        }
        else {
            if (Ryu_a20604.instance_Second == null) {
                Ryu_a20604.instance_Second = new Ryu_a20604();
            }
            if (firstCall) {
                Ryu_a20604.instance_Second.firstCall = true;
            }
            return Ryu_a20604.instance_Second;
        }
    };
    Ryu_a20604.addEventa20604 = function (MC, own_role) {
        var a20604 = Ryu_a20604.getInstance(own_role, false);
        if (!a20604.firstCall) {
            return;
        }
        a20604.firstCall = false;
        MC.stop();
        a20604.onUnload = a20604.endFunc;
        MC['own_role'] = own_role;
        FightMainRender.getInstance().Add(a20604, a20604.enterFrame, [MC, own_role]);
    };
    Ryu_a20604.prototype.enterFrame = function (MC, own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var isnotDown = true;
        if (MC._mcName != "a20604" || MC.parent == null) {
            this.onUnload(MC, own_role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
        for (var key in this.keyArray) {
            if (own_role.keyCtrl && own_role.keyCtrl.key.isDown(this.keyArray[key])) {
                this.holdFunc();
                isnotDown = false;
                break;
            }
        }
        if (isnotDown) {
            this.releaseFunc(MC, own_role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
    };
    return Ryu_a20604;
}());
__reflect(Ryu_a20604.prototype, "Ryu_a20604");
//# sourceMappingURL=Ryu_a20604.js.map