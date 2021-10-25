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
var Cannon = (function (_super) {
    __extends(Cannon, _super);
    function Cannon() {
        var _this = _super.call(this) || this;
        _this.index = 1;
        // let data = RES.getRes("cannon_json");
        // let txtr = RES.getRes("cannon_png");
        // let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        // this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("cannon"));
        // this.addChild(this.animation)
        _this.cannon_img = UI.addPic("res.shoot_1", false, _this, 0, -10);
        _this.FreshLocation();
        return _this;
    }
    Cannon.prototype.FreshLocation = function () {
        this.cannon_img.anchorOffsetX = this.cannon_img.width / 2;
        this.cannon_img.anchorOffsetY = this.cannon_img.height - (1 - 0.9533) * UI.WINSIZE_H;
        return;
    };
    Cannon.prototype.play = function () {
        this.index = this.index + 1;
        if (this.index > 4) {
            this.index = 1;
            this.cannon_img.texture = RES.getRes("res.shoot_" + this.index);
            this.FreshLocation();
            GameRender.I.Remove(this);
            return;
        }
        this.cannon_img.texture = RES.getRes("res.shoot_" + this.index);
        this.FreshLocation();
    };
    Cannon.prototype.setAction = function (arg1) {
        this.index = 1;
        GameRender.I.Add(this, this.play);
        return;
        // if (arg1 != 1) {
        //     if (arg1 == 2) {
        //         this.animation.gotoAndPlay(1);
        //     }
        // }
        // else {
        //     this.animation.gotoAndPlay(1);
        // }
        // return;
    };
    return Cannon;
}(Elements));
__reflect(Cannon.prototype, "Cannon");
//# sourceMappingURL=Cannon.js.map