/**声音控制类,实现播放、暂停声音
 * 单例
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundCtrl = (function () {
    function SoundCtrl() {
        this.isForbidden = false;
    }
    Object.defineProperty(SoundCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new SoundCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    SoundCtrl.prototype.changeForbidden = function () {
        this.isForbidden = !this.isForbidden;
        if (this.isForbidden) {
            this.stopMusic();
            this.stopBgMusic();
        }
        else {
            var bgsound = GameData.I.stageInfo(GameData.I.level).length >= 10 ? "bossbgLv" : "bgsound";
            this.playbgSound(bgsound);
        }
    };
    SoundCtrl.prototype.playSound = function (name, type) {
        if (type === void 0) { type = "mp3"; }
        if (this.isForbidden) {
            return;
        }
        // this.stopMusic();
        this.Music = new egret.Sound();
        this.Music.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            try {
                SoundCtrl.I.MusicChannel = SoundCtrl.I.Music.play(0, 1); //播放一次， 0， 0背景音乐 
            }
            catch (e) {
            }
        }, this);
        this.Music.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        this.Music.load("resource/assets/sounds/" + name + "." + type);
    };
    SoundCtrl.prototype.playbgSound = function (name, type) {
        if (type === void 0) { type = "mp3"; }
        if (this.isForbidden) {
            return;
        }
        this.stopBgMusic();
        this.bgMusic = new egret.Sound();
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            try {
                SoundCtrl.I.bgMusicChannel = SoundCtrl.I.bgMusic.play(0, -1);
            }
            catch (e) {
            }
        }, this);
        this.bgMusic.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        this.bgMusic.load("./resource/assets/sounds/" + name + "." + type);
    };
    SoundCtrl.prototype.stopMusic = function () {
        if (this.MusicChannel != null) {
            this.MusicChannel.stop();
        }
        this.MusicChannel = null;
        this.Music = null;
    };
    SoundCtrl.prototype.stopBgMusic = function () {
        console.log("stip");
        if (this.bgMusicChannel != null) {
            this.bgMusicChannel.stop();
        }
        this.bgMusicChannel = null;
        this.bgMusic = null;
    };
    return SoundCtrl;
}());
__reflect(SoundCtrl.prototype, "SoundCtrl");
//# sourceMappingURL=SoundCtrl.js.map