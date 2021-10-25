
class MessionModel {
    public AI_LEVEL: number = 6;
    private _curMession: MessionVO;
    private _curStageId: number;
    private _curStage: MessionStageVO;
    private _messions: Array<MessionVO> = [];
    //
    private static _i: MessionModel;

    public constructor() {
        return;
    }// end function

    public initByXML() {
        var Modes = egret.XML.parse(misson_conf.xml);
        var children = Modes.children;
        for (let key in children) {
            let val: egret.XML = <egret.XML><any>children[Number(key)];
            let _loc_2 = new MessionVO();
            _loc_2.initByXML(val);
            this._messions.push(_loc_2);
        }
        return;
    }// end function

    public getMession(param1: number, param2: number): MessionVO {
        for (let _loc_3 in this._messions) {

            if (this._messions[_loc_3].comicType == param1 && this._messions[_loc_3].gameMode == param2) {
                return this._messions[_loc_3];
            }
        }
        return null;
    }// end function

    public getCurrentMessionStage(): MessionStageVO {
        return this._curStage;
    }// end function

    public initMession() {
        var _loc_5 = 0;
        var _loc_4 = GameCtrl.I.gameRunData.p1FighterGroup.fighter1.data;
        var _loc_1 = GameMode.isTeamMode() ? (0) : (1);
        var _loc_3 = this.getMession(_loc_4.comicType, _loc_1);
        this._curMession = _loc_3;
        this._curStage = _loc_3.stageList[this._curStageId];
        GameData.I.p2Select = GameData.I.p2Select || new SelectVO();
        var _loc_2 = this._curStage.getFighters();
        while (_loc_5 < _loc_2.length) {

            //GameData.I.p2Select["fighter" + (_loc_5 + 1)] = _loc_2[_loc_5];
            //添加
            GameLoader_lmj.loadFighter(2,_loc_2[_loc_5]);
            _loc_5++;
        }
        // GameLoader_lmj.loadAssister(2,this._curStage.assister);
        //GameData.I.p2Select.fuzhu = this._curStage.assister;
        GameLoader_lmj.LoadMap(this._curStage.map);
        //GameData.I.selectMap = this._curStage.map;
        this.AI_LEVEL = GameData.I.config.AI_level;
        //this.trace("p1::", GameData.I.p1Select.toString());
        return;
    }// end function

    public reset() {
        this._curStageId = 0;
        this._curStage = null;
        this._curMession = null;
        GameData.I.score = 0;
        return;
    }// end function

    public messionComplete() {
        if (this.missionAllComplete()) {
            return;
        }
        this._curStageId = (this._curStageId + 1);
        this.initMession();
        if (GameMode.isAcrade()) {
            GameLogic.addScoreByPassMission();
        }
        return;
    }// end function

    public missionAllComplete(): boolean {
        //return false;
        return this._curStageId >= (this._curMession.stageList.length - 1);
    }// end function

    public static get I(): MessionModel {
        if (!MessionModel._i) {
            MessionModel._i = new MessionModel;
        }
        return MessionModel._i;
    }// end function

}

