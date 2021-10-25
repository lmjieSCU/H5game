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
var GameInfoPanel = (function (_super) {
    __extends(GameInfoPanel, _super);
    function GameInfoPanel() {
        var _this = _super.call(this) || this;
        _this.topinfo = UI.addPic("res.topinfo", false, _this, 0, 0);
        _this.topinfo.anchorOffsetX = _this.topinfo.width / 2;
        UI.setscalXandY(_this.topinfo, UI.WINSIZE_W * 1.1 / _this.topinfo.width, UI.WINSIZE_W * 1.1 / _this.topinfo.width);
        _this.levelLabel = UI.addBitText(_this, "", "info_fnt", false, -UI.WINSIZE_W / 2 + 55, 60);
        _this.levelLabel.textAlign = "center";
        _this.scorelLabel = UI.addBitText(_this, "", "info_fnt", false, 50, 60);
        _this.scorelLabel.textAlign = "center";
        _this.highScoreLabel = UI.addBitText(_this, "", "info_fnt", false, UI.WINSIZE_W / 2 - 120, 60);
        _this.highScoreLabel.textAlign = "center";
        _this.pause_btn = UI.addPic("res.pause_btn", true, _this, UI.WINSIZE_W / 2 - 30, 60);
        UI.addClickAction(_this, _this.pause_btn, _this.onBtnTouch);
        _this.hbar = new HProgressBar();
        _this.hbar.x = -110;
        _this.hbar.y = 60;
        _this.addChild(_this.hbar);
        _this.setPercent(0);
        return _this;
    }
    GameInfoPanel.prototype.onBtnTouch = function (arg1) {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_PAUSE_UI));
        return;
    };
    GameInfoPanel.prototype.updateInfo = function () {
        this.levelLabel.text = String(Model.levelModel.selectedLevel);
        this.scorelLabel.text = String(Model.levelModel.currentScore);
        this.highScoreLabel.text = String(Model.levelModel.currentHighScore);
        UI.FreshLocation(this.levelLabel);
        UI.FreshLocation(this.scorelLabel);
        UI.FreshLocation(this.highScoreLabel);
        return;
    };
    GameInfoPanel.prototype.setPercent = function (arg1) {
        this.hbar.ratio = arg1;
        return;
    };
    return GameInfoPanel;
}(Elements));
__reflect(GameInfoPanel.prototype, "GameInfoPanel");
//# sourceMappingURL=GameInfoPanel.js.map