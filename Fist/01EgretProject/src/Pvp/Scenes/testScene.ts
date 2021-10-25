
class testScene extends Scene {
    public static instance: testScene;
    private container1:egret.DisplayObjectContainer;
    private object :egret.DisplayObject;


    public constructor() {
        super();
        
    }


    //
    protected onEnter() {
        Main.loadResAlready = true;  //加载资源成功
        this.container1 = new egret.DisplayObjectContainer;
        this.addChild(this.container1);
        this.container1.x = 10;
        this.object = new egret.DisplayObject;
        this.container1.addChild(this.object);
        this.object.x = 10;
        console.log(this.object.localToGlobal(this.object.x).x);
    }



    protected onExit() {

    }

}