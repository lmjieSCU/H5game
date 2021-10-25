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
var NewHandss = (function (_super) {
    __extends(NewHandss, _super);
    function NewHandss(target, type, pointX, pointY, listener, node) {
        if (listener === void 0) { listener = null; }
        if (node === void 0) { node = null; }
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.destory, _this);
        _this.target = target;
        _this.listener = listener;
        _this.node = node;
        _this.type = type;
        _this.pointX = pointX;
        _this.pointY = pointY;
        return _this;
    }
    NewHandss.prototype.onEnter = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        shape.graphics.endFill();
        shape.touchEnabled = true;
        this.addChild(shape);
        var textTure;
        switch (this.type) {
            case "fight":
                textTure = this.target.texture;
                this.chooseFight(textTure);
                break;
            case "hero":
                textTure = this.target.texture;
                this.chooseHero(textTure);
                break;
            case "level":
                textTure = this.target.text;
                this.chooseLeve(textTure);
                break;
            case "start":
                textTure = this.target.texture;
                this.start(textTure);
                break;
        }
        UI.addPic(this, "Word_point_png", this.pointX, this.pointY, true);
        this.addChild(new Finger(this.pointX, this.pointY));
    };
    NewHandss.prototype.chooseFight = function (textTure) {
        var _this = this;
        var btn = this.addBtn(this, textTure, this.pointX, this.pointY, true, function () {
            Home.instace.removeChild(_this);
        });
        var txt = UI.addPic(this, "Word_20_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
    };
    NewHandss.prototype.chooseHero = function (textTure) {
        var _this = this;
        var btn = this.addBtn(this, textTure, this.pointX, this.pointY, true, function () {
            Home.instace.removeChild(_this);
        });
        var txt = UI.addPic(this, "Word_21_png", this.pointX, this.pointY);
        txt.anchorOffsetY = txt.height / 2;
    };
    NewHandss.prototype.chooseLeve = function (textTure) {
        var _this = this;
        var btn = UI.addText(this, textTure, this.pointX, this.pointY, true, 20, 0xffffff);
        UI.addClickAction(this, btn, function () {
            Home.instace.removeChild(_this);
        });
        var txt = UI.addPic(this, "Word_22_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
    };
    NewHandss.prototype.start = function (textTure) {
        var _this = this;
        var btn = this.addBtn(this, textTure, this.pointX, this.pointY, true, function () {
            Home.instace.removeChild(_this);
        });
        var txt = UI.addPic(this, "Word_23_png", this.pointX, this.pointY);
        txt.anchorOffsetX = txt.width;
        txt.anchorOffsetY = txt.height;
    };
    NewHandss.prototype.destory = function () {
        if (this.listener) {
            if (this.node) {
                this.listener.call(this.node, this.node);
            }
            else {
                this.listener.call(this, this);
            }
        }
    };
    NewHandss.prototype.addBtn = function (node, path, x, y, anchorCenterFlag, listener, mc, scale, sound) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (mc === void 0) { mc = null; }
        if (scale === void 0) { scale = 1; }
        if (sound === void 0) { sound = 'click'; }
        var btn = new egret.Bitmap;
        btn.texture = path;
        node.addChild(btn);
        if (anchorCenterFlag) {
            btn.anchorOffsetX = btn.width / 2;
            btn.anchorOffsetY = btn.height / 2;
        }
        btn.x = x;
        btn.y = y;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            btn.scaleX = 1.05 * scale;
            btn.scaleY = 1.05 * scale;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
            if (listener != null) {
                if (mc)
                    listener.call(mc, mc);
                else
                    listener.call(node, node);
            }
            Sound.getInstance().oneTimesPlay(sound);
        }, node);
        btn.scaleX = scale;
        btn.scaleY = scale;
        btn.$setTouchEnabled(true);
        return btn;
    };
    return NewHandss;
}(egret.DisplayObjectContainer));
__reflect(NewHandss.prototype, "NewHandss", ["egret.DisplayObject"]);
//# sourceMappingURL=NewHandss.js.map