var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HitVO = (function () {
    function HitVO(param1) {
        if (param1 === void 0) { param1 = null; }
        this.power = 0;
        this.powerRate = 1;
        this.hitType = 1;
        this.isBreakDef = false;
        this.hitx = 0;
        this.hity = 0;
        this.hurtTime = 300;
        this.hurtType = 0;
        this.checkDirect = true;
        this._cloneKey = ["id", "owner", "power", "powerRate", "hitType", "isBreakDef", "hitx", "hity", "hurtTime", "hurtType", "currentArea", "checkDirect"];
        if (param1) {
            KyoUtils.setValueByObject(this, param1);
        }
        if (this.hitType == 1) {
            if (this.hurtTime < 100) {
                this.hurtTime = 100;
            }
        }
        return;
    } // end function
    HitVO.prototype.clone = function () {
        var _loc_1 = new HitVO();
        KyoUtils.cloneValue(_loc_1, this, this._cloneKey);
        return _loc_1;
    }; // end function
    HitVO.prototype.isBisha = function () {
        if (this.id == null) {
            return false;
        }
        return this.id.indexOf("bs") != -1 || this.id.indexOf("sbs") != -1 || this.id.indexOf("cbs") != -1 || this.id.indexOf("kbs") != -1;
    }; // end function
    HitVO.prototype.getDamage = function () {
        return this.power * this.powerRate;
    }; // end function
    return HitVO;
}());
__reflect(HitVO.prototype, "HitVO");
//# sourceMappingURL=HitVO.js.map