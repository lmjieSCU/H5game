class Type2_Mai_role extends Mai_role
{
   function Type2_Mai_role()
   {
      super();
      this.roleMode = 2;
      this.superList = {sk_s_fenghuang:1,sk_s_hualan:1};
      this.burstList = {sk_s_heti2:1,sk_s_fenshen:1};
      this.superMaxList = {sk_s_fenghuang_s:1,sk_s_hualan_s:1};
      this.skillSuperMapping = {sk_s_hualan:"sk_s_hualan_s",sk_s_fenghuang:"sk_s_fenghuang_s"};
      this.skillObj.s1 = "sk_s_fenghuang";
      this.skillObj.s2 = "sk_s_hualan";
      this.skillObj.busrt_a = "sk_s_heti2";
      this.skillObj.busrt_d = "sk_s_fenshen";
      this.skillObj.toAir = "sk_bailu2";
   }
   function sk_luan1()
   {
      if(this.status_2 == "air")
      {
         this.sk_feishu();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_luan1";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
}
