
class FighterModel {
    private _fighterObj: any;
    private static _i: FighterModel;

    public constructor() {
        return;
    }// end function

    public getAllFighters(): Object {
        return this._fighterObj;
    }// end function

    public getFighter(param1: string, param2: boolean = false): FighterVO {
        return this._fighterObj[param1];
    }// end function
    //
    public initByXML() {
        this._fighterObj = {};
        var Modes = egret.XML.parse(figher_conf.xml);
        var children = Modes.children;
        for (let key in children) {
            let val: egret.XML = <egret.XML><any>children[Number(key)];
            let _loc_2 = new FighterVO();
            _loc_2.initByXML(val);
            this._fighterObj[_loc_2.id] = _loc_2;
        }
    }
    //
    public static get I(): FighterModel {
        if (!FighterModel._i) {
            FighterModel._i = new FighterModel;
        }
        return FighterModel._i;
    }// end function

}
