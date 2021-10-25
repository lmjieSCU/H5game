var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AssisterModel = (function () {
    function AssisterModel() {
        this._assisterObj = [];
        return;
    } // end function
    AssisterModel.prototype.getAllAssisters = function () {
        return this._assisterObj;
    }; // end function
    AssisterModel.prototype.getAssister = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        return this._assisterObj[param1];
    }; // end function
    AssisterModel.prototype.initByXML = function () {
        this._assisterObj = [];
        var Modes = egret.XML.parse(assist_conf.xml);
        var children = Modes.children;
        for (var key in children) {
            var val = children[Number(key)];
            var _loc_2 = new FighterVO();
            _loc_2.initByXML(val);
            this._assisterObj[_loc_2.id] = _loc_2;
        }
        return;
    }; // end function
    Object.defineProperty(AssisterModel, "I", {
        get: function () {
            if (!AssisterModel._i) {
                AssisterModel._i = new AssisterModel();
            }
            return AssisterModel._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return AssisterModel;
}());
__reflect(AssisterModel.prototype, "AssisterModel");
//# sourceMappingURL=AssisterModel.js.map