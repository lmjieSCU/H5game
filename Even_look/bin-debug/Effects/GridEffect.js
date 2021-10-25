var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**cells配对成功消失特效 */
var GridEffect = (function () {
    function GridEffect() {
    }
    GridEffect.prototype.createAngImgAt = function (arg1, arg2) {
        var angle = new egret.Bitmap;
        angle.texture = RES.getRes("angle_png");
        angle.anchorOffsetX = angle.width / 2;
        angle.anchorOffsetY = angle.height / 2;
        GameCtrl.I.setposition(angle, arg1, arg2, false);
        return angle;
    };
    GridEffect.prototype.createLineImgAt = function (arg1, arg2) {
        var min = 0;
        var max = 0;
        var line;
        var lines = new Array();
        if (arg1.x == arg2.x) {
            min = Math.min(arg1.y, arg2.y);
            max = Math.max(arg1.y, arg2.y);
            for (var i = min; i < max; i++) {
                line = this.createLineImg(new NPoint(arg1.x, i), new NPoint(arg1.x, i + 1));
                lines.push(line);
            }
            return lines;
        }
        if (arg1.y == arg2.y) {
            min = Math.min(arg1.x, arg2.x);
            max = Math.max(arg1.x, arg2.x);
            for (var i = min; i < max; i++) {
                line = this.createLineImg(new NPoint(i, arg1.y), new NPoint(i + 1, arg1.y));
                lines.push(line);
            }
            return lines;
        }
        return null;
    };
    GridEffect.prototype.createLineImg = function (arg1, arg2) {
        var line = new egret.Bitmap;
        line.texture = RES.getRes("line_png");
        line.anchorOffsetX = line.width / 2;
        line.anchorOffsetY = line.height / 2;
        line.scaleX = Math.min(UI.WINSIZE_W / 8, UI.WINSIZE_H / 8) / line.width;
        var type = null;
        if (arg1.x == arg2.x && Math.abs(arg1.y - arg2.y) == 1) {
            type = "horizon";
            GameCtrl.I.setposition(line, arg1.x, (arg1.y + arg2.y) / 2.0, false);
            line.rotation = 0;
            return line;
        }
        if (arg1.y == arg2.y && Math.abs(arg1.x - arg2.x) == 1) {
            type = "vertical";
            GameCtrl.I.setposition(line, (arg1.x + arg2.x) / 2.0, arg2.y, false);
            line.rotation = 90;
            return line;
        }
        return null;
    };
    return GridEffect;
}());
__reflect(GridEffect.prototype, "GridEffect");
//# sourceMappingURL=GridEffect.js.map