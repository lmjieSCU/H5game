
    class GameRunFighterGroup 
    {
        public fighter1:FighterMain;
        public fighter2:FighterMain;
        public fighter3:FighterMain;
        public fuzhu:Assister;
        public currentFighter:FighterMain;

        public constructor()
        {
            return;
        }// end function

        public getNextFighter() : FighterMain
        {
             var _loc1_ = this.currentFighter;
         if(this.fighter1 !== _loc1_)
         {
            if(this.fighter2 !== _loc1_)
            {
               return null;
            }
            return this.fighter3;
         }
         return this.fighter2;
        }// end function

        public destoryFighters(param1:FighterMain) 
        {
            if (this.fighter1 && this.fighter1 != param1)
            {
                this.disposeFighter(this.fighter1);
            }
            if (this.fighter2 && this.fighter2 != param1)
            {
                this.disposeFighter(this.fighter2);
            }
            if (this.fighter3 && this.fighter3 != param1)
            {
                this.disposeFighter(this.fighter3);
            }
            this.disposeFuzhu();
            return;
        }// end function

        public removeCurrentFighter() 
        {
            this.disposeFighter(this.currentFighter);
            return;
        }// end function

        private  disposeFighter(param1:FighterMain) 
        {
            if(param1 == null)
         {
            return;
         }
         if(param1 == this.currentFighter)
         {
            this.currentFighter = null;
         }
         param1.destory(true);
         var _loc2_ = param1;
         if(this.fighter1 !== _loc2_)
         {
            if(this.fighter2 !== _loc2_)
            {
               if(this.fighter3 === _loc2_)
               {
                  this.fighter3 = null;
               }
            }
            else
            {
               this.fighter2 = null;
            }
            return;
         }
         this.fighter1 = null;
        }// end function

        private  disposeFuzhu() 
        {
            if (this.fuzhu != null)
            {
                this.fuzhu.destory(true);
                this.fuzhu = null;
            }
            return;
        }// end function

    }
