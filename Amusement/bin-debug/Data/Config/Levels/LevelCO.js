var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**关卡数据
 * 从XML中通过LevelConfig读取
 * tile：瓷砖
 * board：木板
 * ice：冰块
 * stone：石块
 * candy：糖果
 * eat:
 * monster：怪物
 * lock：锁
 * mode:模式
 */
var LevelCO = (function () {
    function LevelCO() {
    }
    return LevelCO;
}());
__reflect(LevelCO.prototype, "LevelCO");
//# sourceMappingURL=LevelCO.js.map