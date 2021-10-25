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
/**通关总结页面:胜利
 * 返回按钮数组:[返回选关,下一关]
 */
var PassLayer = (function (_super) {
    __extends(PassLayer, _super);
    function PassLayer(hasnext, starnum) {
        var _this = _super.call(this) || this;
        _this._hasNextLv = true;
        _this._hasNextLv = hasnext;
        _this.starnum = starnum;
        return _this;
    }
    PassLayer.prototype.init = function () {
        var ans = new Array();
        this.bg = UI.addPic(this, "bg_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.1 / this.bg.width, UI.WINSIZE_H * 1.1 / this.bg.height);
        //
        this.pass = UI.addPic(this, "pass_png", true);
        UI.setXandY(this.pass, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.5);
        UI.setscalXandY(this.pass, 0, 0);
        this.star = new egret.Bitmap;
        switch (this.starnum) {
            case 1:
                this.star.texture = RES.getRes("onestar_png");
                break;
            case 2:
                this.star.texture = RES.getRes("twostar_png");
                break;
            case 3:
                this.star.texture = RES.getRes("star_png");
                break;
        }
        UI.setXandY(this.star, UI.WINSIZE_W / 2, this.pass.y - this.pass.height * UI.WINSIZE_W * 1.2 / this.pass.width / 3.2);
        this.star.anchorOffsetX = this.star.width / 2;
        this.star.anchorOffsetY = this.star.height / 2;
        this.star.alpha = 0;
        UI.setscalXandY(this.star, 5, 5);
        this.addChild(this.star);
        //
        this.nowscore = UI.addText(this, GameCtrl.I._gridCtrl.gridScore, true);
        UI.setXandY(this.nowscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.22);
        this.nowscore.size = 35;
        this.nowscore.alpha = 0;
        this.nowscore.textColor = 0xff69b4;
        this.highestscore = UI.addText(this, LocalDataCtrl.I.highScores[GameData.I.level - 1], true);
        UI.setXandY(this.highestscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.92);
        this.highestscore.size = 35;
        this.highestscore.alpha = 0;
        this.highestscore.textColor = 0x00ffff;
        this.totalscore = UI.addText(this, LocalDataCtrl.I.FreshTotalScore(GameCtrl.I._gridCtrl.gridScore), true);
        UI.setXandY(this.totalscore, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.7);
        this.totalscore.size = 35;
        this.totalscore.alpha = 0;
        this.totalscore.textColor = 0xda6920;
        //
        this.toChooseLvBtn = UI.addPic(this, "return_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W / 3, UI.WINSIZE_H / 1.4);
        UI.setscalXandY(this.toChooseLvBtn, 100 / this.toChooseLvBtn.width, 100 / this.toChooseLvBtn.height);
        this.toChooseLvBtn.alpha = 0;
        //
        ans.push(this.toChooseLvBtn);
        egret.setTimeout(function () {
            this.toChooseLvBtn.alpha = 1;
            this.totalscore.alpha = 1;
            this.nowscore.alpha = 1;
            this.highestscore.alpha = 1;
            this.star.alpha = 1;
        }, this, 1100);
        //
        if (this._hasNextLv) {
            this.nextLvBtn = UI.addPic(this, "next_png", true);
            UI.setXandY(this.nextLvBtn, UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 1.4);
            UI.setscalXandY(this.nextLvBtn, 100 / this.nextLvBtn.width, 100 / this.nextLvBtn.height);
            this.nextLvBtn.alpha = 0;
            ans.push(this.nextLvBtn);
            egret.setTimeout(function () { this.nextLvBtn.alpha = 1; }, this, 1100);
        }
        else {
            this.toChooseLvBtn.x = UI.WINSIZE_W / 2;
        }
        //
        var t1 = egret.Tween.get(this.pass).to({ scaleX: UI.WINSIZE_W * 1.2 / this.pass.width, scaleY: UI.WINSIZE_W * 1.2 / this.pass.width }, 1000);
        return ans;
    };
    return PassLayer;
}(Layer));
__reflect(PassLayer.prototype, "PassLayer");
//# sourceMappingURL=PassLayer.js.map