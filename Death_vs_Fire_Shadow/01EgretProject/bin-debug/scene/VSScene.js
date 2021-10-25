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
var player1id = null; //
var player2id = null;
var VSScene = (function (_super) {
    __extends(VSScene, _super);
    function VSScene() {
        var _this = _super.call(this) || this;
        _this.secondFlag = 0;
        _this._frameIndex = 1;
        _this.Listener = MGOBE.Listener;
        return _this;
    }
    VSScene.prototype.onEnter = function () {
        var _this = this;
        VSScene.instance = this;
        var ss = UI.addPic(this, "vein_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setImageColor(ss, 100000000);
        ss.scaleX = 20;
        ss.scaleY = 20;
        MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, function (event) {
            if (event.code === 0) {
                console.log("hello success");
                _this.room = new MGOBE.Room(); //创建房间、加房、匹配等接口调用直接利用 room 实例即可
                MGOBE.Listener.add(_this.room); //注册广播监听
                egret.setTimeout(function (arg) { VSScene.instance.testRoom(); }, _this, 1000);
            }
        });
        this.logTxt = UI.addText(this, "log", 30, 30);
    };
    VSScene.entryNext = function () {
        var s1 = new GameScene();
        SceneManager.Instance.changeScene(s1);
    };
    VSScene.prototype.testRoom = function () {
        var _this = this;
        //--------房间管理-------------
        var create = UI.addText(this, "Create", 0, 0);
        UI.addClickAction(this, create, VSScene.instance.createRoom);
        //
        var matchPlayers = UI.addText(this, "matchPlayers", UI.WINSIZE_W / 3, 0);
        UI.addClickAction(this, matchPlayers, VSScene.instance.matchPlayers);
        //
        var matchRoom = UI.addText(this, "matchRoom", 0, UI.WINSIZE_H / 2);
        UI.addClickAction(this, matchRoom, VSScene.instance.matchRoom);
        //
        var dismissRoom = UI.addText(this, "dismissRoom", 0, UI.WINSIZE_H * 0.8);
        UI.addClickAction(this, dismissRoom, VSScene.instance.dismissRoom);
        //
        var leaveRoom = UI.addText(this, "leaveRoom", 0, UI.WINSIZE_H / 4);
        UI.addClickAction(this, leaveRoom, VSScene.instance.leaveRoom);
        var getroomlist = UI.addText(this, "getroomlist", UI.WINSIZE_W / 3, UI.WINSIZE_H * 3 / 4);
        UI.addClickAction(this, getroomlist, VSScene.instance.getroomlist);
        //
        var requestFrame2 = UI.addText(this, "测试进入本地AI战斗!!!!", UI.WINSIZE_W / 3, UI.WINSIZE_H * 0.8);
        UI.addClickAction(this, requestFrame2, VSScene.instance.localFight);
        //
        //----------------------------------------------处理广播回调-----------------------------------------------
        this.room.onJoinRoom = function (event) { return console.log("新玩家加入", event.data.joinPlayerId); }; // 广播：房间有玩家加入
        this.room.onLeaveRoom = function (event) { return console.log("玩家退出", event.data.leavePlayerId); }; // 广播：房间有玩家退出
        this.room.onDismissRoom = function (event) { return console.log("房间被解散"); }; // 广播：房间被解散
        this.room.onUpdate = function (event) { return console.log("房间信息更新", VSScene.instance.room.roomInfo, VSScene.instance.room.networkState); };
        this.room.onChangePlayerNetworkState = function (event) { return console.log(event); };
        this.room.onStartFrameSync = function (event) {
            _this.logTxt.text = "start Frame";
            console.log("开始帧同步"); // 广播：开始帧同步
            player1id = _this.room.roomInfo.owner;
            player2id = event.data.roomInfo.playerList[0].id == player1id ? event.data.roomInfo.playerList[1].id : event.data.roomInfo.playerList[0].id;
            new FromServer();
            VSScene.entryNext(); //进入gamescene
        };
    };
    VSScene.prototype.localFight = function () {
        SceneManager.Instance.changeScene(new GameScene);
    };
    VSScene.prototype.onRecvFrame = function () {
        this.room.onRecvFrame = function (event) {
            if (event.data.frame.items.length > 0) {
                console.log(event.data);
            }
        };
    };
    VSScene.prototype.createRoom = function () {
        var playerInfo = {
            name: "Tom",
            customPlayerStatus: 1,
            customProfile: "https://xxx.com/icon.png",
        };
        var createRoomPara = {
            roomName: "hello test vsserver",
            maxPlayers: 2,
            roomType: "1V1",
            isPrivate: false,
            customProperties: "2345",
            playerInfo: playerInfo,
        };
        VSScene.instance.room.createRoom(createRoomPara, function (event) { return console.log("createroom"); }); //创建房间
        var startFrameSync = UI.addText(VSScene.instance, "startFrameSync", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2);
        UI.addClickAction(VSScene.instance, startFrameSync, VSScene.instance.startFrameSync);
    };
    VSScene.prototype.getMyRoom = function () {
        MGOBE.Room.getMyRoom(function (event) {
            if (event.code === 0) {
                console.log("玩家在房间内", event.data.roomInfo);
                VSScene.instance.room = new MGOBE.Room(event.data.roomInfo);
            }
        });
    };
    VSScene.prototype.joinRoom = function () {
        var playerInfo = {
            name: "Tom2",
            customPlayerStatus: 1,
            customProfile: "https://xxx.com/icon.png",
        };
        var joinRoomPara = {
            playerInfo: playerInfo,
        };
        var _id = VSScene.instance.room.roomInfo.id;
        VSScene.instance.room.initRoom({ id: _id });
        VSScene.instance.room.joinRoom(joinRoomPara, function (event) { return console.log(event); });
    };
    VSScene.prototype.leaveRoom = function () {
        VSScene.instance.room.leaveRoom({}, function (event) {
            if (event.code === 0) {
                console.log("退房成功", VSScene.instance.room.roomInfo);
                VSScene.instance.room.initRoom(); //// 可以使用 initRoom 清除 roomInfo
            }
        });
    };
    VSScene.prototype.dismissRoom = function () {
        VSScene.instance.room.dismissRoom({}, function (event) {
            if (event.code === 0) {
                console.log("解散成功");
            }
        });
    };
    VSScene.prototype.startFrameSync = function () {
        MGOBE.Room.getMyRoom(function (event) {
            if (event.data.roomInfo.playerList.length < 2) {
                console.log("number is not enough,startFrameSync defail");
                return;
            }
            VSScene.instance.room.startFrameSync({}, function (event) {
                if (event.code == 0) {
                    console.log("开始帧同步成功,进入gamescene");
                }
            });
        });
    };
    VSScene.prototype.matchPlayers = function () {
        var playerInfo = {
            name: "Tom",
            customPlayerStatus: 1,
            customProfile: "https://xxx.com/icon.png",
            matchAttributes: [{
                    name: "roomcode",
                    value: 100,
                }]
        };
        var matchPlayersPara = {
            playerInfo: playerInfo,
            matchCode: "match-om3br4pb",
        };
        // 发起匹配
        VSScene.instance.room.matchPlayers(matchPlayersPara, function (event) {
            if (event.code == 0) {
                console.log("请求成功");
                var startFrameSync = UI.addText(VSScene.instance, "startFrameSync", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2);
                UI.addClickAction(VSScene.instance, startFrameSync, VSScene.instance.startFrameSync);
            }
            else {
                console.log("请求失败", event.code);
            }
        });
        // 监听匹配结果
        VSScene.instance.room.onMatch = function (event) {
            if (event.data.errCode === MGOBE.ErrCode.EC_OK) {
                console.log("组队匹配成功");
                VSScene.instance.room.initRoom(event.data.roomInfo);
                return;
            }
        };
    };
    VSScene.prototype.getroomlist = function () {
        var getRoomListPara = {
            pageNo: 1,
            pageSize: 10,
        };
        // 不要使用 room.getRoomList
        // 直接使用 Room 对象
        MGOBE.Room.getRoomList(getRoomListPara, function (event) { return console.log(event); });
    };
    VSScene.prototype.matchRoom = function () {
        var playerInfo = {
            name: "Tom2",
            customPlayerStatus: 1,
            customProfile: "https://xxx.com/icon.png",
        };
        var matchRoomPara = {
            playerInfo: playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "2345",
        };
        VSScene.instance.room.matchRoom(matchRoomPara, function (event) {
            if (event.code != 0) {
                console.log("匹配失败", event.code);
            }
            else {
                console.log("匹配成功");
            }
        });
    };
    VSScene.prototype.stopFrameSync = function () {
        VSScene.instance.room.stopFrameSync({}, function (event) { return console.log(event); });
    };
    VSScene.prototype.onExit = function () {
    };
    return VSScene;
}(Scene));
__reflect(VSScene.prototype, "VSScene");
//# sourceMappingURL=VSScene.js.map