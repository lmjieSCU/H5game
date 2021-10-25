
    class GameLoader extends egret.DisplayObject
    {

        public constructor()
        {
            super();
            return;
        }// end 

        public static loadFighter(param1:string, param2:any, param3:any = null, param4:any = null, param5:Object = null) 
        {
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
        }// end 

        public static loadAssister(param1:string, param2:any, param3:any = null, param4:any = null, param5:Object = null) 
        {
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
        }// end 

        public static loadMap(param1:string, param2:any, param3:any = null, param4:any = null, param5:Object = null) 
        {
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
        }// end 

        public static dispose() 
        {
            /*
            var _loc_1 = null;
            while (_loaderCache.length)
            {
                
                _loc_1 = _loaderCache.shift();
                _loc_1.unloadAndStop(true);
            }
            */
            return;
        }// end 

        private static  loadSWF(param1:string, param2:Function, param3: any= null, param4:any = null) 
        {
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
        }// end 

    }
