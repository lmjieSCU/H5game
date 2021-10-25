
class DataAssis{  
    //存储有没有解锁0, 没有解锁， 1解锁了,  2上阵了
    public static assis_unlock :Array<number>= [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0
    ];
    //存储看了多少个激励视频
    public static assis_videos :Array<number>= [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0
    ];
    //存储选择了哪个英雄
    public static select_assis_index : number = 0;

    //初始化英雄数据
    public static initAssist(){
        let firstFlag:string = "assis_first_data";
        var score: string = egret.localStorage.getItem(firstFlag);
        Util.saveItem(firstFlag, 1);
       let first: number = Number(score);
        if (first == 0){
            //第一次初始化英雄数据
            for (let i = 0; i < assis_conf.MAX_ASSIS; i ++){
                if (assis_conf.data[i][2]== hero_conf.UNLOCK_TYPE_FREE){
                     DataAssis.assis_unlock[i]  = 1;
                }
            }
            DataAssis.assis_unlock[0] = 2;
            DataAssis.saveAssis();
        }else{
            DataAssis.readAssis();
        }

    }
    //存储英雄数据
    public static readAssis(){
        for (let i = 0; i < assis_conf.MAX_ASSIS; i++) {
             DataAssis.assis_unlock[i] = Util.getItem("assis_videos"+ i);
        }
        for (let i = 0; i < assis_conf.MAX_ASSIS; i++) {
             DataAssis.assis_unlock[i] = Util.getItem("assis_videos"+ i);
        }
    }

    //存储英雄数据
    public static saveAssis(){
         for (let i = 0; i < assis_conf.MAX_ASSIS; i++) {
              Util.saveItem("assis_unlock"+ i, DataAssis.assis_unlock[i]);
        }
        for (let i = 0; i < assis_conf.MAX_ASSIS; i++) {
              Util.saveItem("assis_videos"+ i, DataAssis.assis_unlock[i]);
        }
    }

    public static getIndex(name:string):number{
        for (let i = 0; i < assis_conf.MAX_ASSIS; i++) {
              if (assis_conf.data[i][1] == name){
                  return i;
              }
        }
        return 0;
    }
    //解锁其中一个英雄
    public static unlockAssis(name:string):boolean{
        let index:number = DataAssis.getIndex(name);
        let unlockType : number = assis_conf.data[index][2];
        let unlockNumber  : number = assis_conf.data[index][3];
        switch(unlockType){
            case hero_conf.UNLOCK_TYPE_GOLD:
                if (DataGame.goldNum >= unlockNumber){
                    DataGame.cutGod(unlockNumber);
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_DIAMOND:
                if (DataGame.diamondNum >= unlockNumber){
                    DataGame.cutDiamond(unlockNumber);
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_VIDEOS:
                if (DataAssis.assis_videos[index] >= unlockNumber){
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
        }
        return false;
    }
    //选择上阵英雄
    public static selectAssis(name:string):boolean{
        let index:number = DataAssis.getIndex(name);
        if (DataAssis.assis_unlock[index] == 0)
            return false;
        DataAssis.assis_unlock[index] = 2;
        DataAssis.saveAssis();
        return true;
    }

    
}