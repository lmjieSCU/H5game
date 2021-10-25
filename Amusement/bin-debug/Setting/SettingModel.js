var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SettingModel = (function () {
    function SettingModel() {
        this.isWudiBan = false;
        return;
    }
    SettingModel.prototype.loadData = function () {
        this.sound = Boolean(egret.localStorage.getItem("sound") == "yes");
        this.music = Boolean(egret.localStorage.getItem("music") == "yes");
        SoundCtrl.I.isForbidden = !this.sound;
        SoundCtrl.I.isForbidden_bg = !this.music;
        return;
    };
    SettingModel.prototype.saveData = function () {
        var sound = this.sound ? "yes" : "no";
        var music = this.music ? "yes" : "no";
        egret.localStorage.setItem("sound", String(sound));
        egret.localStorage.setItem("music", String(music));
        SoundCtrl.I.isForbidden = !this.sound;
        SoundCtrl.I.isForbidden_bg = !this.music;
        return;
    };
    return SettingModel;
}());
__reflect(SettingModel.prototype, "SettingModel");
//# sourceMappingURL=SettingModel.js.map