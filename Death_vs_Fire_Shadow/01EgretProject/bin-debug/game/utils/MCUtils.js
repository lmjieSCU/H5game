var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MCUtils = (function () {
    function MCUtils() {
    }
    MCUtils.hasFrameLabel = function (param1, param2) {
        var _loc_3 = param1.getLabels();
        for (var _loc_4 in _loc_3) {
            if (_loc_4 == param2) {
                return true;
            }
        }
        return false;
    }; // end function
    return MCUtils;
}());
__reflect(MCUtils.prototype, "MCUtils");
//# sourceMappingURL=MCUtils.js.map