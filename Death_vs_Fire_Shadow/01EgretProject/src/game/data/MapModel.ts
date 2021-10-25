
class MapModel  {
    private _mapObj: any= [];
    private _mapArray: Array<MapVO> = [];
    private static _i: MapModel;

    constructor() {
        return;
    }// end function

    public getMap(param1: string): MapVO {
        return this._mapObj[param1];
    }// end function

    public getAllMaps(): any[] {
        return this._mapArray;
    }// end function

    public initByXML() {
        var Modes = egret.XML.parse(map_conf.xml);
        var children = Modes.children;
        for (let key in children) {
            let val: egret.XML = <egret.XML><any>children[Number(key)];
            let _loc_2 = new MapVO();
            _loc_2.initByXML(val);
            this._mapObj[_loc_2.id] = _loc_2;
            this._mapArray.push(_loc_2);
        }
        return;
    }// end function

    public static get I(): MapModel {
        if (!MapModel._i) {
            MapModel._i = new MapModel();
        }
        return MapModel._i;
    }// end function

}
