class role_corn.KeyControl extends MovieClip
{
   var multiKey = 0;
   var time_check = 0;
   var time_interval = 200;
   var time_interval3 = 10;
   var multi_interval = 20;
   var toAction_interval = 10;
   var dir = 1;
   function KeyControl()
   {
      super();
   }
   function init(key, skill1, skill2, char)
   {
      this.role = char;
      this.key_array = key;
      this.skill_array = skill1;
      this.skill_mapping = skill2;
      this.setKey();
      this.input_array = new Array();
      Key.addListener(this);
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
   function onKeyDown()
   {
      if(this.isKeyDown && this.downKey == Key.getCode())
      {
         this.isKeyDown = true;
         return false;
      }
      this.isKeyDown = true;
      this.time1 = getTimer();
      this.downKey = Key.getCode();
      if(this.downKey == this.p || this.downKey == this.k || this.downKey == this.s || this.downKey == this.s2 || this.downKey == this.p_l || this.downKey == this.k_l)
      {
         this.keyChain_act(this.downKey);
      }
      else if(this.downKey == this.u || this.downKey == this.d || this.downKey == this.f || this.downKey == this.b)
      {
         this.actionCheck(this.downKey);
         this.keyChain_dir(this.downKey);
      }
   }
   function onKeyUp()
   {
      this.isKeyDown = false;
      this.time2 = getTimer();
      this.upKey = Key.getCode();
      if(this.upKey == this.u || this.upKey == this.d || this.upKey == this.f || this.upKey == this.b)
      {
      }
   }
   function toSkill(skill)
   {
      this.role.toSkill(skill);
   }
   function toAction(action)
   {
      clearInterval(this.Interval_toAction);
      this.role.toAction(action);
   }
   function keyClear()
   {
      this.input_array = [];
      this.time_check = 0;
   }
   function skillCheck(myKey)
   {
      var _loc7_ = undefined;
      var _loc6_ = undefined;
      var _loc4_ = undefined;
      var _loc8_ = undefined;
      if(this.input_array.length == 0)
      {
         this.skill_normal(myKey);
         return undefined;
      }
      var _loc9_ = this.input_array.toString();
      _loc7_ = _loc9_ + "," + myKey;
      if(myKey == this.p_l)
      {
         _loc6_ = _loc9_ + "," + this.p;
      }
      else if(myKey == this.k_l)
      {
         _loc6_ = _loc9_ + "," + this.k;
      }
      _loc8_ = this.skill_mapping.length;
      var _loc2_ = 0;
      while(_loc2_ < _loc8_)
      {
         var _loc3_ = this.skill_mapping[_loc2_];
         if(_loc3_ != undefined)
         {
            _loc4_ = this.skill_array[_loc2_].toString();
            if(_loc7_.indexOf(_loc4_) != -1)
            {
               this.toSkill(_loc3_);
               this.keyClear();
               return undefined;
            }
            if(myKey == this.p_l || myKey == this.k_l)
            {
               if(_loc6_.indexOf(_loc4_) != -1)
               {
                  this.toSkill(_loc3_);
                  this.keyClear();
                  return undefined;
               }
            }
         }
         _loc2_ = _loc2_ + 1;
      }
      this.skill_normal(myKey);
   }
   function actionCheck(myKey)
   {
      var _loc2_ = undefined;
      if(myKey == this.f)
      {
         if(this.dir == 1)
         {
            _loc2_ = "walk_f";
         }
         else
         {
            _loc2_ = "walk_b";
         }
      }
      else if(myKey == this.b)
      {
         if(this.dir == 1)
         {
            _loc2_ = "walk_b";
         }
         else
         {
            _loc2_ = "walk_f";
         }
      }
      else if(myKey == this.u)
      {
         _loc2_ = "jump";
      }
      else if(myKey == this.d)
      {
         _loc2_ = "squat";
      }
      clearInterval(this.Interval_toAction);
      this.Interval_toAction = setInterval(this,"toAction",this.toAction_interval,_loc2_);
   }
   function skill_normal(myKey)
   {
      switch(myKey)
      {
         case this.p:
            this.role._to_punch();
            break;
         case this.k:
            this.role._to_kick();
            break;
         case this.p_l:
            this.role._to_punch_l();
            break;
         case this.k_l:
            this.role._to_kick_l();
            break;
         case this.p_l + this.k_l:
            this.role._to_PK_l();
            break;
         case this.p + this.k:
            this.role._to_PK();
            break;
         case this.s:
            this.role._to_key_s();
            break;
         case this.s2:
            this.role._to_key_s2();
            break;
         case this.p + this.k + this.s2:
            this.role._to_PKS();
      }
      this.keyClear();
   }
   function doubleKey(myKey)
   {
      clearInterval(this.Interval_toAction);
      if(myKey == this.f)
      {
         this.role._to_double_f();
      }
      else if(myKey == this.b)
      {
         this.role._to_double_b();
      }
      else if(myKey == this.d)
      {
         this.role._to_double_d();
      }
   }
   function keyChain_dir(key)
   {
      var _loc2_ = key;
      if(this.dir == -1)
      {
         if(_loc2_ == this.f)
         {
            _loc2_ = this.b;
         }
         else if(_loc2_ == this.b)
         {
            _loc2_ = this.f;
         }
      }
      if(this.time_check == 0)
      {
         this.input_array.push(_loc2_);
         this.time_check = getTimer();
      }
      else
      {
         var _loc4_ = this.time_check;
         var _loc3_ = getTimer();
         this.time_check = _loc3_;
         if(_loc3_ - _loc4_ < this.time_interval && _loc3_ - _loc4_ > this.time_interval3)
         {
            this.input_array.push(_loc2_);
            if(this.input_array[this.input_array.length - 2] == _loc2_)
            {
               clearInterval(this.Interval_toAction);
               this.Interval_toAction = setInterval(this,"doubleKey",this.toAction_interval,_loc2_);
            }
         }
         else
         {
            this.keyClear();
            this.time_check = 0;
            this.keyChain_dir(key);
         }
      }
      if(this.input_array.length > 6)
      {
         this.input_array.shift();
      }
   }
   function keyChain_act(myKey)
   {
      this.multiKey = this.multiKey + myKey;
      clearInterval(this.Interval_sendKey);
      this.Interval_sendKey = setInterval(this,"sendKey",this.multi_interval,this.multiKey);
   }
   function sendKey(myKey)
   {
      var _loc3_ = this.time_check;
      var _loc2_ = getTimer();
      if(_loc2_ - _loc3_ < this.time_interval)
      {
         this.skillCheck(myKey);
      }
      else
      {
         this.skill_normal(myKey);
      }
      clearInterval(this.Interval_sendKey);
      this.multiKey = 0;
   }
}
