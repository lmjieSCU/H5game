var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapModel = (function () {
    function MapModel() {
        this._mapObj = [];
        this._mapArray = [];
        return;
    } // end function
    MapModel.prototype.getMap = function (param1) {
        return this._mapObj[param1];
    }; // end function
    MapModel.prototype.getAllMaps = function () {
        return this._mapArray;
    }; // end function
    MapModel.prototype.initByXML = function () {
        var Modes = egret.XML.parse(map_conf.xml);
        var children = Modes.children;
        for (var key in children) {
            var val = children[Number(key)];
            var _loc_2 = new MapVO();
            _loc_2.initByXML(val);
            this._mapObj[_loc_2.id] = _loc_2;
            this._mapArray.push(_loc_2);
        }
        return;
    }; // end function
    Object.defineProperty(MapModel, "I", {
        get: function () {
            if (!MapModel._i) {
                MapModel._i = new MapModel();
            }
            return MapModel._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return MapModel;
}());
__reflect(MapModel.prototype, "MapModel");
//# sourceMappingURL=MapModel.js.map