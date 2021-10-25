
    class MessionVO 
    {
        public comicType:number;
        public gameMode:number;
        public stageList:Array<MessionStageVO> = [];

        public constructor()
        {
            return;
        }// end function

        public initByXML(param1:egret.XML) 
        {
            this.comicType = Number(param1.attributes.comicType);
            this.gameMode = Number(param1.attributes.gameMode);
            for (let key in param1.children) {
                let val: egret.XML = <egret.XML><any>param1.children[Number(key)];
                let fighter:string = val.attributes.fighter;
                let assister:string = val.attributes.assister;
                let map:string = val.attributes.map;
                let  _loc_3 = new MessionStageVO();
                _loc_3.fighters = fighter.split(",");
                _loc_3.map = map;
                _loc_3.assister = assister;
                //
                let attackRate2:string = val.attributes.attackRate;
                let hpRate2:string = val.attributes.hpRate;
                let attackRate:number = Number(val.attributes.attackRate);
                let hpRate:number = Number(val.attributes.hpRate);
                if (attackRate2 == null){
                    attackRate = 0;
                }else{
                    attackRate = Number(attackRate2);
                }
                if (attackRate2 == null){
                    attackRate = 0;
                }else{
                    attackRate = Number(attackRate2);
                }

                if (attackRate == NaN){
                    attackRate = 0;
                }
                if (hpRate == NaN){
                    hpRate = 0;
                }
                 _loc_3.hpRate = hpRate > 0 ? (hpRate) : (1);
                _loc_3.attackRate = attackRate > 0 ? (attackRate) : (1);
                _loc_3.mession = this;
                this.stageList.push(_loc_3);
            }
            return;
        }// end function

    }

