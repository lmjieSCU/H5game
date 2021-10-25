class mgobe_conf {  //游戏配置
    //new-version

    public static gameInfo = {
        openId: 'liumengjie1',//玩家的唯一ID,自定义
        gameId: "obg-22j4vddc",// 替换为控制台上的“游戏ID”
        secretKey: '78e8a911e1b1243408403d4f058ce319c04effe9',// 替换为控制台上的“游戏key””
    };


    public static config = {
        url: '22j4vddc.wxlagame.com',// 替换为控制台上的“域名”
        reconnectMaxTimes: 5,
        reconnectInterval: 1000,
        resendInterval: 1000,
        resendTimeout: 10000,
    };

    //old-version

    // public static gameInfo = {
    //     openId: 'liumengjie1',//玩家的唯一ID,自定义
    //     gameId: "obg-cnswhgeu",// 替换为控制台上的“游戏ID”
    //     secretKey: '5f8251d97f885f03c1211c242b82a8b4571fdb6b',// 替换为控制台上的“游戏key””
    // };


    // public static config = {
    //     url: 'cnswhgeu.wxlagame.com',// 替换为控制台上的“域名”
    //     reconnectMaxTimes: 5,
    //     reconnectInterval: 1000,
    //     resendInterval: 1000,
    //     resendTimeout: 10000,
    // };

    // test3
    // public static gameInfo = {
    //     openId: 'liumengjie1',//玩家的唯一ID,自定义
    //     gameId: "obg-n8zlyq59",// 替换为控制台上的“游戏ID”
    //     secretKey: '101c2051f323ed9a3f7f441a24c6e7ecd08bc60e',// 替换为控制台上的“游戏key””
    // };

    // public static config = {
    //     url: 'n8zlyq59.wxlagame.com',// 替换为控制台上的“域名”
    //     reconnectMaxTimes: 5,
    //     reconnectInterval: 1000,
    //     resendInterval: 1000,
    //     resendTimeout: 10000,
    // };


    public static NameLib = [];

    public static NewUser(id: string) {
        if (id in mgobe_conf.NameLib) {
        }

    }


}

