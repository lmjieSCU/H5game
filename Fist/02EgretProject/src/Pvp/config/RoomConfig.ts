class RoomConfig {
    //new-version
    public static matchConf: Array<any> = [
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


    private constructor() {
        return;
    }// end function

    public static getMatchStr(matchNum: number): string {
        for (let i = 0; i < 10; i++) {
            if (matchNum >= RoomConfig.matchConf[i][0]
                && RoomConfig.matchConf[i][1] >= matchNum) {
                return RoomConfig.matchConf[i][2];
            }
        }
    }

    //仅调用一次
    public static createUserID() {
        let firstFlag: string = "userID";
        var score: string = egret.localStorage.getItem(firstFlag);
        let first: number = Number(score);
        if (first == 0) {
            let code: number = Math.floor(UI.numberBetween(1000000000, 9000000000, false));
            UI.saveItem(firstFlag, code);
            mgobe_conf.gameInfo.openId = "U" + code;
        }
        else {
            mgobe_conf.gameInfo.openId = "U" + score;
        }
        UserInfo.playerInfo.name = mgobe_conf.gameInfo.openId;
        RoomConfig.initListen();
    }

    public static initListen() {
        MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, event => {	//初始化Listener对象,只需初始化一次,不会多次初始化
            if (event.code == 0) {
                RoomManager.playerid = MGOBE.Player.id;
                RoomConfig.ClearRoom_inOffline();
                console.log("MGOBE listen初始化成功", RoomManager.playerid, UI.WINSIZE_W);// w213olow,本机:3p23l552
                return;
            } else {
                console.log("MGOBE listen初始化失败", event);
                RoomConfig.initListen();
            }
        });
    }

    public static ClearRoom_inOffline() {
        let room: MGOBE.Room = new MGOBE.Room();
        MGOBE.Listener.add(room);
        MGOBE.Room.getMyRoom(event => {
            if (event.data.roomInfo == undefined) {
                // MatchLayer.instance.logTxt.text = "network is wrong";
                console.log("无需处理房间")
                return;
            }
            if (event.data.roomInfo.owner != RoomManager.playerid) {
                room.leaveRoom({});
                console.log("离线重连,离开上一房间")
            } else {
                console.log("离线重连,解散上一房间")
                room.dismissRoom({});
            }
            MGOBE.Listener.remove(room);
            return;
        });
    }

}