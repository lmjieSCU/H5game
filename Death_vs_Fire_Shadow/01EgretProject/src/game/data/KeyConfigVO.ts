
    class KeyConfigVO extends Object
    {
        public id:number;
        public up:number;
        public down:number;
        public left:number;
        public right:number;
        public attack:number;
        public jump:number;
        public dash:number;
        public skill:number;
        public superKill:number;
        public beckons:number;
        public selects:any[]=[];

        public KeyConfigVO(param1:number)
        {
            this.id = param1;
            return;
        }// end function

        public setKeys(param1:number, param2:number, param3:number, param4:number, param5:number, param6:number, param7:number, param8:number, param9:number, param10:number) 
        {
            this.up = param1;
            this.down = param2;
            this.left = param3;
            this.right = param4;
            this.attack = param5;
            this.jump = param6;
            this.dash = param7;
            this.skill = param8;
            this.dash = param7;
            this.superKill = param9;
            this.beckons = param10;
            if (!this.selects)
            {
                this.selects = [param5];
            }
            return;
        }// end function

        public toSaveObj() : Object
        {
            var _loc_1 = KyoUtils.itemToObject(this);
            delete _loc_1["id"];
            return _loc_1;
        }// end function

        public readSaveObj(param1:Object) 
        {
            KyoUtils.setValueByObject(this, param1);
            return;
        }// end function

        public clone() : KeyConfigVO
        {
            var _loc_2 = this.toSaveObj();
            var _loc_1 = new KeyConfigVO(this.id);
            _loc_1.readSaveObj(_loc_2);
            return _loc_1;
        }// end function

    }

