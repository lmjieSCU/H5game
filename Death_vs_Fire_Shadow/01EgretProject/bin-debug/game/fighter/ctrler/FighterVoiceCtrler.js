var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterVoiceCtrler = (function () {
    function FighterVoiceCtrler() {
        this._voiceObj = [];
        this._voiceObj = [];
        return;
    } // end function
    FighterVoiceCtrler.prototype.destory = function () {
        if (this._voiceObj) {
            this._voiceObj = null;
        }
        if (this._channel) {
            this._channel.stop();
            this._channel = null;
        }
        return;
    }; // end function
    FighterVoiceCtrler.prototype.setVoice = function (param1, param2) {
        this._voiceObj[param1] = param2;
        return;
    }; // end function
    FighterVoiceCtrler.prototype.playVoice = function (param1, param2) {
        var soundName = this._voiceObj[param1];
        var heroName = param2;
        SoundCtrl.I.playZmovieSound(heroName, soundName);
        /*
        var _loc_4:any = null;
        var _loc_3:any = null;
        if (this._channel && this._channel.position < this._curLength)
        {
            return;
        }
        if (Math.random() > param2)
        {
            return;
        }
        var _loc_5:any = this._voiceObj[param1];
        if (this._voiceObj[param1] && _loc_5.length > 0)
        {
            _loc_4 = _loc_5.length > 1 ? (KyoRandom.getRandomInArray(_loc_5)) : (_loc_5[0]);
            if (_loc_4)
            {
                _loc_3 = new _loc_4;
                this._curLength = _loc_3.length;
                this._channel = _loc_3.play();
            }
        }
        */
        return;
    }; // end function
    return FighterVoiceCtrler;
}());
__reflect(FighterVoiceCtrler.prototype, "FighterVoiceCtrler");
//# sourceMappingURL=FighterVoiceCtrler.js.map