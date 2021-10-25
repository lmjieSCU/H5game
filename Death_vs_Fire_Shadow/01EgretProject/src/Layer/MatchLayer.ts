//匹配到对手后使用getRoom进入GameScene
//使用onStartFrameSync启动Gamescene
//对方掉线时使用onChangePlayerNetworkState结束自身


class MatchLayer extends Scene {
    public static instance: MatchLayer;
    public static room: any;
    private _MatchType: string;  //0:自由匹配(matchRoom),1:口令匹配(matchPlayers)
    public logTxt: egret.TextField;
    public _EntryGameScene: boolean = false;
    public _OutGameScene: boolean = false;
    public _StartFrametag: boolean = false;


    public constructor(matchType: string = "matchRoom") {
        super();
        this._MatchType = matchType;
        MatchLayer.room = new MGOBE.Room();
        MatchLayer.room.initRoom();
        MatchLayer.initRoomConfig();
    }


    protected onEnter() {
        MGOBE.Listener.add(MatchLayer.room);
        MatchLayer.instance = this;
        ModeScene.instance.touchChildren = false;
        let bg: egret.Bitmap = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = 30;
        bg.scaleY = 20;
        let circle = UI.addPic(this, "network_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        circle.scaleX = 2;
        circle.scaleY = 2;
        egret.Tween.get(circle, { loop: true }).
            to({ rotation: 360 }, 2000, egret.Ease.sineIn);
        // UI.addClickAction(this, circle, function (arg) {
        //     MatchLayer.getRoom();
        // });
        this.logTxt = UI.addText(this, "init success", UI.WINSIZE_W / 2 - 300, 70);

        //
        UI.addBtn(this, "assignment_button_back_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 200, true, function (arg) {
            ModeScene.instance.touchChildren = true;
            MatchLayer.CancelMatch();
            SceneManager.Instance.popScene();
        });
        MatchLayer.OnMatch();
    }


    //匹配到对手后使用getRoom进入GameScene
    public static getRoom() {
        if (MatchLayer.room) {
            MatchLayer.room.getRoomDetail(event => {
                if (event.code == 0) {
                    MatchLayer.room.initRoom(event.data.roomInfo);
                    player1id = MatchLayer.room.roomInfo.playerList[0].id;
                    player2id = MatchLayer.room.roomInfo.playerList[1].id;
                    console.log("getRoom(): player1id: " + player1id, "player2id: " + player2id, "owner: " + MatchLayer.room.roomInfo.owner);
                    new FromServer();
                    GameMode.currentMode = GameMode.SINGLE_VS_PEOPLE;
                    SceneManager.Instance.changeScene(new FightloadScene(0));
                    MatchLayer.instance._EntryGameScene = true;
                }
            });
        }
    }

    private static initRoomConfig() {
        if (MatchLayer.room) {
            MatchLayer.room.onCancelMatch = (event) => console.log("匹配已取消");
            MatchLayer.room.onStopFrameSync = event => console.log("广播:停止帧同步");
            // MatchLayer.room.onUpdate = event => console.log("房间信息更新");
            MatchLayer.room.onJoinRoom = event => {         	// 广播：房间有玩家加入
                console.log("新玩家加入,当前房间人数为", event.data.roomInfo.playerList.length);
                if (event.data.roomInfo.playerList.length == 2 && !MatchLayer.instance._EntryGameScene) {
                    MatchLayer.getRoom()
                }
            };
            // MatchLayer.room.onStartFrameSync = event => {           //定义开始帧同步时,启动游戏
            //     if (!MatchLayer.instance._StartFrametag) {
            //         console.log("广播：开始帧同步");
            //         GameConfig.GAME_SIZE = new egret.Point(UI.WINSIZE_W, UI.WINSIZE_H);
            //         GameScene.instance.doWork();
            //         if (GameScene.instance._bgexittag) {
            //             GameScene.instance.removeChild(GameScene.instance._bg);
            //             GameScene.instance.removeChild(GameScene.instance._background);
            //             GameScene.instance._bgexittag = false;
            //         }
            //         MatchLayer.instance._StartFrametag = true;
            //     }
            // };
            // MatchLayer.room.onStartFrameSync = event => { MatchLayer.instance._StartFrametag = true; console.log("广播：开始帧同步") };           //广播：开始帧同步
            MatchLayer.room.onStartFrameSync = event => console.log("广播：开始帧同步");           //广播：开始帧同步
            MatchLayer.OfflineTest();
        }
    }

    //掉线结束游戏时使用
    //玩家直接视为胜利,离开房间,清空房间配置
    //正常结束使用FinishRoom
    public static OfflineTest() {
        MatchLayer.room.onChangePlayerNetworkState = event => {
            if (event.data.networkState == MGOBE.ENUM.NetworkState.COMMON_OFFLINE || event.data.networkState == MGOBE.ENUM.NetworkState.RELAY_OFFLINE) {
                if (!MatchLayer.instance._OutGameScene) {
                    console.log("玩家下线", event.data.networkState);
                    // MatchLayer.room.getRoomDetail(event => console.log(event));
                    if (GameScene.instance._bgexittag) {        //游戏未开始背景未撤去
                        GameScene.instance.removeChild(GameScene.instance._bg);
                        GameScene.instance.removeChild(GameScene.instance._background);
                        GameScene.instance._bgexittag = false;
                    }
                    SceneManager.Instance.pushScene(new TipsLayer("对方已退出,即将返回主页面"));
                    MatchLayer.LeaveRoom();
                    egret.setTimeout(function (arg) {
                        GameCtrl.I.destory();
                        MatchLayer.Destory();
                        SceneManager.Instance.changeScene(new FightResultSuccess());
                    }, this, 1500);
                    MatchLayer.instance._OutGameScene = true;
                }
            }
        }
    }

