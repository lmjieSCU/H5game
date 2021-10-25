var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BishaFaceEffectView = (function () {
    function BishaFaceEffectView() {
        this._faceObj = {};
        this.mc = AssetManager.I.getEffect("bisha_face_mc");
        return;
    } // end function
    BishaFaceEffectView.prototype.setFace = function (param1, param2) {
        var _loc_3 = this.mc;
        if (!_loc_3) {
            return;
        }
        this._faceObj[param1] = param2;
        param2.width = 254;
        param2.height = 180;
        _loc_3.addChild(param2);
        return;
    }; // end function
    BishaFaceEffectView.prototype.fadIn = function () {
        this.mc.gotoAndPlay(2);
        return;
    }; // end function
    BishaFaceEffectView.prototype.destory = function () {
        // for (var _loc_1 in this._faceObj)
        // {
        //     if (this._faceObj[_loc_1] instanceof egret.Bitmap)
        //     {
        //         (<egret.Bitmap> this._faceObj[_loc_1]).$bitmapData.$dispose();
        //     }
        // }
        this._faceObj = null;
        return;
    }; // end function
    return BishaFaceEffectView;
}());
__reflect(BishaFaceEffectView.prototype, "BishaFaceEffectView");
//# sourceMappingURL=BishaFaceEffectView.js.map