var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SelectVO = (function () {
    function SelectVO() {
        return;
    } // end function
    SelectVO.prototype.getSelectFighters = function () {
        var _loc_1 = [];
        if (this.fighter1) {
            _loc_1.push(this.fighter1);
        }
        if (this.fighter2) {
            _loc_1.push(this.fighter2);
        }
        if (this.fighter3) {
            _loc_1.push(this.fighter3);
        }
        return _loc_1;
    }; // end function
    SelectVO.prototype.tostring2 = function () {
        return JSON.stringify({ select: { fighter1: this.fighter1, fighter2: this.fighter2, fighter3: this.fighter3, fuzhu: this.fuzhu } });
    }; // end function
    return SelectVO;
}());
__reflect(SelectVO.prototype, "SelectVO");
//# sourceMappingURL=SelectVO.js.map