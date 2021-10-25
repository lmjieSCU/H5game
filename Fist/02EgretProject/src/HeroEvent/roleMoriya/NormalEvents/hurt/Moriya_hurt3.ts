class Moriya_hurt3{
	public static addSprite3495(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [20,Moriya_hurt3.frame20]);
		return;
	}
	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}

