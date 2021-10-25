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
var HeroLsitLeft = (function (_super) {
    __extends(HeroLsitLeft, _super);
    function HeroLsitLeft(listener, node) {
        if (listener === void 0) { listener = null; }
        if (node === void 0) { node = null; }
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.listener = listener;
        _this.node = node;
        return _this;
    }
    HeroLsitLeft.prototype.onEnter = function () {
        var _this = this;
        var bg = UI.addPic(this, "Adventure_left_png", 0, UI.WINSIZE_H / 2);
        bg.anchorOffsetY = bg.height / 2;
        // let bgMask: egret.Bitmap = UI.addPic(this, "Adventure_left_png", 0, bg.y - bg.height/2);
        var heroList = ["K", "Ryu", "Chunli", "Terry"];
        this.heros = new egret.DisplayObjectContainer();
        // heros.x = bg.x;
        // heros.y = bg.y - bg.height/2;
        // heros.mask = bgMask;
        heroList.map(function (data, index) {
            var imgBox = new egret.DisplayObjectContainer();
            var img = UI.addPic(imgBox, "Adventure_smallbox_left_png", 10, 10);
            img.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (_this.listener) {
                    if (_this.node) {
                        _this.listener.call(_this.node, index);
                    }
                    else {
                        _this.listener.call(_this, index);
                    }
                }
            }, _this);
            img.touchEnabled = true;
            var box = UI.addPic(imgBox, "HeroBox" + data + "_png", img.x, img.y);
            // img.y += (img.height + 10)*index;
            imgBox.y += (img.height + 10) * index;
            _this.heros.addChild(imgBox);
            var chooseBox = UI.addPic(imgBox, "Home_smallbox_leftshadow_png", img.x + img.width / 2, img.y + img.height / 2, true);
            if (index != 0)
                chooseBox.$setVisible(false);
        });
        this.heros.height += this.heros.getChildAt(0).height;
        this.scrollView = new ScrollView(this.heros, bg.width, bg.height, this.heros.x, bg.y - bg.height / 2, 1, 1, true, true, this, function () {
            _this.changeChoose(_this.heros, _this.scrollView.getChildNow());
        }, false, false);
        this.scrollView.bounces = false;
        this.addChild(this.scrollView);
    };
    HeroLsitLeft.prototype.changeChoose = function (heros, index) {
        for (var i = 0; i < heros.numChildren; i++) {
            var hero = heros.getChildAt(i);
            var chooseBox = hero.getChildAt(2);
            if (i == index)
                chooseBox.$setVisible(true);
            else
                chooseBox.$setVisible(false);
        }
    };
    return HeroLsitLeft;
}(egret.DisplayObjectContainer));
__reflect(HeroLsitLeft.prototype, "HeroLsitLeft", ["egret.DisplayObject"]);
//# sourceMappingURL=HeroListLeft.js.map