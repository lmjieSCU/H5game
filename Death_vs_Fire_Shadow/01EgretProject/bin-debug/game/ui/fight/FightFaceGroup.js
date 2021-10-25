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
var FightFaceGroup = (function (_super) {
    __extends(FightFaceGroup, _super);
    function FightFaceGroup(param1) {
        var _this = _super.call(this) || this;
        _this._ui = param1;
        _this._ui.cacheAsBitmap = true;
        _this._face1 = new FightFaceUI(_this._ui.getChildMovie("face"));
        _this._face2 = new FightFaceUI(_this._ui.getChildMovie("face2"));
        _this._face3 = new FightFaceUI(_this._ui.getChildMovie("face3"));
        //----
        _this._ui.getChildMovie("face").visible = false;
        _this._ui.getChildMovie("face2").visible = false;
        _this._ui.getChildMovie("face3").visible = false;
        return _this;
    } // end function
    FightFaceGroup.prototype.getui = function () {
        return this._ui;
    }; // end function
    FightFaceGroup.prototype.setFighter = function (param1) {
        if (param1 === void 0) { param1 = null; }
        this._ui.cacheAsBitmap = false;
        if (param1.currentFighter) {
            this._face1.setData(param1.currentFighter.data);
        }
        var _loc_2 = param1.currentFighter;
        this._face2.setData(param1.fighter2 ? (param1.fighter2.data) : (null));
        this._face3.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        if (!param1.fighter1) {
            this._face2.setData(param1.fighter3.data);
            this._face3.setData(null);
        }
        if (!param1.fighter2) {
            this._face2.setData(null);
            this._face3.setData(null);
        }
        // while (param1.fighter1 === _loc_2)
        // {
        //     this._face2.setData(param1.fighter2 ? (param1.fighter2.data) : (null));
        //     this._face3.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        //     do
        //     {
        //         this._face2.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        //         this._face3.setData(null);
        //         do
        //         {
        //             this._face2.setData(null);
        //             this._face3.setData(null);
        //             break;
        //         }while (param1.fighter2 === _loc_2)
        //     }while (param1.fighter3 === _loc_2)
        // this._ui.cacheAsBitmap = true;
        // return;
        // }// end function
    };
    FightFaceGroup.prototype.setDirect = function (param1) {
        this._face1.setDirect(param1);
        this._face2.setDirect(param1);
        this._face3.setDirect(param1);
        return;
    }; // end function
    return FightFaceGroup;
}(egret.DisplayObject));
__reflect(FightFaceGroup.prototype, "FightFaceGroup");
//# sourceMappingURL=FightFaceGroup.js.map