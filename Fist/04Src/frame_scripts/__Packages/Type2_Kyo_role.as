class Type2_Kyo_role extends Kyo_role
{
   function Type2_Kyo_role()
   {
      super();
      this.roleMode = 2;
      this.superList = {sk_s_120:1,sk31:1};
      this.burstList = {sk34:1,sk35:1};
      this.superMaxList = {sk_s_120_s:1,sk31_s:1};
      this.skillSuperMapping = {sk_s_120:"sk_s_120_s",sk31:"sk31_s"};
      this.gotoAndStop("begin2");
      this.skillObj.s1 = "sk_s_120";
      this.skillObj.s2 = "sk31";
      this.skillObj.busrt_a = "sk34";
      this.skillObj.busrt_d = "sk35";
   }
}
