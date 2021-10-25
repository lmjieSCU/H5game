var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UtilSound = (function () {
    function UtilSound() {
    }
    //
    UtilSound.playMusic = function () {
        if (!UtilSound.soundflag)
            return;
        var file = "bgmusic_mp3";
        if (UtilSound.dealMoreSameConfig[file]) {
            UtilSound.dealMoreSameConfig[file].stop();
            UtilSound.bgMusicIsPlaying = false;
        }
        if (UtilSound.soundflag) {
            if (!UtilSound.dealMoreSameConfig[file]) {
                var sd = RES.getRes(file);
                UtilSound.dealMoreSameConfig[file] = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
                UtilSound.dealMoreSameConfigSound[file] = sd;
            }
            else {
                UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
            }
            UtilSound.bgMusicIsPlaying = true;
        }
    };
    UtilSound.clickMusicBtn = function () {
        var file = 'bgmusic_mp3';
        if (UtilSound.soundflag) {
            UtilSound.soundflag = false;
            UtilSound.dealMoreSameConfig[file].stop();
            UtilSound.bgMusicIsPlaying = false;
        }
        else {
            UtilSound.soundflag = true;
            if (!UtilSound.dealMoreSameConfig[file]) {
                var sd = RES.getRes(file);
                UtilSound.dealMoreSameConfig[file] = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
                UtilSound.dealMoreSameConfigSound[file] = sd;
            }
            else {
                UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
            }
            //背景音乐正在播放
            UtilSound.bgMusicIsPlaying = true;
        }
    };
    UtilSound.playFightMusic = function (file) {
        if (file === void 0) { file = "music_liuhunjie_mp3"; }
        if (UtilSound.dealMoreSameConfig['bgmusic_mp3']) {
            UtilSound.dealMoreSameConfig['bgmusic_mp3'].stop();
            UtilSound.bgMusicIsPlaying = false;
        }
        if (UtilSound.soundflag) {
            if (!UtilSound.dealMoreSameConfig[file]) {
                var sd = RES.getRes(file);
                UtilSound.dealMoreSameConfig[file] = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
                UtilSound.dealMoreSameConfigSound[file] = sd;
            }
            else {
                UtilSound.dealMoreSameConfig[file] = UtilSound.dealMoreSameConfigSound[file].play(0, 0);
            }
            UtilSound.soundingFight = file;
            UtilSound.fightMusicIsPlaying = true;
        }
    };
    UtilSound.playSound = function (name) {
        if (name === void 0) { name = "click"; }
        UtilSound.playCacheSound(name);
    };
    UtilSound.stopUISound = function (name) {
        if (name === void 0) { name = "click"; }
        var file = name + "_mp3";
        if (UtilSound.dealMoreSameConfig[file])
            UtilSound.dealMoreSameConfig[file].stop();
    };
    UtilSound.playUISound = function (name) {
        if (name === void 0) { name = "click"; }
        var file = name + "_mp3";
        if (UtilSound.dealMoreSameConfig[file])
            UtilSound.dealMoreSameConfig[file].stop();
        //
        UtilSound.playCacheSound(name);
    };
    UtilSound.playCacheSound = function (param1) {
        if (!UtilSound.soundflag)
            return;
        try {
            var file_1 = param1 + "_mp3";
            if (!UtilSound.dealMoreSameConfig[file_1]) {
                var sound = RES.getRes(file_1);
                UtilSound.dealMoreSameConfig[file_1] = sound.play(0, 1); //播放一次， 0， 0背景音乐 
                UtilSound.dealMoreSameConfigSound[file_1] = sound;
                UtilSound.test[file_1] = false;
                var t_1 = egret.setInterval(function () {
                    UtilSound.test[file_1] = true;
                    egret.clearInterval(t_1);
                }, this, 400);
            }
            else if (UtilSound.test[file_1]) {
                UtilSound.test[file_1] = false;
                UtilSound.dealMoreSameConfig[file_1] = UtilSound.dealMoreSameConfigSound[file_1].play(0, 1);
                var t_2 = egret.setInterval(function () {
                    UtilSound.test[file_1] = true;
                    egret.clearInterval(t_2);
                }, this, 400);
            }
            else {
                UtilSound.times++;
                console.log(UtilSound.times);
            }
        }
        catch (e) {
            //
        }
    };
    UtilSound.dealMoreSameConfig = [];
    UtilSound.dealMoreSameConfigSound = [];
    UtilSound.test = [];
    UtilSound.soundflag = true;
    UtilSound.soundingFight = "";
    UtilSound.bgMusicIsPlaying = false;
    UtilSound.fightMusicIsPlaying = false;
    UtilSound.times = 0;
    return UtilSound;
}());
__reflect(UtilSound.prototype, "UtilSound");
//# sourceMappingURL=UtilSound.js.map