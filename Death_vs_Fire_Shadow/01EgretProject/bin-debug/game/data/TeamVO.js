var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TeamVO = (function () {
    function TeamVO(param1, param2) {
        if (param2 === void 0) { param2 = null; }
        this.children = new Array();
        this.id = param1;
        this.name = param2;
        return;
    } // end function
    TeamVO.prototype.getAliveChildren = function () {
        var _loc_3 = 0;
        var _loc_2 = null;
        var _loc_1 = new Array();
        while (_loc_3 < this.children.length) {
            _loc_2 = this.children[_loc_3];
            if (_loc_2 instanceof BaseGameSprite) {
                if (_loc_2.isAlive) {
                    _loc_1.push(_loc_2);
                }
            }
            else {
                _loc_1.push(_loc_2);
            }
            _loc_3++;
        }
        return _loc_1;
    }; // end function
    TeamVO.prototype.addChild = function (param1) {
        var _loc_2 = this.children.indexOf(param1);
        if (_loc_2 == -1) {
            this.children.push(param1);
        }
        return;
    }; // end function
    TeamVO.prototype.removeChild = function (param1) {
        var _loc_2 = this.children.indexOf(param1);
        if (_loc_2 != -1) {
            this.children.splice(_loc_2, 1);
        }
        return;
    }; // end function
    return TeamVO;
}());
__reflect(TeamVO.prototype, "TeamVO");
//# sourceMappingURL=TeamVO.js.map