class Model {
    // public static gameModel: GameModel = new GameModel();

    public static levelModel: LevelModel = new LevelModel();

    public static settingModel: SettingModel = new SettingModel();

    public static diamondModel:DiamondModel = new DiamondModel();

    private constructor() {
        return;
    }

    public static init(): void {
        Model.levelModel.loadData();
        Model.settingModel.loadData();
        Model.diamondModel.loadData();
        return;
    }

}
