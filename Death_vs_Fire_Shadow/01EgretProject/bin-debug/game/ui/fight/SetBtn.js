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
var SetBtn = (function (_super) {
    __extends(SetBtn, _super);
    function SetBtn(param1, param2) {
        var _this = _super.call(this) || this;
        _this.buttonMode = true;
        _this._label = new BitmapFontText(AssetManager.I.getFont("font1"));
        _this._label._text = param1;
        _this._cn = param2;
        _this._line = new SetBtnLine();
        _this._line.y = _this._label.height;
        _this._line.hide();
        GameScene.instance.addChild(_this._line);
        GameScene.instance.addChild(_this._label);
        return _this;
    } // end function
    Object.defineProperty(SetBtn.prototype, "label", {
        get: function () {
            return this._label._text;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    SetBtn.prototype.destory = function () {
        if (this._label) {
            this._label.dispose();
        }
        return;
    }; // end function
    SetBtn.prototype.hover = function () {
        this.updateLine();
        GameScene.instance.addChild(this._line);
        return;
    }; // end function
    SetBtn.prototype.updateLine = function () {
        var _loc_1 = this.getOption();
        if (_loc_1) {
            this._line.show(UI.WINSIZE_W, this._cn + " - " + _loc_1.cn);
        }
        else {
            this._line.show(UI.WINSIZE_W, this._cn);
        }
        return;
    }; // end function
    SetBtn.prototype.hoverOut = function () {
        this._line.hide();
        try {
            GameScene.instance.removeChild(this._line);
        }
        catch (e) {
        }
        return;
    }; // end function
    SetBtn.prototype.select = function () {
        var _loc_1 = new SetBtnEvent("SELECT");
        _loc_1.selectedLabel = this.label;
        //dispatchEvent(_loc_1);
        //SoundCtrl.I.sndConfrim();
        return;
    }; // end function
    SetBtn.prototype.setOption = function (param1) {
        this._options = param1;
        this._prevArrow = new zmovie.ZMovieClip(["score_num_json"], RES.getRes("fightui_json"), "root");
        this._nextArrow = new zmovie.ZMovieClip(["score_num_json"], RES.getRes("fightui_json"), "root");
        this._prevArrow.name = "prevArrow";
        this._nextArrow.name = "nextArrow";
        this._nextArrow.scaleX = -1;
        var _loc_2 = 17;
        this._nextArrow.y = 17;
        this._prevArrow.y = _loc_2;
        this._optionTxt = new BitmapFontText(AssetManager.I.getFont("font1"));
        GameScene.instance.addChild(this._prevArrow);
        GameScene.instance.addChild(this._nextArrow);
        GameScene.instance.addChild(this._optionTxt);
        this.updateOption();
        return;
    }; // end function
    SetBtn.prototype.getOption = function () {
        if (!this._options) {
            return null;
        }
        return this._options[this._optionIndex];
    }; // end function
    SetBtn.prototype.nextOption = function () {
        if (!this._options) {
            return;
        }
        var _loc_1 = this._optionIndex + 1;
        if (_loc_1 > (this._options.length - 1)) {
            _loc_1 = 0;
        }
        this.changeOption(_loc_1);
        //SoundCtrl.I.sndSelect();
        return;
    }; // end function
    SetBtn.prototype.prevOption = function () {
        if (!this._options) {
            return;
        }
        var _loc_1 = this._optionIndex - 1;
        if (_loc_1 < 0) {
            _loc_1 = this._options.length - 1;
        }
        this.changeOption(_loc_1);
        //SoundCtrl.I.sndSelect();
        return;
    }; // end function
    SetBtn.prototype.setOptionByValue = function (param1) {
        var _loc_3 = 0;
        var _loc_2 = null;
        while (_loc_3 < this._options.length) {
            _loc_2 = this._options[_loc_3];
            if (_loc_2.value == param1) {
                this.changeOption(_loc_3, false);
                return;
            }
            _loc_3++;
        }
        return;
    }; // end function
    SetBtn.prototype.changeOption = function (param1, param2) {
        if (param2 === void 0) { param2 = true; }
        var _loc_3 = null;
        var _loc_4 = null;
        this._optionIndex = param1;
        this.updateOption();
        this.updateLine();
        if (param2) {
            _loc_3 = new SetBtnEvent("OPTION_CHANGE");
            _loc_4 = this.getOption();
            if (_loc_4) {
                _loc_3.this.optionKey = this.optionKey;
                _loc_3.optionValue = _loc_4.value;
                dispatchEvent(_loc_3);
            }
        }
        return;
    }; // end function
    SetBtn.prototype.updateOption = function () {
        var _loc_1 = this.getOption().label;
        this._optionTxt._text = _loc_1;
        this._prevArrow.x = this._label.x + this._label.width + 50;
        this._optionTxt.x = this._prevArrow.x + 10;
        this._nextArrow.x = this._optionTxt.x + this._optionTxt.width + 10;
        return;
    }; // end function
    return SetBtn;
}(egret.Sprite));
__reflect(SetBtn.prototype, "SetBtn");
//# sourceMappingURL=SetBtn.js.map