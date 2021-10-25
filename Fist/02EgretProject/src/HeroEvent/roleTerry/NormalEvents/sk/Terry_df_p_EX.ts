class Terry_df_p_EX{


  public static addSprite8920(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [15,Terry_df_p_EX.frame15,29,Terry_df_p_EX.frame29]);
    return;
  }

    public static frame15(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name="terry_shanzi1"
    }

    public static frame29(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

} 