class WelcomeLayer extends WindowLayer {
    public constructor() {
        super();
    }

    public onContent() {
        let bg: egret.Bitmap = UI.addPic(this, "Popup_welcome_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
        // let text: egret.TextField = UI.addText(this, "欢迎进入拳皇新世界", UI.WINSIZE_W/2, UI.WINSIZE_H/2 - 10, true, 20, 0xffffff);
        // let text2: egret.TextField = UI.addText(this, "点击屏幕任意位置进入新手引导", UI.WINSIZE_W/2, UI.WINSIZE_H/2 + 20, true, 20, 0xffffff);
        // bg.scaleX = (text2.width+20)/bg.width;
        // bg.scaleY = (text.height+text2.height+60)/bg.height;
    }

    public onClickBg() {
        ((Home.instace.getChildAt(1) as HomeLayer).getChildAt(0) as ChooseFight).newHand();
        SceneManager.getInstance().RemoveLayer(this);
    }
}