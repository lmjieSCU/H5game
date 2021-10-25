class Terry_df_ph{

  public static addSprite8916(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [10,Terry_df_ph.frame10,28,Terry_df_ph.frame28]);
    return;
  }
    public static frame10(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name="terry_shanzi3"
    }

    public static frame28(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
       _parentRole.toStatus_switch("stand");
    }

} 

