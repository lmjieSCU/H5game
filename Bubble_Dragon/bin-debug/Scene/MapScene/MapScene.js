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
/**选择关卡页面 */
var MapScene = (function (_super) {
    __extends(MapScene, _super);
    function MapScene() {
        var _this = _super.call(this) || this;
        _this.lvItems = [];
        _this.maps = [];
        _this.posX = [
            0.65, 0.69, 0.59, 0.4, 0.3, 0.48, 0.7, 0.89, 0.92, 0.73, 0.51, 0.3, 0.14, 0.23, 0.41, 0.63, 0.75, 0.64,
            0.65, 0.81, 0.89, 0.73, 0.55, 0.36, 0.27, 0.44, 0.64, 0.81, 0.88, 0.75, 0.57, 0.38, 0.2, 0.25, 0.44, 0.66,
            0.85, 0.66, 0.47, 0.3, 0.22, 0.4, 0.61, 0.79, 0.8, 0.6, 0.4, 0.3, 0.5, 0.73, 0.86, 0.68, 0.48, 0.28,
            0.28, 0.49, 0.67, 0.85, 0.66, 0.44, 0.23, 0.21, 0.42, 0.62, 0.79, 0.89, 0.78, 0.56, 0.34, 0.25, 0.33, 0.49,
        ];
        _this.posY = [
            0.96, 0.86, 0.77, 0.73, 0.64, 0.58, 0.57, 0.54, 0.45, 0.39, 0.42, 0.44, 0.37, 0.28, 0.25, 0.23, 0.14, 0.04,
            0.88, 0.84, 0.75, 0.71, 0.71, 0.69, 0.6, 0.55, 0.52, 0.5, 0.4, 0.35, 0.34, 0.33, 0.29, 0.19, 0.14, 0.1,
            0.94, 0.9, 0.87, 0.83, 0.71, 0.66, 0.63, 0.59, 0.49, 0.45, 0.43, 0.35, 0.3, 0.26, 0.16, 0.11, 0.09, 0.04,
            0.94, 0.9, 0.87, 0.79, 0.72, 0.71, 0.69, 0.59, 0.54, 0.51, 0.46, 0.36, 0.26, 0.27, 0.29, 0.21, 0.12, 0.04,
        ];
        _this._scrollRect = new egret.Rectangle(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        _this.content = new egret.DisplayObjectContainer();
        _this.addChild(_this.content);
        var rate = Math.floor((Model.levelModel.currentLevel - 1) / 18);
        _this._scrollRect.y = rate * (-UI.WINSIZE_H);
        _this.content.scrollRect = _this._scrollRect;
        return _this;
    }
    MapScene.prototype.onEnter = function () {
        this.showMaps();
        this.showLvTtems();
        this.ScorllMap();
        SceneManager.getInstance().AddLayer(new SettingLayer());
    };
    MapScene.prototype.showMaps = function () {
        var which_map = 0;
        var loc7 = null;
        var pages = Math.ceil(Model.levelModel.totalLevel / 18); //一页18关
        var loc3 = 1;
        while (loc3 <= pages) {
            which_map = (loc3 - 1) % 4 + 1;
            loc7 = UI.addPic("map_" + which_map + "_png", false, this.content, 0, (1 - loc3) * UI.WINSIZE_H);
            this.maps.push(loc7);
            ++loc3;
        }
        ;
    };
    MapScene.prototype.showLvTtems = function () {
        var loc1 = null;
        var level = 0;
        level = (this.lvItems.length - 1);
        while (level >= 0) {
            loc1 = this.lvItems[level];
            loc1.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTouch, this);
            loc1.parent.removeChild(loc1);
            this.lvItems.splice(level, 1);
            --level;
        }
        level = 1;
        while (level <= Model.levelModel.totalLevel) {
            loc1 = new LevelItem(level);
            loc1.x = this.posX[(level - 1) % 72] * UI.WINSIZE_W;
            loc1.y = (this.posY[(level - 1) % 72] - Math.floor((level - 1) / 18) % 4) * UI.WINSIZE_H - Math.floor((level - 1) / 72) * UI.WINSIZE_H * 4;
            loc1.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTouch, this);
            this.lvItems.push(loc1);
            this.content.addChild(loc1);
            ++level;
        }
        var cloud1 = UI.addPic("cloud_png", false, this.content, 0, -UI.WINSIZE_H * (-1 + Math.ceil(Model.levelModel.totalLevel / 18)));
        UI.setscalXandY(cloud1, UI.WINSIZE_W / cloud1.width, UI.WINSIZE_W / cloud1.width);
        return;
    };
    MapScene.prototype.ScorllMap = function () {
        this.content.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onscroll, this);
        this.content.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.content.$setTouchEnabled(true);
    };
    MapScene.prototype.onscroll = function (e) {
        if (e.stageY - this.stageY > 0) {
            if (this._scrollRect.y > (1 - Math.ceil(Model.levelModel.totalLevel / 18)) * UI.WINSIZE_H + 15) {
                this._scrollRect.y -= 15;
            }
            else {
                this._scrollRect.y = (1 - Math.ceil(Model.levelModel.totalLevel / 18)) * UI.WINSIZE_H;
            }
        } //向下移动
        else if (e.stageY - this.stageY < 0) {
            if (this._scrollRect.y < -15) {
                this._scrollRect.y += 15;
            }
            else {
                this._scrollRect.y = 0;
            }
        }
        this.content.scrollRect = this._scrollRect;
        this.stageY = e.stageY;
        return;
    };
    MapScene.prototype.onBtnTouch = function (e) {
        Model.levelModel.selectedLevel = e.target.parent.id;
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_SHOP_UI));
        return;
    };
    MapScene.prototype.onBegin = function (e) {
        this.stageY = e.stageY;
        return;
    };
    MapScene.prototype.onExit = function () {
    };
    return MapScene;
}(Scene));
__reflect(MapScene.prototype, "MapScene");
//# sourceMappingURL=MapScene.js.map