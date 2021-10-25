class DontPlay extends WindowLayer {
    public constructor() {
        super();
    }
    onContent() {
        let bg: egret.Bitmap = UI.addPic(this, "Popup_box_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
        let title: egret.TextField = UI.addText(this, "完成三次游戏后解锁匹配", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true, 20, 0xffffff);
        bg.scaleX = (title.width + 40)/bg.width;
        bg.scaleY = (title.height + 40)/bg.height;

        let remove: egret.Bitmap = UI.addBtn(this, "Popup_close_png", bg.x + bg.width/2*bg.scaleX, bg.y - bg.height/2*bg.scaleY, true, () => {
            SceneManager.getInstance().RemoveLayer(this);
        });
    }

    onClickBg() {}
}