class WebUtils {
    private static _url: string;

    constructor() {
        return;
    }// end function

    public static getURL(param1: string, param2: string = "_blank"): void {
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
    }// end function

    public static addJSCallBack(param1: string, param2: Function, param3: string = null, param4: any = null): void {
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
    }// end function

    public static checkLockedURL(...args): boolean {
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
    }// end function

    private static checkURL(param1: string): any {
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
    }// end function

    public static getParameters(param1: egret.Stage, param2: string, param3: Function, param4: number = 0): void {
        var loadint: number;
        var loadTimes: number;
        var loadp: Function;
        var stage: any = param1;
        var checkVar: any = param2;
        var back: any = param3;
        var timeout: any = param4;
        loadp = function (): void {
            var _loc_1: any = stage.loaderInfo.parameters[checkVar];
            if (loadTimes > 0) {
                var _loc_3: any = loadTimes - 1;
                loadTimes = _loc_3;
            }
            if (_loc_1 || loadTimes == 0) {
                clearInterval(loadint);
                if (back != null) {
                    back(stage.loaderInfo.parameters);
                }
            }
            return;
        }// end function
            ;
        loadint = setInterval(loadp, 300);
        loadTimes = timeout == 0 ? (-1) : (Math.ceil(timeout / 300));
        return;
    }// end function

    public static getLocalUrl(param1: egret.Stage): string {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        var _loc_3: any = _loc_2.lastIndexOf("/");
        _loc_2 = _loc_2.substr(0, (_loc_3 + 1));
        return _loc_2;
        */
        return "";
    }// end function

    public static replaceUrl(param1: string, param2: string, param3: string): string {
        var _loc_4: any = param1.replace(param2, param2 + param3);
        _loc_4 = _loc_4.replace(param3 + "http://", "http://");
        return _loc_4;
    }// end function

    public static getUrlFloder(param1: string): string {
        var _loc_2: any = param1.lastIndexOf("/");
        return param1.substr(0, (_loc_2 + 1));
    }// end function

    public static getLocalFloder(param1: string): string {
        var _loc_2: any = param1.lastIndexOf("\\");
        return param1.substr(0, (_loc_2 + 1));
    }// end function

    public static getFileName(param1: egret.Stage): string {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        var _loc_3: any = _loc_2.lastIndexOf("/");
        return _loc_2.substr((_loc_3 + 1));
        */
        return "";
    }// end function

    public static getStageUrlFloder(param1: egret.Stage): string {
        /*
        var _loc_2: any = param1.loaderInfo.url;
        return getUrlFloder(_loc_2);
        */
        return "";
    }// end function

    public static refresh(): void {
        //getURL("javascript:location.reload();", "_self");
        return;
    }// end function

    public static alert(param1: string): void {
        //getURL("javascript:alert(\"" + param1 + "\");", "_self");
        return;
    }// end function

}
