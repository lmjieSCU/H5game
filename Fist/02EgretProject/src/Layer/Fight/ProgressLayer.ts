class ProgressLayer extends Scene {
    public constructor(parent: any,type: string) {
        super();
        this._parent = parent;
        this.type = type;
    }
    private progressMask: egret.Shape;
    private _parent: any;
    private type: string;

    onEnter() {
        this.initProgress();
    }
    onExit() {}

    public initProgress() {
        // let progressBg: egret.Bitmap = UI.addPic(this, "", UI.WINSIZE_W/2, UI.WINSIZE_H/4*3, true);
        let progress: egret.Bitmap = UI.addPic(this, "progress_png", UI.WINSIZE_W/2, UI.WINSIZE_H/4*3, true);
        this.progressMask = new egret.Shape();
        this.progressMask.graphics.beginFill(0x000000);
        this.progressMask.graphics.drawRect(0, 0, progress.width, progress.height);
        this.progressMask.graphics.endFill();
        this.progressMask.x = progress.x - progress.width/2;
        this.progressMask.y = progress.y;
        this.progressMask.anchorOffsetY = progress.height/2;
        this.addChild(this.progressMask);
        progress.mask = this.progressMask;
    }

    public onProgress(current: number, total: number) {
        // this.progressMask.scaleX = current/total;
        let progress = 0;
        switch(this.type) {
            case "subPackage": 
                let parent = this._parent as Subcontractor;
                // progress = Math.floor(current/total) + Math.floor(parent._loadResNum / parent._allResNum*100);
                progress = Math.floor((current/total + parent._loadResNum)/parent._allResNum*100);
                progress = Math.min(progress, 100);
        }
        console.log(progress);
        this.progressMask.scaleX = progress/100;
    }
}