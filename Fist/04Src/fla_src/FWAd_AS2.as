class FWAd_AS2 extends MovieClip
{
    var adValues, _FWAd, getNextHighestDepth, createEmptyMovieClip, mcl, loadingBar, loadingBar_bar, onEnterFrame, removeMovieClip, _parent, swapDepths, _visible, _x;
    static var xx, yy, wid, hei, id, ifIsLoadingAdShowStartBtn, noShowLogo, noShowForbidden, onClickStartBtn, fwAd, frameworkLoader, lc, loadFrameworkSuccess, loadFrameworkFailed, frameworkInitFinished, loadGameCompleted, restLoadFrameworkTimes, xml, newsLoader, newsMcl, news_lc, lc_sendName, lc_connName, canNotShowAd, onLoadXML;
    function FWAd_AS2()
    {
        super();
        xx = xx = this.adValues.x;
        yy = yy = this.adValues.y;
        wid = this.adValues.wid;
        hei = this.adValues.hei;
        id = this.adValues.id;
        adType = this.adValues.adType;
        ifIsLoadingAdShowStartBtn = this.adValues.ifIsLoadingAdShowStartBtn;
        noShowLogo = this.adValues.noShowLogo;
        noShowForbidden = this.adValues.noShowForbidden;
        if (this.adValues.onClickCloseBtn)
        {
            onClickStartBtn = this.adValues.onClickCloseBtn;
        }
        else
        {
            onClickStartBtn = this.adValues.onClickStartBtn;
        } // end else if
        fwAd = this;
        this._FWAd = FWAd_AS2;
        frameworkLoader = null;
        lc = null;
        loadFrameworkSuccess = false;
        loadFrameworkFailed = false;
        frameworkInitFinished = false;
        System.security.allowDomain(FWAd_AS2.swfDomain);
        System.security.allowInsecureDomain(FWAd_AS2.swfDomain);
        fscommand("showMenu", "false");
        var my_cm = new ContextMenu();
        my_cm.hideBuiltInItems();
        _root.menu = my_cm;
        fscommand("trapallkeys", "true");
        loadGameCompleted = _root.getBytesLoaded() == _root.getBytesTotal();
        frameworkLoader = this.createEmptyMovieClip("frameworkLoader", this.getNextHighestDepth());
        FWAd_AS2.frameworkLoader.createEmptyMovieClip("content", FWAd_AS2.frameworkLoader.getNextHighestDepth());
        this.mcl = new MovieClipLoader();
        this.mcl.onLoadInit = function ()
        {
            FWAd_AS2.fwAd.loadFrameworkComplete();
        };
        this.mcl.onLoadError = function ()
        {
            FWAd_AS2.fwAd.loadFrameworkError();
        };
        restLoadFrameworkTimes = FWAd_AS2.loadFrameworkTimes;
        this.loadFramework();
        var txt_sp = this.createEmptyMovieClip("txt_sp", this.getNextHighestDepth());
        var DropShadowFilterClassName = "flash.filters.DropShadowFilter";
        var DropShadowFilterClass = eval(DropShadowFilterClassName);
        if (DropShadowFilterClass)
        {
            txt_sp.filters = [new DropShadowFilterClass(0, 0, 0, 1, 2, 2, 4)];
        } // end if
        var loadingBar_hei = 8;
        var loadingBar_x = 10;
        var loadingBar_wid = FWAd_AS2.wid - 2 * loadingBar_x;
        this.loadingBar = this.createEmptyMovieClip("loadingBar", this.getNextHighestDepth());
        this.loadingBar._x = loadingBar_x;
        this.loadingBar._y = FWAd_AS2.hei - loadingBar_hei - 6;
        var loadingBar_bottom = this.loadingBar.createEmptyMovieClip("loadingBar_bottom", this.loadingBar.getNextHighestDepth());
        this.loadingBar_bar = this.loadingBar.createEmptyMovieClip("loadingBar_bar", this.loadingBar.getNextHighestDepth());
        var loadingBar_line = this.loadingBar.createEmptyMovieClip("loadingBar_line", this.loadingBar.getNextHighestDepth());
        loadingBar_bottom.clear();
        loadingBar_bottom.beginFill(3355443);
        loadingBar_bottom.moveTo(0, 0);
        loadingBar_bottom.lineTo(loadingBar_wid, 0);
        loadingBar_bottom.lineTo(loadingBar_wid, loadingBar_hei);
        loadingBar_bottom.lineTo(0, loadingBar_hei);
        loadingBar_bottom.lineTo(0, 0);
        loadingBar_bottom.endFill();
        this.loadingBar_bar.clear();
        var MatrixClassName = "flash.geom.Matrix";
        var MatrixClass = eval(MatrixClassName);
        if (MatrixClass)
        {
            this.loadingBar_bar.beginGradientFill("linear", [16777215, 16750950], [100, 100], [63, 255], new MatrixClass(0.006000, 0, 0, 1, 0, 0));
        }
        else
        {
            this.loadingBar_bar.beginFill(16750950);
        } // end else if
        this.loadingBar_bar._rotation = 90;
        this.loadingBar_bar.moveTo(0, -loadingBar_wid);
        this.loadingBar_bar.lineTo(loadingBar_hei, -loadingBar_wid);
        this.loadingBar_bar.lineTo(loadingBar_hei, 0);
        this.loadingBar_bar.lineTo(0, 0);
        this.loadingBar_bar.lineTo(0, -loadingBar_wid);
        this.loadingBar_bar.endFill();
        loadingBar_line.clear();
        loadingBar_line.lineStyle(1, 6710886);
        loadingBar_line.moveTo(0, 0);
        loadingBar_line.lineTo(loadingBar_wid, 0);
        loadingBar_line.lineTo(loadingBar_wid, loadingBar_hei);
        loadingBar_line.lineTo(0, loadingBar_hei);
        loadingBar_line.lineTo(0, 0);
        loadingBar_line.endFill();
        this.loadingBar_bar._width = 1;
        this.loadingBar_bar._xscale = 100;
        switch (FWAd_AS2.adType)
        {
            case FWAd_AS2.AD_TYPE_LOADING:
            {
                break;
            } 
            default:
            {
                this.loadingBar._visible = false;
                break;
            } 
        } // End of switch
        if (FWAd_AS2.loadGameCompleted)
        {
            this.loadingBar._visible = false;
        }
        else
        {
            this.loadingBar.onEnterFrame = function ()
            {
                FWAd_AS2.fwAd.loadGameProgress();
            };
        } // end else if
    } // End of the function
    static function getParam(paramName)
    {
        if (FWAd_AS2.xml)
        {
            return (String(FWAd_AS2.xml.firstChild.attributes[paramName]));
        } // end if
        trace ("xml未加载完毕, 或xml加载失败");
        return (null);
    } // End of the function
    static function showNews(_newsValues)
    {
        clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
        FWAd_AS2.newsValues.wid = FWAd_AS2.wid;
        for (var _loc3 in _newsValues)
        {
            FWAd_AS2.newsValues[_loc3] = _newsValues[_loc3];
        } // end of for...in
        if (FWAd_AS2.newsValues.id)
        {
        }
        else
        {
            FWAd_AS2.newsValues.id = FWAd_AS2.id + "_news";
        } // end else if
        var _loc4 = FWAd_AS2.newsValues.container || _root;
        if (_loc4)
        {
            newsLoader = _loc4.createEmptyMovieClip("newsLoader", _loc4.getNextHighestDepth());
            FWAd_AS2.newsLoader.createEmptyMovieClip("content", FWAd_AS2.newsLoader.getNextHighestDepth());
            FWAd_AS2.newsLoader.x = FWAd_AS2.newsValues.x;
            FWAd_AS2.newsLoader.y = FWAd_AS2.newsValues.y;
            newsMcl = new MovieClipLoader();
            FWAd_AS2.newsMcl.onLoadInit = function ()
            {
                FWAd_AS2.loadNewsComplete();
            };
            FWAd_AS2.newsMcl.loadClip(FWAd_AS2.newsSWFPath, FWAd_AS2.newsLoader.content);
        }
        else
        {
            trace ("未指定容器,请改成例如: FWAd_AS2.showNews({container:_root}");
        } // end else if
        news_lc = new LocalConnection();
    } // End of the function
    static function loadNewsComplete()
    {
        clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
        checkNewsFirstInitIntervalId = setInterval(FWAd_AS2.checkNewsFirstInit, 100);
    } // End of the function
    static function checkNewsFirstInit()
    {
        var _loc1 = Math.round(FWAd_AS2.newsLoader.getBounds(FWAd_AS2.newsLoader).xMin / 10);
        if (_loc1 < -1000)
        {
            clearInterval(FWAd_AS2.checkNewsFirstInitIntervalId);
            FWAd_AS2.news_lc.send("_News" + _loc1, "that2this", "newsValues", FWAd_AS2.newsValues);
        } // end if
    } // End of the function
    static function showAd(_adValues)
    {
        AD_TYPE_LOADING = FWAd_AS2.AD_TYPE_LOADING;
        AD_TYPE_CONTAINER = FWAd_AS2.AD_TYPE_CONTAINER;
        xx = FWAd_AS2.xx;
        yy = FWAd_AS2.yy;
        var _loc6 = {x: FWAd_AS2.xx, y: FWAd_AS2.yy, wid: FWAd_AS2.wid, hei: FWAd_AS2.hei, id: FWAd_AS2.id, adType: FWAd_AS2.AD_TYPE_CONTAINER};
        for (var _loc3 in _adValues)
        {
            _loc6[_loc3] = _adValues[_loc3];
        } // end of for...in
        if (_adValues)
        {
            if (_adValues.starPoolID && _adValues.starSubPoolID)
            {
                _loc6.id = _adValues.starPoolID + "\n" + _adValues.starSubPoolID;
            } // end if
        } // end if
        var _loc4 = _loc6.container || _root;
        if (_loc4)
        {
            if (_loc6.adType == FWAd_AS2.AD_TYPE_LOADING)
            {
                if (FWAd_AS2.hasLoadOnce)
                {
                    trace ("缓冲广告不允许短时间内重复初始化");
                    return;
                } // end if
                hasLoadOnce = true;
            } // end if
        }
        else
        {
            trace ("未指定容器,请改成例如: FWAd_AS2.showAd({container:_root}");
            return;
        } // end else if
        _loc4.attachMovie("FWAd_AS2", "fwAd", _loc4.getNextHighestDepth(), {adValues: _loc6});
    } // End of the function
    function loadFramework()
    {
        mcl.loadClip(FWAd_AS2.frameworkSWFPath, FWAd_AS2.frameworkLoader.content);
        _global.clearTimeout(timeoutId);
        timeoutId = _global.setTimeout(loadFrameworkTimeout, FWAd_AS2.loadFrameworkTimeoutTime * 1000);
    } // End of the function
    function loadGameProgress()
    {
        switch (FWAd_AS2.adType)
        {
            case FWAd_AS2.AD_TYPE_LOADING:
            {
                var _loc3 = _root.getBytesLoaded() / _root.getBytesTotal();
                loadingBar_bar._xscale = 100;
                loadingBar_bar._yscale = _loc3 * 100;
                if (_loc3 >= 1)
                {
                    loadingBar.onEnterFrame = null;
                    this.loadGameComplete();
                } // end if
                break;
            } 
            default:
            {
                loadingBar.onEnterFrame = null;
                break;
            } 
        } // End of switch
    } // End of the function
    function loadGameComplete()
    {
        hasLoadOnce = false;
        loadGameCompleted = true;
        loadingBar._visible = false;
        this.checkLoadGameCompleteAndTryStart();
        if (FWAd_AS2.frameworkInitFinished)
        {
            FWAd_AS2.lc.send(FWAd_AS2.lc_sendName, "that2this", "loadGameCompleted");
        } // end if
    } // End of the function
    function loadFrameworkComplete()
    {
        onEnterFrame = checkFrameworkFirstInit;
    } // End of the function
    function checkFrameworkFirstInit()
    {
        var _loc4 = Math.round(FWAd_AS2.frameworkLoader.getBounds(FWAd_AS2.frameworkLoader).xMin / 10);
        if (_loc4 < -1000)
        {
            onEnterFrame = null;
            lc_connName = "_FWAd" + _loc4;
            lc_sendName = "_Framework" + _loc4;
            lc = new LocalConnection();
            FWAd_AS2.lc.allowDomain = function ()
            {
                return (true);
            };
            FWAd_AS2.lc.allowInsecureDomain = function ()
            {
                return (true);
            };
            FWAd_AS2.lc.onStatus = function ()
            {
                var _loc2 = arguments[0];
                switch (_loc2.level)
                {
                    case "error":
                    {
                        trace ("lc error");
                        break;
                    } 
                } // End of switch
            };
            FWAd_AS2.lc.connect(FWAd_AS2.lc_connName);
            FWAd_AS2.lc.that2this = function ()
            {
                FWAd_AS2.fwAd.Framework2FWAd.apply(FWAd_AS2.fwAd, arguments);
            };
            _global.clearTimeout(timeoutId);
            loadFrameworkSuccess = true;
            this.checkLoadGameCompleteAndTryStart();
        } // end if
    } // End of the function
    function loadFrameworkTimeout()
    {
        trace ("loadFrameworkTimeout");
        FWAd_AS2.fwAd.loadFrameworkError();
    } // End of the function
    function loadFrameworkError()
    {
        trace ("剩余尝试加载次数:" + FWAd_AS2.restLoadFrameworkTimes);
        _global.clearTimeout(timeoutId);
        if ((restLoadFrameworkTimes = --FWAd_AS2.restLoadFrameworkTimes) < 0)
        {
            loadFrameworkFailed = true;
            this.checkLoadGameCompleteAndTryStart();
        }
        else
        {
            mcl.uploadClip();
            this.loadFramework();
        } // end else if
    } // End of the function
    function Framework2FWAd()
    {
        switch (arguments[0])
        {
            case "initFinished":
            {
                frameworkInitFinished = true;
                FWAd_AS2.lc.send(FWAd_AS2.lc_sendName, "that2this", "confirmInitFinished", this.getFWAdValuesByNameArr(arguments.slice(1)));
                break;
            } 
            case "clickStartBtn":
            {
                this.clickStartBtn();
                break;
            } 
            case "canNotShowAd":
            case "noId":
            {
                canNotShowAd = true;
                this.checkLoadGameCompleteAndTryStart();
                break;
            } 
            case "xml":
            {
                xml = new XML(arguments[1]);
                FWAd_AS2.onLoadXML();
                break;
            } 
        } // End of switch
    } // End of the function
    function getFWAdValuesByNameArr(nameArr)
    {
        var _loc3 = new Object();
        for (var _loc4 in nameArr)
        {
            var _loc1 = nameArr[_loc4];
            _loc3[_loc1] = FWAd_AS2[_loc1];
        } // end of for...in
        return (_loc3);
    } // End of the function
    function checkLoadGameCompleteAndTryStart()
    {
        if (FWAd_AS2.loadGameCompleted)
        {
            if (FWAd_AS2.loadFrameworkFailed)
            {
                trace ("加载 framework 失败");
                if (FWAd_AS2.ifLoadFrameworkErrorCanPlayGame || this.checkIsOurDomain())
                {
                    trace ("自动跳到游戏");
                    this.clickStartBtn();
                }
                else
                {
                    trace ("不自动跳到游戏");
                } // end else if
            }
            else if (FWAd_AS2.canNotShowAd)
            {
                if (this.checkIsOurDomain())
                {
                    this.clickStartBtn();
                } // end if
            } // end if
        } // end else if
    } // End of the function
    function checkIsOurDomain()
    {
        if (_root._url)
        {
            var _loc2 = _root._url.toLowerCase();
            return (_loc2.indexOf(".youyouwin.com/") > 0 || _loc2.indexOf(".7k7k.com/") > 0 || _loc2.indexOf(".flash8.net/") > 0 || _loc2.indexOf("file:///") == 0);
        } // end if
        return (true);
    } // End of the function
    function clickStartBtn()
    {
        if (FWAd_AS2.onClickStartBtn != null)
        {
            FWAd_AS2.onClickStartBtn();
            onClickStartBtn = null;
        } // end if
        this.removeMovieClip();
        var _loc4 = new Array();
        for (var _loc5 in _parent)
        {
            var _loc3 = _parent[_loc5];
            if (_loc3 instanceof MovieClip)
            {
                var _loc2 = _loc3.getDepth();
                if (_loc2 >= 0)
                {
                    _loc4[_loc2] = true;
                } // end if
            } // end if
        } // end of for...in
        for (var _loc2 = 65535; _loc2 >= 0; --_loc2)
        {
            if (_loc4[_loc2])
            {
                continue;
            } // end if
            this.swapDepths(_loc2);
            break;
        } // end of for
        this.removeMovieClip();
        _visible = false;
        _x = -10000;
    } // End of the function
    function closeAd()
    {
        this.clickStartBtn();
    } // End of the function
    static function close()
    {
        FWAd_AS2.fwAd && FWAd_AS2.fwAd.closeAd();
    } // End of the function
    static function showStartBtn()
    {
        FWAd_AS2.lc.send(FWAd_AS2.lc_sendName, "that2this", "showStartBtn");
    } // End of the function
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
    static var newsValues = {x: 0, y: 0};
    static var checkNewsFirstInitIntervalId = -1;
    var timeoutId = -1;
} // End of Class
