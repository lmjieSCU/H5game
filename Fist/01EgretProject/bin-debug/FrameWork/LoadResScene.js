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
var LoadResScene = (function (_super) {
    __extends(LoadResScene, _super);
    function LoadResScene(playInfo) {
        var _this = _super.call(this) || this;
        _this.urlRes = null;
        _this._ExitLoadRes = false; //资源已加载完毕
        LoadResScene.Instance = _this;
        _this.playInfo = playInfo;
        return _this;
    }
    LoadResScene.prototype.onEnter = function () {
        var _this = this;
        // let bg: egret.Bitmap = UI.addPic(this, "loadingChunli_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // bg.scaleX = UI.WINSIZE_W/bg.width;
        // bg.scaleY = bg.scaleX;
        var bg = UI.addBg(this, "loadingChunli_png");
        // this.textField = UI.addText(this, "资源加载中...", UI.WINSIZE_W / 2, UI.WINSIZE_H - 120, true, 22, 0xffffff);
        this.urlRes = new Subcontractor();
        var lst = [];
        lst.push("effects");
        lst.push("fightui");
        var hero1 = "role" + (this.playInfo.p1.split("_")[0].split(" ")[1] == "Type2" ? this.playInfo.p1.split("_")[1] : this.playInfo.p1.split("_")[0].split(" ")[1]);
        var hero2 = "role" + (this.playInfo.p2.split("_")[0].split(" ")[1] == "Type2" ? this.playInfo.p2.split("_")[1] : this.playInfo.p2.split("_")[0].split(" ")[1]);
        lst.push(hero1);
        if (hero1 != hero2)
            lst.push(hero2);
        this.urlRes.Initialization(this, lst, function () {
            //加载资源成功后进入下一页
            if (_this.playInfo.type != Main.PVP_online) {
                FightLoading.instace.p1Success = true;
                console.log(FightLoading.instace.p1Success);
            }
            else {
                var d = {
                    type: 'waitSuccess',
                    player: _this.playInfo.player,
                    status: true
                };
                var sendFramePara = { data: d };
                RoomManager.instance.room.sendFrame(sendFramePara);
            }
        }, true);
        this.urlRes.LoadRes();
    };
    LoadResScene.prototype.onExit = function () {
        // LoadResScene.Instance = null;
    };
    return LoadResScene;
}(Scene));
__reflect(LoadResScene.prototype, "LoadResScene");
//# sourceMappingURL=LoadResScene.js.map