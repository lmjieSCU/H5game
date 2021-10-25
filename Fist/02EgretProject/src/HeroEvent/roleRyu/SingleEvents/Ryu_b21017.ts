class Ryu_b21017 {
	public static addSprite21017(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1, Ryu_b21017.frame1,5, Ryu_b21017.frame5,9, Ryu_b21017.frame9]);
		mc["own_role"] = own_role;
		return;
	}
	public static frame1(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.addSkill("wave_air2_s",mc,_parentRole.Vx,_parentRole.Va);
		//Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
	}
	public static frame5(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.addSkill("wave_air2_s",mc,_parentRole.Vx,_parentRole.Va);
		//Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
	}
	public static frame9(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.addSkill("wave_air2_s",mc,_parentRole.Vx,_parentRole.Va);
		//Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
	}
}