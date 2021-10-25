
class SoundCtrl {
    public static _i: SoundCtrl;
    public bgmusic: egret.Sound;
    private bgmusicch: egret.SoundChannel;
    private effmusic: egret.Sound;
    private effmusicch: egret.SoundChannel;
    public Bgtag: boolean = true;



    public BGplay(name: string) {
        this.BGclose();
        if (this.Bgtag) {
            this.bgmusic = new egret.Sound;
            this.bgmusic = RES.getRes(name + "_wav");
            this.bgmusicch = this.bgmusic.play(0, -1);
        }
    }


    public BGclose() {
        if (this.bgmusicch != null) {
            this.bgmusicch.stop();
        }
    }

    public Effectplay(name: string) {
        this.effmusic = new egret.Sound;
        this.effmusic = RES.getRes(name + "_wav");
        this.effmusicch = this.effmusic.play(0, 1);
    }

    public static get I(): SoundCtrl {
        if (!SoundCtrl._i) {
            SoundCtrl._i = new SoundCtrl();
        }
        return SoundCtrl._i
    }
}
