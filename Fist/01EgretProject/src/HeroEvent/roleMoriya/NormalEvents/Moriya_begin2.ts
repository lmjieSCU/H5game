class Moriya_begin2{
	public static addSprite3250(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [86,Moriya_begin2.frame86]);
		return;
	}
	public static frame86(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.gotoAndStop("ready");
	}
}


