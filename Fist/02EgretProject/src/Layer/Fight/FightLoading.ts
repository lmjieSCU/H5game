class FightLoading extends Scene {
    public constructor(parent: Subcontractor) {
        super();
        this._parent = parent;
    }
    private progressMask: egret.Shape;
    private _parent: Subcontractor;
    private text: egret.TextField;
    private heroMap: string[] = [];
    private heroList: egret.Bitmap[] = [];
    private isLook: boolean = false;

    onEnter() {
        this.initProgress();
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        // this.addChild(bg);
        // this.inintHeroInfo();
    }
    onExit() {}

    public initProgress() {
        let progressBg: egret.Bitmap = UI.addPic(this, "progressBg_png", UI.WINSIZE_W/2, UI.WINSIZE_H/4*3, true);
        let progress: egret.Bitmap = UI.addPic(this, "progress_png", progressBg.x, progressBg.y, true);
        this.text = UI.addText(this, "资源加载中...", UI.WINSIZE_W / 2, progressBg.y + progressBg.height/2, true, 22, 0xffffff);
        this.text.y += this.text.height;
        this.progressMask = new egret.Shape();
        this.progressMask.graphics.beginFill(0x000000);
        this.progressMask.graphics.drawRect(0, 0, progress.width, progress.height);
        this.progressMask.graphics.endFill();
        this.progressMask.x = progress.x - progress.width/2;
        this.progressMask.y = progress.y;
        this.progressMask.anchorOffsetY = progress.height/2;
        this.addChild(this.progressMask);
        progress.mask = this.progressMask;
        // LoadResScene.Instance.textField.y = progressBg.y - progressBg.height/2 - LoadResScene.Instance.textField.height/2;
    }

    public inintHeroInfo() {
        this.heroMap = ["Ryu", "Chunli", "K", "Ryu"];
        let bg: egret.Bitmap = UI.addPic(this, "loadingBg_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
        bg.alpha = 0;
        this.heroMap.map((data, index) => {
            let hero: egret.Bitmap = UI.addBtn(this, `loadingHero${data}_png`, UI.WINSIZE_W/2, UI.WINSIZE_H/2, true, () => this.look(hero, data));
            this.heroList.push(hero);
            hero.x += (index - (this.heroMap.length - 1)/2)*hero.width;
        })
    }

    public look(targer: egret.Bitmap, hero: string) {
        if(this.isLook) {}
        else {
            this.isLook = true;
            this.heroList.map((data,index) => {
                // if(this.heroMap[index] == hero) egret.Tween.get(data).to({x:})
            })
        }
    }

    public onProgress(current: number, total: number) {
        let progress = 0;
        let parent = this._parent;
        progress = Math.floor((current/total + parent._loadResNum)/parent._allResNum*100);
        progress = Math.min(progress, 100);
        if(progress == 100) {
            this.text.$setText("资源加载完毕...准备进入游戏");
            this.text.anchorOffsetX = this.text.width/2;
        }
        this.progressMask.scaleX = progress/100;
    }
}