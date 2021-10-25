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
var KyoStageCtrl = (function (_super) {
    __extends(KyoStageCtrl, _super);
    function KyoStageCtrl(param1) {
        var _this = _super.call(this) || this;
        _this.changeStateMouseGap = 0;
        _this._layers = [];
        _this._mainStage = param1;
        return _this;
    } // end function
    Object.defineProperty(KyoStageCtrl.prototype, "currentStage", {
        get: function () {
            return this._curStage;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    KyoStageCtrl.prototype.goStage = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = false; }
        var detoryComplete;
        var classname;
        var classname2;
        var stg = param1;
        var sameChange = param2;
        var buildAfterDestory = param3;
        detoryComplete = function () {
            try {
                this._mainStage.removeChild(this._curStage.display);
            }
            catch (e) {
                //trace("KyoStageCtrl: goStage:", e);
            }
            this._curStage = null;
            return;
        } // end function
        ;
        var newStage = function () {
            // if (this.changeStateMouseGap > 0)
            // {
            //     this.stageMouseChildren(false);
            //     setTimeout(function () : void
            // {
            //     this.stageMouseChildren(true)
            //     return;
            // }// end function
            // , this.changeStateMouseGap);
            // }
            this._curStage = stg;
            this._curStage.build();
            this._mainStage.addChild(this._curStage.display);
            this._curStage.afterBuild();
            return;
        } // end function
        ;
        if (!sameChange) {
            classname = egret.getQualifiedClassName(stg);
            classname2 = egret.getQualifiedClassName(this._curStage);
            if (classname == classname2) {
                return false;
            }
        }
        if (this._curStage) {
            if (buildAfterDestory) {
                this._curStage.destory(detoryComplete);
            }
            else {
                this._curStage.destory(null);
                detoryComplete();
            }
        }
        else {
            newStage();
        }
        //dispatchEvent(new KyoStageEvent(KyoStageEvent.CHANGE_STATE, stg));
        return true;
    }; // end function
    KyoStageCtrl.prototype.addLayer = function (param1, param2, param3, param4, param5) {
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = false; }
        if (param5 === void 0) { param5 = null; }
        if (param4) {
            this.removeAllLayer();
        }
        param1.build();
        var _loc_6 = this._mainStage.stage.stageWidth;
        var _loc_7 = this._mainStage.stage.stageHeight;
        var _loc_8 = param1.display().width * this._mainStage.scaleX;
        var _loc_9 = param1.display().height * this._mainStage.scaleY;
        if (isNaN(param2)) {
            param1.display().x = (_loc_6 - _loc_8) / 2;
        }
        else {
            param1.display().x = param2;
        }
        if (isNaN(param3)) {
            param1.display().y = (_loc_7 - _loc_9) / 2;
        }
        else {
            param1.display().y = param3;
        }
        this._mainStage.addChild(param1.display());
        if (param5) {
            param5.fadIn(param1, param1.afterBuild);
        }
        else {
            param1.afterBuild();
        }
        this._layers.push(param1);
        return;
    }; // end function
    KyoStageCtrl.prototype.hasLayer = function (param1) {
        var _loc_2 = null;
        var _loc_3 = null;
        // for each (_loc_2 in this._layers)
        // {
        //     if (param1 is Istage)
        //     {
        //         if (_loc_2 == param1)
        //         {
        //             return true;
        //         }
        //     }
        //     if (param1 is Class)
        //     {
        //         _loc_3 = param1 as Class;
        //         if (_loc_2 is _loc_3)
        //         {
        //             return true;
        //         }
        //     }
        // }
        // this._layers.forEach(element => {
        //     if(element == param1){
        //         return true
        //     }
        //     try{
        //         if(element instanceof param1 a){
        //             return true
        //         }
        //     }catch(e){
        //     }
        // })
        return false;
    }; // end function
    Object.defineProperty(KyoStageCtrl.prototype, "noneLayer", {
        get: function () {
            return this._layers.length == 0;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    KyoStageCtrl.prototype.removeLayer = function (param1) {
        var layer = param1;
        try {
            this._mainStage.removeChild(layer.display());
            layer.destory(null);
        }
        catch (e) {
            //trace("KyoStageCtrl: removeLayer:", e);
        }
        var ix = this._layers.indexOf(layer);
        if (ix != -1) {
            this._layers.splice(ix, 1);
        }
        return;
    }; // end function
    KyoStageCtrl.prototype.removeAllLayer = function () {
        var _this = this;
        var _loc_1 = null;
        // for each (_loc_1 in this._layers)
        // {
        //     this.removeLayer(_loc_1);
        // }
        this._layers.forEach(function (element) {
            _this.removeLayer(element);
        });
        this._layers = [];
        return;
    }; // end function
    KyoStageCtrl.prototype.clean = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (param1) {
            this.removeAllLayer();
        }
        if (this._curStage) {
            this._curStage.destory(null);
            this._mainStage.removeChild(this._curStage.display());
            this._curStage = null;
        }
        return;
    }; // end function
    KyoStageCtrl.prototype.stageMouseChildren = function (param1) {
        if (this._mainStage.stage) {
            this._mainStage.stage.touchEnabled = param1;
        }
        return;
    }; // end function
    return KyoStageCtrl;
}(egret.EventDispatcher));
__reflect(KyoStageCtrl.prototype, "KyoStageCtrl");
//# sourceMappingURL=KyoStageCtrl.js.map