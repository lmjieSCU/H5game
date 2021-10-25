var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
    }
    //初始化
    Subcontractor.prototype.Initialization = function (pResNameList, pScene) {
        //权限开启
        egret.ImageLoader.crossOrigin = "anonymous";
        this._scene = pScene;
        this._resNameList = pResNameList;
        this._allResNum = pResNameList.length;
        this._initializationIndex = 0;
    };
    //ResNameList:人物资源名称集合
    Subcontractor.prototype.LoadRes = function () {
        //判断是否已经初始化
        if (this._allResNum <= 0) {
            return;
        }
        //当前资源名称
        var _curName = this._resNameList[this._initializationIndex];
        //判断加载资源
        // if(!egret.localStorage.getItem(_curName+"_json")){
        //     RES.loadConfig(_curName+".res.json","http://139.199.14.186/stickvs/"+_curName)
        //     //添加事件监听
        //     RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.LoadConfigFinish,this)
        // }
        // else{
        //      //缓冲序列号
        //     this._initializationIndex++
        //     //已经缓存个数
        //     this._loadResNum++;
        //     //跳转
        //     if(this._loadResNum == this._allResNum){
        //         SceneManager.Instance.changeScene(this._scene);
        //         return;
        //     }
        //     else{
        //         this.LoadRes()
        //     }
        // }
        //--------------------测试
        if (!RES.getRes(_curName + "_json")) {
            RES.loadConfig(_curName + ".res.json", "http://139.199.14.186/stickvs/" + _curName);
            //添加事件监听
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.LoadConfigFinish, this);
        }
    };
    //加载配置
    Subcontractor.prototype.LoadConfigFinish = function () {
        //移除监听事件
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.LoadConfigFinish, this);
        //加载组
        RES.loadGroup("preload");
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.LoadCroupFinish, this);
    };
    //加载组
    Subcontractor.prototype.LoadCroupFinish = function () {
        //移除加载组事件
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.LoadCroupFinish, this);
        //当前资源名称
        var _curName = this._resNameList[this._initializationIndex];
        //加入到本地缓存
        RES.getResByUrl("http://139.199.14.186/stickvs/" + _curName + "/" + _curName + ".res.json", function (data) {
            for (var k in data["resources"]) {
                var cache = [];
                if (!egret.localStorage.getItem(data["resources"][k].name)) {
                    egret.localStorage.setItem(data["resources"][k].name, JSON.stringify(RES.getRes(data["resources"][k].name), function (key, value) {
                        if (typeof value === 'object' && value !== null) {
                            if (cache.indexOf(value) !== -1) {
                                // 移除
                                return;
                            }
                            // 收集所有的值
                            cache.push(value);
                        }
                        return value;
                    }));
                    cache = null;
                }
            }
        }, this, RES.ResourceItem.TYPE_JSON);
        //缓冲序列号
        this._initializationIndex++;
        //已经缓存个数
        this._loadResNum++;
        //跳转
        if (this._loadResNum == this._allResNum) {
            SceneManager.Instance.changeScene(this._scene);
        }
        else {
            var _curName_1 = this._resNameList[this._initializationIndex];
            RES.loadConfig(_curName_1 + ".res.json", "http://139.199.14.186/stickvs/" + _curName_1);
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.LoadConfigFinish, this);
        }
    };
    //获取缓存数据
    Subcontractor.GetLocalStorageData = function (key) {
        if (egret.localStorage.getItem(key)) {
            return JSON.parse(egret.localStorage.getItem(key));
        }
        else {
            return false;
        }
    };
    return Subcontractor;
}());
__reflect(Subcontractor.prototype, "Subcontractor");
//# sourceMappingURL=Subcontractor.js.map