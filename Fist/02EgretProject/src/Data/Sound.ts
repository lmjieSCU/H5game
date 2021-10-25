class Sound {
    public static I: Sound;
    public static getInstance() {
        if(Sound.I == null) {
            Sound.I = new Sound();
        }
        return Sound.I;
    }

    private tagMusic: boolean = true;

    private bgMusic: egret.Sound;//背景音乐
    private bgMusicch: egret.SoundChannel;
    private fightBgMusic: egret.Sound;//战斗背景音乐
    private fightBgMusicch: egret.SoundChannel;

    private oneTimesMusic: egret.Sound;//只播放一次的声音
    private oneTimesMusicch: egret.SoundChannel;

    public musicName ={
        'buttonClick': 'click',//按钮点击音效
        'round1': 'round1',
        'round2': 'round2',
        'round3': 'round3',//回合round音乐
        'fight': 'fight',//回合fight音乐
        'select': 'select',//选择人物声音
        'lose': 'lose',//死亡声音
        'down1': 'down1',
        'down2': 'down2',//倒地声音
    }


    public bgColse() {
        if(this.bgMusicch != null) {
            this.bgMusicch.stop();
        }
    }
    public bgPlay() {
        this.bgColse();
        if(this.tagMusic) {
            this.bgMusic = new egret.Sound();
            this.bgMusic = RES.getRes("bgm1_snd_mp3");
            this.bgMusicch = this.bgMusic.play(0,-1);
        }
    }

    public fightBgClose() {
        if(this.fightBgMusicch != null) {
            this.fightBgMusicch.stop();
        }
    }
    public fightBgPlay() {
        this.fightBgClose();
        if(this.tagMusic) {
            this.fightBgMusic = new egret.Sound();
            this.fightBgMusic = RES.getRes("bgm1_snd_mp3");
            this.fightBgMusicch = this.fightBgMusic.play(0,-1);
        }
    }

    public oneTimesPlay(name: string) {
        if(this.tagMusic) {
            if(this.oneTimesMusic) this.oneTimesMusicch.stop();
            else this.oneTimesMusic = new egret.Sound();
            this.oneTimesMusic = RES.getRes(`${name}_mp3`);
            this.oneTimesMusicch = this.oneTimesMusic.play(0,1);
        }
    }
}