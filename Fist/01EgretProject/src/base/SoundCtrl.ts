
class SoundCtrl {
    private _bgmObj: Object;
    public static _i: SoundCtrl;
    public static _singleSound : egret.SoundChannel = null;
    private _step:number = 1
    public _
    //
    public playAssetSound(param1: string, param2: number = 1) {
        return;
    }// end function

    public playEffectSound(param1: string, param2: number = 1) {
        if (param1 == undefined){
            return;
        }
        if (!UtilSound.soundflag)
            return;
        UtilSound.playCacheSound(param1);
      
        return;
    }// end function

      public playZmovieSeleSound(pHeroName:string,pSoundName:string){
           if (!UtilSound.soundflag)
            return;
          let file = pHeroName + "_" + pSoundName + "_mp3";
          if (SoundCtrl._singleSound) {
              SoundCtrl._singleSound.stop();
              SoundCtrl._singleSound = null;
          }
          try {
              var sound: egret.Sound = RES.getRes(file);
              SoundCtrl._singleSound = sound.play(0, 1);  //播放一次， 0， 0背景音乐 
          }
          catch (e) {
              console.log("loaded error!");
          }
          return;
      }


    //播放人物帧声音
    public playZmovieSound(pHeroName:string,pSoundName:string){
        if (!UtilSound.soundflag)
            return;
        //
        if (pSoundName == undefined) {
            return;
        }

        if (pHeroName.indexOf("sele") != -1){
            this.playZmovieSeleSound(pHeroName, pSoundName);
            return;
        }
        if (pHeroName.indexOf("hero") != -1 
          || pHeroName.indexOf("assist") != -1 
          || pHeroName.indexOf("role") !=-1
          || pHeroName.indexOf("effect_fire") !=-1
          || pHeroName.indexOf("effect_hit") !=-1
          || pHeroName.indexOf("effect_other") !=-1) {
            this.playEffectSound(pHeroName + "_" + pSoundName);
            return;
        }
        return;
    }
    
    public playWalk(){
        if (!UtilSound.soundflag)
            return;
        let stepName = "step" + this._step.toString()
        if (this._step < 3) {
            this._step++
        }
        else {
            this._step = 1
        }
        UtilSound.playCacheSound(stepName);
        return;
    }

    public playStartSound(pSoundName:string){
         UtilSound.playCacheSound(pSoundName);
        return;
    }

    public playAssetSoundRandom(...args) {

        return;
    }// end function

    public playSwcSound(param1: any) {
        UtilSound.playCacheSound(param1);
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
