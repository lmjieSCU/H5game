class LevelModel {

    public selectedLevel: number = 1;

    public currentLevel: number = 1;

    public totalLevel: number = 206;

    public isSuccess: boolean;

    public currentScore: number;

    public currentHighScore: number;

    public selectedWorld: number;

    public buyProps: Array<number>; //已经购买的道具

    public levelsMap: Object;

    public constructor() {
        this.levelsMap = new Array<LevelVO>();
        this.buyProps = [];
        return;
    }

    public getLevelVO(arg1: number): LevelVO {
        if (this.levelsMap[arg1] == null) {
            let loc1 = new LevelVO();
            loc1.id = arg1;
            loc1.star = 0;
            loc1.highscore = 0;
            this.levelsMap[loc1.id] = loc1;
        }
        return this.levelsMap[arg1];
    }

    public loadData(): void {
        var loc2 = null;
        var loc3 = 0;
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        let loc1 = egret.localStorage.getItem("levels");
        if (loc1 == null) {
            this.currentLevel = 1;
            return;
        }
        if (loc1.length > 0) {
            loc2 = loc1.split("|");
            loc3 = 0;
            while (loc3 < loc2.length) {
                loc5 = (loc4 = loc2[loc3]).split("&");
                (loc6 = new LevelVO()).id = Number(loc5[0]);
                loc6.star = Number(loc5[1]);
                loc6.highscore = Number(loc5[2]);
                this.levelsMap[loc6.id] = loc6;
                ++loc3;
            }
            this.currentLevel = Number(egret.localStorage.getItem("currentLevel"));
        }
        return;
    }


    //本地存储通关记录
    public saveData(): void {
        let loc1 = [];
        let loc3: string = null;
        let level: LevelVO = null;
        var loc5 = this.levelsMap;
        for (let loc in loc5) {
            level = loc5[loc];
            loc1.push(level.id + "&" + level.star + "&" + level.highscore);
        }
        loc3 = loc1.join("|");
        egret.localStorage.setItem("currentLevel", String(this.currentLevel));
        egret.localStorage.setItem("levels", loc3);
        return;
    }


    public  checkHasProp(arg1:number):boolean
        {
            let loc2=null;
            let loc1=0;
            while (loc1 < this.buyProps.length) 
            {
                loc2 = Config.propCfgParser.getPropCfg(this.buyProps[loc1]);
                if (loc2.type == arg1) 
                {
                    return true;
                }
                ++loc1;
            }
            return false;
        }

}

