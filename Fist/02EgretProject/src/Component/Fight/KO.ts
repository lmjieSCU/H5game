class KO extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
    }

    private ko: number[] = [199, 197, 195, 193, 191, 189, 187, 185, 182, 180];
    private Ko: egret.Bitmap[] = [];
    onEnter() {
        this.ko.map((data) => {
            let k: egret.Bitmap = UI.addPic(this, "Image " + data + "_png", GameConfig.FightWidth / 2, UI.WINSIZE_H / 2, true);
            k.alpha = 0;
            k.y -= k.height / 2;
            this.Ko.push(k);
        })

        const time: egret.Timer = new egret.Timer(100, 14);
        let i = 0;
        time.addEventListener(egret.TimerEvent.TIMER, () => {
            if (i < this.Ko.length) this.Ko[i].$setAlpha(1);
            i++;
        }, this);
        time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, () => {
            for (let j = 0; j < this.Ko.length; j++) this.removeChild(this.Ko[j]);
        }, this)
        time.start();
    }
    onExit() { }
    update() { }
}