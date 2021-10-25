class Type2_Orochi_role extends Orochi_role
{
   function Type2_Orochi_role()
   {
      super();
      this.superList = {sk_s_zhuanpan:1,sk_s_lunhui:1};
      this.burstList = {sk_s_jiguang:1,sk_s_sanhua:1};
      this.superMaxList = {};
      this.skillSuperMapping = {};
      this.gotoAndStop("begin2");
      this.skillObj.s1 = "sk_s_zhuanpan";
      this.skillObj.s2 = "sk_s_lunhui";
      this.skillObj.busrt_a = "sk_s_jiguang";
      this.skillObj.busrt_d = "sk_s_sanhua";
   }
}
