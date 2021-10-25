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
var KeyConfigVO = (function (_super) {
    __extends(KeyConfigVO, _super);
    function KeyConfigVO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selects = [];
        return _this;
    }
    KeyConfigVO.prototype.KeyConfigVO = function (param1) {
        this.id = param1;
        return;
    }; // end function
    KeyConfigVO.prototype.setKeys = function (param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
        this.up = param1;
        this.down = param2;
        this.left = param3;
        this.right = param4;
        this.attack = param5;
        this.jump = param6;
        this.dash = param7;
        this.skill = param8;
        this.dash = param7;
        this.superKill = param9;
        this.beckons = param10;
        if (!this.selects) {
            this.selects = [param5];
        }
        return;
    }; // end function
    KeyConfigVO.prototype.toSaveObj = function () {
        var _loc_1 = KyoUtils.itemToObject(this);
        delete _loc_1["id"];
        return _loc_1;
    }; // end function
    KeyConfigVO.prototype.readSaveObj = function (param1) {
        KyoUtils.setValueByObject(this, param1);
        return;
    }; // end function
    KeyConfigVO.prototype.clone = function () {
        var _loc_2 = this.toSaveObj();
        var _loc_1 = new KeyConfigVO(this.id);
        _loc_1.readSaveObj(_loc_2);
        return _loc_1;
    }; // end function
    return KeyConfigVO;
}(Object));
__reflect(KeyConfigVO.prototype, "KeyConfigVO");
//# sourceMappingURL=KeyConfigVO.js.map