var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectVO = (function () {
    function EffectVO(param1, param2) {
        if (param2 === void 0) { param2 = null; }
        this.blendMode = egret.BlendMode.NORMAL;
        this.targetColorOffset = [];
        this.isSpecial = false;
        this.className = param1;
        if (param2) {
            for (var k in param2) {
                this[k] = param2[k];
            }
        }
        return;
    } // end function
    EffectVO.prototype.clone = function () {
        var _loc_2 = KyoUtils.itemToObject(this);
        delete _loc_2["className"];
        var _loc_1 = new EffectVO(this.className, _loc_2);
        return _loc_1;
    }; // end function
    EffectVO.prototype.cacheBitmapData = function () {
        return;
    }; // end function
    return EffectVO;
}());
__reflect(EffectVO.prototype, "EffectVO");
//# sourceMappingURL=EffectVO.js.map