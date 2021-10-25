class FighterVoiceCtrler 
    {
        private _voiceObj:any=[];
        private _channel:egret.SoundChannel;
        private _curLength:number;

        public constructor()
        {
            this._voiceObj = [];
            return;
        }// end function

        public destory() : void
        {
            if (this._voiceObj)
            {
                this._voiceObj = null;
            }
            if (this._channel)
            {
                this._channel.stop();
                this._channel = null;
            }
            return;
        }// end function

        public setVoice(param1:number, param2:string) : void
        {
            this._voiceObj[param1] = param2;
            return;
        }// end function

        public playVoice(param1:number, param2:string) : void
        {
            let soundName = this._voiceObj[param1];
            let heroName = param2;
             SoundCtrl.I.playZmovieSound(heroName,soundName);
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
        }// end function

    }

