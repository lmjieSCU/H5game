class SettingModel {

    public sound: boolean;

    public music: boolean;

    public isWudiBan: boolean = false;

    public constructor() {
        return;
    }

    public loadData(): void {
        this.sound = Boolean(egret.localStorage.getItem("sound")=="yes");
        this.music = Boolean(egret.localStorage.getItem("music")=="yes");
        SoundCtrl.I.isForbidden = !this.sound;
        SoundCtrl.I.isForbidden_bg = !this.music;
        return;
    }

    public saveData(): void {
        let sound = this.sound?"yes":"no";
        let music = this.music?"yes":"no";
        egret.localStorage.setItem("sound", String(sound));
        egret.localStorage.setItem("music", String(music));
        SoundCtrl.I.isForbidden = !this.sound;
        SoundCtrl.I.isForbidden_bg = !this.music;
        return;
    }


}

