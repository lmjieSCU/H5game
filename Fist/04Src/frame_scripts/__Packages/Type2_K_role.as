class Type2_K_role extends K_role
{
   function Type2_K_role()
   {
      super();
      this.roleMode = 2;
      this.superList = {sk_s1:1,sk_menghuti:1};
      this.burstList = {sk_liandong:1,sk_xiangdong:1};
      this.superMaxList = {sk_s1_s:1,sk_menghuti_s:1};
      this.skillSuperMapping = {sk_s1:"sk_s1_s",sk_menghuti:"sk_menghuti_s"};
      this.gotoAndStop("begin2");
      this.skillObj.s1 = "sk_s1";
      this.skillObj.s2 = "sk_menghuti";
      this.skillObj.busrt_a = "sk_liandong";
      this.skillObj.busrt_d = "sk_xiangdong";
      this.skillObj.toAir = "sk_fdfp";
      this.comboClass.combo1.sk_dfp = {kick:"sk_dfp_s3",kick_l:"sk_sanduan_2",kick_s2:"sk_sanduan_2"};
      this.comboClass.combo1.sk_sanduan_2 = {kick_l:"sk_sanduan_3",kick:"sk_sanduan_3",kick_s2:"sk_sanduan_3"};
   }
   function sk_dbk()
   {
      if(this.status_1 == "kick_s2")
      {
         this.sk_dbk2();
         return undefined;
      }
      if(this.status_2 == "air")
      {
         this.sk_dbk2();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_3 = "attack";
      this.status_1 = "sk_dbk_2";
      this.gotoAndStop(this.status_1);
   }
   function sk_s1()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_3 = "attack";
      this.status_1 = "sk_s1_2";
      this.gotoAndStop(this.status_1);
   }
   function sk_s1_s()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_3 = "attack";
      this.status_1 = "sk_s1_2_s";
      this.gotoAndStop(this.status_1);
   }
   function sk_sanduan_2()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_3 = "attack";
      this.status_1 = "sk_sanduan_2";
      this.gotoAndStop(this.status_1);
   }
   function sk_sanduan_3()
   {
      if(this.mc.played)
      {
         return false;
      }
      this.mc.played = true;
      this.status_3 = "attack";
      this.status_1 = "sk_sanduan_3";
      this.mc.gotoAndPlay(this.status_1);
   }
}
