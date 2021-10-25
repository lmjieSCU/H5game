
    class MapVO
    {
        public id:string;
        public name:string;
        public fileUrl:string;
        public picUrl:string;
        public bgm:string;

        constructor ()
        {
            return;
        }// end function

        public initByXML(param1:egret.XML) 
        {
            this.id = param1.attributes.id;
            this.name = param1.attributes.name;
            let child1: egret.XML = <egret.XML><any>param1.children[0];
            this.fileUrl = child1.attributes.url;
            let child2: egret.XML = <egret.XML><any>param1.children[1];
            this.picUrl = child2.attributes.url;
            let child3: egret.XML = <egret.XML><any>param1.children[2];
            this.bgm = child3.attributes.url;
            return;
        }// end function

    }

