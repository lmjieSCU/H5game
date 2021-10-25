var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MessionVO = (function () {
    function MessionVO() {
        this.stageList = [];
        return;
    } // end function
    MessionVO.prototype.initByXML = function (param1) {
        this.comicType = Number(param1.attributes.comicType);
        this.gameMode = Number(param1.attributes.gameMode);
        for (var key in param1.children) {
            var val = param1.children[Number(key)];
            var fighter = val.attributes.fighter;
            var assister = val.attributes.assister;
            var map = val.attributes.map;
            var _loc_3 = new MessionStageVO();
            _loc_3.fighters = fighter.split(",");
            _loc_3.map = map;
            _loc_3.assister = assister;
            //
            var attackRate2 = val.attributes.attackRate;
            var hpRate2 = val.attributes.hpRate;
            var attackRate = Number(val.attributes.attackRate);
            var hpRate = Number(val.attributes.hpRate);
            if (attackRate2 == null) {
                attackRate = 0;
            }
            else {
                attackRate = Number(attackRate2);
            }
            if (attackRate2 == null) {
                attackRate = 0;
            }
            else {
                attackRate = Number(attackRate2);
            }
            if (attackRate == NaN) {
                attackRate = 0;
            }
            if (hpRate == NaN) {
                hpRate = 0;
            }
            _loc_3.hpRate = hpRate > 0 ? (hpRate) : (1);
            _loc_3.attackRate = attackRate > 0 ? (attackRate) : (1);
            _loc_3.mession = this;
            this.stageList.push(_loc_3);
        }
        return;
    }; // end function
    return MessionVO;
}());
__reflect(MessionVO.prototype, "MessionVO");
//# sourceMappingURL=MessionVO.js.map