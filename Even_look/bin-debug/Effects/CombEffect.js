var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**连续配对成功特效 */
var ComboEffect = (function () {
    function ComboEffect() {
    }
    ComboEffect.prototype.createCombImgAt = function (arg1, arg2, combnum) {
        var CombImg = new egret.Bitmap;
        CombImg.texture = RES.getRes("combo" + combnum + "_png");
        CombImg.anchorOffsetX = CombImg.width / 2;
        CombImg.anchorOffsetY = CombImg.height / 2;
        GameCtrl.I.setposition(CombImg, arg1, arg2, false);
        return CombImg;
    };
    return ComboEffect;
}());
__reflect(ComboEffect.prototype, "ComboEffect");
//# sourceMappingURL=CombEffect.js.map