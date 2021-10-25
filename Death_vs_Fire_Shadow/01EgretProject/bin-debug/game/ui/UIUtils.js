var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIUtils = (function () {
    function UIUtils() {
        return;
    } // end function
    UIUtils.formatText = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        // var _loc_3 = null;
        // if (param2)
        // {
        //     _loc_3 = new  TextFormat();
        //     _loc_3.font = DEFAULT_FONT;
        //     KyoUtils.setValueByObject(_loc_3, param2);
        //     if (this.LOCK_FONT)
        //     {
        //         _loc_3.font = this.LOCK_FONT;
        //     }
        //     param1.defaultTextFormat = _loc_3;//default_fontFamily
        // }
        // if (this.formatTextFunction != null)
        // {
        //     UIUtils.formatTextFunction(param1);
        // }
        return;
    }; // end function
    UIUtils.DEFAULT_FONT = "黑体";
    UIUtils.LOCK_FONT = null;
    return UIUtils;
}());
__reflect(UIUtils.prototype, "UIUtils");
//# sourceMappingURL=UIUtils.js.map