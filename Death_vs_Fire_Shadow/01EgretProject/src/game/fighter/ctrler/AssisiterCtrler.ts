class AssisiterCtrler {
    public hitModel: FighterHitModel;
    private _effectCtrl: FighterEffectCtrl;
    private _assister: Assister;
    private _touchFloor: boolean;
    private _touchFloorFrame: string;
    private hitTargetAction: string;
    private hitTargetChecker: string;
    public _fighter: FighterMain;

    constructor(param1: FighterMain) {
        this._fighter = param1;
        return;
    }// end function

    public get effect(): FighterEffectCtrl {
        return this._effectCtrl;
    }// end function

    public destory(): void {
        if (this._effectCtrl) {
            this._effectCtrl.destory();
            this._effectCtrl = null;
        }
        if (this.hitModel) {
            this.hitModel.destory();
            this.hitModel = null;
        }
        this._assister = null;
        return;
    }// end function

    public getTarget(): IGameSprite {
        var _loc_1: any = this._assister.getOwner() as FighterMain;
        if (_loc_1) {
            return _loc_1.getCurrentTarget();
        }
        return null;
    }// end function

    public getOwner(): IGameSprite {
        return this._assister.getOwner();
    }// end function

    public setApplyG(param1: boolean): void {
        this._assister.isApplyG = param1;
        return;
    }// end function

    public finish(param1: boolean = true): void {
        if (param1) {
            EffectCtrl.I.assisterEffect(this._assister);
        }
        this._assister.isAttacking = false;
        this.removeSelf();
        this._assister.gotoAndStop(1);
        return;
    }// end function

    public defineAction(param1: string, param2: Object): void {
        this.hitModel.addHitVO(param1, param2);
        return;
    }// end function

    public get owner_mc_ctrler(): FighterMcCtrler {
        var _loc_1: any = this._assister.getOwner() as FighterMain;
        if (_loc_1) {
            return _loc_1.getCtrler().getMcCtrl();
        }
        return null;
    }// end function

    public get owner_fighter_ctrler(): FighterCtrler {
        var _loc_1: any = this._assister.getOwner() as FighterMain;
        if (_loc_1) {
            return _loc_1.getCtrler();
        }
        return null;
    }// end function

    public initAssister(param1: Assister): void {
        this.hitModel = new FighterHitModel(param1);
        this._assister = param1;
        this._effectCtrl = new FighterEffectCtrl(param1);
        return;
    }// end function

    public endAct(): void {
        this._assister.isAttacking = false;
        return;
    }// end function

    public render(): void {
        this.renderCheckTargetHit();
        if (this._assister.isInAir) {
            this._touchFloor = false;
            return;
        }
        if (!this._touchFloor) {
            this._touchFloor = true;
            if (this._touchFloorFrame) {
                this._assister.gotoAndPlay(this._touchFloorFrame);
                this._touchFloorFrame = null;
            }
        }
        return;
    }// end function

    public moveToTarget(param1: any = null, param2: Object = null, param3: boolean = true): void {
        var _loc_5: any = this._assister.getOwner() as FighterMain;
        if (!(this._assister.getOwner() as FighterMain)) {
            return;
        }
        var _loc_4: any = _loc_5.getCurrentTarget();
        if (!_loc_5.getCurrentTarget()) {
            return;
        }
        if (param1 != null) {
            this._assister.x = _loc_4.x + param1 * this._assister.direct;
        }
        if (param2 != null) {
            this._assister.y = _loc_4.y + param2;
        }
        if (param3) {
            this._assister.direct = this._assister.x < _loc_4.x ? (1) : (-1);
        }
        return;
    }// end function

    public setDirectToTarget(): void {
        var _loc_1: any = this.getTarget();
        if (!_loc_1) {
            return;
        }
        this._assister.direct = this._assister.x < _loc_1.x ? (1) : (-1);
        return;
    }// end function

    public move(param1: number = 0, param2: number = 0): void {
        this._assister.setVelocity(param1 * this._assister.direct, param2);
        return;
    }// end function

    public damping(param1: number = 0, param2: number = 0): void {
        this._assister.setDamping(param1, param2);
        return;
    }// end function

    public stop(): void {
        this._assister.stop();
        return;
    }// end function

    public gotoAndPlay(param1: string): void {
        this._assister.gotoAndPlay(param1);
        return;
    }// end function

    public gotoAndStop(param1: string): void {
        this._assister.gotoAndStop(param1);
        return;
    }// end function

    public setTouchFloor(param1: string): void {
        this._touchFloorFrame = param1;
        return;
    }// end function

    public justHit(param1: string, param2: string = null, param3: boolean = false): boolean {
        if (this.isJustHit(param1, param3)) {
            if (param2 != null) {
                this.gotoAndPlay(param2);
            }
            return true;
        }
        return false;
    }// end function

    private isJustHit(param1: string, param2: boolean = false): boolean {
        var _loc_3: any = null;
        var _loc_6: any = null;
        var _loc_5: any = this._assister.getOwner() as FighterMain;
        var _loc_4: any = (_loc_5).getCurrentTarget();
        if ((_loc_5).getCurrentTarget() && _loc_4 instanceof FighterMain) {
            _loc_3 = (<FighterMain>_loc_4).hurtHit;
            if (_loc_3) {
                return _loc_3.id == param1;
            }
            if (param2) {
                _loc_6 = (<FighterMain>_loc_4).defenseHit;
                if (_loc_6) {
                    return _loc_6.id == param1;
                }
            }
        }
        return false;
    }// end function

    public setHitTarget(param1: string, param2: string): void {
        this.hitTargetAction = param2;
        this.hitTargetChecker = param1;
        return;
    }// end function

    public removeSelf(): void {
        this._assister.removeSelf();
        return;
    }// end function

    public fire(param1: string, param2: Object = null): void {
        let mcName = param1;
        let params: any = param2;
        var mc: any = this._assister.mc.getChildMovie(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params.mc = mc;
            params.hitVO = this.hitModel.getHitVO(mcName);
            FighterEventDispatcher.dispatchEvent(this._assister, "FIRE_BULLET", params);
        }
        else {
            this._assister.setAnimateFrameOut(function (): void {
                this.fire(mcName, params);
                return;
            }// end function
                , 1, this);
        }
        return;
    }// end function

    public addAttacker(param1: string, param2: any = null) {
        let mcName = param1;
        let params: any = param2;
        var mc: any = this._assister.mc.getChildMovie(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params.mc = mc;
            params.hitVO = this.hitModel.getHitVOByDisplayName(mcName);
            FighterEventDispatcher.dispatchEvent(this._assister, "ADD_ATTACKER", params);
            return mc;
        }
        else {
            this._assister.setAnimateFrameOut(function (): void {
                this.addAttacker(mcName, params);
                return;
            }// end function
                , 1, this);
        return null;
        }
    }// end function

    public getAttacker(param1: string, teamid:number,param2: number = -1): FighterAttackerCtrler {
        var _loc_2 = GameCtrl.I.getAttacker(param1, teamid, param2);
        if (_loc_2) {
            return _loc_2.getCtrler();
        }
        return null;
    }// end function

    private renderCheckTargetHit(): void {
        var _loc_4: any = 0;
        var _loc_1: any = null;
        if (!this.hitTargetChecker) {
            return;
        }
        var _loc_2: any = this._assister.getHitCheckRect(this.hitTargetChecker);
        if (!_loc_2) {
            return;
        }
        var _loc_3: any = this._assister.getTargets();
        if (!_loc_3) {
            return;
        }
        while (_loc_4 < _loc_3.length) {

            _loc_1 = _loc_3[_loc_4].getBodyArea();
            if (_loc_1 && _loc_2.intersects(_loc_1)) {
                this.gotoAndPlay(this.hitTargetAction);
            }
            _loc_4++;
        }
        return;
    }// end function

}

