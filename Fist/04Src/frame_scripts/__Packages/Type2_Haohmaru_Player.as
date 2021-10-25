class Type2_Haohmaru_Player extends Type2_Haohmaru_role
{
   function Type2_Haohmaru_Player()
   {
      super();
      this.toSkill_temp = this.toSkill;
      this.toAction_temp = this.toAction;
      this.toStatus_temp = this.toStatus;
      this.toSkill = this.noAct;
      this.toAction = this.noAct;
   }
   function init(key, _mode_key)
   {
      this.key_array = key;
      this.mode_key = _mode_key;
      this.setKey();
      this.skill_array = new Array();
      this.skill_mapping = new Array();
      if(this.mode_key == "easy")
      {
         this.skill_code_easy();
      }
      else
      {
         this.skill_code();
      }
      Object.registerClass("KeyControl",role_corn.KeyControl);
      this.attachMovie("KeyControl","newKeyControl",this.getNextHighestDepth());
      this.newKeyControl.init(this.key_array,this.skill_array,this.skill_mapping,this);
   }
   function setKey()
   {
      this.u = this.key_array[0].u;
      this.d = this.key_array[0].d;
      this.f = this.key_array[0].f;
      this.b = this.key_array[0].b;
      this.p = this.key_array[0].p;
      this.k = this.key_array[0].k;
      this.p_l = this.key_array[0].p_l;
      this.k_l = this.key_array[0].k_l;
      this.s = this.key_array[0].s;
      this.s2 = this.key_array[0].s2;
   }
   function skill_code()
   {
      this.skill_array.push([this.d,this.b,this.s]);
      this.skill_mapping.push(["df_o_EX"]);
      this.skill_array.push([this.d,this.f,this.s]);
      this.skill_mapping.push(["db_o_EX"]);
      this.skill_array.push([this.d,this.f,this.d,this.f,this.p]);
      this.skill_mapping.push(["fdbf_p_EX"]);
      this.skill_array.push([this.d,this.f,this.d,this.f,this.k]);
      this.skill_mapping.push(["dfdf_k_EX"]);
      this.skill_array.push([this.f,this.d,this.f,this.p_l]);
      this.skill_mapping.push(["fdf_pl"]);
      this.skill_array.push([this.f,this.d,this.f,this.p]);
      this.skill_mapping.push(["fdf_p"]);
      this.skill_array.push([this.f,this.d,this.f,this.k_l]);
      this.skill_mapping.push(["fdf_kl"]);
      this.skill_array.push([this.f,this.d,this.b,this.k]);
      this.skill_mapping.push(["fdb_k"]);
      this.skill_array.push([this.b,this.d,this.b,this.p]);
      this.skill_mapping.push(["bdb_p_EX"]);
      this.skill_array.push([this.f,this.d,this.f,this.k]);
      this.skill_mapping.push(["fdf_k"]);
      this.skill_array.push([this.d,this.f,this.p_l]);
      this.skill_mapping.push(["df_plEX"]);
      this.skill_array.push([this.d,this.f,this.p]);
      this.skill_mapping.push(["df_pEX"]);
      this.skill_array.push([this.d,this.f,this.k_l]);
      this.skill_mapping.push(["df_klEX"]);
      this.skill_array.push([this.d,this.f,this.k]);
      this.skill_mapping.push(["df_k_EX"]);
   }
   function skill_code_easy()
   {
      this.skill_array.push([this.d,this.f,this.p]);
      this.skill_mapping.push(["fdf_p"]);
      this.skill_array.push([this.d,this.f,this.k]);
      this.skill_mapping.push(["fdf_k"]);
      this.skill_array.push([this.d,this.b,this.p]);
      this.skill_mapping.push(["bdb_p_EX"]);
      this.skill_array.push([this.d,this.b,this.k]);
      this.skill_mapping.push(["fdb_k"]);
      this.skill_array.push([this.f,this.k]);
      this.skill_mapping.push(["df_k_EX"]);
      this.skill_array.push([this.f,this.p_l]);
      this.skill_mapping.push(["df_plEX"]);
      this.skill_array.push([this.f,this.p]);
      this.skill_mapping.push(["df_pEX"]);
   }
}
