var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3800 = (function () {
    function Moriya_a3800() {
        this.firstCall = true;
        return;
    }
    Moriya_a3800.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3800.Firstowner == null) {
            Moriya_a3800.Firstowner = owner;
            Moriya_a3800.instance_First = new Moriya_a3800();
            _level0.instance_First.push(this);
            return Moriya_a3800.instance_First;
        }
        else if (Moriya_a3800.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3800.instance_First.firstCall = true;
            }
            return Moriya_a3800.instance_First;
        }
        else {
            if (Moriya_a3800.instance_Second == null) {
                Moriya_a3800.instance_Second = new Moriya_a3800();
            }
            if (firstCall) {
                Moriya_a3800.instance_Second.firstCall = true;
            }
            return Moriya_a3800.instance_Second;
        }
    };
    Moriya_a3800.addEventa3800 = function (MC, own_role) {
        var a3800 = Moriya_a3800.getInstance(own_role, false);
        if (!a3800.firstCall) {
            return;
        }
        a3800.firstCall = false;
        MC.stop();
        a3800.onUnload = a3800.endFunc;
        MC['own_role'] = own_role;
        FightMainRender.getInstance().Add(a3800, a3800.enterFrame, [MC, own_role]);
    };
    Moriya_a3800.prototype.enterFrame = function (MC, own_role) {
        if (_level0.inPause) {
            return undefined;
        }
        var isnotDown = true;
        if (MC._mcName != "a3800" || MC.parent == null) {
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
    return Moriya_a3800;
}());
__reflect(Moriya_a3800.prototype, "Moriya_a3800");
//# sourceMappingURL=Moriya_a3800.js.map