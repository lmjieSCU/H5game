class LevelModel {

    public currentLevel: number = 1;

    public selectedLevel: number = 1;

    public levelsMap: Array<LevelVO>;

    public totalLevel: number = 330;

    public constructor() {
        this.levelsMap = new Array<LevelVO>();
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
        if(loc1 == null){
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

    public getTotalScore(): number {
        let loc1 = 0;
        for (let loc2 in this.levelsMap) {
            loc1 = loc1 + this.levelsMap[loc2].highscore;
        }
        return loc1;
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


}

