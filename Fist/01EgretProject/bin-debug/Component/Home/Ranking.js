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
var Ranking = (function (_super) {
    __extends(Ranking, _super);
    function Ranking(node, listener, open) {
        if (node === void 0) { node = null; }
        if (listener === void 0) { listener = null; }
        if (open === void 0) { open = true; }
        var _this = _super.call(this) || this;
        _this.data = ['fightui_55_png', 'fightui_57_png', 'fightui_59_png', 'fightui_55_png', 'fightui_57_png', 'fightui_59_png', 'fightui_55_png', 'fightui_57_png', 'fightui_59_png'];
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.isOpen = open;
        _this.listener = listener;
        _this.node = node;
        return _this;
    }
    Ranking.prototype.onEnter = function () {
        var _this = this;
        this.rank = new egret.DisplayObjectContainer();
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x00ff00);
        bg.graphics.drawRect(0, 0, 100, 400);
        bg.graphics.endFill();
        this.rank.addChild(bg);
        this.rank.width = bg.width;
        this.rank.height = bg.height;
        this.rank.x = this.isOpen ? 0 : -bg.width;
        this.rank.y = (UI.WINSIZE_H - bg.height) / 2;
        this.addChild(this.rank);
        this.btn = new egret.Shape();
        this.btn.graphics.beginFill(0xffffff);
        this.btn.graphics.drawRect(0, 0, 40, 100);
        this.btn.graphics.endFill();
        this.rank.addChild(this.btn);
        this.btn.x = this.rank.width;
        this.btn.y = this.rank.height / 2;
        this.btn.anchorOffsetY = this.btn.height / 2;
        // UI.addClickAction(this, this.btn, () => {
        //     egret.Tween.get(this.rank).to({x: this.isOpen?-bg.width:0}, 300, egret.Ease.sineIn);
        //     // this.rank.x = this.isOpen?-bg.width:0;
        //     this.isOpen = !this.isOpen;
        // })
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.Tween.get(_this.rank).to({ x: _this.isOpen ? -bg.width : 0 }, 300, egret.Ease.sineIn);
            // this.rank.x = this.isOpen?-bg.width:0;
            _this.isOpen = !_this.isOpen;
        }, this);
        this.btn.touchEnabled = true;
        var list = new egret.DisplayObjectContainer();
        list.x = 0;
        list.y = 0;
        this.rank.addChild(list);
        this.data.map(function (data, index) {
            UI.addBtn(list, data, 0, index * 50, false, function () {
                if (_this.listener) {
                    if (_this.node)
                        _this.listener.call(_this.node, _this.node);
                    else
                        _this.listener.call(_this, _this);
                }
            });
        });
        var scrollView = new egret.ScrollView(list);
        scrollView.x = 0;
        scrollView.y = 0;
        scrollView.width = this.rank.width;
        scrollView.height = this.rank.height;
        scrollView.verticalScrollPolicy = 'on';
        scrollView.horizontalScrollPolicy = 'off';
        this.rank.addChild(scrollView);
    };
    return Ranking;
}(egret.DisplayObjectContainer));
__reflect(Ranking.prototype, "Ranking", ["egret.DisplayObject"]);
//# sourceMappingURL=Ranking.js.map