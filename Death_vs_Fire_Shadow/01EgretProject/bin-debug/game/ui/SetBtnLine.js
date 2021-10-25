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
var SetBtnLine = (function (_super) {
    __extends(SetBtnLine, _super);
    function SetBtnLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetBtnLine.prototype.SetBtnLine = function () {
        var mouseEnabled = false;
        var mouseChildren = false;
        this._line = new egret.Sprite();
        GameScene.instance.addChild(this._line);
        if (GameUI.SHOW_CN_TEXT) {
            this._txt = new egret.TextField();
            UIUtils.formatText(this._txt, { color: 16641381, size: 20, font: "楷体", align: "right" });
            this._txt.y = 4;
            GameScene.instance.addChild(this._txt);
        }
        return;
    }; // end function
    SetBtnLine.prototype.show = function (param1, param2) {
        this._line.graphics.clear();
        this._line.graphics.lineStyle(1, 16641381, 1);
        this._line.graphics.lineTo(param1, 0);
        this._line.scaleX = 0.1;
        egret.Tween.get(this._line).to({ scaleX: 1 }, 300);
        //TweenLite.to(this._line, 0.3, {scaleX:1});
        this.visible = true;
        if (this._txt) {
            this._txt.width = param1;
            this._txt.text = param2;
        }
        return;
    }; // end function
    SetBtnLine.prototype.hide = function () {
        this.visible = false;
        if (this._txt) {
            this._txt.text = "";
        }
        return;
    }; // end function
    return SetBtnLine;
}(egret.Sprite));
__reflect(SetBtnLine.prototype, "SetBtnLine");
//# sourceMappingURL=SetBtnLine.js.map