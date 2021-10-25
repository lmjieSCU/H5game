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
/**目标线 */
var LittleBubble = (function (_super) {
    __extends(LittleBubble, _super);
    function LittleBubble() {
        var _this = _super.call(this) || this;
        _this.sprites = [];
        _this.Types = [1, 2, 3, 4, 5, 6, 7, 100, 101, 102];
        var loc2 = 0;
        var loc3 = null;
        while (loc2 < _this.Types.length) {
            loc3 = UI.addPic("res.Bubble_" + _this.Types[loc2], true, _this);
            _this.sprites.push(loc3);
            ++loc2;
        }
        _this.scaleX = 0.35;
        _this.scaleY = 0.35;
        _this.zoom();
        return _this;
    }
    LittleBubble.prototype.zoom = function () {
        egret.Tween.get(this, { loop: true }).to({ "scaleX": 0.35, "scaleY": 0.35 }, (Math.random() * 3 + 3) * 100)
            .to({ "scaleX": 0.4, "scaleY": 0.4 }, (Math.random() * 3 + 3) * 100);
        return;
    };
    LittleBubble.prototype.setBubbleType = function (arg1) {
        var loc1 = 0;
        while (loc1 < this.sprites.length) {
            if (this.Types[loc1] != arg1) {
                this.sprites[loc1].visible = false;
            }
            else {
                this.sprites[loc1].visible = true;
            }
            ++loc1;
        }
        return;
    };
    return LittleBubble;
}(Elements));
__reflect(LittleBubble.prototype, "LittleBubble");
//# sourceMappingURL=LittleBubble.js.map