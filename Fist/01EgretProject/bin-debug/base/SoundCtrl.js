var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundCtrl = (function () {
    function SoundCtrl() {
        this._step = 1;
    }
    //
    SoundCtrl.prototype.playAssetSound = function (param1, param2) {
        if (param2 === void 0) { param2 = 1; }
        return;
    }; // end function
    SoundCtrl.prototype.playEffectSound = function (param1, param2) {
        if (param2 === void 0) { param2 = 1; }
        if (param1 == undefined) {
            return;
        }
        if (!UtilSound.soundflag)
            return;
        UtilSound.playCacheSound(param1);
        return;
    }; // end function
    SoundCtrl.prototype.playZmovieSeleSound = function (pHeroName, pSoundName) {
        if (!UtilSound.soundflag)
            return;
        var file = pHeroName + "_" + pSoundName + "_mp3";
        if (SoundCtrl._singleSound) {
            SoundCtrl._singleSound.stop();
            SoundCtrl._singleSound = null;
        }
        try {
            var sound = RES.getRes(file);
            SoundCtrl._singleSound = sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }
        catch (e) {
            console.log("loaded error!");
        }
        return;
    };
    //播放人物帧声音
    SoundCtrl.prototype.playZmovieSound = function (pHeroName, pSoundName) {
        if (!UtilSound.soundflag)
            return;
        //
        if (pSoundName == undefined) {
            return;
        }
        if (pHeroName.indexOf("sele") != -1) {
            this.playZmovieSeleSound(pHeroName, pSoundName);
            return;
        }
        if (pHeroName.indexOf("hero") != -1
            || pHeroName.indexOf("assist") != -1
            || pHeroName.indexOf("role") != -1
            || pHeroName.indexOf("effect_fire") != -1
            || pHeroName.indexOf("effect_hit") != -1
            || pHeroName.indexOf("effect_other") != -1) {
            this.playEffectSound(pHeroName + "_" + pSoundName);
            return;
        }
        return;
    };
    SoundCtrl.prototype.playWalk = function () {
        if (!UtilSound.soundflag)
            return;
        var stepName = "step" + this._step.toString();
        if (this._step < 3) {
            this._step++;
        }
        else {
            this._step = 1;
        }
        UtilSound.playCacheSound(stepName);
        return;
    };
    SoundCtrl.prototype.playStartSound = function (pSoundName) {
        UtilSound.playCacheSound(pSoundName);
        return;
    };
    SoundCtrl.prototype.playAssetSoundRandom = function () {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            args[_a] = arguments[_a];
        }
        return;
    }; // end function
    SoundCtrl.prototype.playSwcSound = function (param1) {
        UtilSound.playCacheSound(param1);
        return;
    }; // end function
    SoundCtrl.prototype.BGM = function (param1) {
        return;
    }; // end function
    SoundCtrl.prototype.pauseBGM = function () {
        return;
    }; // end function
    SoundCtrl.prototype.resumeBGM = function () {
        return;
    }; // end function
    SoundCtrl.prototype.loadFightBGM = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        return;
    }; // end function
    SoundCtrl.prototype.playFightBGM = function (param1) {
        return;
    }; // end function
    SoundCtrl.prototype.unloadFightBGM = function () {
        return;
    }; // end function
    SoundCtrl.prototype.sndSelect = function () {
        return;
    }; // end function
    SoundCtrl.prototype.sndConfrim = function () {
        return;
    }; // end function
    Object.defineProperty(SoundCtrl, "I", {
        get: function () {
            if (!SoundCtrl._i) {
                SoundCtrl._i = new SoundCtrl();
            }
            return SoundCtrl._i;
        },
        enumerable: true,
        configurable: true
    });
    SoundCtrl._singleSound = null;
    return SoundCtrl;
}());
__reflect(SoundCtrl.prototype, "SoundCtrl");
//# sourceMappingURL=SoundCtrl.js.map