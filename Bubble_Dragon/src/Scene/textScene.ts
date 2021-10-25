class textScene extends Scene {
    constructor() {
        super();
        return;
    }

    public onEnter() {
        // egret.localStorage.clear()
        // egret.localStorage.setItem("diamondnum","10000");
        SceneManager.getInstance().ChangeScene(new initScene); 



        // let s = new BombExpEffect();
        // s.x = UI.WINSIZE_W / 2;
        // s.y = UI.WINSIZE_H / 2;
        // this.addChild(s)
        // let s = UI.addPic("effect.bombexp_0", true, this, UI.WINSIZE_W / 4, UI.WINSIZE_H / 4);
        // console.log(s.width, s.height)
        // s = UI.addPic("effect.bombexp_1", true, this, UI.WINSIZE_W * 2 / 4, UI.WINSIZE_H / 4);
        // console.log(s.width, s.height)
        // s = UI.addPic("effect.bombexp_2", true, this, UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 4);
        // console.log(s.width, s.height)
        // s = UI.addPic("effect.bombexp_3", true, this, UI.WINSIZE_W / 4, UI.WINSIZE_H * 2 / 4);
        // console.log(s.width, s.height)
        // s = UI.addPic("effect.bombexp_4", true, this, UI.WINSIZE_W * 2 / 4, UI.WINSIZE_H * 2 / 4);
        // console.log(s.width, s.height)
        // s = UI.addPic("effect.bombexp_5", true, this, UI.WINSIZE_W * 3 / 4, UI.WINSIZE_W * 2 / 4);
        // console.log(s.width, s.height)


        // let s = UI.addPic("res.Bubble_skeleton", true, this);
        // s.x = UI.WINSIZE_W / 2;
        // s.y = UI.WINSIZE_H / 2;
        // let s = new ExpEffect();
        // this.addChild(s);
        // s.x = UI.WINSIZE_W / 2;
        // s.y = UI.WINSIZE_H / 2;

    }

    public onExit() {

    }
}







