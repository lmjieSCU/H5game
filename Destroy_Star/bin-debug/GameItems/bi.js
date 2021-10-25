var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var bi = (function (_super) {
    __extends(bi, _super);
    function bi(index, totalNum) {
        var _this = _super.call(this) || this;
        _this.renderFrame = 0;
        _this.index = index;
        _this.totalNum = totalNum;
        _this.texture = RES.getRes("bi_png");
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        UI.setXandY(_this, UI.WINSIZE_W / (_this.totalNum + 4) * (_this.index + 1), UI.WINSIZE_H / 1.5);
        UI.setscalXandY(_this, 2, 2);
        _this.xspeed = (_this.x - UI.WINSIZE_W) / 5;
        _this.yspeed = (_this.y - 20) / 5;
        _this.renderFrame = 0;
        return _this;
    }
    bi.prototype.play = function () {
        this.renderfun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    };
    bi.prototype.render = function () {
        if (this.renderFrame > 6) {
            GameModel.jinbi++;
            FinishScene.instance._jinbi.text = String(GameModel.jinbi);
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.parent.removeChild(this);
            return;
        }
        this.x = this.x - this.xspeed;
        this.y = this.y - this.yspeed;
        this.renderFrame++;
        if (this.renderFrame == 4) {
            if (this.index < this.totalNum - 1) {
                FinishScene.instance.Arrb[this.index + 1].play();
            }
            else {
                FinishScene.instance.addBtn();
            }
        }
    };
    return bi;
}(egret.Bitmap));
__reflect(bi.prototype, "bi");
//# sourceMappingURL=bi.js.map