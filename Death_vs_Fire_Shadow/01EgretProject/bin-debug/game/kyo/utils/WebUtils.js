var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebUtils = (function () {
    function WebUtils() {
        return;
    } // end function
    WebUtils.getURL = function (param1, param2) {
        if (param2 === void 0) { param2 = "_blank"; }
        /*
        var url: any = param1;
        var target: any = param2;
        if (!url) {
            //console.log("getURL: url is null");
            return;
        }
        try {
            navigateToURL(new URLRequest(url), target);
        }
        catch (e) {
            //console.log(e);
        }
        */
        return;
    }; // end function
    WebUtils.addJSCallBack = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        /*
        var timer: Timer;
        var functionName: any = param1;
        var closure: any = param2;
        var jsReady: any = param3;
        var debugTxt: any = param4;
        if (jsReady == null) {
            try {
                ExternalInterface.addCallback(functionName, closure);
            }
            catch (e) {
                //console.log(e);
            }
        }
        else {
            timer = new Timer(100);
            timer.addEventListener(TimerEvent.TIMER, function (event: TimerEvent): void {
                var jsVar: boolean;
                var e: any = event;
                try {
                    jsVar = ExternalInterface.call(jsReady);
                }
                catch (e) {
                    //console.log(e);
                    timer.stop();
                    timer = null;
                }
                if (debugTxt != null) {
                    debugTxt.text = jsVar.toString();
                }
                if (jsVar) {
                    addJSCallBack(functionName, closure);
                    timer.stop();
                    timer = null;
                }
                return;
            }// end function
            );
            timer.start();
        }
        */
        return;
    }; // end function
    WebUtils.checkLockedURL = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /*
        args = null;
        var _loc_3: any = null;
        for each (args in args)
            {
                
                if(args is Array) {
                    for each (_loc_3 in args)
                    {
                        
                            if(!checkURL(_loc_3)) {
                        return false;
                    }
                }
                    continue;
            }
                if (!checkURL(<string>args)) {
                return false;
            }
    }
    */
        return true;
    }; // end function
    WebUtils.checkURL = function (param1) {
        /*
        var s: number;
        var e: number;
        var url: any = param1;
        if (WebUtils._url == null) {
            try {
                WebUtils._url = ExternalInterface.call("eval", "window.location.href");
            }
            catch (e) {
                //console.log(e);
                return false;
            }
            s = WebUtils._url.indexOf("//") + 2;
            e = WebUtils._url.indexOf("/", s);
            e = e == -1 ? (number.MAX_VALUE) : (e - s);
            WebUtils._url = WebUtils._url.substr(s, e);
        }
        return WebUtils._url.indexOf(url) != -1;
        */
    }; // end function
    WebUtils.getParameters = function (param1, param2, param3, param4) {
        if (param4 === void 0) { param4 = 0; }
        var loadint;
        var loadTimes;
        var loadp;
        var stage = param1;
        var checkVar = param2;
        var back = param3;
        var timeout = param4;
        loadp = function () {
            var _loc_1 = stage.loaderInfo.parameters[checkVar];
            if (loadTimes > 0) {
                var _loc_3 = loadTimes - 1;
                loadTimes = _loc_3;
            }
            if (_loc_1 || loadTimes == 0) {
                clearInterval(loadint);
                if (back != null) {
                    back(stage.loaderInfo.parameters);
                }
            }
            return;
        } // end function
        ;
        loadint = setInterval(loadp, 300);
        loadTimes = timeout == 0 ? (-1) : (Math.ceil(timeout / 300));
        return;
    }; // end function
    WebUtils.getLocalUrl = function (param1) {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        var _loc_3: any = _loc_2.lastIndexOf("/");
        _loc_2 = _loc_2.substr(0, (_loc_3 + 1));
        return _loc_2;
        */
        return "";
    }; // end function
    WebUtils.replaceUrl = function (param1, param2, param3) {
        var _loc_4 = param1.replace(param2, param2 + param3);
        _loc_4 = _loc_4.replace(param3 + "http://", "http://");
        return _loc_4;
    }; // end function
    WebUtils.getUrlFloder = function (param1) {
        var _loc_2 = param1.lastIndexOf("/");
        return param1.substr(0, (_loc_2 + 1));
    }; // end function
    WebUtils.getLocalFloder = function (param1) {
        var _loc_2 = param1.lastIndexOf("\\");
        return param1.substr(0, (_loc_2 + 1));
    }; // end function
    WebUtils.getFileName = function (param1) {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        var _loc_3: any = _loc_2.lastIndexOf("/");
        return _loc_2.substr((_loc_3 + 1));
        */
        return "";
    }; // end function
    WebUtils.getStageUrlFloder = function (param1) {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        return getUrlFloder(_loc_2);
        */
        return "";
    }; // end function
    WebUtils.refresh = function () {
        //getURL("javascript:location.reload();", "_self");
        return;
    }; // end function
    WebUtils.alert = function (param1) {
        //getURL("javascript:alert(\"" + param1 + "\");", "_self");
        return;
    }; // end function
    return WebUtils;
}());
__reflect(WebUtils.prototype, "WebUtils");
//# sourceMappingURL=WebUtils.js.map