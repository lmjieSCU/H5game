var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterModel = (function () {
    function FighterModel() {
        return;
    } // end function
    FighterModel.prototype.getAllFighters = function () {
        return this._fighterObj;
    }; // end function
    FighterModel.prototype.getFighter = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        return this._fighterObj[param1];
    }; // end function
    //
    FighterModel.prototype.initByXML = function () {
        this._fighterObj = {};
        var Modes = egret.XML.parse(figher_conf.xml);
        var children = Modes.children;
        for (var key in children) {
            var val = children[Number(key)];
            var _loc_2 = new FighterVO();
            _loc_2.initByXML(val);
            this._fighterObj[_loc_2.id] = _loc_2;
        }
    };
    Object.defineProperty(FighterModel, "I", {
        //
        get: function () {
            if (!FighterModel._i) {
                FighterModel._i = new FighterModel;
            }
            return FighterModel._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return FighterModel;
}());
__reflect(FighterModel.prototype, "FighterModel");
//# sourceMappingURL=FighterModel.js.map