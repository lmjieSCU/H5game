
    class MessionStageVO 
    {
        public fighters:Array<string> = []; 
        public assister:string;
        public map:string;
        public mession:MessionVO;
        public attackRate:number = 1;
        public hpRate:number = 1;

        public constructor()
        {
            return;
        }// end function

        public getFighters() : any[]
        {
            var _loc_2 = null;
            var _loc_1 = 0;
            var _loc_3 = 0;
            if (this.mession.gameMode == 0)
            {
                _loc_2 = [];
                _loc_2 = _loc_2.concat(this.fighters);
                _loc_1 = 3 - _loc_2.length;
                if (_loc_1 > 0)
                {
                    while (_loc_3 < _loc_1)
                    {
                        
                        _loc_2.push(null);
                        _loc_3++;
                    }
                }
                return _loc_2;
            }
            return (this.fighters);
        }// end function

    }
