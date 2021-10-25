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
var SplashScene = (function (_super) {
    __extends(SplashScene, _super);
    function SplashScene() {
        var _this = _super.call(this) || this;
        _this.secondFlag = 0;
        SplashScene.instance = _this;
        return _this;
    }
    SplashScene.entryNext = function () {
        if (!SplashScene.entryalready) {
            SplashScene.entryalready = true;
            SceneManager.Instance.changeScene(new ModeScene());
        }
    };
    //初始化游戏数据
    SplashScene.prototype.GameInit = function () {
        FighterModel.I.initByXML();
        AssisterModel.I.initByXML();
        MapModel.I.initByXML();
        MessionModel.I.initByXML();
        EffectModel.I.initlize();
    };
    SplashScene.prototype.onEnter = function () {
        UI.addPic(this, "bg_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this.GameInit();
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        if (SplashScene.channel != "android") {
            var url = "https://www.yiruituo.com/tt.php?ad=0&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
            request.open(url, egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        }
        //
        egret.setTimeout(function (arg) {
            SplashScene.entryNext();
        }, this, 2500);
        /*
        let txt1 = UI.addText(this, "抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当", UI.WINSIZE_W/2-245, UI.WINSIZE_H-60);
        txt1.size = 20;
        let txt2 = UI.addText(this, "适当游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活", UI.WINSIZE_W/2-245, UI.WINSIZE_H-35);
        txt2.size = 20;
        */
        this.addEventListener(egret.Event.ENTER_FRAME, this.update2, this);
    };
    //帧循环处理函数
    SplashScene.prototype.update2 = function () {
        if (this.secondFlag++ % 23 == 0 && SplashScene.channel == "tt") {
            if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_ING) {
                console.log(RecordBtn.recordSecond);
                if (RecordBtn.recordSecond++ == 300) {
                    RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_END;
                    platform.stopRecord();
                    RecordBtn.recordSecond = 0;
                }
            }
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    SplashScene.showBanner = function (node) {
        if (node === void 0) { node = null; }
        if (SplashScene.channel == "android") {
            egret.ExternalInterface.call("showInsert", "message from js");
            return;
        }
        if (SplashScene.showAd == true) {
            SplashScene.visitAdSum(1);
            SplashScene.showBannerControl(node);
        }
    };
    SplashScene.showBannerControl = function (node) {
        if (SplashScene.channel != "tt") {
            if (Math2.numberBetween(0, 100, true) <= 33)
                platform.startRecord();
            else
                platform.showBanner();
        }
        else {
            platform.showBanner();
        }
        SplashScene.showCloseBtn(node);
    };
    SplashScene.showBannerForce = function (node) {
        if (node === void 0) { node = null; }
        if (SplashScene.channel == "android") {
            egret.ExternalInterface.call("showInsertForce", "message from js");
            return;
        }
        SplashScene.visitAdSum(1);
        if ((SplashScene.channel != "tt")
            && SplashScene.showAd == true) {
            if (Math2.numberBetween(0, 100, true) <= 33)
                platform.startRecord();
            else
                platform.showBanner();
        }
        else {
            platform.showBanner();
        }
        //
        SplashScene.showCloseBtn(node);
    };
    SplashScene.showCloseBtn = function (node) {
        if (node == null)
            return;
        if (SplashScene.channel != "qq")
            return;
        if (SplashScene.showAd == false)
            return;
        //
        SplashScene.closeBtnParent = node;
        SplashScene.closeBtn = UI.addBtn(node, "ad_close_png", UI.WINSIZE_W / 2 + 135 + 33, UI.WINSIZE_H - 100 - 10, true, function (arg) {
            platform.hideBanner();
            try {
                SplashScene.closeBtnParent.removeChild(SplashScene.closeBtn);
            }
            catch (e) {
                //console.error(e);
            }
        });
    };
    //
    SplashScene.hideBanner = function () {
        if (SplashScene.showAd == false)
            platform.hideBanner();
    };
    SplashScene.showVideoForce = function () {
        if (SplashScene.isVideo == true) {
            SplashScene.visitAdSum(2);
            platform.playAdVideo();
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    SplashScene.loginTT = function () {
        if (SplashScene.loginAlready == false) {
            SplashScene.loginAlready = true;
            platform.login();
            platform.getUserInfo();
        }
    };
    //
    SplashScene.addRecordBtn = function (node, paramX, paramY) {
        if (SplashScene.channel == "tt") {
            var a = new RecordBtn(paramX, paramY);
            node.addChild(a);
        }
    };
    SplashScene.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        //console.log("post data : ", request.response);
        var content = request.response.substring(0, 50);
        if (content.substr(0, 1) == "2" || content.substr(0, 1) == "3") {
            SplashScene.showAd = true;
        }
        if (content.substr(0, 1) == "3") {
            SplashScene.isVideo = true;
        }
        SplashScene.entryNext();
    };
    SplashScene.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    SplashScene.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    SplashScene.prototype.onExit = function () {
        //
    };
    SplashScene.addVersion = function (node) {
        var txt = UI.addText(node, "V:" + SplashScene.version, UI.WINSIZE_W - 100, UI.WINSIZE_H - 40);
        txt.size = 14;
    };
    SplashScene.visitAdSum = function (param) {
        if (SplashScene.channel != "4399" && SplashScene.channel != "qq") {
            var url = "https://www.yiruituo.com/tt.php?ad=" + param + "&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open(url, egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
        }
    };
    //
    SplashScene.clickMusicBtn = function () {
        if (SplashScene.soundflag) {
            SplashScene.soundflag = false;
            SplashScene.soundChannel.stop();
        }
        else {
            SplashScene.soundflag = true;
            var sd = new egret.Sound();
            sd.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
                SplashScene.soundChannel = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
            }, this);
            sd.load("resource/assets/sound/bgmusic.mp3");
        }
    };
    SplashScene.playMusic = function () {
        var sd = new egret.Sound();
        sd.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            SplashScene.soundChannel = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
        }, this);
        sd.load("resource/assets/sound/bgmusic.mp3");
    };
    SplashScene.playSound = function (name) {
        if (name === void 0) { name = "click"; }
        if (SplashScene.soundflag) {
            var sound = new egret.Sound();
            sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
                sound.play(0, 1); //播放一次， 0， 0背景音乐 
            }, this);
            sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
                console.log("loaded error!");
            }, this);
            sound.load("resource/assets/sound/" + name + ".mp3");
        }
    };
    SplashScene.showAd = false;
    SplashScene.isVideo = false;
    SplashScene.version = 1;
    SplashScene.gameName = "ad_homie";
    SplashScene.gameChannel = "tt_babichiris";
    SplashScene.channel = "tt";
    SplashScene.entryalready = false;
    SplashScene.loginAlready = false;
    SplashScene.soundflag = false;
    return SplashScene;
}(Scene));
__reflect(SplashScene.prototype, "SplashScene");
//# sourceMappingURL=SplashScene.js.map