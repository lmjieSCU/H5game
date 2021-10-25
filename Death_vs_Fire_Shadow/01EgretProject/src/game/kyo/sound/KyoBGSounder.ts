class KyoBGSounder
    {
        public sound:any;
        public playing:boolean;
        private _snd:egret.Sound;
        private _channel:egret.SoundChannel;
        private _volume:number;
        private static _i:KyoBGSounder =null;

        public constructor() 
        {
            return;
        }// end 

        public  get volume() : number
        {
            return this._volume;
        }// end 

        public  set volume(param1:number) 
        {
            this._volume = param1;
            if (this._channel)
            {
                this._channel.volume = param1;
            }
            return;
        }// end 

        public  play(param1:any = null) 
        {
            if (this._snd)
            {
                return;
            }
            if (!param1)
            {
                param1 = this.sound;
            }
            if (param1)
            {
                this.sound = param1;
            }
            else
            {
                //trace("没有可播放的音乐");
                return;
            }
            
            this.playsnd();
            this.playing = true;
            return;
        }// end 

        public  stop() 
        {
            if (this._channel)
            {
                this._channel.stop();
                this._channel = null;
            }
            if (this._snd)
            {
                try
                {
                    this._snd.close();
                }
                catch (e)
                {
                    //trace("KyoBGSounder", e);
                }
                this._snd = null;
            }
            this.playing = false;
            return;
        }// end 

        public  pause() 
        {
            if (this._channel)
            {
                this._channel.stop();
            }
            return;
        }// end 

        public  resume() 
        {
            if (this._channel)
            {
                this._channel = this._snd.play(this._channel.position, Number.MAX_VALUE);
            }
            return;
        }// end 

        public  toogle() 
        {
            if (this.playing)
            {
                this.stop();
            }
            else
            {
                this.play();
            }
            return;
        }// end 

        private  playsnd() 
        {
            this._channel = this._snd.play(0, Number.MAX_VALUE);
            this._channel.volume = this._volume;
            return;
        }// end 

        public static  get I() : KyoBGSounder
        {
            if (!KyoBGSounder._i)
                KyoBGSounder._i =  new KyoBGSounder();
            return this._i;
        }// end 

    }