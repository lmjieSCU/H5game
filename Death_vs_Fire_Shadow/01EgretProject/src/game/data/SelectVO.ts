
    class SelectVO
    {
        public fighter1:string;
        public fighter2:string;
        public fighter3:string;
        public fuzhu:string;

        public constructor()
        {
            return;
        }// end function

        public getSelectFighters() : any
        {
            var _loc_1 = [];
            if (this.fighter1)
            {
                _loc_1.push(this.fighter1);
            }
            if (this.fighter2)
            {
                _loc_1.push(this.fighter2);
            }
            if (this.fighter3)
            {
                _loc_1.push(this.fighter3);
            }
            return _loc_1;
        }// end function

        public tostring2() : string
        {
            return JSON.stringify({select:{fighter1:this.fighter1, fighter2:this.fighter2, fighter3:this.fighter3, fuzhu:this.fuzhu}});
        }// end function

    }

