/**level设置 */
class LevelConfig implements IJsonConfig {

    public static TOTAL_LEVEL: number = 330;
    public _dict: Dicts = new Dicts();  //key:levelnum,value:levelCO

    constructor() {
        return;
    }

    public setUp(arg1: Object): void {
        return;
    }

    public getLevel(arg1: number): LevelCO {
        let loc3: any = 0;
        let loc4: any = null;
        let loc5: any = 0;
        let loc6: any = 0;
        let loc7: any = 0;
        if (this._dict.contains(arg1)) {
            return this._dict.take(arg1);
        }
        // let loc2: any = com.popchan.framework.core.Core.texturesManager.getXml("Level" + arg1);
        if (arg1 < 0 || arg1 > LevelConfig.TOTAL_LEVEL) {
            console.log("未找到关卡-" + arg1)
            return null;
        }
        else {
            let loc1 = new LevelCO();
            let level_Class: any = egret.getDefinitionByName("Level" + arg1 + "_Data");
            LevelData.I.initlize(level_Class)
            //----------------------------------------------------------------------------
            loc1.tile = this.convertToArray(LevelData.I.getValueByKey("tile"));
            loc1.board = this.convertToArray(LevelData.I.getValueByKey("board"));
            // loc1.ice = this.convertToArray(LevelData.I.getValueByKey("ice"));
            // loc1.stone = this.convertToArray(LevelData.I.getValueByKey("stone"));
            loc1.candy = this.convertToArray(LevelData.I.getValueByKey("candy"));
            loc1.barrier = this.convertToArray(LevelData.I.getValueByKey("barrier"));
            if (LevelData.I.getValueByKey("colorCount") != null) {
                loc1.colorCount = Number(LevelData.I.getValueByKey("colorCount"));
            }
            else {
                loc1.colorCount = 5;
            }
            if (loc1.colorCount < 3) {
                loc1.colorCount = 3;
            }
            else if (loc1.colorCount > 5) {
                loc1.colorCount = 5;
            }
            if (LevelData.I.getValueByKey("ironWire") != null) {
                loc1.ironWire = this.convertToArray(LevelData.I.getValueByKey("ironWire"));
            }
            else {
                loc1.ironWire = this.getBlankArray();
            }
            if (LevelData.I.getValueByKey("eat") != null) {
                loc1.eat = this.convertToArray(LevelData.I.getValueByKey("eat"));
            }
            else {
                loc1.eat = this.getBlankArray();
            }
            if (LevelData.I.getValueByKey("monster") != null) {
                loc1.monster = this.convertToArray(LevelData.I.getValueByKey("monster"));
            }
            else {
                loc1.monster = this.getBlankArray();
            }
            // loc1.lock = this.convertToArray(LevelData.I.getValueByKey("lock"));
            loc1.entryAndExit = this.convertToArray(LevelData.I.getValueByKey("entryAndExit"));
            loc1.aim = LevelData.I.getValueByKey("aim").split("|");
            loc1.mode = Number(LevelData.I.getValueByKey("mode"));
            loc1.step = Number(LevelData.I.getValueByKey("step"));
            loc1.needScore = 0;
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                loc5 = 0;
                while (loc5 < GameConst.ROW_COUNT) {
                    if (loc1.tile[loc5][loc3] > 0) {
                        loc1.needScore = loc1.needScore + 50;
                    }
                    ++loc5;
                }
                ++loc3;
            }
            let loc8: any = 0;
            let loc9: any = loc1.aim;
            for (let loc in loc9) {
                loc4 = loc9[loc];
                loc6 = Number(loc4.split(",")[0]);
                loc7 = Number(loc4.split(",")[1]);
                if (loc6 == AimType.SCORE) {
                    continue;
                }
                loc1.needScore = loc1.needScore + loc7 * 50;
            }
            this._dict.put(arg1, loc1);
            return loc1;
        }
    }

    public convertToArray(arg1: string, arg2: string = "|", arg3: string = ","): Array<any> {
        let loc4: any = null;
        let loc5: any = null;
        let loc6: number = 0;
        let ansArray = [];
        let loc2: any = arg1.split(arg2);
        for (let loc3: number = 0; loc3 < loc2.length; loc3++) {
            loc5 = (loc4 = loc2[loc3]).split(arg3);
            ansArray[loc3] = [];
            loc6 = 0;
            while (loc6 < loc5.length) {
                ansArray[loc3][loc6] = Number(loc5[loc6]);
                ++loc6;
            }
        }
        return ansArray;
    }

    public getBlankArray(): Array<Array<number>> {    //9*9数组值均为0
        let loc3: number = 0;
        let BlankArray = new Array<Array<number>>();
        for (let loc2: number = 0; loc2 < 9; loc2++) {
            BlankArray[loc2] = new Array<number>();
            for (let loc3: number = 0; loc3 < 9; loc3++) {
                BlankArray[loc2][loc3] = 0;
            }
        }
        return BlankArray;
    }
}
