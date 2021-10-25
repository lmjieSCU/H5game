var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*存储用于实现碰撞的楼层位置
*y:对应y坐标
*xFrom:对应左端x坐标
*xTo:对应右端x坐标
*/
var FloorVO = (function () {
    function FloorVO() {
        this.y = 0;
        this.xFrom = 0;
        this.xTo = 0;
        return;
    } // end function
    FloorVO.prototype.toString2 = function () {
        return "FloorVO::{xFrom:" + this.xFrom + ",xTo:" + this.xTo + ",y:" + this.y + "}";
    }; // end function
    /*
    *param1为待检测人物x坐标
    *param2为待检测人物y坐标
    *param3为速度
    */
    FloorVO.prototype.hitTest = function (param1, param2, param3) {
        return param2 > this.y - param3 && param2 < this.y + param3 && param1 > this.xFrom && param1 < this.xTo;
    }; // end function
    return FloorVO;
}());
__reflect(FloorVO.prototype, "FloorVO");
//# sourceMappingURL=FloorVO.js.map