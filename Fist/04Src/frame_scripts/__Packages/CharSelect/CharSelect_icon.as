class CharSelect.CharSelect_icon extends MovieClip
{
   static var selectedNum = 0;
   function CharSelect_icon()
   {
      super();
      Key.addListener(this);
   }
   function init($keyObj, $select_now, $faceMC, $name_mc, $LoaderMC, $modeMC, $fromTxt_mc)
   {
      this.keyObj = $keyObj;
      this.faceMC = $faceMC;
      this.LoaderMC = $LoaderMC;
      this.name_mc = $name_mc;
      this.fromTxt_mc = $fromTxt_mc;
      this.modeMC = $modeMC;
      this.goto($select_now);
      this.showFace(this.select_now.$role);
      this.showName(this.select_now.$name);
      this.onKeyDown = this.char_select;
   }
   function initKey($keyObj)
   {
      this.keyObj = $keyObj;
   }
   function selectNext(next)
   {
      this.goto(next);
      this.showFace(this.select_now.$role);
      this.showName(this.select_now.$role);
      this.selectOK();
   }
   function char_select()
   {
      var _loc2_ = undefined;
      if(Key.isDown(this.keyObj.p) || Key.isDown(this.keyObj.k) || Key.isDown(this.keyObj.p_l) || Key.isDown(this.keyObj.k_l))
      {
         if(this.select_now.canSelect == false)
         {
            return undefined;
         }
         this.selectOK();
         this.onKeyUp = null;
         return undefined;
      }
      if(Key.isDown(this.keyObj.s))
      {
         var name1 = this.select_now.$role;
         var _loc4_ = "";
         if(this.select_now.$hasHidden)
         {
            _loc4_ = name1 + "2";
            if(_loc4_ != "")
            {
               if(this.selectMode == 2)
               {
                  return undefined;
               }
               this.selectMode = 2;
               this.showFace(_loc4_);
               var _loc6_ = function()
               {
                  if(Key.getCode() == this.keyObj.s)
                  {
                     this.showFace(name1);
                     this.selectMode = this.select_now.$type;
                     this.onKeyUp = null;
                  }
               };
               this.onKeyUp = _loc6_;
            }
            return undefined;
         }
         return undefined;
      }
      if(Key.isDown(this.keyObj.u))
      {
         _loc2_ = "up";
      }
      else if(Key.isDown(this.keyObj.d))
      {
         _loc2_ = "down";
      }
      else if(Key.isDown(this.keyObj.f))
      {
         _loc2_ = "right";
      }
      else if(Key.isDown(this.keyObj.b))
      {
         _loc2_ = "left";
      }
      else
      {
         return undefined;
      }
      var _loc3_ = this.getNext(_loc2_);
      if(_loc3_ == "none")
      {
         return undefined;
      }
      if(!(this._parent[_loc3_] instanceof MovieClip))
      {
         return undefined;
      }
      this.onKeyUp = null;
      if(this.select_now.role == "random")
      {
         this.select_now.gotoAndStop(1);
      }
      this.goto(_loc3_);
      if(this.select_now.role == "random")
      {
         this.select_now.play();
         this.showFace("");
         this.showName("none");
         return undefined;
      }
      var _loc5_ = this.select_now.$role;
      if(this.select_now.$type != 1)
      {
         _loc5_ = this.select_now.$role + this.select_now.$type;
      }
      this.showFace(_loc5_);
      this.showName(this.select_now.$role);
   }
   function getNext(dir)
   {
      var _loc2_ = this.select_now.posObj[dir];
      if(_loc2_ != "" && _loc2_ != undefined)
      {
         return _loc2_;
      }
      return "none";
   }
   function goto(next)
   {
      this.select_now = this._parent[next];
      this._x = this.select_now._x;
      this._y = this.select_now._y;
      this.selectMode = this.select_now.$type;
   }
   function showFace(_face)
   {
      var _loc2_ = _face;
      if(_loc2_ == "" || _loc2_ == undefined || this.select_now.canSelect == false)
      {
         _loc2_ = "none";
      }
      this.faceMC.gotoAndPlay(1);
      this.faceMC.head_loader.mc.gotoAndStop(_loc2_);
      _level0.select_snd.start();
   }
   function showName(name)
   {
      if(name == "" || name == undefined || this.select_now.canSelect == false)
      {
         this.name_mc.gotoAndStop("none");
         this.fromTxt_mc.gotoAndStop("none");
         return undefined;
      }
      this.name_mc.gotoAndStop(name);
      var _loc3_ = undefined;
      if(name == "Ryu")
      {
         _loc3_ = "sf";
      }
      else if(name == "Chunli")
      {
         _loc3_ = "sf";
      }
      else if(name == "Moriya")
      {
         _loc3_ = "lb";
      }
      else if(name == "Haohmaru")
      {
         _loc3_ = "sh";
      }
      else
      {
         _loc3_ = "kof";
      }
      this.fromTxt_mc.gotoAndStop(_loc3_);
   }
   function selectOK()
   {
      if(!this.select_now.active && _level0.P2_type != "cpu")
      {
         return undefined;
      }
      if(!this.select_now.loadOK)
      {
         return undefined;
      }
      if(this.select_now.role == "random")
      {
         if(!(this._parent.p1.select_now.role == "random" && this._parent.p1.selectRole == undefined && (this._parent.p2.select_now.role == "random" && this._parent.p2.selectRole == undefined)))
         {
            this.select_now.stop();
         }
         this.showFace(this.select_now.$role);
         this.showName(this.select_now.$role);
      }
      this.selectRole = this.select_now.$role;
      this.play();
      _level0.ok_snd.start();
      this.selectOK_char();
      this.onKeyDown = null;
   }
}
