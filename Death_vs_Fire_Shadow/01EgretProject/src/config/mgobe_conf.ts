class mgobe_conf {  //游戏配置
    public static gameInfo = {
        openId: 'liumengjie1',//玩家的唯一ID,自定义
        gameId: "obg-cnswhgeu",// 替换为控制台上的“游戏ID”
        secretKey: '5f8251d97f885f03c1211c242b82a8b4571fdb6b',// 替换为控制台上的“游戏key””
    };

    public static config = {
        url: 'cnswhgeu.wxlagame.com',// 替换为控制台上的“域名”
        reconnectMaxTimes: 5,
        reconnectInterval: 1000,
        resendInterval: 1000,
        resendTimeout: 10000,
    };

    public static NameLib=[];

    public static NewUser(id:string){
        if(id in mgobe_conf.NameLib){
        }

    }
    

}
