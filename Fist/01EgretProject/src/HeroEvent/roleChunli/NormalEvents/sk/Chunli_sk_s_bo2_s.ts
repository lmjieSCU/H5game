class Chunli_sk_s_bo2_s{
	public static addSprite15317(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_sk_s_bo2_s.frame3,4,Chunli_sk_s_bo2_s.frame4,12,Chunli_sk_s_bo2_s.frame12,31,Chunli_sk_s_bo2_s.frame31,52,Chunli_sk_s_bo2_s.frame52]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        let a4178=Chunli_a4178.getInstance(_parentRole);
        a4178.s_type="s1_s";
        a4178.f_time=20;
        a4178.bgType="1";
        a4178.roleName="Chunli";
        a4178.faceName="";
	}


	public static frame4(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        //continueHit = true;
	}


	public static frame12(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        Chunli_a4196.getInstance(_parentRole).name = "chunlii_powerball";
	}


	public static frame31(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        //continueHit = false;
	}


	public static frame52(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}
