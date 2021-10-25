class Chunli_sk_s_bo2{
	public static addSprite15316(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_sk_s_bo2.frame3,4,Chunli_sk_s_bo2.frame4,12,Chunli_sk_s_bo2.frame12,24,Chunli_sk_s_bo2.frame24,32,Chunli_sk_s_bo2.frame32]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let a4178=Chunli_a4178.getInstance(_parentRole);
        a4178.s_type="s1";
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
        Chunli_a4196.getInstance(_parentRole).name = "chunlii_powerball1";
	}


	public static frame24(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        //continueHit = false;
	}


	public static frame32(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}
