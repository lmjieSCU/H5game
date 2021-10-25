class TeamMap 
    {
        public  teams:Array<TeamVO>;    //teams[0,1,2,3...] = TeamVO
        private  _teamObj:any;      //_teamObj[id] = TeamVO

        public constructor()
        {
            this.teams = new Array<TeamVO>();
            this._teamObj = new Array();
            return;
        }// end 

        public  clear() : void
        {
            this._teamObj = {};
            return;
        }// end 

        public  getTeam(param1:number) : TeamVO
        {
            return this._teamObj[param1];
        }// end 

        public  getOtherTeams(param1:number) :  Array<TeamVO>
        {
            let _loc_2  = new  Array<TeamVO>();
            for  (var _loc_3 in this._teamObj)
            {
                
                if (this._teamObj[_loc_3].id != param1)
                {
                    _loc_2.push(this._teamObj[_loc_3]);
                }
            }
            return _loc_2;
        }// end 

        public  add(param1:TeamVO) : void
        {
            this._teamObj[param1.id] = param1;
            this.refreshTeams();
            return;
        }// end 

        public  remove(param1:TeamVO) : void
        {
            this._teamObj.splice(param1.id, 1);
            this.refreshTeams();
            return;
        }// end 

        private  refreshTeams() : void
        {
            this.teams  = new Array<TeamVO>();
            for  (let _loc_1 in this._teamObj)
            {
                    this.teams.push(this._teamObj[_loc_1]);
            }
            return;
        }// end 

    }
