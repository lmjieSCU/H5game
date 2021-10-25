class FighterHitModel {
    private _hitObj: any;
    private _fighter: IGameSprite;

    constructor(param1: IGameSprite) {
        this._hitObj = {};
        this._fighter = param1;     //fightmain
        return;
    }// end function


    public destory(): void {
        this._hitObj = null;
        this._fighter = null;
        return;
    }// end function


    public clear(): void {
        this._hitObj = {};
        return;
    }// end function


    public getHitVO(param1: string): HitVO {
        return this._hitObj[param1];
    }// end function


    public getHitVOLike(param1: string): Array<HitVO> {
        let VOLike: Array<HitVO> = new Array<HitVO>();
        for (let index in this._hitObj) {
            let _loc3_ = this._hitObj[index];
            // if (_loc3_.indexOf(param1) != -1) {
            if (_loc3_.id == param1) {
                let temp:HitVO = new HitVO;
                for(let i in _loc3_){
                    temp[i] = _loc3_[i];
                }
                VOLike.push(temp);
            }
        }
        return VOLike;
    }// end function


    public getHitVOByDisplayName(param1: string): HitVO {
        var _loc_3: any = this.getHitVO(param1);
        if (_loc_3) {
            return _loc_3;
        }
        if (param1.indexOf("atm") == -1) {
            return null;
        }
        var _loc_2: any = param1.replace("atm", "");
        return this.getHitVO(_loc_2);
    }// end function

    public addHitVO(param1: string, param2: Object): void {
        var _loc_3: any = new HitVO(param2);
        _loc_3.owner = this._fighter;
        _loc_3.id = param1;
        this._hitObj[param1] = _loc_3;
        return;
    }// end function


    public setPowerRate(param1: number): void {
        for (let _loc_2 of this._hitObj) {

            _loc_2.powerRate = param1;
        }
        return;
    }// end function

}


