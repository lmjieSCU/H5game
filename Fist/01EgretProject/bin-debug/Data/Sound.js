var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sound = (function () {
    function Sound() {
        this.tagMusic = true;
        this.musicName = {
            'buttonClick': 'click',
            'round1': 'round1',
            'round2': 'round2',
            'round3': 'round3',
            'fight': 'fight',
            'select': 'select',
            'lose': 'lose',
            'down1': 'down1',
            'down2': 'down2',
        };
    }
    Sound.getInstance = function () {
        if (Sound.I == null) {
            Sound.I = new Sound();
        }
        return Sound.I;
    };
    Sound.prototype.bgColse = function () {
        if (this.bgMusicch != null) {
            this.bgMusicch.stop();
        }
    };
    Sound.prototype.bgPlay = function () {
        this.bgColse();
        if (this.tagMusic) {
            this.bgMusic = new egret.Sound();
            this.bgMusic = RES.getRes("bgm1_snd_mp3");
            this.bgMusicch = this.bgMusic.play(0, -1);
        }
    };
    Sound.prototype.fightBgClose = function () {
        if (this.fightBgMusicch != null) {
            this.fightBgMusicch.stop();
        }
    };
    Sound.prototype.fightBgPlay = function () {
        this.fightBgClose();
        if (this.tagMusic) {
            this.fightBgMusic = new egret.Sound();
            this.fightBgMusic = RES.getRes("bgm1_snd_mp3");
            this.fightBgMusicch = this.fightBgMusic.play(0, -1);
        }
    };
    Sound.prototype.oneTimesPlay = function (name) {
        if (this.tagMusic) {
            if (this.oneTimesMusic)
                this.oneTimesMusicch.stop();
            else
                this.oneTimesMusic = new egret.Sound();
            this.oneTimesMusic = RES.getRes(name + "_mp3");
            this.oneTimesMusicch = this.oneTimesMusic.play(0, 1);
        }
    };
    return Sound;
}());
__reflect(Sound.prototype, "Sound");
//# sourceMappingURL=Sound.js.map