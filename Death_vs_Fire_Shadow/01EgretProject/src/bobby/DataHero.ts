
class DataHero{  
    //存储有没有解锁0, 没有解锁， 1解锁了,  2上阵了
    public static hero_unlock :Array<number>= [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    //存储看了多少个激励视频
    public static hero_videos :Array<number>= [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    //存储选择了哪个英雄
    public static select_hero_index : number = 0;

    //初始化英雄数据
    public static initHeros(){
        let firstFlag:string = "hero_first_data";
        var score: string = egret.localStorage.getItem(firstFlag);
        Util.saveItem(firstFlag, 1);
       let first: number = Number(score);
        if (first == 0){
            //第一次初始化英雄数据
            for (let i = 0; i < hero_conf.MAX_HEROS; i ++){
                if (hero_conf.data[i][8]== hero_conf.UNLOCK_TYPE_FREE){
                     DataHero.hero_unlock[i]  = 1;
                }
            }
            DataHero.hero_unlock[0] = 2;
            DataHero.saveHeros();
        }else{
            DataHero.readHeros();
        }

    }
    //存储英雄数据
    public static readHeros(){
        for (let i = 0; i < hero_conf.MAX_HEROS; i++) {
             DataHero.hero_unlock[i] = Util.getItem("hero_videos"+ i);
        }
        for (let i = 0; i < hero_conf.MAX_HEROS; i++) {
             DataHero.hero_unlock[i] = Util.getItem("hero_videos"+ i);
        }
    }

    //存储英雄数据
    public static saveHeros(){
         for (let i = 0; i < hero_conf.MAX_HEROS; i++) {
              Util.saveItem("hero_unlock"+ i, DataHero.hero_unlock[i]);
        }
        for (let i = 0; i < hero_conf.MAX_HEROS; i++) {
              Util.saveItem("hero_videos"+ i, DataHero.hero_unlock[i]);
        }
    }

    public static getIndex(name:string):number{
        for (let i = 0; i < hero_conf.MAX_HEROS; i++) {
              if (hero_conf.data[i][1] == name){
                  return i;
              }
        }
        return 0;
    }
    //解锁其中一个英雄
    public static unlockHero(name:string):boolean{
        let index:number = DataHero.getIndex(name);
        let unlockType : number = hero_conf.data[index][8];
        let unlockNumber  : number = hero_conf.data[index][9];
        switch(unlockType){
            case hero_conf.UNLOCK_TYPE_GOLD:
                if (DataGame.goldNum >= unlockNumber){
                    DataGame.cutGod(unlockNumber);
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_DIAMOND:
                if (DataGame.diamondNum >= unlockNumber){
                    DataGame.cutDiamond(unlockNumber);
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_VIDEOS:
                if (DataHero.hero_videos[index] >= unlockNumber){
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
        }
        return false;
    }
    //选择上阵英雄
    public static selectHero(name:string):boolean{
        let index:number = DataHero.getIndex(name);
        if (DataHero.hero_unlock[index] == 0)
            return false;
        DataHero.hero_unlock[index] = 2;
        DataHero.saveHeros();
        return true;
    }

    
}