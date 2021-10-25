class Moriya_hurt1{
	public static addSprite3476(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [12,Moriya_hurt1.frame12,13,Moriya_hurt1.frame13,19,Moriya_hurt1.frame19,20,Moriya_hurt1.frame20]);
		return;
	}
	public static frame12(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame13(mc:zmovie.ZMovieClip){
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


