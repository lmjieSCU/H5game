/**声音控制类,实现播放、暂停声音 
 * 单例
*/

class SoundCtrl {
    private static instance: SoundCtrl;
    private Music: egret.Sound;
    private MusicChannel: egret.SoundChannel;
    private bgMusic: egret.Sound;
    private bgMusicChannel: egret.SoundChannel;
    public isForbidden_bg: boolean = false;
    public isForbidden: boolean = false;


    private constructor() {
    }

    public static get I() {
        if (this.instance == null) {
            this.instance = new SoundCtrl();
        }
        return this.instance;
    }


    public playmusic(name: string, type: string = "mp3"): void {
        if (this.isForbidden) {
            return;
        }
        // this.stopMusic();
        this.Music = new egret.Sound();
        this.Music.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            try {
                SoundCtrl.I.MusicChannel = SoundCtrl.I.Music.play(0, 1);  //播放一次， 0， 0背景音乐 
            } catch (e) {
            }
        }, this);
        this.Music.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        this.Music.load("resource/assets/sounds/" + name + "." + type);
    }

    public playbgmusic(name: string, type: string = "mp3"): void {
        if (this.isForbidden_bg) {
            return;
        }
        this.stopBgMusic();
        this.bgMusic = new egret.Sound();
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            try {
                SoundCtrl.I.bgMusicChannel = SoundCtrl.I.bgMusic.play(0, -1);
            } catch (e) {
            }
        }, this);
        this.bgMusic.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        this.bgMusic.load("./resource/assets/sounds/" + name + "." + type);
    }


    public stopMusic(): void {
        if (this.MusicChannel != null) {
            this.MusicChannel.stop();
        }
        this.MusicChannel = null;
        this.Music = null;

    }

    public stopBgMusic() {
        if (this.bgMusicChannel != null) {
            this.bgMusicChannel.stop();
        }
        this.bgMusicChannel = null;
        this.bgMusic = null;
    }

}