    //开始帧同步
    public static StartFrame() {
        if (MatchLayer.room) {
            MatchLayer.room.startFrameSync({}, event => { if (event.code == 0) { console.log("房主开始帧同步成功,进入gamescene") } });
        }
    }

    //口令匹配
    private static DomatchPlayers() {
        let player = UserInfo.playerInfo;
        player["matchAttributes"] = [{          //匹配属性
            name: "roomcode",
            value: ModeScene.matchNum,
        }];
        let matchPlayersPara = {
            playerInfo: player,
            matchCode: "",
        }
        MatchLayer.instance.logTxt.text = "DomatchPlayers " + mgobe_conf.gameInfo.openId + "|" + ModeScene.matchNum + "|" + ModeScene.getMatchStr();
        matchPlayersPara.matchCode = ModeScene.getMatchStr();     //匹配规则码
        if (MatchLayer.room) {
            MatchLayer.room.matchPlayers(matchPlayersPara, event => {
                if (event.code == 0) {
                    MatchLayer.instance.logTxt.text = "DomatchPlayers 匹配成功";
                    if (!MatchLayer.instance._EntryGameScene) {
                        MatchLayer.getRoom();
                    }
                } else {
                    MatchLayer.instance.logTxt.text = "DomatchPlayers " + event.code;
                    MatchLayer.CancelmatchPlayers();
                    if (event.code == 30001) {
                        SceneManager.Instance.pushScene(new TipsLayer("匹配超时"));
                    } else {
                        SceneManager.Instance.pushScene(new TipsLayer("匹配失败"));
                    }
                    egret.setTimeout(function (arg) {
                        ModeScene.instance.touchChildren = true;
                        SceneManager.Instance.popScene();
                    }, this, 2000);
                }
            });
        }
    }

    //自由匹配
    private static DomatchRoom() {
        let playerInfo = UserInfo.playerInfo;

        var defaultmatchRoomPara = {
            playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "1111",
        };
        MatchLayer.instance.logTxt.text = "开始匹配房间DomatchRoom";
        if (MatchLayer.room) {
            MatchLayer.room.matchRoom(defaultmatchRoomPara, event => {
                if (event.code == 0) {
                    MatchLayer.instance.logTxt.text = "matchRoom匹配成功";
                    console.log("matchRoom匹配成功");
                    if (event.data.roomInfo.playerList.length == defaultmatchRoomPara.maxPlayers && !MatchLayer.instance._EntryGameScene) {
                        MatchLayer.getRoom();
                    }
                    else {
                        MatchLayer.instance.logTxt.text = "player is not enough,waiting" + event.data.roomInfo.id;
                    }
                } else {
                    MatchLayer.instance.logTxt.text = "DomatchRoom error code " + event.code;
                }
            });
        }
    }

    //取消口令匹配
    private static CancelmatchPlayers() {
        let cancelMatchPara = {
            matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX,
        };
        if (MatchLayer.room) {
            MatchLayer.room.cancelPlayerMatch(cancelMatchPara, event => console.log("cancelPlayerMatch"));
        }
    }

    //取消自由匹配
    private static CancelmatchRoom() {
        if (MatchLayer.room) {
            MatchLayer.room.dismissRoom({}, event => console.log("dismissRoom"));
        }
    }

    //开始匹配
    private static OnMatch() {
        switch (MatchLayer.instance._MatchType) {
            case "matchPlayers":
                MatchLayer.DomatchPlayers();
                break;
            case "matchRoom":
                MatchLayer.DomatchRoom();
                break;
        }
    }

    //取消匹配
    private static CancelMatch() {
        switch (MatchLayer.instance._MatchType) {
            case "matchPlayers":
                MatchLayer.CancelmatchPlayers();
                break;
            case "matchRoom":
                MatchLayer.CancelmatchRoom();
                break;
        }
    }


    public static LeaveRoom() {
        if (MatchLayer.room) {
            MatchLayer.room.leaveRoom({}, event => {
                if (event.code == 0) {
                    console.log("退房成功");
                }
            });
        }
    }


    //正常结束游戏时调用
    //停止帧同步,离开房间,清空房间配置
    public static FinishRoom() {
        console.log("FinishRoom");
        if (MatchLayer.room) {
            if (player1id == MGOBE.Player.id) {//P1停止同步
                MatchLayer.room.stopFrameSync({}, event => { console.log("房主停止帧同步") });
            }
            MatchLayer.LeaveRoom();
            MatchLayer.Destory();
        }
    }

    //清空房间设置
    public static Destory() {
        if (MatchLayer.room) {
            MatchLayer.room.onRecvFrame = null;
            MatchLayer.room.onStartFrameSync = null;
            MatchLayer.room.onStopFrameSync = null;
            MatchLayer.room.onJoinRoom = null;
            MatchLayer.room.onChangePlayerNetworkState = null;
            MatchLayer.instance._OutGameScene = false;
            MatchLayer.instance._StartFrametag = false;
            MatchLayer.instance._EntryGameScene = false;
            MatchLayer.room = null;
            MGOBE.Listener.remove(MatchLayer.room);
            FromServer.I.destroy();
        }
    }

    protected onExit() {
    }
}