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
var TileBoarder = (function (_super) {
    __extends(TileBoarder, _super);
    function TileBoarder() {
        var _this = _super.call(this) || this;
        _this.resDict = new Dicts();
        _this.resDict.put(1, UI.addPic("x_border_heng_shang_png", true, _this));
        _this.resDict.put(2, UI.addPic("x_border_heng_xia_png", true, _this));
        _this.resDict.put(3, UI.addPic("x_border_left_down_png", true, _this));
        _this.resDict.put(4, UI.addPic("x_border_left_down_x_png", true, _this));
        _this.resDict.put(5, UI.addPic("x_border_left_up_png", true, _this));
        _this.resDict.put(6, UI.addPic("x_border_left_up_x_png", true, _this));
        _this.resDict.put(7, UI.addPic("x_border_right_down_png", true, _this));
        _this.resDict.put(8, UI.addPic("x_border_right_down_x_png", true, _this));
        _this.resDict.put(9, UI.addPic("x_border_right_up_png", true, _this));
        _this.resDict.put(10, UI.addPic("x_border_right_up_x_png", true, _this));
        _this.resDict.put(11, UI.addPic("x_border_shu_you_png", true, _this));
        _this.resDict.put(12, UI.addPic("x_border_shu_zuo_png", true, _this));
        return _this;
    }
    TileBoarder.prototype.setType = function (arg1, arg2, arg3, arg4) {
        arg2.addChild(this);
        for (var loc1 in this.resDict.dict) {
            this.resDict.dict[loc1].visible = false;
        }
        this.x = arg3;
        this.y = arg4;
        this.resDict.dict[arg1].visible = true;
        return;
    };
    TileBoarder.x_border_heng_shang = 1;
    TileBoarder.x_border_heng_xia = 2;
    TileBoarder.x_border_left_down = 3;
    TileBoarder.x_border_left_down_x = 4;
    TileBoarder.x_border_left_up = 5;
    TileBoarder.x_border_left_up_x = 6;
    TileBoarder.x_border_right_down = 7;
    TileBoarder.x_border_right_down_x = 8;
    TileBoarder.x_border_right_up = 9;
    TileBoarder.x_border_right_up_x = 10;
    TileBoarder.x_border_shu_you = 11;
    TileBoarder.x_border_shu_zuo = 12;
    TileBoarder.pool = new BasePool(TileBoarder, 100);
    return TileBoarder;
}(Elements));
__reflect(TileBoarder.prototype, "TileBoarder");
//# sourceMappingURL=TileBoarder.js.map