class Kula_bengin{
	public static addSprite18748(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [104,Kula_bengin.frame104]);
		return;
	}
	public static frame104(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}