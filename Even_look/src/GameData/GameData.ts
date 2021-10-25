/**游戏当前阶段所处于关卡数,阶段数,金币数
 * 从XML读取出每一阶段cells的位置
 */
class GameData {
    public level: number = 0;
    public lv_stage: number = 0;
    private stageXML: egret.XML;
    public static jinbi: number;
    public static instance: GameData;

    private constructor() {
        this.stageXML = egret.XML.parse(LevelInfo_IC.xml);
        GameData.jinbi = LocalDataCtrl.I.coins;
    }

    public static get I(): GameData {
        if (this.instance == null) {
            this.instance = new GameData();
        }
        return this.instance;
    }

    public nextstage(): boolean {
        this.lv_stage++;
        let stageinfos = this.stageInfo(this.level);
        if (this.lv_stage >= stageinfos.length) {
            this.level++;
            LocalDataCtrl.I.FreshLevel(this.level);
            this.lv_stage = 0;
            return true;
        }
        return false;
    }

    public styleInfo(lv: number): Array<XMLObj> {
        let styleInfos = new Array<XMLObj>();
        if (lv < 1 || lv > 20) {
            return;
        }
        let xml = DataManager_IC["xml" + lv];
        let Modes = egret.XML.parse(xml);
        let children = Modes.children;
        for (let key in children) {
            let val: egret.XML = <egret.XML><any>children[Number(key)];
            styleInfos.push(new XMLObj(val));
        }
        return styleInfos;
    }

    public stageInfo(level: number): Array<NPoint> {
        let stageInfos = new Array<NPoint>();
        let lv: egret.XML;
        let lvEft: egret.XML;
        let style: egret.XML;
        let data: egret.XMLText;
        if (level < 0 || level > 99) {
            return null;
        }
        lv = <egret.XML>this.stageXML.children[level];
        for (let lvEftid: number = 0; lvEftid < lv.children.length; lvEftid++) {
            lvEft = <egret.XML>lv.children[lvEftid];
            for (let styleid: number = 0; styleid < lvEft.children.length; styleid++) {
                style = <egret.XML>lvEft.children[styleid];
                switch (style.localName) {
                    case "boss":
                        this.makeBossLv(stageInfos);
                        break;
                    case "styleNum":
                        data = <egret.XMLText>style.children[0];
                        let num = Number(data.text);
                        stageInfos.push(new NPoint(num));
                        break;
                    case "gEft":
                        break;
                    default:
                        break;
                }
            }//end of styleid
        }//end of lvEftid
        return stageInfos;
    }

    public makeBossLv(infos: Array<NPoint>): void {
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 12));
        return;
    }

}