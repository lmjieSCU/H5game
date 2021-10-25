class Kula_hurt1{
	public static addSprite19041(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [13,Kula_hurt1.frame13,14,Kula_hurt1.frame14,19,Kula_hurt1.frame19,20,Kula_hurt1.frame20]);
		return;
	}
	public static frame13(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame14(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}


	public static frame19(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}


}