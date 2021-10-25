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
var AlertUI = (function (_super) {
    __extends(AlertUI, _super);
    function AlertUI() {
        var _this = _super.call(this) || this;
        _this.build();
        return _this;
    } // end function
    AlertUI.prototype.destory = function () {
        if (this._enTxt) {
            this._enTxt.dispose();
            this._enTxt = null;
        }
        if (this._btnGroup) {
            this._btnGroup.removeEventListener("SELECT", this.selectHandler, false);
            this._btnGroup.destory();
            this._btnGroup = null;
        }
        return;
    }; // end function
    AlertUI.prototype.build = function () {
        var _loc_1 = new egret.Sprite();
        _loc_1.graphics.beginFill(0, 0.3);
        _loc_1.graphics.drawRect(0, 0, GameConfig.GAME_SIZE.x, GameConfig.GAME_SIZE.y);
        _loc_1.graphics.endFill();
        GameScene.instance.addChild(_loc_1);
        var _loc_2 = new Box(GameConfig.GAME_SIZE.x, 400, 0, 0.8);
        _loc_2.y = (GameConfig.GAME_SIZE.y - _loc_2.height) / 2;
        GameScene.instance.addChild(_loc_2);
        this._enTxt = new BitmapFontText(AssetManager.I.getFont("font1"));
        this._enTxt.y = 18;
        _loc_2.addChild(this._enTxt);
        if (GameUI.SHOW_CN_TEXT) {
            this._cnTxt = new egret.TextField();
            UIUtils.formatText(this._cnTxt, { align: "center", color: 16777215, size: 20, leading: 10 });
            this._cnTxt.y = this._enTxt.y + this._enTxt.height + 80;
            this._cnTxt.width = GameConfig.GAME_SIZE.x;
            this._cnTxt.height = 300;
            this._cnTxt.touchEnabled = false;
            _loc_2.addChild(this._cnTxt);
        }
        this._btnGroup = new SetBtnGroup();
        var _loc_4 = 0;
        this._btnGroup.startY = 0;
        this._btnGroup.startX = _loc_4;
        this._btnGroup.direct = 0;
        this._btnGroup.gap = 200;
        this._btnGroup.setBtnData([{ label: "OK", cn: "知道了" }], 1);
        this._btnGroup.addEventListener("SELECT", this.selectHandler, this);
        this._btnGroup.x = (GameConfig.GAME_SIZE.x - this._btnGroup.width) / 2 + 30;
        this._btnGroup.y = _loc_2.height - 80;
        _loc_2.addChild(this._btnGroup);
        var _loc_3 = _loc_2.y;
        _loc_2.y = GameConfig.GAME_SIZE.y;
        egret.Tween.get(_loc_2).to({ y: _loc_3 }, 200);
        //TweenLite.to(_loc_2, 0.2, {y:_loc_3});
        return;
    }; // end function
    AlertUI.prototype.selectHandler = function (event) {
        var _loc_2 = event.selectedLabel;
        while (_loc_2 == "OK") {
            if (this.closeBack != null) {
                this.closeBack();
            }
            break;
        }
        return;
    }; // end function
    AlertUI.prototype.setMsg = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        this._enTxt._text = param1 ? (param1) : ("");
        this._enTxt.x = (GameConfig.GAME_SIZE.x - this._enTxt.width) / 2;
        this._cnTxt.text = param2 ? (param2) : ("");
        return;
    }; // end function
    return AlertUI;
}(egret.Sprite));
__reflect(AlertUI.prototype, "AlertUI");
//# sourceMappingURL=AlertUI.js.map