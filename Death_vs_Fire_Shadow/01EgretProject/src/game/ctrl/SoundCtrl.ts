
class SoundCtrl {
    private _bgSound: KyoBGSounder;
    private _soundLoader: KyoSoundLoader;
    private _bgmObj: Object;
    public static _i: SoundCtrl;
    private _step:number = 1
    //
    public playAssetSound(param1: string, param2: number = 1) {
        return;
    }// end function

    public playEffectSound(param1: string, param2: number = 1) {
        var sound: egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            sound.play(0, 1);  //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            // console.log("loaded error!");
        }, this);
        try{
            sound.load("resource/assets/effect/" + param1 + ".mp3");
        }
        catch(e){

        }
        return;
    }// end function

    //播放人物帧声音
    public playZmovieSound(pHeroName:string,pSoundName:string){
        var sound: egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            sound.play(0, 1);  //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            // console.log("loaded error!" + pHeroName + "_" + pSoundName);
        }, this);
        if(pHeroName.indexOf("hero")!=-1){
            sound.load("resource/assets/heros/"+ pHeroName+"/"+ pSoundName + ".mp3");
        }else if(pHeroName.indexOf("assist")!=-1){
            sound.load("resource/assets/assist/"+ pHeroName+"/"+ pSoundName + ".mp3");
        }else{
            
        }

        return;
    }
    
    public playWalk(){
        var sound: egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            sound.play(0, 1);  //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            // console.log("loaded error!");
        }, this);
        let stepName = "step"+this._step.toString()
        sound.load("resource/assets/sound/"+stepName+".mp3")
        if(this._step < 3){
            this._step++
        }
        else{
            this._step = 1
        }
        return;
    }

    public playStartSound(pSoundName:string){
        var sound: egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            sound.play(0, 1);  //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            // console.log("loaded error!");
        }, this);
        try{
            sound.load("resource/assets/ui/fightuiresult/" + pSoundName + ".mp3");
        }
        catch(e){

        }
        return;
    }

    public playAssetSoundRandom(...args) {

        return;
    }// end function

    public playSwcSound(param1: any) {
        var sound: egret.Sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
            sound.play(0, 1);  //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
            // console.log("loaded error!");
        }, this);
        try{
            sound.load("resource/assets/sound/" + param1 + ".mp3");
        }
        catch(e){

        }
        return;
    }// end function

    public BGM(param1: Object) {

        return;
    }// end function

    public pauseBGM() {

        return;
    }// end function

    public resumeBGM() {

        return;
    }// end function

    public loadFightBGM(param1: any[], param2: Function, param3: Function = null, param4: Function = null) {

        return;
    }// end function

    public playFightBGM(param1: string) {

        return;
    }// end function

    public unloadFightBGM() {

        return;
    }// end function

    public sndSelect() {
        return;
    }// end function

    public sndConfrim() {
        return;
    }// end function

    public static get I(): SoundCtrl
    {
        if (!SoundCtrl._i)
        {
            SoundCtrl._i = new SoundCtrl();
        }
        return SoundCtrl._i
    }
}
