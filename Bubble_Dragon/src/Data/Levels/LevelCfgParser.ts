/**level设置 */
class LevelCfgParser implements IJsonConfig {

    public static TOTAL_LEVEL: number = 206;

    public _dict: Dicts = new Dicts();  //key:levelnum,value:levelCO

    constructor() {
        return;
    }

    public setUp(arg1: Object): void {
        return;
    }

    public getLevelCfg(arg1: number): LevelCfg {
        if (this._dict.contains(arg1)) {
            return this._dict.take(arg1);
        }
        if (arg1 < 0 || arg1 > LevelCfgParser.TOTAL_LEVEL) {
            console.log("未找到关卡-" + arg1)
            return null;
        }
        let loc1 = new LevelCfg();
        loc1.id = arg1;
        let levelxml = egret.getDefinitionByName("level" + arg1).xml;
        let loc6 = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
        loc1.map = this.loadFromString(levelxml.elements);
        loc1.map.unshift(loc6);
        loc1.map.unshift(loc6);
        loc1.step = Number(levelxml.step);
        loc1.starLevels = levelxml.stars.split(",");
        loc1.props = levelxml.prop.split(",");
        loc1.tipId = Number(levelxml.tipId);
        this._dict.put(arg1, loc1);
        return loc1;

    }

    public loadFromString(arg1: string, arg2: string = ",", arg3: string = "\n"): Array<Array<number>> {
        let loc4 = null;
        let loc1 = [];
        let loc2 = arg1.split(arg3);
        for (let row = 0; row < loc2.length; row++) {
            loc1[row] = [];
            if (loc2[row] != "") {
                loc4 = loc2[row].split(arg2);
                for (let col = 0; col < loc4.length; col++) {
                    if (!(loc4[col] == "" || Number(loc4[col]) < 0)) {
                        loc1[row][col] = Number(loc4[col]);
                    }
                }
            }
        }
        return loc1;
    }
}
