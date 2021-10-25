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
var FightHouse = (function (_super) {
    __extends(FightHouse, _super);
    function FightHouse(playInfo) {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        return _this;
    }
    FightHouse.prototype.onEnter = function () {
        // let heroList = new HeroList(this, UI.WINSIZE_W/8 + 20, UI.WINSIZE_H*0.2, 200, UI.WINSIZE_H*0.5)
        // this.addChild(heroList);
        // heroList.heroScroll.changeChild(Home.instace.nowHero);
        var _this = this;
        var bg = UI.addPic(this, "matchboard_png", UI.WINSIZE_W / 2 + 20, UI.WINSIZE_H / 2, true);
        // let info: egret.TextField = UI.addText(this, "点击右方按钮房间号匹配", bg.x, bg.y, true, 15, 0xffffff);
        // let info2: egret.TextField = UI.addText(this, "点击下方按钮随机匹配", bg.x, bg.y + 40, true, 15, 0xffffff);
        // let chooseNum = new ChooseNumber(3, UI.WINSIZE_W/2 + 20, UI.WINSIZE_H/2, true)
        // this.addChild(chooseNum);
        var roomNumberBg = [];
        var roomNumber = [];
        var roomInfo = 0;
        var call = new Call(this, function (num) {
            if (num == -1) {
                roomInfo = Math.floor(roomInfo / 10);
                if (roomNumber.length > 0) {
                    _this.removeChild(roomNumber[roomNumber.length - 1]);
                    roomNumber.pop();
                }
            }
            else {
                if (roomNumber.length < 3) {
                    roomInfo = roomInfo * 10 + num;
                    roomNumber.push(UI.addPic(_this, "roma" + num + "_png", roomNumberBg[2 - roomNumber.length].x, roomNumberBg[2 - roomNumber.length].y, true));
                }
            }
        });
        this.addChild(call);
        call.x = bg.x;
        call.y = bg.y - 5;
        call.anchorOffsetX = call.width / 2;
        call.anchorOffsetY = call.height / 2;
        for (var i = 0; i < 3; i++) {
            var num = UI.addPic(this, "dial_box_png", 0, bg.y + bg.height / 2, true);
            num.x = call.x + (1 - i) * (num.width + 15);
            num.y -= num.height / 2 + 10;
            roomNumberBg.push(num);
        }
        var start = UI.addPic(this, 'Online_button_startgame_png', UI.WINSIZE_W / 2, UI.WINSIZE_H - 40, true);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // this.$setTouchChildren(false)
            console.log(roomInfo);
            // const hero = `new ${heroList.getHeroName()}_Player()`;
            _this.stage.addChild(new MatchLayer(roomInfo >= 100 ? roomInfo : -1));
        }, this);
    };
    return FightHouse;
}(egret.DisplayObjectContainer));
__reflect(FightHouse.prototype, "FightHouse", ["egret.DisplayObject"]);
//# sourceMappingURL=FightHouse.js.map