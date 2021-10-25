/**解析XML字符串
 * 从XML读取出数据
 */
class LevelData {
    public level: number = 0;
    private levelXML: egret.XML;
    public static instance: LevelData;

    private constructor() {
    }

    public static get I(): LevelData {
        if (this.instance == null) {
            this.instance = new LevelData();
        }
        return this.instance;
    }

    public initlize(level:any) {
        this.levelXML = egret.XML.parse(level.xml)
    }

    public getValueByKey(key: string): string {
        for (let loc: number = 0; loc < this.levelXML.children.length; loc++) {
            let data: egret.XML = <egret.XML>(this.levelXML.children[loc]);
            if (data.name == key) {
                let node = <egret.XMLText>(data.children[0]);
                return node.text;
            }
        }
        return null;
    }

}