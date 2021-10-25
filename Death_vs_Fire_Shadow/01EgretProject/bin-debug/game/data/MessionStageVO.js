var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MessionStageVO = (function () {
    function MessionStageVO() {
        this.fighters = [];
        this.attackRate = 1;
        this.hpRate = 1;
        return;
    } // end function
    MessionStageVO.prototype.getFighters = function () {
        var _loc_2 = null;
        var _loc_1 = 0;
        var _loc_3 = 0;
        if (this.mession.gameMode == 0) {
            _loc_2 = [];
            _loc_2 = _loc_2.concat(this.fighters);
            _loc_1 = 3 - _loc_2.length;
            if (_loc_1 > 0) {
                while (_loc_3 < _loc_1) {
                    _loc_2.push(null);
                    _loc_3++;
                }
            }
            return _loc_2;
        }
        return (this.fighters);
    }; // end function
    return MessionStageVO;
}());
__reflect(MessionStageVO.prototype, "MessionStageVO");
//# sourceMappingURL=MessionStageVO.js.map