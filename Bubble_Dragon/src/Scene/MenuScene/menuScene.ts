/**游戏菜单
 * 包含:声音设置以及开始游戏按钮
 * 由menuModule创建
 */

class menuScene extends Scene {

    public begin_btn: egret.Bitmap;


    public constructor() {
        super();
        return;
    }

    public onEnter() {
        //==============================图片===========================================
        let GameEntry_bg = UI.addPic("GameEntry_bg_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        GameEntry_bg.scaleY = UI.WINSIZE_H * 1.1 / GameEntry_bg.height;
        GameEntry_bg.scaleX = UI.WINSIZE_W * 1.1 / GameEntry_bg.width;
        UI.addPic("res.title", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 4);
        //=============================按钮============================================
        this.begin_btn = UI.addPic("res.play_btn", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H * 2.5 / 4);
        UI.addClickAction(this, this.begin_btn, this.onBeginbtnTouch);
        //=============================动画=============================================
        egret.Tween.get(this.begin_btn, { loop: true }).to({ "scaleX": 1.3, "scaleY": 0.7 }).wait(100).to({ "scaleX": 1, "scaleY": 1 }).wait(2000);
        //=============================Layer============================================
        SceneManager.getInstance().AddLayer(new SettingLayer());
    }

    public onBeginbtnTouch() {
        egret.Tween.removeTweens(this.begin_btn);
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }


    public onExit() {
    }

}