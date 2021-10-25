var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**消除九宫格位置的星星 */
var ItemBomb = (function () {
    function ItemBomb() {
    }
    ItemBomb.Item_Bomb = function (dy, dx) {
        if (MainMoive.instance._map[dy][dx].died == false) {
            MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx]);
        } // end if
        if (dx != 0) {
            if (MainMoive.instance._map[dy][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx - 1]);
            } // end if
        }
        if (dx != 9) {
            if (MainMoive.instance._map[dy][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx + 1]);
            } // end if
        }
        if (dy != 0) {
            if (MainMoive.instance._map[dy - 1][dx].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx]);
            } // end if
        }
        if (dy != 9) {
            if (MainMoive.instance._map[dy + 1][dx].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx]);
            } // end if
        }
        if (dx != 0 && dy != 9) {
            if (MainMoive.instance._map[dy + 1][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx - 1]);
            } // end if
        }
        if (dx != 9 && dy != 9) {
            if (MainMoive.instance._map[dy + 1][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx + 1]);
            } // end if
        }
        if (dx != 0 && dy != 0) {
            if (MainMoive.instance._map[dy - 1][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx - 1]);
            } // end if
        }
        if (dx != 9 && dy != 0) {
            if (MainMoive.instance._map[dy - 1][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx + 1]);
            } // end if
        }
        var _loc4 = 0;
        for (var _loc5 = 0; _loc5 < MainMoive.instance.Diamondsame.length; _loc5++) {
            MainMoive.instance.Diamondsame[_loc5].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(MainMoive.instance.Diamondsame[_loc5].color + 10);
        } // end of for...in
        MainMoive.instance.caidan.Animation("bomb", true);
        MainMoive.instance.caidan.DeleteJinbi(5, 1);
        ItemModel.currentMode = ItemModel.NO_ITEM;
        return;
    }; // End of the function
    return ItemBomb;
}());
__reflect(ItemBomb.prototype, "ItemBomb");
//# sourceMappingURL=ItemBomb.js.map