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
var SelectCharListItemVO = (function (_super) {
    __extends(SelectCharListItemVO, _super);
    function SelectCharListItemVO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectCharListItemVO.prototype.SelectCharListItemVO = function (param1, param2, param3, param4) {
        if (param4 === void 0) { param4 = null; }
        this.x = param1;
        this.y = param2;
        this.fighterID = param3;
        this.offset = param4;
        return;
    }; // end function
    return SelectCharListItemVO;
}(Object));
__reflect(SelectCharListItemVO.prototype, "SelectCharListItemVO");
//# sourceMappingURL=SelectCharListItemVO.js.map