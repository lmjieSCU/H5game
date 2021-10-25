
class AssisterModel {
    private _assisterObj: Array<FighterVO> = [];
    public static _i: AssisterModel;

    public constructor() {
        return;
    }// end function

    public getAllAssisters(): Object {
        return this._assisterObj;
    }// end function

    public getAssister(param1: string, param2: boolean = false): FighterVO {
        return this._assisterObj[param1];
    }// end function

    public initByXML() {
        this._assisterObj = []
        var Modes = egret.XML.parse(assist_conf.xml);
        var children = Modes.children;
        for (let key in children) {
            let val: egret.XML = <egret.XML><any>children[Number(key)];
            let _loc_2 = new FighterVO();
            _loc_2.initByXML(val);
            this._assisterObj[_loc_2.id] = _loc_2;
        }
        return;
    }// end function

    public static get I(): AssisterModel {
        if (!AssisterModel._i) {
            AssisterModel._i = new AssisterModel();
        }
        return AssisterModel._i;
    }// end function

}
