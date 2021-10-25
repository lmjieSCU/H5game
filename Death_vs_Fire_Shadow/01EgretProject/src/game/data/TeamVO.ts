
    class TeamVO 
    {
        public id:number;
        public name:string;
        public children:Array<IGameSprite>;

        public constructor(param1:number, param2:string = null)
        {
            this.children = new Array();
            this.id = param1;
            this.name = param2;
            return;
        }// end function

        public getAliveChildren() : any
        {
            var _loc_3 = 0;
            var _loc_2 = null;
            var _loc_1 = new Array();
            while (_loc_3 < this.children.length)
            {
                
                _loc_2 = this.children[_loc_3];
                if (_loc_2 instanceof BaseGameSprite)
                {
                    if ((_loc_2 as BaseGameSprite).isAlive)
                    {
                        _loc_1.push(_loc_2);
                    }
                }
                else
                {
                    _loc_1.push(_loc_2);
                }
                _loc_3++;
            }
            return _loc_1;
        }// end function

        public addChild(param1:IGameSprite) 
        {
            var _loc_2 = this.children.indexOf(param1);
            if (_loc_2 == -1)
            {
                this.children.push(param1);
            }
            return;
        }// end function

        public removeChild(param1:IGameSprite) 
        {
            var _loc_2 = this.children.indexOf(param1);
            if (_loc_2 != -1)
            {
                this.children.splice(_loc_2, 1);
            }
            return;
        }// end function
    }

