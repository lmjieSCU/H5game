class Moriya_hurt2{
	public static addSprite3485(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [13,Moriya_hurt2.frame13,14,Moriya_hurt2.frame14,19,Moriya_hurt2.frame19,20,Moriya_hurt2.frame20,21,Moriya_hurt2.frame21,22,Moriya_hurt2.frame22]);
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


	public static frame21(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}


	public static frame22(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.prevFrame();
	}
}

