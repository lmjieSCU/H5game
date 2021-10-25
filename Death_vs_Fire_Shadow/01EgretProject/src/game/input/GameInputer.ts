

    class GameInputer 
    {
        private static  JUST_DOWN_DELAY:number = 0.1;
        private static _inputMap:any[] = [];
        public static enabled:boolean = true;
        private static _justDownKeys:Object = {};
        private static _justDownDelayKeys:Object = {};
        private static _listenKeys:Object;

        public constructor()
        {
            return;
        }// end 

        public static initlize(param1:egret.Stage) 
        {
            this.initInput();
            this.callVoid("initlize", param1);
            GameRender.add(this.render);
            return;
        }// end 

        public static initInput() 
        {
            var _loc_3 = GameInterface.instance.getGameInput("MENU");
            if (!_loc_3)
            {
                _loc_3 = new Array<IGameInput>(new GameKeyInput());
            }
            var _loc_2 = GameInterface.instance.getGameInput("P1");
            if (!_loc_2)
            {
                _loc_2 = new Array<IGameInput>(new GameKeyInput());
            }
            var _loc_1 = GameInterface.instance.getGameInput("P2");
            if (!_loc_1)
            {
                _loc_1 = new Array<IGameInput>(new GameKeyInput());
            }
            this.setInput("MENU", _loc_3);
            GameInputer.setInput("P1", _loc_2);
            GameInputer.setInput("P2", _loc_1);
            return;
        }// end 

        public static setInput(param1:string, param2:Array<IGameInput>) 
        {
            this._inputMap[param1] = param2;
            return;
        }// end 

        public static updateConfig() 
        {
            if (GameInterface.instance.updateInputConfig())
            {
                return;
            }
            this.setConfig("MENU", GameData.I.config.key_menu);
            this.setConfig("P1", GameData.I.config.key_p1);
            this.setConfig("P2", GameData.I.config.key_p2);
            return;
        }// end 

        private static  setConfig(param1:string, param2:Object) 
        {
            this.call(param1, "setConfig", param2);
            return;
        }// end 

        public static focus() 
        {
            this.callVoid("focus");
            return;
        }// end 

        public static listenKeys(param1:string, param2:any[], param3:number) 
        {
            if (param3 != 1 && param3 != 2)
            {
                return;
            }
            if (!this._listenKeys)
            {
                this._listenKeys = {};
            }
            var _loc_4 = param1 + "_" + param3;
            this._listenKeys[_loc_4] = {type:param1, ids:param2, justDown:param3};
            return;
        }// end 

        public static unListenKeys(param1:string, param2:number) 
        {
            var _loc_3 = param1 + "_" + param2;
            return;
        }// end 

        private static  renderListenKeys() 
        {
            var _loc_3 = 0;
            var _loc_1 = null;
            var _loc_4 = 0;
            if (!this._listenKeys)
            {
                return;
            }
            for  (var _loc_2 in this._listenKeys)
            {
                _loc_1 = this._listenKeys[_loc_2].ids;
                _loc_3 = _loc_1.length;
                _loc_4 = 0;
                while (_loc_4 < _loc_3)
                {
                    
                    this.isDown(this._listenKeys[_loc_2].type, _loc_1[_loc_4], this._listenKeys[_loc_2].justDown, true);
                    _loc_4++;
                }
            }
            return;
        }// end 

        private static  isListenedKey(param1:string, param2:string, param3:number) : boolean
        {
            if (!this._listenKeys)
            {
                return false;
            }
            var _loc_4 = param1 + "_" + param3;
            var _loc_5 = this._listenKeys[_loc_4];
            if (!this._listenKeys[_loc_4] || !_loc_5.ids)
            {
                return false;
            }
            return _loc_5.ids.indexOf(param2) != -1;
        }// end 

        public static render() 
        {
            var _loc2_ = null;
            var _loc1_: boolean = false;
            var _loc3_ = null;
            var _loc8_: number = 0;
            var _loc7_ = this._justDownDelayKeys;
            for (_loc3_ in this._justDownDelayKeys) {
                if (this._justDownDelayKeys[this._justDownDelayKeys[_loc3_]] > 0) {
                    var _loc4_ = this._justDownDelayKeys;
                    var _loc5_ = this._justDownDelayKeys[_loc3_];
                    var _loc6_ = Number(_loc4_[_loc5_]) - 1;
                    _loc4_[_loc5_] = _loc6_;
                }
                else {
                    delete this._justDownDelayKeys[this._justDownDelayKeys[_loc3_]];
                }
            }
            this.renderListenKeys();
            return;
        }// end 

        public static anyKey(param1:number = 0) : boolean
        {
            return this.isDown("MENU", "anyKey", param1);
        }// end 

        public static back(param1:number = 0) : boolean
        {
            return this.isDown("MENU", "back", param1);
        }// end 

        public static select(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "select", param2);
        }// end 

        public static up(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "up", param2);
        }// end 

        public static down(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "down", param2);
        }// end 

        public static left(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "left", param2);
        }// end 

        public static right(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "right", param2);
        }// end 

        public static attack(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "attack", param2);
        }// end 

        public static jump(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "jump", param2);
        }// end 

        public static dash(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "dash", param2);
        }// end 

        public static skill(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "skill", param2);
        }// end 

        public static superSkill(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "superSkill", param2);
        }// end 

        public static special(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "special", param2);
        }// end 

        public static wankai(param1:string, param2:number = 0) : boolean
        {
            return this.isDown(param1, "wankai", param2);
        }// end 

        public static clearInput() 
        {
            this._justDownKeys = {};
            this._justDownDelayKeys = {};
            this.callVoid("clear");
            return;
        }// end 

        private static  isDown(param1:string, param2:string, param3:number = 0, param4:boolean = false) : boolean
        {
            var _loc_5 = param4 ? (false) : (this.isListenedKey(param1, param2, param3));
            if (param3 == 1)
            {
                return this.isJustDown(param1, param2);
            }
            if (param3 == 2)
            {
                return this.isJustDownDelay(param1, param2, _loc_5);
            }
            return this.call(param1, param2);
        }// end 

        private static  isJustDown(param1:string, param2:string) : boolean
        {
            var _loc_3 = param1 + "_" + param2;
            var _loc_4 = this.call(param1, param2);
            if (!this.call(param1, param2))
            {
                this._justDownKeys[_loc_3] = false;
                return false;
            }
            if (this._justDownKeys[_loc_3])
            {
                return false;
            }
            this._justDownKeys[_loc_3] = true;
            return true;
        }// end 

        private static  isJustDownDelay(param1:string, param2:string, param3:boolean) : boolean
        {
            var _loc_5 = this.isJustDown(param1, param2);
            var _loc_4 = param1 + "_" + param2;
            if (_loc_5)
            {
                this._justDownDelayKeys[_loc_4] = 0.1 * MainGame.I.getFPS();
            }
            return this._justDownDelayKeys[_loc_4] && this._justDownDelayKeys[_loc_4] > 0;
        }// end 

        private static  call(param1:string, param2:string, ... args) : boolean
        {
            var _loc_6 = 0;
            var _loc_5 = null;
            if (!this.enabled)
            {
                return false;
            }
            if (!this._inputMap[param1])
            {
                return false;
            }
            args = this._inputMap[param1];
            while (_loc_6 < args.length)
            {
                
                if (args[_loc_6].enabled)
                {
                    _loc_5 = args[_loc_6][param2];
                    if (_loc_5 != null)
                    {
                        if (_loc_5.apply(null, args))
                        {
                            return true;
                        }
                    }
                }
                _loc_6++;
            }
            return false;
        }// end 

        private static  callVoid(param1:string, ... argsv) 
        {
            args = undefined;
            var _loc_5 = 0;
            var _loc_4 = null;
            for  (var args in this._inputMap)
            {
                
                _loc_5 = 0;
                while (_loc_5 < this._inputMap[args].length)
                {
                    
                    if (this._inputMap[args][_loc_5].enabled)
                    {
                        _loc_4 = this._inputMap[args][_loc_5][param1];
                        if (_loc_4 != null)
                        {
                            _loc_4.apply(null, this._inputMap[args]);
                        }
                    }
                    _loc_5++;
                }
            }
            return;
        }// end 

    }
