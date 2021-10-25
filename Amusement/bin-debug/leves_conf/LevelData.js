var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**解析XML字符串
 * 从XML读取出数据
 */
var LevelData = (function () {
    function LevelData() {
        this.level = 0;
    }
    Object.defineProperty(LevelData, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new LevelData();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    LevelData.prototype.initlize = function (level) {
        this.levelXML = egret.XML.parse(level.xml);
    };
    LevelData.prototype.getValueByKey = function (key) {
        for (var loc = 0; loc < this.levelXML.children.length; loc++) {
            var data = (this.levelXML.children[loc]);
            if (data.name == key) {
                var node = (data.children[0]);
                return node.text;
            }
        }
        return null;
    };
    return LevelData;
}());
__reflect(LevelData.prototype, "LevelData");
//# sourceMappingURL=LevelData.js.map