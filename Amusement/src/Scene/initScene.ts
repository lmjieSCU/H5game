class initScene extends Scene{

    public constructor(){
        super();
        return;
    }

    public onEnter(){
        // egret.localStorage.clear();
        SceneManager.I.ChangeScene(new GameEntryScene)
           
    }

    public onExit(){

    }
}