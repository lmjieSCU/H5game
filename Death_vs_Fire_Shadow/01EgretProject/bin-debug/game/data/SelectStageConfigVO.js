var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SelectStageConfigVO = (function (_super) {
    __extends(SelectStageConfigVO, _super);
    function SelectStageConfigVO() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 800;
        _this.height = 600;
        _this.top = 0;
        _this.bottom = 0;
        _this.left = 0;
        _this.right = 0;
        _this.unitSize = new egret.Point(50, 50);
        return _this;
    } // end function
    SelectStageConfigVO.prototype.setByXML = function (param1) {
        return;
    }; // end function
    return SelectStageConfigVO;
}(Object));
__reflect(SelectStageConfigVO.prototype, "SelectStageConfigVO");
//# sourceMappingURL=SelectStageConfigVO.js.map