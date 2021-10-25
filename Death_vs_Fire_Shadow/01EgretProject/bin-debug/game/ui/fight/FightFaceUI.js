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
var FightFaceUI = (function (_super) {
    __extends(FightFaceUI, _super);
    function FightFaceUI(param1) {
        var _this = _super.call(this) || this;
        _this._ui = param1;
        return _this;
    } // end function
    FightFaceUI.prototype.setData = function (param1) {
        if (!param1) {
            this._ui.visible = false;
            return;
        }
        this._ui.visible = true;
        var _loc_2 = AssetManager.I.getFighterFaceBar(param1);
        if (_loc_2) {
            var template = new egret.Bitmap(RES.getRes("fightui01_png"));
            this._ui.addChild(_loc_2);
            this._ui.addChild(template);
            _loc_2.mask = template;
            // let template:egret.Bitmap = new egret.Bitmap(RES.getRes("fightui01_png"))
            // template.mask = _loc_2
            // let temp = this._ui.getChildMovie("ct")
            //this._ui.addChild(_loc_2)
            //this._ui.addChild(_loc_2);
            //_loc_2.mask = this._ui
        }
        return;
    }; // end function
    FightFaceUI.prototype.setDirect = function (param1) {
        return;
    }; // end function
    return FightFaceUI;
}(egret.DisplayObject));
__reflect(FightFaceUI.prototype, "FightFaceUI");
//# sourceMappingURL=FightFaceUI.js.map