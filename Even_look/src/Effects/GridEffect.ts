/**cells配对成功消失特效 */
class GridEffect {
    
    public createAngImgAt(arg1: number, arg2: number): egret.Bitmap {
        let angle = new egret.Bitmap;
        angle.texture = RES.getRes("angle_png");
        angle.anchorOffsetX = angle.width / 2;
        angle.anchorOffsetY = angle.height / 2;
        GameCtrl.I.setposition(angle, arg1, arg2, false);
        return angle;
    }


    public createLineImgAt(arg1: NPoint, arg2: NPoint): Array<egret.Bitmap> {
        let min: number = 0;
        let max: number = 0;
        let line: egret.Bitmap;
        let lines: Array<egret.Bitmap> = new Array<egret.Bitmap>();
        if (arg1.x == arg2.x) {
            min = Math.min(arg1.y, arg2.y);
            max = Math.max(arg1.y, arg2.y);
            for (let i = min; i < max; i++) {
                line = this.createLineImg(new NPoint(arg1.x, i), new NPoint(arg1.x, i + 1));
                lines.push(line);
            }
            return lines;
        }
        if (arg1.y == arg2.y) {
            min = Math.min(arg1.x, arg2.x);
            max = Math.max(arg1.x, arg2.x);
            for (let i = min; i < max; i++) {
                line = this.createLineImg(new NPoint(i, arg1.y), new NPoint(i + 1, arg1.y));
                lines.push(line);
            }
            return lines;
        }
        return null;
    }

    private createLineImg(arg1: NPoint, arg2: NPoint): egret.Bitmap {
        let line: egret.Bitmap = new egret.Bitmap;
        line.texture = RES.getRes("line_png");
        line.anchorOffsetX = line.width / 2;
        line.anchorOffsetY = line.height / 2;
        line.scaleX = Math.min(UI.WINSIZE_W / 8, UI.WINSIZE_H / 8) / line.width;
        let type: string = null;
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
    }

}