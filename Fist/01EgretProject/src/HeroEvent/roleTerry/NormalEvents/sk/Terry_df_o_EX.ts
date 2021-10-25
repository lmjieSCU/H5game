class Terry_df_o_EX{
	public static addSprite9668(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [5,Terry_df_o_EX.frame5,7,Terry_df_o_EX.frame7,8,Terry_df_o_EX.frame8,30,Terry_df_o_EX.frame30,31,Terry_df_o_EX.frame31,51,Terry_df_o_EX.frame51,92,Terry_df_o_EX.frame92,107,Terry_df_o_EX.frame107,108,Terry_df_o_EX.frame108,120,Terry_df_o_EX.frame120,]);
		return;
	}
    public static frame5(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7078=Terry_a7078.getInstance(_parentRole);
        a7078.s_type="s2";
        a7078.f_time=20;
        a7078.bgType="2";
        a7078.roleName="Terry";
        a7078.faceName="";
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_Rock1";
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
        //continueHit = true;
    }

    public static frame30(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_black";
    }

    public static frame31(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    }

    public static frame51(mc: zmovie.ZMovieClip){
       //continueHit = false;
    }

    public static frame92(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
    }

    public static frame107(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
       _parentRole.toStatus_switch("stand");
    }

    public static frame108(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
        //continueHit = false;
    }

    public static frame120(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
