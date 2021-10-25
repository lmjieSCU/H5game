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
var HitsUI = (function (_super) {
    __extends(HitsUI, _super);
    function HitsUI(param1) {
        var _this = _super.call(this) || this;
        _this.hitCounts = 0;
        param1.visible = false;
        _this._mc = param1;
        _this._mc.x = 300;
        _this._mc.y = 80;
        _this._txtmc = new MCNumber(param1, 0, 1, 35);
        _this._orgPos = new egret.Point(param1.x, param1.y);
        _this.ct = _this._mc.getChildMovie("ct");
        _this.numPic = new egret.Bitmap(RES.getRes("score_num_json").getTexture("hits_num_mc_0"));
        _this.numPic2 = new egret.Bitmap(RES.getRes("score_num_json").getTexture("hits_num_mc_0"));
        _this.numPic.x -= 20;
        if (_this.ct instanceof zmovie.ZImage) {
            _this.ct.addChild(_this.numPic);
            _this.ct.addChild(_this.numPic2);
        }
        // this.dot.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_1");
        _this._mc.addFrameScript(_this, [0, _this.frame1, 9, _this.frame10, 19, _this.frame20, 37, _this.frame38, 55, _this.frame56]);
        return _this;
    } // end function
    HitsUI.prototype.destory = function () {
        if (this._txtmc) {
            try {
                this._mc.getChildMovie("ct").removeChild(this._txtmc);
            }
            catch (e) {
            }
            this._txtmc = null;
        }
        if (this._mc) {
            this._mc = null;
        }
        this._orgPos = null;
        return;
    }; // end function
    HitsUI.prototype.show = function (param1) {
        this._mc.visible = true;
        this._txtmc.number = param1;
        var _loc_2 = this._txtmc.width + 45;
        this._txtmc.x = _loc_2;
        var firstNum = Math.floor(param1 / 10);
        var secondNum = Math.floor(param1 % 10);
        if (firstNum != 0) {
            this.numPic.visible = true;
            this.numPic.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_" + (firstNum + 1));
        }
        else {
            this.numPic.visible = false;
        }
        this.numPic2.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_" + (secondNum + 1));
        //this.ct.img.texture = RES.getRes("score_num_json").getTexture("hits_num_mc_"+(param1+1));
        if (this._mc.name == "hits1") {
            this._mc.x = UI.WINSIZE_W / 2 - 350;
            //this._mc.x = 200
        }
        else if (this._mc.name == "hits2") {
            this._mc.x = UI.WINSIZE_W / 2 + 350;
        }
        if (this._isShow) {
            this._mc.gotoAndPlay("update");
            return;
        }
        this._isShow = true;
        this._mc.gotoAndPlay("fadin");
        //this._mc.play()
        return;
    }; // end function
    HitsUI.prototype.hide = function () {
        if (!this._isShow) {
            return;
        }
        this._isShow = false;
        this._mc.gotoAndPlay("fadout");
        return;
    }; // end function
    HitsUI.prototype.frame1 = function () {
        this._mc.visible = false;
        return;
    };
    HitsUI.prototype.frame10 = function () {
        this._mc.visible = true;
        return;
    };
    HitsUI.prototype.frame20 = function () {
        this._mc.stop();
        return;
    };
    HitsUI.prototype.frame38 = function () {
        this._mc.stop();
        return;
    };
    HitsUI.prototype.frame56 = function () {
        this._mc.gotoAndStop(1);
        this._mc.visible = false;
        return;
    };
    return HitsUI;
}(egret.DisplayObject));
__reflect(HitsUI.prototype, "HitsUI");
//# sourceMappingURL=HitsUI.js.map