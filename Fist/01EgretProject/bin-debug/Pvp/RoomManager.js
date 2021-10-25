var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoomManager = (function () {
    function RoomManager() {
        this.LoadRes = 0;
        this.offline_self = false; //自身掉线
        return;
    } // end function
    RoomManager.getInstance = function () {
        if (RoomManager.instance == null) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    };
    /**负责离开或解散房间,清除本实例 */
    RoomManager.prototype.Destory = function () {
        var _this = this;
        MGOBE.Room.getMyRoom(function (event) {
            if (event.data.roomInfo == undefined) {
                _this.Destory_when_outRoom();
                return;
            }
            if (event.data.roomInfo.owner != RoomManager.playerid) {
                _this.room.leaveRoom({});
            }
            else {
                _this.room.dismissRoom({});
            }
            _this.Destory_when_outRoom();
            return;
        });
    };
    RoomManager.prototype.Destory_when_outRoom = function () {
        this.RemoveRoom();
        RoomManager.instance = null;
        RoomManager.player1id = null;
        RoomManager.player2id = null;
        RoomManager._EntryGameScene = false;
        RoomManager._EntryLoadScene = false;
        return;
    };
    /**注册广播监听*/
    RoomManager.prototype.AddRoom = function () {
        this.room = new MGOBE.Room();
        this.InitRoom();
        MGOBE.Listener.add(this.room);
    };
    /**移除广播监听*/
    RoomManager.prototype.RemoveRoom = function () {
        MGOBE.Listener.remove(this.room);
        this.room.onRecvFrame = null;
        this.room.onStartFrameSync = null;
        this.room.onStopFrameSync = null;
        this.room.onChangePlayerNetworkState = null;
        this.room.onLeaveRoom = null;
        this.room.onDismissRoom = null;
        this.room = null;
        MGOBE.Listener.remove(this.room);
    };
    RoomManager.prototype.InitRoom = function () {
        var _this = this;
        //----------------------------------------------处理广播回调-----------------------------------------------
        this.room.onJoinRoom = function (event) {
            console.log("新玩家加入", event.data.roomInfo.playerList.length, RoomManager._EntryLoadScene);
            if (event.data.roomInfo.playerList.length == 2 && !RoomManager._EntryLoadScene) {
                _this.entryLoadResSence();
            }
        };
        this.room.onStartFrameSync = function (event) { return console.log("广播：开始帧同步"); }; //广播：开始帧同步
        this.room.onStopFrameSync = function (event) { return console.log("广播:停止帧同步"); };
        this.room.onRecvFromClient = function (event) {
            _this.LoadRes += 1;
            if (_this.LoadRes == 2 && RoomManager.player1id == MGOBE.Player.id) {
                _this.startFrame();
            }
        };
        this.OfflineTest();
    };
    //掉线结束游戏时使用
    //玩家直接视为胜利,离开房间,清空房间配置
    RoomManager.prototype.OfflineTest = function () {
        var _this = this;
        this.room.onChangePlayerNetworkState = function (event) {
            if (event.data.networkState == MGOBE.ENUM.NetworkState.COMMON_OFFLINE || event.data.networkState == MGOBE.ENUM.NetworkState.RELAY_OFFLINE) {
                console.log("玩家下线,即将结算", event.data.changePlayerId);
                GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
                egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"));
                _this.playerOutGame(true);
            }
        };
        this.room.onDismissRoom = function (event) {
            if (!RoomManager._EntryLoadScene) {
                return;
            }
            console.log("玩家解散房间");
            GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
            egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"));
            _this.playerOutGame(true);
        };
        this.room.onLeaveRoom = function (event) {
            if (!RoomManager._EntryLoadScene) {
                return;
            }
            GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
            console.log("对方退出房间");
            egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"));
            _this.playerOutGame(true);
        };
    };
    RoomManager.prototype.OfflineTest_self = function () {
        // 查询玩家自己的房间
        MGOBE.Room.getMyRoom(function (event) {
            if (event.code != 0) {
                console.log("自身已掉线");
                RoomManager.getInstance().offline_self = true;
            }
        });
    };
    RoomManager.prototype.playerOutGame = function (isWin) {
        egret.setTimeout(function () {
            if (FightMainRender.instance) {
                SplashScene.instance.clear();
                FightMainRender.getInstance().destroy();
                SceneManager.getInstance().ChangeScene(new FightOver(isWin, SplashScene.instance.type, SplashScene.instance.player == 1 ? SplashScene.instance.playInfo.p1 : SplashScene.instance.playInfo.p2));
            }
        }, this, 2500);
        // RoomManager.getInstance().room.onChangePlayerNetworkState = null;
    };
    //匹配到对手后使用entryLoadResSence进入加载页面
    RoomManager.prototype.entryLoadResSence = function () {
        var _this = this;
        console.log("entryLoadResSence");
        GameModel.currentMode = GameModel.VS_PERSON; //联机游戏
        FightMainRender.getInstance().initlize();
        this.room.getRoomDetail(function (event) {
            if (event.code == 0) {
                _this.room.initRoom(event.data.roomInfo);
                RoomManager.player1id = _this.room.roomInfo.playerList[0].id;
                RoomManager.player2id = _this.room.roomInfo.playerList[1].id;
                console.log("匹配成功。进入游戏页面\n player1id: " + RoomManager.player1id, "player2id: " + RoomManager.player2id, "owner: " + _this.room.roomInfo.owner);
                MatchLayer.instance.destroy();
                var playInfo = {
                    player: RoomManager.playerid == RoomManager.player1id ? 1 : 2,
                    map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_Player()", time: 0, type: Main.PVP_online,
                    p1SkillList: null, p2SkillList: null
                };
                // playInfo.p1 = this.room.roomInfo.playerList[0].customProfile;
                // playInfo.p2 = this.room.roomInfo.playerList[1].customProfile;
                // SceneManager.getInstance().ChangeScene(new LoadResScene(playInfo));
                SceneManager.getInstance().ChangeScene(new ChooseScene(playInfo.player, Main.PVP_online));
                _this.room.startFrameSync({});
                RoomManager._EntryLoadScene = true;
            }
        });
    };
    /**匹配成功会开始帧同步*/
    RoomManager.prototype.startFrame = function () {
        if (this.room) {
            console.log("帧同步");
            this.room.startFrameSync({});
        }
    };
    RoomManager.prototype.matchPlayers = function (matchcode) {
        var _this = this;
        var playerInfo = {
            name: UserInfo.playerInfo.name,
            customPlayerStatus: UserInfo.playerInfo.customPlayerStatus,
            customProfile: UserInfo.playerInfo.customProfile,
            matchAttributes: [{
                    name: "roomcode",
                    value: matchcode,
                }],
        };
        var matchPlayersPara = {
            playerInfo: playerInfo,
            matchCode: RoomConfig.getMatchStr(matchcode),
        };
        // 发起匹配
        this.room.matchPlayers(matchPlayersPara, function (event) {
            if (event.code == 0) {
                console.log("口令匹配成功", RoomManager._EntryLoadScene);
                if (!RoomManager._EntryLoadScene) {
                    _this.entryLoadResSence();
                }
            }
            else {
                _this.CancelmatchPlayers();
                if (MatchLayer.instance) {
                    MatchLayer.instance.destroy();
                }
                if (event.code == 30001) {
                    console.log("口令匹配超时", RoomManager._EntryLoadScene);
                }
                else {
                    console.log("口令匹配失败", RoomManager._EntryLoadScene, event.code);
                }
            }
        });
    };
    //房间匹配
    RoomManager.prototype.matchRoom = function () {
        var _this = this;
        var playerInfo = UserInfo.playerInfo;
        var matchRoomPara = {
            playerInfo: playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "2345",
        };
        this.room.matchRoom(matchRoomPara, function (event) {
            if (event.code != 0) {
                console.log("房间匹配失败,错误代码为:", event.code);
            }
            else {
                console.log("房间匹配成功", event.data.roomInfo.playerList.length, RoomManager._EntryLoadScene);
                if (event.data.roomInfo.playerList.length == matchRoomPara.maxPlayers && !RoomManager._EntryLoadScene) {
                    _this.entryLoadResSence();
                }
            }
        });
    };
    //取消口令匹配
    RoomManager.prototype.CancelmatchPlayers = function () {
        var cancelMatchPara = {
            matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX,
        };
        if (this.room) {
            this.room.cancelPlayerMatch(cancelMatchPara, function (event) { return console.log("取消口令匹配,cancelPlayerMatch"); });
            this.RemoveRoom();
        }
    };
    //取消自由匹配
    RoomManager.prototype.CancelmatchRoom = function () {
        var _this = this;
        if (this.room) {
            MGOBE.Room.getMyRoom(function (event) {
                if (event.data == null) {
                    return;
                }
                if (event.data.roomInfo == undefined) {
                    return;
                }
                if (event.data.roomInfo.owner != RoomManager.playerid) {
                    _this.room.leaveRoom({}, function (event) { return console.log("取消自由匹配,leaveRoom"); });
                    return;
                }
                else {
                    _this.room.dismissRoom({}, function (event) { return console.log("取消自由匹配,dismissRoom"); });
                    _this.RemoveRoom();
                }
            });
        }
    };
    RoomManager._EntryGameScene = false;
    RoomManager._EntryLoadScene = false;
    return RoomManager;
}());
__reflect(RoomManager.prototype, "RoomManager");
//# sourceMappingURL=RoomManager.js.map