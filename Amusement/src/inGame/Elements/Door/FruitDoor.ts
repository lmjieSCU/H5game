class FruitDoor extends Elements {

    public static pool: BasePool = new BasePool(FruitDoor, 20);

    public constructor() {
        super();
        UI.addPic("downP_png",true,this);
        return;
    }
}
