var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a7155 = (function () {
    function Terry_a7155() {
        this.firstCall = true;
        return;
    }
    Terry_a7155.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a7155.Firstowner == null) {
            Terry_a7155.Firstowner = owner;
            Terry_a7155.instance_First = new Terry_a7155();
            _level0.instance_First.push(this);
            return Terry_a7155.instance_First;
        }
        else if (Terry_a7155.Firstowner == owner) {
            if (firstCall) {
                Terry_a7155.instance_First.firstCall = true;
            }
            return Terry_a7155.instance_First;
        }
        else {
            if (Terry_a7155.instance_Second == null) {
                Terry_a7155.instance_Second = new Terry_a7155();
            }
            if (firstCall) {
                Terry_a7155.instance_Second.firstCall = true;
            }
            return Terry_a7155.instance_Second;
        }
    };
    Terry_a7155.addEventa7155 = function (MC, own_role) {
        var a7155 = Terry_a7155.getInstance(own_role, false);
        if (!a7155.firstCall) {
            return;
        }
        a7155.firstCall = false;
        a7155.MC = MC;
        MC.visible = false;
    };
    return Terry_a7155;
}());
__reflect(Terry_a7155.prototype, "Terry_a7155");
//# sourceMappingURL=Terry_a7155.js.map