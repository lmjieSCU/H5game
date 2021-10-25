var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ItemModel = (function () {
    function ItemModel() {
        return;
    } // end function
    ItemModel.NO_ITEM = 1; //无道具
    ItemModel.BOMB = 2; //炸弹
    ItemModel.PAINT = 3; //画板
    ItemModel.UPDATE = 4; //刷新
    //
    ItemModel.currentMode = ItemModel.NO_ITEM; //默认设置无道具
    return ItemModel;
}());
__reflect(ItemModel.prototype, "ItemModel");
//# sourceMappingURL=ItemModel.js.map