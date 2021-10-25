class Moriya_begin{
	public static addSprite3231(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [104,Moriya_begin.frame104]);
		return;
	}
    public static frame104(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.gotoAndStop("ready");
	}
}

