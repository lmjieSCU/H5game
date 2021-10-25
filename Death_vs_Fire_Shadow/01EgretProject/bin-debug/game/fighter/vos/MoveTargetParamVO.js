var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MoveTargetParamVO = (function () {
    function MoveTargetParamVO(param1) {
        if (param1 === void 0) { param1 = null; }
        if (!param1) {
            return;
        }
        this.x = param1.x != undefined ? (param1.x) : (0);
        this.y = param1.y != undefined ? (param1.y) : (0);
        this.followMcName = param1.followmc != undefined ? (param1.followmc) : (null);
        if (param1.speed) {
            this.speed = new egret.Point();
            if (typeof (param1.speed) == "number") {
                var _loc_2 = param1.speed * GameConfig.SPEED_PLUS;
                this.speed.y = param1.speed * GameConfig.SPEED_PLUS;
                this.speed.x = _loc_2;
            }
            else {
                this.speed.x = param1.speed.x != undefined ? (param1.speed.x * GameConfig.SPEED_PLUS) : (0);
                this.speed.y = param1.speed.y != undefined ? (param1.speed.y * GameConfig.SPEED_PLUS) : (0);
            }
        }
        return;
    } // end function
    MoveTargetParamVO.prototype.setTarget = function (param1) {
        this.target = param1;
        if (this.target instanceof BaseGameSprite) {
            this.target.setVelocity(0, 0);
        }
        return;
    }; // end function
    MoveTargetParamVO.prototype.clear = function () {
        if (this.target) {
            if (this.target instanceof BaseGameSprite) {
                this.target.isApplyG = true;
            }
        }
        return;
    }; // end function
    return MoveTargetParamVO;
}());
__reflect(MoveTargetParamVO.prototype, "MoveTargetParamVO");
//# sourceMappingURL=MoveTargetParamVO.js.map