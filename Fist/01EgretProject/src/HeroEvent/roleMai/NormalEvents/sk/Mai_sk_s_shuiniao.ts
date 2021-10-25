class Mai_sk_s_shuiniao{
	public static addSprite7106(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Mai_sk_s_shuiniao.frame3,7,Mai_sk_s_shuiniao.frame7,11,Mai_sk_s_shuiniao.frame11,19,Mai_sk_s_shuiniao.frame19,24,Mai_sk_s_shuiniao.frame24,41,Mai_sk_s_shuiniao.frame41]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}   
        let a7078=Mai_a7078.getInstance(_parentRole);
        a7078.s_type="s1";
        a7078.f_time=20;
        a7078.bgType="1";
        a7078.roleName="Mai";
        a7078.faceName="";
	}


	public static frame7(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
	}


	public static frame11(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
	}


	public static frame19(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
	}


	public static frame24(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
         Mai_a6914.getInstance(_parentRole).name = "mai_shanzi3";
	}


	public static frame41(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}

