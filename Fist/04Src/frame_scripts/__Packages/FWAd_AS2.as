class FWAd_AS2 extends MovieClip
{
   static var ifLoadFrameworkErrorCanPlayGame = true;
   static var loadFrameworkTimeoutTime = 8;
   static var loadFrameworkTimes = 2;
   static var ifAdFailCanPlayGame = true;
   static var ifAddCallBackErrorCanPlayGame = false;
   static var swfDomain = "gameCfg.flashwing.net/fwcfg";
   static var swfFolder = "http://" + FWAd_AS2.swfDomain + "/";
   static var frameworkSWFPath = FWAd_AS2.swfFolder + "Framework.swf";
   static var newsSWFPath = FWAd_AS2.swfFolder + "News.swf";
   static var AD_TYPE_LOADING = "loading";
   static var AD_TYPE_CONTAINER = "container";
   static var adType = FWAd_AS2.AD_TYPE_LOADING;
   static var hasLoadOnce = false;
   static var newsValues = {x:0,y:0};
   static var checkNewsFirstInitIntervalId = -1;
   var timeoutId = -1;
   function FWAd_AS2()
   {
      super();
      FWAd_AS2.xx = FWAd_AS2.xx = this.adValues.x;
      FWAd_AS2.yy = FWAd_AS2.yy = this.adValues.y;
      FWAd_AS2.wid = this.adValues.wid;
      FWAd_AS2.hei = this.adValues.hei;
      FWAd_AS2.id = this.adValues.id;
      FWAd_AS2.adType = this.adValues.adType;
      FWAd_AS2.ifIsLoadingAdShowStartBtn = this.adValues.ifIsLoadingAdShowStartBtn;
      FWAd_AS2.noShowLogo = this.adValues.noShowLogo;
      FWAd_AS2.noShowForbidden = this.adValues.noShowForbidden;
      if(this.adValues.onClickCloseBtn)
      {
         FWAd_AS2.onClickStartBtn = this.adValues.onClickCloseBtn;
      }
      else
      {
         FWAd_AS2.onClickStartBtn = this.adValues.onClickStartBtn;
      }
      FWAd_AS2.fwAd = this;
      this._FWAd = FWAd_AS2;
      FWAd_AS2.frameworkLoader = null;
      FWAd_AS2.lc = null;
      FWAd_AS2.loadFrameworkSuccess = false;
      FWAd_AS2.loadFrameworkFailed = false;
      FWAd_AS2.frameworkInitFinished = false;
      System.security.allowDomain(FWAd_AS2.swfDomain);
      System.security.allowInsecureDomain(FWAd_AS2.swfDomain);
      getUrl("FSCommand:showMenu", "false");
      var my_cm = new ContextMenu();
      my_cm.hideBuiltInItems();
      _root.menu = my_cm;
      getUrl("FSCommand:trapallkeys", "true");
      FWAd_AS2.loadGameCompleted = _root.getBytesLoaded() == _root.getBytesTotal();
      FWAd_AS2.frameworkLoader = this.createEmptyMovieClip("frameworkLoader",this.getNextHighestDepth());
      FWAd_AS2.frameworkLoader.createEmptyMovieClip("content",FWAd_AS2.frameworkLoader.getNextHighestDepth());
      this.mcl = new MovieClipLoader();
      this.mcl.onLoadInit = function()
      {
         FWAd_AS2.fwAd.loadFrameworkComplete();
      };
      this.mcl.onLoadError = function()
      {
         FWAd_AS2.fwAd.loadFrameworkError();
      };
      FWAd_AS2.restLoadFrameworkTimes = FWAd_AS2.loadFrameworkTimes;
      this.loadFramework();
      var txt_sp = this.createEmptyMovieClip("txt_sp",this.getNextHighestDepth());
      var DropShadowFilterClassName = "flash.filters.DropShadowFilter";
      var DropShadowFilterClass = eval(DropShadowFilterClassName);
      if(DropShadowFilterClass)
      {
         txt_sp.filters = [new DropShadowFilterClass(0,0,0,1,2,2,4)];
      }
      var loadingBar_hei = 8;
      var loadingBar_x = 10;
      var loadingBar_wid = FWAd_AS2.wid - 2 * loadingBar_x;
      this.loadingBar = this.createEmptyMovieClip("loadingBar",this.getNextHighestDepth());
      this.loadingBar._x = loadingBar_x;
      this.loadingBar._y = FWAd_AS2.hei - loadingBar_hei - 6;
      var loadingBar_bottom = this.loadingBar.createEmptyMovieClip("loadingBar_bottom",this.loadingBar.getNextHighestDepth());
      this.loadingBar_bar = this.loadingBar.createEmptyMovieClip("loadingBar_bar",this.loadingBar.getNextHighestDepth());
      var loadingBar_line = this.loadingBar.createEmptyMovieClip("loadingBar_line",this.loadingBar.getNextHighestDepth());
      loadingBar_bottom.clear();
      loadingBar_bottom.beginFill(3355443);
      loadingBar_bottom.moveTo(0,0);
      loadingBar_bottom.lineTo(loadingBar_wid,0);
      loadingBar_bottom.lineTo(loadingBar_wid,loadingBar_hei);
      loadingBar_bottom.lineTo(0,loadingBar_hei);
      loadingBar_bottom.lineTo(0,0);
      loadingBar_bottom.endFill();
      this.loadingBar_bar.clear();
      var MatrixClassName = "flash.geom.Matrix";
      var MatrixClass = eval(MatrixClassName);
      if(MatrixClass)
      {
         this.loadingBar_bar.beginGradientFill("linear",[16777215,16750950],[100,100],[63,255],new MatrixClass(0.006,0,0,1,0,0));
      }
      else
      {
         this.loadingBar_bar.beginFill(16750950);
      }
      this.loadingBar_bar._rotation = 90;
      this.loadingBar_bar.moveTo(0,- loadingBar_wid);
      this.loadingBar_bar.lineTo(loadingBar_hei,- loadingBar_wid);
      this.loadingBar_bar.lineTo(loadingBar_hei,0);
      this.loadingBar_bar.lineTo(0,0);
      this.loadingBar_bar.lineTo(0,- loadingBar_wid);
      this.loadingBar_bar.endFill();
      loadingBar_line.clear();
      loadingBar_line.lineStyle(1,6710886);
      loadingBar_line.moveTo(0,0);
      loadingBar_line.lineTo(loadingBar_wid,0);
      loadingBar_line.lineTo(loadingBar_wid,loadingBar_hei);
      loadingBar_line.lineTo(0,loadingBar_hei);
      loadingBar_line.lineTo(0,0);
      loadingBar_line.endFill();
      this.loadingBar_bar._width = 1;
      this.loadingBar_bar._xscale = 100;
      if((var _loc0_ = FWAd_AS2.adType) !== FWAd_AS2.AD_TYPE_LOADING)
      {
         this.loadingBar._visible = false;
      }
      if(FWAd_AS2.loadGameCompleted)
      {
         this.loadingBar._visible = false;
      }
      else
      {
         this.loadingBar.onEnterFrame = function()
         {
            FWAd_AS2.fwAd.loadGameProgress();
         };
      }
   }
   static function getParam(paramName)
   {
      if(FWAd_AS2.xml)
      {
         return String(FWAd_AS2.xml.firstChild.attributes[paramName]);
      }
      trace("xml未加载完毕, 或xml加载失败");
      return null;
   }
   static function showNews(_newsValues)
   {
      clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
      FWAd_AS2.newsValues.wid = FWAd_AS2.wid;
      for(var _loc3_ in _newsValues)
      {
         FWAd_AS2.newsValues[_loc3_] = _newsValues[_loc3_];
      }
      if(!FWAd_AS2.newsValues.id)
      {
         FWAd_AS2.newsValues.id = FWAd_AS2.id + "_news";
      }
      var _loc4_ = FWAd_AS2.newsValues.container || _root;
      if(_loc4_)
      {
         FWAd_AS2.newsLoader = _loc4_.createEmptyMovieClip("newsLoader",_loc4_.getNextHighestDepth());
         FWAd_AS2.newsLoader.createEmptyMovieClip("content",FWAd_AS2.newsLoader.getNextHighestDepth());
         FWAd_AS2.newsLoader.x = FWAd_AS2.newsValues.x;
         FWAd_AS2.newsLoader.y = FWAd_AS2.newsValues.y;
         FWAd_AS2.newsMcl = new MovieClipLoader();
         FWAd_AS2.newsMcl.onLoadInit = function()
         {
            FWAd_AS2.loadNewsComplete();
         };
         FWAd_AS2.newsMcl.loadClip(FWAd_AS2.newsSWFPath,FWAd_AS2.newsLoader.content);
      }
      else
      {
         trace("未指定容器,请改成例如: FWAd_AS2.showNews({container:_root}");
      }
      FWAd_AS2.news_lc = new LocalConnection();
   }
   static function loadNewsComplete()
   {
      clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
      FWAd_AS2.checkNewsFirstInitIntervalId = setInterval(FWAd_AS2.checkNewsFirstInit,100);
   }
   static function checkNewsFirstInit()
   {
      var _loc1_ = Math.round(FWAd_AS2.newsLoader.getBounds(FWAd_AS2.newsLoader).xMin / 10);
      if(_loc1_ < -1000)
      {
         clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
         FWAd_AS2.news_lc.send("_News" + _loc1_,"that2this","newsValues",FWAd_AS2.newsValues);
      }
   }
   static function showAd(_adValues)
   {
      FWAd_AS2.AD_TYPE_LOADING = FWAd_AS2.AD_TYPE_LOADING;
      FWAd_AS2.AD_TYPE_CONTAINER = FWAd_AS2.AD_TYPE_CONTAINER;
      FWAd_AS2.xx = FWAd_AS2.xx;
      FWAd_AS2.yy = FWAd_AS2.yy;
      var _loc6_ = {x:FWAd_AS2.xx,y:FWAd_AS2.yy,wid:FWAd_AS2.wid,hei:FWAd_AS2.hei,id:FWAd_AS2.id,adType:FWAd_AS2.AD_TYPE_CONTAINER};
      for(var _loc3_ in _adValues)
      {
         _loc6_[_loc3_] = _adValues[_loc3_];
      }
      if(_adValues)
      {
         if(_adValues.starPoolID && _adValues.starSubPoolID)
         {
            _loc6_.id = _adValues.starPoolID + "\n" + _adValues.starSubPoolID;
         }
      }
      var _loc4_ = _loc6_.container || _root;
      if(_loc4_)
      {
         if(_loc6_.adType == FWAd_AS2.AD_TYPE_LOADING)
         {
            if(FWAd_AS2.hasLoadOnce)
            {
               trace("缓冲广告不允许短时间内重复初始化");
               return undefined;
            }
            FWAd_AS2.hasLoadOnce = true;
         }
         _loc4_.attachMovie("FWAd_AS2","fwAd",_loc4_.getNextHighestDepth(),{adValues:_loc6_});
      }
      trace("未指定容器,请改成例如: FWAd_AS2.showAd({container:_root}");
      return undefined;
   }
   function loadFramework()
   {
      this.mcl.loadClip(FWAd_AS2.frameworkSWFPath,FWAd_AS2.frameworkLoader.content);
      _global.clearTimeout(this.timeoutId);
      this.timeoutId = _global.setTimeout(this.loadFrameworkTimeout,FWAd_AS2.loadFrameworkTimeoutTime * 1000);
   }
   function loadGameProgress()
   {
      if((var _loc0_ = FWAd_AS2.adType) !== FWAd_AS2.AD_TYPE_LOADING)
      {
         this.loadingBar.onEnterFrame = null;
      }
      else
      {
         var _loc3_ = _root.getBytesLoaded() / _root.getBytesTotal();
         this.loadingBar_bar._xscale = 100;
         this.loadingBar_bar._yscale = _loc3_ * 100;
         if(_loc3_ >= 1)
         {
            this.loadingBar.onEnterFrame = null;
            this.loadGameComplete();
         }
      }
   }
   function loadGameComplete()
   {
      FWAd_AS2.hasLoadOnce = false;
      FWAd_AS2.loadGameCompleted = true;
      this.loadingBar._visible = false;
      this.checkLoadGameCompleteAndTryStart();
      if(FWAd_AS2.frameworkInitFinished)
      {
         FWAd_AS2.lc.send(FWAd_AS2.lc_sendName,"that2this","loadGameCompleted");
      }
   }
   function loadFrameworkComplete()
   {
      this.onEnterFrame = this.checkFrameworkFirstInit;
   }
   function checkFrameworkFirstInit()
   {
      var _loc4_ = Math.round(FWAd_AS2.frameworkLoader.getBounds(FWAd_AS2.frameworkLoader).xMin / 10);
      if(_loc4_ < -1000)
      {
         this.onEnterFrame = null;
         FWAd_AS2.lc_connName = "_FWAd" + _loc4_;
         FWAd_AS2.lc_sendName = "_Framework" + _loc4_;
         FWAd_AS2.lc = new LocalConnection();
         FWAd_AS2.lc.allowDomain = function()
         {
            return true;
         };
         FWAd_AS2.lc.allowInsecureDomain = function()
         {
            return true;
         };
         FWAd_AS2.lc.onStatus = function()
         {
            var _loc2_ = arguments[0];
            if((var _loc0_ = _loc2_.level) === "error")
            {
               trace("lc error");
            }
         };
         FWAd_AS2.lc.connect(FWAd_AS2.lc_connName);
         FWAd_AS2.lc.that2this = function()
         {
            FWAd_AS2.fwAd.Framework2FWAd.apply(FWAd_AS2.fwAd,arguments);
         };
         _global.clearTimeout(this.timeoutId);
         FWAd_AS2.loadFrameworkSuccess = true;
         this.checkLoadGameCompleteAndTryStart();
      }
   }
   function loadFrameworkTimeout()
   {
      trace("loadFrameworkTimeout");
      FWAd_AS2.fwAd.loadFrameworkError();
   }
   function loadFrameworkError()
   {
      trace("剩余尝试加载次数:" + FWAd_AS2.restLoadFrameworkTimes);
      _global.clearTimeout(this.timeoutId);
      if((FWAd_AS2.restLoadFrameworkTimes = FWAd_AS2.restLoadFrameworkTimes - 1) < 0)
      {
         FWAd_AS2.loadFrameworkFailed = true;
         this.checkLoadGameCompleteAndTryStart();
      }
      else
      {
         this.mcl.uploadClip();
         this.loadFramework();
      }
   }
   function Framework2FWAd()
   {
      switch(arguments[0])
      {
         case "initFinished":
            FWAd_AS2.frameworkInitFinished = true;
            FWAd_AS2.lc.send(FWAd_AS2.lc_sendName,"that2this","confirmInitFinished",this.getFWAdValuesByNameArr(arguments.slice(1)));
            break;
         case "clickStartBtn":
            this.clickStartBtn();
            break;
         case "canNotShowAd":
         case "noId":
            FWAd_AS2.canNotShowAd = true;
            this.checkLoadGameCompleteAndTryStart();
            break;
         case "xml":
            FWAd_AS2.xml = new XML(arguments[1]);
            FWAd_AS2.onLoadXML();
      }
   }
   function getFWAdValuesByNameArr(nameArr)
   {
      var _loc3_ = new Object();
      for(var _loc4_ in nameArr)
      {
         var _loc1_ = nameArr[_loc4_];
         _loc3_[_loc1_] = FWAd_AS2[_loc1_];
      }
      return _loc3_;
   }
   function checkLoadGameCompleteAndTryStart()
   {
      if(FWAd_AS2.loadGameCompleted)
      {
         if(FWAd_AS2.loadFrameworkFailed)
         {
            trace("加载 framework 失败");
            if(FWAd_AS2.ifLoadFrameworkErrorCanPlayGame || this.checkIsOurDomain())
            {
               trace("自动跳到游戏");
               this.clickStartBtn();
            }
            else
            {
               trace("不自动跳到游戏");
            }
         }
         else if(FWAd_AS2.canNotShowAd)
         {
            if(this.checkIsOurDomain())
            {
               this.clickStartBtn();
            }
         }
      }
   }
   function checkIsOurDomain()
   {
      if(_root._url)
      {
         var _loc2_ = _root._url.toLowerCase();
         return _loc2_.indexOf(".youyouwin.com/") > 0 || _loc2_.indexOf(".7k7k.com/") > 0 || _loc2_.indexOf(".flash8.net/") > 0 || _loc2_.indexOf("file:///") == 0;
      }
      return true;
   }
   function clickStartBtn()
   {
      if(FWAd_AS2.onClickStartBtn != null)
      {
         FWAd_AS2.onClickStartBtn();
         FWAd_AS2.onClickStartBtn = null;
      }
      this.removeMovieClip();
      var _loc4_ = new Array();
      for(var _loc5_ in this._parent)
      {
         var _loc3_ = this._parent[_loc5_];
         if(_loc3_ instanceof MovieClip)
         {
            var _loc2_ = _loc3_.getDepth();
            if(_loc2_ >= 0)
            {
               _loc4_[_loc2_] = true;
            }
         }
      }
      _loc2_ = 65535;
      while(_loc2_ >= 0)
      {
         if(_loc4_[_loc2_])
         {
            _loc2_ = _loc2_ - 1;
            continue;
         }
         this.swapDepths(_loc2_);
         break;
      }
      this.removeMovieClip();
      this._visible = false;
      this._x = -10000;
   }
   function closeAd()
   {
      this.clickStartBtn();
   }
   static function close()
   {
      FWAd_AS2.fwAd && FWAd_AS2.fwAd.closeAd();
   }
   static function showStartBtn()
   {
      FWAd_AS2.lc.send(FWAd_AS2.lc_sendName,"that2this","showStartBtn");
   }
}
