
    class GameKeyInput implements IGameInput
    {
        private _config:KeyConfigVO;
        private _downKeys:Object;
        private _enabled:boolean = true;

        public constructor()
        {
            this._downKeys = {};
            return;
        }// end 

        public initlize(param1:egret.Stage) 
        {
            KeyBoarder.initlize(param1);
            KeyBoarder.listen(this.keyBoardHandler);
            return;
        }// end 

        public get enabled() : boolean
        {
            return this._enabled;
        }// end 

        public set enabled(param1:boolean) 
        {
            this._enabled = param1;
            return;
        }// end 

        public setConfig(param1:Object) 
        {
            this._config = param1 as KeyConfigVO;
            return;
        }// end 

        public focus() 
        {
            KeyBoarder.focus();
            return;
        }// end 

        public anyKey() : boolean
        {
           var _loc3_:number = 0;
         var _loc2_ = this._downKeys;
         for(var _loc1_ in this._downKeys)
         {
            if(this._downKeys[this._downKeys[_loc1_]] == 1)
            {
               return true;
            }
         }
         return false;
        }// end 

        public back() : boolean
        {
            return this.isDown(27);
        }// end 

        public select() : boolean
        {
            for  (var _loc_1 in this._config.selects)
            {
                
                if (this.isDown(this._config.selects[_loc_1]))
                {
                    return true;
                }
            }
            return false;
        }// end 

        public up() : boolean
        {
            return this.isDown(this._config.up);
        }// end 

        public down() : boolean
        {
            return this.isDown(this._config.down);
        }// end 

        public left() : boolean
        {
            return this.isDown(this._config.left);
        }// end 

        public right() : boolean
        {
            return this.isDown(this._config.right);
        }// end 

        public attack() : boolean
        {
            return this.isDown(this._config.attack);
        }// end 

        public jump() : boolean
        {
            return this.isDown(this._config.jump);
        }// end 

        public dash() : boolean
        {
            return this.isDown(this._config.dash);
        }// end 

        public skill() : boolean
        {
            return this.isDown(this._config.skill);
        }// end 

        public superSkill() : boolean
        {
            return this.isDown(this._config.superKill);
        }// end 

        public special() : boolean
        {
            return this.isDown(this._config.beckons);
        }// end 

        public wankai() : boolean
        {
            return this.isDown(this._config.attack) && this.isDown(this._config.jump);
        }// end 

        public clear() 
        {
            this._downKeys = {};
            return;
        }// end 

        private  keyBoardHandler(param1:KeyboardEvent) 
        {
            var _loc2_ = param1.type;
            if ("keyDown" !== _loc2_) {
                if ("keyUp" === _loc2_) {
                    this._downKeys[param1.keyCode] = 0;
                }
            }
            else {
                this._downKeys[param1.keyCode] = 1;
            }
        }// end 

        private  isDown(param1:number) : boolean
        {
            return this._downKeys[param1] == 1;
        }// end 

    }

