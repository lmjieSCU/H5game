class GameModel {
    
    public aimObtained: Dicts;      //已达到目标素材以及要求数目

    public aimTarget: Dicts;   //目标素材以及要求数目

    public _step: number;

    public _time: number;

    public _score: number;

    public highScore: number;

    public isSuccess: boolean;

    public isTest: boolean = false;

    public constructor() {
        this.aimObtained = new Dicts();
        this.aimTarget = new Dicts();
        return;
    }

    public get score(): number {
        return this._score;
    }

    public set score(arg1: number) {
        this._score = arg1;
        EventManager.dispatchEvent(new GameEvents(GameEvents.SCORE_CHANGE));
    }

    public get time(): number {
        return this._time;
    }

    public set time(arg1: number) {
        this._time = arg1;
        EventManager.dispatchEvent(new GameEvents(GameEvents.TIME_CHANGE));
        if (arg1 <= 10 && arg1 > 0) {
            SoundCtrl.I.playmusic("warningtime");
        }
    }

    public get step(): number {
        return this._step;
    }

    public set step(arg1: number) {
        this._step = arg1;
        if (this._step <= 5 && this._step > 0) {
            SoundCtrl.I.playmusic("warningmove");
        }
        EventManager.dispatchEvent(new GameEvents(GameEvents.STEP_CHANGE))
    }

    public reset(): void {
        // for (let loc1 in this.aim.dict) {
        //     delete this.aim.dict[loc1];
        // }
        // let loc2 = 0;
        // for (let loc1 in this.aimOrg.dict) {
        //     delete this.aimOrg.dict[loc1];
        // }
        this.aimObtained.clear();
        this.aimTarget.clear();
        this.isSuccess = false;
        this.score = 0;
        return;
    }

    /**重置目标*/
    public addAim(_aimType: number, _aimNum: number): void {
        this.aimObtained.put(_aimType,0);
        this.aimTarget.put(_aimType,_aimNum);
        return;
    }

    /**修正已获得目标数,判断是否满足要求 */
    public offsetAim(AimType: number, Aim_hadNum: number): void {
        if (this.aimObtained.dict[AimType] != undefined) {
            this.aimObtained.dict[AimType] = this.aimObtained.dict[AimType] + Aim_hadNum;
            if (this.aimObtained.dict[AimType] >= this.aimTarget.dict[AimType]) {
                this.aimObtained.dict[AimType] = this.aimTarget.dict[AimType];
            }
            EventManager.dispatchEvent(new GameEvents(GameEvents.AIMS_CHANGE, { "type": AimType, "value": this.aimObtained.dict[AimType], "orgValue": this.aimTarget.dict[AimType] }))
        }
        return;
    }

    /**获得剩余的水果目标数量*/
    public getLeftFruitAim(arg1: Array<number>): Array<number> {
        let loc2 = 0;
        let loc4 = 0;
        let loc1 = [];
        let loc5 = 0;
        for (let loc3 in this.aimObtained.dict) {
            if (!(Number(loc3) == AimType.FRUIT1 || Number(loc3) == AimType.FRUIT2 || Number(loc3) == AimType.FRUIT3)) {
                continue;
            }
            loc2 = 0;
            while (loc2 < this.aimTarget.dict[loc3] - this.aimObtained.dict[loc3]) {
                loc1.push(Number(loc3));
                ++loc2;
            }
        }
        loc2 = 0;
        while (loc2 < arg1.length) {
            loc4 = (loc1.length - 1);
            while (loc4 >= 0) {
                if (loc1[loc4] == arg1[loc2]) {
                    loc1.splice(loc4, 1);
                }
                --loc4;
            }
            ++loc2;
        }
        return loc1;
    }

    /**检查是否已经达到通关要求 */
    public checkAimComplete(): boolean {
        for (let loc2 in this.aimObtained.dict) {
            if (this.aimObtained.dict[loc2] < this.aimTarget.dict[loc2]) {
                return false;
            }
        }
        return true;
    }

    public isScoreAimLevel(): boolean {
        for (let loc1 in this.aimObtained.dict) {
            if (this.aimObtained.dict[loc1] == AimType.SCORE) {
                return true;
            }
        }
        return false;
    }


}

