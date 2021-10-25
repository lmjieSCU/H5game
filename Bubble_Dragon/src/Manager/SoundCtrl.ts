/**声音控制类,实现播放、暂停声音 
 * 单例
*/

class SoundCtrl {

    private static instance: SoundCtrl;

    private bgMusic: egret.Sound;

    private bgMusicChannel: egret.SoundChannel;

    public isForbidden_bg: boolean = true;

    public isForbidden: boolean = true;

    public MusicChannels: Array<egret.SoundChannel>;

    public Musics: Array<egret.Sound>;


    private constructor() {
        this.MusicChannels = new Array<egret.SoundChannel>();
        this.Musics = new Array<egret.Sound>();
        return;
    }

    public static  getInstance() {
        if (this.instance == null) {
            this.instance = new SoundCtrl();
        }
        return this.instance;
    }


    public playmusic(name: string, type: string = "mp3"): void {
        if (this.isForbidden) {
            this.stopMusic();
            return;
        }
        // this.Music = new egret.Sound();
        // this.Musics.push(this.Music);
        let music = new egret.Sound();
        this.Musics.push(music);
        music.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            try {
                // SoundCtrl.I.MusicChannel = SoundCtrl.I.Music.play(0, 1);  //播放一次， 0， 0背景音乐 
                // SoundCtrl.I.MusicChannels.push(SoundCtrl.I.MusicChannel);
                let MusicChannel = music.play(0, 1);  //播放一次， 0， 0背景音乐 
                SoundCtrl.getInstance().MusicChannels.push(MusicChannel);
            } catch (e) {
            }
        }, this);
        music.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        music.load("resource/assets/sounds/" + name + "." + type);
    }

    public playbgmusic(name: string, type: string = "mp3"): void {
        if (this.isForbidden_bg) {
            this.stopBgMusic();
            return;
        }
        this.stopBgMusic();
        this.bgMusic = new egret.Sound();
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            try {
                SoundCtrl.getInstance().bgMusicChannel = SoundCtrl.getInstance().bgMusic.play(0, -1);
            } catch (e) {
            }
        }, this);
        this.bgMusic.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        this.bgMusic.load("./resource/assets/sounds/" + name + "." + type);
    }


    public stopMusic(): void {
        // if (this.MusicChannel != null) {
        //     this.MusicChannel.stop();
        // }
        for (let i in this.MusicChannels) {
            this.MusicChannels[i].stop();
        }
        this.Musics = [];
        this.MusicChannels = [];
        // this.MusicChannel = null;
        // this.Music = null;

    }

    public stopBgMusic() {
        if (this.bgMusicChannel != null) {
            this.bgMusicChannel.stop();
        }
        this.bgMusicChannel = null;
        this.bgMusic = null;
    }

}
