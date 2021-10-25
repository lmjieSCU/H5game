/**对话框 */
class TalkPanel extends egret.DisplayObjectContainer {

    public talk_txt: egret.TextField;

    public talk_board: egret.Bitmap;

    public constructor() {
        super();
        this.talk_board = UI.addPic("guideboard_png", true, this);
        this.talk_txt = UI.addText(this, "", true, -50, -50);
        this.talk_txt.textColor = 0xff00ff;
        return;
    }

    public setContent(arg1: string): void {
        this.talk_txt.text = arg1;

        return;
    }
}
