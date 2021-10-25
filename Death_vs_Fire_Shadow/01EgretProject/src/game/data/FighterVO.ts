

    class FighterVO 
    {
        public id:string;
        public name:string;
        public comicType:number;
        public fileUrl:string;
        public startFrame:number;
        public faceUrl:string;
        public faceBigUrl:string;
        public faceBarUrl:string;
        public contactFriends: any[] = []; 
        public contactEnemys: any[] = []; 
        public says: any[] = []; 
        public bgm:string;
        public bgmRate:number = 1;
        private _cloneKey: any[] = []; 

        public constructor()
        {
            this._cloneKey = ["id", "name", "comicType", "fileUrl", "startFrame", "faceUrl", "contactFriends", "contactEnemys", "says", "faceBigUrl", "faceBarUrl", "bgm", "bgmRate"];
            return;
        }// end function

        public initByXML(param1:egret.XML) 
        {
             this.id = param1.attributes.id;
            this.name = param1.attributes.name;
             this.comicType = Number(param1.attributes.comic_type);
             //
            let child1: egret.XML = <egret.XML><any>param1.children[0];
            this.fileUrl = child1.attributes.url;
            this.startFrame =  Number(child1.attributes.startFrame);
            let child2: egret.XML = <egret.XML><any>param1.children[1];
            this.faceUrl = child2.attributes.url;
            this.faceBigUrl = child2.attributes.big_url;
            if (!child2.attributes.bar_url){
                return;
            }
            this.faceBarUrl = child2.attributes.bar_url;
            //
            let child3: egret.XML = <egret.XML><any>param1.children[3];
            if(!child3){
                return
            }
            for (let key in child3.children){
                let p1: egret.XML = <egret.XML><any>child3.children[Number(key)];
                let word1 : string = p1.attributes.url;
                this.says.push(word1.toString());
            }
            let child4: egret.XML = <egret.XML><any>param1.children[4];
            this.bgm = child4.attributes.url;
            this.bgmRate = Number(child4.attributes.rate) / 100;
           
            return;
        }// end function

        public clone() : FighterVO
        {
            var _loc_1 = new FighterVO();
            for  (let _loc_2 in this._cloneKey)
            {
                
                _loc_1[_loc_2] = this._cloneKey[_loc_2];
            }
            return _loc_1;
        }// end function

    }

