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
var MoveListSp = (function (_super) {
    __extends(MoveListSp, _super);
    function MoveListSp() {
        var _this = _super.call(this) || this;
        //this._picClass = movelist_jpg$3c22acb3cd853a5c0e8a636f154cc1bd-1736392622;
        _this._pic = new _this._picClass();
        _this._pic.width = GameConfig.GAME_SIZE.x;
        _this._pic.height = GameConfig.GAME_SIZE.y;
        GameScene.instance.addChild(_this._pic);
        _this._btns = new SetBtnGroup();
        _this._btns.setBtnData([{ label: "BACK", cn: "返回" }]);
        _this._btns.addEventListener("SELECT", _this.onSelect, _this);
        _this._btns.x = 250;
        _this._btns.y = GameConfig.GAME_SIZE.y - 130;
        GameScene.instance.addChild(_this._btns);
        return _this;
    } // end function
    MoveListSp.prototype.destory = function () {
        if (this._btns) {
            this._btns.removeEventListener("SELECT", this.onSelect, false);
            this._btns.destory();
            this._btns = null;
        }
        return;
    }; // end function
    MoveListSp.prototype.show = function () {
        this.visible = true;
        return;
    }; // end function
    MoveListSp.prototype.hide = function () {
        this._btns.keyEnable = false;
        this.visible = false;
        return;
    }; // end function
    MoveListSp.prototype.onSelect = function (event) {
        if (this.onBackSelect != null) {
            this.onBackSelect();
        }
        return;
    }; // end function
    return MoveListSp;
}(egret.Sprite));
__reflect(MoveListSp.prototype, "MoveListSp");
//# sourceMappingURL=MoveListSp.js.map