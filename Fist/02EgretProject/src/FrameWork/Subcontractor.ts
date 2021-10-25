//分包器
class Subcontractor {
    public static URL: string = "https://bvn-1252897410.cos.ap-guangzhou.myqcloud.com/kof";
    public _parent: any;
    //当前完成的资源加载数目
    public _loadResNum: number = 0;
    //当前需要加载资源的数目
    public _allResNum: number = 0;
    //
    public static _subres: any = [];
    //资源名称集合
    private _resNameList: Array<string> = []
    //初始化序列号
    private _initializationIndex: number;
    //
    public _callback: Function = null;
    //url
    public _currName: string = "";

    public _loadMode: number = 0;
    //
    public _loadingPos: number = -1;
    public _preloadStatus: any = [];
    public _configStatus: any = [];
    public destroyFlag: boolean = false;
    public _isMain: boolean = false;
    //
    public lodingView: FightLoading;
    //初始化
    public Initialization(parent: any, pResNameList: Array<string>, listener: Function, loadMode: boolean = false) {
        //权限开启
        egret.ImageLoader.crossOrigin = "anonymous"
        this._resNameList = pResNameList;
        this._allResNum = pResNameList.length;
        this._initializationIndex = 0
        this._callback = listener;
        this._parent = parent;
        this.lodingView = new FightLoading(this);
        for (let i = 0; i < 20; i++) {
            this._preloadStatus[i] = false;
            this._configStatus[i] = false;
        }
    }

    public static comp(name, str: string): boolean {
        if (str.indexOf(name) == -1)
            return false;
        return true;
    }


    public getSubpackage(param: string, subIndex: boolean): string {
        //console.log("resloader getSubpackage->" + param);
        let lst: any = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_subpackages;
        } else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_subpackages;
        } 
        let result: string = "";
        for (let i = 0; i < lst.length; i++) {
            if (Subcontractor.comp(param, lst[i])) {
                result = lst[i];
                break;
            }
        }
        //console.log("resloader getSubpackage->result " + result);
        if (result == "") {
            return "";
        } else {
            if (subIndex) {
                if (result.indexOf("/") == -1) {
                    return result;
                } else {
                    return result.split("/")[1];
                }
            } else {
                return result;
            }
        }
    }

    public static getMain(param: string): string {
        let lst: any = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_main;
        }  else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_main;
        } 
        let result: string = "";
        for (let i = 0; i < lst.length; i++) {
            if (Subcontractor.comp(param, lst[i])) {
                result = lst[i];
                break;
            }
        }
        return result;
    }
    //

    public checkResLoaded(): boolean {
        let result: boolean = true;
        for (let i = 0; i < this._allResNum; i++) {
            let json: string = this._resNameList[i] + "_json";
            if (!RES.getRes(json)) {
                return false;
            }
        }
        return result;
    }
    public getSubPackage(_curName: string, num: number): string {
        let lst: any = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_subpackages;
        }else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_subpackages;
        }
        let found: number = -1;
        for (let i = 0; i < lst.length; i++) {
            for (let j = 0; j < lst[i].length; j++) {
                if (lst[i][j].index(_curName) != -1) {
                    found = i;
                    break;
                }
            }
            if (found != -1)
                break;
        }
        if (found != -1) {
            found = found + 1;
            Subcontractor.setLoadingText(_curName + "found package " + "qq_stage" + found + "|" + num);
            return "qq_stage" + found;
        }
        return "";
    }
    //加载资源发生异常失败
    public loadResFailor(str: string) {
        //去加载页
        // if (LoadResScene.Instance)
        //     LoadResScene.Instance.textField.text = str;
        this.destroy();
    }

    //
    public isSubPackage(_curName: string): boolean {
        //不需要加载
        let stage1: string = Subcontractor.getMain(_curName)
        let stage2 = this.getSubpackage(_curName, true)
        if (stage1 != "")
            return false;
        if (stage2 == "")
            return false;
        if (!Subcontractor._subres[stage2]) {
            return true;
        }
        return false;
    }
  
    public static setLoadingText(txt: string) {
        // if (LoadResScene.Instance) 
        //     LoadResScene.Instance.textField.text = txt;
    }

    //ResNameList:人物资源名称集合
    public async LoadRes() {
        if (this._allResNum <= 0) {
            return;
        }
        this._loadingPos++;
        //当前资源名称
        let _curName: string = this._resNameList[this._initializationIndex]
        //////////////////////////////////////////////////////////////////////////////
        Subcontractor.setLoadingText("准备加载战斗素材...");
        //////////////////////////////////////////////////////////////////////////////
        let checkJson: string = _curName + "_json";
        if (!RES.getRes(checkJson)) {
            if (!this.isSubPackage(_curName)) {
                //console.log("resloader  RES.getRes(checkJson) false" + checkJson);
                this.loadConfig(_curName);
            } else {

                let stage2 = this.getSubpackage(_curName, true)
                Subcontractor.setLoadingText("分包加载中......");//+_curName);
                // console.log("resloader loadSubpackage->" + stage2);
                let vv: any = sdk.loadPackage(stage2, function () {//success
                    Subcontractor._subres[stage2] = 1;
                    Subcontractor.setLoadingText("素材分包加载成功");//+stage2);
                    //console.log("resloader success loadSubpackage->" + stage2);
                    //egret.setTimeout(function(){
                        this.loadConfig(_curName);
                    //}, this, 2000);
                }, function () {//failor
                    //console.log("resloader failor loadSubpackage->" + stage2);
                    this.loadResFailor("分包加载重置中...");// + stage2);
                }, this);
            }
        } else {
            //console.log("resloader  RES.getRes(checkJson) true" + checkJson);
            Subcontractor.setLoadingText("检查待加载战斗资源...");
            this.checkFinish();
        }
    }
    public getFileUrl(_curName: string): string {
        let _url: string = "";
        let stage: string = Subcontractor.getMain(_curName);
        if (stage != "") {
            _url = "resource/assets/subPackage/main/" + stage + "/";
        } else {
            stage = this.getSubpackage(_curName, false);
            if (stage != "") {
                if (sdkConfig.channel == "om") {
                    _url = "./" + stage;
                } else
                    _url = _url + "subpackages/" + stage;
            } else {
                    _url = Subcontractor.URL + "/fighter/";
                    _url = _url + _curName;
            }
        }
        return _url;
    }
//
    public async loadConfig(_curName) {
        let _url: string = this.getFileUrl(_curName);
        console.log(_url);
        Subcontractor.setLoadingText("加载配置中...|" + _curName + "|" + _url);
        await RES.loadConfig(_curName + ".res.json", _url)
        Subcontractor.setLoadingText("预加载中...");//+ _curName+ "|" + _url);
        SceneManager.getInstance().AddLayer(this.lodingView);
        await RES.loadGroup("preload", 0, this.lodingView);
        this.checkFinish();
    }
//
    public checkFinish() {
        this._initializationIndex++
        this._loadResNum++;
        //跳转
        if (this._loadResNum >= this._allResNum) {
            this.destroy();
            if (this._callback) {
                // console.log("subcontractor over this._callback.call");
                //资源加载完后，需要有一定固定延迟来进行下面的操作
                egret.setTimeout(function (arg) {
                    this._callback.call(this._parent, this._parent);
                }, this, 800);
            }
        }
        else { //继续加载
            //console.log("resloader LoadRes continue->");
            this.LoadRes();
        }
    }
  

    public destroy() {
        this.destroyFlag = true;
    }
}