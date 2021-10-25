class Terry_df_pl{
	public static addSprite8919(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [14,Terry_df_pl.frame14,28,Terry_df_pl.frame28]);
		return;
	}
    public static frame14(mc: zmovie.ZMovieClip){
			  let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
				Terry_a6914.getInstance(_parentRole).name = "terry_shanzi2";
	}

  public static frame28(mc: zmovie.ZMovieClip){
		    let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
				_parentRole.toStatus_switch("stand");
	}
}