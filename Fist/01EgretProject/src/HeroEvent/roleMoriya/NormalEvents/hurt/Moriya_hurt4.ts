class Moriya_hurt4{
	public static addSprite3504(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [20,Moriya_hurt4.frame20]);
		return;
	}
	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.gotoAndStop("s2");
	}
}

