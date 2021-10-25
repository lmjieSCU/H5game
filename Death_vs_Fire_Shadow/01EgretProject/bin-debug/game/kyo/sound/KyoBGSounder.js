var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KyoBGSounder = (function () {
    function KyoBGSounder() {
        return;
    } // end 
    Object.defineProperty(KyoBGSounder.prototype, "volume", {
        get: function () {
            return this._volume;
        } // end 
        ,
        set: function (param1) {
            this._volume = param1;
            if (this._channel) {
                this._channel.volume = param1;
            }
            return;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    KyoBGSounder.prototype.play = function (param1) {
        if (param1 === void 0) { param1 = null; }
        if (this._snd) {
            return;
        }
        if (!param1) {
            param1 = this.sound;
        }
        if (param1) {
            this.sound = param1;
        }
        else {
            //trace("没有可播放的音乐");
            return;
        }
        this.playsnd();
        this.playing = true;
        return;
    }; // end 
    KyoBGSounder.prototype.stop = function () {
        if (this._channel) {
            this._channel.stop();
            this._channel = null;
        }
        if (this._snd) {
            try {
                this._snd.close();
            }
            catch (e) {
                //trace("KyoBGSounder", e);
            }
            this._snd = null;
        }
        this.playing = false;
        return;
    }; // end 
    KyoBGSounder.prototype.pause = function () {
        if (this._channel) {
            this._channel.stop();
        }
        return;
    }; // end 
    KyoBGSounder.prototype.resume = function () {
        if (this._channel) {
            this._channel = this._snd.play(this._channel.position, Number.MAX_VALUE);
        }
        return;
    }; // end 
    KyoBGSounder.prototype.toogle = function () {
        if (this.playing) {
            this.stop();
        }
        else {
            this.play();
        }
        return;
    }; // end 
    KyoBGSounder.prototype.playsnd = function () {
        this._channel = this._snd.play(0, Number.MAX_VALUE);
        this._channel.volume = this._volume;
        return;
    }; // end 
    Object.defineProperty(KyoBGSounder, "I", {
        get: function () {
            if (!KyoBGSounder._i)
                KyoBGSounder._i = new KyoBGSounder();
            return this._i;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    KyoBGSounder._i = null;
    return KyoBGSounder;
}());
__reflect(KyoBGSounder.prototype, "KyoBGSounder");
//# sourceMappingURL=KyoBGSounder.js.map