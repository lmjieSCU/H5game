/**消除九宫格位置的星星 */
class ItemBomb {
    
    public static Item_Bomb(dy: number, dx: number) {
        if (MainMoive.instance._map[dy][dx].died == false) {  //本身
            MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx]);
        } // end if
        if (dx != 0) {              //左
            if (MainMoive.instance._map[dy][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx - 1]);
            } // end if
        }
        if (dx != 9) {          //右
            if (MainMoive.instance._map[dy][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy][dx + 1]);
            } // end if
        }
        if (dy != 0) {          //上
            if (MainMoive.instance._map[dy - 1][dx].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx]);
            } // end if
        }
        if (dy != 9) {          //下
            if (MainMoive.instance._map[dy + 1][dx].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx]);
            } // end if
        }
        if (dx != 0 && dy != 9) {   //左下
            if (MainMoive.instance._map[dy + 1][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx - 1]);
            } // end if
        }
        if (dx != 9 && dy != 9) {   //右下
            if (MainMoive.instance._map[dy + 1][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy + 1][dx + 1]);
            } // end if
        }

        if (dx != 0 && dy != 0) {   // 左上
            if (MainMoive.instance._map[dy - 1][dx - 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx - 1]);
            } // end if
        }
        if (dx != 9 && dy != 0) {   //右上
            if (MainMoive.instance._map[dy - 1][dx + 1].died == false) {
                MainMoive.instance.Diamondsame.push(MainMoive.instance._map[dy - 1][dx + 1]);
            } // end if
        }
        let _loc4: number = 0;
        for (let _loc5: number = 0; _loc5 < MainMoive.instance.Diamondsame.length; _loc5++) {
            MainMoive.instance.Diamondsame[_loc5].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(MainMoive.instance.Diamondsame[_loc5].color + 10);
        } // end of for...in
        MainMoive.instance.caidan.Animation("bomb", true);
        MainMoive.instance.caidan.DeleteJinbi(5, 1);
        ItemModel.currentMode = ItemModel.NO_ITEM;
        return
    } // End of the function
}