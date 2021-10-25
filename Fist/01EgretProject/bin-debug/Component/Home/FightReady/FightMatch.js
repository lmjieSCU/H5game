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
var FightMatch = (function (_super) {
    __extends(FightMatch, _super);
    function FightMatch(playInfo) {
        var _this = _super.call(this) || this;
        _this.info = new egret.DisplayObjectContainer();
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.playInfo = playInfo;
        return _this;
    }
    FightMatch.prototype.onEnter = function () {
        var _this = this;
        this.initInfo();
        this.initMap();
        var start = UI.addPic(this, 'Online_button_startgame_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // this.$setTouchChildren(false)
            _this.stage.addChild(new MatchLayer());
        }, this);
    };
    FightMatch.prototype.initInfo = function () {
        this.info = new egret.DisplayObjectContainer();
        this.addChild(this.info);
        var bg = UI.addPic(this.info, "Online_box_png", 0, 0);
        this.info.width = bg.width;
        this.info.height = bg.height;
        this.info.x = UI.WINSIZE_W - this.info.width - 50;
        this.info.y = this.parent.getChildAt(0).height;
        this.fightMatchInfo = FightData.getFightMatchInfo();
        var progress = this.parent.createProgress(this.fightMatchInfo.failCount / (this.fightMatchInfo.failCount + this.fightMatchInfo.victoryCount) || 0);
        this.info.addChild(progress);
        progress.x = this.info.width / 2 - progress.width / 2;
        progress.y = progress.height + 20;
        var victory = this.parent.getNumber(this.fightMatchInfo.victoryCount, this.info);
        victory.x = this.info.width / 2;
        victory.y = 60;
        var repeatedly = this.parent.getNumber(this.fightMatchInfo.repeatedlyMax, this.info);
        repeatedly.x = this.info.width / 2;
        repeatedly.y = 80;
        this.heroVictory = this.parent.getNumber(this.fightMatchInfo.heroList[0].victory, this.info);
        this.heroVictory.x = this.info.width / 2;
        this.heroVictory.y = 100;
        var repeatedlyNow = this.parent.getNumber(this.fightMatchInfo.repeatedlyNow, this.info);
        repeatedlyNow.x = this.info.width / 2;
        repeatedlyNow.y = 120;
    };
    FightMatch.prototype.initMap = function () {
        var _this = this;
        var mapInfo = [1, 2, 3, 4, 5];
        var maps = new egret.DisplayObjectContainer();
        mapInfo.map(function (data, index) {
            var map = new egret.DisplayObjectContainer();
            maps.addChild(map);
            var bg = UI.addPic(map, "Adventure_box_map_png", 0, 0);
            map.anchorOffsetX = map.width / 2;
            map.anchorOffsetY = map.height / 2;
            map.y += map.height / 2;
            map.x = (map.width + 20) * (index + 1);
        });
        maps.width += maps.width / 2;
        this.mapScroll = new ScrollView(maps, this.info.width, maps.height + 20, this.info.x, this.info.y + this.info.height + 20, 1, 1, true, false, this, function (nowChild) {
            // for(let i=0;i<maps.numChildren;i++) {
            //     let m = maps.getChildAt(i);
            //     if(i == nowChild) {
            //         m.$setScaleX(1);
            //         m.$setScaleY(1);
            //     } else {
            //         m.$setScaleX(0.8);
            //         m.$setScaleY(0.8);
            //     }
            // }
        }, false, true, true, 0.8);
        this.addChild(this.mapScroll);
        this.mapScroll.changePosition(0, 0);
        var left = UI.addBtn(this, "loadingArrow_png", this.mapScroll.x, this.mapScroll.y + this.mapScroll.height / 2, true, function () { return _this.mapScroll.last(); });
        var right = UI.addBtn(this, "loadingArrow_png", this.mapScroll.x + this.mapScroll.width, left.y, true, function () { return _this.mapScroll.next(); });
        right.skewY = 180;
    };
    return FightMatch;
}(egret.DisplayObjectContainer));
__reflect(FightMatch.prototype, "FightMatch", ["egret.DisplayObject"]);
//# sourceMappingURL=FightMatch.js.map