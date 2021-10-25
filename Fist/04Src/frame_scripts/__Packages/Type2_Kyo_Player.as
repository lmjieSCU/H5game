class Type2_Kyo_Player extends Type2_Kyo_role
{
   function Type2_Kyo_Player()
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
      this.skill_array.push([this.d,this.f,this.s]);
      this.skill_mapping.push(["sk34"]);
      this.skill_array.push([this.d,this.b,this.s]);
      this.skill_mapping.push(["sk35"]);
      this.skill_array.push([this.d,this.f,this.d,this.f,this.p]);
      this.skill_mapping.push(["sk_s_120"]);
      this.skill_array.push([this.d,this.b,this.d,this.f,this.p]);
      this.skill_mapping.push(["sk31"]);
      this.skill_array.push([this.d,this.b,this.f,this.p]);
      this.skill_mapping.push(["sk31"]);
      this.skill_array.push([this.d,this.b,this.p_l]);
      this.skill_mapping.push(["sk43_l"]);
      this.skill_array.push([this.d,this.b,this.p]);
      this.skill_mapping.push(["sk43"]);
      this.skill_array.push([this.f,this.d,this.f,this.p]);
      this.skill_mapping.push(["sk0"]);
      this.skill_array.push([this.d,this.f,this.p]);
      this.skill_mapping.push(["sk30"]);
      this.skill_array.push([this.f,this.d,this.b,this.k]);
      this.skill_mapping.push(["sk_canggui"]);
      this.skill_array.push([this.d,this.f,this.k]);
      this.skill_mapping.push(["sk1"]);
      this.skill_array.push([this.d,this.b,this.k_l]);
      this.skill_mapping.push(["sk_longche_l"]);
      this.skill_array.push([this.d,this.b,this.k]);
      this.skill_mapping.push(["sk_longche"]);
   }
   function skill_code_easy()
   {
      this.skill_array.push([this.d,this.f,this.p]);
      this.skill_mapping.push(["sk0"]);
      this.skill_array.push([this.f,this.p]);
      this.skill_mapping.push(["sk30"]);
      this.skill_array.push([this.b,this.p_l]);
      this.skill_mapping.push(["sk43_l"]);
      this.skill_array.push([this.b,this.p]);
      this.skill_mapping.push(["sk43"]);
      this.skill_array.push([this.d,this.b,this.k]);
      this.skill_mapping.push(["sk_canggui"]);
      this.skill_array.push([this.f,this.k_l]);
      this.skill_mapping.push(["kick2"]);
      this.skill_array.push([this.f,this.k]);
      this.skill_mapping.push(["sk1"]);
      this.skill_array.push([this.b,this.k_l]);
      this.skill_mapping.push(["sk_longche_l"]);
      this.skill_array.push([this.b,this.k]);
      this.skill_mapping.push(["sk_longche"]);
   }
}
