class LevelMap extends Scene {
    public constructor() {
        super();
    }

    public levels = ["K", "Chunli", "Ryu", "Terry"];
    private isType2 = false;

    onEnter() {
        const len = this.levels.length;
        this.levels.map((data,index) => {
            for(let i=1;i<=5;i++) {
                let t:egret.TextField = UI.addText(this, `${data}_AI_LV${i}`, UI.WINSIZE_W/2 + 200*(index-(len-1)/2), UI.WINSIZE_H/2 + (i-3)*30, true, 30, 0xffffff);
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    let ai = `new ${data}_AI_Lv${i}()`;
                    if(this.isType2) {
                        ai = `new Type2_${data}_AI_Lv${i}()`;
                    }
                    SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, ai))
                }, this);
                t.touchEnabled = true;
            }
        })

        let type: egret.TextField = UI.addText(this, "type1", UI.WINSIZE_W/2, UI.WINSIZE_H - 30, true, 30, 0xffffff);
        type.touchEnabled = true;
        type.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            type.$setText(this.isType2?'type1':'type2');
            this.isType2 = !this.isType2;
        }, this)
    }

    onExit() {}
}