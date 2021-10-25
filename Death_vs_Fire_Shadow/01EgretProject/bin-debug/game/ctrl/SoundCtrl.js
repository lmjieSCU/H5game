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
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
        }, this);
        try {
            sound.load("resource/assets/effect/" + param1 + ".mp3");
        }
        catch (e) {
        }
        return;
    }; // end function
    //播放人物帧声音
    SoundCtrl.prototype.playZmovieSound = function (pHeroName, pSoundName) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!" + pHeroName + "_" + pSoundName);
        }, this);
        if (pHeroName.indexOf("hero") != -1) {
            sound.load("resource/assets/heros/" + pHeroName + "/" + pSoundName + ".mp3");
        }
        else if (pHeroName.indexOf("assist") != -1) {
            sound.load("resource/assets/assist/" + pHeroName + "/" + pSoundName + ".mp3");
        }
        else {
        }
        return;
    };
    SoundCtrl.prototype.playWalk = function () {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
        }, this);
        var stepName = "step" + this._step.toString();
        sound.load("resource/assets/sound/" + stepName + ".mp3");
        if (this._step < 3) {
            this._step++;
        }
        else {
            this._step = 1;
        }
        return;
    };
    SoundCtrl.prototype.playStartSound = function (pSoundName) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
        }, this);
        try {
            sound.load("resource/assets/ui/fightuiresult/" + pSoundName + ".mp3");
        }
        catch (e) {
        }
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
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
        }, this);
        try {
            sound.load("resource/assets/sound/" + param1 + ".mp3");
        }
        catch (e) {
        }
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
    return SoundCtrl;
}());
__reflect(SoundCtrl.prototype, "SoundCtrl");
//# sourceMappingURL=SoundCtrl.js.map