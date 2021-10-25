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
var GameLoader = (function (_super) {
    __extends(GameLoader, _super);
    function GameLoader() {
        var _this = _super.call(this) || this;
        return _this;
    } // end 
    GameLoader.loadFighter = function (param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        if (param5 === void 0) { param5 = null; }
        /*
        fighterId = param1;
        back = param2;
        fail = param3;
        process = param4;
        customBackParam = param5;
        loadComplete =  (param1:DisplayObject)
        {
            var _loc_2 = new FighterMain(param1 as MovieClip);
            _loc_2.data = fv;
            if (back != null)
            {
                if (customBackParam)
                {
                    null.back(_loc_2, customBackParam);
                }
                else
                {
                    null.back(_loc_2);
                }
                back = null;
            }
            return;
        }// end
        ;
        var fv = FighterModel.I.getFighter(fighterId, true);
        if (!fv)
        {
            GameLoader.trace("GameLoader.loadFighter :: ID不存在:", fighterId);
            if (fail != null)
            {
                GameLoader.fail("角色ID错误");
            }
            return;
        }
        loadSWF(fv.fileUrl, loadComplete, fail, process);
        */
        return;
    }; // end 
    GameLoader.loadAssister = function (param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        if (param5 === void 0) { param5 = null; }
        /*
        fighterId = param1;
        back = param2;
        fail = param3;
        process = param4;
        customBackParam = param5;
        loadComplete =  (param1:DisplayObject)
        {
            var _loc_2 = new Assister(param1 as MovieClip);
            _loc_2.data = fv;
            if (back != null)
            {
                if (customBackParam)
                {
                    null.back(_loc_2, customBackParam);
                }
                else
                {
                    null.back(_loc_2);
                }
                back = null;
            }
            return;
        }// end
        ;
        var fv = AssisterModel.I.getAssister(fighterId, true);
        if (!fv)
        {
            GameLoader.trace("GameLoader.loadAssister :: ID不存在:", fighterId);
            if (fail != null)
            {
                GameLoader.fail("角色ID错误");
            }
            return;
        }
        loadSWF(fv.fileUrl, loadComplete, fail, process);
        */
        return;
    }; // end 
    GameLoader.loadMap = function (param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        if (param5 === void 0) { param5 = null; }
        /*
        mapId = param1;
        back = param2;
        fail = param3;
        process = param4;
        customBackParam = param5;
        loadComplete =  (param1:DisplayObject)
        {
            var _loc_2 = new MapMain(param1 as Sprite);
            _loc_2.data = mv;
            if (back != null)
            {
                if (customBackParam)
                {
                    null.back(_loc_2, customBackParam);
                }
                else
                {
                    null.back(_loc_2);
                }
                back = null;
            }
            return;
        }// end
        ;
        var mv = MapModel.I.getMap(mapId);
        if (!mv)
        {
            GameLoader.trace("GameLoader.loadMap :: ID不存在:", mapId);
            if (fail != null)
            {
                GameLoader.fail("场景ID错误");
            }
            return;
        }
        loadSWF(mv.fileUrl, loadComplete, fail, process);
        */
        return;
    }; // end 
    GameLoader.dispose = function () {
        /*
        var _loc_1 = null;
        while (_loaderCache.length)
        {
            
            _loc_1 = _loaderCache.shift();
            _loc_1.unloadAndStop(true);
        }
        */
        return;
    }; // end 
    GameLoader.loadSWF = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        /*
        url = param1;
        back = param2;
        fail = param3;
        process = param4;
        loadComplete =  (event:Event)
        {
            null.clearLoader();
            if (back != null)
            {
                null.back(l.content);
                back = null;
            }
            _loaderCache.push(l);
            return;
        }// end
        ;
        loadIOError =  (event:IOErrorEvent)
        {
            null.clearLoader();
            l = null;
            Debugger.log("GameLoader.loadSWF :: 找不到文件:", url);
            if (fail != null)
            {
                null.fail("加载场景文件错误");
            }
            return;
        }// end
        ;
        loadProgress =  (event:ProgressEvent)
        {
            var _loc_2 = event.bytesLoaded / event.bytesTotal;
            if (process != null)
            {
                null.process(_loc_2);
            }
            return;
        }// end
        ;
        clearLoader =  ()
        {
            l.contentLoaderInfo.removeEventListener("complete", loadComplete);
            l.contentLoaderInfo.removeEventListener("ioError", loadIOError);
            l.contentLoaderInfo.removeEventListener("progress", loadProgress);
            return;
        }// end
        ;
        var l = new Loader();
        l.contentLoaderInfo.addEventListener("complete", loadComplete);
        l.contentLoaderInfo.addEventListener("ioError", loadIOError);
        if (process != null)
        {
            l.contentLoaderInfo.addEventListener("progress", loadProgress);
        }
        l.load(new URLRequest(url));
        */
        return;
    }; // end 
    return GameLoader;
}(egret.DisplayObject));
__reflect(GameLoader.prototype, "GameLoader");
//# sourceMappingURL=GameLoader.js.map