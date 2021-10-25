/**声音控制类,实现播放、暂停声音
 * 单例
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundCtrl = (function () {
    function SoundCtrl() {
        this.isForbidden_bg = true;
        this.isForbidden = true;
        this.MusicChannels = new Array();
        this.Musics = new Array();
        return;
    }
    SoundCtrl.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SoundCtrl();
        }
        return this.instance;
    };
    SoundCtrl.prototype.playmusic = function (name, type) {
        if (type === void 0) { type = "mp3"; }
        if (this.isForbidden) {
            this.stopMusic();
            return;
        }
        // this.Music = new egret.Sound();
        // this.Musics.push(this.Music);
        var music = new egret.Sound();
        this.Musics.push(music);
        music.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            try {
                // SoundCtrl.I.MusicChannel = SoundCtrl.I.Music.play(0, 1);  //播放一次， 0， 0背景音乐 
                // SoundCtrl.I.MusicChannels.push(SoundCtrl.I.MusicChannel);
                var MusicChannel = music.play(0, 1); //播放一次， 0， 0背景音乐 
                SoundCtrl.getInstance().MusicChannels.push(MusicChannel);
            }
            catch (e) {
            }
        }, this);
        music.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        music.load("resource/assets/sounds/" + name + "." + type);
    };
    SoundCtrl.prototype.playbgmusic = function (name, type) {
        if (type === void 0) { type = "mp3"; }
        if (this.isForbidden_bg) {
            this.stopBgMusic();
            return;
        }
        this.stopBgMusic();
        this.bgMusic = new egret.Sound();
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            try {
                SoundCtrl.getInstance().bgMusicChannel = SoundCtrl.getInstance().bgMusic.play(0, -1);
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
        // if (this.MusicChannel != null) {
        //     this.MusicChannel.stop();
        // }
        for (var i in this.MusicChannels) {
            this.MusicChannels[i].stop();
        }
        this.Musics = [];
        this.MusicChannels = [];
        // this.MusicChannel = null;
        // this.Music = null;
    };
    SoundCtrl.prototype.stopBgMusic = function () {
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