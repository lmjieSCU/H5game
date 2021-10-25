//匹配到对手后使用getRoom进入GameScene
//使用onStartFrameSync启动Gamescene
//对方掉线时使用onChangePlayerNetworkState结束自身
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
var MatchLayer = (function (_super) {
    __extends(MatchLayer, _super);
    function MatchLayer(matchType) {
        if (matchType === void 0) { matchType = "matchRoom"; }
        var _this = _super.call(this) || this;
        _this._EntryGameScene = false;
        _this._OutGameScene = false;
        _this._StartFrametag = false;
        _this._MatchType = matchType;
        MatchLayer.room = new MGOBE.Room();
        MatchLayer.room.initRoom();
        MatchLayer.initRoomConfig();
        return _this;
    }
    MatchLayer.prototype.onEnter = function () {
        MGOBE.Listener.add(MatchLayer.room);
        MatchLayer.instance = this;
        ModeScene.instance.touchChildren = false;
        var bg = UI.addPic(this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = 30;
        bg.scaleY = 20;
        var circle = UI.addPic(this, "network_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
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
    };
    //匹配到对手后使用getRoom进入GameScene
    MatchLayer.getRoom = function () {
        if (MatchLayer.room) {
            MatchLayer.room.getRoomDetail(function (event) {
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
    };
    MatchLayer.initRoomConfig = function () {
        if (MatchLayer.room) {
            MatchLayer.room.onCancelMatch = function (event) { return console.log("匹配已取消"); };
            MatchLayer.room.onStopFrameSync = function (event) { return console.log("广播:停止帧同步"); };
            // MatchLayer.room.onUpdate = event => console.log("房间信息更新");
            MatchLayer.room.onJoinRoom = function (event) {
                console.log("新玩家加入,当前房间人数为", event.data.roomInfo.playerList.length);
                if (event.data.roomInfo.playerList.length == 2 && !MatchLayer.instance._EntryGameScene) {
                    MatchLayer.getRoom();
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
            MatchLayer.room.onStartFrameSync = function (event) { return console.log("广播：开始帧同步"); }; //广播：开始帧同步
            MatchLayer.OfflineTest();
        }
    };
    //掉线结束游戏时使用
    //玩家直接视为胜利,离开房间,清空房间配置
    //正常结束使用FinishRoom
    MatchLayer.OfflineTest = function () {
        var _this = this;
        MatchLayer.room.onChangePlayerNetworkState = function (event) {
            if (event.data.networkState == MGOBE.ENUM.NetworkState.COMMON_OFFLINE || event.data.networkState == MGOBE.ENUM.NetworkState.RELAY_OFFLINE) {
                if (!MatchLayer.instance._OutGameScene) {
                    console.log("玩家下线", event.data.networkState);
                    // MatchLayer.room.getRoomDetail(event => console.log(event));
                    if (GameScene.instance._bgexittag) {
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
                    }, _this, 1500);
                    MatchLayer.instance._OutGameScene = true;
                }
            }
        };
    };
    //开始帧同步
    MatchLayer.StartFrame = function () {
        if (MatchLayer.room) {
            MatchLayer.room.startFrameSync({}, function (event) { if (event.code == 0) {
                console.log("房主开始帧同步成功,进入gamescene");
            } });
        }
    };
    //口令匹配
    MatchLayer.DomatchPlayers = function () {
        var _this = this;
        var player = UserInfo.playerInfo;
        player["matchAttributes"] = [{
                name: "roomcode",
                value: ModeScene.matchNum,
            }];
        var matchPlayersPara = {
            playerInfo: player,
            matchCode: "",
        };
        MatchLayer.instance.logTxt.text = "DomatchPlayers " + mgobe_conf.gameInfo.openId + "|" + ModeScene.matchNum + "|" + ModeScene.getMatchStr();
        matchPlayersPara.matchCode = ModeScene.getMatchStr(); //匹配规则码
        if (MatchLayer.room) {
            MatchLayer.room.matchPlayers(matchPlayersPara, function (event) {
                if (event.code == 0) {
                    MatchLayer.instance.logTxt.text = "DomatchPlayers 匹配成功";
                    if (!MatchLayer.instance._EntryGameScene) {
                        MatchLayer.getRoom();
                    }
                }
                else {
                    MatchLayer.instance.logTxt.text = "DomatchPlayers " + event.code;
                    MatchLayer.CancelmatchPlayers();
                    if (event.code == 30001) {
                        SceneManager.Instance.pushScene(new TipsLayer("匹配超时"));
                    }
                    else {
                        SceneManager.Instance.pushScene(new TipsLayer("匹配失败"));
                    }
                    egret.setTimeout(function (arg) {
                        ModeScene.instance.touchChildren = true;
                        SceneManager.Instance.popScene();
                    }, _this, 2000);
                }
            });
        }
    };
    //自由匹配
    MatchLayer.DomatchRoom = function () {
        var playerInfo = UserInfo.playerInfo;
        var defaultmatchRoomPara = {
            playerInfo: playerInfo,
            maxPlayers: 2,
            roomType: "1V1",
            customProperties: "1111",
        };
        MatchLayer.instance.logTxt.text = "开始匹配房间DomatchRoom";
        if (MatchLayer.room) {
            MatchLayer.room.matchRoom(defaultmatchRoomPara, function (event) {
                if (event.code == 0) {
                    MatchLayer.instance.logTxt.text = "matchRoom匹配成功";
                    console.log("matchRoom匹配成功");
                    if (event.data.roomInfo.playerList.length == defaultmatchRoomPara.maxPlayers && !MatchLayer.instance._EntryGameScene) {
                        MatchLayer.getRoom();
                    }
                    else {
                        MatchLayer.instance.logTxt.text = "player is not enough,waiting" + event.data.roomInfo.id;
                    }
                }
                else {
                    MatchLayer.instance.logTxt.text = "DomatchRoom error code " + event.code;
                }
            });
        }
    };
    //取消口令匹配
    MatchLayer.CancelmatchPlayers = function () {
        var cancelMatchPara = {
            matchType: MGOBE.ENUM.MatchType.PLAYER_COMPLEX,
        };
        if (MatchLayer.room) {
            MatchLayer.room.cancelPlayerMatch(cancelMatchPara, function (event) { return console.log("cancelPlayerMatch"); });
        }
    };
    //取消自由匹配
    MatchLayer.CancelmatchRoom = function () {
        if (MatchLayer.room) {
            MatchLayer.room.dismissRoom({}, function (event) { return console.log("dismissRoom"); });
        }
    };
    //开始匹配
    MatchLayer.OnMatch = function () {
        switch (MatchLayer.instance._MatchType) {
            case "matchPlayers":
                MatchLayer.DomatchPlayers();
                break;
            case "matchRoom":
                MatchLayer.DomatchRoom();
                break;
        }
    };
    //取消匹配
    MatchLayer.CancelMatch = function () {
        switch (MatchLayer.instance._MatchType) {
            case "matchPlayers":
                MatchLayer.CancelmatchPlayers();
                break;
            case "matchRoom":
                MatchLayer.CancelmatchRoom();
                break;
        }
    };
    MatchLayer.LeaveRoom = function () {
        if (MatchLayer.room) {
            MatchLayer.room.leaveRoom({}, function (event) {
                if (event.code == 0) {
                    console.log("退房成功");
                }
            });
        }
    };
    //正常结束游戏时调用
    //停止帧同步,离开房间,清空房间配置
    MatchLayer.FinishRoom = function () {
        console.log("FinishRoom");
        if (MatchLayer.room) {
            if (player1id == MGOBE.Player.id) {
                MatchLayer.room.stopFrameSync({}, function (event) { console.log("房主停止帧同步"); });
            }
            MatchLayer.LeaveRoom();
            MatchLayer.Destory();
        }
    };
    //清空房间设置
    MatchLayer.Destory = function () {
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
    };
    MatchLayer.prototype.onExit = function () {
    };
    return MatchLayer;
}(Scene));
__reflect(MatchLayer.prototype, "MatchLayer");
//# sourceMappingURL=MatchLayer.js.map