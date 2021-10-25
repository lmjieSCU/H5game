
    class ConfigVO
    {
        public  key_menu:KeyConfigVO;
        public  key_p1:KeyConfigVO;
        public  key_p2:KeyConfigVO;
        public select_config:SelectStageConfigVO;
        public AI_level:number = 1;
        public fighterHP:number = 1;
        public fightTime:number = 30;
        public quality:string = "medium";
        public keyInputMode:number = 1;
        public extendConfig:IExtendConfig;

        public ConfigVO()
        {
            this.key_menu = new KeyConfigVO(0);
            this.key_p1 = new KeyConfigVO(1);
            this.key_p2 = new KeyConfigVO(2);
            this.select_config = new SelectStageConfigVO();
            this.extendConfig = GameInterface.instance.getConfigExtend();
            this.setDefaultConfig(this.key_menu);
            this.setDefaultConfig(this.key_p1);
            this.setDefaultConfig(this.key_p2);
            return;
        }// end function

        public setDefaultConfig(param1:KeyConfigVO) 
        {
            
            return;
        }// end function

        public toSaveObj() : Object
        {
           
            return null;
        }// end function

        public readSaveObj(param1:Object) 
        {
           
            return;
        }// end function

        public getValueByKey(param1:string)
        {
           
            return null;
        }// end function

        public setValueByKey(param1:string, param2) 
        {
          
            return;
        }// end function

        public applyConfig() 
        {
            
            return;
        }// end function
    }

