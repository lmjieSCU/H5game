class CharSelect.CharSelect_head extends MovieClip
{
   var loadOK = false;
   function CharSelect_head()
   {
      super();
      this.posObj = {up:this.up,down:this.down,left:this.left,right:this.right};
      if(this.active == false)
      {
         this.$name = "";
         this.$role = "none";
         return undefined;
      }
      this.activate();
   }
   function activate()
   {
      this.active = true;
      this.posObj = {up:this.up,down:this.down,left:this.left,right:this.right};
      this.$name = this.name;
      this.$role = this.role;
      this.$type = this.type;
      this.$hasHidden = this.hasHidden;
      if(this.$role == "")
      {
         this.$role = "none";
      }
      this.gotoAndStop(this.$role + this.$type);
   }
}
