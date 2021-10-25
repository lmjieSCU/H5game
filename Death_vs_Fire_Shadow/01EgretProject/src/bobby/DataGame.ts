
class DataGame {
    public static goldNum: number = 0;        //金币数量
    public static diamondNum: number = 0;     //钻石数量


    public static addGod(param: number) {
        DataGame.goldNum += param;

    }
    public static cutGod(param: number) {
        DataGame.goldNum -= param;
    }

    public static addDiamond(param: number) {
        DataGame.diamondNum += param;

    }
    public static cutDiamond(param: number) {
        DataGame.diamondNum -= param;
    }

    public static saveData(param: number) {
        Util.saveItem("goldNum", DataGame.goldNum);
        Util.saveItem("diamondNum", DataGame.diamondNum);
    }
    public static readData(param: number) {
        DataGame.goldNum = Util.getItem("goldNum");
        DataGame.diamondNum = Util.getItem("diamondNum");
    }

}