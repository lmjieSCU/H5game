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
/**分为3种战斗模式:普通闯关、计时、记步
 * 共有UI为_bg(背景)、_bag(背包)、_jinbi,道具
 * UI分为图片、文字 + 数字
 * 通过改变数字从而改变文字
 * 普通闯关包括：_level,_object
 * 计时包括:_LimitTime,_timeText
 * 记步包括:_LimitBu,_bushuText
 */
var FightUI = (function (_super) {
    __extends(FightUI, _super);
    function FightUI() {
        var _this = _super.call(this) || this;
        _this.initlizePic1();
        _this.initlizePic2();
        _this.initlizeBtn();
        return _this;
    }
    Object.defineProperty(FightUI.prototype, "Jinbi", {
        set: function (jb) {
            this._jinbi.text = String(jb);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "time", {
        set: function (_time) {
            this._timeText.text = String(_time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "bushu", {
        set: function (_bushu) {
            this._bushuText.text = String(_bushu);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "level", {
        set: function (_level) {
            this._levelText.text = String(_level);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "score", {
        set: function (_score) {
            this._score.text = String(_score);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "obScore", {
        set: function (_obScore) {
            this._obScoreText.text = String(_obScore);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "heighest", {
        set: function (_heighest) {
            this._heighestText.text = String(_heighest);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FightUI.prototype, "Notice", {
        set: function (notice) {
            this._notice.text = notice;
            this._notice.anchorOffsetX = this._notice.width / 2;
            this._notice.anchorOffsetY = this._notice.height / 2;
            this._notice.alpha = 1;
            egret.clearTimeout(this._noticeTime);
            this._noticeTime = egret.setTimeout(function () {
                if (MainMoive.instance != null) {
                    MainMoive.instance.caidan._notice.alpha = 0;
                }
            }, this, 2000);
        },
        enumerable: true,
        configurable: true
    });
    FightUI.prototype.pause = function () {
        MainMoive.instance.pause();
    };
    /**扣除金币 */
    FightUI.prototype.DeleteJinbi = function (del, itemtype) {
        GameModel.jinbi = GameModel.jinbi - del;
        this.Jinbi = GameModel.jinbi;
        switch (itemtype) {
            case 1:
                this.Notice = "炸弹消耗5个金币";
                break;
            case 2:
                this.Notice = "颜料消耗2个金币";
                break;
            case 3:
                this.Notice = "彩虹消耗2个金币";
                break;
        }
    };
    /**共有UI */
    FightUI.prototype.initlizePic1 = function () {
        this._bg = UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setscalXandY(this._bg, UI.WINSIZE_W * 1.1 / this._bg.width, UI.WINSIZE_H * 1.1 / this._bg.height);
        //得分
        this._score = UI.addText(this, "0", 0, 0);
        // UI.setscalXandY(this._score, 1.5, 1.5);
        UI.setXandY(this._score, UI.WINSIZE_W * 2 / 5, UI.WINSIZE_H / 15);
        //背包
        this._bag = UI.addPic(this, "bagIco_png", 0, 0);
        UI.setXandY(this._bag, UI.WINSIZE_W - this._bag.width, 10);
        //金币
        this._jinbi = UI.addText(this, GameModel.jinbi, 0, 0);
        // UI.setscalXandY(this._jinbi, 1.5, 1.5);
        UI.setXandY(this._jinbi, this._bag.x - this._jinbi.width, 20);
        this._notice = new egret.TextField;
        this._notice.text = null;
        this._notice.x = UI.WINSIZE_W / 2;
        this._notice.y = UI.WINSIZE_H / 5;
        this._notice.size = 40;
        this.addChild(this._notice);
    };
    /**特有UI */
    FightUI.prototype.initlizePic2 = function () {
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                //目标得分
                this._jinbi.text = String(GameModel.jinbi);
                this._object = UI.addPic(this, "mbIco_png", 0, 0);
                UI.setXandY(this._object, UI.WINSIZE_W * 2 / 5 - this._object.width / 2, 10);
                this._obScoreText = UI.addText(this, "1000", 0, 0);
                // UI.setscalXandY(this._obScoreText, 1.5, 1.5);
                UI.setXandY(this._obScoreText, this._object.x + this._object.width * 1.1, 10);
                //level
                this._level = UI.addPic(this, "djIco_png", 0, 0);
                UI.setXandY(this._level, 0, 10);
                this._levelText = UI.addText(this, "1", 0, 0);
                // UI.setscalXandY(this._levelText, 1.5, 1.5);
                UI.setXandY(this._levelText, this._level.width * 2 / 5, 10);
                break;
            case GameModel.TIMELIMIT:
                this._jinbi.text = String(GameModel.jinbi);
                this._heighest = UI.addPic(this, "topIco_png", 0, 0);
                UI.setXandY(this._heighest, UI.WINSIZE_W * 2 / 5 - this._heighest.width / 2, 10);
                this._heighestText = UI.addText(this, GameModel.heighest1, 0, 0);
                // UI.setscalXandY(this._heighestText, 1.5, 1.5);
                UI.setXandY(this._heighestText, this._heighest.x + this._heighest.width * 1.3, 10);
                this._LimitTime = UI.addPic(this, "shiIco_png", 0, 0);
                UI.setXandY(this._LimitTime, 0, 10);
                this._timeText = UI.addText(this, "60", 0, 0);
                // UI.setscalXandY(this._timeText, 1.5, 1.5);
                UI.setXandY(this._timeText, this._LimitTime.x + this._LimitTime.width + 10, 10);
                break;
            case GameModel.BULIMIT:
                this._jinbi.text = String(GameModel.jinbi);
                this._heighest = UI.addPic(this, "topIco_png", 0, 0);
                UI.setXandY(this._heighest, UI.WINSIZE_W * 2 / 5 - this._heighest.width / 2, 10);
                this._heighestText = UI.addText(this, GameModel.heighest2, 0, 0);
                // UI.setscalXandY(this._heighestText, 1.5, 1.5);
                UI.setXandY(this._heighestText, this._heighest.x + this._heighest.width * 1.1, 10);
                this._LimitBu = UI.addPic(this, "buIco_png", 0, 0);
                UI.setXandY(this._LimitBu, 0, 10);
                this._bushuText = UI.addText(this, "60", 0, 0);
                // UI.setscalXandY(this._bushuText, 1.5, 1.5);
                UI.setXandY(this._bushuText, this._LimitBu.x + this._LimitBu.width + 10, 10);
                break;
        }
    };
    FightUI.prototype.initlizeBtn = function () {
        //暂停
        this._pause = UI.addBtn(this, "pauseBtn_png", 0, 0, false, this.pause);
        UI.setXandY(this._pause, UI.WINSIZE_W / 5, UI.WINSIZE_H / 15);
        //道具
        this._update = UI.addBtn(this, "mv3_png", 0, 0, false, this.ModelUpdate);
        UI.setXandY(this._update, UI.WINSIZE_W - this._update.width, UI.WINSIZE_H / 15);
        this._paint = UI.addBtn(this, "mv2_png", 0, 0, false, this.ModelPaint);
        UI.setXandY(this._paint, this._update.x - this._update.width - 10, UI.WINSIZE_H / 15);
        this._bomb = UI.addBtn(this, "mv1_png", 0, 0, false, this.ModelBomb);
        UI.setXandY(this._bomb, this._paint.x - this._paint.width - 10, UI.WINSIZE_H / 15);
    };
    FightUI.prototype.Animation = function (node, tag) {
        if (tag === void 0) { tag = false; }
        var s1 = node == "Paint" ? this._paint : this._bomb;
        var s2 = node == "Paint" ? this._bomb : this._paint;
        if (tag == false) {
            egret.Tween.removeTweens(s2);
            egret.Tween.get(s1, { loop: true }).to({ "scaleX": 1.1, "scaleY": 1.1 }, 300).to({ "scaleX": 1, "scaleY": 1 }, 300);
        }
        else {
            egret.Tween.removeTweens(s1);
        }
    };
    FightUI.prototype.ModelBomb = function () {
        if (MainMoive.instance.jiesu == true) {
            return;
        }
        if (GameModel.jinbi < 5) {
            this.Notice = "没有足够的金币";
            return;
        }
        if (ItemModel.currentMode != ItemModel.BOMB) {
            this.Notice = "炸掉3*3的方块";
            this.Animation("bomb");
            ItemModel.currentMode = ItemModel.BOMB;
        }
        else {
            this.Notice = null;
            this.Animation("bomb", true);
            ItemModel.currentMode = ItemModel.NO_ITEM;
        }
    };
    FightUI.prototype.ModelPaint = function () {
        if (MainMoive.instance.jiesu == true) {
            return;
        }
        if (GameModel.jinbi < 2) {
            this.Notice = "没有足够的金币";
            return;
        }
        if (ItemModel.currentMode != ItemModel.PAINT) {
            this.Notice = "选择需要改变颜色的方块";
            this.Animation("Paint");
            ItemModel.currentMode = ItemModel.PAINT;
        }
        else {
            this.Notice = null;
            this.Animation("Paint", true);
            ItemModel.currentMode = ItemModel.NO_ITEM;
        }
    };
    FightUI.prototype.ModelUpdate = function () {
        if (MainMoive.instance.jiesu == true) {
            return;
        }
        if (GameModel.jinbi < 2) {
            this.Notice = "没有足够的金币";
            return;
        }
        this.DeleteJinbi(2, 3);
        ItemUpdate.update();
        // this._mainMoive.mys3.start(); 
    };
    return FightUI;
}(egret.DisplayObjectContainer));
__reflect(FightUI.prototype, "FightUI");
//# sourceMappingURL=FightUI.js.map