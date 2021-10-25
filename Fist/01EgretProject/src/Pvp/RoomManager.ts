class RoomManager {
    public static instance: RoomManager;
    public static player1id: string;
    public static player2id: string;
    public static playerid: string;
    public static _EntryGameScene: boolean = false;
    public static _EntryLoadScene: boolean = false;
    public room: MGOBE.Room;
    public LoadRes: number = 0;
    public offline_self: boolean = false;//自身掉线



    private constructor() {
        return;
    }// end function

    public static getInstance(): RoomManager {
        if (RoomManager.instance == null) {
            RoomManager.instance = new RoomManager();
        }
        return RoomManager.instance;
    }


    /**负责离开或解散房间,清除本实例 */
    public Destory() {
        MGOBE.Room.getMyRoom(event => {
            if (event.data.roomInfo == undefined) {
                this.Destory_when_outRoom();
                return;
            }
            if (event.data.roomInfo.owner != RoomManager.playerid) {
                this.room.leaveRoom({});
            } else {
                this.room.dismissRoom({});
            }
            this.Destory_when_outRoom();
            return;
        });
    }

    public Destory_when_outRoom() {
        this.RemoveRoom();
        RoomManager.instance = null;
        RoomManager.player1id = null;
        RoomManager.player2id = null;
        RoomManager._EntryGameScene = false;
        RoomManager._EntryLoadScene = false;
        return;
    }

    /**注册广播监听*/
    public AddRoom() {
        this.room = new MGOBE.Room();
        this.InitRoom();
        MGOBE.Listener.add(this.room);
    }

    /**移除广播监听*/
    public RemoveRoom() {
        MGOBE.Listener.remove(this.room);
        this.room.onRecvFrame = null;
        this.room.onStartFrameSync = null;
        this.room.onStopFrameSync = null;
        this.room.onChangePlayerNetworkState = null;
        this.room.onLeaveRoom = null;
        this.room.onDismissRoom = null;
        this.room = null;
        MGOBE.Listener.remove(this.room);
    }


    public InitRoom() {
        //----------------------------------------------处理广播回调-----------------------------------------------
        this.room.onJoinRoom = event => {         	// 广播：房间有玩家加入
            console.log("新玩家加入", event.data.roomInfo.playerList.length, RoomManager._EntryLoadScene);
            if (event.data.roomInfo.playerList.length == 2 && !RoomManager._EntryLoadScene) {
                this.entryLoadResSence()
            }
        };
        this.room.onStartFrameSync = event => console.log("广播：开始帧同步");           //广播：开始帧同步
        this.room.onStopFrameSync = event => console.log("广播:停止帧同步");
        this.room.onRecvFromClient = event => {
            this.LoadRes += 1;
            if (this.LoadRes == 2 && RoomManager.player1id == MGOBE.Player.id) {
                this.startFrame();
            }
        }
        this.OfflineTest();
    }

    //掉线结束游戏时使用
    //玩家直接视为胜利,离开房间,清空房间配置
    public OfflineTest() {
        this.room.onChangePlayerNetworkState = event => {
            if (event.data.networkState == MGOBE.ENUM.NetworkState.COMMON_OFFLINE || event.data.networkState == MGOBE.ENUM.NetworkState.RELAY_OFFLINE) {
                console.log("玩家下线,即将结算", event.data.changePlayerId);
                GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
                egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"))
                this.playerOutGame(true);
            }
        }
        this.room.onDismissRoom = event => {
            if (!RoomManager._EntryLoadScene) {
                return;
            }
            console.log("玩家解散房间");
            GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
            egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"))
            this.playerOutGame(true);
        }
        this.room.onLeaveRoom = event => {
            if (!RoomManager._EntryLoadScene) {
                return;
            }
            GameRender.I.Remove(FightMainRender.getInstance(), FightMainRender.getInstance().Netrender);
            console.log("对方退出房间")
            egret.MainContext.instance.stage.addChild(new TipsLayer("对方下线,即将结算"))
            this.playerOutGame(true);
        }
    }

    public OfflineTest_self() {
        // 查询玩家自己的房间
        MGOBE.Room.getMyRoom(event => {
            if (event.code != 0) {
                console.log("自身已掉线")
                RoomManager.getInstance().offline_self = true;
            }
        });
    }


    public playerOutGame(isWin: boolean) {
        egret.setTimeout(function () {
            if (FightMainRender.instance) {
                SplashScene.instance.clear();
                FightMainRender.getInstance().destroy();
                SceneManager.getInstance().ChangeScene(new FightOver(isWin, SplashScene.instance.type, SplashScene.instance.player == 1?SplashScene.instance.playInfo.p1:SplashScene.instance.playInfo.p2));
            }
        }, this, 2500);
        // RoomManager.getInstance().room.onChangePlayerNetworkState = null;
    }

    //匹配到对手后使用entryLoadResSence进入加载页面
    public entryLoadResSence() {
        console.log("entryLoadResSence")
        GameModel.currentMode = GameModel.VS_PERSON;//联机游戏
        FightMainRender.getInstance().initlize();
        this.room.getRoomDetail(event => {
            if (event.code == 0) {
                this.room.initRoom(event.data.roomInfo);
                RoomManager.player1id = this.room.roomInfo.playerList[0].id;
                RoomManager.player2id = this.room.roomInfo.playerList[1].id;
                console.log("匹配成功。进入游戏页面\n player1id: " + RoomManager.player1id, "player2id: " + RoomManager.player2id, "owner: " + this.room.roomInfo.owner);
                MatchLayer.instance.destroy();
                let playInfo: PlayInfo = {
                    player: RoomManager.playerid == RoomManager.player1id ? 1 : 2,
                    map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_Player()", time: 0, type: Main.PVP_online,
                    p1SkillList: null, p2SkillList: null
                }
                // playInfo.p1 = this.room.roomInfo.playerList[0].customProfile;
                // playInfo.p2 = this.room.roomInfo.playerList[1].customProfile;
                // SceneManager.getInstance().ChangeScene(new LoadResScene(playInfo));
                SceneManager.getInstance().ChangeScene(new ChooseScene(playInfo.player, Main.PVP_online));
                this.room.startFrameSync({});
                RoomManager._EntryLoadScene = true;
            }
        });
    }


    /**匹配成功会开始帧同步*/
    public startFrame() {
        if (this.room) {
            console.log("帧同步");
            this.room.startFrameSync({});
        }
    }

    public matchPlayers(matchcode) {
        const playerInfo = {
            name: UserInfo.playerInfo.name,
            customPlayerStatus: UserInfo.playerInfo.customPlayerStatus,
            customProfile: UserInfo.playerInfo.customProfile,
            matchAttributes: [{
                name: "roomcode",
                value: matchcode,
            }],
        };
        const matchPlayersPara = {
            playerInfo,
            matchCode: RoomConfig.getMatchStr(matchcode),
        };

        // 发起匹配
        this.room.matchPlayers(matchPlayersPara, event => {
            if (event.code == 0) {
                console.log("口令匹配成功", RoomManager._EntryLoadScene)
                if (!RoomManager._EntryLoadScene) {
                    this.entryLoadResSence();
                }
            } else {
                this.CancelmatchPlayers();
                if (MatchLayer.instance) {
                    MatchLayer.instance.destroy();
                }
                if (event.code == 30001) {
                    console.log("口令匹配超时", RoomManager._EntryLoadScene)
                } else {
                    console.log("口令匹配失败", RoomManager._EntryLoadScene, event.code)
                }
            }
        });
    }



    //房间匹配
    public matchRoom() {
        let playerInfo = UserInfo.playerInfo;
        const matchRoomPara = {
            playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "2345",
        };
        this.room.matchRoom(matchRoomPara, event => {
            if (event.code != 0) {
                console.log("房间匹配失败,错误代码为:", event.code)
            } else {
                console.log("房间匹配成功", event.data.roomInfo.playerList.length, RoomManager._EntryLoadScene)
                if (event.data.roomInfo.playerList.length == matchRoomPara.maxPlayers && !RoomManager._EntryLoadScene) {
                    this.entryLoadResSence();
                }
            }
        });
    }

    //取消口令匹配
    public CancelmatchPlayers() {
        let cancelMatchPara = {
            matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX,
        };
        if (this.room) {
            this.room.cancelPlayerMatch(cancelMatchPara, event => console.log("取消口令匹配,cancelPlayerMatch"));
            this.RemoveRoom();
        }
    }

    //取消自由匹配
    public CancelmatchRoom() {
        if (this.room) {
            MGOBE.Room.getMyRoom(event => {
                if (event.data == null) {
                    return;
                }
                if (event.data.roomInfo == undefined) {
                    return;
                }
                if (event.data.roomInfo.owner != RoomManager.playerid) {
                    this.room.leaveRoom({}, event => console.log("取消自由匹配,leaveRoom"));
                    return;
                } else {
                    this.room.dismissRoom({}, event => console.log("取消自由匹配,dismissRoom"));
                    this.RemoveRoom();
                }
            });
        }
    }

}