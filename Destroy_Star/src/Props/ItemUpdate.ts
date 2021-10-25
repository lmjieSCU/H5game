/**刷新所有现存星星颜色 */
class ItemUpdate {
    public static update(): void {
        let r1: number;
        let r2: number;
        let r3: number;
        if (MainMoive.instance.living_gz > 2) {   //还有剩余星星且有机会点击
            for (let _loc1 = 0; _loc1 < MainMoive.instance.living_gz; ++_loc1) {
                do {
                    r1 = Math.floor(MainMoive.instance.my_diamond.length * Math.random());
                    if (r1 == 100) { r1 = 99; }
                } while (MainMoive.instance.my_diamond[r1].color == 1)
                do {
                    r2 = Math.floor(MainMoive.instance.my_diamond.length * Math.random());
                    if (r2 == 100) { r2 = 99; }
                } while (MainMoive.instance.my_diamond[r2].color == 1 || MainMoive.instance.my_diamond[r2] == MainMoive.instance.my_diamond[r1])
                //找到r1,r2两个位置,满足颜色不同且存在,进行交换
                r3 = MainMoive.instance.my_diamond[r1].color;
                MainMoive.instance.my_diamond[r1].color = MainMoive.instance.my_diamond[r2].color;
                MainMoive.instance.my_diamond[r1].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(MainMoive.instance.my_diamond[r1].color);
                MainMoive.instance.my_diamond[r2].color = r3;
                MainMoive.instance.my_diamond[r2].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(r3);
            } // end of for
        } // end if

    }
}