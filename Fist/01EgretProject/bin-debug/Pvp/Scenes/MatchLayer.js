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
var MatchLayer = (function (_super) {
    __extends(MatchLayer, _super);
    function MatchLayer(matchcode) {
        if (matchcode === void 0) { matchcode = -1; }
        var _this = _super.call(this) || this;
        _this.matchcode = matchcode;
        if (_this.matchcode == -1) {
            _this.matchType = "matchRoom";
        }
        else {
            _this.matchType = "matchPlayers";
        }
        return _this;
    }
    MatchLayer.prototype.onEnter = function () {
        MatchLayer.instance = this;
        RoomManager.getInstance().AddRoom();
        // let bg: egret.Bitmap = UI.addPic(this, "loadingChunli_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // bg.scaleX = UI.WINSIZE_W/ bg.width; bg.scaleY = bg.scaleX;
        var bg = UI.addBg(this, "loadingChunli_png");
        // this.logTxt = UI.addText(this, "init success", 10, 70);
        UI.addText(this, "MatchLayer\n正在匹配...", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var cancle_btn = UI.addText(this, "取消匹配", UI.WINSIZE_W / 2, UI.WINSIZE_H * 0.8, true);
        UI.addClickAction(this, cancle_btn, function () {
            this.CancelMatch();
            this.destroy();
        });
        //开始口令匹配
        this.OnMatch();
    };
    MatchLayer.prototype.destroy = function () {
        this.stage.removeChild(this);
        MatchLayer.instance = null;
        FightReady.instance.touchChildren = true;
    };
    //开始匹配
    MatchLayer.prototype.OnMatch = function () {
        switch (this.matchType) {
            case "matchPlayers":
                RoomManager.getInstance().matchPlayers(this.matchcode);
                break;
            case "matchRoom":
                RoomManager.getInstance().matchRoom();
                break;
        }
    };
    //取消匹配
    MatchLayer.prototype.CancelMatch = function () {
        switch (this.matchType) {
            case "matchPlayers":
                RoomManager.getInstance().CancelmatchPlayers();
                break;
            case "matchRoom":
                RoomManager.getInstance().CancelmatchRoom();
                break;
        }
    };
    MatchLayer.prototype.onExit = function () {
    };
    return MatchLayer;
}(Scene));
__reflect(MatchLayer.prototype, "MatchLayer");
//# sourceMappingURL=MatchLayer.js.map