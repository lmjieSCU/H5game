class Mai_sk_s_shuiniao_s {
	public static addSprite7107(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3, Mai_sk_s_shuiniao_s.frame3, 7, Mai_sk_s_shuiniao_s.frame7, 11, Mai_sk_s_shuiniao_s.frame11, 15, Mai_sk_s_shuiniao_s.frame15, 20, Mai_sk_s_shuiniao_s.frame20, 24, Mai_sk_s_shuiniao_s.frame24, 28, Mai_sk_s_shuiniao_s.frame28, 41, Mai_sk_s_shuiniao_s.frame41]);
		return;
	}
	public static frame3(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let a7078 = Mai_a7078.getInstance(_parentRole);
		a7078.s_type = "s1_s";
		a7078.f_time = 20;
		a7078.bgType = "1";
		a7078.roleName = "Mai";
		a7078.faceName = "";
	}


	public static frame7(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
	}


	public static frame11(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
	}


	public static frame15(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
	}


	public static frame20(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
	}


	public static frame24(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
	}


	public static frame28(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a6914.getInstance(_parentRole).name = "mai_shanzi3_s";
	}


	public static frame41(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.toStatus_switch("stand");
	}
}

