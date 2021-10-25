class TestScene extends Scene {
    public static instance: TestScene;

    //
    public constructor() {
        super();
    }
    //
    protected onEnter() {
        // this.addChild(new PauseTip());
        console.log(this.stage.frameRate)

    }




    protected onExit() {
    }

}


