class Type3_Iori_role extends Iori_role
{
   function Type3_Iori_role()
   {
      super();
      this.roleMode = 3;
      this.Vwalk = 20;
      this.Vdash = 35;
      this.Vjump_x = 18;
      this.Vjump_y = 28;
      this.Vjump_far = 23;
      this.opp_width2 = 60;
      this.superList = {sk_s1:1,sk_s2:1};
      this.burstList = {sk_s_qianzai1:1,sk_s_qianzai2:1};
      this.superMaxList = {sk_s1_s:1,sk_s2_s:1};
      this.skillSuperMapping = {sk_s1:"sk_s1_s",sk_s2:"sk_s2_s"};
      this.gotoAndStop("begin3");
      this.winPoseArray = ["end3"];
      this.skillObj.s1 = "sk_s1";
      this.skillObj.s2 = "sk_s2";
      this.skillObj.busrt_a = "sk_s_qianzai1";
      this.skillObj.busrt_d = "sk_s_qianzai2";
      this.comboClass.combo2.sk_s1 = 146;
      this.comboClass.combo2.sk_s2 = 60;
      this.comboClass.skill_over.sk_s1 = 158;
      this.comboClass.skill_over.sk_s1_s = 185;
      this.comboClass.skill_over.sk_s2 = 15;
      this.comboClass.skill_over.sk_s2_s = 15;
      this.comboClass.skill_over.sk_s_qianzai1 = 128;
      this.comboClass.skill_over.sk_s_qianzai2 = 54;
   }
   function to_punch()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("punch");
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         _loc2_ = "squatPunch";
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "punch";
      }
      else if(Key.isDown(this.f) && this.dir == 1 || Key.isDown(this.b) && this.dir == -1)
      {
         if(this.pitch())
         {
            return undefined;
         }
         _loc2_ = "punch";
      }
      else
      {
         _loc2_ = "punch";
      }
      this.toSkill(_loc2_);
   }
}
