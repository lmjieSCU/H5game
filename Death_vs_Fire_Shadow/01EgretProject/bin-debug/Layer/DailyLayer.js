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
var DailyLAyer = (function (_super) {
    __extends(DailyLAyer, _super);
    function DailyLAyer() {
        var _this = _super.call(this) || this;
        _this._dailyChoose = [];
        _this._dailyGot = [];
        _this._gotText = [];
        _this._getBtn = [];
        return _this;
    }
    DailyLAyer.prototype.onEnter = function () {
        DailyLAyer.instance = this;
        //背景
        UI.addPic(this, "checkin_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addPic(this, "checkin_box_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addPic(this, "checkin_word_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 135, true);
        //签到板块
        this._dailyGot[0] = UI.addPic(this, "checkin_day1_shadow_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2 - 50, true);
        this._gotText[0] = UI.addPic(this, "checkin_linqu_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2 - 50, true);
        this._dailyChoose[1] = UI.addPic(this, "checkin_day2_png", UI.WINSIZE_W / 2 - 95, UI.WINSIZE_H / 2 - 50, true);
        this._dailyChoose[2] = UI.addPic(this, "checkin_day3_png", UI.WINSIZE_W / 2 + 10, UI.WINSIZE_H / 2 - 50, true);
        this._dailyChoose[3] = UI.addPic(this, "checkin_day4_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2 + 80, true);
        this._dailyChoose[4] = UI.addPic(this, "checkin_day5_png", UI.WINSIZE_W / 2 - 95, UI.WINSIZE_H / 2 + 80, true);
        this._dailyChoose[5] = UI.addPic(this, "checkin_day6_png", UI.WINSIZE_W / 2 + 10, UI.WINSIZE_H / 2 + 80, true);
        this._dailyChoose[6] = UI.addPic(this, "checkin_day7_png", UI.WINSIZE_W / 2 + 160, UI.WINSIZE_H / 2 + 10, true);
        this._getBtn = UI.addBtn(this, "checkin_button_png", UI.WINSIZE_W / 2 + 160, UI.WINSIZE_H / 2 + 150, true, function (arg) {
        });
    };
    DailyLAyer.prototype.onExit = function () {
    };
    return DailyLAyer;
}(Scene));
__reflect(DailyLAyer.prototype, "DailyLAyer");
//# sourceMappingURL=DailyLayer.js.map