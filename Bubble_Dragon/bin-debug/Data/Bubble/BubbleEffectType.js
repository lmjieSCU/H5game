var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BubbleEffectType = (function () {
    function BubbleEffectType() {
        return;
    }
    BubbleEffectType.NORMAL_BUBBLE = 1;
    BubbleEffectType.STAR_BUBBLE = 2;
    BubbleEffectType.STONE_INDISABLE_BUBBLE = 3;
    BubbleEffectType.STONE_DISABLE_BUBBLE = 4;
    BubbleEffectType.LIGHTING_BUBBLE = 5;
    BubbleEffectType.CHANGE_BUBBLE = 6;
    BubbleEffectType.SKELETON_BUBBLE = 7;
    BubbleEffectType.BLANK_BUBBLE = 8;
    BubbleEffectType.MAGIC_BUBBLE = 9;
    BubbleEffectType.BOMB_BUBBLE = 10;
    BubbleEffectType.BOMB_SAMECOLOR = 11;
    BubbleEffectType.BOMB_FIRE = 12;
    BubbleEffectType.BUBBLE_INVISIBLE = 1000;
    return BubbleEffectType;
}());
__reflect(BubbleEffectType.prototype, "BubbleEffectType");
//# sourceMappingURL=BubbleEffectType.js.map