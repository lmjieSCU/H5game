/**连续配对成功特效 */
class ComboEffect {

    public createCombImgAt(arg1: number, arg2: number, combnum: number): egret.Bitmap {
        let CombImg = new egret.Bitmap;
        CombImg.texture = RES.getRes("combo" + combnum + "_png");
        CombImg.anchorOffsetX = CombImg.width / 2;
        CombImg.anchorOffsetY = CombImg.height / 2;
        GameCtrl.I.setposition(CombImg, arg1, arg2, false);
        return CombImg;
    }

}