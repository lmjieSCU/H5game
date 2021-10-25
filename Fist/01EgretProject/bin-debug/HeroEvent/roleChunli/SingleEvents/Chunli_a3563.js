var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a3563 = (function () {
    function Chunli_a3563() {
        this.firstCall = true;
        return;
    }
    Chunli_a3563.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a3563.Firstowner == null) {
            Chunli_a3563.Firstowner = owner;
            Chunli_a3563.instance_First = new Chunli_a3563();
            _level0.instance_First.push(this);
            return Chunli_a3563.instance_First;
        }
        else if (Chunli_a3563.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3563.instance_First.firstCall = true;
            }
            return Chunli_a3563.instance_First;
        }
        else {
            if (Chunli_a3563.instance_Second == null) {
                Chunli_a3563.instance_Second = new Chunli_a3563();
            }
            if (firstCall) {
                Chunli_a3563.instance_Second.firstCall = true;
            }
            return Chunli_a3563.instance_Second;
        }
    };
    Chunli_a3563.addEventa3563 = function (MC, own_role) {
        var a3563 = Chunli_a3563.getInstance(own_role, false);
        if (!a3563.firstCall) {
            return;
        }
        a3563.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a3563.flag);
        } // end if
        return;
    };
    return Chunli_a3563;
}());
__reflect(Chunli_a3563.prototype, "Chunli_a3563");
//# sourceMappingURL=Chunli_a3563.js.map