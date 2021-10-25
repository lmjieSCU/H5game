var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RoomConfig = (function () {
    //old-version
    // public static matchConf: Array<any> = [
    //     [0, 99, "match-f3kf5d9p"],
    //     [100, 199, "match-om3br4pb"],
    //     [200, 299, "match-nnkazm97"],
    //     [300, 399, "match-pmtpfzq9"],
    //     [400, 499, "match-jsf2nm4h"],
    //     [500, 599, "match-ljswwqf7"],
    //     [600, 699, "match-5cu442el"],
    //     [700, 799, "match-niwb1wxb"],
    //     [800, 899, "match-n3tz076p"],
    //     [900, 999, "match-efub28ml"],
    // ];
    // test3
    // public static matchConf: Array<any> = [
    //     [0, 0, "match-jb09epjq"],
    //     [100, 199, "match-18mqpj96"],
    //     [200, 299, "match-b36iux82"],
    //     [300, 399, "match-igszajf4"],
    //     [400, 499, "match-pjodq01i"],
    //     [500, 599, "match-4fa4m40s"],
    //     [600, 699, "match-g87zr5x4"],
    //     [700, 799, "match-pvwxukc8"],
    //     [800, 899, "match-8o6ia8hq"],
    //     [900, 999, "match-e5it8toy"],
    // ];
    function RoomConfig() {
        return;
    } // end function
    RoomConfig.getMatchStr = function (matchNum) {
        for (var i = 0; i < 10; i++) {
            if (matchNum >= RoomConfig.matchConf[i][0]
                && RoomConfig.matchConf[i][1] >= matchNum) {
                return RoomConfig.matchConf[i][2];
            }
        }
    };
    //仅调用一次
    RoomConfig.createUserID = function () {
        var firstFlag = "userID";
        var score = egret.localStorage.getItem(firstFlag);
        var first = Number(score);
        if (first == 0) {
            var code = Math.floor(UI.numberBetween(1000000000, 9000000000, false));
            UI.saveItem(firstFlag, code);
            mgobe_conf.gameInfo.openId = "U" + code;
        }
        else {
            mgobe_conf.gameInfo.openId = "U" + score;
        }
        UserInfo.playerInfo.name = mgobe_conf.gameInfo.openId;
        RoomConfig.initListen();
    };
    RoomConfig.initListen = function () {
        MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, function (event) {
            if (event.code == 0) {
                RoomManager.playerid = MGOBE.Player.id;
                RoomConfig.ClearRoom_inOffline();
                console.log("MGOBE listen初始化成功", RoomManager.playerid, UI.WINSIZE_W); // w213olow,本机:3p23l552
                return;
            }
            else {
                console.log("MGOBE listen初始化失败", event);
                RoomConfig.initListen();
            }
        });
    };
    RoomConfig.ClearRoom_inOffline = function () {
        var room = new MGOBE.Room();
        MGOBE.Listener.add(room);
        MGOBE.Room.getMyRoom(function (event) {
            if (event.data.roomInfo == undefined) {
                // MatchLayer.instance.logTxt.text = "network is wrong";
                console.log("无需处理房间");
                return;
            }
            if (event.data.roomInfo.owner != RoomManager.playerid) {
                room.leaveRoom({});
                console.log("离线重连,离开上一房间");
            }
            else {
                console.log("离线重连,解散上一房间");
                room.dismissRoom({});
            }
            MGOBE.Listener.remove(room);
            return;
        });
    };
    //new-version
    RoomConfig.matchConf = [
        [0, 99, "match-bkahldq6"],
        [100, 199, "match-qzn0g84e"],
        [200, 299, "match-rjpkk456"],
        [300, 399, "match-cu6g9dlo"],
        [400, 499, "match-2sl5xc8q"],
        [500, 599, "match-2c28jprq"],
        [600, 699, "match-nsypzrlm"],
        [700, 799, "match-eqno96m6"],
        [800, 899, "match-gwmcgz1a"],
        [900, 999, "match-0dssv2t8"],
    ];
    return RoomConfig;
}());
__reflect(RoomConfig.prototype, "RoomConfig");
//# sourceMappingURL=RoomConfig.js.map