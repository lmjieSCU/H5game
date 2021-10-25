var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//分包器
var Subcontractor = (function () {
    function Subcontractor() {
        //当前完成的资源加载数目
        this._loadResNum = 0;
        //当前需要加载资源的数目
        this._allResNum = 0;
        //资源名称集合
        this._resNameList = [];
        //
        this._callback = null;
        //url
        this._currName = "";
        this._loadMode = 0;
        //
        this._loadingPos = -1;
        this._preloadStatus = [];
        this._configStatus = [];
        this.destroyFlag = false;
        this._isMain = false;
    }
    //初始化
    Subcontractor.prototype.Initialization = function (parent, pResNameList, listener, loadMode) {
        if (loadMode === void 0) { loadMode = false; }
        //权限开启
        egret.ImageLoader.crossOrigin = "anonymous";
        this._resNameList = pResNameList;
        this._allResNum = pResNameList.length;
        this._initializationIndex = 0;
        this._callback = listener;
        this._parent = parent;
        this.lodingView = new FightLoading(this);
        for (var i = 0; i < 20; i++) {
            this._preloadStatus[i] = false;
            this._configStatus[i] = false;
        }
    };
    Subcontractor.comp = function (name, str) {
        if (str.indexOf(name) == -1)
            return false;
        return true;
    };
    Subcontractor.prototype.getSubpackage = function (param, subIndex) {
        //console.log("resloader getSubpackage->" + param);
        var lst = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_subpackages;
        }
        else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_subpackages;
        }
        var result = "";
        for (var i = 0; i < lst.length; i++) {
            if (Subcontractor.comp(param, lst[i])) {
                result = lst[i];
                break;
            }
        }
        //console.log("resloader getSubpackage->result " + result);
        if (result == "") {
            return "";
        }
        else {
            if (subIndex) {
                if (result.indexOf("/") == -1) {
                    return result;
                }
                else {
                    return result.split("/")[1];
                }
            }
            else {
                return result;
            }
        }
    };
    Subcontractor.getMain = function (param) {
        var lst = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_main;
        }
        else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_main;
        }
        var result = "";
        for (var i = 0; i < lst.length; i++) {
            if (Subcontractor.comp(param, lst[i])) {
                result = lst[i];
                break;
            }
        }
        return result;
    };
    //
    Subcontractor.prototype.checkResLoaded = function () {
        var result = true;
        for (var i = 0; i < this._allResNum; i++) {
            var json = this._resNameList[i] + "_json";
            if (!RES.getRes(json)) {
                return false;
            }
        }
        return result;
    };
    Subcontractor.prototype.getSubPackage = function (_curName, num) {
        var lst = [];
        if (sdkConfig.channel == "qq") {
            lst = SubConfig.qq_subpackages;
        }
        else if (sdkConfig.channel == "windows") {
            lst = SubConfig.win_subpackages;
        }
        var found = -1;
        for (var i = 0; i < lst.length; i++) {
            for (var j = 0; j < lst[i].length; j++) {
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
    };
    //加载资源发生异常失败
    Subcontractor.prototype.loadResFailor = function (str) {
        //去加载页
        // if (LoadResScene.Instance)
        //     LoadResScene.Instance.textField.text = str;
        this.destroy();
    };
    //
    Subcontractor.prototype.isSubPackage = function (_curName) {
        //不需要加载
        var stage1 = Subcontractor.getMain(_curName);
        var stage2 = this.getSubpackage(_curName, true);
        if (stage1 != "")
            return false;
        if (stage2 == "")
            return false;
        if (!Subcontractor._subres[stage2]) {
            return true;
        }
        return false;
    };
    Subcontractor.setLoadingText = function (txt) {
        // if (LoadResScene.Instance) 
        //     LoadResScene.Instance.textField.text = txt;
    };
    //ResNameList:人物资源名称集合
    Subcontractor.prototype.LoadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _curName, checkJson, stage2_1, vv;
            return __generator(this, function (_a) {
                if (this._allResNum <= 0) {
                    return [2 /*return*/];
                }
                this._loadingPos++;
                _curName = this._resNameList[this._initializationIndex];
                //////////////////////////////////////////////////////////////////////////////
                Subcontractor.setLoadingText("准备加载战斗素材...");
                checkJson = _curName + "_json";
                if (!RES.getRes(checkJson)) {
                    if (!this.isSubPackage(_curName)) {
                        //console.log("resloader  RES.getRes(checkJson) false" + checkJson);
                        this.loadConfig(_curName);
                    }
                    else {
                        stage2_1 = this.getSubpackage(_curName, true);
                        Subcontractor.setLoadingText("分包加载中......"); //+_curName);
                        vv = sdk.loadPackage(stage2_1, function () {
                            Subcontractor._subres[stage2_1] = 1;
                            Subcontractor.setLoadingText("素材分包加载成功"); //+stage2);
                            //console.log("resloader success loadSubpackage->" + stage2);
                            //egret.setTimeout(function(){
                            this.loadConfig(_curName);
                            //}, this, 2000);
                        }, function () {
                            //console.log("resloader failor loadSubpackage->" + stage2);
                            this.loadResFailor("分包加载重置中..."); // + stage2);
                        }, this);
                    }
                }
                else {
                    //console.log("resloader  RES.getRes(checkJson) true" + checkJson);
                    Subcontractor.setLoadingText("检查待加载战斗资源...");
                    this.checkFinish();
                }
                return [2 /*return*/];
            });
        });
    };
    Subcontractor.prototype.getFileUrl = function (_curName) {
        var _url = "";
        var stage = Subcontractor.getMain(_curName);
        if (stage != "") {
            _url = "resource/assets/subPackage/main/" + stage + "/";
        }
        else {
            stage = this.getSubpackage(_curName, false);
            if (stage != "") {
                if (sdkConfig.channel == "om") {
                    _url = "./" + stage;
                }
                else
                    _url = _url + "subpackages/" + stage;
            }
            else {
                _url = Subcontractor.URL + "/fighter/";
                _url = _url + _curName;
            }
        }
        return _url;
    };
    //
    Subcontractor.prototype.loadConfig = function (_curName) {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _url = this.getFileUrl(_curName);
                        console.log(_url);
                        Subcontractor.setLoadingText("加载配置中...|" + _curName + "|" + _url);
                        return [4 /*yield*/, RES.loadConfig(_curName + ".res.json", _url)];
                    case 1:
                        _a.sent();
                        Subcontractor.setLoadingText("预加载中..."); //+ _curName+ "|" + _url);
                        SceneManager.getInstance().AddLayer(this.lodingView);
                        return [4 /*yield*/, RES.loadGroup("preload", 0, this.lodingView)];
                    case 2:
                        _a.sent();
                        this.checkFinish();
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    Subcontractor.prototype.checkFinish = function () {
        this._initializationIndex++;
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
        else {
            //console.log("resloader LoadRes continue->");
            this.LoadRes();
        }
    };
    Subcontractor.prototype.destroy = function () {
        this.destroyFlag = true;
    };
    Subcontractor.URL = "https://bvn-1252897410.cos.ap-guangzhou.myqcloud.com/kof";
    //
    Subcontractor._subres = [];
    return Subcontractor;
}());
__reflect(Subcontractor.prototype, "Subcontractor");
//# sourceMappingURL=Subcontractor.js.map