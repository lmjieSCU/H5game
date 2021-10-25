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
var LevelItem = (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem(arg1) {
        var _this = _super.call(this) || this;
        var loc3 = 0;
        _this.id = arg1;
        var loc1 = Model.levelModel.currentLevel;
        if (arg1 <= loc1) {
            if (arg1 != loc1) {
                _this.btn = UI.addPic("lv_pass_png", true, _this);
            }
            else {
                var data = RES.getRes("e_current_json");
                var txtr = RES.getRes("e_current_png");
                var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                _this.mcMovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("e_current"));
                _this.mcMovieClip.anchorOffsetX = _this.mcMovieClip.width * 1.8;
                _this.mcMovieClip.anchorOffsetY = _this.mcMovieClip.height * 1.8;
                _this.mcMovieClip.gotoAndPlay(1, -1);
                _this.addChild(_this.mcMovieClip);
                _this.btn = UI.addPic("lv_current_png", true, _this);
            }
            if ((loc3 = Model.levelModel.getLevelVO(arg1).star) > 0) {
                _this.star = UI.addPic("star" + loc3 + "_png", true, _this);
            }
            _this.setOpen(true);
        }
        else {
            _this.btn = UI.addPic("lv_lock_png", true, _this);
            _this.setOpen(false);
        }
        _this.levelText = UI.addBitText(_this, arg1, "lvfont_fnt", true, 0, 0, 1.3, 1.3);
        return _this;
    }
    Object.defineProperty(LevelItem.prototype, "x", {
        set: function (x) {
            this.btn.x = x;
            this.levelText.x = x;
            if (this.id == Model.levelModel.currentLevel) {
                this.mcMovieClip.x = x;
            }
            if (this.star) {
                this.star.x = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelItem.prototype, "y", {
        set: function (y) {
            this.btn.y = y;
            this.levelText.y = y + this.btn.height / 1.5;
            if (this.id == Model.levelModel.currentLevel) {
                this.mcMovieClip.y = y;
            }
            if (this.star) {
                this.star.y = y;
            }
        },
        enumerable: true,
        configurable: true
    });
    LevelItem.prototype.setOpen = function (arg1) {
        this.btn.$setTouchEnabled(arg1);
        return;
    };
    return LevelItem;
}(egret.Sprite));
__reflect(LevelItem.prototype, "LevelItem");
//# sourceMappingURL=LevelItem.js.map