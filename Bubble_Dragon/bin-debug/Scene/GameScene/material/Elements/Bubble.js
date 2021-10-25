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
var Bubble = (function (_super) {
    __extends(Bubble, _super);
    function Bubble(arg1, scale) {
        if (scale === void 0) { scale = 1; }
        var _this = _super.call(this) || this;
        _this.isBacking = false;
        _this.destoryedByBomb = false;
        _this.hasShield = false;
        _this.vx = 0;
        _this.vy = 0;
        _this.scale = 1;
        _this.scale = scale;
        _this.data = Config.bubbleCfgParser.getBubbleCfg(arg1);
        _this.initSelf();
        return _this;
    }
    Object.defineProperty(Bubble.prototype, "col", {
        get: function () {
            return this._col;
        },
        set: function (arg1) {
            this._col = arg1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bubble.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (arg1) {
            this._row = arg1;
        },
        enumerable: true,
        configurable: true
    });
    /**撞击后摇晃特效 */
    Bubble.prototype.doBackEffect = function () {
        if (!this.isBacking) {
            this.isBacking = true;
            this.oldX = this.x;
            this.oldY = this.y;
            var tx = Math.cos(this.backRadians) * (5 - this.backLevel) + this.oldX;
            var ty = Math.sin(this.backRadians) * (5 - this.backLevel) + this.oldY;
            egret.Tween.get(this).to({ "x": tx, "y": ty }, 250).to({ "x": this.oldX, "y": this.oldY }, 250);
            egret.setTimeout(this.BackReset, this, 501);
        }
        return;
    };
    Bubble.prototype.BackReset = function () {
        this.isBacking = false;
        return;
    };
    Bubble.prototype.doBigEffect = function () {
        this.resBottom.visible = false;
        egret.Tween.get(this).to({ "scaleX": 2, "scaleY": 2 }, 500);
        return;
    };
    Bubble.prototype.initSelf = function () {
        this.destoryedByBomb = false;
        if (this.data.effectType == BubbleEffectType.BUBBLE_INVISIBLE) {
            this.visible = false;
        }
        this.resBottom = UI.addPic("res." + this.data.resBottom, true, this);
        UI.setscalXandY(this.resBottom, this.scale, this.scale);
        var loc1;
        this.vy = loc1 = 0;
        this.vx = loc1;
        if (this.data.resTop != "") {
            this.resTop = UI.addPic("res." + this.data.resTop, true, this);
            UI.setscalXandY(this.resTop, this.scale, this.scale);
        }
        if (this.data.effectType != BubbleEffectType.BLANK_BUBBLE) {
            if (this.data.effectType != BubbleEffectType.STONE_DISABLE_BUBBLE) {
                if (this.data.effectType == BubbleEffectType.SKELETON_BUBBLE) {
                    this.bubbleZoom();
                }
            }
            else {
                this.setBubbleLife(3);
            }
        }
        else {
            this.bubbleExtruded();
        }
        return;
    };
    Bubble.prototype.bubbleExtruded = function () {
        egret.Tween.get(this).to({ "scaleX": 1.1, "scaleY": 0.9 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(this.bubbleExtruded, this, 1001);
        return;
    };
    Bubble.prototype.bubbleZoom = function () {
        egret.Tween.get(this.resTop).to({ "scaleX": 1.1, "scaleY": 1.1 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(this.bubbleZoom, this, 1001);
        return;
    };
    Bubble.prototype.getBubbleLife = function () {
        return this._life;
    };
    Bubble.prototype.setBubbleLife = function (arg1) {
        this._life = arg1;
        var loc1 = this.data.resBottom;
        if (arg1 != 2) {
            if (arg1 == 1) {
                loc1 = loc1 + "_2";
                this.resBottom.texture = RES.getRes(loc1);
                UI.FreshLocation(this.resBottom);
            }
        }
        else {
            loc1 = loc1 + "_1";
            this.resBottom.texture = RES.getRes(loc1);
            UI.FreshLocation(this.resBottom);
        }
        return;
    };
    Bubble.prototype.addShield = function () {
        this.shield = UI.addPic("res.prop_6", true, this);
        this.hasShield = true;
        return;
    };
    Bubble.prototype.removeShield = function () {
        this.removeChild(this.shield);
        this.hasShield = false;
        return;
    };
    return Bubble;
}(Elements));
__reflect(Bubble.prototype, "Bubble");
//# sourceMappingURL=Bubble.js.map