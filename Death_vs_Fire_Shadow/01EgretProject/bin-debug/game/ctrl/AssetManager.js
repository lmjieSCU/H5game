var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AssetManager = (function () {
    function AssetManager() {
        this._effectSwfPath = "assets/effect.swf";
        //super()
        this._swfLoader = new KyoClassLoader();
        this._soundLoader = new KyoSoundLoader();
        this._bitmapLoader = new BitmapAssetLoader();
        this._bitmapFontLoader = new BitmapFontLoader();
        this._fighterFaceCache = {};
        return;
    } // end function
    AssetManager.prototype.getFont = function (param1) {
        return this._bitmapFontLoader.getFont(param1);
    }; // end function
    AssetManager.prototype.loadBasic = function (param1, param2) {
        //     back = param1;
        //     process = param2;
        //     loadProcess = function (param1:Number) : void
        //     {
        //         if (process != null)
        //         {
        //             null.process(param1, type, loadStep, loadCount);
        //         }
        //         return;
        //     }// end function
        //     ;
        //     loadNext = function () : void
        //     {
        //         switch(loadStep) branch count is:<4>[20, 47, 79, 106, 133] default offset is:<155>;
        //         loadSound(loadNext, loadProcess);
        //         type = "声音";
        //         ;
        //         loadGraphics(["assets/effect.swf"], loadNext, loadProcess);
        //         type = "特效";
        //         ;
        //         loadFonts(loadNext, loadProcess);
        //         type = "字体";
        //         ;
        //         loadBitmaps(loadNext, loadProcess);
        //         type = "图片";
        //         ;
        //         initAssets();
        //         if (back != null)
        //         {
        //             null.back();
        //         }
        //         (loadStep + 1);
        //         return;
        //     }// end function
        //     ;
        //     var loadStep:int;
        //     var loadCount:int;
        //     return;
        // }// end function
        if (param2 === void 0) { param2 = null; }
        // private function loadSound(param1:Function, param2:Function) : void
        // {
        //     back = param1;
        //     process = param2;
        //     KyoURLoader.load("assets/config/preload.xml", function (param1:String) : void
        //     {
        //         var _loc_7:* = [];
        //         var _loc_4:* = new XML(param1);
        //         var _loc_2:* = _loc_4.bgm.@path;
        //         var _loc_3:* = _loc_4.sound.@path;
        //         for each (_loc_6 in _loc_4.bgm.item)
        //         {
        //             _loc_7.push(_loc_2 + "/" + _loc_6.toString());
        //         }
        //         for each (_loc_5 in _loc_4.sound.item)
        //         {
        //             _loc_7.push(_loc_3 + "/" + _loc_5.toString());
        //         }
        //         this._soundLoader.loadSounds(_loc_7, back, process);
        //         return;
        //     }// end function
        //     );
        //     return;
    }; // end function
    AssetManager.prototype.initAssets = function () {
        var _loc_1 = this.getFont("font1");
        if (_loc_1) {
            // _loc_1.charGap = -8;
            // _loc_1.spaceGap = 10;
            // _loc_1.offsetY = -5;
        }
        return;
    }; // end function
    AssetManager.prototype.getEffect = function (param1) {
        var effect = new zmovie.ZMovieClip([
            "effect0_json", "effect1_json", "effect2_json", "effect3_json", "effect4_json", "effect5_json", "effect6_json"
        ], RES.getRes("effect_json"), param1);
        return effect;
    }; // end function
    AssetManager.prototype.getSound = function (param1) {
        return this._soundLoader.getSound(param1);
    }; // end function
    AssetManager.prototype.getFighterFace = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var temp = param1.faceUrl.toString();
        temp = temp.replace('.', '_').substring(temp.lastIndexOf("/") + 1);
        var _loc_3 = new egret.Bitmap(RES.getRes(temp));
        if (!_loc_3) {
            return null;
        }
        if (!param2) {
            param2 = new egret.Point(50, 50);
        }
        _loc_3.width = param2.x;
        _loc_3.height = param2.y;
        return _loc_3;
    }; // end function
    AssetManager.prototype.getFighterFaceBig = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = this._bitmapLoader.getBitmap(param1.faceBigUrl);
        if (!_loc_3) {
            return null;
        }
        if (!param2) {
            param2 = new egret.Point(245, 62);
        }
        _loc_3.width = param2.x;
        _loc_3.height = param2.y;
        return _loc_3;
    }; // end function
    AssetManager.prototype.getFighterFaceBar = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var temp = param1.faceBarUrl.toString();
        temp = temp.replace('.', '_').substring(temp.lastIndexOf("/") + 1);
        var _loc_3 = new egret.Bitmap(RES.getRes(temp));
        if (!_loc_3) {
            return null;
        }
        if (!param2) {
            param2 = new egret.Point(102, 64);
        }
        _loc_3.width = param2.x;
        _loc_3.height = param2.y;
        return _loc_3;
    }; // end function
    AssetManager.prototype.getMapPic = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = this._bitmapLoader.getBitmap(param1.picUrl);
        if (!_loc_3) {
            return null;
        }
        if (!param2) {
            param2 = new egret.Point(450, 240);
        }
        _loc_3.width = param2.x;
        _loc_3.height = param2.y;
        return _loc_3;
    }; // end function
    AssetManager.prototype.loadGraphics = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
        // loadarray = param1;
        // back = param2;
        // process = param3;
        // loadCom = function () : void
        // {
        //     this._swfLoader.removeEventListener("complete", loadCom);
        //     this._swfLoader.removeEventListener("progress", loadProcess);
        //     if (back != null)
        //     {
        //         null.back();
        //     }
        //     return;
        // }// end function
        // ;
        // loadProcess = function (event:ProgressEvent) : void
        // {
        //     var _loc_2:* = NaN;
        //     if (process != null)
        //     {
        //         _loc_2 = event.bytesLoaded / event.bytesTotal;
        //         _loc_2 = ((this._swfLoader.loadedAmount - 1) + _loc_2) / loadarray.length;
        //         null.process(_loc_2);
        //     }
        //     return;
        // }// end function
        // ;
        // this._swfLoader.addEventListener("complete", loadCom);
        // if (process != null)
        // {
        //     this._swfLoader.addEventListener("progress", loadProcess);
        // }
        // this._swfLoader.load(loadarray.concat());
        return;
    }; // end function
    AssetManager.prototype.loadBitmaps = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        // var _loc_3 = this.getFighterFaceUrls(FighterModel.I.getAllFighters(), true);
        // _loc_3 = _loc_3.concat(this.getFighterFaceUrls(AssisterModel.I.getAllAssisters()));
        // _loc_3 = _loc_3.concat(this.getMapPicUrls(MapModel.I.getAllMaps()));
        // //KyoUtils.array_deleteSames(_loc_3);
        // this._bitmapLoader.loadQueue(_loc_3, param1, param2);
        return;
    }; // end function
    AssetManager.prototype.loadFonts = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        this._bitmapFontLoader.loadFonts(["assets/font/font1.xml"], param1, param2);
        return;
    }; // end function
    AssetManager.prototype.getFighterFaceUrls = function (param1, param2) {
        // var _loc_3 = [];
        // for each (_loc_4 in param1)
        // {
        if (param2 === void 0) { param2 = false; }
        //     _loc_3.push(_loc_4.faceUrl);
        //     _loc_3.push(_loc_4.faceBigUrl);
        //     if (param2)
        //     {
        //         _loc_3.push(_loc_4.faceBarUrl);
        //     }
        // }
        // return _loc_3;
    }; // end function
    AssetManager.prototype.getMapPicUrls = function (param1) {
        // var _loc_2:* = [];
        // for each (_loc_3 in param1)
        // {
        //     _loc_2.push(_loc_3.picUrl);
        // }
        // return _loc_2;
    }; // end function
    Object.defineProperty(AssetManager, "I", {
        get: function () {
            if (!this._i) {
                this._i = new AssetManager;
            }
            return this._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return AssetManager;
}());
__reflect(AssetManager.prototype, "AssetManager");
//# sourceMappingURL=AssetManager.js.map